import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, TrendingUp, Award, PlusCircle } from 'lucide-react';

export default function ConsistencyTracker() {
  const [streak, setStreak] = useState<number[]>([]);
  const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);

  useEffect(() => {
    const savedStreak = localStorage.getItem('zikir-streak');
    const savedLastDate = localStorage.getItem('zikir-last-date');
    if (savedStreak) setStreak(JSON.parse(savedStreak));
    if (savedLastDate) setLastCheckIn(savedLastDate);
  }, []);

  const handleCheckIn = () => {
    const today = new Date().toISOString().split('T')[0];
    if (lastCheckIn === today) return;

    const newStreak = [...streak, 1].slice(-7); // Track last 7 entries
    setStreak(newStreak);
    setLastCheckIn(today);
    localStorage.setItem('zikir-streak', JSON.stringify(newStreak));
    localStorage.setItem('zikir-last-date', today);
  };

  const isComplete = streak.length >= 7;

  return (
    <section className="bg-surface rounded-3xl border border-surface-border p-8 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <TrendingUp size={120} />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="text-brand-gold" size={24} />
          <h3 className="font-serif text-2xl text-brand-earth uppercase tracking-tight">Tracker Istiqomah</h3>
        </div>

        <p className="text-muted text-sm leading-relaxed max-w-lg">
          Pejuang ilmu dan rupiah butuh nafas panjang. Jangan terbebani banyak sekaligus. Fokus selesaikan satu-satu setiap pagi. Jika konsisten 7 hari, tambahkan zikir berikutnya.
        </p>

        <div className="flex gap-2 py-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${
                i < streak.length
                  ? 'bg-brand-sage border-brand-sage text-white'
                  : 'bg-black/5 dark:bg-white/5 border-transparent text-muted/30'
              }`}
            >
              <CheckCircle2 size={20} className={i < streak.length ? 'scale-110' : 'scale-90'} />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <button
            onClick={handleCheckIn}
            disabled={lastCheckIn === new Date().toISOString().split('T')[0]}
            className={`w-full md:w-auto px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
              lastCheckIn === new Date().toISOString().split('T')[0]
                ? 'bg-muted/10 text-muted cursor-not-allowed'
                : 'bg-brand-gold text-white hover:bg-brand-gold/90 active:scale-95'
            }`}
          >
            {lastCheckIn === new Date().toISOString().split('T')[0] ? 'Zikir Hari Ini Selesai' : 'Lapor Selesai Hari Ini'}
          </button>

          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-brand-sage bg-brand-sage/10 px-6 py-3 rounded-full border border-brand-sage/20"
              >
                <Award size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Hafalan Mantap! Tambahkan 1 Zikir Baru?</span>
                <PlusCircle size={18} className="cursor-pointer hover:rotate-90 transition-transform" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
