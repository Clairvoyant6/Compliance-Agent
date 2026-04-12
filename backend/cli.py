"""
main.py — Compliance Assistant Entry Point
Orchestrates: Input → Parse → Categorize → GST Logic → Agent Pipeline → Output
"""

import json
import os
import sys
from datetime import date

# Modules
from modules.input_handler import load_input
from modules.data_parser import parse_transactions, parse_invoice, detect_source
from modules.categorizer import categorize
from modules.compliance_logic import (
    calculate_gst,
    calculate_net_gst,
    get_deadlines,
    compliance_health_check,
)
from agent.pipeline import run_agent_pipeline


# ─────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────

TRANSACTION_FILE = "data/transactions.csv"
INVOICE_FILE = "data/sample_invoice.json"
OUTPUT_FILE = "outputs/compliance_report.json"

BUSINESS_CONTEXT = {
    "name": "MyBusiness Solutions Pvt Ltd",
    "gstin": "29AABCM1234F1ZR",
    "type": "Service Provider",
    "state": "Karnataka",
    "filing_frequency": "Monthly",
    "period": "March 2024",
}


# ─────────────────────────────────────────────
# MAIN PIPELINE
# ─────────────────────────────────────────────

def run():
    print("\n" + "="*50)
    print("  COMPLIANCE ASSISTANT — INDIA GST")
    print("="*50)

    # ── 1. LOAD INPUT ──────────────────────
    filepath = TRANSACTION_FILE
    if len(sys.argv) > 1:
        filepath = sys.argv[1]

    print(f"\n[1] Processing file: {filepath}")
    
    if not os.path.exists(filepath):
        print(f"Error: File not found: {filepath}")
        return
    if os.path.getsize(filepath) == 0:
        print(f"Error: File is empty: {filepath}")
        return

    raw_txns = load_input(filepath)
    invoice_data = load_input(INVOICE_FILE)

    # ── 2. PARSE ───────────────────────────
    print("\n[2] Parsing and detecting source...")
    source = detect_source(raw_txns)
    print(f"    Detected Source: {source}")
    
    transactions = parse_transactions(raw_txns)
    invoice = parse_invoice(invoice_data)

    # ── 3. CATEGORIZE ──────────────────────
    print("\n[3] Categorizing transactions...")
    categorized = categorize(transactions)

    # ── 4. GST CALCULATION ─────────────────
    print("\n[4] Calculating GST...")
    output_tax = calculate_gst(categorized["output_tax_transactions"], "output")
    input_tax = calculate_gst(categorized["input_tax_transactions"], "input")
    net_gst = calculate_net_gst(output_tax, input_tax)

    payable = net_gst["net_gst_payable"]["amount"]
    status = net_gst["net_gst_payable"]["status"]
    print(f"    Output Tax (collected): ₹{output_tax['total_gst']:,.2f}")
    print(f"    Input Tax Credit (ITC): ₹{input_tax['total_gst']:,.2f}")
    print(f"    Net GST Payable:        ₹{payable:,.2f} [{status}]")

    # ── 5. DEADLINES ───────────────────────
    print("\n[5] Fetching compliance deadlines...")
    deadlines = get_deadlines(reference_date=date(2024, 3, 31))
    for d in deadlines[:3]:
        print(f"    {d['filing']}: {d['due_date']} ({d['status']}) - {d['priority']}")

    # ── 6. HEALTH CHECK ────────────────────
    print("\n[6] Running compliance health check...")
    health = compliance_health_check(categorized, net_gst, deadlines)
    print(f"    Overall Health Score: {health['score']}/100")
    print(f"    Overall Status: {health['overall_status']}")
    for issue in health["issues"]:
        print(f"    ⚠ ISSUE: {issue}")
    for warn in health["warnings"]:
        print(f"    ℹ WARN: {warn}")

    # ── 7. BUILD FINANCIAL SUMMARY FOR AGENT ──
    financial_summary = {
        "source": source,
        "period": BUSINESS_CONTEXT["period"],
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

    # ── 8. AGENT PIPELINE ──────────────────
    print("\n[7] Running AI Agent Pipeline...")
    agent_output = run_agent_pipeline(
        financial_summary=financial_summary,
        deadlines=deadlines,
        business_context=BUSINESS_CONTEXT,
    )

    # ── 9. COMPILE FINAL REPORT ────────────
    final_report = {
        "business": BUSINESS_CONTEXT,
        "source": source,
        "gst_summary": net_gst,
        "deadlines": [
            {**d, "due_date": str(d["due_date"])}
            for d in deadlines
        ],
        "health_check": health,
        "agent_analysis": agent_output["analysis"],
        "compliance_tasks": agent_output["decision"],
        "step_by_step_guidance": agent_output["action"],
    }

    # ── 10. SAVE OUTPUT ────────────────────
    os.makedirs("outputs", exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(final_report, f, indent=2, default=str)

    print(f"\n[✓] Report saved to: {OUTPUT_FILE}")
    print_summary(final_report)

    return final_report


# ─────────────────────────────────────────────
# PRETTY PRINT SUMMARY
# ─────────────────────────────────────────────

def print_summary(report: dict):
    net_summary = report["gst_summary"]
    net = net_summary["net_gst_payable"]
    action = report["step_by_step_guidance"]
    decision = report["compliance_tasks"]

    print("\n" + "="*50)
    print("  FINAL COMPLIANCE REPORT SUMMARY")
    print("="*50)

    print(f"\n📊 GST PAYABLE:  ₹{net['amount']:,.2f}  [{net['status']}]")
    print(f"   → {net_summary['note']}")

    print("\n📅 KEY DEADLINES:")
    for d in report["deadlines"][:3]:
        print(f"   • {d['filing']}: {d['due_date']}  [{d['status']}]")

    print("\n✅ COMPLIANCE TASKS:")
    for task in decision.get("immediate_actions", [])[:4]:
        print(f"   [{task['priority']}] {task['task']} — by {task['deadline']}")

    print("\n📋 STEP-BY-STEP GUIDANCE:")
    for step in action.get("steps", []):
        print(f"   Step {step['step_number']}: {step['action']}")
        print(f"            How: {step['how_to']}")
        print(f"            Due: {step['deadline']}  ⏱ {step['estimated_time']}")

    if action.get("important_notes"):
        print("\n⚠  IMPORTANT NOTES:")
        for note in action["important_notes"]:
            print(f"   • {note}")

    print(f"\n📞 {action.get('helpline', '')}")
    print("="*50 + "\n")


if __name__ == "__main__":
    run()
