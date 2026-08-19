import { motion } from 'framer-motion';
import { PenLine, Lock, Image, Film, ChevronRight, DollarSign } from 'lucide-react';

const gates = [
  {
    num: '01',
    icon: PenLine,
    title: 'Write',
    description: 'The writing pass settles everything — the story, the cast, the breakdown, and every prompt the later passes will spend. What comes after is mechanical: read a prompt, send it.',
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
            <span className="font-display text-6xl text-stone-800 leading-none">04</span>
            <span className="font-mono text-xs tracking-widest text-amber-400">CONTROL</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl text-[#f6efe4]">
            Four passes. You open every one.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            The writing pass settles everything — the story, the cast, the breakdown, and every prompt the later passes will spend. What comes after is mechanical: read a prompt, send it. Each pass stops for you before the next one starts, so a wrong character sheet costs one re-render here instead of a whole film of the wrong person.
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
      </div>
    </section>
  );
}
