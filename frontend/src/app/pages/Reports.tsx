import { useState } from 'react';
import {
  FileText, Download, RefreshCw, Receipt,
  Activity, Users, Clock, CheckCircle2, AlertCircle,
  Plus, Search, FileDown, FileSpreadsheet,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { api } from '../services/api';
// Fallback mock
import { reports as mockReports } from '../data/mockData';

const REPORT_TYPES = [
  {
    id: 'gst-summary',
    title: 'Comprehensive GST Summary',
    desc: 'Tax payable, ITC claimed, health score, and upcoming deadlines synced from the backend engine.',
    icon: Receipt,
    color: 'var(--iq-accent)',
    category: 'GST',
    time: '< 1 min',
  },
  {
    id: 'itc-recon',
    title: 'ITC Reconciliation (Mock)',
    desc: 'Books vs GSTR-2B comparison with mismatch analysis',
    icon: RefreshCw,
    color: 'var(--iq-warning)',
    category: 'GST',
    time: '~3 min',
  },
  {
    id: 'vendor-compliance',
    title: 'Vendor Compliance (Mock)',
    desc: 'GSTIN validation, filing status, and rating for all vendors',
    icon: Users,
    color: 'var(--iq-success)',
    category: 'Vendor',
    time: '~4 min',
  },
  {
    id: 'health-score',
    title: 'Health Score Report (Mock)',
    desc: 'Full compliance diagnostic with recommendations',
    icon: Activity,
    color: 'var(--iq-danger)',
    category: 'Compliance',
    time: '~1 min',
  },
];

const STATUS_CONFIG: Record<string, { color: string; icon: typeof CheckCircle2; label: string }> = {
  ready: { color: 'var(--iq-success)', icon: CheckCircle2, label: 'Ready' },
  generating: { color: 'var(--iq-warning)', icon: Clock, label: 'Generating' },
  error: { color: 'var(--iq-danger)', icon: AlertCircle, label: 'Error' },
};

interface LocalReport {
  id: string;
  title: string;
  type: string;
  period: string;
  generatedOn: string;
  size: string;
  status: 'ready' | 'generating' | 'error';
  blobUrl?: string;
  fileName?: string;
}

export default function Reports() {
  const { activeDatasetId, businessContext } = useApp();
  
  const [activeTab, setActiveTab] = useState<'generate' | 'recent'>('generate');
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [generating, setGenerating] = useState<string | null>(null);
  const [generatedIds, setGeneratedIds] = useState<string[]>([]);
  const [localReports, setLocalReports] = useState<LocalReport[]>(mockReports as LocalReport[]);

  const categories = ['All', ...Array.from(new Set(REPORT_TYPES.map(r => r.category)))];

  const filteredTypes = REPORT_TYPES.filter(r => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === 'All' || r.category === filterCategory;
    return matchSearch && matchCat;
  });

  const handleGenerate = async (id: string, title: string) => {
    setGenerating(id);
    
    // Simulate slight delay for UX
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    
    let reportData = '';
    let success = true;

    if (id === 'gst-summary') {
      try {
        const res = await api.generateReport(activeDatasetId);
        reportData = JSON.stringify(res, null, 2);
      } catch (err) {
        console.error('Failed to generate report', err);
        success = false;
        reportData = "Error generating report";
      }
    } else {
      // Mock generation delay for other mock reports
      await new Promise(r => setTimeout(r, 2000));
      reportData = `Simulated Report Data for ${title} \nGenerated on: ${dateStr}`;
    }

    setGenerating(null);
    setGeneratedIds(prev => [...prev, id]);

    let blobUrl = '';
    let fileName = '';

    if (success) {
      const blob = new Blob([reportData], { type: 'application/json' });
      blobUrl = URL.createObjectURL(blob);
      fileName = `${title.replace(/\s+/g, '_')}_${dateStr}.json`;
    }

    const newReport: LocalReport = {
      id: `RPT-${Date.now()}`,
      title: `${title} — ${businessContext.period}`,
      type: title,
      period: businessContext.period,
      generatedOn: dateStr,
      size: success ? `${(new Blob([reportData]).size / 1024).toFixed(1)} KB` : '0 KB',
      status: success ? 'ready' : 'error',
      blobUrl,
      fileName
    };
    
    setLocalReports(prev => [newReport, ...prev]);
    setActiveTab('recent');
  };

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>Compliance Reports</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>Generate, download, and share comprehensive compliance reports synced with active datasets.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={async () => {
              try { await api.exportReportPDF(activeDatasetId); }
              catch (e) { alert((e as Error).message); }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'var(--iq-accent)', color: '#fff' }}
          >
            <FileDown className="w-4 h-4" />
            Export PDF
          </button>
          <button
            onClick={async () => {
              try { await api.exportReportCSV(activeDatasetId, 'report'); }
              catch (e) { alert((e as Error).message); }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={async () => {
              try { await api.exportReportCSV(activeDatasetId, 'transactions'); }
              catch (e) { alert((e as Error).message); }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
          >
            <Download className="w-4 h-4" />
            Transactions CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Available Reports', value: localReports.filter(r => r.status === 'ready').length, color: 'var(--iq-text)' },
          { label: 'Total Report Types', value: REPORT_TYPES.length, color: 'var(--iq-accent)' },
          { label: 'Generating', value: localReports.filter(r => r.status === 'generating').length + (generating ? 1 : 0), color: 'var(--iq-warning)' },
          { label: 'Generated Today', value: localReports.filter(r => r.generatedOn === new Date().toISOString().split('T')[0]).length, color: 'var(--iq-success)' },
        ].map(c => (
          <div key={c.label} className="rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--iq-text-muted)' }}>{c.label}</p>
            <p className="font-bold font-mono" style={{ color: c.color, fontSize: '22px' }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ background: 'var(--iq-surface-2)' }}>
        {([
          { key: 'generate', label: 'Generate Report' },
          { key: 'recent', label: `Recent Reports (${localReports.length})` },
        ] as const).map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: activeTab === t.key ? 'var(--iq-accent-bg)' : 'transparent',
              color: activeTab === t.key ? 'var(--iq-accent)' : 'var(--iq-text-muted)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Generate Tab */}
      {activeTab === 'generate' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-text-muted)' }} />
              <input
                type="text"
                placeholder="Search report types..."
                className="flex-1 bg-transparent outline-none border-none text-sm"
                style={{ color: 'var(--iq-text)' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Report Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTypes.map(rtype => {
              const Icon = rtype.icon;
              const isGenerating = generating === rtype.id;
              
              // Only block regeneration for real backend reports if not explicitly handled differently.
              const isGenerated = generatedIds.includes(rtype.id) && rtype.id !== 'gst-summary';

              return (
                <div
                  key={rtype.id}
                  className="rounded-xl p-5 flex flex-col gap-3 transition-all hover:scale-[1.01]"
                  style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: rtype.color + '22' }}>
                      <Icon className="w-5 h-5" style={{ color: rtype.color }} />
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text-muted)' }}>
                      {rtype.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: 'var(--iq-text)', margin: 0 }}>{rtype.title}</h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>{rtype.desc}</p>
                  </div>
                  
                  <button
                    onClick={() => handleGenerate(rtype.id, rtype.title)}
                    disabled={isGenerating || isGenerated}
                    className="w-full py-2.5 mt-auto rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
                    style={{
                      background: isGenerated ? 'var(--iq-success-bg)' : 'var(--iq-accent)',
                      color: isGenerated ? 'var(--iq-success)' : '#fff',
                    }}
                  >
                    {isGenerating ? (
                      <><RefreshCw className="w-3.5 h-3.5 animate-spin" /> Generating...</>
                    ) : isGenerated ? (
                      <><CheckCircle2 className="w-3.5 h-3.5" /> Created</>
                    ) : (
                      <><Plus className="w-3.5 h-3.5" /> Generate from {rtype.id === 'gst-summary' ? 'Backend' : 'Mock'}</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent Reports Tab */}
      {activeTab === 'recent' && (
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--iq-surface-2)', borderBottom: '1px solid var(--iq-border)' }}>
                  {['Report', 'Type', 'Period', 'Generated On', 'Size', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: 'var(--iq-text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {localReports.map((r, i) => {
                  const cfg = STATUS_CONFIG[r.status];
                  const Icon = cfg.icon;
                  return (
                    <tr
                      key={r.id}
                      style={{
                        borderBottom: i < localReports.length - 1 ? '1px solid var(--iq-border)' : 'none',
                        background: i % 2 === 0 ? 'transparent' : 'var(--iq-surface-2)' + '44',
                      }}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-accent)' }} />
                          <div>
                            <p className="text-xs font-semibold" style={{ color: 'var(--iq-text)' }}>{r.title}</p>
                            <p className="text-xs font-mono" style={{ color: 'var(--iq-text-muted)', opacity: 0.6 }}>{r.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs px-2 py-1 rounded font-semibold" style={{ background: 'var(--iq-accent-bg)', color: 'var(--iq-accent)' }}>{r.type}</span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: 'var(--iq-text-muted)' }}>{r.period}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: 'var(--iq-text-muted)' }}>{r.generatedOn}</td>
                      <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--iq-text-muted)' }}>{r.size}</td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1.5 text-xs font-semibold w-fit px-2 py-1 rounded-full" style={{ background: cfg.color + '22', color: cfg.color }}>
                          <Icon className="w-3 h-3" />
                          {r.status === 'generating' ? (
                            <span className="flex items-center gap-1">
                              <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                              Generating
                            </span>
                          ) : cfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          {r.blobUrl ? (
                            <a
                              href={r.blobUrl}
                              download={r.fileName}
                              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:opacity-80 transition-opacity"
                              style={{ background: 'var(--iq-success-bg)', color: 'var(--iq-success)', textDecoration: 'none' }}
                            >
                              <Download className="w-3 h-3" />
                              Download
                            </a>
                          ) : (
                            <button
                               disabled={true}
                               className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold opacity-40 transition-opacity cursor-not-allowed"
                               style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)' }}
                             >
                               <Download className="w-3 h-3" />
                               No File
                             </button>
                          )}
                        </div>
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
