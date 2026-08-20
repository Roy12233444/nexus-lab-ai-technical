import React from 'react';
import { getPublicPrimaryPrograms } from '@/content/programs/programs';

/**
 * ProgramsHeroVisual — Light Laboratory Asymmetric Program Topology
 * Renders an abstract, decentralized orbital constellation representing sovereign programs.
 * Strictly avoids any operational execution arrows or pipeline dependencies.
 */
export const ProgramsHeroVisual: React.FC = () => {
  const primaryPrograms = getPublicPrimaryPrograms();

  const coordinates = [
    { x: 20, y: 25, label: 'NALA', code: 'AUTONOMOUS', state: 'IMPLEMENTED' },
    { x: 80, y: 25, label: 'AMP', code: 'PERSISTENCE', state: 'IMPLEMENTED' },
    { x: 20, y: 75, label: 'RTA-GUARD', code: 'SAFETY', state: 'IMPLEMENTED' },
    { x: 80, y: 75, label: 'COSMOS', code: 'SPACE_OS', state: 'PLANNED' },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative flex h-[380px] w-full items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 shadow-inner lg:h-[440px]"
    >
      {/* Background Precision Grid */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="program-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" strokeWidth="0.5" strokeDasharray="2 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#program-grid)" />
      </svg>

      {/* Central Institutional Core Coordinate */}
      <div className="relative z-10 flex flex-col items-center justify-center rounded-xl border border-sky-200 bg-white/90 px-5 py-3 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-500" />
          <span className="font-mono text-xs font-bold tracking-widest text-slate-800 uppercase">
            NEXUS LAB AI
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-500">PROGRAMS SUBSTRATE</span>
      </div>

      {/* Sovereign Nodes (Decentralized Coordinates) */}
      {coordinates.map((coord, idx) => {
        const isPlanned = coord.state === 'PLANNED';
        const program = primaryPrograms[idx];

        return (
          <div
            key={coord.label}
            className="absolute z-20 flex flex-col items-center transition-transform duration-300 hover:scale-105"
            style={{ left: `${coord.x}%`, top: `${coord.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            {/* Coordinate Node Dot */}
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg border shadow-sm backdrop-blur-sm ${
                isPlanned
                  ? 'border-indigo-200 bg-indigo-50/90 text-indigo-700'
                  : 'border-sky-200 bg-sky-50/90 text-sky-700'
              }`}
            >
              <span className="font-mono text-xs font-bold">{coord.label.slice(0, 3)}</span>
            </div>

            {/* Micro Badge */}
            <div className="mt-1.5 flex flex-col items-center">
              <span className="font-mono text-xs font-bold text-slate-800">{coord.label}</span>
              <span
                className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase ${
                  isPlanned
                    ? 'border border-indigo-200 bg-indigo-50 text-indigo-700'
                    : 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                }`}
              >
                {program?.state.maturity || coord.state}
              </span>
            </div>
          </div>
        );
      })}

      {/* Decorative Radial Field Rings (aria-hidden) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full border border-dashed border-slate-300/60 opacity-60" />
        <div className="h-88 w-88 rounded-full border border-slate-200/40 opacity-40" />
      </div>
    </div>
  );
};
