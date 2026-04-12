"""
Module 2: Data Parser
Parses raw records into structured, typed transaction objects.
Handles both CSV transaction rows and JSON invoice dicts.
"""

from datetime import datetime
import os


def detect_source(raw_records: list) -> str:
    """
    Detect the source accounting system based on CSV column headers.
    Heuristics:
    - 'GSTIN' -> tally
    - 'Contact Name' -> zoho
    - 'Txn Date' -> quickbooks
    - else -> generic
    """
    if not raw_records:
        return "generic"
    
    headers = set(raw_records[0].keys())
    
    if "GSTIN" in headers:
        return "tally"
    elif "Contact Name" in headers:
        return "zoho"
    elif "Txn Date" in headers:
        return "quickbooks"
    return "generic"


def parse_transactions(raw_records: list) -> list:
    """
    Parse raw CSV rows into clean transaction dicts.
    Each transaction gets: date, type, description, amount (float),
    gst_rate (float), hsn_sac, party_name, party_gstin.
    
    Also enriches with: taxable, hsn_inferred, gstin_status.
    """
    parsed = []
    for row in raw_records:
        try:
            # Map columns based on potential source if needed, 
            # but for now we assume consistent keys as per requirement
            amount = float(row.get("amount", 0))
            gst_rate = float(row.get("gst_rate", 18))
            gstin = row.get("party_gstin", "").strip()
            hsn = row.get("hsn_sac", "").strip()
            
            # Basic Enrichment
            hsn_inferred = False
            if not hsn:
                # Dummy inference logic
                desc = row.get("description", "").lower()
                if "service" in desc: hsn = "9983"
                elif "goods" in desc: hsn = "0001"
                else: hsn = "9900"
                hsn_inferred = True

            gstin_status = "missing"
            if gstin:
                gstin_status = "valid" if len(gstin) == 15 else "invalid"

            txn = {
                "date": datetime.strptime(row["date"].strip(), "%Y-%m-%d").date(),
                "type": row["type"].strip().lower(),           # income / expense
                "description": row["description"].strip(),
                "amount": amount,
                "gst_rate": gst_rate,
                "taxable": gst_rate > 0,
                "hsn_sac": hsn,
                "hsn_inferred": hsn_inferred,
                "party_name": row.get("party_name", "").strip(),
                "party_gstin": gstin,
                "gstin_status": gstin_status,
            }
            parsed.append(txn)
        except (ValueError, KeyError) as e:
            print(f"[Parser] Skipping bad row {row}: {e}")
    print(f"[Parser] Parsed {len(parsed)} transactions.")
    return parsed


def parse_invoice(invoice_json: dict) -> dict:
    """
    Parse a JSON invoice into a normalized structure.
    Returns key fields needed for compliance checks.
    """
    totals = invoice_json.get("totals", {})
    return {
        "invoice_id": invoice_json.get("invoice_id"),
        "invoice_date": invoice_json.get("invoice_date"),
        "due_date": invoice_json.get("due_date"),
        "seller_gstin": invoice_json.get("seller", {}).get("gstin"),
        "buyer_gstin": invoice_json.get("buyer", {}).get("gstin"),
        "is_interstate": invoice_json.get("is_interstate", False),
        "place_of_supply": invoice_json.get("place_of_supply"),
        "subtotal": totals.get("subtotal", 0),
        "total_cgst": totals.get("total_cgst", 0),
        "total_sgst": totals.get("total_sgst", 0),
        "total_igst": totals.get("total_igst", 0),
        "grand_total": totals.get("grand_total", 0),
        "line_items": invoice_json.get("line_items", []),
    }
