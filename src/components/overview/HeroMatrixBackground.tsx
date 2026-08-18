import React from 'react';

/**
 * Nexus LAB AI — Dotted Matrix Visual Substrate (Kill-Critic Precision Pass)
 * Architectural substrate representing systems topology beneath the surface.
 * Strictly light laboratory palette: very light blue-gray dots (#D9E7F2),
 * restrained cyan-blue active nodes (#00AEEF), rare amber accent (#F59E0B),
 * and ultra-thin 0.5-0.75px pale connecting lines with clear center reading zone.
 */
export const HeroMatrixBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Atmospheric Light Gradient (Laboratory Environment) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 12%, rgba(240, 249, 255, 0.6) 0%, rgba(248, 250, 252, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* 2. Base Architectural Dot Grid (Very Light Blue-Gray #D9E7F2 / #E3EDF5) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="nexus-matrix-grid-refined"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.1" fill="#94a3b8" fillOpacity="0.3" />
          </pattern>
          {/* Gentle Radial Fade Mask to protect central typography reading zone */}
          <radialGradient id="reading-zone-mask" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
          </radialGradient>
          <mask id="hero-dot-mask">
            <rect width="100%" height="100%" fill="url(#reading-zone-mask)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#nexus-matrix-grid-refined)"
          mask="url(#hero-dot-mask)"
        />
      </svg>

      {/* 3. Outer Constellation Nodes & Ultra-Thin Connecting Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Gaussian Blur Glow Filters (Restrained, Not Overbearing) */}
          <filter id="node-glow-subtle" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="node-glow-amber-subtle" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Pale Connecting Vectors (0.5-0.75px) */}
          <linearGradient id="pale-vector-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="pale-vector-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="pale-vector-arch" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* LEFT WING TOPOLOGY (x: 80–380) */}
        <g className="opacity-70">
          <line
            x1="90"
            y1="160"
            x2="210"
            y2="110"
            stroke="url(#pale-vector-left)"
            strokeWidth="0.65"
          />
          <line
            x1="210"
            y1="110"
            x2="300"
            y2="220"
            stroke="url(#pale-vector-left)"
            strokeWidth="0.65"
            strokeDasharray="3 3"
          />
          <line
            x1="300"
            y1="220"
            x2="160"
            y2="310"
            stroke="url(#pale-vector-left)"
            strokeWidth="0.65"
          />
          <line
            x1="160"
            y1="310"
            x2="270"
            y2="430"
            stroke="url(#pale-vector-left)"
            strokeWidth="0.65"
            strokeDasharray="4 3"
          />
          <line
            x1="210"
            y1="110"
            x2="370"
            y2="150"
            stroke="url(#pale-vector-left)"
            strokeWidth="0.65"
          />
        </g>

        {/* HIGH ARCH (Arches well above the header title) */}
        <g className="opacity-60">
          <line
            x1="370"
            y1="150"
            x2="550"
            y2="65"
            stroke="url(#pale-vector-arch)"
            strokeWidth="0.6"
            strokeDasharray="4 4"
          />
          <line
            x1="550"
            y1="65"
            x2="890"
            y2="65"
            stroke="url(#pale-vector-arch)"
            strokeWidth="0.6"
          />
          <line
            x1="890"
            y1="65"
            x2="1070"
            y2="150"
            stroke="url(#pale-vector-arch)"
            strokeWidth="0.6"
            strokeDasharray="4 4"
          />
        </g>

        {/* RIGHT WING TOPOLOGY (x: 1070–1370) */}
        <g className="opacity-70">
          <line
            x1="1070"
            y1="150"
            x2="1170"
            y2="95"
            stroke="url(#pale-vector-right)"
            strokeWidth="0.65"
          />
          <line
            x1="1170"
            y1="95"
            x2="1280"
            y2="190"
            stroke="url(#pale-vector-right)"
            strokeWidth="0.65"
            strokeDasharray="3 3"
          />
          <line
            x1="1070"
            y1="150"
            x2="1190"
            y2="270"
            stroke="url(#pale-vector-right)"
            strokeWidth="0.65"
          />
          <line
            x1="1190"
            y1="270"
            x2="1350"
            y2="330"
            stroke="url(#pale-vector-right)"
            strokeWidth="0.65"
            strokeDasharray="4 3"
          />
          <line
            x1="1190"
            y1="270"
            x2="1250"
            y2="440"
            stroke="url(#pale-vector-right)"
            strokeWidth="0.65"
          />
        </g>

        {/* INTELLIGENCE NODES (Restrained Hierarchy) */}
        <g>
          {/* Left Wing Nodes */}
          <circle cx="90" cy="160" r="2.5" fill="#0284c7" fillOpacity="0.7" />
          <circle
            cx="210"
            cy="110"
            r="3.5"
            fill="#0284c7"
            fillOpacity="0.85"
            filter="url(#node-glow-subtle)"
          />
          <circle cx="210" cy="110" r="7" fill="#0284c7" fillOpacity="0.12" />
          <circle cx="300" cy="220" r="3" fill="#4f8cc9" fillOpacity="0.75" />
          <circle cx="160" cy="310" r="2.5" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="270" cy="430" r="2.5" fill="#0284c7" fillOpacity="0.5" />
          <circle cx="370" cy="150" r="3" fill="#0284c7" fillOpacity="0.75" />

          {/* High Arch Overhead Nodes */}
          <circle cx="550" cy="65" r="2.5" fill="#4f8cc9" fillOpacity="0.7" />
          <circle cx="890" cy="65" r="2.5" fill="#4f8cc9" fillOpacity="0.7" />

          {/* Right Wing Nodes */}
          <circle cx="1070" cy="150" r="3" fill="#0284c7" fillOpacity="0.75" />
          <circle
            cx="1170"
            cy="95"
            r="3.5"
            fill="#0284c7"
            fillOpacity="0.85"
            filter="url(#node-glow-subtle)"
          />
          <circle cx="1170" cy="95" r="7" fill="#0284c7" fillOpacity="0.12" />
          <circle cx="1280" cy="190" r="3" fill="#4f8cc9" fillOpacity="0.75" />

          {/* Rare Accent Node (Warm Orange #F59E0B — Discovery Signal) */}
          <circle
            cx="1190"
            cy="270"
            r="3.5"
            fill="#f59e0b"
            fillOpacity="0.9"
            filter="url(#node-glow-amber-subtle)"
          />
          <circle cx="1190" cy="270" r="8" fill="#f59e0b" fillOpacity="0.15" />

          <circle cx="1350" cy="330" r="2.5" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="1250" cy="440" r="2.5" fill="#0284c7" fillOpacity="0.5" />

          {/* Sparse Micro Sparks (Subtle) */}
          <circle cx="170" cy="80" r="1.8" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="1310" cy="85" r="1.8" fill="#f59e0b" fillOpacity="0.6" />
        </g>
      </svg>

      {/* 4. Subtle Computational Substrate (Restrained Horizon Lines) */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-44 overflow-hidden">
        {/* Soft Ambient Fade */}
        <div
          className="absolute bottom-0 left-1/2 h-24 w-3/4 -translate-x-1/2 opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(2, 132, 199, 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Lightweight Elliptical Horizon Mesh (Opacity 20%) */}
        <svg
          className="absolute bottom-0 left-1/2 h-36 w-[1440px] -translate-x-1/2 opacity-20"
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 140 Q720 15 1440 140"
            stroke="#0284c7"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <path
            d="M80 140 Q720 45 1360 140"
            stroke="#0284c7"
            strokeWidth="0.65"
            strokeOpacity="0.4"
          />
          <path
            d="M180 140 Q720 75 1260 140"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            strokeDasharray="5 3"
          />
          <path
            d="M300 140 Q720 105 1140 140"
            stroke="#0284c7"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />

          {/* Perspective Longitude Rays */}
          <line
            x1="720"
            y1="15"
            x2="350"
            y2="140"
            stroke="#0284c7"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <line
            x1="720"
            y1="15"
            x2="540"
            y2="140"
            stroke="#0284c7"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <line
            x1="720"
            y1="15"
            x2="720"
            y2="140"
            stroke="#0284c7"
            strokeWidth="0.65"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
          <line
            x1="720"
            y1="15"
            x2="900"
            y2="140"
            stroke="#0284c7"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <line
            x1="720"
            y1="15"
            x2="1090"
            y2="140"
            stroke="#0284c7"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </svg>

        {/* Seamless Bottom Edge Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--nexus-bg-primary))',
          }}
        />
      </div>
    </div>
  );
};

HeroMatrixBackground.displayName = 'HeroMatrixBackground';
