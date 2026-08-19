import React from 'react';
import { CANONICAL_RESEARCH_REGISTRY } from '@/content/research/research';
import { ResearchHeroVisual } from './ResearchHeroVisual';

export interface ResearchHeroSectionProps {
  onNavigatePortfolio?: () => void;
  onNavigateTruthTable?: () => void;
}

export const ResearchHeroSection: React.FC<ResearchHeroSectionProps> = ({
  onNavigatePortfolio,
  onNavigateTruthTable,
}) => {
  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projectCount = Object.keys(CANONICAL_RESEARCH_REGISTRY.projects).length;

  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-white text-slate-900">
      {/* 1. Spatial Vector Field Background */}
      <ResearchHeroVisual />

      {/* 2. Structured Foreground Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-6 py-12 lg:px-8">
        {/* Top Meta Status Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 font-mono text-xs font-medium text-sky-800 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600"></span>
            </span>
            <span>RESEARCH TRACK : ACTIVE</span>
          </div>
        </div>

        {/* Central Identity & Lead Typography */}
        <div className="my-auto max-w-2xl py-12">
          <div className="mb-4 inline-block font-mono text-xs font-semibold tracking-widest text-sky-700 uppercase">
            Nexus LAB AI Research
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Sovereign Research <br />
            <span className="bg-gradient-to-r from-sky-700 via-sky-800 to-slate-900 bg-clip-text text-transparent">
              Vectors
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Investigating foundational failure modes in autonomous execution, durable memory, AI
            safety governance, and distributed multi-orbital operating systems.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (onNavigatePortfolio) onNavigatePortfolio();
                else handleScrollTo('research-portfolio');
              }}
              className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:outline-none"
            >
              Explore Portfolio →
            </button>

            <button
              onClick={() => {
                if (onNavigateTruthTable) onNavigateTruthTable();
                else handleScrollTo('research-evidence-matrix');
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:outline-none"
            >
              View Truth Table
            </button>
          </div>
        </div>

        {/* Bottom Technical Telemetry Dock */}
        <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4">
          <div>
            <div className="font-mono text-xs tracking-wider text-slate-500 uppercase">
              Research Vectors
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900">
              {projectCount} Sovereign Programs
            </div>
          </div>

          <div>
            <div className="font-mono text-xs tracking-wider text-slate-500 uppercase">
              Harness Execution
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900">
              1-Hr Chaos Soak Verified
            </div>
          </div>

          <div>
            <div className="font-mono text-xs tracking-wider text-slate-500 uppercase">
              Memory Substrate
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900">
              Phase 1 Rust Core Verified
            </div>
          </div>

          <div>
            <div className="font-mono text-xs tracking-wider text-slate-500 uppercase">
              Space OS Topology
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900">
              Delay-Tolerant Blueprint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
