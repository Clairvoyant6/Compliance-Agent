/**
 * API Service Layer — ComplianceIQ
 * Centralized API calls to the FastAPI backend.
 * Falls back to mock data if backend is unavailable.
 */

const BASE_URL = '/api';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Dataset {
  id: string;
  name: string;
  filename: string;
  rows: number;
  processed: boolean;
  uploaded_at: string;
  processed_at?: string;
}

export interface BackendTransaction {
  date: string;
  type: string;
  description: string;
  amount: number;
  gst_rate: number;
  taxable: boolean;
  hsn_sac: string;
  hsn_inferred: boolean;
  party_name: string;
  party_gstin: string;
  gstin_status: string;
}

export interface TransactionsResponse {
  dataset_id: string;
  source: string;
  total: number;
  transactions: BackendTransaction[];
  summary: {
    income_count: number;
    expense_count: number;
    taxable_income_count: number;
    taxable_expense_count: number;
    total_income: number;
    total_expense: number;
  };
}

export interface GSTSummary {
  dataset_id: string;
  output_tax: {
    direction: string;
    breakdown_by_rate: Record<string, { taxable_value: number; gst_amount: number; cgst: number; sgst: number; igst: number }>;
    total_taxable_value: number;
    cgst: number;
    sgst: number;
    igst: number;
    total_gst: number;
  };
  input_tax: {
    direction: string;
    breakdown_by_rate: Record<string, { taxable_value: number; gst_amount: number; cgst: number; sgst: number; igst: number }>;
    total_taxable_value: number;
    cgst: number;
    sgst: number;
    igst: number;
    total_gst: number;
  };
  net_gst: {
    output_tax: { amount: number; cgst: number; sgst: number; igst: number };
    input_tax_credit: { amount: number; cgst: number; sgst: number; igst: number };
    net_gst_payable: { amount: number; status: string; cgst_offset: number; sgst_offset: number; igst_offset: number };
    note: string;
  };
}

export interface BackendDeadline {
  filing: string;
  description: string;
  due_date: string;
  penalty: string;
  priority: string;
  days_left: number;
  alert_level: string;
  status: string;
  reason: string;
}

export interface HealthCheckResult {
  score: number;
  issues: string[];
  warnings: string[];
  anomalies: string[];
  explanation: string;
  overall_status: string;
}

export interface AgentAnalysis {
  analysis: Record<string, unknown>;
  decision: Record<string, unknown>;
  action: Record<string, unknown>;
}

export interface BusinessContext {
  name: string;
  gstin: string;
  type: string;
  state: string;
  filing_frequency: string;
  period: string;
}

export interface LLMConfig {
  provider: string;
  has_api_key?: boolean;
  api_key?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: { 'Content-Type': 'application/json', ...(options?.headers as Record<string, string> || {}) },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || `API Error: ${res.status}`);
  }
  return res.json();
}

// ─── API Functions ────────────────────────────────────────────────────────────

export const api = {
  // Health
  async checkHealth(): Promise<{ status: string; datasets: number; llm_provider: string }> {
    return request('/health');
  },

  // Datasets
  async getDatasets(): Promise<Dataset[]> {
    return request('/datasets');
  },

  async uploadDataset(file: File): Promise<Dataset> {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${BASE_URL}/upload`, { method: 'POST', body: formData });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      throw new Error(err.detail || 'Upload failed');
    }
    return res.json();
  },

  async addInlineDataset(name: string, data: string, format: 'csv' | 'json' = 'csv'): Promise<Dataset> {
    return request('/datasets', {
      method: 'POST',
      body: JSON.stringify({ name, data, format }),
    });
  },

  async deleteDataset(id: string): Promise<void> {
    await request(`/datasets/${id}`, { method: 'DELETE' });
  },

  // Processing
  async processDataset(id: string): Promise<unknown> {
    return request(`/process/${id}`, { method: 'POST' });
  },

  async getTransactions(id: string): Promise<TransactionsResponse> {
    return request(`/transactions/${id}`);
  },

  async getGSTSummary(id: string): Promise<GSTSummary> {
    return request(`/gst/${id}`);
  },

  async getDeadlines(referenceDate?: string): Promise<BackendDeadline[]> {
    const q = referenceDate ? `?reference_date=${referenceDate}` : '';
    return request(`/deadlines${q}`);
  },

  async getHealthCheck(id: string): Promise<HealthCheckResult> {
    return request(`/health-check/${id}`);
  },

  // AI Agent
  async sendAgentMessage(message: string, datasetId?: string): Promise<{ response: string; provider: string }> {
    return request('/agent/chat', {
      method: 'POST',
      body: JSON.stringify({ message, dataset_id: datasetId || 'sample' }),
    });
  },

  async runAgentAnalysis(datasetId: string): Promise<AgentAnalysis> {
    return request(`/agent/analyze/${datasetId}`, { method: 'POST' });
  },

  // Reports
  async getReport(datasetId: string): Promise<Record<string, unknown>> {
    return request(`/report/${datasetId}`);
  },

  // Business Context
  async getBusinessContext(): Promise<BusinessContext> {
    return request('/business-context');
  },

  async updateBusinessContext(ctx: BusinessContext): Promise<BusinessContext> {
    return request('/business-context', {
      method: 'PUT',
      body: JSON.stringify(ctx),
    });
  },

  // LLM Config
  async getLLMConfig(): Promise<LLMConfig> {
    return request('/llm-config');
  },

  async updateLLMConfig(config: { provider: string; api_key: string }): Promise<LLMConfig> {
    return request('/llm-config', {
      method: 'PUT',
      body: JSON.stringify(config),
    });
  },
};
