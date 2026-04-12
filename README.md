# Compliance Agent & ComplianceIQ

An integrated, enterprise-grade AI Compliance Agent and real-time frontend dashboard. This repository merges the Python-based AI Backend (FastAPI) and the React-based ComplianceIQ Frontend (Vite) into a single, cohesive, monolithic application architecture.

## Overview

Compliance Agent is designed to streamline corporate tax compliance by combining a powerful backend rules engine and Large Language Model (LLM) intelligence with an intuitive, dynamic frontend. 

**Key Features:**
- **Dashboard & Health Monitor:** Real-time diagnostics of compliance state with risk scoring and visual alerts.
- **Transactions Management:** Instantly upload CSV datasets. The backend automatically parses transactions, checks for anomalies, and readies them for reporting.
- **GST Centre:** Accurately calculates GST tax liability across various rate buckets, ITC (Input Tax Credit) utilization, and determines net payable amounts.
- **Compliance Calendar:** Automatically generates and tracks compliance deadlines (filings, payments, audits) based on your transactions and business context.
- **AI Agent Chat:** An interactive conversational assistant powered by large language models (Anthropic Claude, Google Gemini, or OpenAI GPT-4) to answer compliance questions and run "Deep Scans" on your datasets.
- **Configurable Settings:** Fully customizable business context (turnover, registration details) and AI parameters (API keys, model selection), completely synced to the backend in real-time.

## Tech Stack

### Backend
- **Framework:** FastAPI / Python
- **Functionality:** Multi-dataset orchestration (`DatasetStore`), data parsing, robust GST computation, AI Model invocation (`pipeline.py`).
- **Default Port:** `8000`

### Frontend
- **Framework:** React / Vite / TypeScript
- **Styling:** Vanilla CSS design system, fully responsive with interactive micro-animations and data visualizations (`recharts`).
- **Icons:** `lucide-react`
- **Default Port:** `5173`

## Getting Started

### Prerequisites
- Node.js (v16+)
- Python (3.8+)
- (Optional) An API key for your preferred LLM provider (Anthropic, Google, or OpenAI). The app defaults to "mock" mode for safe offline evaluation without an API key.

### Installation

Install dependencies for both the frontend and backend in one command from the project root:

```bash
# This will install Node packages and then trigger the Python requirements installation
npm install
npm run install:backend
```

### Running the Application

You can start the fully integrated environment using the cross-platform concurrent runner:

```bash
npm run dev
```

Alternatively, you can use the provided startup scripts from the root directory:
- **Windows:** Run `start.bat`
- **Mac/Linux:** Run `start.sh`

Both services will spin up simultaneously. You can then access:
- **Frontend App:** [http://localhost:5173](http://localhost:5173)
- **Backend API Docs (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)

## Project Structure

```
Compliance Agent/
├── backend/                  # FastAPI Application
│   ├── agent/                # LLM integration & prompts
│   ├── modules/              # Compliance logic, categorization, and parsing
│   ├── server.py             # Main FastAPI entry point
│   └── requirements.txt      # Python dependencies
├── frontend/                 # Vite/React Application
│   ├── src/
│   │   ├── app/              # Main UI Components & Pages
│   │   ├── styles/           # Global CSS variables & layout utilities
│   │   └── context/          # AppContext for global state & API sync
│   └── vite.config.ts        # Vite configuration (Proxy to Backend)
├── package.json              # Global entry point & concurrently scripts
└── start.bat / start.sh      # Helper startup scripts
```

## Contributing
When making changes, ensure that new UI components properly utilize the `frontend/src/app/services/api.ts` HTTP Service Layer to communicate with the FastAPI backend, and that graceful failure (mock data fallback) is correctly configured for offline demos.
