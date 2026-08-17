import React from 'react';
import clsx from 'clsx';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

export interface PageShellProps {
  title?: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  width?: 'reading' | 'narrow' | 'content' | 'wide' | 'full';
  children: React.ReactNode;
  className?: string;
  onNavigate?: (href: string) => void;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  description,
  eyebrow,
  breadcrumbs,
  badge,
  actions,
  width = 'content',
  children,
  className,
  onNavigate,
}) => {
  const widthStyles = {
    reading: 'nexus-container-reading',
    narrow: 'nexus-container-narrow',
    content: 'nexus-container',
    wide: 'nexus-container-wide',
    full: 'w-full px-[var(--nexus-gutter)]',
  };

  const hasHeader = Boolean(title || description || eyebrow || breadcrumbs || badge || actions);

  return (
    <div className="flex w-full flex-1 flex-col">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--nexus-z-tooltip)] focus:rounded-[var(--nexus-radius-md)] focus:bg-[var(--nexus-text-primary)] focus:px-4 focus:py-2 focus:text-[var(--nexus-text-inverse)] focus:shadow-[var(--nexus-shadow-modal)] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Landmark Container */}
      <main id="main-content" role="main" className={clsx('w-full flex-1', className)}>
        {/* Page Header (If Metadata/Titles provided) */}
        {hasHeader && (
          <header className="w-full border-b border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)] py-10 md:py-16">
            <div className={widthStyles[width]}>
              {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="mb-4">
                  <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
                </div>
              )}

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="flex max-w-3xl flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {eyebrow && <p className="nexus-meta-label">{eyebrow}</p>}
                    {badge && <span className="inline-flex">{badge}</span>}
                  </div>

                  {title && <h1 className="nexus-h1 font-semibold tracking-tight">{title}</h1>}

                  {description && (
                    <p className="nexus-body-lg mt-2 text-[var(--nexus-text-secondary)]">
                      {description}
                    </p>
                  )}
                </div>

                {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
              </div>
            </div>
          </header>
        )}

        {/* Page Body Content */}
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

PageShell.displayName = 'PageShell';
