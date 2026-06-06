/**
 * API Service Layer — ComplianceIQ
 *
 * Centralized calls to the FastAPI backend. Detects backend availability
 * via /api/health and exposes `MOCK_MODE` so components can fall back to
 * bundled mock data cleanly (used in the v0 preview where Python isn't
 * running).
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
    breakdown_by_rate: Record<
      string,
      { taxable_value: number; gst_amount: number; cgst: number; sgst: number; igst: number }
    >;
    total_taxable_value: number;
    cgst: number;
    sgst: number;
    igst: number;
    total_gst: number;
  };
  input_tax: GSTSummary['output_tax'];
  net_gst: {
    output_tax: { amount: number; cgst: number; sgst: number; igst: number };
    input_tax_credit: { amount: number; cgst: number; sgst: number; igst: number };
    net_gst_payable: {
      amount: number;
      status: string;
      cgst_offset: number;
      sgst_offset: number;
      igst_offset: number;
    };
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
  model?: string;
}

export interface LLMProviderInfo {
  id: string;
  name: string;
  free: boolean;
  needs_key: boolean;
}

export interface NotificationPrefs {
  email: string;
  deadline_reminders: boolean;
  filing_alerts: boolean;
  mismatch_alerts: boolean;
  ai_insights: boolean;
  email_alerts: boolean;
  daily_digest: boolean;
}

export interface AuditLogRow {
  id: number;
  created_at: string;
  actor: string;
  action: string;
  target: string;
  dataset_id: string | null;
  meta: Record<string, unknown>;
}

export interface PeriodComparison {
  periods: Array<{
    id: string;
    name?: string;
    period?: string;
    net_gst_payable?: number;
    gst_status?: string;
    health_score?: number;
    total_income?: number;
    total_expense?: number;
    error?: string;
    delta_vs_baseline?: {
      net_gst_payable: number;
      health_score: number;
      total_income: number;
      total_expense: number;
    };
  }>;
  baseline: string;
}

// ─── Online state (exposed for UI) ────────────────────────────────────────────

/** True once /api/health responds 200. Set from checkHealth(). */
export let BACKEND_ONLINE = false;
/** True when we should skip API calls entirely and use mock data. */
export let MOCK_MODE = false;

// ─── Helper ───────────────────────────────────────────────────────────────────

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...((options?.headers as Record<string, string>) || {}),
    },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || `API Error: ${res.status}`);
  }
  return res.json();
}

/** Download a blob from an endpoint — used for CSV/PDF exports. */
async function download(url: string, filename: string): Promise<void> {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
}

// ─── API ──────────────────────────────────────────────────────────────────────

export const api = {
  // Health
  async checkHealth(): Promise<{ status: string; datasets: number; llm_provider: string }> {
    try {
      const res = await request<{ status: string; datasets: number; llm_provider: string }>(
        '/health',
      );
      BACKEND_ONLINE = res.status === 'ok';
      MOCK_MODE = !BACKEND_ONLINE;
      return res;
    } catch (e) {
      BACKEND_ONLINE = false;
      MOCK_MODE = true;
      throw e;
    }
  },

  // Datasets
  getDatasets: (): Promise<Dataset[]> => request('/datasets'),

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

  addInlineDataset: (name: string, data: string, format: 'csv' | 'json' = 'csv') =>
    request<Dataset>('/datasets', {
      method: 'POST',
      body: JSON.stringify({ name, data, format }),
    }),

  deleteDataset: (id: string) => request<void>(`/datasets/${id}`, { method: 'DELETE' }),

  // Processing
  processDataset: (id: string) => request<unknown>(`/process/${id}`, { method: 'POST' }),
  getTransactions: (id: string) => request<TransactionsResponse>(`/transactions/${id}`),
  getGSTSummary: (id: string) => request<GSTSummary>(`/gst/${id}`),
  getDeadlines: (referenceDate?: string) =>
    request<BackendDeadline[]>(`/deadlines${referenceDate ? `?reference_date=${referenceDate}` : ''}`),
  getHealthCheck: (id: string) => request<HealthCheckResult>(`/health-check/${id}`),

  // AI Agent
  sendAgentMessage: (message: string, datasetId?: string) =>
    request<{ response: string; provider: string }>('/agent/chat', {
      method: 'POST',
      body: JSON.stringify({ message, dataset_id: datasetId || 'sample' }),
    }),
  runAgentAnalysis: (datasetId: string) =>
    request<AgentAnalysis>(`/agent/analyze/${datasetId}`, { method: 'POST' }),

  // Reports & exports
  generateReport: (datasetId: string) => request<Record<string, unknown>>(`/report/${datasetId}`),
  exportReportPDF: (datasetId: string) =>
    download(`/export/${datasetId}/pdf`, `report_${datasetId}.pdf`),
  exportReportCSV: (datasetId: string, kind: 'report' | 'transactions' = 'report') =>
    download(`/export/${datasetId}/csv?kind=${kind}`, `${kind}_${datasetId}.csv`),

  // Period comparison
  comparePeriods: (datasetIds: string[]) =>
    request<PeriodComparison>(`/compare?dataset_ids=${encodeURIComponent(datasetIds.join(','))}`),

  // Business Context
  getBusinessContext: (): Promise<BusinessContext> => request('/business-context'),
  updateBusinessContext: (ctx: BusinessContext) =>
    request<BusinessContext>('/business-context', {
      method: 'PUT',
      body: JSON.stringify(ctx),
    }),

  // LLM
  getLLMConfig: (): Promise<LLMConfig> => request('/llm-config'),
  updateLLMConfig: (config: { provider: string; api_key?: string; model?: string }) =>
    request<LLMConfig>('/llm-config', {
      method: 'PUT',
      body: JSON.stringify({
        provider: config.provider,
        api_key: config.api_key || '',
        model: config.model || null,
      }),
    }),
  listLLMProviders: (): Promise<LLMProviderInfo[]> => request('/llm-providers'),

  // Notifications
  getNotificationPrefs: (email: string) =>
    request<NotificationPrefs>(`/notifications/prefs?email=${encodeURIComponent(email)}`),
  updateNotificationPrefs: (prefs: NotificationPrefs) =>
    request<{ status: string }>('/notifications/prefs', {
      method: 'PUT',
      body: JSON.stringify(prefs),
    }),
  subscribePush: (email: string, subscription: unknown) =>
    request<{ status: string }>('/notifications/push/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, subscription }),
    }),
  sendTestEmail: (to: string) =>
    request<{ status: string }>('/notifications/test-email', {
      method: 'POST',
      body: JSON.stringify({ to }),
    }),
  sendDigestNow: () =>
    request<{ subscribers: number }>('/notifications/digest/send-now', { method: 'POST' }),

  // Audit
  getAuditLog: (params: { limit?: number; dataset_id?: string } = {}) => {
    const q = new URLSearchParams();
    if (params.limit) q.set('limit', String(params.limit));
    if (params.dataset_id) q.set('dataset_id', params.dataset_id);
    const qs = q.toString();
    return request<AuditLogRow[]>(`/audit${qs ? `?${qs}` : ''}`);
  },
};
