import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Indie',
    price: '$0',
    period: 'forever',
    description: 'For solo creators exploring the production graph.',
    features: [
      '1 active project',
      'Up to 5 shots per film',
      '720p export · MP4',
      '2 locked character sheets',
      '1 location plate',
      'Reviewer with 1 re-render budget',
      'Community support',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Director',
    price: '$29',
    period: '/month',
    description: 'For filmmakers building complete short films.',
    features: [
      '10 active projects',
      'Up to 30 shots per film',
      '1080p export · MP4',
      'Unlocked sheet revisions',
      'Unlimited location plates',
      'Reviewer with 3 re-render budget',
      'Brief export to Midjourney / Kling / ChatGPT',
      'Full commit log + manifest',
      'Priority rendering',
    ],
    cta: 'Start 14-Day Trial',
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$99',
    period: '/month',
    description: 'For teams and agencies producing at scale.',
    features: [
      'Unlimited projects',
      'Unlimited shots per film',
      '4K export · MP4 + ProRes',
      'Team collaboration',
      'Script import (50+ pages)',
      'Reviewer with custom budget',
      'Import round-trip from any tool',
      'API access',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// THE INVESTMENT</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-4">
            Pay for pixels, not text.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Text changes are always free. Pixel changes are billed per render, and you see the cost before you approve. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl transition-all duration-500 ${
                p.highlight
                  ? 'glass-dark border-2 border-amber-400/40 md:scale-105 cinema-shadow'
                  : 'glass hover:border-white/20'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-ink-950 text-xs font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-display text-3xl tracking-wide text-white mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{p.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-5xl text-amber-400">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>

              <a
                href="#cta"
                className={`block w-full py-3.5 text-center font-semibold rounded-xl transition-all mb-8 ${
                  p.highlight
                    ? 'bg-amber-400 text-ink-950 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/30'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                {p.cta}
              </a>

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
