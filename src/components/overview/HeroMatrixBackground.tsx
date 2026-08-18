import React from 'react';

/**
 * Nexus LAB AI — Dotted Matrix Visual Background System
 * Purely decorative substrate layer representing distributed systems architecture.
 * Strict Light Theme: Cool cyan/slate matrix nodes on crisp white/pale surface with subtle warm accent.
 */
export const HeroMatrixBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Light Shimmer (Very Subtle Cool Blue/Cyan Vignette) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* 2. Base Dotted Matrix Grid Pattern (16px Grid, 2px Dots, Ultra-Low Opacity) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="nexus-hero-dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--nexus-text-primary)" fillOpacity="0.3" />
          </pattern>
          <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
          </linearGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#nexus-hero-dot-grid)" mask="url(#grid-mask)" />
      </svg>

      {/* 3. Dynamic Architectural Intelligence Nodes & Ultra-Thin Connecting Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Glow Filters */}
          <filter id="node-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="node-glow-amber" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Linear Gradients for System Connection Lines */}
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ultra-Thin Sparse Connection Lines (0.75px weight) */}
        <g className="nexus-connection-lines opacity-60">
          <line
            x1="180"
            y1="140"
            x2="360"
            y2="100"
            stroke="url(#line-grad-1)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
          <line x1="360" y1="100" x2="540" y2="180" stroke="url(#line-grad-1)" strokeWidth="0.75" />
          <line
            x1="540"
            y1="180"
            x2="780"
            y2="120"
            stroke="url(#line-grad-1)"
            strokeWidth="0.75"
            strokeDasharray="6 3"
          />
          <line x1="780" y1="120" x2="960" y2="200" stroke="url(#line-grad-1)" strokeWidth="0.75" />
          <line
            x1="960"
            y1="200"
            x2="1080"
            y2="150"
            stroke="url(#line-grad-1)"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />

          {/* Cross Topology Line to Accent Node */}
          <line x1="540" y1="180" x2="680" y2="260" stroke="url(#line-grad-2)" strokeWidth="0.85" />
          <line
            x1="680"
            y1="260"
            x2="780"
            y2="120"
            stroke="url(#line-grad-2)"
            strokeWidth="0.85"
            strokeDasharray="4 4"
          />
          <line
            x1="280"
            y1="280"
            x2="540"
            y2="180"
            stroke="url(#line-grad-1)"
            strokeWidth="0.75"
            strokeDasharray="5 5"
          />
        </g>

        {/* Dynamic Architectural Intelligence Nodes */}
        <g className="nexus-matrix-nodes">
          {/* Node 1: Left Anchor */}
          <circle cx="180" cy="140" r="3" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="180" cy="140" r="6" fill="#0284c7" fillOpacity="0.15" />

          {/* Node 2: Subsystem Brain */}
          <circle cx="360" cy="100" r="3.5" fill="#0284c7" fillOpacity="0.7" />
          <circle
            cx="360"
            cy="100"
            r="8"
            fill="#0284c7"
            fillOpacity="0.12"
            filter="url(#node-glow-cyan)"
            className="animate-pulse"
          />

          {/* Node 3: Core Nexus Junction */}
          <circle cx="540" cy="180" r="4" fill="#0284c7" fillOpacity="0.8" />
          <circle
            cx="540"
            cy="180"
            r="10"
            fill="#0284c7"
            fillOpacity="0.15"
            filter="url(#node-glow-cyan)"
          />

          {/* Node 4: Warm Accent Synthesis Node (Active Engine) */}
          <circle
            cx="680"
            cy="260"
            r="4.5"
            fill="#d97706"
            fillOpacity="0.85"
            filter="url(#node-glow-amber)"
          />
          <circle
            cx="680"
            cy="260"
            r="12"
            fill="#d97706"
            fillOpacity="0.15"
            className="animate-pulse"
          />

          {/* Node 5: Verification Node */}
          <circle cx="780" cy="120" r="3.5" fill="#0284c7" fillOpacity="0.7" />
          <circle cx="780" cy="120" r="7" fill="#0284c7" fillOpacity="0.15" />

          {/* Node 6: Right Outer Node */}
          <circle cx="960" cy="200" r="3" fill="#0284c7" fillOpacity="0.6" />
          <circle cx="960" cy="200" r="6" fill="#0284c7" fillOpacity="0.12" />

          {/* Node 7: Far Peripheral */}
          <circle cx="1080" cy="150" r="2.5" fill="#0284c7" fillOpacity="0.4" />

          {/* Node 8: Lower Topology Reference */}
          <circle cx="280" cy="280" r="2.5" fill="#0284c7" fillOpacity="0.5" />
        </g>
      </svg>

      {/* 4. Bottom Visual Horizon Field (Subtle Light Theme Engine Mesh & Fade) */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 opacity-30"
        style={{
          background:
            'linear-gradient(to top, rgba(224, 242, 254, 0.4) 0%, rgba(240, 249, 255, 0.1) 60%, transparent 100%)',
          borderBottom: '1px solid var(--nexus-border-subtle)',
        }}
      />
    </div>
  );
};

HeroMatrixBackground.displayName = 'HeroMatrixBackground';
