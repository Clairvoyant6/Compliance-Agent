# 🇮🇳 AI-Powered GST Compliance Assistant for Indian SMBs

A modular, hackathon-ready backend prototype demonstrating:
**Input → Parse → Categorize → GST Logic → Agent Pipeline → Guidance**

---

## 📁 Folder Structure

```
compliance_assistant/
├── main.py                        # Entry point — run this
├── requirements.txt
│
├── data/
│   ├── transactions.csv           # Sample transaction data
│   └── sample_invoice.json        # Sample invoice
│
├── modules/
│   ├── input_handler.py           # CSV/JSON loader
│   ├── data_parser.py             # Typed transaction parser
│   ├── categorizer.py             # income/expense/taxable tagging
│   └── compliance_logic.py        # GST calc + deadlines + health check
│
├── agent/
│   ├── prompts.py                 # 3 agent prompts (Analysis/Decision/Action)
│   ├── llm_wrapper.py             # Pluggable LLM caller (mock/Claude/Gemini/OpenAI)
│   └── pipeline.py                # 3-step agent orchestrator
│
└── outputs/
    └── compliance_report.json     # Generated output report
```

---

## 🚀 Quick Start

```bash
# 1. Clone / enter project directory
cd compliance_assistant

# 2. (Optional) Create virtual environment
python -m venv venv && source venv/bin/activate

# 3. Install deps (none required for mock mode)
pip install -r requirements.txt

# 4. Run in mock mode (no API key needed)
python main.py
```

---

## 🔌 Switch LLM Provider

Set environment variables before running:

```bash
# Use Claude (Anthropic)
export LLM_PROVIDER=claude
export LLM_API_KEY=sk-ant-...
pip install anthropic
python main.py

# Use Gemini
export LLM_PROVIDER=gemini
export LLM_API_KEY=AIza...
pip install google-generativeai
python main.py

# Use OpenAI
export LLM_PROVIDER=openai
export LLM_API_KEY=sk-...
pip install openai
python main.py

# Mock mode (default — no API key needed)
export LLM_PROVIDER=mock
python main.py
```

---

## 📊 Sample CSV Format

```csv
date,type,description,amount,gst_rate,hsn_sac,party_name,party_gstin
2024-03-01,income,Software Services,50000,18,998314,Acme Corp,27AABCU9603R1ZX
2024-03-05,expense,Office Rent,15000,18,997212,Landlord Prasad,
```

| Column        | Description                              |
|---------------|------------------------------------------|
| `date`        | YYYY-MM-DD                               |
| `type`        | `income` or `expense`                    |
| `description` | What the transaction is for              |
| `amount`      | Base amount (excl. GST)                  |
| `gst_rate`    | 0 / 5 / 12 / 18 / 28                    |
| `hsn_sac`     | HSN (goods) or SAC (services) code       |
| `party_name`  | Buyer/Seller name                        |
| `party_gstin` | GSTIN of counterparty (blank = unregistered) |

---

## 🧠 Agent Pipeline

```
financial_data
      │
      ▼
┌─────────────┐
│  STEP 1     │  Analysis Prompt  →  period summary, key issues, risk level
│  ANALYSIS   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  STEP 2     │  Decision Prompt  →  compliance tasks, deadlines, payment due
│  DECISION   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  STEP 3     │  Action Prompt    →  step-by-step instructions for owner
│  ACTION     │
└─────────────┘
```

---

## 📤 Final Output (compliance_report.json)

```json
{
  "business": { ... },
  "gst_summary": {
    "output_tax": { "total_gst": 21600 },
    "input_tax_credit": { "total_gst": 17730 },
    "net_gst_payable": { "net_gst_payable": 3870, "status": "payable" }
  },
  "deadlines": [ ... ],
  "health_check": { "overall_status": "MEDIUM", "issues": [...] },
  "agent_analysis": { "risk_level": "MEDIUM", "key_issues": [...] },
  "compliance_tasks": { "immediate_actions": [...] },
  "step_by_step_guidance": { "steps": [...] }
}
```

---

## 🗺 Extend Later (Post-Hackathon)

| Feature | How |
|---|---|
| Real GST portal filing | Integrate GST Suvidha Provider (GSP) API |
| Multi-period tracking | Add SQLite / PostgreSQL with SQLAlchemy |
| Email alerts | Use SendGrid / SMTP for deadline reminders |
| React dashboard | Connect to a FastAPI REST layer |
| OCR invoice parsing | Use Tesseract or AWS Textract |
| GSTR-2A reconciliation | Cross-match with supplier returns |

---

## ⚠️ Disclaimer
This is a prototype for educational/hackathon purposes only.
Not a substitute for professional CA/tax advice.
