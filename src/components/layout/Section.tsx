import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  width?: 'reading' | 'narrow' | 'content' | 'wide' | 'full';
  background?: 'primary' | 'secondary' | 'tertiary';
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = 'md',
      width = 'content',
      background = 'primary',
      eyebrow,
      title,
      description,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const spacingStyles = {
      none: 'py-0',
      sm: 'nexus-section-sm',
      md: 'nexus-section',
      lg: 'nexus-section-lg',
    };

    const widthStyles = {
      reading: 'nexus-container-reading',
      narrow: 'nexus-container-narrow',
      content: 'nexus-container',
      wide: 'nexus-container-wide',
      full: 'w-full px-[var(--nexus-gutter)]',
    };

    const backgroundStyles = {
      primary: 'bg-[var(--nexus-bg-primary)]',
      secondary: 'bg-[var(--nexus-bg-secondary)] border-y border-[var(--nexus-border-default)]',
      tertiary: 'bg-[var(--nexus-bg-tertiary)] border-y border-[var(--nexus-border-default)]',
    };

    const hasHeader = Boolean(eyebrow || title || description);

    return (
      <section
        ref={ref}
        className={clsx(backgroundStyles[background], spacingStyles[spacing], className)}
        {...props}
      >
        <div className={widthStyles[width]}>
          {hasHeader && (
            <div className="mb-10 flex flex-col gap-2">
              {eyebrow && <p className="nexus-meta-label">{eyebrow}</p>}
              {title && <h2 className="nexus-h2 font-semibold tracking-tight">{title}</h2>}
              {description && (
                <p className="nexus-body-lg mt-1 max-w-3xl text-[var(--nexus-text-secondary)]">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
