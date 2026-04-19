"""
Notification service — email (Resend) + browser push stub.

Configuration via env:
  RESEND_API_KEY   = Resend API key
  NOTIFY_FROM      = sender address (defaults to "ComplianceIQ <onboarding@resend.dev>")

If RESEND_API_KEY is missing, emails are logged to stdout only — dev-friendly
and the server keeps working without any external dependency.
"""

from __future__ import annotations

import os
from datetime import date
from typing import Iterable


FROM_ADDRESS = os.getenv("NOTIFY_FROM", "ComplianceIQ <onboarding@resend.dev>")


def send_email(to: str, subject: str, html: str) -> dict:
    """
    Send an email. Returns {"status": "sent"|"logged"|"error", ...}.
    Never raises — compliance notifications must not take down the API.
    """
    api_key = os.getenv("RESEND_API_KEY", "")
    if not api_key:
        print(f"[notify] (no RESEND_API_KEY) would email {to} — {subject}")
        return {"status": "logged", "to": to}

    try:
        import resend  # type: ignore
        resend.api_key = api_key
        res = resend.Emails.send({
            "from": FROM_ADDRESS,
            "to": [to],
            "subject": subject,
            "html": html,
        })
        return {"status": "sent", "id": res.get("id"), "to": to}
    except Exception as e:
        print(f"[notify] email error: {e}")
        return {"status": "error", "error": str(e), "to": to}


def build_daily_digest_html(business_name: str, deadlines: list[dict], health: dict) -> str:
    """Render a minimal, email-safe HTML digest (no external CSS)."""
    today = date.today().isoformat()
    rows = ""
    for d in deadlines[:8]:
        due = d.get("due_date", "")
        priority = d.get("priority", "")
        color = "#d63d3d" if priority == "CRITICAL" else "#e08b00" if priority == "HIGH" else "#2f68c9"
        rows += (
            f'<tr>'
            f'<td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600">{d.get("filing", "")}</td>'
            f'<td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555">{due}</td>'
            f'<td style="padding:8px 12px;border-bottom:1px solid #eee;color:{color};font-weight:600">{priority}</td>'
            f'</tr>'
        )

    score = health.get("score", "–")
    status = health.get("overall_status", "Unknown")

    return f"""
    <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:560px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 4px">ComplianceIQ daily digest</h2>
      <p style="color:#666;margin:0 0 20px">{business_name} — {today}</p>

      <div style="background:#f5f7fb;padding:16px;border-radius:8px;margin-bottom:20px">
        <div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.08em">Compliance score</div>
        <div style="font-size:28px;font-weight:700">{score}/100 <span style="font-size:14px;color:#2f68c9">{status}</span></div>
      </div>

      <h3 style="margin:24px 0 8px;font-size:14px">Upcoming deadlines</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#fafafa">
            <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #eee">Filing</th>
            <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #eee">Due</th>
            <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #eee">Priority</th>
          </tr>
        </thead>
        <tbody>{rows or '<tr><td colspan="3" style="padding:12px;color:#888">No upcoming deadlines</td></tr>'}</tbody>
      </table>

      <p style="color:#999;font-size:11px;margin-top:24px">
        You are receiving this because daily digest is enabled in ComplianceIQ Settings.
      </p>
    </div>
    """


def broadcast_push(subscriptions: Iterable[dict], title: str, body: str) -> dict:
    """
    Browser push stub. Real Web Push requires VAPID keys + a worker;
    we log for now and return counts so the UI can reflect attempts.
    """
    count = 0
    for sub in subscriptions:
        endpoint = sub.get("endpoint", "?")
        print(f"[notify] would push to {endpoint}: {title} / {body}")
        count += 1
    return {"status": "logged", "count": count}
