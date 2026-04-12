import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, BusinessContext, LLMConfig } from '../services/api';

interface AppState {
  activeDatasetId: string;
  setActiveDatasetId: (id: string) => void;
  businessContext: BusinessContext;
  setBusinessContext: (ctx: BusinessContext) => void;
  llmConfig: LLMConfig;
  setLlmConfig: (cfg: LLMConfig) => void;
  backendOnline: boolean;
  lastSync: string;
  refreshBackendStatus: () => void;
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
  llmConfig: { provider: 'mock' },
  setLlmConfig: () => {},
  backendOnline: false,
  lastSync: '',
  refreshBackendStatus: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeDatasetId, setActiveDatasetId] = useState('sample');
  const [businessContext, setBusinessContext] = useState<BusinessContext>(defaultBusinessContext);
  const [llmConfig, setLlmConfig] = useState<LLMConfig>({ provider: 'mock' });
  const [backendOnline, setBackendOnline] = useState(false);
  const [lastSync, setLastSync] = useState('');

  const refreshBackendStatus = async () => {
    try {
      const health = await api.checkHealth();
      setBackendOnline(health.status === 'ok');
      setLastSync(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));

      // Fetch business context
      try {
        const ctx = await api.getBusinessContext();
        setBusinessContext(ctx);
      } catch { /* use defaults */ }

      // Fetch LLM config
      try {
        const cfg = await api.getLLMConfig();
        setLlmConfig(cfg);
      } catch { /* use defaults */ }
    } catch {
      setBackendOnline(false);
    }
  };

  useEffect(() => {
    refreshBackendStatus();
    const interval = setInterval(refreshBackendStatus, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider value={{
      activeDatasetId, setActiveDatasetId,
      businessContext, setBusinessContext,
      llmConfig, setLlmConfig,
      backendOnline, lastSync,
      refreshBackendStatus,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
