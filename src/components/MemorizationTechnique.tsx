import { motion } from 'framer-motion';
import { Target, Zap, Waves, Coffee } from 'lucide-react';

const techniques = [
  {
    icon: <Zap size={20} />,
    title: "Satu demi Satu",
    desc: "Jangan buru-buru hafal semua. Fokus 1 zikir sampai benar-benar 'melekat' di hati dan lisan selama minimal 1-2 minggu."
  },
  {
    icon: <Waves size={20} />,
    title: "Gunakan Ritme",
    desc: "Baca zikir dengan perlahan saat ba'da Shubuh. Biarkan setiap kata meresap di batin sebelum bergegas mencari nafkah."
  },
  {
    icon: <Coffee size={20} />,
    title: "Kaitan Lifestyle",
    desc: "Baca saat memanaskan kendaraan atau menyiapkan kopi pagi. Jadikan ia 'pembuka pintu rezeki' yang natural."
  }
];

export default function MemorizationTechnique() {
  return (
    <section className="py-16 space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <Target className="text-brand-gold" size={24} />
        <h3 className="font-serif text-3xl text-brand-earth">Teknik Hafal Pejuang</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techniques.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-surface border border-surface-border rounded-2xl space-y-4 hover:border-brand-gold/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              {tech.icon}
            </div>
            <h4 className="font-bold text-main">{tech.title}</h4>
            <p className="text-sm text-muted leading-relaxed">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
