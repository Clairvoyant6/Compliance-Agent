"""
Module 5: Agent Prompts
Concise, structured, token-efficient prompts for the 3-step agent pipeline.
Each function returns a ready-to-send prompt string.
"""

import json


# ─────────────────────────────────────────────
# STEP 1 — ANALYSIS PROMPT
# ─────────────────────────────────────────────

def build_analysis_prompt(financial_summary: dict) -> str:
    """
    Takes structured financial data.
    LLM should output: summary + key issues.
    """
    data_str = json.dumps(financial_summary, indent=2, default=str)

    return f"""You are a GST compliance analyst for Indian SMBs.

## Input Data
{data_str}

## Your Task
Analyze the above financial data and return a JSON with:
{{
  "period_summary": "<1-2 sentences on income/expense overview>",
  "gst_summary": "<1-2 sentences on GST liability>",
  "key_issues": ["<issue 1>", "<issue 2>", ...],
  "missing_data": ["<any missing fields or GSTINs>"],
  "risk_level": "LOW | MEDIUM | HIGH"
}}

Rules:
- Be concise. No preamble.
- Focus only on compliance-relevant facts.
- Return valid JSON only.
"""


# ─────────────────────────────────────────────
# STEP 2 — DECISION PROMPT
# ─────────────────────────────────────────────

def build_decision_prompt(analysis_output: dict, deadlines: list) -> str:
    """
    Takes analysis output + deadlines.
    LLM should output: compliance tasks + priority order.
    """
    analysis_str = json.dumps(analysis_output, indent=2, default=str)
    deadlines_str = json.dumps(
        [{"filing": d["filing"], "due_date": str(d["due_date"]),
          "days_left": d["days_left"], "status": d["status"]}
         for d in deadlines],
        indent=2
    )

    return f"""You are a GST compliance advisor for Indian SMBs.

## Analysis
{analysis_str}

## Upcoming Deadlines
{deadlines_str}

## Your Task
Based on the analysis and deadlines, return a JSON with:
{{
  "immediate_actions": [
    {{"task": "<task>", "deadline": "<date>", "priority": "HIGH|MEDIUM|LOW"}}
  ],
  "this_month_filings": ["<filing name>", ...],
  "tax_payment_required": true | false,
  "estimated_payment": "<amount or N/A>",
  "recommendation": "<1 sentence overall advice>"
}}

Rules:
- Sort by urgency (overdue first, then due soon).
- Return valid JSON only. No preamble.
"""


# ─────────────────────────────────────────────
# STEP 3 — ACTION PROMPT
# ─────────────────────────────────────────────

def build_action_prompt(decisions: dict, business_context: dict = None) -> str:
    """
    Takes decisions output.
    LLM should output: step-by-step instructions for the business owner.
    """
    decisions_str = json.dumps(decisions, indent=2, default=str)
    context_str = json.dumps(business_context or {}, indent=2)

    return f"""You are a friendly compliance assistant helping an Indian SMB owner.

## Compliance Decisions
{decisions_str}

## Business Context
{context_str}

## Your Task
Write clear, step-by-step instructions the business owner should follow RIGHT NOW.

Return a JSON with:
{{
  "greeting": "<1 line personalized greeting>",
  "steps": [
    {{
      "step_number": 1,
      "action": "<what to do>",
      "how_to": "<brief how-to or portal name>",
      "deadline": "<date or ASAP>",
      "estimated_time": "<e.g. 10 mins>"
    }}
  ],
  "important_notes": ["<note 1>", "<note 2>"],
  "helpline": "GST Helpdesk: 1800-103-4786 | IT Helpdesk: 1800-103-0025"
}}

Rules:
- Use plain language (avoid jargon).
- Steps must be actionable (not vague).
- Return valid JSON only. No preamble.
"""
