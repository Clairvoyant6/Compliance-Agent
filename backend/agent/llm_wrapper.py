"""
LLM Wrapper — multi-provider router with caching.

Supports:  groq | gemini | openai | claude | mock

Set environment variables:
  LLM_PROVIDER    = "groq" | "gemini" | "openai" | "claude" | "mock"
  LLM_API_KEY     = provider api key
  LLM_MODEL       = (optional) override default model for the provider

Features added over the original:
- Fixed Gemini model name ("gemini-pro" is dead → "gemini-1.5-flash").
- Groq support (free, fastest tier — recommended default when key is set).
- LRU cache keyed on (provider, model, prompt) to cut duplicate API spend.
- Per-provider default model registry, overridable via LLM_MODEL.
- `call_llm_text()` for free-form responses (chat); `call_llm()` for JSON.
- Graceful fallback to mock on errors so the UI never hangs.
"""

from __future__ import annotations

import hashlib
import json
import os
from functools import lru_cache
from typing import Any


# ─── Provider defaults ────────────────────────────────────────────────────────

DEFAULT_MODELS: dict[str, str] = {
    "groq":   "llama-3.3-70b-versatile",   # fast + free tier
    "gemini": "gemini-3.5-flash",           # updated from gemini-1.5-flash
    "openai": "gpt-4o-mini",
    "claude": "claude-3-5-haiku-latest",
}


def _env(key: str, default: str = "") -> str:
    """Read env var fresh each call so Settings updates take effect."""
    return os.getenv(key, default)


def _resolve_provider() -> str:
    return "gemini"


def _resolve_model(provider: str) -> str:
    return _env("LLM_MODEL") or DEFAULT_MODELS.get(provider, "")


# ─── Mock responses (used when LLM_PROVIDER=mock or on errors) ────────────────

MOCK_ANALYSIS = {
    "period_summary": "Total income of ₹1,35,000 with expenses of ₹1,03,500 for March 2024.",
    "gst_summary": "Output GST of ₹21,600 collected; Input Tax Credit of ₹17,730 available. Net payable: ₹3,870.",
    "key_issues": [
        "Office rent paid to unregistered landlord — no ITC available.",
        "Stationery purchase lacks supplier GSTIN.",
    ],
    "missing_data": ["party_gstin missing for: Landlord Prasad, Local Supplier"],
    "risk_level": "MEDIUM",
}

MOCK_DECISION = {
    "immediate_actions": [
        {"task": "File GSTR-1 for March 2024", "deadline": "2024-04-11", "priority": "HIGH"},
        {"task": "Pay net GST of ₹3,870", "deadline": "2024-04-20", "priority": "HIGH"},
        {"task": "File GSTR-3B for March 2024", "deadline": "2024-04-20", "priority": "HIGH"},
        {"task": "Collect GSTIN from Local Supplier", "deadline": "ASAP", "priority": "MEDIUM"},
    ],
    "this_month_filings": ["GSTR-1", "GSTR-3B"],
    "tax_payment_required": True,
    "estimated_payment": "₹3,870",
    "recommendation": "File GSTR-1 by April 11 and pay GST before GSTR-3B deadline on April 20.",
}

MOCK_ACTION = {
    "greeting": "Hello! Here's your compliance checklist for March 2024.",
    "steps": [
        {"step_number": 1, "action": "File GSTR-1 (Sales Return)",
         "how_to": "Login → GST Portal → Returns → GSTR-1 → Add invoices → Submit",
         "deadline": "2024-04-11", "estimated_time": "20 mins"},
        {"step_number": 2, "action": "Pay Net GST of ₹3,870",
         "how_to": "GST Portal → Payments → Create Challan → Pay via net banking",
         "deadline": "2024-04-20", "estimated_time": "10 mins"},
        {"step_number": 3, "action": "File GSTR-3B (Summary Return)",
         "how_to": "GST Portal → Returns → GSTR-3B → Fill summary → Submit with DSC/EVC",
         "deadline": "2024-04-20", "estimated_time": "15 mins"},
    ],
    "important_notes": [
        "ITC on rent to unregistered landlord is NOT claimable under GST.",
        "Keep all purchase invoices safe for ITC reconciliation.",
    ],
    "helpline": "GST Helpdesk: 1800-103-4786",
}


def _mock_response(step_name: str) -> dict:
    return {"analysis": MOCK_ANALYSIS, "decision": MOCK_DECISION, "action": MOCK_ACTION}.get(
        step_name, {"error": "No mock for this step"}
    )


# ─── Cache layer ──────────────────────────────────────────────────────────────

def _cache_key(provider: str, model: str, prompt: str) -> str:
    digest = hashlib.sha256(prompt.encode("utf-8")).hexdigest()[:20]
    return f"{provider}:{model}:{digest}"


@lru_cache(maxsize=256)
def _cached_text(cache_key: str, _fresh_prompt: str) -> str:
    """
    Placeholder — real dispatch happens via `_call_provider_text`.
    This decorator lets us memoize by (provider+model+prompt) hash.
    """
    # Should never be reached directly — populated via _call_and_cache.
    return ""


# ─── Text completion (free-form, used by /agent/chat) ─────────────────────────

