import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full border border-brand-earth/20 flex items-center justify-center text-brand-earth">
            <Quote size={20} />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-light text-brand-earth leading-tight">
          Menata Niat, <br />
          <span className="italic">Merengkuh Kerendahan Hati</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted leading-relaxed text-left md:text-center">
          <p>
            Zikir pagi bukan sekadar rutinitas lisan, melainkan momentum krusial untuk menata niat dan mindset sebelum melangkah menghadapi dunia. Ia adalah pengingat harian bahwa sejatinya kita sangat butuh kepada Allah (Al-Faqir), dan tanpa pertolongan-Nya, kita bukanlah apa-apa.
          </p>
          <p>
            Dengan berzikir, kita memohon agar dijauhkan dari benih-benih kesombongan dan sifat takabur yang seringkali menyelinap saat kita merasa mampu melakukan segalanya sendiri. Kita mengakui bahwa setiap detik napas dan keberhasilan hanyalah titipan dari-Nya.
          </p>
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border-l-4 border-brand-gold italic text-brand-earth/80 space-y-2">
            <p>
              "Maka bersabarlah kamu, karena sesungguhnya janji Allah itu benar, dan mohonlah ampunan untuk dosamu dan bertasbihlah seraya memuji Tuhanmu pada waktu petang dan pagi." (QS. Ghafir: 55)
            </p>
            <p className="text-sm not-italic">
              Para Nabi terdahulu—termasuk Nabi Daud AS dan Nabi Muhammad SAW—senantiasa menjadikan zikir pagi dan petang sebagai pilar kekuatan batin mereka. Ini adalah Sunnah para rasul dalam menjaga koneksi dengan langit di tengah kesibukan memimpin bumi.
            </p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8 text-brand-sage flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Mulai Tadabbur</span>
          <div className="w-px h-12 bg-brand-sage/30"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
