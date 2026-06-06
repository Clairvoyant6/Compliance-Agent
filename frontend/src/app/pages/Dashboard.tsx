import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  AlertTriangle, TrendingUp, Clock, CheckCircle2,
  AlertCircle, ArrowRight, Zap, Shield, ChevronRight, Calendar,
  Receipt, Activity, Bot, Loader2
} from 'lucide-react';

import { useApp } from '../context/AppContext';
import { api, BackendTransaction, BackendDeadline, GSTSummary, HealthCheckResult, AgentAnalysis } from '../services/api';
// Fallback data
import {
  kpiData as mockKpi, deadlines as mockDeadlines, monthlyTaxData, gstBreakdownData as mockGstPie,
  complianceScoreHistory, transactions as mockTxns
} from '../data/mockData';

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

function KPICard({
  title, value, sub, subColor, accent, badge, badgeColor, onClick
}: {
  title: string; value: string; sub: string; subColor?: string;
  accent?: boolean; badge?: string; badgeColor?: string; onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl p-5 relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-[1.01]"
      style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--iq-text-muted)' }}>
          {title}
        </span>
        {badge && (
          <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: badgeColor + '22', color: badgeColor }}>
            {badge}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold font-mono" style={{ color: accent ? 'var(--iq-accent)' : 'var(--iq-text)' }}>
        {value}
      </div>
      <p className="text-xs mt-1" style={{ color: subColor ?? 'var(--iq-text-muted)' }}>{sub}</p>
      {accent && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40" style={{ background: 'var(--iq-accent)' }} />
      )}
    </div>
  );
}