def call_llm_text(prompt: str, step_name: str = "") -> str:
    """
    Run a free-form text completion. Used for chat.
    Returns a plain-text string (markdown allowed).
    """
    provider = _resolve_provider()
    model = _resolve_model(provider)
    print(f"[LLM] text provider={provider} model={model} step={step_name}")

    if provider == "mock":
        return _mock_text_response(step_name)

    key = _cache_key(provider, model, prompt)
    cached = _TEXT_CACHE.get(key)
    if cached is not None:
        return cached

    try:
        text = _dispatch_text(provider, model, prompt)
    except Exception as e:
        print(f"[LLM] error calling {provider}: {e} — falling back to mock")
        return f"(LLM error: {e})\n\n" + _mock_text_response(step_name)

    _TEXT_CACHE[key] = text
    return text


_TEXT_CACHE: dict[str, str] = {}
_JSON_CACHE: dict[str, dict] = {}


def _mock_text_response(_step_name: str) -> str:
    return (
        "**Mock response** (LLM_PROVIDER=mock).\n\n"
        "Set a real provider and API key in Settings or via environment variables "
        "(`LLM_PROVIDER=groq`, `LLM_API_KEY=...`) to get live AI answers."
    )


# ─── JSON completion (structured, used by agent pipeline) ─────────────────────

def call_llm(prompt: str, step_name: str = "") -> dict:
    """
    Run an LLM call expecting a JSON object response.
    Returns a dict. On parse error, returns {"raw_response": ..., "parse_error": ...}.
    """
    provider = _resolve_provider()
    model = _resolve_model(provider)
    print(f"[LLM] json provider={provider} model={model} step={step_name}")

    if provider == "mock":
        return _mock_response(step_name)

    key = _cache_key(provider, model, prompt)
    cached = _JSON_CACHE.get(key)
    if cached is not None:
        return cached

    try:
        raw = _dispatch_text(provider, model, prompt, json_mode=True)
    except Exception as e:
        print(f"[LLM] error calling {provider}: {e} — falling back to mock")
        return _mock_response(step_name)

    parsed = _safe_parse_json(raw)
    _JSON_CACHE[key] = parsed
    return parsed


# ─── Provider dispatch ────────────────────────────────────────────────────────

def _dispatch_text(provider: str, model: str, prompt: str, json_mode: bool = False) -> str:
    if provider == "groq":
        return _call_groq(model, prompt, json_mode)
    if provider == "gemini":
        return _call_gemini(model, prompt, json_mode)
    if provider == "openai":
        return _call_openai(model, prompt, json_mode)
    if provider == "claude":
        return _call_claude(model, prompt)
    raise ValueError(f"Unknown LLM_PROVIDER: {provider}")


def _call_groq(model: str, prompt: str, json_mode: bool) -> str:
    from groq import Groq  # type: ignore
    client = Groq(api_key=_env("LLM_API_KEY"))
    kwargs: dict[str, Any] = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.3,
    }
    if json_mode:
        kwargs["response_format"] = {"type": "json_object"}
    resp = client.chat.completions.create(**kwargs)
    return resp.choices[0].message.content or ""


def _call_gemini(model: str, prompt: str, json_mode: bool) -> str:
    import google.generativeai as genai  # type: ignore
    genai.configure(api_key=_env("LLM_API_KEY"))
    config: dict[str, Any] = {"temperature": 0.3}
    if json_mode:
        config["response_mime_type"] = "application/json"
    gm = genai.GenerativeModel(model, generation_config=config)
    resp = gm.generate_content(prompt)
    return resp.text or ""


def _call_openai(model: str, prompt: str, json_mode: bool) -> str:
    from openai import OpenAI  # type: ignore
    client = OpenAI(api_key=_env("LLM_API_KEY"))
    kwargs: dict[str, Any] = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.3,
    }
    if json_mode:
        kwargs["response_format"] = {"type": "json_object"}
    resp = client.chat.completions.create(**kwargs)
    return resp.choices[0].message.content or ""


def _call_claude(model: str, prompt: str) -> str:
    import anthropic  # type: ignore
    client = anthropic.Anthropic(api_key=_env("LLM_API_KEY"))
    msg = client.messages.create(
        model=model,
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}],
    )
    return msg.content[0].text


# ─── Utilities ────────────────────────────────────────────────────────────────

def _safe_parse_json(text: str) -> dict:
    """Strip markdown fences and parse JSON safely."""
    clean = (
        text.strip()
        .removeprefix("```json")
        .removeprefix("```")
        .removesuffix("```")
        .strip()
    )
    try:
        return json.loads(clean)
    except json.JSONDecodeError as e:
        print(f"[LLM] JSON parse error: {e}")
        return {"raw_response": text, "parse_error": str(e)}


def clear_cache() -> None:
    """Clear both text and JSON LLM caches. Called when provider changes."""
    _TEXT_CACHE.clear()
    _JSON_CACHE.clear()


def available_providers() -> list[dict]:
    """Metadata for the frontend LLM picker."""
    return [
        {"id": "gemini", "name": "Google Gemini 1.5",     "free": True,  "needs_key": True},
    ]


# Legacy module-level constants retained for any old imports
LLM_PROVIDER = _resolve_provider()
LLM_API_KEY = _env("LLM_API_KEY")
