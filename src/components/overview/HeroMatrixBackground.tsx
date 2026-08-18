import React from 'react';

/**
 * Nexus LAB AI — Dotted Matrix & Architectural Mesh Substrate
 * Pure light/white design with full-width dot grid, topological intelligence nodes,
 * connecting network vectors, and curved horizon engine mesh.
 */
export const HeroMatrixBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Radial Glow (Soft Cyan/Blue Light Horizon) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 15%, rgba(240, 249, 255, 0.9) 0%, rgba(248, 250, 252, 0.6) 60%, rgba(255, 255, 255, 0.2) 100%)',
        }}
      />

      {/* 2. Crisp Full-Width Dotted Matrix Grid (16px rhythm, 2px dots) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="nexus-hero-matrix-grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#0284c7" fillOpacity="0.4" />
          </pattern>
          <linearGradient id="matrix-fade-mask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
          </linearGradient>
          <mask id="matrix-mask">
            <rect width="100%" height="100%" fill="url(#matrix-fade-mask)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#nexus-hero-matrix-grid)"
          mask="url(#matrix-mask)"
        />
      </svg>

      {/* 3. Dynamic Architectural Intelligence Nodes & Topological Connecting Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Node Glow Filters */}
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-amber" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Line Gradients */}
          <linearGradient id="cyan-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="amber-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Constellation Network Connecting Lines (0.75px) */}
        <g className="opacity-75">
          {/* Left Wing Constellation */}
          <line x1="120" y1="180" x2="220" y2="120" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line
            x1="220"
            y1="120"
            x2="310"
            y2="240"
            stroke="url(#cyan-line)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <line x1="310" y1="240" x2="180" y2="340" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line x1="220" y1="120" x2="420" y2="140" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line
            x1="310"
            y1="240"
            x2="480"
            y2="290"
            stroke="url(#cyan-line)"
            strokeWidth="0.8"
            strokeDasharray="6 3"
          />
          <line x1="180" y1="340" x2="320" y2="440" stroke="url(#cyan-line)" strokeWidth="0.8" />

          {/* Center Span Connectors */}
          <line
            x1="420"
            y1="140"
            x2="600"
            y2="110"
            stroke="url(#cyan-line)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />
          <line x1="480" y1="290" x2="720" y2="310" stroke="url(#amber-line)" strokeWidth="0.9" />
          <line x1="600" y1="110" x2="840" y2="130" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line
            x1="720"
            y1="310"
            x2="940"
            y2="280"
            stroke="url(#amber-line)"
            strokeWidth="0.9"
            strokeDasharray="5 5"
          />

          {/* Right Wing Constellation */}
          <line x1="840" y1="130" x2="1040" y2="100" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line
            x1="1040"
            y1="100"
            x2="1140"
            y2="210"
            stroke="url(#cyan-line)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <line x1="940" y1="280" x2="1140" y2="210" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line x1="1140" y1="210" x2="1320" y2="160" stroke="url(#cyan-line)" strokeWidth="0.8" />
          <line
            x1="940"
            y1="280"
            x2="1100"
            y2="420"
            stroke="url(#cyan-line)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <line x1="1140" y1="210" x2="1280" y2="340" stroke="url(#cyan-line)" strokeWidth="0.8" />
        </g>

        {/* Dynamic Intelligence Nodes (Cyan & Amber) */}
        <g>
          {/* Left Wing Nodes */}
          <circle cx="120" cy="180" r="3" fill="#0284c7" fillOpacity="0.7" />
          <circle
            cx="220"
            cy="120"
            r="4.5"
            fill="#0284c7"
            fillOpacity="0.85"
            filter="url(#glow-cyan)"
          />
          <circle cx="220" cy="120" r="10" fill="#0284c7" fillOpacity="0.15" />
          <circle cx="310" cy="240" r="3.5" fill="#0284c7" fillOpacity="0.75" />
          <circle cx="180" cy="340" r="3" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="420" cy="140" r="3.5" fill="#0284c7" fillOpacity="0.7" />
          <circle
            cx="480"
            cy="290"
            r="4"
            fill="#0284c7"
            fillOpacity="0.8"
            filter="url(#glow-cyan)"
          />
          <circle cx="320" cy="440" r="2.5" fill="#0284c7" fillOpacity="0.5" />

          {/* Upper Center Node */}
          <circle cx="600" cy="110" r="3" fill="#0284c7" fillOpacity="0.7" />

          {/* Center Amber Synthesis Node (Active Pulse Core) */}
          <circle
            cx="720"
            cy="310"
            r="5"
            fill="#d97706"
            fillOpacity="0.9"
            filter="url(#glow-amber)"
          />
          <circle
            cx="720"
            cy="310"
            r="14"
            fill="#d97706"
            fillOpacity="0.18"
            className="animate-pulse"
          />

          {/* Right Wing Nodes */}
          <circle cx="840" cy="130" r="3.5" fill="#0284c7" fillOpacity="0.75" />
          <circle
            cx="940"
            cy="280"
            r="4"
            fill="#0284c7"
            fillOpacity="0.8"
            filter="url(#glow-cyan)"
          />
          <circle
            cx="1040"
            cy="100"
            r="4.5"
            fill="#0284c7"
            fillOpacity="0.85"
            filter="url(#glow-cyan)"
          />
          <circle cx="1040" cy="100" r="11" fill="#0284c7" fillOpacity="0.15" />
          <circle
            cx="1140"
            cy="210"
            r="4"
            fill="#0284c7"
            fillOpacity="0.8"
            filter="url(#glow-cyan)"
          />
          <circle cx="1320" cy="160" r="3" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="1280" cy="340" r="3.5" fill="#0284c7" fillOpacity="0.7" />
          <circle cx="1100" cy="420" r="2.5" fill="#0284c7" fillOpacity="0.5" />

          {/* Sparse Amber Intelligence Sparks */}
          <circle cx="260" cy="80" r="2" fill="#d97706" fillOpacity="0.6" />
          <circle cx="1180" cy="90" r="2.5" fill="#d97706" fillOpacity="0.7" />
          <circle cx="150" cy="480" r="2" fill="#d97706" fillOpacity="0.5" />
          <circle cx="1250" cy="460" r="2.2" fill="#d97706" fillOpacity="0.5" />
        </g>
      </svg>

      {/* 4. Bottom Curved Horizon Engine Mesh & Aurora Wave */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-64 overflow-hidden">
        {/* Soft Amber / Cyan Central Focus Light */}
        <div
          className="absolute bottom-0 left-1/2 h-36 w-3/4 -translate-x-1/2 opacity-35"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(251, 191, 36, 0.4) 0%, rgba(56, 189, 248, 0.3) 40%, transparent 80%)',
          }}
        />

        {/* Curved Wireframe Horizon Lines SVG */}
        <svg
          className="absolute bottom-0 left-1/2 h-52 w-[1600px] -translate-x-1/2 opacity-35"
          viewBox="0 0 1600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Elliptical Horizon Arcs */}
          <path d="M0 200 Q800 20 1600 200" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.4" />
          <path
            d="M50 200 Q800 45 1550 200"
            stroke="#0284c7"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          <path
            d="M120 200 Q800 75 1480 200"
            stroke="#0284c7"
            strokeWidth="0.75"
            strokeOpacity="0.3"
            strokeDasharray="6 4"
          />
          <path
            d="M200 200 Q800 110 1400 200"
            stroke="#0284c7"
            strokeWidth="0.75"
            strokeOpacity="0.25"
          />
          <path
            d="M300 200 Q800 150 1300 200"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />

          {/* Perspective Longitude Rays */}
          <line
            x1="800"
            y1="20"
            x2="400"
            y2="200"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="20"
            x2="600"
            y2="200"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="20"
            x2="800"
            y2="200"
            stroke="#d97706"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="3 3"
          />
          <line
            x1="800"
            y1="20"
            x2="1000"
            y2="200"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="20"
            x2="1200"
            y2="200"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
        </svg>

        {/* Bottom Fade Gradient to Seamlessly Transition to Section 02 */}
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--nexus-bg-primary))',
          }}
        />
      </div>
    </div>
  );
};

HeroMatrixBackground.displayName = 'HeroMatrixBackground';
