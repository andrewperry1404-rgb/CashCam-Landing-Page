import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('cashcam_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'C4SHC4M') {
      setIsAuthenticated(true);
      localStorage.setItem('cashcam_auth', 'true');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 font-sans text-slate-100">
      <div className="max-w-md w-full bg-brand-surface p-8 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-brand-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Restricted Access</h1>
          <p className="text-slate-400">Please enter the access code to view the CashCam landing page.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Code"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center font-medium animate-pulse">
              Incorrect access code. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
          >
            Enter Site <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;
