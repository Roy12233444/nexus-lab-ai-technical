import React, { useEffect, useRef, useState } from 'react';

/**
 * Nexus LAB AI — Technology Hero Visual System
 * Phase 04C.5 — Multi-Node Computational Topology & Vector Signal Substrate
 *
 * Visualizes the 6 canonical technology domains as interactive computational nodes
 * with vector signal paths, technical coordinate axes, and telemetry indicators.
 * Fully supports reduced-motion and carries aria-hidden="true".
 */

interface NodePoint {
  id: string;
  name: string;
  code: string;
  x: number;
  y: number;
  color: string;
  signalFreq: number;
}

const TOPOLOGY_NODES: NodePoint[] = [
  {
    id: 'reasoning',
    name: 'REASONING',
    code: 'DOM-01',
    x: 250,
    y: 70,
    color: '#0284c7',
    signalFreq: 1.2,
  },
  {
    id: 'agent_execution',
    name: 'EXECUTION',
    code: 'DOM-02',
    x: 90,
    y: 160,
    color: '#0ea5e9',
    signalFreq: 1.8,
  },
  {
    id: 'memory',
    name: 'MEMORY',
    code: 'DOM-03',
    x: 410,
    y: 160,
    color: '#0284c7',
    signalFreq: 1.5,
  },
  {
    id: 'fault_tolerance',
    name: 'FAULT TOLERANCE',
    code: 'DOM-04',
    x: 120,
    y: 290,
    color: '#38bdf8',
    signalFreq: 1.1,
  },
  {
    id: 'safety_governance',
    name: 'SAFETY & GOV',
    code: 'DOM-05',
    x: 380,
    y: 290,
    color: '#0284c7',
    signalFreq: 1.6,
  },
  {
    id: 'distributed_space',
    name: 'SPACE OS',
    code: 'DOM-06',
    x: 250,
    y: 350,
    color: '#0ea5e9',
    signalFreq: 2.0,
  },
];

const SIGNAL_PATHS = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [1, 2],
  [3, 4],
];

export const TechnologyHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('reasoning');
  const [tick, setTick] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check reduced motion preference safely (compatible with SSR/JSDOM)
    const prefersReducedMotion =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    if (prefersReducedMotion) return;

    let frame = 0;
    const loop = () => {
      frame += 0.02;
      setTick(frame);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[500/420] w-full max-w-[540px] rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50/90 to-white/90 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-sm select-none"
    >
      {/* Header Bar with Coordinates and Telemetry */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 font-mono text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="bg-nexus-cyan h-2 w-2 animate-pulse rounded-full" />
          <span className="font-semibold text-slate-700">SUBSTRATE // TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-3">
          <span>6 DOMAINS</span>
          <span className="text-slate-300">|</span>
          <span>18 CAPABILITIES</span>
          <span className="text-slate-300">|</span>
          <span className="text-nexus-cyan font-semibold">T = {tick.toFixed(1)}s</span>
        </div>
      </div>

      {/* SVG Canvas for Vector Topology */}
      <svg
        viewBox="0 0 500 390"
        className="h-full w-full pt-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="techLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid Pattern */}
        <g stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3 3">
          <line x1="50" y1="0" x2="50" y2="390" />
          <line x1="150" y1="0" x2="150" y2="390" />
          <line x1="250" y1="0" x2="250" y2="390" />
          <line x1="350" y1="0" x2="350" y2="390" />
          <line x1="450" y1="0" x2="450" y2="390" />
          <line x1="0" y1="80" x2="500" y2="80" />
          <line x1="0" y1="180" x2="500" y2="180" />
          <line x1="0" y1="280" x2="500" y2="280" />
        </g>

        {/* Central Core Circle */}
        <circle
          cx="250"
          cy="215"
          r="95"
          stroke="#cbd5e1"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="rgba(241, 245, 249, 0.3)"
        />
        <circle
          cx="250"
          cy="215"
          r="40"
          stroke="#0284c7"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
        />
        <text
          x="250"
          y="218"
          textAnchor="middle"
          className="fill-slate-400 font-mono text-[10px] font-semibold tracking-wider"
        >
          SOVEREIGN ENGINE
        </text>

        {/* Connecting Vector Signal Lines */}
        {SIGNAL_PATHS.map(([startIdx, endIdx], i) => {
          const start = TOPOLOGY_NODES[startIdx];
          const end = TOPOLOGY_NODES[endIdx];
          const isPulse = (Math.floor(tick * 2) + i) % 3 === 0;

          return (
            <g key={`path-${i}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#techLineGrad)"
                strokeWidth={isPulse ? 2 : 1.2}
                strokeOpacity={isPulse ? 0.9 : 0.4}
              />
              {/* Flowing Pulse Particle */}
              <circle
                cx={start.x + (end.x - start.x) * ((tick * start.signalFreq) % 1)}
                cy={start.y + (end.y - start.y) * ((tick * start.signalFreq) % 1)}
                r={isPulse ? 3 : 2}
                fill="#0284c7"
                filter="url(#glow)"
              />
            </g>
          );
        })}

        {/* 6 Capability Domain Nodes */}
        {TOPOLOGY_NODES.map((node) => {
          const isHovered = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setActiveNode(node.id)}
            >
              {/* Outer Pulse Ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 24 : 18}
                stroke={node.color}
                strokeWidth="1.5"
                strokeOpacity={isHovered ? 0.8 : 0.3}
                fill="white"
                className="transition-all duration-300"
              />
              {/* Inner Core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 8 : 6}
                fill={node.color}
                filter="url(#glow)"
              />

              {/* Node Code & Name Labels */}
              <text
                x={node.x}
                y={node.y + (node.y > 200 ? 32 : -22)}
                textAnchor="middle"
                className="fill-slate-800 font-mono text-[10px] font-bold tracking-wider"
              >
                {node.name}
              </text>
              <text
                x={node.x}
                y={node.y + (node.y > 200 ? 43 : -11)}
                textAnchor="middle"
                className="fill-slate-400 font-mono text-[9px] font-semibold"
              >
                {node.code}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Footer Diagnostic Bar */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-2 font-mono text-[10px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400">ACTIVE:</span>
          <span className="font-bold text-slate-700 uppercase">{activeNode.replace('_', ' ')}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>PARALLEL VECTORS</span>
          <span className="text-slate-300">•</span>
          <span>ZERO COUPLING</span>
        </div>
      </div>
    </div>
  );
};
