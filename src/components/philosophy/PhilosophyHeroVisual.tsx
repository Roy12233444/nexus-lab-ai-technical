import React from 'react';

/**
 * Nexus LAB AI — Philosophy Epistemic Knowledge Topology Visual
 * Phase 04E.5 — Light Laboratory Epistemic Graph Visualization
 */
export const PhilosophyHeroVisual: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-6 shadow-sm sm:h-[440px]"
    >
      {/* Background Subtle Coordinate Grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />

      <svg
        className="relative z-10 h-full w-full max-w-[460px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="epistemicGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbitRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Concentric Epistemic Invariant Rings */}
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="url(#orbitRing)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="250" cy="250" r="130" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="250" cy="250" r="70" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Central Core: Pramā (Valid Cognition) */}
        <circle cx="250" cy="250" r="32" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
        <text
          x="250"
          y="246"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
        >
          PRAMĀ
        </text>
        <text
          x="250"
          y="260"
          textAnchor="middle"
          fill="#38bdf8"
          fontSize="8"
          fontFamily="monospace"
        >
          TRUTH
        </text>

        {/* Peripheral Epistemic Nodes */}
        {/* Node 1: Pratyakṣa (Perception) */}
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="60"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="250" cy="60" r="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <text
          x="250"
          y="58"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          PRATYAKṢA
        </text>
        <text x="250" y="70" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">
          PERCEPTION
        </text>

        {/* Node 2: Anumāna (Inference) */}
        <line
          x1="250"
          y1="250"
          x2="430"
          y2="200"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="430" cy="200" r="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <text
          x="430"
          y="198"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ANUMĀNA
        </text>
        <text
          x="430"
          y="210"
          textAnchor="middle"
          fill="#64748b"
          fontSize="7"
          fontFamily="monospace"
        >
          INFERENCE
        </text>

        {/* Node 3: Śabda (Testimony) */}
        <line
          x1="250"
          y1="250"
          x2="360"
          y2="400"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="360" cy="400" r="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <text
          x="360"
          y="398"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ŚABDA
        </text>
        <text
          x="360"
          y="410"
          textAnchor="middle"
          fill="#64748b"
          fontSize="7"
          fontFamily="monospace"
        >
          TESTIMONY
        </text>

        {/* Node 4: Svadharma (Constraints) */}
        <line
          x1="250"
          y1="250"
          x2="140"
          y2="400"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="140" cy="400" r="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <text
          x="140"
          y="398"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SVADHARMA
        </text>
        <text
          x="140"
          y="410"
          textAnchor="middle"
          fill="#64748b"
          fontSize="7"
          fontFamily="monospace"
        >
          BOUNDS
        </text>

        {/* Node 5: Antaḥkaraṇa (Cognition Stack) */}
        <line
          x1="250"
          y1="250"
          x2="70"
          y2="200"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="70" cy="200" r="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <text
          x="70"
          y="198"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ANTAḤKARAṆA
        </text>
        <text x="70" y="210" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">
          COGNITION
        </text>

        {/* Coordinate Legend */}
        <rect x="20" y="450" width="130" height="26" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
        <text
          x="85"
          y="467"
          textAnchor="middle"
          fill="#0369a1"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ◈ EPISTEMIC TOPOLOGY
        </text>
      </svg>
    </div>
  );
};
