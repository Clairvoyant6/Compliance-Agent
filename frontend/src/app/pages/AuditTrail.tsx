import { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, RefreshCw, Search, AlertTriangle } from 'lucide-react';
import { api, AuditLogRow } from '../services/api';
import { useApp } from '../context/AppContext';

const ACTION_COLORS: Record<string, string> = {
  upload: 'var(--iq-accent)',
  upload_inline: 'var(--iq-accent)',
  process: 'var(--iq-accent)',
  delete: 'var(--iq-danger)',
  agent_chat: 'var(--iq-success)',
  agent_analyze: 'var(--iq-success)',
  report_json: 'var(--iq-text-muted)',
  export_pdf: 'var(--iq-warning)',
  export_csv_report: 'var(--iq-warning)',
  export_csv_transactions: 'var(--iq-warning)',
  update_business_context: 'var(--iq-text-muted)',
  update_llm_config: 'var(--iq-text-muted)',
  update_notification_prefs: 'var(--iq-text-muted)',
  test_email: 'var(--iq-success)',
  digest_send_now: 'var(--iq-success)',
  push_subscribe: 'var(--iq-accent)',
};

function actionLabel(action: string): string {
  return action
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function relativeTime(iso: string): string {
  if (!iso) return '—';
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return `${secs}s ago`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function AuditTrail() {
  const { backendOnline } = useApp();
  const [rows, setRows] = useState<AuditLogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [search, setSearch] = useState('');
  const [filterAction, setFilterAction] = useState<string>('all');

  const loadLog = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.getAuditLog({ limit: 200 });
      setRows(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (backendOnline) {
      loadLog();
    } else {
      setLoading(false);
    }
  }, [backendOnline]);

  const actions = useMemo(
    () => Array.from(new Set(rows.map((r) => r.action))).sort(),
    [rows],
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return rows.filter((r) => {
      const matchSearch =
        !q ||
        r.action.toLowerCase().includes(q) ||
        (r.target || '').toLowerCase().includes(q) ||
        (r.actor || '').toLowerCase().includes(q);
      const matchAction = filterAction === 'all' || r.action === filterAction;
      return matchSearch && matchAction;
    });
  }, [rows, search, filterAction]);

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1
            className="font-extrabold tracking-tight flex items-center gap-2"
            style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}
          >
            <ShieldCheck className="w-6 h-6" style={{ color: 'var(--iq-accent)' }} />
            Audit Trail
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>
            Complete log of every action taken in the system. Persisted in the backend database.
          </p>
        </div>
        <button
          onClick={loadLog}
          disabled={!backendOnline || loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Offline notice */}
      {!backendOnline && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{ background: 'var(--iq-warning-bg)', border: '1px solid var(--iq-warning)44' }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--iq-warning)' }} />
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--iq-warning)', margin: 0 }}>
              Backend offline
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--iq-text)' }}>
              Audit logs are stored server-side. Start the Python backend to view activity history.
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      {backendOnline && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}
          >
            <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-text-muted)' }} />
            <input
              type="text"
              placeholder="Search actions, targets, users..."
              className="flex-1 bg-transparent outline-none border-none text-sm"
              style={{ color: 'var(--iq-text)' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: 'var(--iq-surface)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            <option value="all">All actions ({rows.length})</option>
            {actions.map((a) => (
              <option key={a} value={a}>
                {actionLabel(a)}
              </option>
            ))}
          </select>
        </div>
      )}

      {error && (
        <div
          className="p-4 rounded-xl text-sm"
          style={{ background: 'var(--iq-danger-bg)', color: 'var(--iq-danger)', border: '1px solid var(--iq-danger)44' }}
        >
          {error}
        </div>
      )}

      {/* Log table */}
      {backendOnline && (
        <div
          className="rounded-xl overflow-hidden"
          style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--iq-surface-2)', borderBottom: '1px solid var(--iq-border)' }}>
                  {['When', 'Actor', 'Action', 'Target', 'Dataset', 'Details'].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                      style={{ color: 'var(--iq-text-muted)' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && !loading && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-sm" style={{ color: 'var(--iq-text-muted)' }}>
                      No entries match your filters.
                    </td>
                  </tr>
                )}
                {filtered.map((r, i) => {
                  const color = ACTION_COLORS[r.action] || 'var(--iq-text-muted)';
                  const metaKeys = Object.keys(r.meta || {});
                  return (
                    <tr
                      key={r.id}
                      style={{
                        borderBottom: i < filtered.length - 1 ? '1px solid var(--iq-border)' : 'none',
                        background: i % 2 === 0 ? 'transparent' : 'var(--iq-surface-2)44',
                      }}
                    >
                      <td className="px-4 py-3">
                        <div className="text-xs font-mono" style={{ color: 'var(--iq-text)' }}>
                          {relativeTime(r.created_at)}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--iq-text-muted)', opacity: 0.6 }}>
                          {new Date(r.created_at).toLocaleString('en-IN', { hour12: false })}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: 'var(--iq-text)' }}>
                        {r.actor}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="text-xs px-2 py-1 rounded font-semibold"
                          style={{ background: `${color}22`, color }}
                        >
                          {actionLabel(r.action)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--iq-text-muted)' }}>
                        {r.target || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--iq-text-muted)' }}>
                        {r.dataset_id || '—'}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: 'var(--iq-text-muted)' }}>
                        {metaKeys.length > 0 ? (
                          <span className="font-mono" style={{ fontSize: '11px' }}>
                            {metaKeys.slice(0, 2).map((k) => `${k}=${String(r.meta[k]).slice(0, 40)}`).join(' · ')}
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
