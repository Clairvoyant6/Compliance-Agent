import { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, PieChart, Pie, Legend
} from 'recharts';
import {
  CheckCircle2, AlertTriangle, Clock, FileText,
  RefreshCw, AlertCircle, Loader2, ArrowRight
} from 'lucide-react';

import { useApp } from '../context/AppContext';
import { api, GSTSummary } from '../services/api';
// Fallback
import { gstReturns, itcUtilizationData, monthlyTaxData } from '../data/mockData';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const STATUS_CONFIG: Record<string, { color: string; icon: typeof CheckCircle2 }> = {
  Filed: { color: 'var(--iq-success)', icon: CheckCircle2 },
  Pending: { color: 'var(--iq-warning)', icon: Clock },
  Late: { color: 'var(--iq-danger)', icon: AlertTriangle },
  'Not Due': { color: 'var(--iq-text-muted)', icon: Clock },
};

type Tab = 'current' | 'history' | 'itc';

export default function GSTCentre() {
  const { activeDatasetId, businessContext, lastSync } = useApp();
  
  const [tab, setTab] = useState<Tab>('current');
  const [filingFilter, setFilingFilter] = useState('All');
  
  const [loading, setLoading] = useState(true);
  const [gstSummary, setGstSummary] = useState<GSTSummary | null>(null);

  useEffect(() => {
    async function fetchGst() {
      setLoading(true);
      try {
        const res = await api.getGSTSummary(activeDatasetId);
        setGstSummary(res);
      } catch (err) {
        console.error('Failed to fetch GST summary for dataset', err);
        setGstSummary(null);
      } finally {
        setLoading(false);
      }
    }
    fetchGst();
  }, [activeDatasetId]);

  const filedCount = gstReturns.filter(r => r.status === 'Filed').length;
  const pendingCount = gstReturns.filter(r => r.status === 'Pending').length;
  const lateCount = gstReturns.filter(r => r.status === 'Late').length;
  const totalTaxPaid = gstReturns.reduce((s, r) => s + r.taxPaid, 0);
  const totalLateFee = gstReturns.reduce((s, r) => s + r.lateFee, 0);

  const filteredReturns = filingFilter === 'All' ? gstReturns : gstReturns.filter(r => r.status === filingFilter);

  const itcSummary = [
    { name: 'Utilized', value: gstSummary?.net_gst.input_tax_credit.amount || 70300, color: 'var(--iq-accent)' },
    { name: 'Blocked', value: 0, color: 'var(--iq-danger)' },
  ];

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--iq-accent)' }} />
          <p className="text-sm font-semibold" style={{ color: 'var(--iq-text-muted)' }}>Calculating GST Liability...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>GST Centre</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>Unified tax management & compliance cockpit. Last sync: {lastSync}</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}>
            <RefreshCw className="w-4 h-4" />
            Sync Portal
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: 'var(--iq-accent-bg)', color: 'var(--iq-accent)', border: '1px solid var(--iq-border)' }}>
            <FileText className="w-4 h-4" />
            File Return
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: 'Net Payable (Current)', value: fmt(gstSummary?.net_gst.net_gst_payable.amount || 0), color: 'var(--iq-warning)', bg: 'var(--iq-warning-bg)' },
          { label: 'Returns Filed', value: `${filedCount}`, color: 'var(--iq-success)', bg: 'var(--iq-success-bg)' },
          { label: 'Pending', value: `${pendingCount}`, color: 'var(--iq-warning)', bg: 'var(--iq-warning-bg)' },
          { label: 'Late Filed', value: `${lateCount}`, color: 'var(--iq-danger)', bg: 'var(--iq-danger-bg)' },
          { label: 'Tax Paid (YTD)', value: fmt(totalTaxPaid), color: 'var(--iq-text)' },
        ].map(c => (
          <div key={c.label} className="rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--iq-text-muted)' }}>{c.label}</p>
            <p className="font-bold font-mono" style={{ color: c.color, fontSize: '18px' }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ background: 'var(--iq-surface-2)' }}>
        {([
          { key: 'current', label: 'Current Period' },
          { key: 'history', label: 'Filing History' },
          { key: 'itc', label: 'ITC Reconciliation' },
        ] as const).map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: tab === t.key ? 'var(--iq-accent-bg)' : 'transparent',
              color: tab === t.key ? 'var(--iq-accent)' : 'var(--iq-text-muted)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Current Period Tab */}
      {tab === 'current' && (
        <div className="space-y-5">
          {/* Note from Backend */}
          {gstSummary?.net_gst.note && (
             <div className="rounded-xl p-4" style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--iq-text)' }}>
                  Calculation Note: {gstSummary.net_gst.note}
                </p>
              </div>
            </div>
          )}

          {/* Real Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold mb-4" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Output Tax (GSTR-1)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>Total Taxable Value</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.output_tax.total_taxable_value || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>CGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.output_tax.cgst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>SGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.output_tax.sgst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>IGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.output_tax.igst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 pt-3" style={{ borderTop: '2px solid var(--iq-border)' }}>
                  <span className="text-sm font-bold tracking-wide uppercase" style={{ color: 'var(--iq-danger)' }}>Total Output Tax</span>
                  <span className="text-lg font-bold font-mono" style={{ color: 'var(--iq-danger)' }}>{fmt(gstSummary?.output_tax.total_gst || 0)}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold mb-4" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Input Tax Credit (GSTR-2B)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>Total Taxable Value</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.input_tax.total_taxable_value || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>CGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.input_tax.cgst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>SGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.input_tax.sgst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>IGST</span>
                  <span className="text-sm font-bold font-mono" style={{ color: 'var(--iq-text)' }}>{fmt(gstSummary?.input_tax.igst || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 pt-3" style={{ borderTop: '2px solid var(--iq-border)' }}>
                  <span className="text-sm font-bold tracking-wide uppercase" style={{ color: 'var(--iq-accent)' }}>Eligible ITC</span>
                  <span className="text-lg font-bold font-mono" style={{ color: 'var(--iq-accent)' }}>{fmt(gstSummary?.input_tax.total_gst || 0)}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--iq-warning-bg)', border: '1px solid var(--iq-warning)' + '44' }}>
              <div className="flex flex-col h-full">
                <h3 className="font-bold mb-4" style={{ color: 'var(--iq-warning)', fontSize: '14px', margin: 0 }}>Net GST Payable (GSTR-3B)</h3>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <span className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--iq-text)' }}>Final Liability</span>
                  <span className="text-4xl font-extrabold font-mono" style={{ color: 'var(--iq-warning)' }}>
                    {fmt(gstSummary?.net_gst.net_gst_payable.amount || 0)}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold mt-4" style={{ background: 'var(--iq-warning)', color: '#fff' }}>
                    {gstSummary?.net_gst.net_gst_payable.status || 'PAYABLE IN CASH'}
                  </span>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--iq-warning)' + '44' }}>
                  <div className="flex justify-between items-center text-xs" style={{ color: 'var(--iq-text)' }}>
                    <span>CGST Cash: <strong>{fmt(gstSummary?.net_gst.net_gst_payable.cgst_offset || 0)}</strong></span>
                    <span>SGST Cash: <strong>{fmt(gstSummary?.net_gst.net_gst_payable.sgst_offset || 0)}</strong></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Detailed Rate Bucket Breakdown */}
          {gstSummary?.output_tax.breakdown_by_rate && (
            <div className="rounded-xl p-5 mt-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
               <h3 className="font-bold mb-4" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Rate-wise Breakdown</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                   <thead>
                     <tr style={{ background: 'var(--iq-surface-2)', borderBottom: '1px solid var(--iq-border)' }}>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">Rate</th>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">Taxable Value</th>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">CGST</th>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">SGST</th>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">IGST</th>
                       <th className="px-4 py-3 font-semibold text-xs text-muted">Total Tax</th>
                     </tr>
                   </thead>
                   <tbody>
                      {Object.entries(gstSummary.output_tax.breakdown_by_rate).map(([rate, vals]) => (
                        <tr key={rate} style={{ borderBottom: '1px solid var(--iq-border)' }}>
                           <td className="px-4 py-3 font-mono font-bold text-xs" style={{ color: 'var(--iq-accent)' }}>{rate}</td>
                           <td className="px-4 py-3 font-mono text-xs">{fmt(vals.taxable_value)}</td>
                           <td className="px-4 py-3 font-mono text-xs">{fmt(vals.cgst)}</td>
                           <td className="px-4 py-3 font-mono text-xs">{fmt(vals.sgst)}</td>
                           <td className="px-4 py-3 font-mono text-xs">{fmt(vals.igst)}</td>
                           <td className="px-4 py-3 font-mono font-bold text-xs" style={{ color: 'var(--iq-text)' }}>{fmt(vals.gst_amount)}</td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </div>
          )}

          {/* Monthly Chart (Fallback) */}
          <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <h3 className="font-bold mb-4" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Monthly Tax Liability Trend (Sample History)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyTaxData.filter(d => d.taxLiability > 0)} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--iq-border)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: 'var(--iq-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => `₹${(v / 1000).toFixed(0)}K`} tick={{ fill: 'var(--iq-text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderRadius: 8, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12, color: 'var(--iq-text-muted)' }} />
                <Bar dataKey="taxLiability" name="Tax Liability" fill="var(--iq-danger)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="itcClaimed" name="ITC Claimed" fill="var(--iq-accent)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="netPayable" name="Net Payable" fill="var(--iq-warning)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Filing History Tab */}
      {tab === 'history' && (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {['All', 'Filed', 'Pending', 'Late'].map(f => (
              <button
                key={f}
                onClick={() => setFilingFilter(f)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: filingFilter === f ? 'var(--iq-accent)' : 'var(--iq-surface-2)',
                  color: filingFilter === f ? '#fff' : 'var(--iq-text-muted)',
                  border: '1px solid var(--iq-border)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--iq-surface-2)', borderBottom: '1px solid var(--iq-border)' }}>
                    {['Period', 'Form', 'Due Date', 'Filed Date', 'Tax Payable', 'Tax Paid', 'Late Fee', 'Status'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--iq-text-muted)', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredReturns.map((r, i) => {
                    const cfg = STATUS_CONFIG[r.status];
                    const Icon = cfg.icon;
                    return (
                      <tr key={r.id} style={{ borderBottom: '1px solid var(--iq-border)', background: i % 2 === 0 ? 'transparent' : 'var(--iq-surface-2)' + '44' }}>
                        <td className="px-4 py-3 text-xs font-semibold" style={{ color: 'var(--iq-text)' }}>{r.period}</td>
                        <td className="px-4 py-3">
                          <span className="font-mono font-bold text-xs" style={{ color: 'var(--iq-accent)' }}>{r.form}</span>
                        </td>
                        <td className="px-4 py-3 text-xs" style={{ color: 'var(--iq-text-muted)' }}>{r.dueDate}</td>
                        <td className="px-4 py-3 text-xs" style={{ color: r.filedDate ? 'var(--iq-success)' : 'var(--iq-danger)' }}>
                          {r.filedDate ?? '—'}
                        </td>
                        <td className="px-4 py-3 text-xs font-mono" style={{ color: 'var(--iq-text)' }}>
                          {r.taxPayable > 0 ? fmt(r.taxPayable) : '—'}
                        </td>
                        <td className="px-4 py-3 text-xs font-mono" style={{ color: r.taxPaid > 0 ? 'var(--iq-success)' : 'var(--iq-text-muted)' }}>
                          {r.taxPaid > 0 ? fmt(r.taxPaid) : '—'}
                        </td>
                        <td className="px-4 py-3 text-xs font-mono" style={{ color: r.lateFee > 0 ? 'var(--iq-danger)' : 'var(--iq-text-muted)' }}>
                          {r.lateFee > 0 ? fmt(r.lateFee) : '—'}
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold w-fit" style={{ background: cfg.color + '22', color: cfg.color }}>
                            <Icon className="w-3 h-3" />
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ITC Reconciliation Tab */}
      {tab === 'itc' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { label: 'ITC Available', value: fmt(gstSummary?.net_gst.input_tax_credit.amount || 88600), sub: 'As per Books (Current Dataset)', color: 'var(--iq-text)' },
              { label: 'ITC Utilized', value: fmt(gstSummary?.net_gst.input_tax_credit.amount || 70300), sub: 'Pending Return Filing Phase', color: 'var(--iq-accent)' },
              { label: 'Blocked / At Risk', value: '₹0', sub: 'Assumes portal match', color: 'var(--iq-success)' },
            ].map(c => (
              <div key={c.label} className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--iq-text-muted)' }}>{c.label}</p>
                <p className="font-bold font-mono" style={{ color: c.color, fontSize: '22px' }}>{c.value}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* ITC Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold mb-4 text-sm" style={{ color: 'var(--iq-text)', margin: 0 }}>ITC Split (Current Dataset)</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={itcSummary} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                    {itcSummary.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderRadius: 8, fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12, color: 'var(--iq-text-muted)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold mb-4 text-sm" style={{ color: 'var(--iq-text)', margin: 0 }}>ITC Utilization Trend (Sample History)</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={itcUtilizationData} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--iq-border)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: 'var(--iq-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={v => `₹${(v / 1000).toFixed(0)}K`} tick={{ fill: 'var(--iq-text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="utilized" name="Utilized" fill="var(--iq-accent)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="blocked" name="Blocked" fill="var(--iq-danger)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
