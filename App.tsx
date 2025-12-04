import React from 'react';
import { Smartphone, Download, Star, ArrowRight, ShieldCheck, Camera, Menu, X, Zap, DollarSign, CheckCircle, Wifi, Signal } from 'lucide-react';
import { HERO_COPY, PAIN_POINTS, FEATURES, TEEN_HUSTLE_COPY, SOCIAL_PROOF, STEPS, FINAL_CTA } from './constants';
import PasswordProtection from './PasswordProtection';

// Separate component to isolate re-renders from the main App
const StatusBarTime = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM (12-hour format)
  const formattedTime = React.useMemo(() => {
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr}`;
  }, [currentTime]);

  return <div className="text-[12px] text-white font-semibold tracking-wide pl-1">{formattedTime}</div>;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-primary selection:text-brand-dark overflow-x-hidden font-sans">

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-primary p-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <div className="relative w-6 h-6 text-white flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M16 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M20 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M8 21H6a2 2 0 0 1-2-2v-2" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-3 h-3 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" x2="12" y1="2" y2="22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">CashCam</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors">Features</a>
                <a href="#how-it-works" className="text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors">How it Works</a>
                <a href="#stories" className="text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors">Stories</a>
                <button className="bg-brand-primary text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/20">
                  Join Waitlist
                </button>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white transition-colors">
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-brand-surface border-b border-slate-700 animate-in slide-in-from-top-2 duration-200">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                <a href="#stories" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Stories</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Abstract Background Shapes - Varied Positions and Opacities - Pulsating */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Blob 1: Top Left (Green) */}
            <div className="absolute top-[0%] left-[10%] w-96 h-96 bg-brand-primary/40 rounded-full mix-blend-screen filter blur-[70px] opacity-60 animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
            {/* Blob 2: Top Right (Purple) */}
            <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-brand-accent/40 rounded-full mix-blend-screen filter blur-[70px] opacity-60 animate-pulse-slow" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
            {/* Blob 3: Bottom Left (Blue/Indigo) */}
            <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-indigo-500/40 rounded-full mix-blend-screen filter blur-[70px] opacity-60 animate-pulse-slow" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
            {/* Blob 4: Bottom Right (Emerald) */}
            <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-emerald-400/30 rounded-full mix-blend-screen filter blur-[70px] opacity-70 animate-pulse-slow" style={{ animationDuration: '14s', animationDelay: '3s' }}></div>
            {/* Blob 5: Center (Violet) */}
            <div className="absolute top-[30%] left-[40%] w-72 h-72 bg-violet-600/30 rounded-full mix-blend-screen filter blur-[70px] opacity-70 animate-pulse-slow" style={{ animationDuration: '16s', animationDelay: '4s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                  Stop Guessing. <br />
                  <span className="gradient-text">Start Flipping.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {HERO_COPY.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto bg-brand-primary text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95">
                    <Download className="w-5 h-5" />
                    {HERO_COPY.cta}
                  </button>
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="text-xs text-slate-500 font-medium mb-1">Available on iOS & Android</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup Visualization */}
              <div className="flex-1 relative w-full max-w-md lg:max-w-full flex justify-center perspective-1000">

                {/* Profit Potential Popup - Top Right */}
                <div className="absolute left-1/2 ml-[170px] top-24 z-30 animate-float hidden lg:block">
                  <div className="bg-slate-900/90 backdrop-blur-xl p-3 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                    <div className="bg-brand-primary/20 p-2 rounded-full">
                      <DollarSign className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PROFIT POTENTIAL</div>
                      <div className="text-sm font-black text-white">+$85.00</div>
                    </div>
                  </div>
                </div>

                {/* Profit Potential Popup - Bottom Left (New) */}
                <div className="absolute right-1/2 mr-[170px] bottom-36 z-30 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
                  <div className="bg-slate-900/90 backdrop-blur-xl p-3 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                    <div className="bg-brand-primary/20 p-2 rounded-full">
                      <DollarSign className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PROFIT POTENTIAL</div>
                      <div className="text-sm font-black text-white">+$124.50</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 bg-brand-dark border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden w-[300px] h-[600px] ring-1 ring-slate-700/50 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-slate-900 flex flex-col">
                    {/* Status Bar */}
                    <div className="h-8 w-full flex justify-between items-center px-6 pt-3 z-20 shrink-0">
                      <StatusBarTime />
                      <div className="flex items-center gap-1.5 opacity-90">
                        <Signal className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                        <Wifi className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                        {/* Half-Full Battery Icon */}
                        <svg width="20" height="11" viewBox="0 0 20 11" fill="none" className="text-white">
                          <rect x="0.5" y="0.5" width="17" height="10" rx="2.5" stroke="currentColor" />
                          <line x1="19.5" y1="3.5" x2="19.5" y2="7.5" stroke="currentColor" strokeLinecap="round" />
                          <rect x="2.5" y="2.5" width="7" height="6" rx="1" fill="currentColor" />
                          <rect x="2.5" y="2.5" width="8.5" height="6" rx="1" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    {/* App Header */}
                    <div className="px-6 py-3 flex justify-between items-center shrink-0">
                      <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center"><ArrowRight className="w-4 h-4 text-white rotate-180" /></div>
                      <div className="w-8 h-8"></div>
                    </div>

                    {/* Main Content Area - Flex Column */}
                    <div className="flex-1 flex flex-col px-6 pb-6 gap-3 min-h-0">

                      {/* Product Image (Tap to Scan) - Flex-1 to fill available space */}
                      <div className="flex-1 bg-slate-800 rounded-2xl relative overflow-hidden group flex flex-col items-center justify-center text-center p-4 min-h-0">
                        <div className="z-10 flex flex-col items-center justify-center h-full">
                          <Camera className="w-10 h-10 text-slate-500 mb-2" />
                          <h3 className="text-white font-bold text-base tracking-tight">Tap to Scan</h3>
                          <p className="text-slate-400 text-xs font-medium">Add photos of your item</p>
                        </div>
                        {/* Scan Overlay */}
                        <div className="absolute inset-0 border-2 border-brand-primary/50 rounded-2xl animate-pulse pointer-events-none"></div>
                      </div>

                      {/* Data Card 1: Estimated Value - Compacted Height */}
                      <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm shrink-0">
                        <div className="flex justify-between items-start mb-2 border-b border-slate-700/50 pb-2">
                          <div>
                            <h3 className="text-slate-500 text-[9px] uppercase tracking-wider font-bold mb-0.5">Estimated Value</h3>
                            <div className="text-xl font-black text-white tracking-tight">$180 - $250</div>
                          </div>
                          <div className="px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold tracking-wide">
                            VERY GOOD
                          </div>
                        </div>
                        <div className="space-y-1.5 opacity-60">
                          <div className="h-2 bg-slate-600 rounded-full w-full"></div>
                          <div className="h-2 bg-slate-600 rounded-full w-[92%]"></div>
                          <div className="h-2 bg-slate-600 rounded-full w-[85%]"></div>
                        </div>
                      </div>

                      {/* Data Card 2: Liquidity Score - Compacted Height */}
                      <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm shrink-0">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h3 className="text-slate-500 text-[9px] uppercase tracking-wider font-bold mb-0.5">Liquidity Score</h3>
                            <div className="text-xl font-black text-brand-primary tracking-tight">75/100</div>
                          </div>
                          {/* Hot Item Badge */}
                          <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[9px] font-bold tracking-wide shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            Hot Item
                          </div>
                        </div>
                        <div className="relative">
                          {/* Progress Bar Track */}
                          <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                            {/* Gradient Fill */}
                            <div className="h-full w-[75%] bg-gradient-to-r from-red-500 via-yellow-400 to-emerald-500 rounded-full"></div>
                          </div>
                          {/* Scale Labels */}
                          <div className="flex justify-between text-[8px] text-slate-500 font-bold mt-1 px-0.5">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-brand-primary text-brand-dark py-4 rounded-xl font-black text-lg shadow-[0_4px_14px_rgba(16,185,129,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0">
                        Analyse Photo <Zap className="w-5 h-5 fill-brand-dark" />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-brand-surface relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">The Seller's Dilemma</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {PAIN_POINTS.map((point) => (
                <div key={point.id} className="bg-brand-dark p-8 rounded-2xl border border-slate-700/50 hover:border-brand-primary/30 transition-all hover:shadow-xl group">
                  <div className="mb-6 p-4 bg-slate-800 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-brand-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                The Operating System for <span className="text-brand-primary">Sellers</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                How CashCam provides everything you need to scale from hobbyist to powerhouse in one app.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex gap-6 p-8 rounded-3xl bg-brand-surface hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-slate-600">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-2">{feature.benefit}</h4>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teen Hustle / Family Mode */}
        <section className="py-24 bg-gradient-to-br from-brand-surface to-brand-dark border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-purple-500/20 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Family Mode
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {TEEN_HUSTLE_COPY.benefit}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {TEEN_HUSTLE_COPY.description}
                </p>
                <ul className="space-y-3">
                  {['Parental Controls', 'Profit Sharing Automation', 'Safe Scanning Mode'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Teens looking at phone"
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-700/50 transform rotate-2 hover:rotate-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="stories" className="py-24 bg-brand-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-3">Trusted by Sellers</h2>
            <div className="text-4xl md:text-5xl font-black text-white mb-16">
              {SOCIAL_PROOF.stat}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed mb-8 relative z-10">
                  "{SOCIAL_PROOF.testimonial.text}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full mb-4 overflow-hidden border-2 border-brand-primary">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Testimonial Author" />
                  </div>
                  <div className="font-bold text-white text-lg">{SOCIAL_PROOF.testimonial.author}</div>
                  <div className="text-brand-primary">{SOCIAL_PROOF.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Steps */}
        <section id="how-it-works" className="py-24 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">From Trash to Treasure in 3 Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-8xl font-black text-slate-800/50 absolute -top-10 -left-6 z-0 select-none group-hover:text-brand-primary/10 transition-colors">
                    {step.step}
                  </div>
                  <div className="relative z-10 pl-6">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{step.action}</h3>
                    <p className="text-slate-400 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-transparent"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              {FINAL_CTA.headline}
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              {FINAL_CTA.subheadline}
            </p>
            <div className="flex flex-col items-center gap-6">
              <button className="bg-brand-primary text-brand-dark px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                {FINAL_CTA.button}
              </button>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> {FINAL_CTA.risk_reversal}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-primary p-1.5 rounded-lg">
                  <div className="relative w-5 h-5 text-white flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M16 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M20 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M8 21H6a2 2 0 0 1-2-2v-2" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" x2="12" y1="2" y2="22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="font-bold text-lg text-white">CashCam</span>
              </div>
              <div className="text-slate-500 text-sm">
                &copy; 2025 CashCam. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PasswordProtection>
  );
};

export default App;