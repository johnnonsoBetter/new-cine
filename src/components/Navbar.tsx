import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, Menu, X } from 'lucide-react';

const links = [
  { label: 'Consistency', href: '#consistency' },
  { label: 'Review', href: '#reviewer' },
  { label: 'Cost', href: '#free-vs-paid' },
  { label: 'Control', href: '#gates' },
  { label: 'Open', href: '#tools' },
  { label: 'Record', href: '#provenance' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Clapperboard className="w-7 h-7 text-amber-400 transition-transform group-hover:scale-110" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-amber-400/30 blur-lg group-hover:bg-amber-400/50 transition-all" />
          </div>
          <span className="font-display text-2xl tracking-wider text-white">
            CINE<span className="text-amber-400">FORGE</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-amber-400 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="#cta"
            className="px-5 py-2.5 bg-amber-400 text-ink-950 font-semibold text-sm rounded-lg hover:bg-amber-300 transition-all hover:shadow-lg hover:shadow-amber-400/30"
          >
            Forge a film
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass-dark mt-3 mx-4 rounded-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a href="#cta" className="px-5 py-2.5 bg-amber-400 text-ink-950 font-semibold text-sm rounded-lg text-center">
                Forge a film
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
