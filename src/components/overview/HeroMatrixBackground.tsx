import React from 'react';

/**
 * Nexus LAB AI — Dotted Matrix Visual Substrate
 * Professional architectural network framing the outer canvas while preserving
 * a clean, high-contrast central reading zone for the Hero content.
 */
export const HeroMatrixBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Radiant Light Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 10%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.4) 45%, rgba(255, 255, 255, 0) 80%)',
        }}
      />

      {/* 2. Crisp Dotted Matrix Pattern with Center Reading Clearance */}
      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="nexus-matrix-grid-pro" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#0f172a" fillOpacity="0.25" />
          </pattern>
          {/* Mask that clears center so text is 100% crisp, while keeping dots prominent on sides */}
          <radialGradient id="center-clearance" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
          </radialGradient>
          <mask id="hero-grid-mask">
            <rect width="100%" height="100%" fill="url(#center-clearance)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#nexus-matrix-grid-pro)"
          mask="url(#hero-grid-mask)"
        />
      </svg>

      {/* 3. Outer Constellation Nodes & Network Vectors (Framing Left & Right Wings) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Node Glow Filters */}
          <filter id="pro-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="pro-glow-indigo" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="pro-glow-amber" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Gradients for Lines */}
          <linearGradient id="vector-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="vector-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="vector-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* LEFT WING CONSTELLATION (Nodes x: 50–350) */}
        <g className="opacity-80">
          <line x1="80" y1="160" x2="200" y2="100" stroke="url(#vector-left)" strokeWidth="0.85" />
          <line
            x1="200"
            y1="100"
            x2="290"
            y2="220"
            stroke="url(#vector-left)"
            strokeWidth="0.85"
            strokeDasharray="4 4"
          />
          <line x1="290" y1="220" x2="140" y2="320" stroke="url(#vector-left)" strokeWidth="0.85" />
          <line
            x1="140"
            y1="320"
            x2="260"
            y2="440"
            stroke="url(#vector-left)"
            strokeWidth="0.85"
            strokeDasharray="5 3"
          />
          <line x1="290" y1="220" x2="380" y2="160" stroke="url(#vector-left)" strokeWidth="0.85" />
          <line
            x1="200"
            y1="100"
            x2="380"
            y2="160"
            stroke="url(#vector-left)"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />
        </g>

        {/* TOP ARCHITECTURAL SPAN (Arching high above text) */}
        <g className="opacity-70">
          <line
            x1="380"
            y1="160"
            x2="560"
            y2="70"
            stroke="url(#vector-top)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
          <line x1="560" y1="70" x2="880" y2="70" stroke="url(#vector-top)" strokeWidth="0.75" />
          <line
            x1="880"
            y1="70"
            x2="1060"
            y2="160"
            stroke="url(#vector-top)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        </g>

        {/* RIGHT WING CONSTELLATION (Nodes x: 1090–1390) */}
        <g className="opacity-80">
          <line
            x1="1060"
            y1="160"
            x2="1160"
            y2="90"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
          />
          <line
            x1="1160"
            y1="90"
            x2="1280"
            y2="200"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
            strokeDasharray="4 4"
          />
          <line
            x1="1060"
            y1="160"
            x2="1180"
            y2="280"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
          />
          <line
            x1="1180"
            y1="280"
            x2="1360"
            y2="340"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
            strokeDasharray="6 3"
          />
          <line
            x1="1180"
            y1="280"
            x2="1240"
            y2="450"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
          />
          <line
            x1="1280"
            y1="200"
            x2="1380"
            y2="140"
            stroke="url(#vector-right)"
            strokeWidth="0.85"
          />
        </g>

        {/* TOPOLOGICAL INTELLIGENCE NODES */}
        <g>
          {/* Left Wing Nodes */}
          <circle cx="80" cy="160" r="3" fill="#0284c7" fillOpacity="0.75" />
          <circle
            cx="200"
            cy="100"
            r="4.5"
            fill="#0284c7"
            fillOpacity="0.9"
            filter="url(#pro-glow-cyan)"
          />
          <circle cx="200" cy="100" r="10" fill="#0284c7" fillOpacity="0.15" />
          <circle
            cx="290"
            cy="220"
            r="4"
            fill="#6366f1"
            fillOpacity="0.85"
            filter="url(#pro-glow-indigo)"
          />
          <circle cx="140" cy="320" r="3.5" fill="#0284c7" fillOpacity="0.7" />
          <circle cx="260" cy="440" r="3" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="380" cy="160" r="3.5" fill="#0284c7" fillOpacity="0.8" />

          {/* Top Span Nodes */}
          <circle cx="560" cy="70" r="3" fill="#6366f1" fillOpacity="0.75" />
          <circle cx="880" cy="70" r="3" fill="#6366f1" fillOpacity="0.75" />

          {/* Right Wing Nodes */}
          <circle cx="1060" cy="160" r="3.5" fill="#0284c7" fillOpacity="0.8" />
          <circle
            cx="1160"
            cy="90"
            r="4.5"
            fill="#0284c7"
            fillOpacity="0.9"
            filter="url(#pro-glow-cyan)"
          />
          <circle cx="1160" cy="90" r="10" fill="#0284c7" fillOpacity="0.15" />
          <circle
            cx="1280"
            cy="200"
            r="4"
            fill="#6366f1"
            fillOpacity="0.85"
            filter="url(#pro-glow-indigo)"
          />
          <circle
            cx="1180"
            cy="280"
            r="4.5"
            fill="#d97706"
            fillOpacity="0.9"
            filter="url(#pro-glow-amber)"
          />
          <circle
            cx="1180"
            cy="280"
            r="12"
            fill="#d97706"
            fillOpacity="0.18"
            className="animate-pulse"
          />
          <circle cx="1360" cy="340" r="3" fill="#0284c7" fillOpacity="0.65" />
          <circle cx="1240" cy="450" r="3" fill="#0284c7" fillOpacity="0.55" />
          <circle cx="1380" cy="140" r="2.5" fill="#0284c7" fillOpacity="0.6" />

          {/* Micro Accent Amber Sparks */}
          <circle cx="150" cy="90" r="2" fill="#d97706" fillOpacity="0.65" />
          <circle cx="340" cy="300" r="2.2" fill="#d97706" fillOpacity="0.6" />
          <circle cx="1100" cy="380" r="2" fill="#d97706" fillOpacity="0.65" />
          <circle cx="1320" cy="80" r="2.2" fill="#d97706" fillOpacity="0.6" />
        </g>
      </svg>

      {/* 4. Bottom Horizon Engine Mesh with Ambient Color Wave */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-56 overflow-hidden">
        {/* Soft Ambient Horizon Light */}
        <div
          className="absolute bottom-0 left-1/2 h-32 w-4/5 -translate-x-1/2 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 65% 90% at 50% 100%, rgba(14, 165, 233, 0.35) 0%, rgba(99, 102, 241, 0.2) 45%, transparent 80%)',
          }}
        />

        {/* Curved Perspective Horizon Grid SVG */}
        <svg
          className="absolute bottom-0 left-1/2 h-48 w-[1600px] -translate-x-1/2 opacity-30"
          viewBox="0 0 1600 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elliptical Horizon Arcs */}
          <path d="M0 180 Q800 15 1600 180" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.5" />
          <path
            d="M60 180 Q800 40 1540 180"
            stroke="#0284c7"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <path
            d="M140 180 Q800 70 1460 180"
            stroke="#6366f1"
            strokeWidth="0.75"
            strokeOpacity="0.35"
            strokeDasharray="6 4"
          />
          <path
            d="M240 180 Q800 105 1360 180"
            stroke="#0284c7"
            strokeWidth="0.75"
            strokeOpacity="0.3"
          />
          <path
            d="M360 180 Q800 140 1240 180"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />

          {/* Perspective Longitude Rays */}
          <line
            x1="800"
            y1="15"
            x2="350"
            y2="180"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="15"
            x2="580"
            y2="180"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="15"
            x2="800"
            y2="180"
            stroke="#0ea5e9"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="3 3"
          />
          <line
            x1="800"
            y1="15"
            x2="1020"
            y2="180"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <line
            x1="800"
            y1="15"
            x2="1250"
            y2="180"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
        </svg>

        {/* Seamless Bottom Edge Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-12"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--nexus-bg-primary))',
          }}
        />
      </div>
    </div>
  );
};

HeroMatrixBackground.displayName = 'HeroMatrixBackground';
