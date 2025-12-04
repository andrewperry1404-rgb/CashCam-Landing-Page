import React, { useState } from 'react';
import { X, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const formData = new FormData();
            formData.append('form-name', 'waitlist');
            formData.append('email', email);

            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-brand-surface border border-slate-700 rounded-3xl p-8 shadow-2xl transform transition-all scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8 animate-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                        <p className="text-slate-400 mb-6">
                            Thanks for joining. We'll notify you as soon as early access opens up.
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-brand-surface border border-slate-600 text-white px-6 py-2 rounded-xl hover:bg-slate-800 transition-colors font-medium"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                            <p className="text-slate-400">
                                Be the first to know when CashCam launches. Early users get exclusive benefits.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                            name="waitlist"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="waitlist" />
                            <div hidden>
                                <input name="bot-field" />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                                />
                            </div>

                            {status === 'error' && (
                                <div className="text-red-400 text-sm text-center">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    <>
                                        Join Waitlist <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
