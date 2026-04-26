import { useState } from 'react';
import { motion } from 'motion/react';
import Introduction from './components/Introduction';
import ZikirCard from './components/ZikirCard';
import ConsistencyTracker from './components/ConsistencyTracker';
import MemorizationTechnique from './components/MemorizationTechnique';
import Footer from './components/Footer';
import { zikirData } from './data/zikir';
import { Sparkles, Moon, Sun } from 'lucide-react';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState<'pagi' | 'petang'>('pagi');
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white">
        {/* Navigation / Time Switch */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2 text-brand-earth">
              <Sparkles size={20} className="text-brand-gold" />
              <span className="font-serif font-bold tracking-tight">Tadabbur Zikir</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-brand-earth transition-colors"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-full border border-surface-border">
                <button
                  onClick={() => setTimeOfDay('pagi')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${timeOfDay === 'pagi' ? 'bg-white dark:bg-slate-800 text-brand-earth shadow-sm' : 'text-muted hover:text-brand-earth'}`}
                >
                  <Sun size={14} />
                  PAGI
                </button>
                <button
                  onClick={() => setTimeOfDay('petang')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${timeOfDay === 'petang' ? 'bg-white dark:bg-slate-800 text-brand-earth shadow-sm' : 'text-muted hover:text-brand-earth'}`}
                >
                  <Moon size={14} />
                  PETANG
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Introduction />

          <div className="max-w-5xl mx-auto px-6 pb-24 space-y-12">
            <ConsistencyTracker />
            <MemorizationTechnique />
            
            <div className="text-center space-y-2 mb-16 pt-16 border-t border-surface-border">
              <h2 className="text-3xl font-serif text-brand-earth">Himpunan Zikir</h2>
            <p className="text-muted max-w-lg mx-auto">
              Setiap lafaz adalah bentuk ketundukan. Setiap makna adalah pengakuan akan kebesaran-Nya.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {zikirData.map((zikir, index) => (
              <ZikirCard key={index} zikir={zikir} index={index} />
            ))}
          </div>

          <Footer />
        </div>
      </main>
    </div>
    </div>
  );
}
