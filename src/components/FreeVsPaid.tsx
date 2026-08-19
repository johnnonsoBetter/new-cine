import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, DollarSign, Zap, FileText, Shirt, ArrowRight } from 'lucide-react';

type Mode = 'rename' | 'wardrobe';

const renameItems = [
  'Scene 01 — 3 dialogue lines rewritten',
  'Scene 02 — 2 stage directions updated',
  'Scene 03 — 1 slug line changed',
  'Scene 04 — 4 stored prompts updated',
];

const wardrobeItems = [
  { scene: 'Scene 01 / Shot 02', cost: '$0.12' },
  { scene: 'Scene 03 / Shot 01', cost: '$0.12' },
  { scene: 'Scene 04 / Shot 03', cost: '$0.14' },
];

export default function FreeVsPaid() {
  const [mode, setMode] = useState<Mode>('rename');

  return (
    <section id="free-vs-paid" className="relative py-24 md:py-32 bg-ink-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-display text-6xl text-stone-800 leading-none">03</span>
            <span className="font-mono text-xs tracking-widest text-amber-400">COST</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl text-[#f6efe4]">
            Know the bill before you spend it.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Rename a character and every scene, every spoken line and every stored prompt updates instantly, for nothing. Change what someone wears and only the frames they actually appear in go stale. Ask for anything bigger and CineForge shows you the blast radius first — what gets rewritten free, and what has to be paid for again.
          </p>
        </motion.div>

        {/* Interactive toggle */}
        <div className="mx-auto mb-8 flex max-w-md items-center gap-1 rounded-xl border border-white/10 bg-[#110e0a] p-1.5">
          <button
            onClick={() => setMode('rename')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 font-mono text-[11px] tracking-wider transition-all ${
              mode === 'rename'
                ? 'bg-emerald-400/15 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)]'
                : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> RENAME
          </button>
          <button
            onClick={() => setMode('wardrobe')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 font-mono text-[11px] tracking-wider transition-all ${
              mode === 'wardrobe'
                ? 'bg-amber-400/15 text-amber-400 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]'
                : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            <Shirt className="h-3.5 w-3.5" /> WARDROBE
          </button>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {mode === 'rename' ? (
              <motion.div
                key="rename"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35 }}
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
                      <ArrowRight className="h-4 w-4 text-emerald-400" />
                      <span className="text-stone-200 font-medium">Mara</span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="mb-3 font-mono text-[10px] tracking-wider text-stone-500">BLAST RADIUS · RIPPLES THROUGH</div>
                    <div className="space-y-2">
                      {renameItems.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-2.5 text-xs text-stone-400"
                        >
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3">
                    <span className="font-mono text-[10px] tracking-wider text-emerald-300">APPLIED INSTANTLY</span>
                    <span className="font-mono text-xs text-emerald-400">$0.00 · 0 RENDERS</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="wardrobe"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35 }}
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
                      <ArrowRight className="h-4 w-4 text-amber-400" />
                      <span className="text-stone-200 font-medium">Leather jacket</span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="mb-3 font-mono text-[10px] tracking-wider text-stone-500">BLAST RADIUS · STALE FRAMES</div>
                    <div className="space-y-2">
                      {wardrobeItems.map((item, i) => (
                        <motion.div
                          key={item.scene}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center justify-between rounded border border-amber-400/10 bg-amber-400/[0.03] px-3 py-2"
                        >
                          <div className="flex items-center gap-2.5 text-xs text-stone-400">
                            <Zap className="h-3.5 w-3.5 text-amber-400" />
                            {item.scene}
                          </div>
                          <span className="font-mono text-xs text-amber-300">{item.cost}</span>
                        </motion.div>
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
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
