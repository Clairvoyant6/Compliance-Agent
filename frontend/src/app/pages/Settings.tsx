import { useEffect, useState } from 'react';
import {
  User, Building2, Bell, Zap, Save, Edit2,
  Camera, Check, ChevronRight, Sparkles, Server,
  ToggleLeft, ToggleRight, Send, AlertTriangle,
} from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useApp } from '../context/AppContext';
import {
  api,
  LLMProviderInfo,
  NotificationPrefs,
} from '../services/api';

type Tab = 'profile' | 'company' | 'ai' | 'notifications' | 'integrations';

const TABS: { key: Tab; label: string; icon: typeof User }[] = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'company', label: 'Company Context', icon: Building2 },
  { key: 'ai', label: 'AI Configuration', icon: Sparkles },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'integrations', label: 'Integrations', icon: Zap },
];

const FALLBACK_PROVIDERS: LLMProviderInfo[] = [
  { id: 'mock', name: 'Mock (no API key)', free: true, needs_key: false },
  { id: 'groq', name: 'Groq (llama-3.3-70b)', free: true, needs_key: true },
  { id: 'gemini', name: 'Google Gemini 1.5', free: true, needs_key: true },
  { id: 'openai', name: 'OpenAI GPT-4o mini', free: false, needs_key: true },
  { id: 'claude', name: 'Anthropic Claude 3.5', free: false, needs_key: true },
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center transition-all"
      style={{ color: checked ? 'var(--iq-accent)' : 'var(--iq-text-muted)' }}
    >
      {checked ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
    </button>
  );
}

function FormField({
  label, value, onChange, type = 'text', placeholder = '', readOnly = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; readOnly?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--iq-text-muted)' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border-none transition-all"
        style={{
          background: 'var(--iq-surface-2)',
          color: readOnly ? 'var(--iq-text-muted)' : 'var(--iq-text)',
          border: '1px solid var(--iq-border)',
          opacity: readOnly ? 0.7 : 1,
        }}
      />
    </div>
  );
}

