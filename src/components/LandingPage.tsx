import { motion } from 'framer-motion';
import { IktajLogo, SBTradexLogo } from './Logos';
import { ParticleBackground } from './Effects';
import { ChevronDown, BarChart3, ShieldCheck, Landmark, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <ParticleBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <IktajLogo className="w-24 h-24 mb-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <SBTradexLogo className="mb-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl font-display tracking-ultra-wide uppercase text-text-secondary mb-12"
        >
          Where Capital Meets Conviction
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="/login" className="btn-primary">
            Enter The Platform
            <div className="btn-primary-bg" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <span className="text-[0.6rem] tracking-widest text-text-muted mb-2 uppercase">Architect of Wealth</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-primary w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Market Ticker */}
      <div className="bg-panel border-y border-border py-3 overflow-hidden">
        <div className="ticker-container">
          <motion.div 
            className="flex whitespace-nowrap gap-12 px-6"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                <TickerItem symbol="EUR/USD" price="1.0842" change="+0.12%" positive />
                <TickerItem symbol="BTC/USDT" price="68,432.1" change="+2.45%" positive />
                <TickerItem symbol="NIFTY 50" price="22,453.8" change="-0.42%" positive={false} />
                <TickerItem symbol="GOLD" price="2,341.2" change="+1.05%" positive />
                <TickerItem symbol="TSLA" price="175.22" change="-2.11%" positive={false} />
                <TickerItem symbol="GBP/JPY" price="191.45" change="+0.08%" positive />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">Not a Signal. A System.</h2>
          <div className="h-px w-24 bg-primary mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BarChart3 className="text-primary" />}
            title="Market Intelligence"
            description="Institutional grade analysis across Stocks, Forex, and Crypto markets. Engineering edge where others see chaos."
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-primary" />}
            title="Precision Signals"
            description="High-conviction setups with surgical entry points, multi-stage take profits, and disciplined risk management."
          />
          <FeatureCard 
            icon={<Landmark className="text-primary" />}
            title="Wealth Architecture"
            description="Professional portfolio mentorship led by Ikbal Malik. Scaling capital through structural conviction."
          />
        </div>
      </section>

      {/* The Architect */}
      <section className="py-32 bg-surface border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="relative">
             <div className="aspect-[4/5] bg-panel border border-primary/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-text-muted opacity-20 text-8xl font-display font-bold select-none">
                  IKTAJ
                </div>
                {/* Visual placeholder for portrait */}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-700" />
             </div>
             <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r border-b border-primary/30" />
             <div className="absolute -top-8 -left-8 w-48 h-48 border-l border-t border-primary/30" />
          </div>
          <div>
            <h3 className="text-[0.7rem] tracking-ultra-wide text-primary uppercase mb-4">The Architect</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ikbal Malik</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-12 font-light">
              Ikbal Malik founded IKTAJ GROUP with a singular belief: that wealth is not found — it is engineered. 
              With over a decade navigating global markets, SB TRADEX is the culmination of that philosophy.
              Every signal is a blueprint, every trade a foundation.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
              <StatItem label="Years Exp" value="12+" />
              <StatItem label="Traders" value="5000+" />
              <StatItem label="Markets" value="4" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tight">Choose Your Tier</h2>
          <p className="text-text-muted font-mono text-sm tracking-widest">SELECT YOUR LEVEL OF ASCENT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <PricingCard 
            tier="Observer"
            price="$0"
            features={["Weekly Market Insights", "Community Access", "Basic Updates"]}
            cta="Begin"
          />
          <PricingCard 
            tier="Strategist"
            price="$99"
            highlighted
            features={["Daily Premium Signals", "Live Trading Sessions", "Technical Analysis Feed", "Priority Support"]}
            cta="Elevate"
          />
          <PricingCard 
            tier="Architect"
            price="$499"
            features={["1-on-1 Mentorship", "Private Portfolio Review", "Exclusive Inner Circle", "Custom Algo Access"]}
            cta="Ascend"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <IktajLogo className="w-16 h-16 mb-6 opacity-50" />
          <SBTradexLogo className="mb-12 opacity-80" />
          
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-xs tracking-widest uppercase text-text-muted font-display">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Plans</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>

          <div className="text-center text-[0.6rem] text-text-muted/60 max-w-2xl leading-relaxed">
            <p className="mb-4">© 2025 IKTAJ GROUP. ARCHITECT OF WEALTH. ALL RIGHTS RESERVED.</p>
            <p>MARKETS INVOLVE RISK. PAST PERFORMANCE DOES NOT GUARANTEE FUTURE RESULTS. TRADING IS SPECULATIVE AND CARRIES A HIGH LEVEL OF RISK TO YOUR CAPITAL.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const TickerItem = ({ symbol, price, change, positive }: any) => (
  <div className="flex items-center gap-3 font-mono text-xs">
    <span className="text-text-secondary">{symbol}</span>
    <span className="text-text-primary">{price}</span>
    <span className={positive ? 'text-success' : 'text-danger'}>{change}</span>
  </div>
);

const FeatureCard = ({ icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-panel p-10 flex flex-col items-start gap-6 group"
  >
    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold uppercase tracking-tight">{title}</h3>
    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const StatItem = ({ label, value }: any) => (
  <div>
    <div className="text-2xl font-display font-bold text-primary mb-1">{value}</div>
    <div className="text-[0.6rem] uppercase tracking-widest text-text-muted">{label}</div>
  </div>
);

const PricingCard = ({ tier, price, features, cta, highlighted = false }: any) => (
  <div className={`relative flex flex-col p-10 border ${highlighted ? 'border-primary bg-panel-hover' : 'border-border bg-panel'} transition-all duration-500`}>
    {highlighted && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[0.6rem] font-bold px-4 py-1 uppercase tracking-[0.2em]">
        Recommended
      </div>
    )}
    <h4 className="text-[0.7rem] uppercase tracking-ultra-wide text-text-muted mb-2">{tier}</h4>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-display font-bold">{price}</span>
      <span className="text-xs text-text-muted">/ month</span>
    </div>
    <ul className="flex-grow space-y-4 mb-10">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
          <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 font-display font-bold text-[0.7rem] uppercase tracking-widest transition-all ${highlighted ? 'bg-primary text-black hover:bg-white' : 'border border-border hover:border-primary hover:text-primary'}`}>
      {cta}
    </button>
  </div>
);
