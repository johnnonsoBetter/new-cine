import { motion } from 'framer-motion';
import { Lock, Link2, Check, X } from 'lucide-react';

const frames = [
  { scene: 'SCENE 01', shot: 'Medium · Day', img: 'https://images.pexels.com/photos/18393751/pexels-photo-18393751.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { scene: 'SCENE 02', shot: 'Close-up · Night', img: 'https://images.pexels.com/photos/27398013/pexels-photo-27398013.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { scene: 'SCENE 03', shot: 'Wide · Dusk', img: 'https://images.pexels.com/photos/15484274/pexels-photo-15484274.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { scene: 'SCENE 04', shot: 'Over-shoulder · Day', img: 'https://images.pexels.com/photos/8671511/pexels-photo-8671511.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function ConsistencyProof() {
  return (
    <section id="consistency" className="relative py-24 md:py-32 bg-ink-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 01 · LOCKED REFERENCE SHEETS</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Faces don't drift between shots.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Before any shot is rendered, CineForge generates a reference sheet for every character and a plate for every location, then locks them. Every later frame is generated from those images and checked against them.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* Reference sheets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-xl border border-amber-400/30 bg-[#1a1510]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                <span className="font-mono text-[10px] tracking-wider text-amber-300">CHARACTER SHEET · ASHA</span>
                <span className="flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                  <Lock className="h-2.5 w-2.5" /> LOCKED
                </span>
              </div>
              <img src="https://images.pexels.com/photos/18393751/pexels-photo-18393751.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Character sheet" className="aspect-[4/5] w-full object-cover" />
              <div className="grid grid-cols-3 gap-px bg-white/5">
                {['Front', 'Profile', 'Wardrobe'].map((label) => (
                  <div key={label} className="bg-[#1a1510] px-2 py-1.5 text-center font-mono text-[8px] tracking-wider text-stone-500">{label}</div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-amber-400/30 bg-[#1a1510]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                <span className="font-mono text-[10px] tracking-wider text-amber-300">LOCATION PLATE · THE MARSH</span>
                <span className="flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                  <Lock className="h-2.5 w-2.5" /> LOCKED
                </span>
              </div>
              <img src="https://images.pexels.com/photos/10045269/pexels-photo-10045269.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Location plate" className="aspect-[4/5] w-full object-cover" />
              <div className="grid grid-cols-3 gap-px bg-white/5">
                {['Lighting', 'Time', 'Weather'].map((label) => (
                  <div key={label} className="bg-[#1a1510] px-2 py-1.5 text-center font-mono text-[8px] tracking-wider text-stone-500">{label}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Frames wired to sheets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-wider text-stone-500">
              <Link2 className="h-3.5 w-3.5 text-amber-400" />
              4 FRAMES · GENERATED FROM LOCKED SHEETS · CHECKED AGAINST THEM
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {frames.map((f, i) => (
                <motion.div
                  key={f.scene}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#1a1510]"
                >
                  <img src={f.img} alt={f.scene} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="font-mono text-[8px] tracking-wider text-amber-300">{f.scene}</div>
                    <div className="font-mono text-[8px] text-stone-500">{f.shot}</div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded border border-emerald-400/30 bg-[#1a1510]/90 px-1.5 py-0.5 font-mono text-[8px] text-emerald-400 backdrop-blur">
                    <Check className="h-2.5 w-2.5" /> PASS
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-[#1a1510] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10">
                  <Lock className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-200">The mechanism</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
                    Each frame is generated from the locked sheet, not from a fresh prompt. A vision model then compares the render to the sheet — face geometry, wardrobe, lighting direction. If it fails, it re-renders. The sheet never changes unless you unlock it.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
