import { useState, Key } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, BookOpen, Info, CheckCircle2 } from 'lucide-react';
import { Zikir } from '../data/zikir';

interface Props {
  zikir: Zikir;
  index: number;
  key?: Key;
}

export default function ZikirCard({ zikir, index }: Props) {
  const [hideLatin, setHideLatin] = useState(false);
  const [hideMeaning, setHideMeaning] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-surface rounded-3xl border border-surface-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
    >
      {/* Header */}
      <div className="bg-black/[0.02] dark:bg-white/[0.02] px-8 py-6 border-b border-surface-border flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
            {index + 1}
          </span>
          <h3 className="font-serif text-xl font-medium text-brand-earth">{zikir.judul}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setHideLatin(!hideLatin)}
            className={`p-2 rounded-lg transition-colors ${hideLatin ? 'bg-brand-sage text-white' : 'bg-black/5 dark:bg-white/5 text-muted hover:bg-black/10 dark:hover:bg-white/10'}`}
            title="Hapus Latin (Mode Hafal)"
          >
            {hideLatin ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <button
            onClick={() => setHideMeaning(!hideMeaning)}
            className={`p-2 rounded-lg transition-colors ${hideMeaning ? 'bg-brand-sage text-white' : 'bg-black/5 dark:bg-white/5 text-muted hover:bg-black/10 dark:hover:bg-white/10'}`}
            title="Hapus Arti (Mode Hafal)"
          >
            {hideMeaning ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Word by Word Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10" dir="rtl">
          {zikir.kata.map((word, i) => (
            <motion.div
              key={i}
              className="group flex flex-col items-center gap-3 min-w-[60px]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl md:text-4xl font-serif text-main arabic-text" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {word.arab}
              </span>
              <div className="flex flex-col items-center text-center gap-1" dir="ltr">
                <AnimatePresence mode="wait">
                  {!hideLatin && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-xs uppercase tracking-widest text-brand-gold font-medium"
                    >
                      {word.latin}
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {!hideMeaning && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-sm text-muted leading-tight max-w-[100px]"
                    >
                      {word.arti}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Meaning */}
        <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl p-6 border border-surface-border">
          <div className="flex items-start gap-3">
            <BookOpen size={20} className="text-brand-sage mt-1 shrink-0" />
            <p className="text-main italic leading-relaxed text-lg">
              "{zikir.arti_keseluruhan}"
            </p>
          </div>
        </div>

        {/* Details Toggle */}
        <div className="pt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-brand-earth font-medium hover:text-brand-sage transition-colors"
          >
            <Info size={18} />
            <span>{showDetails ? 'Sembunyikan Tadabbur' : 'Lihat Tadabbur & Dalil'}</span>
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 p-6 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-surface-border space-y-6">
                  <div className="space-y-4 pt-4 border-t border-muted/10">
                    <div className="space-y-2">
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-sage">
                        <CheckCircle2 size={16} />
                        Motivasi Jiwa
                      </h4>
                      <p className="text-main leading-relaxed italic font-medium">
                        "{zikir.motivasi_emosional}"
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted/60">
                      <CheckCircle2 size={16} />
                      Tadabbur
                    </h4>
                    <p className="text-muted leading-relaxed">
                      {zikir.tadabbur}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted/60">
                      <CheckCircle2 size={16} />
                      Dalil
                    </h4>
                    <p className="text-sm text-muted font-serif italic">
                      {zikir.dalil}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
