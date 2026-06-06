"""
Module 1: Input Handler
Reads CSV or JSON input files and returns raw records.
"""

import csv
import json
from pathlib import Path


def load_csv(filepath: str) -> list:
    """Load transactions from a CSV file."""
    records = []
    with open(filepath, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            records.append(dict(row))
    print(f"[InputHandler] Loaded {len(records)} records from CSV.")
    return records


def load_json(filepath: str):
    """Load invoice or data from a JSON file."""
    with open(filepath, encoding="utf-8") as f:
        data = json.load(f)
    print(f"[InputHandler] Loaded JSON from {filepath}.")
    return data


def load_input(filepath: str):
    """Auto-detect format and load input."""
    ext = Path(filepath).suffix.lower()
    if ext == ".csv":
        return load_csv(filepath)
    elif ext == ".json":
        return load_json(filepath)
    else:
        raise ValueError(f"Unsupported file format: {ext}")
