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
      icon: <Boxes className="h-6 w-6 text-[#0284c7]" aria-hidden="true" />,
      label: 'Research Programs',
      value: '04+',
      subtext: 'Active',
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#d97706]" aria-hidden="true" />,
      label: 'Systems in Build',
      value: '12+',
      subtext: 'Across Domains',
    },
    {
      icon: <Atom className="h-6 w-6 text-[#0284c7]" aria-hidden="true" />,
      label: 'Evidence Driven',
      value: '100%',
      subtext: 'Epistemic Integrity',
    },
    {
      icon: <InfinityIcon className="h-6 w-6 text-[#0284c7]" aria-hidden="true" />,
      label: 'Long Horizon',
      value: '∞',
      subtext: 'Future Focus',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[var(--nexus-bg-primary)] pt-12 pb-16 md:pt-16 md:pb-24">
      {/* 1. Dotted Matrix Full-Width Visual Substrate */}
      <HeroMatrixBackground />

      {/* 2. Centered Semantic Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Top Categorical Track Overline */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#0284c7] uppercase">
          <span>RESEARCH</span>
          <span className="text-[#d97706]">&bull;</span>
          <span>ENGINEERING</span>
          <span className="text-[#d97706]">&bull;</span>
          <span>VALIDATION</span>
          <span className="text-[#d97706]">&bull;</span>
          <span>EVIDENCE</span>
          <span className="text-[#d97706]">&bull;</span>
          <span>TECHNOLOGY</span>
        </div>

        {/* Hero Brand Title */}
        <h1 className="mt-4 font-sans text-5xl font-extrabold tracking-tight text-[var(--nexus-text-primary)] sm:text-6xl md:text-7xl">
          NEXUS LAB AI
        </h1>

        {/* Subtitle Positioning */}
        <h2 className="mt-2 text-xl font-light tracking-normal text-[var(--nexus-text-secondary)] sm:text-2xl md:text-3xl">
          AI Systems Innovation Company
        </h2>

        {/* Subtle Glowing Center Divider */}
        <div className="my-5 flex w-44 items-center justify-center gap-2" aria-hidden="true">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f59e0b]" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#d97706] shadow-[0_0_6px_rgba(217,119,6,0.8)]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f59e0b]" />
        </div>

        {/* Supporting Institutional Statement */}
        <p className="max-w-2xl text-base leading-relaxed font-normal text-[var(--nexus-text-secondary)] md:text-lg">
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--nexus-radius-md)] bg-[#0284c7] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0369a1] focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 focus-visible:outline-none active:bg-[#075985]"
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
            className="nexus-transition-fast inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--nexus-radius-md)] border border-[#0284c7] bg-white px-6 py-3 text-sm font-semibold text-[#0284c7] shadow-sm hover:bg-[#f0f9ff] focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 focus-visible:outline-none active:bg-[#e0f2fe]"
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
          className="nexus-transition-fast mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-[var(--nexus-text-secondary)] hover:text-[#0284c7]"
        >
          <Compass className="h-4 w-4 text-[#0284c7]" aria-hidden="true" />
          <span>Enter the Nexus Innovation Engine</span>
        </button>

        {/* 4 Bottom Architectural Metric Cards */}
        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricCards.map((card, idx) => (
            <div
              key={idx}
              className="nexus-transition-fast flex items-center gap-4 rounded-[var(--nexus-radius-lg)] border border-[var(--nexus-border-default)] bg-white/90 p-4 text-left shadow-sm backdrop-blur-sm hover:border-[var(--nexus-border-strong)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--nexus-radius-md)] border border-[#e0f2fe] bg-[#f0f9ff]">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[var(--nexus-text-muted)]">
                  {card.label}
                </span>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-[var(--nexus-text-primary)]">
                    {card.value}
                  </span>
                  <span className="text-xs font-medium text-[var(--nexus-text-secondary)]">
                    {card.subtext}
                  </span>
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
