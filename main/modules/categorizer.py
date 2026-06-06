"""
Module 3: Categorizer
Labels each transaction as income / expense and marks taxable status.
Also splits into output_tax (on sales) and input_tax (on purchases).
"""

# HSN/SAC codes that are GST-exempt (sample list, expand as needed)
EXEMPT_HSN_CODES = {"0101", "0201", "2501"}  # live animals, fresh meat, salt etc.

# Transaction types considered taxable by default under GST
TAXABLE_INCOME_KEYWORDS = ["service", "consulting", "software", "training",
                            "maintenance", "product", "sale", "supply"]


def is_taxable(txn: dict) -> bool:
    """
    A transaction is taxable if:
    - GST rate > 0
    - HSN/SAC not in exempt list
    """
    if txn.get("gst_rate", 0) == 0:
        return False
    if txn.get("hsn_sac", "") in EXEMPT_HSN_CODES:
        return False
    return True


def categorize(transactions: list) -> dict:
    """
    Returns a categorized breakdown:
    {
        "income": [...],
        "expense": [...],
        "taxable_income": [...],
        "taxable_expense": [...],
        "output_tax_transactions": [...],   # GST collected on sales
        "input_tax_transactions": [...],    # GST paid on purchases
    }
    """
    income = [t for t in transactions if t["type"] == "income"]
    expense = [t for t in transactions if t["type"] == "expense"]
    taxable_income = [t for t in income if is_taxable(t)]
    taxable_expense = [t for t in expense if is_taxable(t)]

    print(f"[Categorizer] Income: {len(income)} | Expense: {len(expense)}")
    print(f"[Categorizer] Taxable Income: {len(taxable_income)} | Taxable Expense: {len(taxable_expense)}")

    return {
        "income": income,
        "expense": expense,
        "taxable_income": taxable_income,
        "taxable_expense": taxable_expense,
        "output_tax_transactions": taxable_income,   # collect GST from buyers
        "input_tax_transactions": taxable_expense,   # pay GST to suppliers
    }
