import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is CineForge Studio?',
    a: 'CineForge is an AI film studio. You type one story idea. It writes a screenplay, designs the cast and locations, generates a still for every shot, animates each still into a clip, and cuts them into one downloadable MP4. It is a production graph with a human gate and an automated reviewer — not a prompt box that returns clips.',
  },
  {
    q: 'How do locked reference sheets work?',
    a: 'Before any shot is rendered, CineForge generates a reference sheet for every character and a plate for every location, then locks them. Every later frame is generated from those images and checked against them. Faces don\'t drift between shots. The sheet never changes unless you unlock it.',
  },
  {
    q: 'What does the automated reviewer actually do?',
    a: 'A vision model compares every render to the sheets it was supposed to match. It returns a per-criterion verdict — face geometry, wardrobe, lighting direction, location continuity — and re-renders hard failures on a fixed budget. If it can\'t fix a frame within budget, it flags the shot for your decision instead of burning credits silently.',
  },
  {
    q: 'What is a free change versus a paid change?',
    a: 'Text changes are free. Renaming a character rewrites every scene, line, and stored prompt instantly at zero cost. Only pixel changes cost money — changing wardrobe, lighting, or composition. The app shows the blast radius (which frames go stale) and the total cost before you approve a single re-render.',
  },
  {
    q: 'What are the four gated passes?',
    a: 'Write → Sheets → Frames → Motion. A human opens every gate. No pass starts itself. You see what each pass costs before you start it, and nothing runs until you click through. There are no background renders without your consent.',
  },
  {
    q: 'Can I use Midjourney, Kling, or ChatGPT for a shot?',
    a: 'Yes. Any shot can leave as a labelled brief for Midjourney, Kling, or ChatGPT, and the result can come back in as a real version. The reviewer still checks it against the same sheets. Imported assets are marked as imported and never claim verification — the provenance tag stays on the frame so you always know what came from outside.',
  },
  {
    q: 'What does the commit log record?',
    a: 'Every action: renders, re-renders, locks, renames, gate openings, and imports. The manifest tracks what is in the final cut — sheet count, shot count, duration, export format, provenance breakdown, and a checksum. You can always trace a frame back to its source.',
  },
  {
    q: 'Who owns the films I create?',
    a: 'You own everything you create with CineForge. There are no watermarks on paid plans, and you retain full commercial rights to all generated content.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// THE QUESTIONS</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            Before you ask.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium text-sm md:text-base">{f.q}</span>
                <Plus
                  className={`w-5 h-5 text-amber-400 shrink-0 ml-4 transition-transform duration-300 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
