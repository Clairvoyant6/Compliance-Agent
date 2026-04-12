import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Filter, Download, Upload, ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, X, Loader2, FileUp, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { api, BackendTransaction } from '../services/api';
// Fallback
import { transactions as mockTxns } from '../data/mockData';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

type SortKey = 'id' | 'date' | 'description' | 'vendor' | 'type' | 'amount' | 'gst' | 'status';
type SortDir = 'asc' | 'desc';

interface LocalTransaction extends BackendTransaction {
  id: string;
  vendor: string;
  displayType: string;
  gst: number;
  status: string;
}

const STATUS_COLORS: Record<string, string> = {
  Reconciled: 'var(--iq-success)',
  Pending: 'var(--iq-warning)',
  Mismatched: 'var(--iq-danger)',
  Filed: 'var(--iq-accent)',
  Valid: 'var(--iq-success)',
  Invalid: 'var(--iq-danger)',
};

const TYPE_COLORS: Record<string, string> = {
  Purchase: 'var(--iq-warning)',
  Sale: 'var(--iq-success)',
  Expense: 'var(--iq-text-muted)',
  Import: 'var(--iq-accent)',
  Export: 'var(--iq-success)',
};

export default function Transactions() {
  const { activeDatasetId, setActiveDatasetId, refreshBackendStatus } = useApp();
  
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState<LocalTransaction[]>([]);
  
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchTxns() {
      setLoading(true);
      try {
        const res = await api.getTransactions(activeDatasetId);
        
        const mapped: LocalTransaction[] = res.transactions.map((t, i) => {
          const typeLower = (t.type || '').toLowerCase();
          const displayType = typeLower === 'income' ? 'Sale' : typeLower === 'expense' ? 'Expense' : t.type;
          
          let status = 'Pending';
          if (t.gstin_status === 'invalid') status = 'Invalid';
          else if (t.gstin_status === 'valid') status = 'Valid';
          else if (typeLower === 'income') status = 'Reconciled';
          
          return {
            ...t,
            id: `TXN-${(i + 1).toString().padStart(3, '0')}`,
            vendor: t.party_name || 'Unknown',
            displayType,
            gst: (t.amount * (t.gst_rate || 0)) / 100,
            status,
          };
        });
        setData(mapped);
      } catch (err) {
        console.error('Failed to fetch transactions', err);
        // Map mock data
        const mappedMock = mockTxns.map((t, i) => ({
          ...t,
          id: t.id,
          date: t.date,
          type: t.type,
          description: t.description,
          amount: t.amount,
          gst_rate: (t.gst / t.amount) * 100,
          taxable: true,
          hsn_sac: '',
          hsn_inferred: false,
          party_name: t.vendor,
          party_gstin: t.gstin,
          gstin_status: 'valid',
          vendor: t.vendor,
          displayType: t.type,
          gst: t.gst,
          status: t.status
        }));
        setData(mappedMock);
      } finally {
        setLoading(false);
      }
    }
    fetchTxns();
  }, [activeDatasetId]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const res = await api.uploadDataset(file);
      // Wait a moment for pipeline to finish inside backend if synchronous
      setActiveDatasetId(res.id);
      refreshBackendStatus();
      // Unset file
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      console.error('Upload failed', err);
      alert('Upload failed. Please check the backend connection and file format (CSV/JSON only).');
    } finally {
      setUploading(false);
    }
  };

  const totalAmount = data.reduce((s, t) => s + t.amount, 0);
  const totalGST = data.reduce((s, t) => s + t.gst, 0);
  const pendingCount = data.filter(t => t.status === 'Pending' || t.status === 'Invalid').length;
  const mismatchedCount = data.filter(t => t.status === 'Mismatched' || t.status === 'Invalid').length;

  const filtered = useMemo(() => {
    let list = [...data];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(t =>
        t.description.toLowerCase().includes(q) ||
        t.vendor.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        (t.party_gstin || '').toLowerCase().includes(q)
      );
    }
    if (filterStatus !== 'All') {
      list = list.filter(t => t.status === filterStatus || (filterStatus === 'Mismatched' && t.status === 'Invalid'));
    }
    if (filterType !== 'All') {
      list = list.filter(t => t.displayType === filterType);
    }

    list.sort((a, b) => {
      let aVal: any = a.date;
      let bVal: any = b.date;
      
      if (sortKey === 'id') { aVal = a.id; bVal = b.id; }
      else if (sortKey === 'description') { aVal = a.description; bVal = b.description; }
      else if (sortKey === 'vendor') { aVal = a.vendor; bVal = b.vendor; }
      else if (sortKey === 'type') { aVal = a.displayType; bVal = b.displayType; }
      else if (sortKey === 'amount') { aVal = a.amount; bVal = b.amount; }
      else if (sortKey === 'gst') { aVal = a.gst; bVal = b.gst; }
      else if (sortKey === 'status') { aVal = a.status; bVal = b.status; }

      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return list;
  }, [data, search, filterStatus, filterType, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <ArrowUpDown className="w-3 h-3 opacity-30" />;
    return sortDir === 'asc' ? <ArrowUp className="w-3 h-3" style={{ color: 'var(--iq-accent)' }} /> : <ArrowDown className="w-3 h-3" style={{ color: 'var(--iq-accent)' }} />;
  };

  if (loading && !uploading) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--iq-accent)' }} />
          <p className="text-sm font-semibold" style={{ color: 'var(--iq-text-muted)' }}>Loading Transactions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-7 space-y-5 relative">
      {uploading && (
        <div className="absolute inset-0 z-50 rounded-xl bg-black/10 backdrop-blur-[2px] flex items-center justify-center" style={{ margin: '14px' }}>
          <div className="bg-white dark:bg-[#1b1c1e] p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border border-black/10 dark:border-white/10">
             <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--iq-accent)' }} />
             <p className="font-bold text-sm tracking-wide" style={{ color: 'var(--iq-text)' }}>Uploading & Processing Dataset...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>Transactions</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>Review, filter, and reconcile your fiscal movements.</p>
        </div>
        <div className="flex gap-2">
          <input
            type="file"
            accept=".csv,.json"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-80"
            style={{ background: 'var(--iq-accent)', color: '#fff' }}
          >
            <Upload className="w-4 h-4" />
            <span className="hidden sm:inline">Upload CSV/JSON</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            <Download className="w-4 h-4" />
            Export Ledger
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total Volume', value: fmt(totalAmount), sub: `${data.length} transactions` },
          { label: 'Total GST Involved', value: fmt(totalGST), sub: 'All transaction types' },
          { label: 'Pending / Unverified', value: `${pendingCount}`, sub: 'Awaiting reconciliation', color: 'var(--iq-warning)' },
          { label: 'Mismatched / Invalid', value: `${mismatchedCount}`, sub: 'Requires attention', color: 'var(--iq-danger)' },
        ].map(card => (
          <div key={card.label} className="rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--iq-text-muted)' }}>{card.label}</p>
            <p className="font-bold font-mono" style={{ color: card.color ?? 'var(--iq-text)', fontSize: '18px' }}>{card.value}</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-text-muted)' }} />
            <input
              type="text"
              placeholder="Search by description, vendor, ID, GSTIN..."
              className="flex-1 bg-transparent outline-none border-none text-sm"
              style={{ color: 'var(--iq-text)' }}
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ color: 'var(--iq-text-muted)' }}>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={e => { setFilterStatus(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg text-sm outline-none border-none cursor-pointer"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            {['All', 'Reconciled', 'Pending', 'Mismatched', 'Filed', 'Valid', 'Invalid'].map(s => (
              <option key={s} value={s} style={{ background: 'var(--iq-surface)' }}>{s}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={filterType}
            onChange={e => { setFilterType(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg text-sm outline-none border-none cursor-pointer"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            {['All', 'Purchase', 'Sale', 'Expense', 'Import', 'Export'].map(t => (
              <option key={t} value={t} style={{ background: 'var(--iq-surface)' }}>{t}</option>
            ))}
          </select>
        </div>

        {/* Active filters */}
        {(filterStatus !== 'All' || filterType !== 'All' || search) && (
          <div className="flex items-center gap-2 mt-2">
            <Filter className="w-3.5 h-3.5" style={{ color: 'var(--iq-text-muted)' }} />
            <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>
              {filtered.length} results
            </span>
            <button
              onClick={() => { setSearch(''); setFilterStatus('All'); setFilterType('All'); setPage(1); }}
              className="ml-auto text-xs font-semibold hover:opacity-70"
              style={{ color: 'var(--iq-accent)' }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--iq-surface-2)', borderBottom: '1px solid var(--iq-border)' }}>
                {[
                  { label: 'ID', key: 'id' as SortKey, w: '80px' },
                  { label: 'Date', key: 'date' as SortKey, w: '100px' },
                  { label: 'Description', key: 'description' as SortKey },
                  { label: 'Vendor & GSTIN', key: 'vendor' as SortKey },
                  { label: 'Type', key: 'type' as SortKey, w: '90px' },
                  { label: 'Amount', key: 'amount' as SortKey, w: '110px' },
                  { label: 'GST', key: 'gst' as SortKey, w: '90px' },
                  { label: 'Status', key: 'status' as SortKey, w: '110px' },
                ].map(col => (
                  <th
                    key={col.key}
                    onClick={() => toggleSort(col.key)}
                    className="px-4 py-3 text-left cursor-pointer select-none"
                    style={{ color: 'var(--iq-text-muted)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', width: col.w, whiteSpace: 'nowrap' }}
                  >
                    <div className="flex items-center gap-1">
                      {col.label} <SortIcon k={col.key} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center" style={{ color: 'var(--iq-text-muted)' }}>
                    No transactions found. Upload a dataset or change filters.
                  </td>
                </tr>
              ) : paged.map((txn, i) => (
                <tr
                  key={txn.id}
                  style={{
                    borderBottom: '1px solid var(--iq-border)',
                    background: i % 2 === 0 ? 'transparent' : 'var(--iq-surface-2)' + '44',
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs font-bold" style={{ color: 'var(--iq-text-muted)' }}>{txn.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>{txn.date}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs font-semibold truncate max-w-[200px]" style={{ color: 'var(--iq-text)' }}>{txn.description}</p>
                    <p className="text-xs opacity-60 mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>
                      {txn.hsn_sac ? `HSN/SAC: ${txn.hsn_sac}` : 'No HSN/SAC'}
                      {txn.hsn_inferred && <span className="ml-1 px-1 rounded bg-black/10 dark:bg-white/10">Inferred</span>}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs truncate max-w-[160px]" style={{ color: 'var(--iq-text)' }}>{txn.vendor}</p>
                    <p className="text-xs mt-0.5 font-mono opacity-60" style={{ color: txn.party_gstin ? 'var(--iq-text-muted)' : 'var(--iq-danger)', fontSize: '10px' }}>
                      {txn.party_gstin || 'NO GSTIN'}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-semibold"
                      style={{ background: (TYPE_COLORS[txn.displayType] || TYPE_COLORS.Expense) + '22', color: TYPE_COLORS[txn.displayType] || TYPE_COLORS.Expense }}
                    >
                      {txn.displayType}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-bold font-mono" style={{ color: txn.displayType === 'Sale' || txn.displayType === 'Export' ? 'var(--iq-success)' : 'var(--iq-text)' }}>
                      {fmt(txn.amount)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-mono" style={{ color: 'var(--iq-text-muted)' }}>{txn.gst > 0 ? fmt(txn.gst) : '—'}</span>
                      <span className="text-[10px] opacity-60" style={{ color: 'var(--iq-text-muted)' }}>{txn.gst_rate > 0 ? `${txn.gst_rate}%` : ''}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full font-semibold"
                      style={{ background: (STATUS_COLORS[txn.status] || STATUS_COLORS.Pending) + '22', color: STATUS_COLORS[txn.status] || STATUS_COLORS.Pending }}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ borderTop: '1px solid var(--iq-border)', background: 'var(--iq-surface-2)' }}
        >
          <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>
            Showing {Math.min((page - 1) * pageSize + 1, Math.max(1, filtered.length))}–{Math.min(page * pageSize, filtered.length)} of {filtered.length} transactions
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="p-1.5 rounded disabled:opacity-30 transition-opacity"
              style={{ color: 'var(--iq-text-muted)' }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let p = page - 2 + i;
              if (page <= 2) p = i + 1;
              if (page >= totalPages - 1) p = totalPages - 4 + i;
              if (p < 1 || p > totalPages) return null;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="w-7 h-7 rounded text-xs font-bold transition-all"
                  style={{
                    background: p === page ? 'var(--iq-accent)' : 'transparent',
                    color: p === page ? '#fff' : 'var(--iq-text-muted)',
                  }}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="p-1.5 rounded disabled:opacity-30 transition-opacity"
              style={{ color: 'var(--iq-text-muted)' }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
