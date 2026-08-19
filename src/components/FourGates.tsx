import { motion } from 'framer-motion';
import { PenLine, Lock, Image, Film, ChevronRight, Check, DollarSign } from 'lucide-react';

const gates = [
  {
    num: '01',
    icon: PenLine,
    title: 'Write',
    description: 'Type a story idea. CineForge writes the screenplay — scenes, slug lines, dialogue, and stage directions.',
    cost: 'Text generation',
    costType: 'free',
    gate: 'You open the gate to generate sheets.',
  },
  {
    num: '02',
    icon: Lock,
    title: 'Sheets',
    description: 'A reference sheet is generated for every character and a plate for every location. You review them, then lock them.',
    cost: 'Sheet + plate renders',
    costType: 'paid',
    gate: 'You open the gate to generate frames.',
  },
  {
    num: '03',
    icon: Image,
    title: 'Frames',
    description: 'A still is generated for every shot, from the locked sheets. The reviewer checks each one against its sheet.',
    cost: 'Still renders + review',
    costType: 'paid',
    gate: 'You open the gate to animate.',
  },
  {
    num: '04',
    icon: Film,
    title: 'Motion',
    description: 'Each approved still animates into a clip. Clips are cut into one downloadable MP4.',
    cost: 'Motion renders',
    costType: 'paid',
    gate: 'You open the gate to export.',
  },
];

export default function FourGates() {
  return (
    <section id="gates" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 04 · FOUR GATED PASSES</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            No pass starts itself.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Write → Sheets → Frames → Motion. A human opens every gate. You see what each pass costs before you start it, and nothing runs until you click through.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-emerald-400/20 via-amber-400/30 to-amber-400/20" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gates.map((g, i) => (
              <motion.div
                key={g.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#161310] p-6 transition-all duration-500 hover:border-amber-400/20">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.07]">
                      <g.icon className="h-6 w-6 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-2xl text-stone-700">{g.num}</span>
                  </div>

                  <h3 className="mb-3 font-display text-2xl tracking-wide text-stone-200">{g.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-stone-400">{g.description}</p>

                  <div className="space-y-2.5 border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-wider text-stone-500">COST</span>
                      <span className={`flex items-center gap-1 font-mono text-[10px] ${g.costType === 'free' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {g.costType === 'paid' && <DollarSign className="h-3 w-3" />}
                        {g.cost}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[9px] tracking-wider text-stone-500 shrink-0">GATE</span>
                      <span className="text-xs leading-relaxed text-stone-400">{g.gate}</span>
                    </div>
                  </div>

                  {i < gates.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-400/30 bg-[#161310]">
                        <ChevronRight className="h-3.5 w-3.5 text-amber-400" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] tracking-wider text-stone-500"
        >
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          EVERY GATE IS A HUMAN DECISION · NO BACKGROUND RENDERS WITHOUT CONSENT
        </motion.div>
      </div>
    </section>
  );
}
