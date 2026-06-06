"""
Module 4: Compliance Logic
- GST calculation (output tax, input tax credit, net payable)
- Dummy compliance deadlines for GSTR-1, GSTR-3B, advance tax
- Basic compliance health check
"""

from datetime import date, timedelta, datetime


# ─────────────────────────────────────────────
# GST CALCULATION
# ─────────────────────────────────────────────

def calculate_gst(transactions: list, direction: str = "output") -> dict:
    """
    Calculate GST for a list of transactions.
    Returns per-rate breakdown + total (including CGST/SGST/IGST splits).
    """
    rate_buckets = {}  # {rate: {"taxable_value": X, "gst_amount": Y, "cgst": C, "sgst": S, "igst": I}}
    total_cgst = 0.0
    total_sgst = 0.0
    total_igst = 0.0
    total_gst = 0.0

    for txn in transactions:
        rate = txn.get("gst_rate", 0)
        amount = txn.get("amount", 0)
        gst_amount = round(amount * rate / 100, 2)
        
        # Intra-state split by default
        cgst = round(gst_amount / 2, 2)
        sgst = round(gst_amount - cgst, 2)
        igst = 0.0

        if rate not in rate_buckets:
            rate_buckets[rate] = {
                "taxable_value": 0, 
                "gst_amount": 0,
                "cgst": 0,
                "sgst": 0,
                "igst": 0
            }

        rate_buckets[rate]["taxable_value"] += amount
        rate_buckets[rate]["gst_amount"] += gst_amount
        rate_buckets[rate]["cgst"] += cgst
        rate_buckets[rate]["sgst"] += sgst
        rate_buckets[rate]["igst"] += igst
        
        total_cgst += cgst
        total_sgst += sgst
        total_igst += igst
        total_gst += gst_amount

    total_taxable = sum(v["taxable_value"] for v in rate_buckets.values())

    return {
        "direction": direction,
        "breakdown_by_rate": rate_buckets,
        "total_taxable_value": round(total_taxable, 2),
        "cgst": round(total_cgst, 2),
        "sgst": round(total_sgst, 2),
        "igst": round(total_igst, 2),
        "total_gst": round(total_gst, 2),
    }


def calculate_net_gst(output_tax: dict, input_tax: dict) -> dict:
    """Net GST payable = Output Tax - Input Tax Credit (ITC)."""
    net = output_tax["total_gst"] - input_tax["total_gst"]
    status = "payable" if net >= 0 else "excess_itc"

    return {
        "output_tax": {
            "amount": output_tax["total_gst"],
            "cgst": output_tax["cgst"],
            "sgst": output_tax["sgst"],
            "igst": output_tax["igst"]
        },
        "input_tax_credit": {
            "amount": input_tax["total_gst"],
            "cgst": input_tax["cgst"],
            "sgst": input_tax["sgst"],
            "igst": input_tax["igst"]
        },
        "net_gst_payable": {
            "amount": round(abs(net), 2),
            "status": status,
            "cgst_offset": round(output_tax["cgst"] - input_tax["cgst"], 2),
            "sgst_offset": round(output_tax["sgst"] - input_tax["sgst"], 2),
            "igst_offset": round(output_tax["igst"] - input_tax["igst"], 2),
        },
        "note": (
            f"Pay ₹{abs(net):.2f} to government."
            if status == "payable"
            else f"₹{abs(net):.2f} excess ITC — carry forward to next period."
        ),
    }


# ─────────────────────────────────────────────
# COMPLIANCE DEADLINES (dummy / rule-based)
# ─────────────────────────────────────────────

