import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, AlertTriangle, CheckCircle2, AlertCircle, Calendar, List, Filter, Loader2 } from 'lucide-react';
import {
  format, startOfMonth, endOfMonth, eachDayOfInterval,
  isSameMonth, isSameDay, getDay, addMonths, subMonths, parseISO
} from 'date-fns';

import { useApp } from '../context/AppContext';
import { api, BackendDeadline } from '../services/api';
// Fallback
import { complianceEvents as mockEvents } from '../data/mockData';

const TYPE_COLORS: Record<string, string> = {
  filing: 'var(--iq-accent)',
  payment: 'var(--iq-warning)',
  audit: 'var(--iq-danger)',
  deadline: 'var(--iq-danger)',
};

const STATUS_CONFIG: Record<string, { color: string; icon: typeof CheckCircle2; label: string }> = {
  pending: { color: 'var(--iq-warning)', icon: Clock, label: 'Pending' },
  filed: { color: 'var(--iq-success)', icon: CheckCircle2, label: 'Filed' },
  overdue: { color: 'var(--iq-danger)', icon: AlertTriangle, label: 'Overdue' },
};

function EventDot({ type }: { type: string }) {
  return <div className="w-1.5 h-1.5 rounded-full" style={{ background: TYPE_COLORS[type] ?? 'var(--iq-accent)' }} />;
}

// Ensure unique ID
const genId = () => Math.random().toString(36).substr(2, 9);

