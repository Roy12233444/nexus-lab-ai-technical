import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', className, children, ...props }, ref) => {
    const baseStyles =
      'rounded-[var(--nexus-radius-lg)] bg-[var(--nexus-bg-card)] text-[var(--nexus-text-primary)]';

    const variantStyles = {
      default: 'border border-[var(--nexus-border-default)] shadow-[var(--nexus-shadow-subtle)]',
      elevated: 'border border-[var(--nexus-border-default)] shadow-[var(--nexus-shadow-raised)]',
      bordered: 'border border-[var(--nexus-border-strong)] shadow-[var(--nexus-shadow-none)]',
      interactive:
        'border border-[var(--nexus-border-default)] shadow-[var(--nexus-shadow-subtle)] nexus-transition-fast hover:border-[var(--nexus-border-interactive)] hover:shadow-[var(--nexus-shadow-raised)] cursor-pointer',
    };

    const paddingStyles = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], paddingStyles[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('flex flex-col gap-1.5 pb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={clsx('nexus-h4 font-semibold tracking-tight', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('nexus-body-sm text-[var(--nexus-text-muted)]', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={clsx('pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
