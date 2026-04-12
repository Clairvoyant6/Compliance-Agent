"""
LLM Wrapper — Generic & Pluggable
Swap between Claude, Gemini, OpenAI, or any LLM by changing LLM_PROVIDER.

Set environment variables:
  LLM_PROVIDER = "claude" | "gemini" | "openai" | "mock"
  LLM_API_KEY  = your API key
"""

import os
import json

LLM_PROVIDER = os.getenv("LLM_PROVIDER", "mock")   # default: mock (no real API)
LLM_API_KEY = os.getenv("LLM_API_KEY", "")


# ─────────────────────────────────────────────
# MOCK RESPONSE (for local testing, no API key needed)
# ─────────────────────────────────────────────

MOCK_ANALYSIS = {
    "period_summary": "Total income of ₹1,35,000 with expenses of ₹1,03,500 for March 2024.",
    "gst_summary": "Output GST of ₹21,600 collected; Input Tax Credit of ₹17,730 available. Net payable: ₹3,870.",
    "key_issues": [
        "Office rent paid to unregistered landlord — no ITC available.",
        "Stationery purchase lacks supplier GSTIN."
    ],
    "missing_data": ["party_gstin missing for: Landlord Prasad, Local Supplier"],
    "risk_level": "MEDIUM"
}

MOCK_DECISION = {
    "immediate_actions": [
        {"task": "File GSTR-1 for March 2024", "deadline": "2024-04-11", "priority": "HIGH"},
        {"task": "Pay net GST of ₹3,870", "deadline": "2024-04-20", "priority": "HIGH"},
        {"task": "File GSTR-3B for March 2024", "deadline": "2024-04-20", "priority": "HIGH"},
        {"task": "Collect GSTIN from Local Supplier", "deadline": "ASAP", "priority": "MEDIUM"}
    ],
    "this_month_filings": ["GSTR-1", "GSTR-3B"],
    "tax_payment_required": True,
    "estimated_payment": "₹3,870",
    "recommendation": "File GSTR-1 by April 11 and pay GST before GSTR-3B deadline on April 20."
}

MOCK_ACTION = {
    "greeting": "Hello! Here's your compliance checklist for March 2024.",
    "steps": [
        {
            "step_number": 1,
            "action": "File GSTR-1 (Sales Return)",
            "how_to": "Login → GST Portal (gst.gov.in) → Returns → GSTR-1 → Add invoices → Submit",
            "deadline": "2024-04-11",
            "estimated_time": "20 mins"
        },
        {
            "step_number": 2,
            "action": "Pay Net GST of ₹3,870",
            "how_to": "GST Portal → Payments → Create Challan → Select IGST/CGST/SGST → Pay via net banking",
            "deadline": "2024-04-20",
            "estimated_time": "10 mins"
        },
        {
            "step_number": 3,
            "action": "File GSTR-3B (Summary Return)",
            "how_to": "GST Portal → Returns → GSTR-3B → Fill summary values → Submit with DSC/EVC",
            "deadline": "2024-04-20",
            "estimated_time": "15 mins"
        },
        {
            "step_number": 4,
            "action": "Collect GSTIN from Local Supplier",
            "how_to": "Contact your stationery supplier and request their GSTIN for future invoices",
            "deadline": "ASAP",
            "estimated_time": "5 mins"
        }
    ],
    "important_notes": [
        "ITC on rent to unregistered landlord is NOT claimable under GST.",
        "Keep all purchase invoices safe for ITC reconciliation.",
        "Late GSTR-3B attracts 18% interest per annum on unpaid tax."
    ],
    "helpline": "GST Helpdesk: 1800-103-4786 | IT Helpdesk: 1800-103-0025"
}


# ─────────────────────────────────────────────
# REAL LLM CALL (plug your provider here)
# ─────────────────────────────────────────────

def call_llm(prompt: str, step_name: str = "") -> dict:
    """
    Generic LLM caller. Returns parsed JSON dict from model response.
    Switch LLM_PROVIDER env var to change model.
    """
    provider = LLM_PROVIDER.lower()
    print(f"[LLM] Calling provider='{provider}' for step='{step_name}'")

    if provider == "mock":
        return _mock_response(step_name)

    elif provider == "claude":
        return _call_claude(prompt)

    elif provider == "gemini":
        return _call_gemini(prompt)

    elif provider == "openai":
        return _call_openai(prompt)

    else:
        raise ValueError(f"Unknown LLM_PROVIDER: {provider}")


# ── Mock ─────────────────────────────────────

def _mock_response(step_name: str) -> dict:
    """Return hardcoded mock responses for testing without an API key."""
    mapping = {
        "analysis": MOCK_ANALYSIS,
        "decision": MOCK_DECISION,
        "action": MOCK_ACTION,
    }
    return mapping.get(step_name, {"error": "No mock for this step"})


# ── Claude (Anthropic) ───────────────────────

def _call_claude(prompt: str) -> dict:
    """
    Example Claude API call.
    pip install anthropic
    """
    import anthropic  # type: ignore
    client = anthropic.Anthropic(api_key=LLM_API_KEY)
    message = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = message.content[0].text
    return _safe_parse_json(raw)


# ── Gemini (Google) ──────────────────────────

def _call_gemini(prompt: str) -> dict:
    """
    Example Gemini API call.
    pip install google-generativeai
    """
    import google.generativeai as genai  # type: ignore
    genai.configure(api_key=LLM_API_KEY)
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return _safe_parse_json(response.text)


# ── OpenAI ───────────────────────────────────

def _call_openai(prompt: str) -> dict:
    """
    Example OpenAI API call.
    pip install openai
    """
    from openai import OpenAI  # type: ignore
    client = OpenAI(api_key=LLM_API_KEY)
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"},
    )
    raw = response.choices[0].message.content
    return _safe_parse_json(raw)


# ── Util ─────────────────────────────────────

def _safe_parse_json(text: str) -> dict:
    """Strip markdown fences and parse JSON safely."""
    clean = text.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    try:
        return json.loads(clean)
    except json.JSONDecodeError as e:
        print(f"[LLM] JSON parse error: {e}")
        return {"raw_response": text, "parse_error": str(e)}
