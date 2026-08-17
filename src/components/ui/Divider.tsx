import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', label, className, ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={clsx(
            'inline-block h-full w-[1px] self-stretch bg-[var(--nexus-border-default)]',
            className
          )}
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={clsx('my-4 flex w-full items-center', className)}
          {...props}
        >
          <div className="flex-grow border-t border-[var(--nexus-border-default)]" />
          <span className="nexus-meta-label px-3 text-[var(--nexus-text-muted)]">{label}</span>
          <div className="flex-grow border-t border-[var(--nexus-border-default)]" />
        </div>
      );
    }

    return (
      <hr
        role="separator"
        aria-orientation="horizontal"
        className={clsx(
          'my-4 w-full border-0 border-t border-[var(--nexus-border-default)]',
          className
        )}
        {...(props as React.HTMLAttributes<HTMLHRElement>)}
      />
    );
  }
);

Divider.displayName = 'Divider';