export default function ComplianceCalendar() {
  const { activeDatasetId, businessContext } = useApp();
  
  const [currentMonth, setCurrentMonth] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [filterType, setFilterType] = useState('All');
  
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchDeadlines() {
      setLoading(true);
      try {
        const dls = await api.getDeadlines();
        
        // Map backend deadlines to calendar events
        const mapped = dls.map((d: BackendDeadline) => {
          let status = 'pending';
          if (d.status === 'Overdue') status = 'overdue';
          
          let priority = 'medium';
          if (d.alert_level === 'critical' || d.priority === 'CRITICAL' || d.priority === 'HIGH') priority = 'high';
          if (d.priority === 'LOW') priority = 'low';

          return {
            id: genId(),
            date: d.due_date,
            title: d.description,
            type: 'filing',
            status,
            priority,
            form: d.filing,
            description: d.reason || d.penalty || ''
          };
        });
        
        // If the backend has no deadlines (or mock mode), use fallback. 
        // We'll merge them for demo purposes if backend only returns a few.
        if (mapped.length > 0) {
          // Adjust current month to match the first deadline found if it's the first load
          setCurrentMonth(parseISO(mapped[0].date));
          setSelectedDate(parseISO(mapped[0].date));
          setEvents(mapped);
        } else {
          setEvents(mockEvents);
        }
      } catch (err) {
        console.error('Failed to fetch deadlines', err);
        setEvents(mockEvents);
      } finally {
        setLoading(false);
      }
    }
    fetchDeadlines();
  }, [activeDatasetId]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad start
  const startPad = getDay(monthStart);
  const paddedDays: (Date | null)[] = [...Array(startPad).fill(null), ...days];

  const getEventsForDay = (date: Date) =>
    events.filter(e => {
        try { return isSameDay(parseISO(e.date), date); } 
        catch { return false; }
    });

  const selectedEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  const filteredEvents = events.filter(e => filterType === 'All' || e.type === filterType);

  const upcomingEvents = filteredEvents
    .filter(e => {
        try {
            return parseISO(e.date) >= monthStart;
        } catch { return false; }
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--iq-accent)' }} />
          <p className="text-sm font-semibold" style={{ color: 'var(--iq-text-muted)' }}>Loading Calendar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-7 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>Compliance Calendar</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--iq-text-muted)' }}>Track all your filing deadlines, payments, and compliance events.</p>
        </div>
        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'var(--iq-surface-2)' }}>
            <button
              onClick={() => setView('calendar')}
              className="p-1.5 rounded"
              style={{ background: view === 'calendar' ? 'var(--iq-surface)' : 'transparent', color: view === 'calendar' ? 'var(--iq-accent)' : 'var(--iq-text-muted)' }}
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className="p-1.5 rounded"
              style={{ background: view === 'list' ? 'var(--iq-surface)' : 'transparent', color: view === 'list' ? 'var(--iq-accent)' : 'var(--iq-text-muted)' }}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total Events', value: events.length, color: 'var(--iq-text)' },
          { label: 'Overdue', value: events.filter(e => e.status === 'overdue').length, color: 'var(--iq-danger)' },
          { label: 'Due This Month', value: events.filter(e => e.date.startsWith(format(currentMonth, 'yyyy-MM'))).length, color: 'var(--iq-warning)' },
          { label: 'Filed', value: events.filter(e => e.status === 'filed').length, color: 'var(--iq-success)' },
        ].map(c => (
          <div key={c.label} className="rounded-xl p-4" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--iq-text-muted)' }}>{c.label}</p>
            <p className="font-bold font-mono" style={{ color: c.color, fontSize: '22px' }}>{c.value}</p>
          </div>
        ))}
      </div>

      {view === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Calendar */}
          <div className="lg:col-span-2 rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="p-2 rounded-lg transition-colors hover:opacity-70"
                style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text-muted)' }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h3 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '15px', margin: 0 }}>
                {format(currentMonth, 'MMMM yyyy')}
              </h3>
              <button
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="p-2 rounded-lg transition-colors hover:opacity-70"
                style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text-muted)' }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 mb-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="text-center py-1" style={{ color: 'var(--iq-text-muted)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-0.5">
              {paddedDays.map((day, i) => {
                if (!day) return <div key={`pad-${i}`} />;
                const dayEvents = getEventsForDay(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());
                const hasOverdue = dayEvents.some(e => e.status === 'overdue');
                const hasPending = dayEvents.some(e => e.status === 'pending');

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className="relative flex flex-col items-center py-1.5 rounded-lg transition-all"
                    style={{
                      background: isSelected ? 'var(--iq-accent)' : isToday ? 'var(--iq-accent-bg)' : 'transparent',
                      minHeight: 52,
                    }}
                  >
                    <span
                      style={{
                        color: isSelected ? '#fff' : !isSameMonth(day, currentMonth) ? 'var(--iq-text-muted)' : 'var(--iq-text)',
                        fontSize: '12px',
                        fontWeight: isToday || isSelected ? 700 : 400,
                      }}
                    >
                      {format(day, 'd')}
                    </span>
                    {dayEvents.length > 0 && (
                      <div className="flex gap-0.5 mt-1 flex-wrap justify-center">
                        {dayEvents.slice(0, 3).map((e, idx) => (
                          <EventDot key={idx} type={e.type} />
                        ))}
                      </div>
                    )}
                    {hasOverdue && (
                      <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--iq-danger)' }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-3 pt-3" style={{ borderTop: '1px solid var(--iq-border)' }}>
              {[
                { label: 'Filing', color: 'var(--iq-accent)' },
                { label: 'Payment', color: 'var(--iq-warning)' },
                { label: 'Deadline', color: 'var(--iq-danger)' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  <span className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day detail */}
          <div className="rounded-xl p-5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <h3 className="font-bold mb-3" style={{ color: 'var(--iq-text)', fontSize: '14px', margin: 0 }}>
              {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
            </h3>

            {selectedEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10" style={{ color: 'var(--iq-text-muted)' }}>
                <Calendar className="w-8 h-8 mb-2 opacity-30" />
                <p className="text-xs text-center">No events on this date</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedEvents.map(event => {
                  const cfg = STATUS_CONFIG[event.status] || STATUS_CONFIG.pending;
                  const Icon = cfg.icon;
                  return (
                    <div key={event.id} className="rounded-xl p-3" style={{ background: 'var(--iq-surface-2)', borderLeft: `3px solid ${TYPE_COLORS[event.type]}` }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold font-mono" style={{ color: TYPE_COLORS[event.type] }}>{event.form}</span>
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: cfg.color + '22', color: cfg.color }}>
                          <Icon className="w-2.5 h-2.5" />
                          {cfg.label}
                        </span>
                      </div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--iq-text)' }}>{event.title}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--iq-text-muted)' }}>{event.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Upcoming events mini-list */}
            <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--iq-border)' }}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--iq-text-muted)', margin: 0 }}>Next 5 Upcoming</h4>
              <div className="space-y-2">
                {upcomingEvents.slice(0, 5).map(e => {
                  const cfg = STATUS_CONFIG[e.status] || STATUS_CONFIG.pending;
                  const Icon = cfg.icon;
                  return (
                    <button
                      key={e.id}
                      onClick={() => {
                        try {
                          const pd = parseISO(e.date);
                          setSelectedDate(pd);
                          setCurrentMonth(startOfMonth(pd));
                        } catch {}
                      }}
                      className="flex items-center gap-2 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: cfg.color + '22' }}>
                        <Icon className="w-3 h-3" style={{ color: cfg.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: 'var(--iq-text)' }}>{e.title}</p>
                        <p className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>{e.date}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="space-y-3">
          {/* Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4" style={{ color: 'var(--iq-text-muted)' }} />
            {['All', 'filing', 'payment', 'deadline', 'audit'].map(f => (
              <button
                key={f}
                onClick={() => setFilterType(f)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize"
                style={{
                  background: filterType === f ? 'var(--iq-accent)' : 'var(--iq-surface)',
                  color: filterType === f ? '#fff' : 'var(--iq-text-muted)',
                  border: '1px solid var(--iq-border)',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            {upcomingEvents.map((event, i) => {
              const cfg = STATUS_CONFIG[event.status] || STATUS_CONFIG.pending;
              const Icon = cfg.icon;
              const typeColor = TYPE_COLORS[event.type] ?? 'var(--iq-accent)';
              let parsedDate = new Date();
              try { parsedDate = parseISO(event.date); } catch { }
              
              return (
                <div
                  key={event.id}
                  className="flex items-center gap-4 px-5 py-4"
                  style={{ borderBottom: i < upcomingEvents.length - 1 ? '1px solid var(--iq-border)' : 'none' }}
                >
                  <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0" style={{ background: typeColor + '22' }}>
                    <span className="font-bold text-sm" style={{ color: typeColor }}>{format(parsedDate, 'd')}</span>
                    <span className="text-xs" style={{ color: typeColor, opacity: 0.7 }}>{format(parsedDate, 'MMM')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs" style={{ color: typeColor }}>{event.form}</span>
                      <span className="text-xs capitalize" style={{ color: 'var(--iq-text-muted)' }}>{event.type}</span>
                    </div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--iq-text)' }}>{event.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--iq-text-muted)' }}>{event.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                      style={{ background: cfg.color + '22', color: cfg.color }}
                    >
                      <Icon className="w-3 h-3" />
                      {cfg.label}
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold capitalize whitespace-nowrap"
                      style={{
                        background: event.priority === 'high' ? 'var(--iq-danger-bg)' : event.priority === 'medium' ? 'var(--iq-warning-bg)' : 'var(--iq-accent-bg)',
                        color: event.priority === 'high' ? 'var(--iq-danger)' : event.priority === 'medium' ? 'var(--iq-warning)' : 'var(--iq-accent)',
                      }}
                    >
                      {event.priority}
                    </span>
                  </div>
                </div>
              );
            })}
            {upcomingEvents.length === 0 && (
              <div className="py-12 text-center text-sm" style={{ color: 'var(--iq-text-muted)' }}>
                No events found for the selected filters.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
