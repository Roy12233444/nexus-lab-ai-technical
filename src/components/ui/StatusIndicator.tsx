import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { EvidenceStatus, RuntimeStatus } from '@/types/evidence';

export type IndicatorStatus =
  | 'verified'
  | 'implemented'
  | 'experimental'
  | 'hypothesis'
  | 'active'
  | 'offline'
  | 'paused'
  | 'research'
  | EvidenceStatus
  | RuntimeStatus;

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: IndicatorStatus;
  label?: string;
  pulse?: boolean;
  size?: 'sm' | 'md';
}

export const StatusIndicator = forwardRef<HTMLSpanElement, StatusIndicatorProps>(
  ({ status = 'active', label, pulse = false, size = 'md', className, ...props }, ref) => {
    const dotSizes = {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
    };

    const normalizedStatus = String(status).toLowerCase();

    const statusColors: Record<string, string> = {
      verified: 'bg-[var(--nexus-evidence-verified)]',
      implemented: 'bg-[var(--nexus-evidence-implemented)]',
      experimental: 'bg-[var(--nexus-evidence-experimental)]',
      hypothesis: 'bg-[var(--nexus-evidence-hypothesis)]',
      active: 'bg-emerald-500',
      offline: 'bg-slate-400',
      paused: 'bg-amber-500',
      research: 'bg-indigo-500',
    };

    const activeColor = statusColors[normalizedStatus] || 'bg-slate-400';

    return (
      <span
        ref={ref}
        className={clsx('inline-flex items-center gap-2 select-none', className)}
        role="status"
        aria-label={label || String(status)}
        {...props}
      >
        <span className="relative flex items-center justify-center">
          {pulse && (
            <span
              className={clsx(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                activeColor
              )}
            />
          )}
          <span
            className={clsx('relative inline-flex rounded-full', dotSizes[size], activeColor)}
          />
        </span>
        {label && <span className="nexus-meta-label font-medium">{label}</span>}
      </span>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';
