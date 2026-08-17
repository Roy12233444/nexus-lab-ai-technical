import React from 'react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className, onNavigate }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={clsx('flex items-center', className)}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0 text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 text-[var(--nexus-text-muted)]"
                  aria-hidden="true"
                />
              )}

              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={clsx(
                    'font-medium',
                    isLast
                      ? 'font-semibold text-[var(--nexus-text-primary)]'
                      : 'text-[var(--nexus-text-muted)]'
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.href!);
                    }
                  }}
                  className="nexus-transition-fast rounded-[var(--nexus-radius-sm)] text-[var(--nexus-text-muted)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
