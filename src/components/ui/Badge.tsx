import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { EvidenceStatus } from '@/types/evidence';

export type BadgeVariant =
  | 'verified'
  | 'implemented'
  | 'experimental'
  | 'hypothesis'
  | 'default'
  | 'outline'
  | EvidenceStatus;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center font-medium select-none uppercase tracking-wider rounded-[var(--nexus-radius-full)]';

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-[10px] gap-1',
      md: 'px-2.5 py-1 text-xs gap-1.5',
    };

    const normalizedVariant = String(variant).toLowerCase() as
      'verified' | 'implemented' | 'experimental' | 'hypothesis' | 'default' | 'outline';

    const variantStyles: Record<
      'verified' | 'implemented' | 'experimental' | 'hypothesis' | 'default' | 'outline',
      string
    > = {
      verified:
        'bg-[var(--nexus-evidence-verified-bg)] text-[var(--nexus-evidence-verified-text)] border border-[var(--nexus-evidence-verified-border)]',
      implemented:
        'bg-[var(--nexus-evidence-implemented-bg)] text-[var(--nexus-evidence-implemented-text)] border border-[var(--nexus-evidence-implemented-border)]',
      experimental:
        'bg-[var(--nexus-evidence-experimental-bg)] text-[var(--nexus-evidence-experimental-text)] border border-[var(--nexus-evidence-experimental-border)]',
      hypothesis:
        'bg-[var(--nexus-evidence-hypothesis-bg)] text-[var(--nexus-evidence-hypothesis-text)] border border-[var(--nexus-evidence-hypothesis-border)]',
      default:
        'bg-[var(--nexus-bg-tertiary)] text-[var(--nexus-text-secondary)] border border-[var(--nexus-border-default)]',
      outline:
        'bg-transparent text-[var(--nexus-text-primary)] border border-[var(--nexus-border-strong)]',
    };

    const activeStyle = variantStyles[normalizedVariant] || variantStyles.default;

    return (
      <span
        ref={ref}
        className={clsx(baseStyles, sizeStyles[size], activeStyle, className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
