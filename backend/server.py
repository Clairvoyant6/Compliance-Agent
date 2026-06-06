"""
FastAPI Backend — ComplianceIQ

Persistence: SQLAlchemy (SQLite default, Postgres-ready via DATABASE_URL).
Auth: single-user MVP (identified by email in NotificationPref).
"""

from __future__ import annotations

import csv
import io
import json
import os
import sys
import uuid
from contextlib import asynccontextmanager
from datetime import date, datetime
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
load_dotenv()

from fastapi import Body, Depends, FastAPI, File, HTTPException, Query, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel
from sqlalchemy.orm import Session

# Ensure backend dir is on path for module imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from modules.input_handler import load_csv, load_json
from modules.data_parser import parse_transactions, parse_invoice, detect_source
from modules.categorizer import categorize
from modules.compliance_logic import (
    calculate_gst,
    calculate_net_gst,
    get_deadlines,
    compliance_health_check,
)
from agent.pipeline import run_agent_pipeline
from agent.llm_wrapper import (
    call_llm_text,
    available_providers,
    clear_cache as clear_llm_cache,
)

from db import SessionLocal, get_db, init_db
from models import AuditLog, Dataset, Filing, NotificationPref
from notifications import (
    build_daily_digest_html,
    broadcast_push,
    send_email,
)
from scheduler import start_scheduler, stop_scheduler
from exports import report_to_csv, report_to_pdf, transactions_to_csv


# ─── App lifecycle ────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(_app: FastAPI):
    init_db()
    _ensure_sample_dataset()
    start_scheduler()
    try:
        yield
    finally:
        stop_scheduler()


app = FastAPI(
    title="ComplianceIQ API",
    description="AI-Powered GST Compliance Assistant for Indian SMBs",
    version="2.0.0",
    lifespan=lifespan,
)

