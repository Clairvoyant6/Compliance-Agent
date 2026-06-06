"""
Database layer — SQLAlchemy engine & session factory.

Swaps between SQLite (default, zero-config) and any Postgres DSN
(Supabase, Neon, AWS) via the DATABASE_URL env var.

Examples:
  DATABASE_URL=sqlite:///./compliance.db              # default
  DATABASE_URL=postgresql+psycopg://user:pass@host/db # Supabase/Neon
"""

import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./compliance.db")

# SQLite needs a special flag for multi-threaded FastAPI access.
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """FastAPI dependency — yields a DB session, closes on exit."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db():
    """Create all tables. Safe to call repeatedly."""
    # Import models so they register with Base before create_all
    from models import Dataset, AuditLog, NotificationPref, Filing  # noqa: F401
    Base.metadata.create_all(bind=engine)
    print(f"[DB] Initialized at {DATABASE_URL}")
