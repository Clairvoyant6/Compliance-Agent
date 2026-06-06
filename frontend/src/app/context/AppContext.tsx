import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { api, BusinessContext, LLMConfig } from '../services/api';

interface AppState {
  activeDatasetId: string;
  setActiveDatasetId: (id: string) => void;
  businessContext: BusinessContext;
  setBusinessContext: (ctx: BusinessContext) => void;
  llmConfig: LLMConfig;
  setLlmConfig: (cfg: LLMConfig) => void;
  backendOnline: boolean;
  mockMode: boolean;
  lastSync: string;
  userEmail: string;
  setUserEmail: (email: string) => void;
  refreshBackendStatus: () => Promise<void>;
}

const defaultBusinessContext: BusinessContext = {
  name: 'MyBusiness Solutions Pvt Ltd',
  gstin: '29AABCM1234F1ZR',
  type: 'Service Provider',
  state: 'Karnataka',
  filing_frequency: 'Monthly',
  period: 'March 2024',
};

const AppContext = createContext<AppState>({
  activeDatasetId: 'sample',
  setActiveDatasetId: () => {},
  businessContext: defaultBusinessContext,
  setBusinessContext: () => {},
  llmConfig: { provider: 'gemini' },
  setLlmConfig: () => {},
  backendOnline: false,
  mockMode: true,
  lastSync: '',
  userEmail: 'sarah.mitchell@precisionengg.com',
  setUserEmail: () => {},
  refreshBackendStatus: async () => {},
});

const USER_EMAIL_KEY = 'complianceiq:user-email';

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeDatasetId, setActiveDatasetId] = useState('sample');
  const [businessContext, setBusinessContext] = useState<BusinessContext>(defaultBusinessContext);
  const [llmConfig, setLlmConfig] = useState<LLMConfig>({ provider: 'gemini' });
  const [backendOnline, setBackendOnline] = useState(false);
  const [mockMode, setMockMode] = useState(true);
  const [lastSync, setLastSync] = useState('');
  const [userEmail, setUserEmailState] = useState(() => {
    if (typeof window === 'undefined') return 'sarah.mitchell@precisionengg.com';
    return localStorage.getItem(USER_EMAIL_KEY) || 'sarah.mitchell@precisionengg.com';
  });

  const setUserEmail = useCallback((email: string) => {
    setUserEmailState(email);
    try {
      localStorage.setItem(USER_EMAIL_KEY, email);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const refreshBackendStatus = useCallback(async () => {
    try {
      const health = await api.checkHealth();
      const online = health.status === 'ok';
      setBackendOnline(online);
      setMockMode(!online);
      setLastSync(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));

      try {
        const ctx = await api.getBusinessContext();
        setBusinessContext(ctx);
      } catch {
        /* keep defaults */
      }

      try {
        const cfg = await api.getLLMConfig();
        setLlmConfig(cfg);
      } catch {
        /* keep defaults */
      }
    } catch {
      setBackendOnline(false);
      setMockMode(true);
    }
  }, []);

  useEffect(() => {
    refreshBackendStatus();
    const interval = setInterval(refreshBackendStatus, 30000);
    return () => clearInterval(interval);
  }, [refreshBackendStatus]);

  return (
    <AppContext.Provider
      value={{
        activeDatasetId,
        setActiveDatasetId,
        businessContext,
        setBusinessContext,
        llmConfig,
        setLlmConfig,
        backendOnline,
        mockMode,
        lastSync,
        userEmail,
        setUserEmail,
        refreshBackendStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
