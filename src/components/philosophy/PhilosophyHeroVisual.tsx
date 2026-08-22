import React from 'react';
import { Eye, Network, BookOpen, ShieldCheck, Layers, Sparkles, Compass } from 'lucide-react';

/**
 * Nexus LAB AI — Philosophy Epistemic Knowledge Topology Visual
 * Phase 04E.5 — Interactive Light Laboratory Epistemic Graph with Lucide Icons & High-Contrast Typography
 */
export const PhilosophyHeroVisual: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:min-h-[500px] lg:p-8"
    >
      {/* Precision Laboratory Coordinate Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0284c7_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.07]" />

      {/* SVG Connecting Topology Network */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Orbit Verification Rings */}
        <circle
          cx="250"
          cy="250"
          r="185"
          stroke="url(#orbitGlow)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="250" cy="250" r="120" stroke="#cbd5e1" strokeWidth="1.2" />
        <circle cx="250" cy="250" r="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

        {/* Ray Lines from Center (250, 250) to 5 Cardinal Nodes */}
        {/* Ray 1: Top (250, 70) */}
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="70"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Ray 2: Top-Right (400, 180) */}
        <line
          x1="250"
          y1="250"
          x2="400"
          y2="180"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Ray 3: Bottom-Right (355, 375) */}
        <line
          x1="250"
          y1="250"
          x2="355"
          y2="375"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Ray 4: Bottom-Left (145, 375) */}
        <line
          x1="250"
          y1="250"
          x2="145"
          y2="375"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Ray 5: Top-Left (100, 180) */}
        <line
          x1="250"
          y1="250"
          x2="100"
          y2="180"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Central Hub: PRAMĀ (Ground Truth Core) */}
      <div className="relative z-20 flex flex-col items-center justify-center rounded-2xl border-2 border-sky-500 bg-slate-950 px-5 py-3.5 shadow-xl transition-transform duration-300 hover:scale-105">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
            <Sparkles className="h-4 w-4 animate-pulse text-sky-300" />
          </div>
          <span className="font-mono text-sm font-black tracking-wider text-white">PRAMĀ</span>
        </div>
        <span className="mt-0.5 font-mono text-[11px] font-bold tracking-widest text-sky-400 uppercase">
          VALID TRUTH
        </span>
      </div>

      {/* 5 Peripheral Knowledge Faculty Capsules */}

      {/* Node 1: Top (PRATYAKṢA - Perception) */}
      <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 sm:top-6">
        <div className="flex items-center gap-2.5 rounded-xl border border-sky-300 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs transition-all hover:border-sky-500 hover:shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-200">
            <Eye className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-slate-950">
              PRATYAKṢA
            </span>
            <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
              Perception / Sensors
            </span>
          </div>
        </div>
      </div>

      {/* Node 2: Top-Right (ANUMĀNA - Inference) */}
      <div className="absolute top-[28%] right-2 z-20 sm:right-6">
        <div className="flex items-center gap-2.5 rounded-xl border border-indigo-300 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs transition-all hover:border-indigo-500 hover:shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200">
            <Network className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-slate-950">
              ANUMĀNA
            </span>
            <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
              Inference / Logic
            </span>
          </div>
        </div>
      </div>

      {/* Node 3: Bottom-Right (ŚABDA - Testimony) */}
      <div className="absolute right-4 bottom-14 z-20 sm:right-10 sm:bottom-16">
        <div className="flex items-center gap-2.5 rounded-xl border border-purple-300 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs transition-all hover:border-purple-500 hover:shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 ring-1 ring-purple-200">
            <BookOpen className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-slate-950">ŚABDA</span>
            <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
              Testimony / Corpus
            </span>
          </div>
        </div>
      </div>

      {/* Node 4: Bottom-Left (SVADHARMA - Boundaries) */}
      <div className="absolute bottom-14 left-4 z-20 sm:bottom-16 sm:left-10">
        <div className="flex items-center gap-2.5 rounded-xl border border-emerald-300 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs transition-all hover:border-emerald-500 hover:shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-slate-950">
              SVADHARMA
            </span>
            <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
              Duty / Constraints
            </span>
          </div>
        </div>
      </div>

      {/* Node 5: Top-Left (ANTAḤKARAṆA - Cognition Stack) */}
      <div className="absolute top-[28%] left-2 z-20 sm:left-6">
        <div className="flex items-center gap-2.5 rounded-xl border border-cyan-300 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs transition-all hover:border-cyan-500 hover:shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 ring-1 ring-cyan-200">
            <Layers className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-slate-950">
              ANTAḤKARAṆA
            </span>
            <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase">
              Cognition / Stack
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Subtitle / Identity Pill */}
      <div className="absolute bottom-3 left-4 z-20 sm:bottom-4 sm:left-6">
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-bold text-sky-900 shadow-xs backdrop-blur-xs">
          <Compass className="h-3.5 w-3.5 text-sky-600" />
          <span>EPISTEMIC TOPOLOGY</span>
        </div>
      </div>
    </div>
  );
};
