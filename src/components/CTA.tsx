import { motion } from 'framer-motion';
import { ArrowRight, Clapperboard } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6786970/pexels-photo-6786970.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Clapperboard className="w-16 h-16 text-amber-400 mx-auto mb-8" strokeWidth={1.5} />

          <h2 className="font-display text-6xl md:text-8xl tracking-tight mb-6">
            Direction,
            <br />
            <span className="text-shimmer">not prompting.</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Your cast stays your cast. Nothing expensive runs until you say so. Bring a story idea — leave with a film.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group px-8 py-4 bg-amber-400 text-ink-950 font-semibold rounded-xl flex items-center gap-2 hover:bg-amber-300 transition-all hover:shadow-xl hover:shadow-amber-400/30"
            >
              Forge a film
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 glass rounded-xl text-white hover:bg-white/10 transition-all"
            >
              See pricing
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs font-mono text-gray-600">
            <span>NO CREDIT CARD</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>TEXT CHANGES FREE</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>CANCEL ANYTIME</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
