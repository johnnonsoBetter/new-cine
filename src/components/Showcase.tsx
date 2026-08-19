import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const showcase = [
  {
    title: 'The Last Light',
    genre: 'Neo-Noir · 2:34 · 5 shots',
    img: 'https://images.pexels.com/photos/19016646/pexels-photo-19016646.jpeg?auto=compress&cs=tinysrgb&w=940',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Echoes of Tomorrow',
    genre: 'Sci-Fi · 1:12 · 3 shots',
    img: 'https://images.pexels.com/photos/6786970/pexels-photo-6786970.jpeg?auto=compress&cs=tinysrgb&w=940',
    span: '',
  },
  {
    title: 'Silent Witness',
    genre: 'Thriller · 3:48 · 8 shots',
    img: 'https://images.pexels.com/photos/23990905/pexels-photo-23990905.jpeg?auto=compress&cs=tinysrgb&w=940',
    span: '',
  },
  {
    title: 'Golden Hour',
    genre: 'Drama · 4:20 · 6 shots',
    img: 'https://images.pexels.com/photos/10045269/pexels-photo-10045269.jpeg?auto=compress&cs=tinysrgb&w=940',
    span: '',
  },
  {
    title: 'Midnight Requiem',
    genre: 'Horror · 2:08 · 4 shots',
    img: 'https://images.pexels.com/photos/36211006/pexels-photo-36211006.jpeg?auto=compress&cs=tinysrgb&w=940',
    span: '',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 bg-ink-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// GALLERY · TEMPLATES</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Films built in the graph.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm">
            Each film below was built with locked sheets, gated passes, and the reviewer. Start from a template or from scratch.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {showcase.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full glass border-2 border-amber-400/40 flex items-center justify-center backdrop-blur-md">
                  <Play className="w-6 h-6 text-amber-400 ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-mono text-[10px] tracking-widest text-amber-400 mb-1">
                  {item.genre}
                </div>
                <div className="font-display text-xl tracking-wide text-white">
                  {item.title}
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-4 bg-ink-950 translate-y-0 group-hover:-translate-y-full transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-ink-950 translate-y-0 group-hover:translate-y-full transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
