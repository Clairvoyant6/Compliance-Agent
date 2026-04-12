import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Lightbulb, Zap, RefreshCw, Copy, ThumbsUp, ThumbsDown, Sparkles, Server, FileSearch } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { api } from '../services/api';
// Fallback
import { aiSuggestions as mockSuggestions } from '../data/mockData';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

function MarkdownText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\n|#{1,6}\s.*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.match(/^#{1,6}\s/)) {
            return <strong key={i} className="block mt-2 mb-1 text-sm">{part.replace(/^#{1,6}\s/, '')}</strong>;
        }
        if (part === '\n') return <br key={i} />;
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isAI = msg.role === 'assistant';
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(msg.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-3 ${isAI ? '' : 'flex-row-reverse'}`}>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: isAI ? 'var(--iq-accent-bg)' : 'var(--iq-surface-3)' }}
      >
        {isAI
          ? <Bot className="w-3.5 h-3.5" style={{ color: 'var(--iq-accent)' }} />
          : <User className="w-3.5 h-3.5" style={{ color: 'var(--iq-text-muted)' }} />
        }
      </div>

      <div className={`flex flex-col gap-1 max-w-[85%] ${isAI ? '' : 'items-end'}`}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: 'var(--iq-text-muted)' }}>
            {isAI ? 'AI Compliance Agent' : 'You'}
          </span>
          <span className="text-xs" style={{ color: 'var(--iq-text-muted)', opacity: 0.5 }}>{msg.timestamp}</span>
        </div>

        <div
          className="px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
          style={{
            background: isAI ? 'var(--iq-surface)' : 'var(--iq-accent)',
            color: isAI ? 'var(--iq-text)' : '#fff',
            border: isAI ? '1px solid var(--iq-border)' : 'none',
            borderTopLeftRadius: isAI ? '4px' : '16px',
            borderTopRightRadius: isAI ? '16px' : '4px',
          }}
        >
          <MarkdownText text={msg.content} />
        </div>

        {isAI && (
          <div className="flex items-center gap-1 ml-1">
            <button onClick={copy} className="p-1 rounded hover:opacity-70 transition-opacity" style={{ color: 'var(--iq-text-muted)' }} title="Copy">
              <Copy className="w-3 h-3" />
            </button>
            <button className="p-1 rounded hover:opacity-70 transition-opacity" style={{ color: 'var(--iq-text-muted)' }}>
              <ThumbsUp className="w-3 h-3" />
            </button>
            <button className="p-1 rounded hover:opacity-70 transition-opacity" style={{ color: 'var(--iq-text-muted)' }}>
              <ThumbsDown className="w-3 h-3" />
            </button>
            {copied && <span className="text-xs" style={{ color: 'var(--iq-success)' }}>Copied!</span>}
          </div>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--iq-accent-bg)' }}>
        <Bot className="w-3.5 h-3.5" style={{ color: 'var(--iq-accent)' }} />
      </div>
      <div className="px-4 py-3 rounded-2xl flex items-center gap-1.5" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)', borderTopLeftRadius: 4 }}>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full animate-bounce"
            style={{ background: 'var(--iq-accent)', animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

const initialHello: ChatMessage = {
  id: 'init-1',
  role: 'assistant',
  content: 'Hello! I am your AI Compliance Agent. I am connected to your dataset and understand your current tax liability, ITC balance, and compliance deadlines.\n\nHow can I help you optimize your GST today?',
  timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
};

export default function AIAgent() {
  const { activeDatasetId, businessContext, llmConfig, backendOnline } = useApp();
  
  const [messages, setMessages] = useState<ChatMessage[]>([initialHello]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content: text.trim(),
      timestamp: now,
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (backendOnline) {
        const res = await api.sendAgentMessage(text, activeDatasetId);
        const aiMsg: ChatMessage = {
          id: `msg-${Date.now()}-ai`,
          role: 'assistant',
          content: res.response || "No response received.",
          timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiMsg]);
      } else {
        // Mock fallback if offline
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: `msg-${Date.now()}-ai`, role: 'assistant',
            content: "Backend is currently offline. Showing mock response.",
            timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
          }]);
          setIsTyping(false);
        }, 1000);
        return;
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}-ai`, role: 'assistant',
        content: `Error communicating with AI Agent: ${(err as Error).message}`,
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleDeepScan = async () => {
    const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, {
      id: `msg-${Date.now()}-user`, role: 'user', content: 'Run full 3-step Deep Scan analysis.', timestamp: now
    }]);
    setIsTyping(true);
    
    try {
      const res = await api.runAgentAnalysis(activeDatasetId);
      
      const markdown = `
**Deep Scan Complete**

**1. Analysis**
• Final Remarks: ${res.analysis?.final_remarks || 'N/A'}

**2. Decision**
${res.decision?.tasks ? (res.decision.tasks as any[]).map((t: any) => `• ${t.description} (Priority: ${t.priority})`).join('\n') : 'No specific tasks.'}

**3. Recommended Action**
${res.action?.actions ? (res.action.actions as any[]).map((a: any) => `• [${a.type}] ${a.details}`).join('\n') : 'No actions.'}
      `;
      
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}-ai`, role: 'assistant', content: markdown.trim(), timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()}-ai`, role: 'assistant',
        content: `Deep Scan Failed: ${(err as Error).message}`,
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([{
      ...initialHello,
      timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    }]);
    setSessionCount(s => s + 1);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col p-5 lg:p-7 gap-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--iq-accent-bg)' }}>
            <Bot className="w-5 h-5" style={{ color: 'var(--iq-accent)' }} />
          </div>
          <div>
            <h1 className="font-extrabold tracking-tight" style={{ color: 'var(--iq-text)', fontSize: '20px', margin: 0 }}>AI Compliance Agent</h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${backendOnline ? 'bg-green-400' : 'bg-red-400'}`} />
              <p className="text-xs" style={{ color: 'var(--iq-text-muted)' }}>
                {backendOnline ? 'Online via API' : 'Offline'} · Model: {llmConfig.provider.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDeepScan}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-opacity hover:opacity-90 font-bold"
            style={{ background: 'var(--iq-accent)', color: '#fff' }}
          >
            <FileSearch className="w-3.5 h-3.5" />
            Deep Scan
          </button>
          <button
            onClick={clearChat}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-opacity hover:opacity-70"
            style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text-muted)', border: '1px solid var(--iq-border)' }}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Capabilities bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 shrink-0">
        {[
          { icon: Server, label: 'Live Data Connection' },
          { icon: Sparkles, label: '3-Step Pipeline' },
          { icon: Lightbulb, label: 'Optimized Advice' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
            <Icon className="w-3.5 h-3.5" style={{ color: 'var(--iq-accent)' }} />
            <span className="text-xs whitespace-nowrap" style={{ color: 'var(--iq-text-muted)' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Chat area */}
      <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0">
        {/* Messages */}
        <div className="flex-1 flex flex-col min-h-0 rounded-xl overflow-hidden" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map(msg => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 shrink-0" style={{ borderTop: '1px solid var(--iq-border)', background: 'var(--iq-surface-2)' }}>
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                rows={1}
                placeholder="Ask about your financial data, filings, or compliance state..."
                className="flex-1 resize-none rounded-xl px-4 py-3 text-sm outline-none border-none"
                style={{ background: 'var(--iq-surface)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)', minHeight: 44, maxHeight: 120 }}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all disabled:opacity-40"
                style={{ background: 'var(--iq-accent)', color: '#fff' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: 'var(--iq-text-muted)', opacity: 0.6 }}>
              Press Enter to send · Shift+Enter for newline
            </p>
          </div>
        </div>

        {/* Quick Suggestions panel */}
        <div className="lg:w-64 shrink-0 rounded-xl p-4 flex flex-col gap-3" style={{ background: 'var(--iq-surface)', border: '1px solid var(--iq-border)' }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--iq-text-muted)' }}>Ideas</p>
            <div className="space-y-2">
              {[
                  "What is my net GST payable?",
                  "Are there any ITC mismatches?",
                  "Show me my compliance score.",
                  "Summarize my income transactions."
              ].map(s => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all hover:opacity-80"
                  style={{ background: 'var(--iq-surface-2)', color: 'var(--iq-text)', border: '1px solid var(--iq-border)' }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3" style={{ borderTop: '1px solid var(--iq-border)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--iq-text-muted)' }}>Business Context</p>
            <div className="space-y-1.5">
              {[
                { label: 'Entity', value: businessContext.name },
                { label: 'Type', value: businessContext.type },
                { label: 'Period', value: businessContext.period },
                { label: 'Session', value: `#${sessionCount}` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs items-center gap-2">
                  <span style={{ color: 'var(--iq-text-muted)' }}>{label}</span>
                  <span className="truncate text-right" style={{ color: 'var(--iq-text)', fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
