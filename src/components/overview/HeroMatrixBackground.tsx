import React from 'react';

/**
 * Nexus LAB AI — 3D Isometric Intelligence Network Substrate
 * Implements the exact architectural perspective visual from the reference design:
 * - Pure light laboratory background (#FFFFFF / #F8FAFC)
 * - Perspective dotted grid on the right canvas
 * - Floating isometric glass/frost computing nodes with light/shadow facets
 * - Central elevated luminous intelligence cube with vertical cyan energy beams & glowing pedestal
 * - Multi-tiered topological constellation vectors with glowing cyan, blue, and rare amber nodes
 */
export const HeroMatrixBackground: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Ambient Laboratory Lighting Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 75% 50%, rgba(224, 242, 254, 0.45) 0%, rgba(240, 249, 255, 0.25) 50%, #ffffff 85%)',
        }}
      />

      {/* 2. Full-Width 3D Perspective Vector Canvas */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Gaussian Blur Glow Filters */}
          <filter id="iso-glow-cyan" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="iso-glow-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="iso-glow-amber" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Gradients for Isometric Cube Facets */}
          <linearGradient id="cube-top-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="cube-left-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="cube-right-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.7" />
          </linearGradient>

          {/* Central Hero Cube Glass Facets */}
          <linearGradient id="hero-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hero-cube-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="hero-cube-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.75" />
          </linearGradient>

          {/* Luminescent Pedestal Gradient */}
          <linearGradient id="pedestal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
          </linearGradient>

          {/* Vertical Energy Beam Gradient */}
          <linearGradient id="energy-beam" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </linearGradient>

          {/* Perspective Dotted Matrix Pattern */}
          <pattern id="iso-dot-pattern" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#94a3b8" fillOpacity="0.28" />
          </pattern>
        </defs>

        {/* 3. PERSPECTIVE DOTTED MATRIX FIELD (Right & Center-Right Canvas) */}
        <g opacity="0.65">
          <path
            d="M 500 0 L 1600 0 L 1600 900 L 400 900 Z"
            fill="url(#iso-dot-pattern)"
            mask="url(#matrix-fade-mask)"
          />
          <mask id="matrix-fade-mask">
            <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000" stopOpacity="0" />
              <stop offset="35%" stopColor="#fff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fff" stopOpacity="1" />
            </linearGradient>
            <rect x="0" y="0" width="1600" height="900" fill="url(#fade-left)" />
          </mask>
        </g>

        {/* 4. ISOMETRIC TOPOLOGICAL NETWORK LINES */}
        <g opacity="0.45" stroke="#94a3b8" strokeWidth="0.75">
          {/* Outer Mesh Connections */}
          <line
            x1="600"
            y1="520"
            x2="800"
            y2="600"
            stroke="#0284c7"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />
          <line x1="800" y1="600" x2="1140" y2="580" stroke="#0284c7" strokeOpacity="0.35" />
          <line x1="1140" y1="580" x2="1360" y2="690" stroke="#94a3b8" strokeOpacity="0.3" />
          <line
            x1="800"
            y1="600"
            x2="820"
            y2="760"
            stroke="#94a3b8"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />

          {/* Mid-Plane Network Vectors */}
          <line x1="720" y1="410" x2="940" y2="480" stroke="#0284c7" strokeOpacity="0.4" />
          <line x1="940" y1="480" x2="1140" y2="580" stroke="#0284c7" strokeOpacity="0.5" />
          <line
            x1="940"
            y1="480"
            x2="1140"
            y2="440"
            stroke="#0284c7"
            strokeOpacity="0.4"
            strokeDasharray="3 3"
          />
          <line x1="1140" y1="440" x2="1380" y2="490" stroke="#0284c7" strokeOpacity="0.35" />
          <line x1="1380" y1="490" x2="1500" y2="430" stroke="#94a3b8" strokeOpacity="0.25" />

          {/* Central Cube Hub Rays */}
          <line
            x1="1140"
            y1="580"
            x2="1140"
            y2="440"
            stroke="#38bdf8"
            strokeOpacity="0.6"
            strokeWidth="1"
          />
          <line x1="1140" y1="580" x2="1240" y2="340" stroke="#0284c7" strokeOpacity="0.4" />
          <line
            x1="1140"
            y1="440"
            x2="1240"
            y2="340"
            stroke="#0284c7"
            strokeOpacity="0.35"
            strokeDasharray="4 4"
          />
          <line x1="1240" y1="340" x2="1420" y2="380" stroke="#94a3b8" strokeOpacity="0.3" />
          <line x1="1240" y1="340" x2="1200" y2="170" stroke="#94a3b8" strokeOpacity="0.25" />
          <line
            x1="1200"
            y1="170"
            x2="1400"
            y2="240"
            stroke="#94a3b8"
            strokeOpacity="0.25"
            strokeDasharray="3 3"
          />

          {/* Background Distant Nodes Lines */}
          <line x1="620" y1="330" x2="720" y2="410" stroke="#94a3b8" strokeOpacity="0.25" />
          <line
            x1="720"
            y1="410"
            x2="800"
            y2="280"
            stroke="#94a3b8"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />
          <line x1="800" y1="280" x2="980" y2="340" stroke="#94a3b8" strokeOpacity="0.25" />
          <line x1="980" y1="340" x2="1140" y2="440" stroke="#0284c7" strokeOpacity="0.3" />
          <line x1="980" y1="340" x2="1080" y2="200" stroke="#94a3b8" strokeOpacity="0.2" />
        </g>

        {/* 5. FLOATING 3D ISOMETRIC COMPUTATIONAL NODES (Background & Midground) */}

        {/* Node 1: Left Foreground Small Node (x: 600, y: 720) */}
        <g transform="translate(600, 720) scale(0.65)" opacity="0.8">
          <polygon
            points="0,-20 20,-10 0,0 -20,-10"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-20,-10 0,0 0,22 -20,12"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 20,-10 20,12 0,22"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 2: Left Midground Node (x: 800, y: 590) */}
        <g transform="translate(800, 590) scale(0.85)" opacity="0.85">
          <polygon
            points="0,-24 24,-12 0,0 -24,-12"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-24,-12 0,0 0,26 -24,14"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 24,-12 24,14 0,26"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 3: Bottom Center Deep Node (x: 820, y: 840) */}
        <g transform="translate(820, 840) scale(1.1)" opacity="0.9">
          <polygon
            points="0,-28 28,-14 0,0 -28,-14"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.6"
          />
          <polygon
            points="-28,-14 0,0 0,30 -28,16"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.6"
          />
          <polygon
            points="0,0 28,-14 28,16 0,30"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.6"
          />
        </g>

        {/* Node 4: Distant Top Left Node (x: 800, y: 380) */}
        <g transform="translate(800, 380) scale(0.6)" opacity="0.7">
          <polygon
            points="0,-20 20,-10 0,0 -20,-10"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-20,-10 0,0 0,22 -20,12"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 20,-10 20,12 0,22"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 5: Distant Center Top Node (x: 980, y: 360) */}
        <g transform="translate(980, 360) scale(0.55)" opacity="0.65">
          <polygon
            points="0,-20 20,-10 0,0 -20,-10"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-20,-10 0,0 0,22 -20,12"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 20,-10 20,12 0,22"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 6: Upper Right Background Node (x: 1200, y: 300) */}
        <g transform="translate(1200, 300) scale(0.75)" opacity="0.75">
          <polygon
            points="0,-22 22,-11 0,0 -22,-11"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-22,-11 0,0 0,24 -22,13"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 22,-11 22,13 0,24"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 7: Far Top Right Floating Node (x: 1240, y: 140) */}
        <g transform="translate(1240, 140) scale(0.45)" opacity="0.6">
          <polygon
            points="0,-20 20,-10 0,0 -20,-10"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-20,-10 0,0 0,22 -20,12"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 20,-10 20,12 0,22"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 8: Far Right Foreground Node (x: 1420, y: 370) */}
        <g transform="translate(1420, 370) scale(0.9)" opacity="0.85">
          <polygon
            points="0,-26 26,-13 0,0 -26,-13"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-26,-13 0,0 0,28 -26,15"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 26,-13 26,15 0,28"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* Node 9: Far Right Distant Node (x: 1530, y: 560) */}
        <g transform="translate(1530, 560) scale(0.65)" opacity="0.7">
          <polygon
            points="0,-20 20,-10 0,0 -20,-10"
            fill="url(#cube-top-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="-20,-10 0,0 0,22 -20,12"
            fill="url(#cube-left-light)"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
          <polygon
            points="0,0 20,-10 20,12 0,22"
            fill="url(#cube-right-light)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
        </g>

        {/* 6. HERO CENTRAL INTELLIGENCE CUBE & LUMINESCENT PEDESTAL (Centerpiece) */}
        <g transform="translate(1140, 640)">
          {/* Ambient Glow Aura beneath Pedestal */}
          <ellipse
            cx="0"
            cy="20"
            rx="140"
            ry="70"
            fill="#38bdf8"
            fillOpacity="0.25"
            filter="url(#iso-glow-cyan)"
          />

          {/* Luminous Isometric Pedestal Platform */}
          <polygon
            points="0,-32 100,18 0,68 -100,18"
            fill="url(#pedestal-grad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <polygon points="-100,18 0,68 0,84 -100,34" fill="#0284c7" fillOpacity="0.6" />
          <polygon points="0,68 100,18 100,34 0,84" fill="#0369a1" fillOpacity="0.7" />

          {/* Upward Vertical Luminescence Rays */}
          <g stroke="url(#energy-beam)" strokeWidth="1.2" opacity="0.85">
            <line x1="-60" y1="10" x2="-60" y2="-90" />
            <line x1="-40" y1="20" x2="-40" y2="-80" />
            <line x1="-20" y1="35" x2="-20" y2="-65" />
            <line x1="0" y1="45" x2="0" y2="-55" />
            <line x1="20" y1="35" x2="20" y2="-65" />
            <line x1="40" y1="20" x2="40" y2="-80" />
            <line x1="60" y1="10" x2="60" y2="-90" />
          </g>

          {/* Floating Elevated Hero Cube (y: -110) */}
          <g transform="translate(0, -120) scale(1.65)">
            {/* Top Face */}
            <polygon
              points="0,-34 34,-17 0,0 -34,-17"
              fill="url(#hero-cube-top)"
              stroke="#bae6fd"
              strokeWidth="0.8"
            />
            {/* Left Face */}
            <polygon
              points="-34,-17 0,0 0,38 -34,21"
              fill="url(#hero-cube-left)"
              stroke="#bae6fd"
              strokeWidth="0.8"
            />
            {/* Right Face */}
            <polygon
              points="0,0 34,-17 34,21 0,38"
              fill="url(#hero-cube-right)"
              stroke="#7dd3fc"
              strokeWidth="0.8"
            />
            {/* Internal Shimmer / Core Specular Accent */}
            <line
              x1="-34"
              y1="-17"
              x2="0"
              y2="0"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.9"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="38"
              stroke="#38bdf8"
              strokeWidth="0.8"
              strokeOpacity="0.8"
            />
          </g>
        </g>

        {/* 7. TOPOLOGICAL GLOWING NODES (Cyan, Blue, Amber Accents) */}
        <g>
          {/* Cyan / Sky Glowing Points */}
          <circle
            cx="620"
            cy="330"
            r="3.5"
            fill="#38bdf8"
            fillOpacity="0.9"
            filter="url(#iso-glow-soft)"
          />
          <circle
            cx="720"
            cy="410"
            r="4.5"
            fill="#0284c7"
            fillOpacity="0.9"
            filter="url(#iso-glow-soft)"
          />
          <circle cx="720" cy="410" r="9" fill="#0284c7" fillOpacity="0.15" />
          <circle
            cx="940"
            cy="480"
            r="4"
            fill="#0284c7"
            fillOpacity="0.85"
            filter="url(#iso-glow-soft)"
          />
          <circle
            cx="1140"
            cy="440"
            r="4"
            fill="#38bdf8"
            fillOpacity="0.9"
            filter="url(#iso-glow-soft)"
          />
          <circle
            cx="1380"
            cy="490"
            r="4"
            fill="#0284c7"
            fillOpacity="0.8"
            filter="url(#iso-glow-soft)"
          />
          <circle cx="1500" cy="430" r="3.5" fill="#0284c7" fillOpacity="0.75" />

          {/* Subtle Deep Blue Secondary Nodes */}
          <circle cx="800" cy="280" r="3" fill="#4f8cc9" fillOpacity="0.8" />
          <circle cx="1080" cy="200" r="2.5" fill="#4f8cc9" fillOpacity="0.7" />
          <circle cx="1360" cy="690" r="3" fill="#4f8cc9" fillOpacity="0.7" />

          {/* Rare Warm Amber Signal Nodes (Discovery Accents as in reference image) */}
          <circle
            cx="1040"
            cy="660"
            r="4"
            fill="#f59e0b"
            fillOpacity="0.95"
            filter="url(#iso-glow-amber)"
          />
          <circle cx="1040" cy="660" r="9" fill="#f59e0b" fillOpacity="0.2" />
          <circle
            cx="1450"
            cy="720"
            r="3.5"
            fill="#f59e0b"
            fillOpacity="0.9"
            filter="url(#iso-glow-amber)"
          />
          <circle cx="1450" cy="720" r="8" fill="#f59e0b" fillOpacity="0.18" />
          <circle
            cx="1580"
            cy="440"
            r="3"
            fill="#f59e0b"
            fillOpacity="0.85"
            filter="url(#iso-glow-amber)"
          />
        </g>
      </svg>
    </div>
  );
};

HeroMatrixBackground.displayName = 'HeroMatrixBackground';
