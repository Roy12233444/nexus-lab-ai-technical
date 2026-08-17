import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium nexus-transition-fast select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs rounded-[var(--nexus-radius-sm)] gap-1.5',
      md: 'px-4 py-2 text-sm rounded-[var(--nexus-radius-md)] gap-2',
      lg: 'px-6 py-2.5 text-base rounded-[var(--nexus-radius-md)] gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-[var(--nexus-text-primary)] text-[var(--nexus-text-inverse)] hover:bg-slate-800 active:bg-slate-950 focus-visible:ring-[var(--nexus-text-primary)]',
      secondary:
        'bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-primary)] border border-[var(--nexus-border-default)] hover:bg-[var(--nexus-bg-secondary)] hover:border-[var(--nexus-border-strong)] active:bg-[var(--nexus-bg-tertiary)] focus-visible:ring-[var(--nexus-text-primary)]',
      ghost:
        'bg-transparent text-[var(--nexus-text-secondary)] hover:bg-[var(--nexus-bg-secondary)] hover:text-[var(--nexus-text-primary)] active:bg-[var(--nexus-bg-tertiary)] focus-visible:ring-[var(--nexus-text-primary)]',
      danger:
        'bg-[var(--nexus-status-error)] text-[var(--nexus-text-inverse)] hover:bg-red-700 active:bg-red-800 focus-visible:ring-[var(--nexus-status-error)]',
    };

    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={isLoading}
        className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            role="status"
            aria-label="Loading"
          />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
