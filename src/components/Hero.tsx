import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, CircleDot, Clapperboard, Lock } from 'lucide-react';

const pipeline = ['Write', 'Sheets', 'Frames', 'Motion'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(180,111,34,0.16),transparent_34%),radial-gradient(circle_at_12%_80%,rgba(20,184,166,0.07),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              AI FILM STUDIO · NOT A PROMPT BOX
            </div>

            <h1 className="max-w-xl font-display text-5xl leading-[0.92] tracking-tight text-[#f6efe4] md:text-7xl">
              Direction,
              <br />
              not prompting.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-stone-400 md:text-lg">
              Your cast stays your cast. Nothing expensive runs until you say so.
              CineForge writes the screenplay, locks reference sheets, generates a still for every shot, animates each into a clip, and cuts them into one downloadable MP4.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20">
                Forge a film <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#consistency" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-stone-200 transition-colors hover:bg-white/[0.08]">
                See the proof <ChevronRight className="h-4 w-4 text-amber-400" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] tracking-wide text-stone-500">
              {['LOCKED REFERENCE SHEETS', 'AUTOMATED REVIEWER', 'HUMAN GATES'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Lock className="h-3 w-3 text-amber-400" />{item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-5 rounded-[28px] bg-amber-400/[0.08] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-[#17130e] shadow-2xl shadow-black/60">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#110e0a] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Clapperboard className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
                  <span className="font-display text-lg tracking-wider text-stone-200">CINE<span className="text-amber-400">FORGE</span></span>
                  <span className="hidden border-l border-white/10 pl-3 font-mono text-[9px] tracking-widest text-stone-500 sm:block">THE MURMURATION</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] text-stone-500">
                  <span className="hidden rounded border border-amber-400/30 px-2 py-1 text-amber-300 sm:block">QC · 2 TO REVIEW</span>
                  <span className="rounded border border-white/10 px-2 py-1">PRIVATE</span>
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-[#211a13]">
                <img src="/images/image.png" alt="CineForge Studio film graph workspace" className="h-full w-full object-cover object-left-top" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#110e0a]/40 via-transparent to-amber-300/[0.05]" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md border border-amber-400/30 bg-[#17130e]/90 px-3 py-2 font-mono text-[9px] tracking-wider text-amber-300 shadow-xl backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> LIVE FILM GRAPH <span className="text-stone-500">·</span> 5 SHOTS
                </div>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto border-t border-white/10 bg-[#110e0a] px-4 py-3 scrollbar-hide">
                {pipeline.map((step, index) => (
                  <span key={step} className={`flex shrink-0 items-center gap-2 font-mono text-[9px] tracking-wider ${index === 3 ? 'text-amber-300' : 'text-stone-500'}`}>
                    <CircleDot className="h-3 w-3" />{step}
                    {index < pipeline.length - 1 && <span className="ml-2 text-stone-700">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
