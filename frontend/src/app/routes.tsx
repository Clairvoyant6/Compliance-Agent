import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import GSTCentre from './pages/GSTCentre';
import ComplianceCalendar from './pages/ComplianceCalendar';
import AIAgent from './pages/AIAgent';
import HealthMonitor from './pages/HealthMonitor';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AuditTrail from './pages/AuditTrail';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'transactions', Component: Transactions },
      { path: 'gst', Component: GSTCentre },
      { path: 'calendar', Component: ComplianceCalendar },
      { path: 'ai-agent', Component: AIAgent },
      { path: 'health', Component: HealthMonitor },
      { path: 'reports', Component: Reports },
      { path: 'audit', Component: AuditTrail },
      { path: 'settings', Component: Settings },
      { path: '*', Component: NotFound },
    ],
  },
]);
