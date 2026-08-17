import React from 'react';
import clsx from 'clsx';
import { PRIMARY_NAV_ITEMS, NavItem } from '@/lib/routes';

export interface NavigationProps {
  currentPath?: string;
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPath = '/',
  className,
  onNavigate,
}) => {
  return (
    <nav
      aria-label="Primary Navigation"
      className={clsx('hidden items-center gap-1 md:flex', className)}
    >
      {PRIMARY_NAV_ITEMS.map((item: NavItem) => {
        const isActive =
          item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.href);
              }
            }}
            className={clsx(
              'nexus-transition-fast cursor-pointer rounded-[var(--nexus-radius-md)] px-3 py-1.5 text-xs font-medium select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none',
              isActive
                ? 'bg-[var(--nexus-bg-tertiary)] font-semibold text-[var(--nexus-text-primary)] shadow-[var(--nexus-shadow-subtle)]'
                : 'text-[var(--nexus-text-secondary)] hover:bg-[var(--nexus-bg-secondary)] hover:text-[var(--nexus-text-primary)]'
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};

Navigation.displayName = 'Navigation';
