import { motion } from 'framer-motion';
import { Check, DollarSign, Zap, FileText, Shirt } from 'lucide-react';

export default function FreeVsPaid() {
  return (
    <section id="free-vs-paid" className="relative py-24 md:py-32 bg-ink-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 03 · FREE CHANGES VS. PAID CHANGES</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Text is free. Pixels cost money.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Renaming a character rewrites every scene, line, and stored prompt instantly at zero cost. Only pixel changes cost money — and the app shows the blast radius before you approve it.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Free change */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#0f1411]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <FileText className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
                <span className="font-mono text-xs tracking-wider text-stone-300">RENAME CHARACTER</span>
              </div>
              <span className="flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-emerald-400">
                FREE · $0.00
              </span>
            </div>

            <div className="p-6">
              <div className="mb-5 rounded-lg border border-white/10 bg-[#161a17] p-4">
                <div className="font-mono text-[10px] tracking-wider text-stone-500 mb-2">CHANGE</div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-stone-500 line-through">Asha</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-stone-200 font-medium">Mara</span>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3 font-mono text-[10px] tracking-wider text-stone-500">BLAST RADIUS · RIPPLES THROUGH</div>
                <div className="space-y-2">
                  {[
                    'Scene 01 — 3 dialogue lines rewritten',
                    'Scene 02 — 2 stage directions updated',
                    'Scene 03 — 1 slug line changed',
                    'Scene 04 — 4 stored prompts updated',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-stone-400">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3">
                <span className="font-mono text-[10px] tracking-wider text-emerald-300">APPLIED INSTANTLY</span>
                <span className="font-mono text-xs text-emerald-400">$0.00 · 0 RENDERS</span>
              </div>
            </div>
          </motion.div>

          {/* Paid change */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-[#1a1510]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Shirt className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
                <span className="font-mono text-xs tracking-wider text-stone-300">WARDROBE CHANGE</span>
              </div>
              <span className="flex items-center gap-1.5 rounded border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-amber-400">
                <DollarSign className="h-3 w-3" /> PAID
              </span>
            </div>

            <div className="p-6">
              <div className="mb-5 rounded-lg border border-white/10 bg-[#221913] p-4">
                <div className="font-mono text-[10px] tracking-wider text-stone-500 mb-2">CHANGE</div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-stone-500">Trench coat</span>
                  <span className="text-amber-400">→</span>
                  <span className="text-stone-200 font-medium">Leather jacket</span>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3 font-mono text-[10px] tracking-wider text-stone-500">BLAST RADIUS · STALE FRAMES</div>
                <div className="space-y-2">
                  {[
                    { scene: 'Scene 01 / Shot 02', cost: '$0.12' },
                    { scene: 'Scene 03 / Shot 01', cost: '$0.12' },
                    { scene: 'Scene 04 / Shot 03', cost: '$0.14' },
                  ].map((item) => (
                    <div key={item.scene} className="flex items-center justify-between rounded border border-amber-400/10 bg-amber-400/[0.03] px-3 py-2">
                      <div className="flex items-center gap-2.5 text-xs text-stone-400">
                        <Zap className="h-3.5 w-3.5 text-amber-400" />
                        {item.scene}
                      </div>
                      <span className="font-mono text-xs text-amber-300">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-amber-400/30 bg-amber-400/[0.07] px-4 py-3">
                <span className="font-mono text-[10px] tracking-wider text-amber-300">3 FRAMES STALE · RE-RENDER?</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-400">$0.38</span>
                  <button className="rounded bg-amber-400 px-3 py-1.5 font-mono text-[10px] font-semibold text-ink-950 hover:bg-amber-300">APPROVE</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-500"
        >
          No credits vanish on output you'd never use. You see exactly what goes stale, what it costs to fix, and you approve it before a single pixel re-renders.
        </motion.p>
      </div>
    </section>
  );
}