export default function Settings() {
  const {
    businessContext, setBusinessContext,
    llmConfig, setLlmConfig,
    backendOnline, userEmail, setUserEmail,
  } = useApp();
  const { isDark, toggleTheme } = useTheme();

  const [tab, setTab] = useState<Tab>('profile');
  const [saved, setSaved] = useState(false);
  const [savingNotifs, setSavingNotifs] = useState(false);
  const [testingEmail, setTestingEmail] = useState(false);
  const [testEmailResult, setTestEmailResult] = useState<string>('');

  const [profile, setProfile] = useState({
    name: 'Sarah Mitchell',
    email: userEmail,
    phone: '+91 98765 43210',
    designation: 'CFO & Compliance Head',
    department: 'Finance & Legal',
  });

  const [company, setCompany] = useState(businessContext);
  const [aiConfig, setAiConfig] = useState({
    provider: llmConfig.provider || 'mock',
    api_key: '',
    model: llmConfig.model || '',
  });

  const [providers, setProviders] = useState<LLMProviderInfo[]>(FALLBACK_PROVIDERS);

  const [notifs, setNotifs] = useState<NotificationPrefs>({
    email: userEmail,
    deadline_reminders: true,
    filing_alerts: true,
    mismatch_alerts: true,
    ai_insights: true,
    email_alerts: true,
    daily_digest: false,
  });

  // Keep local state synced with context changes
  useEffect(() => setCompany(businessContext), [businessContext]);
  useEffect(() => {
    setAiConfig((c) => ({ ...c, provider: llmConfig.provider || 'mock', model: llmConfig.model || '' }));
  }, [llmConfig]);

  // Load provider metadata + notification prefs from backend when online
  useEffect(() => {
    if (!backendOnline) return;
    api.listLLMProviders().then(setProviders).catch(() => {});
    api.getNotificationPrefs(userEmail)
      .then((p) => setNotifs(p))
      .catch(() => {
        setNotifs((n) => ({ ...n, email: userEmail }));
      });
  }, [backendOnline, userEmail]);

  const integrations = [
    { id: 'gsp', name: 'GST Suvidha Provider (GSP)', desc: 'Direct GST portal sync via certified GSP', status: 'disconnected', color: 'var(--iq-text-muted)' },
    { id: 'tally', name: 'Tally ERP', desc: 'Sync transactions from Tally', status: 'disconnected', color: 'var(--iq-text-muted)' },
    { id: 'zoho', name: 'Zoho Books', desc: 'Two-way accounting sync', status: 'disconnected', color: 'var(--iq-text-muted)' },
  ];

  const handleSave = async () => {
    setBusinessContext(company);
    setUserEmail(profile.email);

    if (backendOnline) {
      try {
        await api.updateBusinessContext(company);
        await api.updateLLMConfig({
          provider: aiConfig.provider,
          api_key: aiConfig.api_key,
          model: aiConfig.model,
        });
        setLlmConfig({ provider: aiConfig.provider, model: aiConfig.model, has_api_key: !!aiConfig.api_key });
      } catch (e) {
        console.error('[settings] sync failed', e);
      }
    } else {
      setLlmConfig({ provider: aiConfig.provider, model: aiConfig.model });
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleSaveNotifs = async () => {
    if (!backendOnline) return;
    setSavingNotifs(true);
    try {
      await api.updateNotificationPrefs({ ...notifs, email: userEmail });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      console.error('[settings] notif save failed', e);
    } finally {
      setSavingNotifs(false);
    }
  };

  const handleTestEmail = async () => {
    if (!backendOnline || !userEmail) return;
    setTestingEmail(true);
    setTestEmailResult('');
    try {
      const res = await api.sendTestEmail(userEmail);
      setTestEmailResult(
        res.status === 'sent' ? `Test email sent to ${userEmail}.` :
        res.status === 'logged' ? 'RESEND_API_KEY not set — email logged server-side.' :
        'Failed to send test email.'
      );
    } catch (e) {
      setTestEmailResult((e as Error).message);
    } finally {
      setTestingEmail(false);
    }
  };

  const selectedProvider = providers.find((p) => p.id === aiConfig.provider);

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>
            Settings &amp; Configuration
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>
            Manage your profile, business context, and AI integration.
          </p>
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

          <div className="mt-3 rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--iq-text-muted)' }}>
              Appearance
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--iq-text)' }}>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              <Toggle checked={isDark} onChange={toggleTheme} />
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1 min-w-0">
          {/* Profile */}
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
                  <FormField label="Full Name" value={profile.name} onChange={(v) => setProfile((p) => ({ ...p, name: v }))} />
                  <FormField label="Email Address" value={profile.email} onChange={(v) => setProfile((p) => ({ ...p, email: v }))} type="email" />
                  <FormField label="Phone Number" value={profile.phone} onChange={(v) => setProfile((p) => ({ ...p, phone: v }))} />
                  <FormField label="Designation" value={profile.designation} onChange={(v) => setProfile((p) => ({ ...p, designation: v }))} />
                </div>
              </div>
            </div>
          )}

          {/* Company */}
          {tab === 'company' && (
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Active Business Context</h3>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>
                This context is passed to the AI Agent when running analysis and generating reports. It&apos;s persisted in the backend database.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <FormField label="Company Name" value={company.name} onChange={(v) => setCompany((c) => ({ ...c, name: v }))} />
                </div>
                <FormField label="GSTIN" value={company.gstin} onChange={(v) => setCompany((c) => ({ ...c, gstin: v }))} />
                <FormField label="State" value={company.state} onChange={(v) => setCompany((c) => ({ ...c, state: v }))} />
                <FormField label="Business Type" placeholder="Manufacturing, Services, ..." value={company.type} onChange={(v) => setCompany((c) => ({ ...c, type: v }))} />
                <FormField label="Filing Period" placeholder="Q4 FY2026, Mar 2026" value={company.period} onChange={(v) => setCompany((c) => ({ ...c, period: v }))} />
              </div>
            </div>
          )}

          {/* AI */}
          {tab === 'ai' && (
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5" style={{ color: 'var(--iq-accent)' }} />
                <h3 className="font-bold text-sm m-0" style={{ color: 'var(--iq-text)' }}>AI Engine Configuration</h3>
              </div>
              <p className="text-xs mb-5 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>
                Choose the LLM that powers chat, deep scans, and report narratives. Groq and Gemini have generous free tiers.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--iq-text-muted)' }}>
                    Model Provider
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {providers.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setAiConfig((c) => ({ ...c, provider: p.id }))}
                        className="px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left"
                        style={{
                          background: aiConfig.provider === p.id ? 'var(--iq-accent)' : 'var(--iq-surface-2)',
                          color: aiConfig.provider === p.id ? '#fff' : 'var(--iq-text)',
                          border: '1px solid var(--iq-border)',
                        }}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span>{p.name}</span>
                          {p.free && (
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider font-bold"
                              style={{
                                background: aiConfig.provider === p.id ? 'rgba(255,255,255,0.2)' : 'var(--iq-success-bg)',
                                color: aiConfig.provider === p.id ? '#fff' : 'var(--iq-success)',
                              }}
                            >
                              Free
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedProvider?.needs_key && (
                  <FormField
                    label="API Key"
                    value={aiConfig.api_key}
                    onChange={(v) => setAiConfig((c) => ({ ...c, api_key: v }))}
                    type="password"
                    placeholder={`Enter ${selectedProvider.name} API key...`}
                  />
                )}

                <FormField
                  label="Model override (optional)"
                  value={aiConfig.model}
                  onChange={(v) => setAiConfig((c) => ({ ...c, model: v }))}
                  placeholder={aiConfig.provider === 'groq' ? 'llama-3.3-70b-versatile' :
                    aiConfig.provider === 'gemini' ? 'gemini-1.5-flash' : 'leave empty for default'}
                />

                <div
                  className="rounded-xl p-4 flex gap-3 mt-4"
                  style={{ background: 'var(--iq-accent-bg)', border: '1px solid var(--iq-accent)44' }}
                >
                  <Server className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--iq-accent)' }} />
                  <div>
                    <p className="text-sm font-bold m-0" style={{ color: 'var(--iq-accent)' }}>Backend Status</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--iq-text)' }}>
                      {backendOnline
                        ? 'Connected to FastAPI server. Settings will be persisted to the database on save.'
                        : 'Backend offline — running with bundled mock data. Start the Python server to enable live AI.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {tab === 'notifications' && (
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm" style={{ color: 'var(--iq-text)', margin: 0 }}>Alert Preferences</h3>
                  <button
                    onClick={handleSaveNotifs}
                    disabled={!backendOnline || savingNotifs}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity disabled:opacity-50"
                    style={{ background: 'var(--iq-accent)', color: '#fff' }}
                  >
                    {savingNotifs ? 'Saving...' : 'Save preferences'}
                  </button>
                </div>

                {!backendOnline && (
                  <div className="flex items-start gap-2 p-3 rounded-lg mb-4" style={{ background: 'var(--iq-warning-bg)', border: '1px solid var(--iq-warning)44' }}>
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--iq-warning)' }} />
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--iq-text)' }}>
                      Notifications are persisted on the backend. Start the Python server to save preferences.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  {[
                    { key: 'deadline_reminders', label: 'Deadline Reminders', desc: 'Get alerts before compliance deadlines' },
                    { key: 'filing_alerts', label: 'Filing Alerts', desc: 'Notifications when filings are due or overdue' },
                    { key: 'mismatch_alerts', label: 'Mismatch Alerts', desc: 'Alerts when ITC or invoice mismatches are detected' },
                    { key: 'ai_insights', label: 'AI Insights', desc: 'Weekly AI-generated compliance insights' },
                    { key: 'email_alerts', label: 'Email Alerts', desc: 'Send alerts via email (Resend)' },
                    { key: 'daily_digest', label: 'Daily Digest', desc: 'Morning summary emailed at 08:00 IST' },
                  ].map(({ key, label, desc }) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-2"
                      style={{ borderBottom: '1px solid var(--iq-border)' }}
                    >
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--iq-text)' }}>{label}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{desc}</p>
                      </div>
                      <Toggle
                        checked={notifs[key as keyof NotificationPrefs] as boolean}
                        onChange={(v) => setNotifs((n) => ({ ...n, [key]: v }))}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--iq-border)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--iq-text-muted)' }}>
                    Email Address
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="flex-1 px-3 py-2.5 rounded-lg text-sm outline-none border-none"
                      style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
                    />
                    <button
                      onClick={handleTestEmail}
                      disabled={!backendOnline || testingEmail}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-opacity disabled:opacity-50"
                      style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
                    >
                      <Send className="w-3 h-3" />
                      {testingEmail ? 'Sending...' : 'Send test'}
                    </button>
                  </div>
                  {testEmailResult && (
                    <p className="text-xs mt-2" style={{ color: 'var(--iq-text-muted)' }}>{testEmailResult}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Integrations */}
          {tab === 'integrations' && (
            <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
              <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--iq-text)', margin: 0 }}>Connected Services</h3>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--iq-text-muted)' }}>
                Third-party integrations are mocked in this build. Wire up OAuth flows when ready.
              </p>
              <div className="space-y-3">
                {integrations.map((int) => (
                  <div
                    key={int.id}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'var(--iq-surface-3)' }}
                    >
                      <Zap className="w-5 h-5" style={{ color: int.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm" style={{ color: 'var(--iq-text)' }}>{int.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{int.desc}</p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: 'var(--iq-surface-3)', color: 'var(--iq-text-muted)' }}
                    >
                      Disconnected
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
