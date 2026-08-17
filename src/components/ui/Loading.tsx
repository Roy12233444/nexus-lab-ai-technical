import React from 'react';
import clsx from 'clsx';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  fullscreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  label = 'Loading...',
  fullscreen = false,
  className,
  ...props
}) => {
  const spinnerSizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-10 w-10 border-3',
  };

  const content = (
    <div
      className={clsx('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-live="polite"
      aria-label={label}
      {...props}
    >
      <div
        className={clsx(
          'animate-spin rounded-full border-[var(--nexus-border-default)] border-t-[var(--nexus-text-primary)]',
          spinnerSizes[size]
        )}
      />
      {label && <span className="nexus-meta-label text-[var(--nexus-text-muted)]">{label}</span>}
      <span className="sr-only">{label}</span>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[var(--nexus-z-overlay)] flex items-center justify-center bg-[var(--nexus-bg-primary)]/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

Loading.displayName = 'Loading';
