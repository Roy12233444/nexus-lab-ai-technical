import React from 'react';
import clsx from 'clsx';
import { EvidenceStatus } from '@/types/evidence';
import { getEvidenceMetadata } from '@/data/evidenceRegistry';
import { ValidationBadge } from './ValidationBadge';

export interface EvidenceStatusProps {
  status: EvidenceStatus;
  showDescription?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const EvidenceStatusComponent: React.FC<EvidenceStatusProps> = ({
  status,
  showDescription = false,
  size = 'md',
  className,
}) => {
  const meta = getEvidenceMetadata(status);

  return (
    <div
      className={clsx('inline-flex flex-col gap-1', className)}
      role="region"
      aria-label={`Evidence Status: ${meta.label}`}
    >
      <div className="flex items-center gap-2">
        <ValidationBadge status={status} size={size} />
        <span className="nexus-meta-label text-[var(--nexus-text-muted)]">{meta.label}</span>
      </div>
      {showDescription && (
        <p className="nexus-body-sm mt-0.5 text-xs text-[var(--nexus-text-secondary)]">
          {meta.description}
        </p>
      )}
    </div>
  );
};

EvidenceStatusComponent.displayName = 'EvidenceStatus';

export { EvidenceStatusComponent as EvidenceStatus };
