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
      className={clsx(
        'hidden items-center gap-1 rounded-xl border border-slate-200/60 bg-slate-100/80 p-1 backdrop-blur-sm lg:flex',
        className
      )}
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
              'relative rounded-lg px-3.5 py-1.5 font-sans text-xs font-semibold tracking-tight transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:outline-none',
              isActive
                ? 'border border-slate-200/80 bg-white font-bold text-slate-900 shadow-xs'
                : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-sky-500" />
            )}
          </a>
        );
      })}
    </nav>
  );
};

Navigation.displayName = 'Navigation';