# CORS — configurable via env for prod, permissive for dev
_cors_raw = os.getenv("CORS_ORIGINS", "*")
cors_origins = ["*"] if _cors_raw.strip() == "*" else [o.strip() for o in _cors_raw.split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─── In-memory runtime config (persisted via env/DB on restart) ───────────────

BUSINESS_CONTEXT: dict = {
    "name": "MyBusiness Solutions Pvt Ltd",
    "gstin": "29AABCM1234F1ZR",
    "type": "Service Provider",
    "state": "Karnataka",
    "filing_frequency": "Monthly",
    "period": "March 2024",
}

LLM_CONFIG: dict = {
    "provider": os.getenv("LLM_PROVIDER", "gemini"),
    "api_key": os.getenv("LLM_API_KEY", ""),
    "model": os.getenv("LLM_MODEL", ""),
}


# ─── Dataset processing ───────────────────────────────────────────────────────

def _process_and_persist(db: Session, ds: Dataset) -> None:
    """Run the full pipeline on a dataset row and write results back to DB."""
    raw_txns = ds.raw or []
    invoice_raw = ds.invoice_raw or {}

    source = detect_source(raw_txns)
    transactions = parse_transactions(raw_txns)
    invoice = parse_invoice(invoice_raw) if invoice_raw else {}
    categorized = categorize(transactions)

    output_tax = calculate_gst(categorized["output_tax_transactions"], "output")
    input_tax = calculate_gst(categorized["input_tax_transactions"], "input")
    net_gst = calculate_net_gst(output_tax, input_tax)

    ref_date = date(2024, 3, 31)
    try:
        if transactions:
            max_date = max(t["date"] for t in transactions)
            if isinstance(max_date, date):
                ref_date = max_date
    except Exception:
        pass

    deadlines = get_deadlines(reference_date=ref_date)
    health = compliance_health_check(categorized, net_gst, deadlines)

    financial_summary = {
        "source": source,
        "period": BUSINESS_CONTEXT.get("period", ""),
        "total_income": sum(t["amount"] for t in categorized["income"]),
        "total_expense": sum(t["amount"] for t in categorized["expense"]),
        "taxable_income": sum(t["amount"] for t in categorized["taxable_income"]),
        "taxable_expense": sum(t["amount"] for t in categorized["taxable_expense"]),
        "output_tax": output_tax,
        "input_tax": input_tax,
        "net_gst": net_gst,
        "health_check": health,
        "invoice_sample": invoice,
    }

    ds.source = source
    ds.processed = True
    ds.processed_at = datetime.utcnow()
    ds.processed_data = _serialize({
        "transactions": transactions,
        "categorized": categorized,
        "output_tax": output_tax,
        "input_tax": input_tax,
        "net_gst": net_gst,
        "deadlines": deadlines,
        "health": health,
        "financial_summary": financial_summary,
        "invoice": invoice,
    })
    db.add(ds)
    db.commit()


def _ensure_sample_dataset() -> None:
    """Seed the sample dataset on first boot."""
    with SessionLocal() as db:
        if db.query(Dataset).filter(Dataset.id == "sample").first():
            return
        data_dir = os.path.join(os.path.dirname(__file__), "data")
        csv_path = os.path.join(data_dir, "transactions.csv")
        invoice_path = os.path.join(data_dir, "sample_invoice.json")
        if not os.path.exists(csv_path):
            print("[server] no sample CSV found — skipping seed")
            return
        try:
            raw_txns = load_csv(csv_path)
            invoice_data = load_json(invoice_path) if os.path.exists(invoice_path) else {}
            ds = Dataset(
                id="sample",
                name="Sample Dataset (March 2024)",
                filename="transactions.csv",
                rows=len(raw_txns),
                raw=raw_txns,
                invoice_raw=invoice_data,
                period="March 2024",
            )
            db.add(ds)
            db.commit()
            db.refresh(ds)
            _process_and_persist(db, ds)
            print(f"[server] seeded sample dataset ({len(raw_txns)} transactions)")
        except Exception as e:
            print(f"[server] sample seed failed: {e}")


# ─── Pydantic schemas ─────────────────────────────────────────────────────────

class BusinessContextIn(BaseModel):
    name: str = "MyBusiness Solutions Pvt Ltd"
    gstin: str = "29AABCM1234F1ZR"
    type: str = "Service Provider"
    state: str = "Karnataka"
    filing_frequency: str = "Monthly"
    period: str = "March 2024"


class LLMConfigIn(BaseModel):
    provider: str = "mock"
    api_key: str = ""
    model: Optional[str] = None


class ChatMessageIn(BaseModel):
    message: str
    dataset_id: Optional[str] = "sample"


class InlineDatasetIn(BaseModel):
    name: str
    data: str
    format: str = "csv"


class NotificationPrefIn(BaseModel):
    email: str
    deadline_reminders: bool = True
    filing_alerts: bool = True
    mismatch_alerts: bool = True
    ai_insights: bool = True
    email_alerts: bool = True
    daily_digest: bool = False


class PushSubscribeIn(BaseModel):
    email: str
    subscription: dict


class TestEmailIn(BaseModel):
    to: str


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _serialize(obj):
    if isinstance(obj, (date, datetime)):
        return obj.isoformat()
    if isinstance(obj, set):
        return list(obj)
    if isinstance(obj, dict):
        return {k: _serialize(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_serialize(i) for i in obj]
    return obj


def _audit(db: Session, action: str, target: str = "", dataset_id: Optional[str] = None,
           actor: str = "system", meta: Optional[dict] = None) -> None:
    db.add(AuditLog(
        actor=actor, action=action, target=target,
        dataset_id=dataset_id, meta=meta or {},
    ))
    db.commit()


def _apply_llm_env(config: dict) -> None:
    os.environ["LLM_PROVIDER"] = config.get("provider", "mock")
    if config.get("api_key"):
        os.environ["LLM_API_KEY"] = config["api_key"]
    if config.get("model"):
        os.environ["LLM_MODEL"] = config["model"]


# ─── Health & provider info ───────────────────────────────────────────────────

@app.get("/api/health")
def health_check(db: Session = Depends(get_db)):
    return {
        "status": "ok",
        "datasets": db.query(Dataset).count(),
        "llm_provider": LLM_CONFIG["provider"],
        "version": "2.0.0",
    }


@app.get("/api/llm-providers")
def list_llm_providers():
    """Metadata for the frontend LLM picker (supported providers, free tier, etc.)."""
    return available_providers()


# ─── Datasets ─────────────────────────────────────────────────────────────────

@app.get("/api/datasets")
def list_datasets(db: Session = Depends(get_db)):
    rows = db.query(Dataset).order_by(Dataset.uploaded_at.desc()).all()
    return [{
        "id": r.id, "name": r.name, "filename": r.filename,
        "rows": r.rows, "processed": r.processed,
        "uploaded_at": r.uploaded_at.isoformat() if r.uploaded_at else "",
        "processed_at": r.processed_at.isoformat() if r.processed_at else "",
    } for r in rows]


@app.post("/api/upload")
async def upload_dataset(file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.filename:
        raise HTTPException(400, "No filename provided")
    ext = Path(file.filename).suffix.lower()
    if ext not in (".csv", ".json"):
        raise HTTPException(400, f"Unsupported file format: {ext}. Use .csv or .json")

    content = (await file.read()).decode("utf-8")
    dataset_id = str(uuid.uuid4())[:8]

    if ext == ".csv":
        raw_data = [dict(row) for row in csv.DictReader(io.StringIO(content))]
    else:
        raw_data = json.loads(content)
        if isinstance(raw_data, dict):
            raw_data = [raw_data]

    ds = Dataset(
        id=dataset_id, name=file.filename, filename=file.filename,
        rows=len(raw_data), raw=raw_data, invoice_raw={},
    )
    db.add(ds)
    db.commit()
    db.refresh(ds)
    _audit(db, "upload", dataset_id, dataset_id, meta={"rows": len(raw_data)})

    try:
        _process_and_persist(db, ds)
    except Exception as e:
        print(f"[server] processing error: {e}")

    return {"id": ds.id, "name": ds.name, "rows": ds.rows, "processed": ds.processed}


@app.post("/api/datasets")
def add_inline_dataset(data: InlineDatasetIn, db: Session = Depends(get_db)):
    dataset_id = str(uuid.uuid4())[:8]
    if data.format == "csv":
        raw_data = [dict(row) for row in csv.DictReader(io.StringIO(data.data))]
    else:
        raw_data = json.loads(data.data)
        if isinstance(raw_data, dict):
            raw_data = [raw_data]

    ds = Dataset(
        id=dataset_id, name=data.name, filename=f"{data.name}.{data.format}",
        rows=len(raw_data), raw=raw_data, invoice_raw={},
    )
    db.add(ds)
    db.commit()
    db.refresh(ds)
    _audit(db, "upload_inline", dataset_id, dataset_id, meta={"rows": len(raw_data)})

    try:
        _process_and_persist(db, ds)
    except Exception as e:
        print(f"[server] processing error: {e}")

    return {"id": ds.id, "name": ds.name, "rows": ds.rows, "processed": ds.processed}


@app.delete("/api/datasets/{dataset_id}")
def delete_dataset(dataset_id: str, db: Session = Depends(get_db)):
    ds = db.query(Dataset).get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    db.delete(ds)
    db.commit()
    _audit(db, "delete", dataset_id)
    return {"status": "deleted", "id": dataset_id}


# ─── Processing ───────────────────────────────────────────────────────────────

@app.post("/api/process/{dataset_id}")
def process_dataset(dataset_id: str, db: Session = Depends(get_db)):
    ds = db.query(Dataset).get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    _process_and_persist(db, ds)
    _audit(db, "process", dataset_id, dataset_id)
    data = ds.processed_data or {}
    return _serialize({
        "id": dataset_id,
        "processed": ds.processed,
        "source": ds.source,
        "transaction_count": len(data.get("transactions", [])),
        "net_gst": data.get("net_gst"),
        "health": data.get("health"),
    })


def _require_processed(ds: Optional[Dataset]) -> Dataset:
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.processed:
        raise HTTPException(400, "Dataset not processed yet. Call POST /api/process/{id} first.")
    return ds


@app.get("/api/transactions/{dataset_id}")
def get_transactions(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    data = ds.processed_data or {}
    categorized = data.get("categorized", {})
    transactions = data.get("transactions", [])
    return _serialize({
        "dataset_id": dataset_id,
        "source": ds.source,
        "total": len(transactions),
        "transactions": transactions,
        "summary": {
            "income_count": len(categorized.get("income", [])),
            "expense_count": len(categorized.get("expense", [])),
            "taxable_income_count": len(categorized.get("taxable_income", [])),
            "taxable_expense_count": len(categorized.get("taxable_expense", [])),
            "total_income": sum(t["amount"] for t in categorized.get("income", [])),
            "total_expense": sum(t["amount"] for t in categorized.get("expense", [])),
        },
    })


@app.get("/api/gst/{dataset_id}")
def get_gst_summary(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    data = ds.processed_data or {}
    return _serialize({
        "dataset_id": dataset_id,
        "output_tax": data.get("output_tax"),
        "input_tax": data.get("input_tax"),
        "net_gst": data.get("net_gst"),
    })


@app.get("/api/deadlines")
def get_deadlines_endpoint(reference_date: Optional[str] = None):
    ref = None
    if reference_date:
        try:
            ref = datetime.strptime(reference_date, "%Y-%m-%d").date()
        except ValueError:
            raise HTTPException(400, "Invalid date format. Use YYYY-MM-DD.")
    return _serialize(get_deadlines(reference_date=ref))


@app.get("/api/health-check/{dataset_id}")
def get_health_check(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    return _serialize((ds.processed_data or {}).get("health", {}))


# ─── AI Agent ─────────────────────────────────────────────────────────────────

@app.post("/api/agent/chat")
def agent_chat(msg: ChatMessageIn, db: Session = Depends(get_db)):
    dataset_id = msg.dataset_id or "sample"
    ds = db.query(Dataset).get(dataset_id)
    _apply_llm_env(LLM_CONFIG)

    context = ""
    if ds and ds.processed:
        data = ds.processed_data or {}
        net_gst = data.get("net_gst", {}) or {}
        health = data.get("health", {}) or {}
        net_payable = net_gst.get("net_gst_payable", {}) or {}
        context = f"""Current Data Context:
- Business: {BUSINESS_CONTEXT.get('name', 'N/A')}
- Period: {BUSINESS_CONTEXT.get('period', 'N/A')}
- Net GST Payable: ₹{net_payable.get('amount', 0):,.2f} ({net_payable.get('status', 'N/A')})
- Output Tax: ₹{(net_gst.get('output_tax') or {}).get('amount', 0):,.2f}
- Input Tax Credit: ₹{(net_gst.get('input_tax_credit') or {}).get('amount', 0):,.2f}
- Health Score: {health.get('score', 'N/A')}/100
- Status: {health.get('overall_status', 'N/A')}
- Issues: {', '.join(health.get('issues', []) or []) or 'None'}
- Warnings: {', '.join(health.get('warnings', []) or []) or 'None'}

User Question: {msg.message}
"""
    else:
        context = f"User Question: {msg.message}\nNote: No dataset loaded. Provide general GST compliance guidance."

    prompt = (
        "You are a GST compliance assistant for Indian SMBs.\n"
        "Answer the user's question based on the data context provided.\n"
        "Be concise, specific, and actionable. Use bullet points.\n\n"
        f"{context}\n\n"
        "Respond in plain text with markdown formatting (bold, bullet points). Do NOT return JSON.\n"
    )

    if LLM_CONFIG.get("provider", "mock") == "mock":
        response = _mock_chat_response(msg.message, ds)
    else:
        response = call_llm_text(prompt, step_name="chat")

    _audit(db, "agent_chat", dataset_id, dataset_id, meta={"len": len(msg.message)})
    return {
        "response": response,
        "provider": LLM_CONFIG.get("provider", "mock"),
        "dataset_id": dataset_id,
    }


def _mock_chat_response(message: str, ds: Optional[Dataset] = None) -> str:
    lower = message.lower()
    if ds and ds.processed:
        data = ds.processed_data or {}
        net_gst = data.get("net_gst", {}) or {}
        health = data.get("health", {}) or {}
        categorized = data.get("categorized", {}) or {}
        net_payable = net_gst.get("net_gst_payable", {}) or {}
        output_tax = net_gst.get("output_tax", {}) or {}
        input_tax = net_gst.get("input_tax_credit", {}) or {}

        if any(k in lower for k in ["gst", "tax", "payable", "liability"]):
            return (
                f"**GST Summary for {BUSINESS_CONTEXT.get('period', 'current period')}:**\n\n"
                f"• Output Tax (collected): ₹{output_tax.get('amount', 0):,.2f}\n"
                f"• Input Tax Credit (ITC): ₹{input_tax.get('amount', 0):,.2f}\n"
                f"• Net GST Payable: ₹{net_payable.get('amount', 0):,.2f} [{net_payable.get('status', '')}]\n\n"
                f"**Split:** CGST ₹{net_payable.get('cgst_offset', 0):,.2f} · "
                f"SGST ₹{net_payable.get('sgst_offset', 0):,.2f} · "
                f"IGST ₹{net_payable.get('igst_offset', 0):,.2f}"
            )
        if any(k in lower for k in ["health", "score", "status", "check"]):
            issues = "\n".join(f"• {i}" for i in (health.get("issues") or [])) or "• None"
            warnings = "\n".join(f"• {w}" for w in (health.get("warnings") or [])) or "• None"
            return (
                f"**Compliance Health Check:**\n\n"
                f"• Overall Score: {health.get('score', 'N/A')}/100\n"
                f"• Status: {health.get('overall_status', 'N/A')}\n\n"
                f"**Issues:**\n{issues}\n\n"
                f"**Warnings:**\n{warnings}"
            )
        if any(k in lower for k in ["transaction", "income", "expense", "summary"]):
            return (
                f"**Transaction Summary:**\n\n"
                f"• Income: {len(categorized.get('income', []))} "
                f"(₹{sum(t['amount'] for t in categorized.get('income', [])):,.2f})\n"
                f"• Expense: {len(categorized.get('expense', []))} "
                f"(₹{sum(t['amount'] for t in categorized.get('expense', [])):,.2f})"
            )

    return (
        f"I understand you're asking about: **\"{message}\"**\n\n"
        "I can help with GST calculations, compliance deadlines, "
        "health scoring, and transaction analysis. Upload a dataset "
        "or switch to a real LLM provider for specific guidance."
    )


@app.post("/api/agent/analyze/{dataset_id}")
def run_full_analysis(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    _apply_llm_env(LLM_CONFIG)

    data = ds.processed_data or {}
    try:
        agent_output = run_agent_pipeline(
            financial_summary=data["financial_summary"],
            deadlines=data["deadlines"],
            business_context=BUSINESS_CONTEXT,
        )
    except Exception as e:
        print(f"[server] pipeline analysis failed: {e} — falling back to mock")
        from agent.llm_wrapper import MOCK_ANALYSIS, MOCK_DECISION, MOCK_ACTION
        agent_output = {
            "analysis": MOCK_ANALYSIS,
            "decision": MOCK_DECISION,
            "action": MOCK_ACTION
        }

    data["agent_output"] = agent_output
    ds.processed_data = _serialize(data)
    db.add(ds)
    db.commit()
    _audit(db, "agent_analyze", dataset_id, dataset_id)
    return _serialize({
        "dataset_id": dataset_id,
        "analysis": agent_output.get("analysis"),
        "decision": agent_output.get("decision"),
        "action": agent_output.get("action"),
    })


# ─── Reports ──────────────────────────────────────────────────────────────────

def _build_report(ds: Dataset, db: Session) -> dict:
    data = ds.processed_data or {}
    if "agent_output" not in data:
        _apply_llm_env(LLM_CONFIG)
        try:
            data["agent_output"] = run_agent_pipeline(
                financial_summary=data["financial_summary"],
                deadlines=data["deadlines"],
                business_context=BUSINESS_CONTEXT,
            )
            ds.processed_data = _serialize(data)
            db.add(ds)
            db.commit()
        except Exception:
            data["agent_output"] = {"analysis": {}, "decision": {}, "action": {}}
    agent_output = data.get("agent_output", {})
    return {
        "business": BUSINESS_CONTEXT,
        "source": ds.source,
        "gst_summary": data.get("net_gst"),
        "deadlines": data.get("deadlines"),
        "health_check": data.get("health"),
        "agent_analysis": agent_output.get("analysis", {}),
        "compliance_tasks": agent_output.get("decision", {}),
        "step_by_step_guidance": agent_output.get("action", {}),
        "generated_at": datetime.utcnow().isoformat(),
    }


@app.get("/api/report/{dataset_id}")
def generate_report(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    report = _build_report(ds, db)
    _audit(db, "report_json", dataset_id, dataset_id)
    return _serialize(report)


@app.get("/api/export/{dataset_id}/pdf")
def export_report_pdf(dataset_id: str, db: Session = Depends(get_db)):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    pdf = report_to_pdf(_build_report(ds, db))
    _audit(db, "export_pdf", dataset_id, dataset_id)
    return Response(
        content=pdf,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="report_{dataset_id}.pdf"'},
    )


@app.get("/api/export/{dataset_id}/csv")
def export_report_csv(
    dataset_id: str,
    kind: str = Query("report", pattern="^(report|transactions)$"),
    db: Session = Depends(get_db),
):
    ds = _require_processed(db.query(Dataset).get(dataset_id))
    if kind == "transactions":
        data = ds.processed_data or {}
        csv_bytes = transactions_to_csv(data.get("transactions", []))
        fname = f"transactions_{dataset_id}.csv"
    else:
        csv_bytes = report_to_csv(_build_report(ds, db))
        fname = f"report_{dataset_id}.csv"
    _audit(db, f"export_csv_{kind}", dataset_id, dataset_id)
    return Response(
        content=csv_bytes,
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="{fname}"'},
    )


# ─── Period comparison ────────────────────────────────────────────────────────

@app.get("/api/compare")
def compare_periods(
    dataset_ids: str = Query(..., description="Comma-separated dataset IDs to compare"),
    db: Session = Depends(get_db),
):
    """Side-by-side comparison of net GST, health score, and transaction totals."""
    ids = [x.strip() for x in dataset_ids.split(",") if x.strip()]
    if len(ids) < 2:
        raise HTTPException(400, "Provide at least 2 dataset IDs: ?dataset_ids=a,b")

    periods = []
    for did in ids:
        ds = db.query(Dataset).get(did)
        if not ds or not ds.processed:
            periods.append({"id": did, "error": "not found or unprocessed"})
            continue
        data = ds.processed_data or {}
        net = (data.get("net_gst") or {}).get("net_gst_payable", {}) or {}
        health = data.get("health", {}) or {}
        cat = data.get("categorized", {}) or {}
        periods.append({
            "id": did,
            "name": ds.name,
            "period": ds.period or "",
            "net_gst_payable": net.get("amount", 0),
            "gst_status": net.get("status", ""),
            "health_score": health.get("score", 0),
            "total_income": sum(t["amount"] for t in cat.get("income", [])),
            "total_expense": sum(t["amount"] for t in cat.get("expense", [])),
        })

    # Compute deltas against first period
    if len(periods) >= 2 and "error" not in periods[0]:
        baseline = periods[0]
        for p in periods[1:]:
            if "error" in p:
                continue
            p["delta_vs_baseline"] = {
                "net_gst_payable": p["net_gst_payable"] - baseline["net_gst_payable"],
                "health_score": p["health_score"] - baseline["health_score"],
                "total_income": p["total_income"] - baseline["total_income"],
                "total_expense": p["total_expense"] - baseline["total_expense"],
            }

    return {"periods": periods, "baseline": ids[0]}


# ─── Business / LLM config ────────────────────────────────────────────────────

@app.get("/api/business-context")
def get_business_context():
    return BUSINESS_CONTEXT


@app.put("/api/business-context")
def update_business_context(ctx: BusinessContextIn, db: Session = Depends(get_db)):
    BUSINESS_CONTEXT.update(ctx.model_dump())
    _audit(db, "update_business_context", meta=BUSINESS_CONTEXT)
    return BUSINESS_CONTEXT


@app.get("/api/llm-config")
def get_llm_config():
    return {
        "provider": LLM_CONFIG["provider"],
        "has_api_key": bool(LLM_CONFIG.get("api_key")),
        "model": LLM_CONFIG.get("model") or "",
    }


@app.put("/api/llm-config")
def update_llm_config(config: LLMConfigIn, db: Session = Depends(get_db)):
    LLM_CONFIG["provider"] = config.provider
    if config.api_key:
        LLM_CONFIG["api_key"] = config.api_key
    if config.model is not None:
        LLM_CONFIG["model"] = config.model
    _apply_llm_env(LLM_CONFIG)
    clear_llm_cache()  # previous cache is for a different provider
    _audit(db, "update_llm_config", meta={"provider": config.provider, "model": config.model})
    return {
        "provider": LLM_CONFIG["provider"],
        "has_api_key": bool(LLM_CONFIG.get("api_key")),
        "model": LLM_CONFIG.get("model") or "",
    }


# ─── Notifications ────────────────────────────────────────────────────────────

@app.get("/api/notifications/prefs")
def get_notification_prefs(email: str = Query(...), db: Session = Depends(get_db)):
    row = db.query(NotificationPref).filter(NotificationPref.email == email).first()
    if not row:
        return {
            "email": email, "deadline_reminders": True, "filing_alerts": True,
            "mismatch_alerts": True, "ai_insights": True, "email_alerts": True,
            "daily_digest": False,
        }
    return {
        "email": row.email,
        "deadline_reminders": row.deadline_reminders,
        "filing_alerts": row.filing_alerts,
        "mismatch_alerts": row.mismatch_alerts,
        "ai_insights": row.ai_insights,
        "email_alerts": row.email_alerts,
        "daily_digest": row.daily_digest,
    }


@app.put("/api/notifications/prefs")
def update_notification_prefs(pref: NotificationPrefIn, db: Session = Depends(get_db)):
    row = db.query(NotificationPref).filter(NotificationPref.email == pref.email).first()
    if not row:
        row = NotificationPref(email=pref.email)
        db.add(row)
    for k, v in pref.model_dump().items():
        setattr(row, k, v)
    db.commit()
    _audit(db, "update_notification_prefs", target=pref.email, meta=pref.model_dump())
    return {"status": "saved", "email": pref.email}


@app.post("/api/notifications/push/subscribe")
def push_subscribe(body: PushSubscribeIn, db: Session = Depends(get_db)):
    row = db.query(NotificationPref).filter(NotificationPref.email == body.email).first()
    if not row:
        row = NotificationPref(email=body.email)
        db.add(row)
    row.push_subscription = body.subscription
    db.commit()
    _audit(db, "push_subscribe", target=body.email)
    return {"status": "subscribed", "email": body.email}


@app.post("/api/notifications/test-email")
def send_test_email(body: TestEmailIn, db: Session = Depends(get_db)):
    print(f"[DEMO MODE] Skip sending test email to {body.to}")
    result = {"status": "logged", "to": body.to}
    _audit(db, "test_email", target=body.to, meta=result)
    return result


@app.post("/api/notifications/digest/send-now")
def send_digest_now(db: Session = Depends(get_db)):
    """Trigger a daily digest immediately (useful for testing)."""
    ds = (
        db.query(Dataset)
        .filter(Dataset.processed == True)  # noqa: E712
        .order_by(Dataset.processed_at.desc())
        .first()
    )
    data = (ds.processed_data if ds else {}) or {}
    html = build_daily_digest_html(
        ds.name if ds else "Your Business",
        data.get("deadlines", []),
        data.get("health", {}),
    )
    subs = db.query(NotificationPref).filter(NotificationPref.daily_digest == True).all()  # noqa: E712
    sent = [send_email(s.email, "ComplianceIQ digest", html) for s in subs]
    pushed = broadcast_push(
        (s.push_subscription for s in subs if s.push_subscription),
        "ComplianceIQ digest",
        "Your daily compliance summary is ready.",
    )
    _audit(db, "digest_send_now", meta={"subscribers": len(subs)})
    return {"subscribers": len(subs), "email_results": sent, "push": pushed}


# ─── Audit trail ──────────────────────────────────────────────────────────────

@app.get("/api/audit")
def list_audit(
    limit: int = Query(100, le=500),
    dataset_id: Optional[str] = None,
    db: Session = Depends(get_db),
):
    q = db.query(AuditLog).order_by(AuditLog.created_at.desc())
    if dataset_id:
        q = q.filter(AuditLog.dataset_id == dataset_id)
    rows = q.limit(limit).all()
    return [{
        "id": r.id,
        "created_at": r.created_at.isoformat() if r.created_at else "",
        "actor": r.actor,
        "action": r.action,
        "target": r.target,
        "dataset_id": r.dataset_id,
        "meta": r.meta or {},
    } for r in rows]


# ─── Main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    print("\n" + "=" * 50)
    print("  ComplianceIQ API Server v2.0")
    print("=" * 50)
    print(f"  LLM Provider : {LLM_CONFIG['provider']}")
    print(f"  Database     : {os.getenv('DATABASE_URL', 'sqlite:///./compliance.db')}")
    print(f"  API docs     : http://localhost:8000/docs")
    print("=" * 50 + "\n")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
