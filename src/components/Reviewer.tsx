import { motion } from 'framer-motion';
import { Check, X, RefreshCw, Eye, AlertTriangle } from 'lucide-react';

const criteria = [
  { label: 'Face geometry', verdict: 'PASS', detail: 'Jaw, brow, and eye spacing within 2.1% of sheet' },
  { label: 'Wardrobe match', verdict: 'PASS', detail: 'Coat, collar, and fabric texture confirmed' },
  { label: 'Lighting direction', verdict: 'PASS', detail: 'Key light at 45° left, matches plate' },
  { label: 'Location continuity', verdict: 'FAIL', detail: 'Background vegetation differs from plate — re-rendered' },
];

export default function Reviewer() {
  return (
    <section id="reviewer" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 02 · THE AUTOMATED REVIEWER</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            A vision model checks every render.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            The reviewer compares every render to the sheets it was supposed to match, returns a per-criterion verdict, and re-renders hard failures on a fixed budget. You see the critic working — not just the result.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#161310] shadow-2xl shadow-black/40"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#110e0a] px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <Eye className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              <span className="font-mono text-xs tracking-wider text-stone-300">QC REVIEW · SCENE 03 / SHOT 02</span>
            </div>
            <div className="flex items-center gap-2 rounded border border-red-400/30 bg-red-400/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-red-400">
              <AlertTriangle className="h-3 w-3" /> 1 HARD FAIL
            </div>
          </div>

          {/* Head / tail frames */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            <div className="bg-[#161310] p-4">
              <div className="mb-2 font-mono text-[9px] tracking-wider text-stone-500">HEAD FRAME · 00:00:00</div>
              <img src="https://images.pexels.com/photos/15484274/pexels-photo-15484274.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Head frame" className="aspect-video w-full rounded-lg object-cover" />
            </div>
            <div className="bg-[#161310] p-4">
              <div className="mb-2 font-mono text-[9px] tracking-wider text-stone-500">TAIL FRAME · 00:00:04</div>
              <img src="https://images.pexels.com/photos/8671511/pexels-photo-8671511.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Tail frame" className="aspect-video w-full rounded-lg object-cover" />
            </div>
          </div>

          {/* Verdict table */}
          <div className="border-t border-white/10">
            <div className="grid grid-cols-[1fr_auto_1.5fr] gap-4 border-b border-white/5 px-5 py-2.5 font-mono text-[9px] tracking-wider text-stone-600">
              <span>CRITERION</span><span>VERDICT</span><span>FINDING</span>
            </div>
            {criteria.map((c) => (
              <div key={c.label} className="grid grid-cols-[1fr_auto_1.5fr] items-center gap-4 border-b border-white/5 px-5 py-3.5">
                <span className="text-sm text-stone-300">{c.label}</span>
                <span className={`flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[10px] tracking-wider ${
                  c.verdict === 'PASS'
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400'
                    : 'border-red-400/30 bg-red-400/10 text-red-400'
                }`}>
                  {c.verdict === 'PASS' ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  {c.verdict}
                </span>
                <span className="text-xs leading-relaxed text-stone-500">{c.detail}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/10 bg-[#110e0a] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-stone-400">
              <RefreshCw className="h-3.5 w-3.5 text-amber-400" />
              RE-RENDERED 1 OF 2 BUDGET
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider text-stone-500">
              <span className="rounded border border-white/10 px-2 py-1">SHEET: ASHA</span>
              <span className="rounded border border-white/10 px-2 py-1">PLATE: THE MARSH</span>
              <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-emerald-400">REVIEW COMPLETE</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-500"
        >
          The reviewer runs on a fixed re-render budget — it won't loop forever on a bad frame. If it can't fix it within budget, it flags the shot for your decision instead of burning credits silently.
        </motion.p>
      </div>
    </section>
  );
}
