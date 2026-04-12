import { useState } from 'react';
import {
  User, Building2, Bell, Shield, Zap, Save, Edit2,
  Camera, Mail, Phone, MapPin, Globe, Check, ChevronRight,
  Key, Smartphone, AlertTriangle, ToggleLeft, ToggleRight, Sparkles, Server
} from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useApp } from '../context/AppContext';
import { api } from '../services/api';

type Tab = 'profile' | 'company' | 'ai' | 'notifications' | 'integrations';

const TABS: { key: Tab; label: string; icon: typeof User }[] = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'company', label: 'Company Context', icon: Building2 },
  { key: 'ai', label: 'AI Configuration', icon: Sparkles },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'integrations', label: 'Integrations', icon: Zap },
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center transition-all"
      style={{ color: checked ? 'var(--iq-accent)' : 'var(--iq-text-muted)' }}
    >
      {checked
        ? <ToggleRight className="w-8 h-8" />
        : <ToggleLeft className="w-8 h-8" />
      }
    </button>
  );
}

function FormField({ label, value, onChange, type = 'text', placeholder = '', readOnly = false }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; readOnly?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--iq-text-muted)' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border-none transition-all"
        style={{
          background: readOnly ? 'var(--iq-surface-2)' : 'var(--iq-surface-2)',
          color: readOnly ? 'var(--iq-text-muted)' : 'var(--iq-text)',
          border: '1px solid var(--iq-border)',
          opacity: readOnly ? 0.7 : 1,
        }}
      />
    </div>
  );
}

