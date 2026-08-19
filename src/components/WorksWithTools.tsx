import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, FileOutput, FileInput, AlertCircle, Check, X } from 'lucide-react';

export default function WorksWithTools() {
  return (
    <section id="tools" className="relative py-24 md:py-32 bg-ink-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 05 · WORKS WITH YOUR TOOLS</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Send a brief. Take it back.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Any shot can leave as a labelled brief for Midjourney, Kling, or ChatGPT — and the result can come back in as a real version. It's still judged against the same sheets.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Brief out */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-[#1a1510] p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <FileOutput className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              <span className="font-mono text-xs tracking-wider text-stone-300">BRIEF OUT</span>
            </div>
            <div className="space-y-3 rounded-lg border border-white/10 bg-[#221913] p-4 font-mono text-[11px] leading-relaxed text-stone-400">
              <div><span className="text-stone-600">SHOT:</span> Scene 03 / Shot 02</div>
              <div><span className="text-stone-600">SUBJECT:</span> Mara, medium shot, eye-level</div>
              <div><span className="text-stone-600">SHEET REF:</span> asha_sheet_v3.locked</div>
              <div><span className="text-stone-600">PLATE REF:</span> marsh_plate_v1.locked</div>
              <div><span className="text-stone-600">LIGHTING:</span> Dusk, key 45° left, warm</div>
              <div><span className="text-stone-600">CAMERA:</span> 50mm, shallow DOF</div>
              <div><span className="text-stone-600">PROMPT:</span> A woman in a leather jacket stands at the edge of a marsh at dusk, medium shot, warm side lighting, shallow depth of field</div>
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-wider text-amber-400">
              <ArrowRight className="h-3.5 w-3.5" />
              SEND TO MIDJOURNEY · KLING · CHATGPT
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-2 text-stone-600"
          >
            <ArrowRight className="hidden h-8 w-8 text-amber-400/40 lg:block" />
            <ArrowLeft className="hidden h-8 w-8 text-amber-400/40 lg:block" />
            <span className="font-mono text-[9px] tracking-wider text-stone-600 lg:hidden">ROUND TRIP</span>
          </motion.div>

          {/* Take back in */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161310] p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <FileInput className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              <span className="font-mono text-xs tracking-wider text-stone-300">TAKE BACK IN</span>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-white/10 bg-[#1c1815] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider text-stone-500">IMPORTED · VERSION 2</span>
                  <span className="flex items-center gap-1.5 rounded border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 font-mono text-[9px] text-amber-400">
                    <AlertCircle className="h-2.5 w-2.5" /> IMPORTED
                  </span>
                </div>
                <img src="https://images.pexels.com/photos/15484274/pexels-photo-15484274.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Imported version" className="aspect-video w-full rounded-lg object-cover" />
              </div>

              <div className="rounded-lg border border-white/10 bg-[#1c1815] p-4">
                <div className="mb-3 font-mono text-[10px] tracking-wider text-stone-500">REVIEWER VERDICT · SAME SHEETS</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Face geometry vs sheet</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400"><Check className="h-3 w-3" /> PASS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Wardrobe match</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400"><Check className="h-3 w-3" /> PASS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400">Lighting direction</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-red-400"><X className="h-3 w-3" /> FAIL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-3xl rounded-xl border border-amber-400/15 bg-amber-400/[0.03] p-5 text-center"
        >
          <p className="text-sm leading-relaxed text-stone-400">
            <span className="font-semibold text-amber-300">Imported assets are marked as imported and never claim verification.</span> The reviewer still checks them against the same sheets — but the provenance tag stays on the frame so you always know what came from outside.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