function DeadlineCard({ deadline }: { deadline: any }) {
  const colors: Record<string, string> = {
    overdue: 'var(--iq-danger)',
    urgent: 'var(--iq-warning)',
    upcoming: 'var(--iq-accent)',
    filed: 'var(--iq-success)',
  };
  // Map backend status to local status
  let status = 'upcoming';
  if (deadline.status === 'Overdue') status = 'overdue';
  else if (deadline.status === 'Due Today' || deadline.days_left <= 3) status = 'urgent';

  const color = colors[status] || colors.upcoming;

  return (
    <div
      className="rounded-xl p-4 relative overflow-hidden"
      style={{ background: 'var(--iq-surface-2)', borderLeft: `3px solid ${color}` }}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-bold font-mono tracking-wide" style={{ color: 'var(--iq-text-muted)' }}>
          {deadline.filing || deadline.form}
        </span>
        {status === 'overdue' && <AlertTriangle className="w-3.5 h-3.5" style={{ color }} />}
        {status === 'urgent' && <AlertCircle className="w-3.5 h-3.5" style={{ color }} />}
        {status === 'upcoming' && <Clock className="w-3.5 h-3.5" style={{ color }} />}
      </div>
      <div className="text-lg font-bold mt-1" style={{ color: 'var(--iq-text)' }}>
        {(deadline.dueDate || deadline.due_date).slice(5).split('-').reverse().join(' ')}
      </div>
      <div className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{deadline.description}</div>
      <div className="text-xs mt-1.5 font-semibold" style={{ color }}>
        {deadline.daysLeft !== undefined 
          ? (deadline.daysLeft < 0 ? `${Math.abs(deadline.daysLeft)} days overdue` : deadline.daysLeft === 0 ? 'Due today' : `${deadline.daysLeft} days left`) 
          : (deadline.days_left < 0 ? `${Math.abs(deadline.days_left)} days overdue` : deadline.days_left === 0 ? 'Due today' : `${deadline.days_left} days left`)}
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl p-3 text-xs shadow-xl" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', color: 'var(--iq-text)' }}>
      <p className="font-bold mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }}>{p.name}: {fmt(p.value)}</p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { activeDatasetId, businessContext, lastSync } = useApp();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [txns, setTxns] = useState<BackendTransaction[]>([]);
  const [gstSummary, setGstSummary] = useState<GSTSummary | null>(null);
  const [activeDeadlines, setActiveDeadlines] = useState<BackendDeadline[]>([]);
  const [health, setHealth] = useState<HealthCheckResult | null>(null);
  const [kpi, setKpi] = useState(mockKpi);
  const [pieData, setPieData] = useState(mockGstPie);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [txnRes, gstRes, hlthRes, dls] = await Promise.all([
          api.getTransactions(activeDatasetId).catch(() => null),
          api.getGSTSummary(activeDatasetId).catch(() => null),
          api.getHealthCheck(activeDatasetId).catch(() => null),
          api.getDeadlines().catch(() => null)
        ]);

        if (txnRes) setTxns(txnRes.transactions.slice(0, 5));
        else setTxns(mockTxns.map(t => ({ ...t, amount: t.amount, description: t.description, vendor: t.vendor, type: t.type, status: t.status, party_name: t.vendor, date: t.date, gst_rate: t.gst, hsn_inferred: false, taxable: true, hsn_sac: '', party_gstin: t.gstin, gstin_status: 'valid' }) as unknown as BackendTransaction).slice(0, 5));
        
        if (gstRes) {
          setGstSummary(gstRes);
          setPieData([
            { name: 'CGST', value: gstRes.net_gst.output_tax.cgst, color: '#b5c4ff' },
            { name: 'SGST', value: gstRes.net_gst.output_tax.sgst, color: '#a8d5b5' },
            { name: 'IGST', value: gstRes.net_gst.output_tax.igst, color: '#ffb692' },
          ].filter(d => d.value > 0));
        }
        
        if (hlthRes) setHealth(hlthRes);
        if (dls) setActiveDeadlines(dls);

        // Update KPIs
        setKpi({
          ...mockKpi,
          complianceScore: hlthRes ? hlthRes.score : mockKpi.complianceScore,
          upcomingDeadlines: dls ? dls.length : mockKpi.upcomingDeadlines,
          overdueCount: dls ? dls.filter(d => d.status === 'Overdue').length : mockKpi.overdueCount,
          netGstPayable: gstRes ? gstRes.net_gst.net_gst_payable.amount : mockKpi.netGstPayable,
          itcBalance: gstRes ? gstRes.net_gst.input_tax_credit.amount : mockKpi.itcBalance,
        });

      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [activeDatasetId]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--iq-accent)' }} />
          <p className="text-sm font-semibold" style={{ color: 'var(--iq-text-muted)' }}>Loading Dashboard Data...</p>
        </div>
      </div>
    );
  }

  const dsOverdue = activeDeadlines.filter(d => d.status === 'Overdue').length > 0;
  const overdueAlert = activeDeadlines.find(d => d.status === 'Overdue');

  return (
    <div className="p-5 lg:p-7 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>
            Dashboard Command Centre
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>
            {businessContext.name} — {businessContext.period} · Last synced: {lastSync}
          </p>
        </div>
        <button
          onClick={() => navigate('/ai-agent')}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'var(--iq-accent-bg)', color: 'var(--iq-accent)', border: '1px solid var(--iq-accent)' + '44' }}
        >
          <Bot className="w-4 h-4" />
          AI Insights
        </button>
      </div>

      {/* Overdue Alert Banner */}
      {dsOverdue && overdueAlert && (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: 'var(--iq-danger-bg)', border: '1px solid var(--iq-danger)' + '44' }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-danger)' }} />
          <p className="text-sm" style={{ color: 'var(--iq-danger)' }}>
            <strong>Action Required:</strong> {overdueAlert.filing} is overdue by {Math.abs(overdueAlert.days_left)} days.
            {overdueAlert.penalty && ` ${overdueAlert.penalty}`}
          </p>
          <button
            onClick={() => navigate('/gst')}
            className="ml-auto shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{ background: 'var(--iq-danger)', color: '#fff' }}
          >
            File Now
          </button>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Compliance Score"
          value={`${kpi.complianceScore}`}
          sub={health?.overall_status || 'Unknown status'}
          subColor={health?.score && health.score >= 80 ? "var(--iq-success)" : health?.score && health.score >= 60 ? "var(--iq-warning)" : "var(--iq-danger)"}
          accent
          badge="/100"
          badgeColor="var(--iq-accent)"
        />
        <KPICard
          title="Upcoming Deadlines"
          value={`${kpi.upcomingDeadlines}`}
          sub={`${kpi.overdueCount} overdue, urgent action required`}
          subColor={kpi.overdueCount > 0 ? "var(--iq-danger)" : "var(--iq-text-muted)"}
          badge={kpi.overdueCount > 0 ? "OVERDUE" : "DUE"}
          badgeColor={kpi.overdueCount > 0 ? "var(--iq-danger)" : "var(--iq-accent)"}
          onClick={() => navigate('/calendar')}
        />
        <KPICard
          title="Input Tax Credit"
          value={fmt(kpi.itcBalance)}
          sub="Total available ITC"
          subColor="var(--iq-success)"
          onClick={() => navigate('/gst')}
        />
        <KPICard
          title="Net GST Payable"
          value={fmt(kpi.netGstPayable)}
          sub={gstSummary?.net_gst.net_gst_payable.status || 'Calculated liability'}
          subColor="var(--iq-warning)"
          badge="PAYABLE"
          badgeColor="var(--iq-warning)"
          onClick={() => navigate('/gst')}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Tax Trend */}
        <div className="lg:col-span-2 rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Tax Liability vs ITC Trend</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>Last 5 months (Sample Data)</p>
            </div>
            <TrendingUp className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyTaxData.filter(d => d.taxLiability > 0)} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
              <defs>
                <linearGradient id="taxGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--iq-danger)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--iq-danger)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="itcGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--iq-accent)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--iq-accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--iq-border)" />
              <XAxis dataKey="month" tick={{ fill: 'var(--iq-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `₹${(v/1000).toFixed(0)}K`} tick={{ fill: 'var(--iq-text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="taxLiability" name="Tax Liability" stroke="var(--iq-danger)" fill="url(#taxGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="itcClaimed" name="ITC Claimed" stroke="var(--iq-accent)" fill="url(#itcGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* GST Breakdown Pie */}
        <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>GST Breakdown</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>Current Period Output Tax</p>
            </div>
            <Receipt className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <ResponsiveContainer width="100%" height={140}>
            {pieData.length > 0 ? (
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={3}
                  dataKey="value"
                  onMouseEnter={(_, idx) => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} opacity={activeIndex === null || activeIndex === i ? 1 : 0.5} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            ) : (
              <div className="flex items-center justify-center h-full text-xs" style={{ color: 'var(--iq-text-muted)' }}>
                No GST data
              </div>
            )}
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-2">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>{d.name}</span>
                <span className="text-xs font-bold ml-auto" style={{ color: 'var(--iq-text)' }}>₹{(d.value/1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deadlines + AI Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Deadlines */}
        <div className="lg:col-span-2 rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Active Deadlines</h3>
            <button
              onClick={() => navigate('/calendar')}
              className="text-xs font-semibold flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: 'var(--iq-accent)' }}
            >
              View Calendar <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeDeadlines.length > 0 ? (
              activeDeadlines.slice(0, 3).map((d, i) => <DeadlineCard key={i} deadline={d} />)
            ) : (
              <div className="col-span-3 text-sm" style={{ color: 'var(--iq-text-muted)' }}>No imminent deadlines found.</div>
            )}
          </div>
        </div>

        {/* AI Analysis */}
        <div className="rounded-xl p-5 relative overflow-hidden" style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--iq-accent-bg)' }}>
              <Zap className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
            </div>
            <div>
              <h3 className="font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--iq-text)', margin: 0 }}>AI VAULT ANALYSIS</h3>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>Risk Level</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide" style={{ 
              background: health?.score && health.score >= 80 ? 'var(--iq-success-bg)' : health?.score && health.score >= 60 ? 'var(--iq-warning-bg)' : 'var(--iq-danger-bg)', 
              color: health?.score && health.score >= 80 ? 'var(--iq-success)' : health?.score && health.score >= 60 ? 'var(--iq-warning)' : 'var(--iq-danger)'
            }}>
              {health?.overall_status?.toUpperCase() || 'UNKNOWN'}
            </span>
          </div>
          <div className="space-y-3 mb-4">
            {health?.issues?.slice(0, 2).map((issue: string, i: number) => (
              <div key={`issue-${i}`} className="flex items-start gap-2.5">
                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--iq-danger)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--iq-text)' }}>{issue}</p>
              </div>
            ))}
            {health?.warnings?.slice(0, 2).map((warning: string, i: number) => (
              <div key={`warn-${i}`} className="flex items-start gap-2.5">
                <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--iq-warning)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--iq-text)' }}>{warning}</p>
              </div>
            ))}
            {health?.anomalies?.slice(0, 1).map((anomaly: string, i: number) => (
              <div key={`anom-${i}`} className="flex items-start gap-2.5">
                <TrendingUp className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--iq-accent)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--iq-text)' }}>Anomaly: {anomaly}</p>
              </div>
            ))}
            {!health?.issues?.length && !health?.warnings?.length && !health?.anomalies?.length && (
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--iq-success)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--iq-text)' }}>All compliance diagnostics look good!</p>
              </div>
            )}
          </div>
          <button
            onClick={() => navigate('/ai-agent')}
            className="w-full py-2.5 rounded-lg text-xs font-bold transition-opacity hover:opacity-80"
            style={{ background: 'var(--iq-surface-3)', color: 'var(--iq-text)' }}
          >
            Expand Deep Scan
          </button>
          <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 opacity-5 pointer-events-none">
            <Shield className="w-full h-full" style={{ color: 'var(--iq-text)' }} />
          </div>
        </div>
      </div>

      {/* Quick Tools + Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Quick Tools */}
        <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--iq-text-muted)' }}>PRECISION TOOLS</span>
          </h3>
          <div className="space-y-2 mt-3">
            {[
              { icon: Receipt, label: 'GST Centre', sub: 'File returns & reconcile', path: '/gst', color: 'var(--iq-accent)' },
              { icon: Activity, label: 'Health Monitor', sub: 'System diagnostics', path: '/health', color: 'var(--iq-success)' },
              { icon: Calendar, label: 'Compliance Calendar', sub: 'View all deadlines', path: '/calendar', color: 'var(--iq-warning)' },
              { icon: Bot, label: 'AI Agent', sub: 'Intelligent analysis', path: '/ai-agent', color: 'var(--iq-danger)' },
            ].map(({ icon: Icon, label, sub, path, color }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all hover:scale-[1.01]"
                style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: color + '22' }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: 'var(--iq-text)' }}>{label}</p>
                  <p className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>{sub}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--iq-text-muted)' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2 rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Recent Transactions</h3>
            <button
              onClick={() => navigate('/transactions')}
              className="text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--iq-accent)' }}
            >
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-2">
            {txns.length > 0 ? txns.map((txn, i) => {
              const statusColor: Record<string, string> = {
                Reconciled: 'var(--iq-success)', Pending: 'var(--iq-warning)',
                Mismatched: 'var(--iq-danger)', Filed: 'var(--iq-accent)',
                valid: 'var(--iq-success)', invalid: 'var(--iq-danger)'
              };
              const statusStr = (txn as any).status || txn.gstin_status || 'Pending';
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                  style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}
                >
                  <div className="text-xs font-mono font-bold shrink-0" style={{ color: 'var(--iq-text-muted)', width: 72 }}>{txn.date}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate" style={{ color: 'var(--iq-text)' }}>{txn.description}</p>
                    <p className="text-xs truncate" style={{ color: 'var(--iq-text-muted)' }}>{txn.party_name || (txn as any).vendor}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-bold" style={{ color: (txn.type || '').toLowerCase() === 'income' ? 'var(--iq-success)' : 'var(--iq-text)' }}>
                      {(txn.type || '').toLowerCase() === 'income' ? '+' : '-'}{fmt(txn.amount)}
                    </p>
                    <span className="text-xs px-1.5 py-0.5 rounded capitalize" style={{ background: (statusColor[statusStr] || statusColor['Pending']) + '22', color: statusColor[statusStr] || statusColor['Pending'] }}>
                      {statusStr}
                    </span>
                  </div>
                </div>
              );
            }) : (
              <div className="text-sm" style={{ color: 'var(--iq-text-muted)' }}>No transactions found in this dataset.</div>
            )}
          </div>
        </div>
      </div>

      {/* Compliance Score Chart */}
      <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>Compliance Score Trend</h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>6-month trajectory — target: 85+</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: health?.score && health.score >= 80 ? 'var(--iq-success-bg)' : 'var(--iq-warning-bg)', color: health?.score && health.score >= 80 ? 'var(--iq-success)' : 'var(--iq-warning)' }}>
            Current: {kpi.complianceScore}/100
          </div>
        </div>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={complianceScoreHistory} margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--iq-border)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: 'var(--iq-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fill: 'var(--iq-text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="score" name="Score" radius={[4, 4, 0, 0]}>
              {complianceScoreHistory.map((d, i) => (
                <Cell key={i} fill={d.score >= 80 ? 'var(--iq-success)' : d.score >= 70 ? 'var(--iq-accent)' : 'var(--iq-warning)'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}