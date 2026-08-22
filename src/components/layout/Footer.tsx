import React from 'react';
import clsx from 'clsx';
import { FOOTER_NAV_GROUPS, ROUTES } from '@/lib/routes';
import { SITE_CONFIG } from '@/lib/constants';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { NexusBrandLogo } from '@/components/ui/NexusBrandLogo';

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
              className="inline-flex w-fit items-center rounded-[var(--nexus-radius-sm)] select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
            >
              <NexusBrandLogo size="md" />
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
                <h4 className="nexus-meta-label text-xs font-semibold text-[var(--nexus-text-primary)] uppercase">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate(item.href);
                          }
                        }}
                        className="nexus-body-sm text-[var(--nexus-text-muted)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-1 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
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

        {/* Bottom Bar: License & Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[var(--nexus-border-default)] pt-6 text-xs text-[var(--nexus-text-muted)] sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
            </span>
            <span className="text-[var(--nexus-border-strong)]">•</span>
            <span>{SITE_CONFIG.license}</span>
            <span className="text-[var(--nexus-border-strong)]">•</span>
            <span>Technical Foundation v{SITE_CONFIG.version}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Security: SAIF Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
