import { motion } from 'framer-motion';
import { GitCommit, FileCheck, Clock, User, History, Hash } from 'lucide-react';

const commits = [
  { hash: 'a3f2c1', action: 'RENDER', target: 'Scene 03 / Shot 02 · motion', author: 'maya', time: '2m ago', note: 'Approved on first pass' },
  { hash: 'b8e4d9', action: 'RE-RENDER', target: 'Scene 03 / Shot 02 · frame', author: 'reviewer', time: '3m ago', note: 'Hard fail: lighting — auto re-rendered' },
  { hash: 'c1a7f5', action: 'LOCK', target: 'Character sheet: Mara v2', author: 'maya', time: '14m ago', note: 'Sheet locked before frames pass' },
  { hash: 'd9b3e2', action: 'RENAME', target: 'Asha → Mara', author: 'maya', time: '18m ago', note: '12 scenes, 7 prompts rewritten · $0.00' },
  { hash: 'e5c8a1', action: 'GATE', target: 'Frames pass opened for Scene 03', author: 'maya', time: '22m ago', note: 'Human gate opened' },
  { hash: 'f2d6b4', action: 'IMPORT', target: 'Scene 02 / Shot 04 · Midjourney v6.1', author: 'maya', time: '31m ago', note: 'Imported — labelled, not verified' },
];

const manifest = [
  { field: 'project', value: 'The Murmuration' },
  { field: 'version', value: '0.3.2' },
  { field: 'sheets', value: '3 characters · 2 locations' },
  { field: 'shots', value: '5 total · 4 approved · 1 stale' },
  { field: 'duration', value: '00:40' },
  { field: 'export', value: 'MP4 · H.264 · 1080p' },
  { field: 'provenance', value: '4 CineForge · 1 imported (Midjourney)' },
  { field: 'checksum', value: 'sha256:9f2a…c41e' },
];

export default function TakesProvenance() {
  return (
    <section id="provenance" className="relative py-24 md:py-32">
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
            <span className="font-display text-6xl text-stone-800 leading-none">06</span>
            <span className="font-mono text-xs tracking-widest text-amber-400">RECORD</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl text-[#f6efe4]">
            Every take is kept. Every take is traceable.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            Regeneration appends; it never overwrites. Each take carries the note that asked for it, a real diff of the prompt that made it, and the verdict it was accepted on. Go back to an earlier one whenever you want — that costs nothing. And everything generated here keeps its hash, its model, its prompt and its lineage, stored alongside the film.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Commit log */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#110e0a]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <GitCommit className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
                <span className="font-mono text-xs tracking-wider text-stone-300">COMMIT LOG · THE MURMURATION</span>
              </div>
              <span className="font-mono text-[10px] text-stone-600">6 ENTRIES</span>
            </div>

            <div className="divide-y divide-white/5">
              {commits.map((c) => (
                <div key={c.hash} className="flex items-start gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors">
                  <span className="mt-0.5 flex items-center gap-1 font-mono text-[10px] text-stone-600 shrink-0">
                    <Hash className="h-2.5 w-2.5" />{c.hash}
                  </span>
                  <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[9px] tracking-wider ${
                    c.action === 'RE-RENDER' ? 'border-amber-400/30 bg-amber-400/10 text-amber-400' :
                    c.action === 'RENAME' ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400' :
                    c.action === 'IMPORT' ? 'border-stone-500/30 bg-stone-500/10 text-stone-400' :
                    'border-white/10 bg-white/5 text-stone-400'
                  }`}>
                    {c.action}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-xs text-stone-400">{c.target}</div>
                    <div className="mt-0.5 font-mono text-[9px] text-stone-600">{c.note}</div>
                  </div>
                  <div className="hidden shrink-0 flex-col items-end gap-0.5 sm:flex">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-stone-600">
                      <User className="h-3 w-3" />{c.author}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[9px] text-stone-700">
                      <Clock className="h-2.5 w-2.5" />{c.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 bg-[#0c0a08] px-5 py-3">
              <History className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-mono text-[10px] tracking-wider text-stone-500">REGENERATION APPENDS · IT NEVER OVERWRITES</span>
            </div>
          </motion.div>

          {/* Manifest */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#161310]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <FileCheck className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
                <span className="font-mono text-xs tracking-wider text-stone-300">MANIFEST · FINAL CUT</span>
              </div>
              <span className="font-mono text-[10px] text-stone-600">v0.3.2</span>
            </div>

            <div className="divide-y divide-white/5">
              {manifest.map((m) => (
                <div key={m.field} className="flex items-center justify-between px-5 py-3">
                  <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase">{m.field}</span>
                  <span className="text-xs text-stone-300">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 bg-[#110e0a] px-5 py-3">
              <span className="flex items-center justify-center gap-2 font-mono text-[10px] tracking-wider text-emerald-400">
                <FileCheck className="h-3 w-3" /> MANIFEST VERIFIED · READY TO EXPORT
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
