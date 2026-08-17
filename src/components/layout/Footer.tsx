import React from 'react';
import clsx from 'clsx';
import { FOOTER_NAV_GROUPS, ROUTES } from '@/lib/routes';
import { SITE_CONFIG, SYSTEM_MILESTONES } from '@/lib/constants';
import { StatusIndicator } from '@/components/ui/StatusIndicator';

export interface FooterProps {
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ className, onNavigate }) => {
  return (
    <footer
      role="contentinfo"
      aria-label="Nexus LAB AI Footer"
      className={clsx(
        'w-full border-t border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)] text-[var(--nexus-text-secondary)]',
        className
      )}
    >
      <div className="nexus-container py-16">
        {/* Main Grid: Identity + Navigation Groups */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Identity Column (2 Cols on lg) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={ROUTES.HOME}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(ROUTES.HOME);
                }
              }}
              aria-label="Nexus LAB AI Home"
              className="inline-flex w-fit items-center gap-2.5 rounded-[var(--nexus-radius-sm)] select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-[var(--nexus-radius-sm)] bg-[var(--nexus-text-primary)] text-xs font-bold text-[var(--nexus-text-inverse)]">
                N
              </div>
              <span className="text-sm font-bold tracking-tight text-[var(--nexus-text-primary)]">
                NEXUS<span className="ml-1 font-normal text-[var(--nexus-text-muted)]">LAB AI</span>
              </span>
            </a>

            <p className="nexus-meta-label text-xs text-[var(--nexus-text-muted)]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="nexus-body-sm max-w-sm text-[var(--nexus-text-secondary)]">
              {SITE_CONFIG.missionStatement}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <StatusIndicator status="active" label="CORE ARCHITECTURE" size="sm" />
            </div>
          </div>

          {/* Navigation Columns (3 Cols on lg) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            {FOOTER_NAV_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span className="nexus-meta-label text-xs font-semibold text-[var(--nexus-text-primary)]">
                  {group.title}
                </span>

                <ul className="m-0 flex list-none flex-col gap-2 p-0" role="list">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate(item.href);
                          }
                        }}
                        className="nexus-body-sm nexus-transition-fast rounded-[var(--nexus-radius-sm)] text-[var(--nexus-text-secondary)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Legal & System Metadata */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--nexus-border-default)] pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--nexus-text-muted)]">
            <span>
              &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
            </span>
            <span>&bull;</span>
            <span className="nexus-meta-label text-[10px]">{SITE_CONFIG.license}</span>
          </div>

          {/* System Milestone Status Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="nexus-code-inline text-[11px]">01 {SYSTEM_MILESTONES.foundation}</span>
            <span className="nexus-code-inline text-[11px]">
              02 {SYSTEM_MILESTONES.designSystem}
            </span>
            <span className="nexus-code-inline text-[11px]">03 {SYSTEM_MILESTONES.shell}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