export default function Settings() {
  const { businessContext, setBusinessContext, llmConfig, setLlmConfig, activeDatasetId, backendOnline } = useApp();
  
  const [tab, setTab] = useState<Tab>('profile');
  const [saved, setSaved] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Profile state
  const [profile, setProfile] = useState({
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@precisionengg.com',
    phone: '+91 98765 43210',
    designation: 'CFO & Compliance Head',
    department: 'Finance & Legal',
  });

  // Local state for context edits
  const [company, setCompany] = useState(businessContext);
  const [aiConfig, setAiConfig] = useState(llmConfig);

  // Notification preferences
  const [notifs, setNotifs] = useState({
    deadlineReminders: true,
    filingAlerts: true,
    mismatchAlerts: true,
    aiInsights: true,
    emailAlerts: true,
  });

  // Integrations
  const integrations = [
    { id: 'gsp', name: 'GST Suvidha Provider (GSP)', desc: 'Direct GST portal sync via certified GSP', status: 'connected', color: 'var(--iq-success)' },
    { id: 'tally', name: 'Tally ERP', desc: 'Sync transactions from Tally', status: 'connected', color: 'var(--iq-success)' },
    { id: 'zoho', name: 'Zoho Books', desc: 'Two-way accounting sync', status: 'disconnected', color: 'var(--iq-text-muted)' },
  ];

  const handleSave = async () => {
    // Save to context
    setBusinessContext(company);
    setLlmConfig(aiConfig);
    
    // Also push to backend
    if (backendOnline) {
      try {
        await api.updateBusinessContext(activeDatasetId, company);
        await api.updateLlmConfig(activeDatasetId, aiConfig);
      } catch (e) {
         console.error('Failed to sync settings with backend', e);
      }
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>Settings & Configuration</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>Manage your profile, business context, and AI integration.</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90 min-w-[140px] justify-center"
          style={{ background: saved ? 'var(--iq-success)' : 'var(--iq-accent)', color: '#fff' }}
        >
          {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Tab sidebar */}
        <div className="lg:w-52 shrink-0">
          <div className="rounded-xl p-2" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-all"
                style={{
                  background: tab === key ? 'var(--iq-accent-bg)' : 'transparent',
                  color: tab === key ? 'var(--iq-accent)' : 'var(--iq-text-muted)',
                  fontWeight: tab === key ? 600 : 400,
                }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
                {tab === key && <ChevronRight className="w-3 h-3 ml-auto" />}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="mt-3 rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--iq-text-muted)' }}>Appearance</p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--iq-text)' }}>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              <Toggle checked={isDark} onChange={() => toggleTheme()} />
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1 min-w-0">
          {/* Profile Tab */}
          {tab === 'profile' && (
            <div className="space-y-5">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Profile Information</h3>
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'var(--iq-accent-bg)' }}>
                      <User className="w-8 h-8" style={{ color: 'var(--iq-accent)' }} />
                    </div>
                    <button
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--iq-accent)', color: '#fff' }}
                    >
                      <Camera className="w-3 h-3" />
                    </button>
                  </div>
                  <div>
                    <p className="font-bold text-base" style={{ color: 'var(--iq-text)' }}>{profile.name}</p>
                    <p className="text-sm" style={{ color: 'var(--iq-text-muted)' }}>{profile.designation}</p>
                    <button className="text-xs mt-1 font-semibold flex items-center gap-1" style={{ color: 'var(--iq-accent)' }}>
                      <Edit2 className="w-3 h-3" /> Change photo
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Full Name" value={profile.name} onChange={v => setProfile(p => ({ ...p, name: v }))} />
                  <FormField label="Email Address" value={profile.email} onChange={v => setProfile(p => ({ ...p, email: v }))} type="email" />
                  <FormField label="Phone Number" value={profile.phone} onChange={v => setProfile(p => ({ ...p, phone: v }))} />
                  <FormField label="Designation" value={profile.designation} onChange={v => setProfile(p => ({ ...p, designation: v }))} />
                </div>
              </div>
            </div>
          )}

          {/* Company Tab */}
          {tab === 'company' && (
            <div className="space-y-5">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Active Business Context</h3>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>
                  This context is passed to the AI Agent when running analysis and generating reports. Ensure it matches your current active dataset.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <FormField label="Company Name" value={company.name} onChange={v => setCompany(c => ({ ...c, name: v }))} />
                  </div>
                  <FormField label="Business Type" placeholder="e.g. Manufacturing, Services, E-commerce" value={company.type} onChange={v => setCompany(c => ({ ...c, type: v }))} />
                  <FormField label="Filing Period" placeholder="e.g. Q4 FY2026, Mar 2026" value={company.period} onChange={v => setCompany(c => ({ ...c, period: v }))} />
                </div>
              </div>
            </div>
          )}

          {/* AI Settings Tab */}
          {tab === 'ai' && (
            <div className="space-y-5">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <div className="flex items-center gap-2 mb-4">
                   <Sparkles className="w-5 h-5" style={{ color: 'var(--iq-accent)' }} />
                   <h3 className="font-bold text-sm m-0" style={{ color: 'var(--iq-text)' }}>AI Engine Configuration</h3>
                </div>
                <p className="text-xs mb-5 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>
                  Configure the primary LLM used for deep compliance analysis and chat intelligence. 
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--iq-text-muted)' }}>Model Provider</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'mock', name: 'Mock Data' },
                        { id: 'claude', name: 'Anthropic Claude' },
                        { id: 'gemini', name: 'Google Gemini' },
                        { id: 'openai', name: 'OpenAI GPT-4' }
                      ].map(p => (
                        <button
                           key={p.id}
                           onClick={() => setAiConfig(c => ({ ...c, provider: p.id as any }))}
                           className="px-3 py-2 rounded-lg text-sm font-semibold transition-all"
                           style={{
                             background: aiConfig.provider === p.id ? 'var(--iq-accent)' : 'var(--iq-surface-2)',
                             color: aiConfig.provider === p.id ? '#fff' : 'var(--iq-text)',
                             border: '1px solid var(--iq-border)',
                           }}
                        >
                           {p.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {aiConfig.provider !== 'mock' && (
                    <FormField
                      label="API Key"
                      value={aiConfig.apiKey}
                      onChange={v => setAiConfig(c => ({ ...c, apiKey: v }))}
                      type="password"
                      placeholder={`Enter ${aiConfig.provider} API key...`}
                    />
                  )}
                  
                  <div className="rounded-xl p-4 flex gap-3 mt-4" style={{ background: 'var(--iq-accent-bg)', border: '1px solid var(--iq-accent)' + '44' }}>
                     <Server className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--iq-accent)' }} />
                     <div>
                        <p className="text-sm font-bold m-0" style={{ color: 'var(--iq-accent)' }}>Local Backend Status</p>
                        <p className="text-xs mt-1" style={{ color: 'var(--iq-text)' }}>
                          {backendOnline ? '🟢 Connected to FastAPI server at port 8000. Changes will be synced to python backend upon save.' : '🔴 Disconnected from API. Using local mock fallback.'}
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {tab === 'notifications' && (
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Alert Preferences</h3>
                <div className="space-y-4">
                  {[
                    { key: 'deadlineReminders', label: 'Deadline Reminders', desc: 'Get alerts before compliance deadlines' },
                    { key: 'filingAlerts', label: 'Filing Alerts', desc: 'Notifications when filings are due or overdue' },
                    { key: 'mismatchAlerts', label: 'Mismatch Alerts', desc: 'Alerts when ITC or invoice mismatches are detected' },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid var(--iq-border)' }}>
                      <div>
                         <p className="text-sm font-semibold" style={{ color: 'var(--iq-text)' }}>{label}</p>
                         <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{desc}</p>
                      </div>
                      <Toggle checked={notifs[key as keyof typeof notifs] as boolean} onChange={v => setNotifs(n => ({ ...n, [key]: v }))} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {tab === 'integrations' && (
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Connected Services (Mock)</h3>
                <div className="space-y-3">
                  {integrations.map(int => (
                    <div key={int.id} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: int.status === 'connected' ? 'var(--iq-success-bg)' : 'var(--iq-surface-3)' }}>
                        <Zap className="w-5 h-5" style={{ color: int.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm" style={{ color: 'var(--iq-text)' }}>{int.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{int.desc}</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: int.status === 'connected' ? 'var(--iq-success-bg)' : 'var(--iq-surface-3)', color: int.status === 'connected' ? 'var(--iq-success)' : 'var(--iq-text-muted)' }}>
                        {int.status === 'connected' ? '● Connected' : '○ Disconnected'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
