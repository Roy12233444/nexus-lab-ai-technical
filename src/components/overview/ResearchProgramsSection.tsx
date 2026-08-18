import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge, BadgeVariant } from '@/components/ui/Badge';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { ResearchProgramRecord } from '@/types/overview';

export const ResearchProgramsSection: React.FC = () => {
  const { researchPrograms } = OVERVIEW_CONTENT;

  const getBadgeVariant = (evidence: ResearchProgramRecord['evidence']): BadgeVariant => {
    switch (evidence) {
      case 'VERIFIED':
        return 'verified';
      case 'REPORTED':
        return 'hypothesis';
      case 'DOCUMENTED':
        return 'default';
      case 'OBSERVED':
        return 'experimental';
      default:
        return 'default';
    }
  };

  return (
    <div className="flex flex-col gap-6" id="research-programs">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {researchPrograms.map((prog) => (
          <Card
            key={prog.id}
            variant="default"
            padding="lg"
            className="flex flex-col gap-5 border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]"
          >
            {/* Header: Title + Badges */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <h3 className="nexus-h3 font-semibold text-[var(--nexus-text-primary)]">
                  {prog.name}
                </h3>
                <p className="nexus-meta-label mt-0.5 text-xs text-[var(--nexus-text-muted)]">
                  {prog.tagline}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <span className="nexus-code-inline text-[11px]">{prog.maturity}</span>
                <Badge variant={getBadgeVariant(prog.evidence)} size="sm">
                  {prog.evidence}
                </Badge>
              </div>
            </div>

            {/* Problem & Purpose */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="nexus-meta-label text-[11px] text-[var(--nexus-text-muted)] uppercase">
                  Problem Addressed
                </span>
                <p className="nexus-body-sm mt-1 text-[var(--nexus-text-secondary)]">
                  {prog.problem}
                </p>
              </div>

              <div>
                <span className="nexus-meta-label text-[11px] text-[var(--nexus-text-muted)] uppercase">
                  Current Engineering State
                </span>
                <p className="nexus-body-sm mt-1 font-medium text-[var(--nexus-text-primary)]">
                  {prog.currentState}
                </p>
              </div>
            </div>

            {/* Architecture Layers */}
            {prog.architectureLayers && prog.architectureLayers.length > 0 && (
              <div>
                <span className="nexus-meta-label text-[11px] text-[var(--nexus-text-muted)] uppercase">
                  Subsystem Architecture
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {prog.architectureLayers.map((layer, idx) => (
                    <span
                      key={idx}
                      className="nexus-meta-label rounded border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-secondary)] px-2 py-0.5 text-[11px] text-[var(--nexus-text-secondary)]"
                    >
                      {layer}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Milestones */}
            {prog.verifiedMilestones && prog.verifiedMilestones.length > 0 && (
              <div className="mt-auto border-t border-[var(--nexus-border-default)] pt-3">
                <span className="nexus-meta-label text-[11px] text-[var(--nexus-text-muted)] uppercase">
                  Verified Proof Milestones
                </span>
                <ul className="m-0 mt-1.5 list-inside list-disc space-y-1 p-0">
                  {prog.verifiedMilestones.map((milestone, idx) => (
                    <li
                      key={idx}
                      className="nexus-body-sm text-xs text-[var(--nexus-text-secondary)]"
                    >
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

ResearchProgramsSection.displayName = 'ResearchProgramsSection';
