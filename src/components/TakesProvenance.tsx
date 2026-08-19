import { motion } from 'framer-motion';
import { GitCommit, FileCheck, Clock, User } from 'lucide-react';

const commits = [
  { hash: 'a3f2c1', action: 'RENDER', target: 'Scene 03 / Shot 02 · motion', author: 'maya', time: '2m ago', status: 'pass' },
  { hash: 'b8e4d9', action: 'RE-RENDER', target: 'Scene 03 / Shot 02 · frame (reviewer fail: lighting)', author: 'reviewer', time: '3m ago', status: 'pass' },
  { hash: 'c1a7f5', action: 'LOCK', target: 'Character sheet: Mara v2', author: 'maya', time: '14m ago', status: 'pass' },
  { hash: 'd9b3e2', action: 'RENAME', target: 'Asha → Mara (12 scenes, 7 prompts)', author: 'maya', time: '18m ago', status: 'free' },
  { hash: 'e5c8a1', action: 'GATE', target: 'Frames pass opened for Scene 03', author: 'maya', time: '22m ago', status: 'pass' },
  { hash: 'f2d6b4', action: 'IMPORT', target: 'Scene 02 / Shot 04 · Midjourney v6.1', author: 'maya', time: '31m ago', status: 'imported' },
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
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-amber-400 mb-4">// 06 · TAKES & PROVENANCE</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
            Every frame has a history.
          </h2>
          <p className="mt-5 max-w-2xl text-stone-400 text-base leading-relaxed">
            A commit log records every action — renders, re-renders, locks, renames, gates, imports. The manifest tracks what's in the final cut and where each frame came from.
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
                <div key={c.hash} className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors">
                  <span className="font-mono text-[10px] text-stone-600 shrink-0">{c.hash}</span>
                  <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[9px] tracking-wider ${
                    c.action === 'RE-RENDER' ? 'border-amber-400/30 bg-amber-400/10 text-amber-400' :
                    c.action === 'RENAME' ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400' :
                    c.action === 'IMPORT' ? 'border-stone-500/30 bg-stone-500/10 text-stone-400' :
                    'border-white/10 bg-white/5 text-stone-400'
                  }`}>
                    {c.action}
                  </span>
                  <span className="flex-1 truncate text-xs text-stone-400">{c.target}</span>
                  <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-stone-600 sm:flex">
                    <User className="h-3 w-3" />{c.author}
                  </span>
                  <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-stone-600 sm:flex">
                    <Clock className="h-3 w-3" />{c.time}
                  </span>
                </div>
              ))}
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
