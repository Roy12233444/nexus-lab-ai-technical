import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge, BadgeVariant } from '@/components/ui/Badge';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { ResearchProgramRecord } from '@/types/overview';

export const StateMatrixSection: React.FC = () => {
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
    <Card
      variant="bordered"
      padding="none"
      className="overflow-hidden bg-[var(--nexus-bg-primary)]"
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--nexus-border-default)] bg-[var(--nexus-bg-secondary)]">
              <th className="px-4 py-3 font-semibold text-[var(--nexus-text-primary)]">Program</th>
              <th className="px-4 py-3 font-semibold text-[var(--nexus-text-primary)]">
                Maturity State
              </th>
              <th className="px-4 py-3 font-semibold text-[var(--nexus-text-primary)]">
                Evidence Level
              </th>
              <th className="px-4 py-3 font-semibold text-[var(--nexus-text-primary)]">
                Temporal Scope
              </th>
              <th className="px-4 py-3 font-semibold text-[var(--nexus-text-primary)]">
                Public Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--nexus-border-default)]">
            {researchPrograms.map((prog) => (
              <tr
                key={prog.id}
                className="nexus-transition-fast hover:bg-[var(--nexus-bg-secondary)]"
              >
                <td className="px-4 py-3.5 font-semibold text-[var(--nexus-text-primary)]">
                  {prog.name}
                  <span className="block text-[11px] font-normal text-[var(--nexus-text-muted)]">
                    {prog.tagline}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span className="nexus-code-inline text-[11px]">{prog.maturity}</span>
                </td>
                <td className="px-4 py-3.5">
                  <Badge variant={getBadgeVariant(prog.evidence)} size="sm">
                    {prog.evidence}
                  </Badge>
                </td>
                <td className="px-4 py-3.5 text-[var(--nexus-text-secondary)]">
                  {prog.temporalState}
                </td>
                <td className="px-4 py-3.5 font-medium text-[var(--nexus-text-secondary)]">
                  {prog.publicRelevance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

StateMatrixSection.displayName = 'StateMatrixSection';
