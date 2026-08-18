import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';

export const EvidenceSection: React.FC = () => {
  const { claims } = OVERVIEW_CONTENT;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {claims.map((claim) => (
          <Card
            key={claim.id}
            variant="default"
            padding="lg"
            className="flex flex-col gap-4 border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]"
          >
            <div className="flex items-center justify-between">
              <span className="nexus-code-inline text-[11px] uppercase">
                {claim.provenance.authorityTier.replace('_', ' ')}
              </span>
              <Badge variant={claim.evidence === 'VERIFIED' ? 'verified' : 'default'} size="sm">
                {claim.evidence}
              </Badge>
            </div>

            <p className="nexus-body leading-snug font-medium text-[var(--nexus-text-primary)]">
              {claim.statement}
            </p>

            <div className="mt-auto flex flex-col gap-1.5 border-t border-[var(--nexus-border-default)] pt-3 text-xs text-[var(--nexus-text-muted)]">
              <div className="flex items-center justify-between">
                <span className="nexus-meta-label text-[11px]">Artifact / Source:</span>
                <span className="nexus-code-inline text-[11px]">{claim.provenance.sourceId}</span>
              </div>

              {claim.limitations && claim.limitations.length > 0 && (
                <div className="mt-1 text-[11px] text-[var(--nexus-text-secondary)] italic">
                  * Note: {claim.limitations[0]}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

EvidenceSection.displayName = 'EvidenceSection';