def get_deadlines(reference_date: date = None) -> list:
    """
    Returns dummy GST and income tax deadlines relative to today.
    In production, these would be fetched from a compliance calendar API.
    """
    if reference_date is None:
        reference_date = date.today()

    # Current month/year
    year = reference_date.year
    month = reference_date.month

    # Next month helper
    next_month = month + 1 if month < 12 else 1
    next_year = year if month < 12 else year + 1

    deadlines = [
        {
            "filing": "GSTR-1 (Monthly)",
            "description": "Details of outward supplies (sales invoices)",
            "due_date": date(next_year, next_month, 11),
            "penalty": "₹50/day (₹20/day for nil return), max ₹10,000",
            "priority": "HIGH",
        },
        {
            "filing": "GSTR-3B (Monthly)",
            "description": "Summary return + GST payment",
            "due_date": date(next_year, next_month, 20),
            "penalty": "18% interest p.a. on late tax + ₹50/day late fee",
            "priority": "HIGH",
        },
        {
            "filing": "TDS Payment (if applicable)",
            "description": "Deposit TDS deducted in current month",
            "due_date": date(next_year, next_month, 7),
            "penalty": "1.5% per month interest",
            "priority": "MEDIUM",
        },
        {
            "filing": "Advance Tax (Q4)",
            "description": "100% of annual tax liability due by March 15",
            "due_date": date(year, 3, 15) if month <= 3 else date(year + 1, 3, 15),
            "penalty": "1% per month interest under Section 234C",
            "priority": "MEDIUM",
        },
        {
            "filing": "GSTR-9 (Annual)",
            "description": "Annual return for previous financial year",
            "due_date": date(year, 12, 31),
            "penalty": "₹200/day, max 0.5% of turnover",
            "priority": "LOW",
        },
    ]

    # Apply smart priority and reasoning
    for d in deadlines:
        # Safety check: Ensure both are date objects to avoid TypeError
        due_date = d["due_date"]
        if isinstance(due_date, str):
            due_date = datetime.strptime(due_date, "%Y-%m-%d").date()
        
        ref_date = reference_date
        if isinstance(ref_date, str):
            ref_date = datetime.strptime(ref_date, "%Y-%m-%d").date()

        days_left = (due_date - ref_date).days
        d["days_left"] = days_left
        
        # Determine priority and alert level
        if days_left <= 0:
            d["priority"] = "CRITICAL"
            d["alert_level"] = "CRITICAL"
            d["status"] = "OVERDUE"
            d["reason"] = f"Deadline missed on {due_date.strftime('%Y-%m-%d')}"
        elif days_left <= 3:
            d["priority"] = "HIGH"
            d["alert_level"] = "URGENT"
            d["status"] = "DUE SOON"
            d["reason"] = "Due today" if days_left == 0 else f"Due in {days_left} days"
        elif days_left <= 7:
            d["priority"] = "MEDIUM"
            d["alert_level"] = "REMINDER"
            d["status"] = "DUE SOON"
            d["reason"] = f"Due in {days_left} days"
        else:
            d["priority"] = "LOW"
            d["alert_level"] = "REMINDER"
            d["status"] = "UPCOMING"
            d["reason"] = f"Due in {days_left} days"

    return sorted(deadlines, key=lambda x: x["due_date"])


# ─────────────────────────────────────────────
# COMPLIANCE HEALTH CHECK
# ─────────────────────────────────────────────

def detect_anomalies(categorized: dict) -> list:
    """
    Detects potential issues in transactions:
    - Income with 0% GST
    - High value transactions (> 100,000)
    - Missing GST application
    """
    anomalies = []
    
    # 1. Income transactions with 0% GST
    for txn in categorized.get("income", []):
        amount = txn.get("amount", 0)
        rate = txn.get("gst_rate", 0)
        if rate == 0 and amount > 0:
            anomalies.append(f"No GST applied on taxable income: ₹{amount:,.2f} (Party: {txn.get('party_name', 'Unknown')})")
        
        # 2. Unusually high transactions
        if amount > 100000:
            anomalies.append(f"High transaction detected: ₹{amount:,.2f} (Party: {txn.get('party_name', 'Unknown')})")

    # 3. Expense transactions check (simple)
    for txn in categorized.get("expense", []):
        if txn.get("amount", 0) > 100000:
            anomalies.append(f"High expense transaction: ₹{txn.get('amount', 0):,.2f} (Party: {txn.get('party_name', 'Unknown')})")

    return anomalies


def compliance_health_check(categorized: dict, net_gst: dict, deadlines: list) -> dict:
    """
    Quick flags / warnings based on the data.
    Now includes anomaly detection and health score.
    """
    issues = []
    warnings = []
    score = 100

    # Run anomaly detection
    anomalies = detect_anomalies(categorized)
    if anomalies:
        score -= min(30, len(anomalies) * 10)

    # Check: Any income without GSTIN from buyer
    no_gstin = [
        t["party_name"] for t in categorized["income"]
        if not t.get("party_gstin")
    ]
    if no_gstin:
        warnings.append(f"Missing buyer GSTIN for: {', '.join(no_gstin)} — ITC may not be claimable by them.")
        score -= 5

    # Check: GST payable is significant
    net_payable = net_gst["net_gst_payable"]["amount"]
    if net_gst["net_gst_payable"]["status"] == "payable" and net_payable > 10000:
        issues.append(f"High GST liability of ₹{net_payable:,.2f} — ensure timely payment to avoid interest.")
        score -= 10

    # Check: Overdue deadlines
    overdue = [d for d in deadlines if d.get("status") == "OVERDUE"]
    for d in overdue:
        issues.append(f"OVERDUE: {d['filing']} was due on {d['due_date']}.")
        score -= 20

    # Check: Due soon
    due_soon = [d for d in deadlines if d.get("status") == "DUE SOON"]
    for d in due_soon:
        warnings.append(f"DUE SOON: {d['filing']} due in {d['days_left']} day(s) on {d['due_date']}.")
        score -= 5

    # Simple Explanation Layer
    if net_gst["net_gst_payable"]["status"] == "payable":
        explanation = f"High GST liability due to taxable income exceeding available Input Tax Credit." if net_payable > 5000 else "Standard GST liability for the period."
    else:
        explanation = "Excellent ITC position; no GST payment required this period."

    # Clamp score
    score = max(0, score)

    return {
        "score": score,
        "issues": issues,
        "warnings": warnings,
        "anomalies": anomalies,
        "explanation": explanation,
        "overall_status": "CRITICAL" if score < 50 or issues else ("WARNING" if score < 80 or warnings else "OK"),
    }
