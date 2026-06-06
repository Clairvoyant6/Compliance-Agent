import { useNavigate } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center p-8">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'var(--iq-danger-bg)' }}>
        <AlertCircle className="w-8 h-8" style={{ color: 'var(--iq-danger)' }} />
      </div>
      <h1 className="font-bold" style={{ color: 'var(--iq-text)', fontSize: '24px', margin: 0 }}>Page Not Found</h1>
      <p className="text-sm" style={{ color: 'var(--iq-text-muted)' }}>The page you're looking for doesn't exist in ComplianceIQ.</p>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
        style={{ background: 'var(--iq-accent)', color: '#fff' }}
      >
        <Home className="w-4 h-4" />
        Back to Dashboard
      </button>
    </div>
  );
}
