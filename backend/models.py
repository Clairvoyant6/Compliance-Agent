"""
SQLAlchemy ORM models for ComplianceIQ.

Stores the "source of truth" that previously lived only in an
in-memory DatasetStore. Raw payloads and processed results are
persisted as JSON so the Python pipeline doesn't need to be
refactored against a normalized schema.
"""

from datetime import datetime
from sqlalchemy import Column, String, Integer, DateTime, Boolean, Text, JSON, ForeignKey
from sqlalchemy.orm import relationship

from db import Base


class Dataset(Base):
    __tablename__ = "datasets"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    filename = Column(String, default="")
    rows = Column(Integer, default=0)
    source = Column(String, default="")           # "bank", "tally", "invoice", etc.
    period = Column(String, default="")           # "March 2024", "Q4 FY2026", ...
    processed = Column(Boolean, default=False)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
    processed_at = Column(DateTime, nullable=True)

    # Raw and processed payloads (JSON blobs for flexibility)
    raw = Column(JSON, default=list)
    invoice_raw = Column(JSON, default=dict)
    processed_data = Column(JSON, default=dict)   # categorized, gst, deadlines, health, agent_output

    audit_logs = relationship("AuditLog", back_populates="dataset", cascade="all, delete-orphan")


class AuditLog(Base):
    """Every backend action creates an audit row — who did what, when."""
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    actor = Column(String, default="system")       # user email or "system"
    action = Column(String, nullable=False)        # "upload", "process", "agent_chat", ...
    target = Column(String, default="")            # dataset_id, filing id, etc.
    dataset_id = Column(String, ForeignKey("datasets.id", ondelete="SET NULL"), nullable=True)
    meta = Column(JSON, default=dict)              # arbitrary context

    dataset = relationship("Dataset", back_populates="audit_logs")


class NotificationPref(Base):
    """Per-user notification preferences. Single-user MVP keyed by email."""
    __tablename__ = "notification_prefs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String, unique=True, index=True, nullable=False)
    deadline_reminders = Column(Boolean, default=True)
    filing_alerts = Column(Boolean, default=True)
    mismatch_alerts = Column(Boolean, default=True)
    ai_insights = Column(Boolean, default=True)
    email_alerts = Column(Boolean, default=True)
    daily_digest = Column(Boolean, default=False)
    push_subscription = Column(JSON, nullable=True)    # browser push endpoint
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Filing(Base):
    """Historical filings — used for period comparison and audit trail."""
    __tablename__ = "filings"

    id = Column(Integer, primary_key=True, autoincrement=True)
    dataset_id = Column(String, ForeignKey("datasets.id", ondelete="CASCADE"), index=True)
    period = Column(String, index=True)           # "March 2024"
    form = Column(String)                          # "GSTR-3B"
    status = Column(String, default="draft")       # draft | filed | late
    net_gst = Column(JSON, default=dict)
    filed_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
