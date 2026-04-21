"""
Report exporters — CSV and PDF.

CSV uses stdlib; PDF uses reportlab (pure-Python, no external binaries).
Returns raw bytes so the FastAPI endpoint can stream them.
"""

from __future__ import annotations

import csv
import io
from datetime import datetime
from typing import Any


# ─── CSV ──────────────────────────────────────────────────────────────────────

def transactions_to_csv(transactions: list[dict]) -> bytes:
    """Flatten parsed transactions to a CSV."""
    buf = io.StringIO()
    if not transactions:
        return b""

    fieldnames = [
        "date", "type", "description", "amount", "gst_rate",
        "taxable", "hsn_sac", "party_name", "party_gstin", "gstin_status",
    ]
    writer = csv.DictWriter(buf, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    for t in transactions:
        row = {k: t.get(k, "") for k in fieldnames}
        # Normalise date
        if hasattr(row["date"], "isoformat"):
            row["date"] = row["date"].isoformat()
        writer.writerow(row)
    return buf.getvalue().encode("utf-8")


def report_to_csv(report: dict) -> bytes:
    """Flatten a compliance report's key sections into a single CSV."""
    buf = io.StringIO()
    w = csv.writer(buf)
    w.writerow(["ComplianceIQ Report"])
    w.writerow(["Generated", datetime.utcnow().isoformat()])
    w.writerow([])

    biz = report.get("business", {}) or {}
    w.writerow(["Business"])
    for k, v in biz.items():
        w.writerow([k, v])
    w.writerow([])

    gst = ((report.get("gst_summary") or {}).get("net_gst_payable")) or {}
    w.writerow(["GST Summary"])
    w.writerow(["Amount", gst.get("amount", "")])
    w.writerow(["Status", gst.get("status", "")])
    w.writerow(["CGST offset", gst.get("cgst_offset", "")])
    w.writerow(["SGST offset", gst.get("sgst_offset", "")])
    w.writerow(["IGST offset", gst.get("igst_offset", "")])
    w.writerow([])

    w.writerow(["Deadlines"])
    w.writerow(["Filing", "Due", "Priority", "Days Left", "Status"])
    for d in report.get("deadlines", []) or []:
        w.writerow([
            d.get("filing", ""), d.get("due_date", ""),
            d.get("priority", ""), d.get("days_left", ""), d.get("status", ""),
        ])
    w.writerow([])

    hc = report.get("health_check", {}) or {}
    w.writerow(["Health Check"])
    w.writerow(["Score", hc.get("score", "")])
    w.writerow(["Status", hc.get("overall_status", "")])
    for issue in hc.get("issues", []) or []:
        w.writerow(["Issue", issue])
    for warn in hc.get("warnings", []) or []:
        w.writerow(["Warning", warn])

    return buf.getvalue().encode("utf-8")


# ─── PDF ──────────────────────────────────────────────────────────────────────

def report_to_pdf(report: dict) -> bytes:
    """
    Render a compliance report as a single-page PDF.
    Uses reportlab's platypus flowables for clean typography.
    """
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.units import mm
    from reportlab.lib import colors
    from reportlab.platypus import (
        SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
    )

    buf = io.BytesIO()
    doc = SimpleDocTemplate(
        buf, pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm,
        title="ComplianceIQ Report",
    )

    styles = getSampleStyleSheet()
    h1 = ParagraphStyle("h1", parent=styles["Heading1"], fontSize=18, textColor=colors.HexColor("#111"))
    h2 = ParagraphStyle("h2", parent=styles["Heading2"], fontSize=13, textColor=colors.HexColor("#2f68c9"))
    muted = ParagraphStyle("muted", parent=styles["Normal"], fontSize=9, textColor=colors.HexColor("#666"))
    body = ParagraphStyle("body", parent=styles["Normal"], fontSize=10, leading=14)

    story: list[Any] = []
    biz = report.get("business", {}) or {}
    story.append(Paragraph("Compliance Report", h1))
    story.append(Paragraph(
        f"{biz.get('name', '—')} &nbsp;·&nbsp; {biz.get('gstin', '—')} &nbsp;·&nbsp; {biz.get('period', '—')}",
        muted,
    ))
    story.append(Paragraph(f"Generated {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}", muted))
    story.append(Spacer(1, 10))

    # GST section
    net = (report.get("gst_summary") or {}).get("net_gst_payable", {}) or {}
    story.append(Paragraph("GST Summary", h2))
    story.append(Paragraph(
        f"<b>Net payable:</b> ₹{net.get('amount', 0):,.2f} &nbsp; "
        f"<i>({net.get('status', '—')})</i>", body,
    ))
    story.append(Paragraph(
        f"CGST ₹{net.get('cgst_offset', 0):,.2f} · "
        f"SGST ₹{net.get('sgst_offset', 0):,.2f} · "
        f"IGST ₹{net.get('igst_offset', 0):,.2f}", body,
    ))
    story.append(Spacer(1, 10))

    # Health
    hc = report.get("health_check", {}) or {}
    story.append(Paragraph("Health Check", h2))
    story.append(Paragraph(
        f"<b>Score:</b> {hc.get('score', '—')}/100 &nbsp; "
        f"<b>Status:</b> {hc.get('overall_status', '—')}", body,
    ))
    for kind, items in (("Issues", hc.get("issues", [])), ("Warnings", hc.get("warnings", []))):
        if items:
            story.append(Paragraph(f"<b>{kind}:</b>", body))
            for it in items:
                story.append(Paragraph(f"• {it}", body))
    story.append(Spacer(1, 10))

    # Deadlines
    story.append(Paragraph("Deadlines", h2))
    dls = report.get("deadlines", []) or []
    if dls:
        table_data = [["Filing", "Due", "Priority", "Days left", "Status"]]
        for d in dls[:12]:
            table_data.append([
                d.get("filing", ""), d.get("due_date", ""),
                d.get("priority", ""), str(d.get("days_left", "")), d.get("status", ""),
            ])
        t = Table(table_data, hAlign="LEFT", colWidths=[40 * mm, 28 * mm, 26 * mm, 22 * mm, 26 * mm])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f0f2f8")),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor("#333")),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 9),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 6),
            ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#ddd")),
        ]))
        story.append(t)
    else:
        story.append(Paragraph("No deadlines in this period.", muted))

    # Agent analysis
    analysis = report.get("agent_analysis") or {}
    if analysis:
        story.append(Spacer(1, 10))
        story.append(Paragraph("AI Analysis", h2))
        story.append(Paragraph(f"<b>Risk level:</b> {analysis.get('risk_level', '—')}", body))
        if analysis.get("period_summary"):
            story.append(Paragraph(analysis["period_summary"], body))
        if analysis.get("key_issues"):
            for k in analysis["key_issues"]:
                story.append(Paragraph(f"• {k}", body))

    doc.build(story)
    return buf.getvalue()
