import React from 'react';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';
import { ArrowRight, Boxes, Cpu, Atom, Infinity as InfinityIcon } from 'lucide-react';

export interface HeroSectionProps {
  onExplorePrograms?: () => void;
  onExploreArchitecture?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onExploreArchitecture,
}) => {
  const architecturalCards = [
    {
      icon: <Boxes className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      category: 'RESEARCH',
      description: 'Multi-domain research programs',
      accentBorder: 'border-t-sky-500',
    },
    {
      icon: <Cpu className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      category: 'SYSTEMS',
      description: 'Autonomous systems in development',
      accentBorder: 'border-t-sky-500',
    },
    {
      icon: <Atom className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      category: 'EVIDENCE',
      description: 'Evidence-driven validation',
      accentBorder: 'border-t-sky-500',
    },
    {
      icon: <InfinityIcon className="h-5 w-5 text-sky-600" aria-hidden="true" />,
      category: 'HORIZON',
      description: 'Long-horizon systems research',
      accentBorder: 'border-t-sky-500',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[var(--nexus-bg-primary)] pt-12 pb-16 md:pt-20 md:pb-28">
      {/* 1. Dotted Matrix Full-Width Architectural Substrate */}
      <HeroMatrixBackground />

      {/* 2. Centered Scientific Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Top Categorical System Capsule */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-50/60 px-3.5 py-1.5 shadow-xs backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-600" />
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider text-slate-800 uppercase">
            <span>RESEARCH</span>
            <span className="text-slate-400">&bull;</span>
            <span>ENGINEERING</span>
            <span className="text-slate-400">&bull;</span>
            <span>VALIDATION</span>
            <span className="text-slate-400">&bull;</span>
            <span>EVIDENCE</span>
            <span className="text-slate-400">&bull;</span>
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

        {/* Supporting Institutional Statement */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed font-normal text-slate-600 md:text-lg">
          We research, engineer, and validate intelligent systems that are durable, trustworthy, and
          built for the future.
        </p>

        {/* Primary Action Buttons */}
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none active:bg-sky-800"
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-sky-600/70 bg-white/95 px-6 py-3 text-sm font-semibold text-sky-700 shadow-xs hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none active:bg-sky-100"
          >
            <span>RESEARCH PROGRAMS</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* 4 Architectural Information Cards (Replacing Marketing KPI Cards) */}
        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {architecturalCards.map((card, idx) => (
            <div
              key={idx}
              className={`nexus-transition-fast relative flex items-center gap-3.5 rounded-lg border border-slate-200/80 bg-white/90 p-4 text-left shadow-xs backdrop-blur-sm hover:border-sky-300 hover:shadow-xs ${card.accentBorder} border-t-2`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-sky-100 bg-sky-50/80">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                  {card.category}
                </span>
                <span className="mt-0.5 text-xs leading-snug text-slate-500">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';
