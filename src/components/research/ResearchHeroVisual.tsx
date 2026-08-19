import React from 'react';

/**
 * Nexus LAB AI — Research Visual Substrate
 * Systems-oriented computational vector field & 4 sovereign research topologies:
 * - Pure light laboratory background (#FFFFFF / #F8FAFC)
 * - 4 Independent topological vector constellations (NALA, AMP, RTA-GUARD, COSMOS)
 * - Coordinate axes, telemetry grids, and subtle pulse signals
 * - Strictly independent cluster layouts with zero cross-system dependency lines
 */
export const ResearchHeroVisual: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Ambient Laboratory Lighting Radial Field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 75% 45%, rgba(224, 242, 254, 0.5) 0%, rgba(240, 249, 255, 0.25) 50%, #ffffff 85%)',
        }}
      />

      {/* 2. Full-Width Perspective Vector Field */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Glow Filters */}
          <filter id="res-glow-cyan" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="res-glow-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Linear Gradients */}
          <linearGradient id="vector-beam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Ambient Perspective Coordinate Grid */}
        <g stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.45">
          <line x1="850" y1="120" x2="1550" y2="120" />
          <line x1="850" y1="300" x2="1550" y2="300" />
          <line x1="850" y1="480" x2="1550" y2="480" />
          <line x1="850" y1="660" x2="1550" y2="660" />
          <line x1="850" y1="840" x2="1550" y2="840" />

          <line x1="900" y1="80" x2="900" y2="880" />
          <line x1="1100" y1="80" x2="1100" y2="880" />
          <line x1="1300" y1="80" x2="1300" y2="880" />
          <line x1="1500" y1="80" x2="1500" y2="880" />
        </g>

        {/* ============================================================
            VECTOR 1 (Top Left): NALA (Agent Execution Harness Loop)
            ============================================================ */}
        <g transform="translate(980, 220)">
          {/* Orbital Execution Rings */}
          <circle
            cx="0"
            cy="0"
            r="64"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <circle
            cx="0"
            cy="0"
            r="44"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            opacity="0.8"
          />
          <circle cx="0" cy="0" r="20" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#0284c7" filter="url(#res-glow-cyan)" />

          {/* Checkpoint Satellites */}
          <circle cx="44" cy="0" r="4" fill="#0284c7" />
          <circle cx="-44" cy="0" r="4" fill="#0284c7" />
          <circle cx="0" cy="44" r="4" fill="#0284c7" />
          <circle cx="0" cy="-44" r="4" fill="#0284c7" />

          {/* Label */}
          <text
            x="0"
            y="85"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="600"
            fill="#475569"
            letterSpacing="1.5"
          >
            VECTOR 01 // NALA : HARNESS
          </text>
        </g>

        {/* ============================================================
            VECTOR 2 (Top Right): AMP (Durable Memory Lattice)
            ============================================================ */}
        <g transform="translate(1360, 220)">
          {/* Memory Lattice Nodes & Links */}
          <polygon
            points="0,-48 42,-24 42,24 0,48 -42,24 -42,-24"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.75"
          />
          <polygon
            points="0,-24 21,-12 21,12 0,24 -21,12 -21,-12"
            fill="#f0f9ff"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="0" r="5" fill="#0284c7" filter="url(#res-glow-cyan)" />

          {/* Vertex Memory Anchors */}
          <circle cx="0" cy="-48" r="4" fill="#0284c7" />
          <circle cx="42" cy="-24" r="4" fill="#0284c7" />
          <circle cx="42" cy="24" r="4" fill="#0284c7" />
          <circle cx="0" cy="48" r="4" fill="#0284c7" />
          <circle cx="-42" cy="24" r="4" fill="#0284c7" />
          <circle cx="-42" cy="-24" r="4" fill="#0284c7" />

          {/* Label */}
          <text
            x="0"
            y="85"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="600"
            fill="#475569"
            letterSpacing="1.5"
          >
            VECTOR 02 // AMP : MEMORY
          </text>
        </g>

        {/* ============================================================
            VECTOR 3 (Bottom Left): RTA-GUARD (Constitutional Shield)
            ============================================================ */}
        <g transform="translate(980, 580)">
          {/* Concentric Guard Gate & ARIES Audit Invariants */}
          <path
            d="M 0 -55 L 48 -25 L 48 20 C 48 48 0 65 0 65 C 0 65 -48 48 -48 20 L -48 -25 Z"
            fill="url(#shield-grad)"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          <path
            d="M 0 -35 L 30 -15 L 30 15 C 30 32 0 45 0 45 C 0 45 -30 32 -30 15 L -30 -15 Z"
            fill="#ffffff"
            stroke="#0284c7"
            strokeWidth="1.25"
            strokeDasharray="4 2"
          />
          <circle cx="0" cy="5" r="5" fill="#0284c7" filter="url(#res-glow-cyan)" />

          {/* Label */}
          <text
            x="0"
            y="95"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="600"
            fill="#475569"
            letterSpacing="1.5"
          >
            VECTOR 03 // RTA-GUARD : SAFETY
          </text>
        </g>

        {/* ============================================================
            VECTOR 4 (Bottom Right): COSMOS (Multi-Orbital Constellation)
            ============================================================ */}
        <g transform="translate(1360, 580)">
          {/* Orbital Ellipses */}
          <ellipse
            cx="0"
            cy="0"
            rx="64"
            ry="24"
            transform="rotate(-25)"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.8"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="64"
            ry="24"
            transform="rotate(35)"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="6 3"
            fill="none"
            opacity="0.65"
          />
          <circle cx="0" cy="0" r="14" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="5" fill="#0284c7" filter="url(#res-glow-cyan)" />

          {/* Constellation Satellites */}
          <circle cx="46" cy="-22" r="4" fill="#0284c7" />
          <circle cx="-46" cy="22" r="4" fill="#0284c7" />
          <circle cx="-38" cy="-28" r="3.5" fill="#0284c7" />
          <circle cx="38" cy="28" r="3.5" fill="#0284c7" />

          {/* Label */}
          <text
            x="0"
            y="95"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="600"
            fill="#475569"
            letterSpacing="1.5"
          >
            VECTOR 04 // COSMOS : SPACE OS
          </text>
        </g>
      </svg>
    </div>
  );
};
