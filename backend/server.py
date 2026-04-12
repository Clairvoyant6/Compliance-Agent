"""
FastAPI Backend — Compliance Assistant API Server
Wraps all Python modules into REST endpoints for the React frontend.
"""

import json
import os
import sys
import uuid
import io
import csv
from datetime import date, datetime
from typing import Optional
from pathlib import Path

from fastapi import FastAPI, UploadFile, File, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel

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
from agent.llm_wrapper import call_llm

# ─────────────────────────────────────────────
# APP SETUP
# ─────────────────────────────────────────────

app = FastAPI(
    title="ComplianceIQ API",
    description="AI-Powered GST Compliance Assistant for Indian SMBs",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─────────────────────────────────────────────
# IN-MEMORY STATE
# ─────────────────────────────────────────────

class DatasetStore:
    """In-memory store for uploaded/processed datasets."""

    def __init__(self):
        self.datasets: dict = {}  # id -> { meta, raw, transactions, categorized, gst, ... }
        self.business_context: dict = {
            "name": "MyBusiness Solutions Pvt Ltd",
            "gstin": "29AABCM1234F1ZR",
            "type": "Service Provider",
            "state": "Karnataka",
            "filing_frequency": "Monthly",
            "period": "March 2024",
        }
        self.llm_config: dict = {
            "provider": os.getenv("LLM_PROVIDER", "mock"),
            "api_key": os.getenv("LLM_API_KEY", ""),
        }
        # Load sample dataset on startup
        self._load_sample_data()

    def _load_sample_data(self):
        """Load the bundled sample CSV and invoice as the default dataset."""
        try:
            data_dir = os.path.join(os.path.dirname(__file__), "data")
            csv_path = os.path.join(data_dir, "transactions.csv")
            invoice_path = os.path.join(data_dir, "sample_invoice.json")

            if os.path.exists(csv_path):
                raw_txns = load_csv(csv_path)
                invoice_data = load_json(invoice_path) if os.path.exists(invoice_path) else {}
                dataset_id = "sample"
                self.datasets[dataset_id] = {
                    "id": dataset_id,
                    "name": "Sample Dataset (March 2024)",
                    "filename": "transactions.csv",
                    "rows": len(raw_txns),
                    "uploaded_at": datetime.now().isoformat(),
                    "raw": raw_txns,
                    "invoice_raw": invoice_data,
                    "processed": False,
                }
                self._process_dataset(dataset_id)
                print(f"[Server] Loaded sample dataset with {len(raw_txns)} transactions.")
        except Exception as e:
            print(f"[Server] Warning: Could not load sample data: {e}")

    def _process_dataset(self, dataset_id: str):
        """Run the full pipeline on a dataset."""
        ds = self.datasets.get(dataset_id)
        if not ds:
            return

        raw_txns = ds["raw"]
        invoice_raw = ds.get("invoice_raw", {})

        # Parse
        source = detect_source(raw_txns)
        transactions = parse_transactions(raw_txns)
        invoice = parse_invoice(invoice_raw) if invoice_raw else {}

        # Categorize
        categorized = categorize(transactions)

        # GST Calculation
        output_tax = calculate_gst(categorized["output_tax_transactions"], "output")
        input_tax = calculate_gst(categorized["input_tax_transactions"], "input")
        net_gst = calculate_net_gst(output_tax, input_tax)

        # Deadlines
        ref_date = date(2024, 3, 31)  # Default for sample
        try:
            if transactions:
                max_date = max(t["date"] for t in transactions)
                if isinstance(max_date, date):
                    ref_date = max_date
        except Exception:
            pass

        deadlines = get_deadlines(reference_date=ref_date)

        # Health Check
        health = compliance_health_check(categorized, net_gst, deadlines)

        # Financial summary for agent
        financial_summary = {
            "source": source,
            "period": self.business_context.get("period", ""),
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

        # Update dataset
        ds.update({
            "processed": True,
            "source": source,
            "transactions": transactions,
            "categorized": categorized,
            "output_tax": output_tax,
            "input_tax": input_tax,
            "net_gst": net_gst,
            "deadlines": deadlines,
            "health": health,
            "financial_summary": financial_summary,
            "invoice": invoice,
            "processed_at": datetime.now().isoformat(),
        })


store = DatasetStore()


# ─────────────────────────────────────────────
# PYDANTIC MODELS
# ─────────────────────────────────────────────

class BusinessContext(BaseModel):
    name: str = "MyBusiness Solutions Pvt Ltd"
    gstin: str = "29AABCM1234F1ZR"
    type: str = "Service Provider"
    state: str = "Karnataka"
    filing_frequency: str = "Monthly"
    period: str = "March 2024"


class LLMConfig(BaseModel):
    provider: str = "mock"
    api_key: str = ""


class ChatMessage(BaseModel):
    message: str
    dataset_id: Optional[str] = "sample"


class InlineDataset(BaseModel):
    name: str
    data: str  # CSV string or JSON string
    format: str = "csv"  # "csv" or "json"


# ─────────────────────────────────────────────
# JSON SERIALIZER HELPER
# ─────────────────────────────────────────────

def serialize(obj):
    """Make Python objects JSON-serializable."""
    if isinstance(obj, (date, datetime)):
        return obj.isoformat()
    if isinstance(obj, set):
        return list(obj)
    if isinstance(obj, dict):
        return {k: serialize(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [serialize(i) for i in obj]
    return obj


# ─────────────────────────────────────────────
# API ROUTES
# ─────────────────────────────────────────────

@app.get("/api/health")
def health_check():
    """Server health check."""
    return {
        "status": "ok",
        "datasets": len(store.datasets),
        "llm_provider": store.llm_config["provider"],
    }


# ── DATASETS ───────────────────────────────────

@app.get("/api/datasets")
def list_datasets():
    """List all available datasets."""
    result = []
    for ds in store.datasets.values():
        result.append({
            "id": ds["id"],
            "name": ds["name"],
            "filename": ds.get("filename", ""),
            "rows": ds.get("rows", 0),
            "processed": ds.get("processed", False),
            "uploaded_at": ds.get("uploaded_at", ""),
            "processed_at": ds.get("processed_at", ""),
        })
    return result


@app.post("/api/upload")
async def upload_dataset(file: UploadFile = File(...)):
    """Upload a CSV or JSON file as a new dataset."""
    if not file.filename:
        raise HTTPException(400, "No filename provided")

    ext = Path(file.filename).suffix.lower()
    if ext not in (".csv", ".json"):
        raise HTTPException(400, f"Unsupported file format: {ext}. Use .csv or .json")

    content = await file.read()
    content_str = content.decode("utf-8")
    dataset_id = str(uuid.uuid4())[:8]

    if ext == ".csv":
        reader = csv.DictReader(io.StringIO(content_str))
        raw_data = [dict(row) for row in reader]
    else:
        raw_data = json.loads(content_str)
        if isinstance(raw_data, dict):
            # Single invoice/object → wrap
            raw_data = [raw_data]

    store.datasets[dataset_id] = {
        "id": dataset_id,
        "name": file.filename,
        "filename": file.filename,
        "rows": len(raw_data),
        "uploaded_at": datetime.now().isoformat(),
        "raw": raw_data,
        "invoice_raw": {},
        "processed": False,
    }

    # Auto-process
    try:
        store._process_dataset(dataset_id)
    except Exception as e:
        print(f"[Server] Processing error: {e}")

    return {
        "id": dataset_id,
        "name": file.filename,
        "rows": len(raw_data),
        "processed": store.datasets[dataset_id].get("processed", False),
    }


@app.post("/api/datasets")
def add_inline_dataset(data: InlineDataset):
    """Add a new dataset from inline CSV/JSON string."""
    dataset_id = str(uuid.uuid4())[:8]

    if data.format == "csv":
        reader = csv.DictReader(io.StringIO(data.data))
        raw_data = [dict(row) for row in reader]
    else:
        raw_data = json.loads(data.data)
        if isinstance(raw_data, dict):
            raw_data = [raw_data]

    store.datasets[dataset_id] = {
        "id": dataset_id,
        "name": data.name,
        "filename": f"{data.name}.{data.format}",
        "rows": len(raw_data),
        "uploaded_at": datetime.now().isoformat(),
        "raw": raw_data,
        "invoice_raw": {},
        "processed": False,
    }

    try:
        store._process_dataset(dataset_id)
    except Exception as e:
        print(f"[Server] Processing error: {e}")

    return {
        "id": dataset_id,
        "name": data.name,
        "rows": len(raw_data),
        "processed": store.datasets[dataset_id].get("processed", False),
    }


@app.delete("/api/datasets/{dataset_id}")
def delete_dataset(dataset_id: str):
    """Delete a dataset."""
    if dataset_id not in store.datasets:
        raise HTTPException(404, "Dataset not found")
    del store.datasets[dataset_id]
    return {"status": "deleted", "id": dataset_id}


# ── PROCESSING ─────────────────────────────────

@app.post("/api/process/{dataset_id}")
def process_dataset(dataset_id: str):
    """Run the full pipeline on a dataset."""
    if dataset_id not in store.datasets:
        raise HTTPException(404, "Dataset not found")

    store._process_dataset(dataset_id)
    ds = store.datasets[dataset_id]

    return serialize({
        "id": dataset_id,
        "processed": ds["processed"],
        "source": ds.get("source"),
        "transaction_count": len(ds.get("transactions", [])),
        "net_gst": ds.get("net_gst"),
        "health": ds.get("health"),
    })


@app.get("/api/transactions/{dataset_id}")
def get_transactions(dataset_id: str):
    """Get parsed and categorized transactions."""
    ds = store.datasets.get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.get("processed"):
        raise HTTPException(400, "Dataset not processed yet. Call POST /api/process/{id} first.")

    categorized = ds.get("categorized", {})
    transactions = ds.get("transactions", [])

    return serialize({
        "dataset_id": dataset_id,
        "source": ds.get("source"),
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
def get_gst_summary(dataset_id: str):
    """Get GST calculation results."""
    ds = store.datasets.get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.get("processed"):
        raise HTTPException(400, "Dataset not processed yet.")

    return serialize({
        "dataset_id": dataset_id,
        "output_tax": ds.get("output_tax"),
        "input_tax": ds.get("input_tax"),
        "net_gst": ds.get("net_gst"),
    })


@app.get("/api/deadlines")
def get_deadlines_endpoint(reference_date: Optional[str] = None):
    """Get compliance deadlines."""
    ref = None
    if reference_date:
        try:
            ref = datetime.strptime(reference_date, "%Y-%m-%d").date()
        except ValueError:
            raise HTTPException(400, "Invalid date format. Use YYYY-MM-DD.")

    deadlines = get_deadlines(reference_date=ref)
    return serialize(deadlines)


@app.get("/api/health-check/{dataset_id}")
def get_health_check(dataset_id: str):
    """Get compliance health check results."""
    ds = store.datasets.get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.get("processed"):
        raise HTTPException(400, "Dataset not processed yet.")

    return serialize(ds.get("health", {}))


# ── AI AGENT ─────────────────────────────────

@app.post("/api/agent/chat")
def agent_chat(msg: ChatMessage):
    """Send a message to the AI agent for analysis."""
    dataset_id = msg.dataset_id or "sample"
    ds = store.datasets.get(dataset_id)

    # Build context from dataset if available
    context = ""
    if ds and ds.get("processed"):
        net_gst = ds.get("net_gst", {})
        health = ds.get("health", {})
        net_payable = net_gst.get("net_gst_payable", {})

        context = f"""Current Data Context:
- Business: {store.business_context.get('name', 'N/A')}
- Period: {store.business_context.get('period', 'N/A')}
- Net GST Payable: ₹{net_payable.get('amount', 0):,.2f} ({net_payable.get('status', 'N/A')})
- Output Tax: ₹{net_gst.get('output_tax', {}).get('amount', 0):,.2f}
- Input Tax Credit: ₹{net_gst.get('input_tax_credit', {}).get('amount', 0):,.2f}
- Health Score: {health.get('score', 'N/A')}/100
- Status: {health.get('overall_status', 'N/A')}
- Issues: {', '.join(health.get('issues', [])) or 'None'}
- Warnings: {', '.join(health.get('warnings', [])) or 'None'}

User Question: {msg.message}
"""
    else:
        context = f"User Question: {msg.message}\nNote: No dataset loaded. Provide general GST compliance guidance."

    # Build a prompt for the LLM
    prompt = f"""You are a GST compliance assistant for Indian SMBs.
Answer the user's question based on the data context provided.
Be concise, specific, and actionable. Use bullet points.

{context}

Respond in plain text with markdown formatting (bold, bullet points). Do NOT return JSON.
"""

    # Update LLM env vars
    os.environ["LLM_PROVIDER"] = store.llm_config.get("provider", "mock")
    os.environ["LLM_API_KEY"] = store.llm_config.get("api_key", "")

    try:
        from agent.llm_wrapper import call_llm, LLM_PROVIDER
        # For mock mode, return contextual response
        if store.llm_config.get("provider", "mock") == "mock":
            response = _mock_chat_response(msg.message, ds)
        else:
            # Real LLM call
            result = call_llm(prompt, step_name="chat")
            if isinstance(result, dict):
                response = result.get("raw_response", json.dumps(result, indent=2, default=str))
            else:
                response = str(result)
    except Exception as e:
        response = f"Error calling LLM: {str(e)}"

    return {
        "response": response,
        "provider": store.llm_config.get("provider", "mock"),
        "dataset_id": dataset_id,
    }


def _mock_chat_response(message: str, ds: dict = None) -> str:
    """Generate contextual mock responses based on actual dataset data."""
    lower = message.lower()

    if ds and ds.get("processed"):
        net_gst = ds.get("net_gst", {})
        health = ds.get("health", {})
        categorized = ds.get("categorized", {})
        net_payable = net_gst.get("net_gst_payable", {})
        output_tax = net_gst.get("output_tax", {})
        input_tax = net_gst.get("input_tax_credit", {})

        if any(k in lower for k in ["gst", "tax", "payable", "liability"]):
            return f"""**GST Summary for {store.business_context.get('period', 'current period')}:**

📊 **Output Tax (collected):** ₹{output_tax.get('amount', 0):,.2f}
📊 **Input Tax Credit (ITC):** ₹{input_tax.get('amount', 0):,.2f}
📊 **Net GST Payable:** ₹{net_payable.get('amount', 0):,.2f} [{net_payable.get('status', '')}]

**CGST/SGST/IGST Split:**
• CGST: ₹{net_payable.get('cgst_offset', 0):,.2f}
• SGST: ₹{net_payable.get('sgst_offset', 0):,.2f}
• IGST: ₹{net_payable.get('igst_offset', 0):,.2f}

**Note:** {net_gst.get('note', '')}"""

        if any(k in lower for k in ["health", "score", "status", "check"]):
            issues_str = "\n".join(f"• ⚠️ {i}" for i in health.get("issues", [])) or "• None"
            warnings_str = "\n".join(f"• ℹ️ {w}" for w in health.get("warnings", [])) or "• None"
            anomalies_str = "\n".join(f"• 🔍 {a}" for a in health.get("anomalies", [])[:3]) or "• None"
            return f"""**Compliance Health Check:**

📊 **Overall Score:** {health.get('score', 'N/A')}/100
📊 **Status:** {health.get('overall_status', 'N/A')}
📊 **Explanation:** {health.get('explanation', '')}

**Issues:**
{issues_str}

**Warnings:**
{warnings_str}

**Anomalies Detected:**
{anomalies_str}"""

        if any(k in lower for k in ["transaction", "income", "expense", "summary"]):
            return f"""**Transaction Summary:**

📊 **Income transactions:** {len(categorized.get('income', []))}
📊 **Expense transactions:** {len(categorized.get('expense', []))}
📊 **Total Income:** ₹{sum(t['amount'] for t in categorized.get('income', [])):,.2f}
📊 **Total Expense:** ₹{sum(t['amount'] for t in categorized.get('expense', [])):,.2f}
📊 **Taxable Income:** {len(categorized.get('taxable_income', []))} transactions
📊 **Taxable Expense:** {len(categorized.get('taxable_expense', []))} transactions"""

        if any(k in lower for k in ["deadline", "due", "filing", "overdue"]):
            deadlines = ds.get("deadlines", [])
            dl_str = "\n".join(
                f"• **{d['filing']}**: {d['due_date']} — {d['status']} ({d['priority']})"
                for d in deadlines[:5]
            )
            return f"""**Upcoming Compliance Deadlines:**

{dl_str}

💡 *Tip: Prioritize CRITICAL and HIGH priority items first.*"""

    # Generic fallback
    return f"""I understand you're asking about: **"{message}"**

As your AI Compliance Agent, I can help with:
→ **GST calculations** — tax liability, ITC, net payable
→ **Compliance deadlines** — filing dates, penalties
→ **Health check** — score, issues, anomalies
→ **Transaction analysis** — income/expense breakdown

Please upload a dataset or ask about a specific topic!"""


@app.post("/api/agent/analyze/{dataset_id}")
def run_full_analysis(dataset_id: str):
    """Run the full 3-step agent pipeline on a dataset."""
    ds = store.datasets.get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.get("processed"):
        raise HTTPException(400, "Dataset not processed yet.")

    # Set LLM env
    os.environ["LLM_PROVIDER"] = store.llm_config.get("provider", "mock")
    os.environ["LLM_API_KEY"] = store.llm_config.get("api_key", "")

    # Reload the LLM wrapper to pick up new env vars
    import importlib
    import agent.llm_wrapper as lw
    importlib.reload(lw)

    try:
        agent_output = run_agent_pipeline(
            financial_summary=ds["financial_summary"],
            deadlines=ds["deadlines"],
            business_context=store.business_context,
        )
    except Exception as e:
        raise HTTPException(500, f"Agent pipeline error: {str(e)}")

    # Store results
    ds["agent_output"] = agent_output

    return serialize({
        "dataset_id": dataset_id,
        "analysis": agent_output.get("analysis"),
        "decision": agent_output.get("decision"),
        "action": agent_output.get("action"),
    })


# ── REPORTS ────────────────────────────────────

@app.get("/api/report/{dataset_id}")
def generate_report(dataset_id: str):
    """Generate and return the full compliance report JSON."""
    ds = store.datasets.get(dataset_id)
    if not ds:
        raise HTTPException(404, "Dataset not found")
    if not ds.get("processed"):
        raise HTTPException(400, "Dataset not processed yet.")

    # Run agent pipeline if not already done
    if "agent_output" not in ds:
        os.environ["LLM_PROVIDER"] = store.llm_config.get("provider", "mock")
        os.environ["LLM_API_KEY"] = store.llm_config.get("api_key", "")

        import importlib
        import agent.llm_wrapper as lw
        importlib.reload(lw)

        try:
            agent_output = run_agent_pipeline(
                financial_summary=ds["financial_summary"],
                deadlines=ds["deadlines"],
                business_context=store.business_context,
            )
            ds["agent_output"] = agent_output
        except Exception as e:
            ds["agent_output"] = {"analysis": {}, "decision": {}, "action": {}}

    agent_output = ds.get("agent_output", {})

    report = {
        "business": store.business_context,
        "source": ds.get("source"),
        "gst_summary": ds.get("net_gst"),
        "deadlines": ds.get("deadlines"),
        "health_check": ds.get("health"),
        "agent_analysis": agent_output.get("analysis", {}),
        "compliance_tasks": agent_output.get("decision", {}),
        "step_by_step_guidance": agent_output.get("action", {}),
        "generated_at": datetime.now().isoformat(),
    }

    return serialize(report)


# ── BUSINESS CONTEXT ───────────────────────────

@app.get("/api/business-context")
def get_business_context():
    """Get current business context."""
    return store.business_context


@app.put("/api/business-context")
def update_business_context(ctx: BusinessContext):
    """Update business context."""
    store.business_context = ctx.model_dump()
    return store.business_context


# ── LLM CONFIG ─────────────────────────────────

@app.get("/api/llm-config")
def get_llm_config():
    """Get current LLM configuration."""
    return {
        "provider": store.llm_config["provider"],
        "has_api_key": bool(store.llm_config["api_key"]),
    }


@app.put("/api/llm-config")
def update_llm_config(config: LLMConfig):
    """Update LLM configuration."""
    store.llm_config = config.model_dump()
    os.environ["LLM_PROVIDER"] = config.provider
    if config.api_key:
        os.environ["LLM_API_KEY"] = config.api_key
    return {
        "provider": store.llm_config["provider"],
        "has_api_key": bool(store.llm_config["api_key"]),
    }


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    print("\n" + "=" * 50)
    print("  ComplianceIQ API Server")
    print("=" * 50)
    print(f"  LLM Provider: {store.llm_config['provider']}")
    print(f"  Datasets loaded: {len(store.datasets)}")
    print(f"  API docs: http://localhost:8000/docs")
    print("=" * 50 + "\n")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
