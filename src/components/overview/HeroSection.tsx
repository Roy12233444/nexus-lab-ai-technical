import React from 'react';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';
import { ArrowRight, Boxes, Cpu, Atom, Infinity as InfinityIcon, Compass } from 'lucide-react';

export interface HeroSectionProps {
  onExplorePrograms?: () => void;
  onExploreArchitecture?: () => void;
  onExploreEngine?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onExploreArchitecture,
  onExploreEngine,
}) => {
  const metricCards = [
    {
      icon: <Boxes className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      label: 'Research Programs',
      value: '04+',
      subtext: 'Active Tracks',
      accentColor: 'border-t-sky-500',
    },
    {
      icon: <Cpu className="h-5 w-5 text-amber-500" aria-hidden="true" />,
      label: 'Systems in Build',
      value: '12+',
      subtext: 'Across Domains',
      accentColor: 'border-t-amber-500',
    },
    {
      icon: <Atom className="h-5 w-5 text-indigo-600" aria-hidden="true" />,
      label: 'Evidence Driven',
      value: '100%',
      subtext: 'Epistemic Integrity',
      accentColor: 'border-t-indigo-500',
    },
    {
      icon: <InfinityIcon className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      label: 'Long Horizon',
      value: '∞',
      subtext: 'Future Focus',
      accentColor: 'border-t-sky-500',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[var(--nexus-bg-primary)] pt-12 pb-16 md:pt-20 md:pb-28">
      {/* 1. Dotted Matrix Full-Width Visual Substrate */}
      <HeroMatrixBackground />

      {/* 2. Centered Professional Semantic Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Top Categorical Track Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/70 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider text-sky-800 uppercase">
            <span>RESEARCH</span>
            <span className="text-amber-500">&bull;</span>
            <span>ENGINEERING</span>
            <span className="text-amber-500">&bull;</span>
            <span>VALIDATION</span>
            <span className="text-amber-500">&bull;</span>
            <span>EVIDENCE</span>
            <span className="text-amber-500">&bull;</span>
            <span>TECHNOLOGY</span>
          </div>
        </div>

        {/* Hero Brand Title */}
        <h1 className="mt-6 font-sans text-5xl leading-[1.05] font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5rem]">
          NEXUS LAB AI
        </h1>

        {/* Subtitle Positioning */}
        <h2 className="mt-3 text-xl font-normal tracking-tight text-slate-600 sm:text-2xl md:text-3xl">
          AI Systems Innovation Company
        </h2>

        {/* Subtle Refined Horizontal Divider */}
        <div className="my-6 flex w-48 items-center justify-center gap-2" aria-hidden="true">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <div className="h-1.5 w-1.5 rotate-45 bg-sky-500" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-300 to-transparent" />
        </div>

        {/* Supporting Institutional Statement */}
        <p className="max-w-2xl text-base leading-relaxed font-normal text-slate-600 md:text-lg">
          We research, engineer, and validate intelligent systems that are durable, trustworthy, and
          built for the future.
        </p>

        {/* Action Trigger Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none active:bg-sky-800"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-sky-600/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none active:bg-sky-100"
          >
            <span>RESEARCH PROGRAMS</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Secondary Navigation Hook */}
        <button
          type="button"
          onClick={() => {
            if (onExploreEngine) onExploreEngine();
            else {
              document.getElementById('innovation-engine')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="nexus-transition-fast mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-500 hover:text-sky-600"
        >
          <Compass className="h-4 w-4 text-sky-600" aria-hidden="true" />
          <span>Enter the Nexus Innovation Engine</span>
        </button>

        {/* 4 Bottom Architectural Metric Cards */}
        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricCards.map((card, idx) => (
            <div
              key={idx}
              className={`nexus-transition-fast relative flex items-center gap-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 p-4 text-left shadow-sm backdrop-blur-md hover:border-sky-300 hover:shadow-md ${card.accentColor} border-t-2`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 shadow-xs">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-slate-500">{card.label}</span>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    {card.value}
                  </span>
                  <span className="text-xs font-medium text-slate-600">{card.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';
