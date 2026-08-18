import React from 'react';
import { Card } from '@/components/ui/Card';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';

export const MissionSection: React.FC = () => {
  const { identity } = OVERVIEW_CONTENT;

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Mission Card */}
      <Card variant="bordered" padding="lg" className="bg-[var(--nexus-bg-primary)]">
        <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
          Institutional Mandate
        </span>
        <p className="nexus-h3 mt-3 leading-snug font-semibold text-[var(--nexus-text-primary)]">
          {identity.missionStatement}
        </p>
      </Card>

      {/* Explicit Boundary Rules Grid */}
      <div className="flex flex-col gap-3">
        <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
          Boundary Constraints & Non-Identity
        </span>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {identity.boundaries.map((boundary, index) => (
            <Card
              key={index}
              variant="default"
              padding="md"
              className="flex flex-col gap-2 bg-[var(--nexus-bg-secondary)]"
            >
              <span className="nexus-code-inline w-fit text-xs">0{index + 1}</span>
              <p className="nexus-body-sm mt-1 font-medium text-[var(--nexus-text-secondary)]">
                {boundary}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

MissionSection.displayName = 'MissionSection';
