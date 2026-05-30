import { useState } from 'react';
import { motion } from 'framer-motion';
import { SBTradexLogo, IktajLogo } from './Logos';
import { 
  LayoutDashboard, 
  Activity, 
  Zap, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  LogOut,
  Bell,
  Search,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Timer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const signals = [
    { pair: 'EUR/USD', type: 'BUY', entry: '1.0840', sl: '1.0810', tp: '1.0890', status: 'Active', time: '2h ago', confidence: 85 },
    { pair: 'BTC/USDT', type: 'SELL', entry: '69,200', sl: '70,500', tp: '66,000', status: 'Hit TP1', time: '5h ago', confidence: 92 },
    { pair: 'GOLD', type: 'BUY', entry: '2,320', sl: '2,310', tp: '2,350', status: 'Active', time: '8h ago', confidence: 78 },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <div className="noise-overlay" />
      
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-border flex flex-col items-center lg:items-start transition-all duration-300 z-50 bg-background">
        <div className="p-6 mb-8">
          <div className="hidden lg:block">
            <SBTradexLogo />
          </div>
          <div className="lg:hidden">
            <IktajLogo className="w-8 h-8" />
          </div>
        </div>

        <nav className="flex-grow w-full px-3 space-y-2">
          <NavItem active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem active={activeTab === 'market'} onClick={() => setActiveTab('market')} icon={<Activity size={20} />} label="Market Pulse" />
          <NavItem active={activeTab === 'signals'} onClick={() => setActiveTab('signals')} icon={<Zap size={20} />} label="Signals" />
          <NavItem active={activeTab === 'portfolio'} onClick={() => setActiveTab('portfolio')} icon={<Briefcase size={20} />} label="Portfolio" />
          <NavItem active={activeTab === 'academy'} onClick={() => setActiveTab('academy')} icon={<BookOpen size={20} />} label="Academy" />
          <NavItem active={activeTab === 'inner-circle'} onClick={() => setActiveTab('inner-circle')} icon={<MessageSquare size={20} />} label="Inner Circle" />
        </nav>

        <div className="w-full px-3 pb-8 space-y-2">
          <NavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<Settings size={20} />} label="Settings" />
          <NavItem active={false} onClick={() => navigate('/')} icon={<LogOut size={20} />} label="Logout" danger />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto max-h-screen">
        {/* Header */}
        <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-display font-medium">Dashboard</h1>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-success/10 border border-success/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              <span className="text-[0.6rem] uppercase tracking-widest text-success font-bold">London Session Active</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input 
                placeholder="Search assets..." 
                className="bg-panel border border-border px-10 py-2 text-xs focus:border-primary/50 outline-none w-64 transition-all" 
              />
            </div>
            <button className="relative text-text-muted hover:text-text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold uppercase tracking-widest">Ikbal Malik</div>
                <div className="text-[0.6rem] text-text-muted uppercase tracking-tighter">Architect Level</div>
              </div>
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">
                IM
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-1 italic">Good Evening, Ikbal.</h2>
            <p className="text-text-muted text-sm font-mono uppercase tracking-widest">Architect of Wealth • Monday, May 19, 2025</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Portfolio Value" value="$124,502.80" change="+12.4%" positive />
            <StatCard label="Active Signals" value="3" subValue="2 Pending" />
            <StatCard label="Win Rate" value="78%" subValue="Last 30 Days" />
            <StatCard label="Fear & Greed" value="72/100" subValue="Greed" />
          </div>

          {/* Signals Table */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-bold uppercase tracking-tight flex items-center gap-3">
                <Zap size={20} className="text-primary" />
                Today's Precision Signals
              </h3>
              <div className="flex gap-2">
                {['All', 'Forex', 'Crypto', 'Stocks'].map((t) => (
                  <button key={t} className="px-4 py-1.5 text-[0.6rem] uppercase tracking-widest border border-border hover:border-primary transition-all">
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-panel overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-panel-hover/50 border-b border-border">
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">Asset</th>
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">Direction</th>
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">Entry</th>
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">SL / TP</th>
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">Confidence</th>
                    <th className="px-6 py-4 text-[0.6rem] uppercase tracking-ultra-wide text-text-muted font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {signals.map((s, i) => (
                    <tr key={i} className="hover:bg-panel-hover/30 transition-colors group">
                      <td className="px-6 py-5 font-bold font-display">{s.pair}</td>
                      <td className="px-6 py-5">
                        <span className={`px-2 py-1 text-[0.6rem] font-bold ${s.type === 'BUY' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'} border border-current/20`}>
                          {s.type}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-mono text-xs">{s.entry}</td>
                      <td className="px-6 py-5 font-mono text-[0.65rem] space-y-1">
                        <div className="text-danger">SL: {s.sl}</div>
                        <div className="text-success">TP: {s.tp}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="w-24 h-1 bg-border relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${s.confidence}%` }}
                            className="absolute inset-0 bg-primary"
                          />
                        </div>
                        <span className="text-[0.6rem] text-text-muted mt-1 block">{s.confidence}%</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{s.status}</span>
                          <span className="text-[0.6rem] text-text-muted flex items-center gap-1">
                            <Timer size={10} />
                            {s.time}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Analysis & Market */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-display font-bold uppercase tracking-tight">Market Analysis</h3>
              <div className="glass-panel p-6 group cursor-pointer overflow-hidden relative">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 aspect-video bg-panel-hover border border-border flex items-center justify-center">
                    <TrendingUp className="text-primary/20 w-12 h-12" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold">Forex Deep Dive</span>
                    <h4 className="text-xl font-display font-bold mt-2 mb-3 group-hover:text-primary transition-colors">USD Dominance: The Architecture of a Reversal</h4>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">Analyzing the macro implications of the recent Fed commentary on the DXY structural support levels...</p>
                    <div className="flex items-center gap-4 text-[0.6rem] uppercase tracking-widest text-text-secondary">
                      <span>May 18, 2025</span>
                      <span>12 Min Read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold uppercase tracking-tight">Market Mood</h3>
              <div className="glass-panel p-8 flex flex-col items-center justify-center text-center">
                <div className="w-40 h-40 rounded-full border-b-4 border-success relative flex items-center justify-center mb-6">
                  <div className="text-4xl font-display font-bold text-success">BULLISH</div>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed uppercase tracking-widest">
                  Overall market sentiment is currently positive across tracked assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick, danger = false }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 transition-all duration-300 group
      ${active ? 'bg-primary/10 border-l-2 border-primary text-primary' : 'text-text-muted hover:text-text-primary hover:bg-panel-hover'}
      ${danger ? 'hover:text-danger hover:bg-danger/5' : ''}
    `}
  >
    <span className={`${active ? 'text-primary' : 'text-text-muted group-hover:text-text-primary transition-colors'}`}>
      {icon}
    </span>
    <span className="hidden lg:block text-[0.7rem] uppercase tracking-widest font-bold">
      {label}
    </span>
  </button>
);

const StatCard = ({ label, value, change, subValue, positive }: any) => (
  <div className="glass-panel p-6">
    <div className="text-[0.6rem] uppercase tracking-ultra-wide text-text-muted mb-3 font-bold">{label}</div>
    <div className="flex items-baseline gap-3">
      <div className="text-2xl font-display font-bold">{value}</div>
      {change && (
        <div className={`flex items-center text-xs font-mono ${positive ? 'text-success' : 'text-danger'}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      )}
    </div>
    {subValue && <div className="text-[0.6rem] text-text-muted uppercase tracking-widest mt-2 font-mono">{subValue}</div>}
  </div>
);
