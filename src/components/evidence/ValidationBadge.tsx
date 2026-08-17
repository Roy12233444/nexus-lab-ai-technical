import React from 'react';
import clsx from 'clsx';
import { CheckCircle2, Wrench, FlaskConical, HelpCircle } from 'lucide-react';
import { EvidenceStatus } from '@/types/evidence';
import { getEvidenceMetadata } from '@/data/evidenceRegistry';
import { Badge } from '@/components/ui/Badge';

export interface ValidationBadgeProps {
  status: EvidenceStatus;
  size?: 'sm' | 'md';
  showIcon?: boolean;
  className?: string;
}

export const ValidationBadge: React.FC<ValidationBadgeProps> = ({
  status,
  size = 'md',
  showIcon = true,
  className,
}) => {
  const meta = getEvidenceMetadata(status);

  const icons = {
    VERIFIED: CheckCircle2,
    IMPLEMENTED: Wrench,
    EXPERIMENTAL: FlaskConical,
    HYPOTHESIS: HelpCircle,
  };

  const IconComponent = icons[status] || HelpCircle;
  const iconSizeClass = size === 'sm' ? 'h-2.5 w-2.5' : 'h-3 w-3';

  return (
    <Badge
      variant={meta.badgeVariant}
      size={size}
      className={clsx('inline-flex items-center font-semibold', className)}
      aria-label={meta.ariaLabel}
    >
      {showIcon && <IconComponent className={clsx(iconSizeClass, 'shrink-0')} aria-hidden="true" />}
      <span>{meta.shortLabel}</span>
    </Badge>
  );
};

ValidationBadge.displayName = 'ValidationBadge';
