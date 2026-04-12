import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import {
  LayoutDashboard, ArrowLeftRight, Receipt, CalendarDays, Bot,
  Activity, BarChart2, Settings, Bell, Search, Sun, Moon,
  Menu, X, Shield, ChevronRight, User, LogOut, TrendingUp
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { path: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { path: '/gst', label: 'GST Centre', icon: Receipt },
  { path: '/calendar', label: 'Compliance Calendar', icon: CalendarDays },
  { path: '/ai-agent', label: 'AI Agent', icon: Bot },
  { path: '/health', label: 'Health Monitor', icon: Activity },
  { path: '/reports', label: 'Reports', icon: BarChart2 },
];

const pageLabels: Record<string, string> = {
  '/': 'Dashboard',
  '/transactions': 'Transactions',
  '/gst': 'GST Centre',
  '/calendar': 'Compliance Calendar',
  '/ai-agent': 'AI Compliance Agent',
  '/health': 'Health Monitor',
  '/reports': 'Reports',
  '/settings': 'Settings & Profile',
};

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const pageTitle = pageLabels[location.pathname] ?? 'ComplianceIQ';

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--iq-bg)' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: 'var(--iq-sidebar-bg)', borderRight: '1px solid var(--iq-border)' }}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 px-5 shrink-0" style={{ borderBottom: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: 'var(--iq-accent-bg)' }}>
            <Shield className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <div>
            <span className="font-bold tracking-tight" style={{ color: 'var(--iq-sidebar-text)', fontSize: '15px' }}>
              Compliance<span style={{ color: 'var(--iq-accent)' }}>IQ</span>
            </span>
            <p style={{ color: 'var(--iq-sidebar-muted)', fontSize: '10px', marginTop: '1px' }}>Enterprise Suite</p>
          </div>
          <button
            className="ml-auto lg:hidden p-1 rounded"
            onClick={() => setSidebarOpen(false)}
            style={{ color: 'var(--iq-sidebar-muted)' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Company badge */}
        <div className="mx-3 mt-3 mb-1 px-3 py-2.5 rounded-lg" style={{ background: 'var(--iq-sidebar-hover)', border: '1px solid var(--iq-border)' }}>
          <p style={{ color: 'var(--iq-sidebar-muted)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>Active Entity</p>
          <p style={{ color: 'var(--iq-sidebar-text)', fontSize: '13px', fontWeight: 600 }}>Precision Engineering Ltd.</p>
          <p style={{ color: 'var(--iq-sidebar-muted)', fontSize: '11px' }}>GSTIN: 27AABCP4912C1Z6</p>
        </div>

        {/* Nav label */}
        <p className="px-5 pt-4 pb-2" style={{ color: 'var(--iq-sidebar-muted)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
          Navigation
        </p>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto px-3 space-y-0.5">
          {navItems.map(({ path, label, icon: Icon, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                  isActive ? 'active-nav' : ''
                }`
              }
              style={({ isActive }) => ({
                background: isActive ? 'var(--iq-sidebar-active)' : 'transparent',
                color: isActive ? 'var(--iq-sidebar-active-text)' : 'var(--iq-sidebar-muted)',
              })}
            >
              {({ isActive }) => (
                <>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span style={{ fontSize: '13px', fontWeight: isActive ? 600 : 400 }}>{label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
                </>
              )}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="my-2" style={{ height: '1px', background: 'var(--iq-border)' }} />

          {/* Settings */}
          <NavLink
            to="/settings"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150"
            style={({ isActive }) => ({
              background: isActive ? 'var(--iq-sidebar-active)' : 'transparent',
              color: isActive ? 'var(--iq-sidebar-active-text)' : 'var(--iq-sidebar-muted)',
            })}
          >
            {({ isActive }) => (
              <>
                <Settings className="w-4 h-4 shrink-0" />
                <span style={{ fontSize: '13px', fontWeight: isActive ? 600 : 400 }}>Settings</span>
                {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
              </>
            )}
          </NavLink>
        </nav>

        {/* Compliance Score Badge */}
        <div className="mx-3 mb-3 p-3 rounded-lg" style={{ background: 'var(--iq-accent-bg)', border: '1px solid var(--iq-border)' }}>
          <div className="flex items-center justify-between mb-1.5">
            <span style={{ color: 'var(--iq-sidebar-muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Compliance Score</span>
            <TrendingUp className="w-3 h-3" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span style={{ color: 'var(--iq-accent)', fontSize: '22px', fontWeight: 700, fontFamily: 'monospace' }}>72</span>
            <span style={{ color: 'var(--iq-sidebar-muted)', fontSize: '12px' }}>/100</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--iq-border)' }}>
            <div className="h-full rounded-full" style={{ width: '72%', background: 'var(--iq-accent)' }} />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ borderTop: '1px solid var(--iq-border)' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--iq-accent-bg)' }}>
            <User className="w-4 h-4" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p style={{ color: 'var(--iq-sidebar-text)', fontSize: '12px', fontWeight: 600 }} className="truncate">Sarah Mitchell</p>
            <p style={{ color: 'var(--iq-sidebar-muted)', fontSize: '10px' }} className="truncate">CFO & Compliance Head</p>
          </div>
          <button style={{ color: 'var(--iq-sidebar-muted)' }} className="hover:opacity-100 opacity-60 transition-opacity">
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header
          className="flex h-16 items-center gap-4 px-4 lg:px-6 shrink-0"
          style={{ background: 'var(--iq-surface)', borderBottom: '1px solid var(--iq-border)' }}
        >
          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(true)}
            style={{ color: 'var(--iq-text-muted)', background: 'var(--iq-surface-2)' }}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Page title */}
          <div className="hidden sm:block">
            <h1 className="font-bold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '16px', margin: 0 }}>{pageTitle}</h1>
            <p style={{ color: 'var(--iq-text-muted)', fontSize: '11px', marginTop: '1px' }}>FY 2025-26 · Q4 Active</p>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--iq-surface-2)', border: '1px solid var(--iq-border)' }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--iq-text-muted)' }} />
            <input
              type="text"
              placeholder="Search transactions, forms, vendors..."
              className="flex-1 bg-transparent outline-none border-none text-sm"
              style={{ color: 'var(--iq-text)', caretColor: 'var(--iq-accent)' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            {/* Notifications */}
            <button
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: 'var(--iq-text-muted)', background: 'var(--iq-surface-2)' }}
            >
              <Bell className="w-4 h-4" />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ background: 'var(--iq-danger)' }}
              />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'var(--iq-text-muted)', background: 'var(--iq-surface-2)' }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* User avatar */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: 'var(--iq-accent-bg)', color: 'var(--iq-accent)' }}
            >
              <User className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
