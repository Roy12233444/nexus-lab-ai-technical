import React from 'react';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { Button } from '@/components/ui/Button';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';

export interface HeroSectionProps {
  onExplorePrograms?: () => void;
  onExploreArchitecture?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onExploreArchitecture,
}) => {
  const { identity } = OVERVIEW_CONTENT;

  return (
    <div className="relative w-full overflow-hidden bg-[var(--nexus-bg-primary)] py-16 md:py-24">
      {/* Layer 1: Dotted Matrix Visual Substrate (Decorative, aria-hidden) */}
      <HeroMatrixBackground />

      {/* Layer 2: Semantic Hero Content */}
      <div className="relative z-10 flex flex-col items-start gap-6">
        {/* Monospace Overline Metadata */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="nexus-meta-label text-xs font-semibold tracking-wider text-[var(--nexus-text-muted)]">
            {identity.brandName}
          </span>
          <span className="text-[var(--nexus-border-default)]" aria-hidden="true">
            &bull;
          </span>
          <StatusIndicator status="active" label="CORE ARCHITECTURE : ACTIVE" size="sm" />
        </div>

        {/* Fluid Display Heading */}
        <h1 className="nexus-display max-w-3xl leading-[1.1] font-semibold tracking-tight text-[var(--nexus-text-primary)]">
          {identity.positioning}
        </h1>

        {/* Lead Statement */}
        <p className="nexus-body-lg max-w-2xl text-lg leading-relaxed font-normal text-[var(--nexus-text-secondary)] md:text-xl">
          {identity.missionStatement}
        </p>

        {/* Milestone Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="nexus-code-inline text-xs">01 Foundation 🟢 LOCKED</span>
          <span className="nexus-code-inline text-xs">02 Design System 🟢 LOCKED</span>
          <span className="nexus-code-inline text-xs">03 Website Shell 🟢 LOCKED</span>
          <span className="nexus-code-inline text-xs">04A Overview Core 🟢 ACTIVE</span>
        </div>

        {/* Exploration Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              if (onExploreArchitecture) onExploreArchitecture();
              else {
                document
                  .getElementById('architectural-hierarchy')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            System Architecture
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              if (onExplorePrograms) onExplorePrograms();
              else {
                document
                  .getElementById('research-programs')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Research Programs
          </Button>
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';
