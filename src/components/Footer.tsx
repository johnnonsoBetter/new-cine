import { Clapperboard, Twitter, Github, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Showcase', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Tutorials', 'Community', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <Clapperboard className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
              <span className="font-display text-2xl tracking-wider text-white">
                CINE<span className="text-amber-400">FORGE</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              An AI film studio with locked reference sheets, an automated reviewer, and human gates. Direction, not prompting.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/30 transition-all"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-medium text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs font-mono">
            © 2026 CINEFORGE STUDIO · ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
