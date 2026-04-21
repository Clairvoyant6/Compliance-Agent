"""
APScheduler — daily digest runner.

Starts a background scheduler on FastAPI boot. At 08:00 IST every day
(or SCHEDULER_CRON override), iterates NotificationPref rows with
daily_digest=True and emails each user a digest.

Disable entirely with ENABLE_SCHEDULER=false.
"""

from __future__ import annotations

import os
from datetime import date
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

from db import SessionLocal
from models import NotificationPref, Dataset
from notifications import send_email, build_daily_digest_html

_scheduler: BackgroundScheduler | None = None


def _latest_dataset_summary() -> tuple[str, list[dict], dict]:
    """Grab the most recent processed dataset's deadlines+health for the digest."""
    with SessionLocal() as db:
        ds = (
            db.query(Dataset)
            .filter(Dataset.processed == True)  # noqa: E712
            .order_by(Dataset.processed_at.desc())
            .first()
        )
        if not ds:
            return ("Your Business", [], {})
        data = ds.processed_data or {}
        return (ds.name or "Your Business", data.get("deadlines", []), data.get("health", {}))


def _run_daily_digest() -> None:
    business, deadlines, health = _latest_dataset_summary()
    print(f"[scheduler] running daily digest for {date.today()}")

    with SessionLocal() as db:
        prefs = (
            db.query(NotificationPref)
            .filter(NotificationPref.daily_digest == True)  # noqa: E712
            .filter(NotificationPref.email_alerts == True)  # noqa: E712
            .all()
        )

    if not prefs:
        print("[scheduler] no subscribers — skipping")
        return

    html = build_daily_digest_html(business, deadlines, health)
    for pref in prefs:
        send_email(pref.email, f"ComplianceIQ digest — {date.today().isoformat()}", html)


def start_scheduler() -> BackgroundScheduler | None:
    """Start the APScheduler. Idempotent."""
    global _scheduler
    if os.getenv("ENABLE_SCHEDULER", "true").lower() in ("false", "0", "no"):
        print("[scheduler] disabled via ENABLE_SCHEDULER")
        return None
    if _scheduler and _scheduler.running:
        return _scheduler

    cron = os.getenv("SCHEDULER_CRON", "0 8 * * *")   # 08:00 daily IST
    try:
        trigger = CronTrigger.from_crontab(cron, timezone="Asia/Kolkata")
    except Exception as e:
        print(f"[scheduler] invalid SCHEDULER_CRON '{cron}': {e} — using default")
        trigger = CronTrigger(hour=8, minute=0, timezone="Asia/Kolkata")

    _scheduler = BackgroundScheduler()
    _scheduler.add_job(_run_daily_digest, trigger, id="daily_digest", replace_existing=True)
    _scheduler.start()
    print(f"[scheduler] started — cron='{cron}' (Asia/Kolkata)")
    return _scheduler


def stop_scheduler() -> None:
    global _scheduler
    if _scheduler and _scheduler.running:
        _scheduler.shutdown(wait=False)
        _scheduler = None
        print("[scheduler] stopped")
