import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const dalils = [
  {
    surah: "Ar-Ra'd: 28",
    content: "(Yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah-lah hati menjadi tenteram.",
    context: "Janji Allah bagi hamba-Nya yang istiqomah berzikir: ketenangan yang tak bisa dibeli dengan rupiah."
  },
  {
    surah: "Ali 'Imran: 41",
    content: "...Dan sebutlah (nama) Tuhanmu sebanyak-banyaknya serta bertasbihlah memuji-Nya pada waktu petang dan pagi hari.",
    context: "Perintah Allah kepada Nabi Zakaria AS sebagai wujud syukur dan penghambaan di setiap pergantian waktu."
  },
  {
    surah: "Al-Ahzab: 41-42",
    content: "Wahai orang-orang yang beriman! Berzikirlah (dengan menyebut nama) Allah, zikir yang sebanyak-banyaknya. Dan bertasbihlah kepada-Nya pada waktu pagi dan petang.",
    context: "Seruan kasih sayang Allah agar hamba-Nya senantiasa terhubung dengan Sumber Kekuatan."
  }
];

export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dalils.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dalils.length) % dalils.length);
  };

  return (
    <footer className="mt-24 pt-16 pb-12 border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Dalil Carousel Section */}
        <div className="relative bg-black/[0.02] dark:bg-white/[0.02] rounded-3xl border border-surface-border p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Quote size={120} />
          </div>

          <div className="relative z-10 min-h-[180px] flex flex-col justify-center items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-3xl"
              >
                <div className="flex items-center justify-center gap-2 text-brand-gold">
                  <Quote size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest leading-none">{dalils[currentIndex].surah}</span>
                </div>
                
                <p className="text-main font-serif italic text-xl md:text-2xl leading-relaxed">
                  "{dalils[currentIndex].content}"
                </p>
                
                <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto">
                  {dalils[currentIndex].context}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-muted hover:text-brand-gold transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {dalils.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-brand-gold w-6' : 'bg-muted/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-muted hover:text-brand-gold transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center space-y-6 pt-16 border-t border-surface-border/50">
          <div className="flex justify-center">
            <Heart className="text-brand-gold fill-brand-gold/10" size={32} />
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-serif text-brand-earth">Zikir: Nafasnya Jiwa Pejuang</h3>
            <p className="text-muted leading-relaxed italic">
              "Jika engkau merasa lelah mengejar dunia, berhentilah sejenak. Kembalilah kepada Pemiliknya. Zikir pagi dan petang adalah caramu memberitahu dirimu sendiri bahwa engkau sedang menggenggam tangan Ar-Rahman dalam setiap langkah mencari nafkah dan ilmu."
            </p>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] uppercase tracking-widest font-bold text-muted/50 border-t border-surface-border/30">
          <span>© 2026 Tadabbur Zikir • Berkah Umurnya, Terjaga Hatinya</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1 hover:text-brand-gold cursor-pointer transition-colors">
              <BookOpen size={10} />
              Sumber Shahih
            </span>
            <span>Istiqomah adalah Kunci</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
