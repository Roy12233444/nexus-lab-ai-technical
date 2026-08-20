import React from 'react';
import { CANONICAL_TECHNOLOGY_REGISTRY } from '@/content/technology/technology';
import { TechnologyHeroVisual } from './TechnologyHeroVisual';

interface TechnologyHeroSectionProps {
  onNavigate?: (href: string) => void;
}

export const TechnologyHeroSection: React.FC<TechnologyHeroSectionProps> = ({ onNavigate }) => {
  const { identity } = CANONICAL_TECHNOLOGY_REGISTRY;

  return (
    <div
      className="relative w-full border-b border-slate-200 bg-white py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Subtle Coordinate Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Asymmetric Technical Narrative */}
          <div className="space-y-6 lg:col-span-7">
            {/* Active Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 font-mono text-xs text-sky-800 shadow-sm">
              <span className="bg-nexus-cyan h-2 w-2 animate-pulse rounded-full" />
              <span className="font-semibold tracking-wider">● TECHNOLOGY TRACK : ACTIVE</span>
            </div>

            {/* Main Single Page Heading */}
            <div className="space-y-2">
              <span className="block font-mono text-xs font-bold tracking-widest text-slate-500 uppercase">
                Nexus LAB AI Technology
              </span>
              <h1
                id="tech-hero-heading"
                className="text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Engineering From{' '}
                <span className="from-nexus-cyan to-nexus-blue bg-gradient-to-r via-sky-600 bg-clip-text text-transparent">
                  First Principles
                </span>
              </h1>
            </div>

            {/* Declaration Lead Statement */}
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-slate-600 sm:text-xl">
              {identity.declaration}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technology-architecture"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('technology-architecture')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors"
              >
                Explore 3-Tier Architecture
                <span aria-hidden="true">↓</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/research');
                  } else {
                    document.getElementById('technology-domains')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors"
              >
                Research Vectors
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Technical Information Dock (4 Items) */}
            <div className="grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
              <div className="space-y-1">
                <span className="block font-mono text-[11px] text-slate-400 uppercase">
                  Reasoning
                </span>
                <span className="block text-sm font-semibold text-slate-800">System-2 Solver</span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[11px] text-slate-400 uppercase">
                  Execution
                </span>
                <span className="block text-sm font-semibold text-slate-800">4-Layer Harness</span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[11px] text-slate-400 uppercase">
                  Persistence
                </span>
                <span className="block text-sm font-semibold text-slate-800">Chiranjeevi Rust</span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[11px] text-slate-400 uppercase">
                  Space OS
                </span>
                <span className="block text-sm font-semibold text-slate-800">Delay-Tolerant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Topology Visualization */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <TechnologyHeroVisual />
          </div>
        </div>
      </div>
    </div>
  );
};
