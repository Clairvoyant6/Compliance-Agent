"""
Agent Pipeline — 3-Step Orchestrator
Step 1: Analysis   → Understand the financial data
Step 2: Decision   → Decide compliance tasks and priorities
Step 3: Action     → Generate step-by-step user guidance
"""

from agent.prompts import (
    build_analysis_prompt,
    build_decision_prompt,
    build_action_prompt,
)
from agent.llm_wrapper import call_llm


def run_agent_pipeline(
    financial_summary: dict,
    deadlines: list,
    business_context: dict = None,
) -> dict:
    """
    Runs the full 3-step compliance agent pipeline.

    Args:
        financial_summary: Output from compliance_logic (GST, categories, health)
        deadlines:         List of compliance deadlines from get_deadlines()
        business_context:  Optional dict with business name, type, turnover etc.

    Returns:
        {
            "analysis": {...},
            "decision": {...},
            "action": {...},
        }
    """

    print("\n" + "="*50)
    print("  COMPLIANCE AGENT — STARTING PIPELINE")
    print("="*50)

    # ── STEP 1: ANALYSIS ─────────────────────
    print("\n[Agent] Step 1: Analysis...")
    analysis_prompt = build_analysis_prompt(financial_summary)
    analysis_result = call_llm(analysis_prompt, step_name="analysis")
    print(f"[Agent] Risk Level: {analysis_result.get('risk_level', 'N/A')}")

    # ── STEP 2: DECISION ─────────────────────
    print("\n[Agent] Step 2: Decision...")
    decision_prompt = build_decision_prompt(analysis_result, deadlines)
    decision_result = call_llm(decision_prompt, step_name="decision")
    print(f"[Agent] Actions identified: {len(decision_result.get('immediate_actions', []))}")

    # ── STEP 3: ACTION ───────────────────────
    print("\n[Agent] Step 3: Action Guidance...")
    action_prompt = build_action_prompt(decision_result, business_context)
    action_result = call_llm(action_prompt, step_name="action")
    print(f"[Agent] Steps generated: {len(action_result.get('steps', []))}")

    print("\n[Agent] Pipeline complete.")

    return {
        "analysis": analysis_result,
        "decision": decision_result,
        "action": action_result,
    }
