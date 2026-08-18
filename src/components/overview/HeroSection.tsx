import React from 'react';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';
import { ArrowRight, FlaskConical, Boxes, ShieldCheck, Crosshair } from 'lucide-react';

export interface HeroSectionProps {
  onExplorePrograms?: () => void;
  onExploreArchitecture?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onExploreArchitecture,
}) => {
  return (
    <div className="relative min-h-[640px] w-full overflow-hidden bg-[var(--nexus-bg-primary)] pt-10 pb-16 md:pt-14 md:pb-20 lg:min-h-[720px]">
      {/* 1. 3D Isometric Intelligence Network Substrate */}
      <HeroMatrixBackground />

      {/* 2. Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[480px] grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Semantic Brand & Architectural Content */}
          <div className="flex flex-col items-start pt-4 text-left sm:pt-6 lg:col-span-7">
            {/* Top Monospace Overline */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              <span className="h-[2px] w-6 bg-slate-400" aria-hidden="true" />
              <span>NEXUS LAB AI</span>
            </div>

            {/* Main H1 Title (Stacked 2-Line High-Impact Display) */}
            <h1 className="mt-4 font-sans text-4xl leading-[1.08] font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
              AI SYSTEMS
              <br />
              INNOVATION COMPANY
            </h1>

            {/* Lead Narrative Statement */}
            <p className="mt-5 max-w-xl text-base leading-relaxed font-normal text-slate-600 md:text-lg">
              Researching, engineering, and validating durable intelligent-system capabilities.
            </p>

            {/* Core Architecture Status Indicator Tag */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-600 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>CORE ARCHITECTURE : ACTIVE</span>
            </div>

            {/* Primary Action Buttons (Pill Geometry) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (onExploreArchitecture) onExploreArchitecture();
                  else {
                    document
                      .getElementById('architectural-hierarchy')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-all hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 active:bg-slate-950"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onExplorePrograms) onExplorePrograms();
                  else {
                    document
                      .getElementById('research-programs')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-white/95 px-6 py-3 text-xs font-bold tracking-wider text-slate-800 uppercase shadow-xs transition-all hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:bg-slate-100"
              >
                <span>RESEARCH PROGRAMS</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column Spacer (Leaves full visibility for the 3D Isometric Core) */}
          <div className="pointer-events-none hidden h-full lg:col-span-5 lg:block" />
        </div>

        {/* 3. Bottom Architectural Information Dock & Floating Engine Badge */}
        <div className="mt-14 flex flex-col items-stretch justify-between gap-4 sm:mt-16 md:flex-row md:items-center">
          {/* Left Floating Dock (4 Pillars) */}
          <div className="grid grid-cols-1 gap-4 divide-y divide-slate-100/90 rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xs backdrop-blur-md sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:p-4 lg:grid-cols-4">
            {/* 1. Research */}
            <div className="flex items-center gap-3 pr-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <FlaskConical className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  RESEARCH
                </span>
                <span className="text-[11px] leading-tight text-slate-500">First Principles</span>
              </div>
            </div>

            {/* 2. Systems */}
            <div className="flex items-center gap-3 pt-3 pr-2 sm:pt-0 sm:pl-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <Boxes className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  SYSTEMS
                </span>
                <span className="text-[11px] leading-tight text-slate-500">
                  Engineered for Reliability
                </span>
              </div>
            </div>

            {/* 3. Evidence */}
            <div className="flex items-center gap-3 pt-3 pr-2 sm:pt-0 sm:pl-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <ShieldCheck className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  EVIDENCE
                </span>
                <span className="text-[11px] leading-tight text-slate-500">
                  Verified. Transparent. Repeatable.
                </span>
              </div>
            </div>

            {/* 4. Horizon */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <Crosshair className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  HORIZON
                </span>
                <span className="text-[11px] leading-tight text-slate-500">
                  Building for the Future
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Badge (10 System Layers / One Engine) */}
          <div className="flex shrink-0 items-center gap-3 self-end rounded-2xl border border-slate-200/90 bg-white/95 px-5 py-3 text-left shadow-xs backdrop-blur-md md:self-auto">
            <span className="text-3xl font-black tracking-tight text-sky-600">10</span>
            <div className="flex flex-col">
              <span className="text-[10px] leading-tight font-bold tracking-wider text-slate-900 uppercase">
                SYSTEM LAYERS
              </span>
              <span className="text-[9px] leading-tight font-medium tracking-wider text-slate-500 uppercase">
                ONE ENGINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';
