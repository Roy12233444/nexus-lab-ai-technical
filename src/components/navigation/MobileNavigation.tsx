import React, { useEffect } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { PRIMARY_NAV_ITEMS, NavItem } from '@/lib/routes';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath?: string;
  onNavigate?: (href: string) => void;
  className?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  currentPath = '/',
  onNavigate,
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className={clsx(
        'fixed inset-0 z-[var(--nexus-z-navigation)] flex flex-col md:hidden',
        className
      )}
    >
      {/* Backdrop */}
      <div
        className="nexus-transition-fast animate-fade-in fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div className="nexus-animate-fade-in relative z-10 flex h-full w-full max-w-sm flex-col overflow-y-auto border-r border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)] p-6 shadow-[var(--nexus-shadow-floating)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--nexus-border-default)] pb-6">
          <div className="flex flex-col">
            <span className="nexus-meta-label font-bold tracking-widest text-[var(--nexus-text-primary)]">
              NEXUS LAB AI
            </span>
            <span className="mt-0.5 text-[10px] tracking-wider text-[var(--nexus-text-muted)] uppercase">
              Technical Dossier
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="nexus-transition-fast rounded-[var(--nexus-radius-md)] p-2 text-[var(--nexus-text-muted)] hover:bg-[var(--nexus-bg-tertiary)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <nav aria-label="Mobile Routes" className="flex flex-col gap-1.5 py-6">
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
                  onClose();
                }}
                className={clsx(
                  'nexus-transition-fast flex items-center justify-between rounded-[var(--nexus-radius-md)] px-3.5 py-2.5 text-sm font-medium select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none',
                  isActive
                    ? 'bg-[var(--nexus-bg-tertiary)] font-semibold text-[var(--nexus-text-primary)]'
                    : 'text-[var(--nexus-text-secondary)] hover:bg-[var(--nexus-bg-secondary)] hover:text-[var(--nexus-text-primary)]'
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--nexus-text-primary)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Footer Meta */}
        <div className="mt-auto border-t border-[var(--nexus-border-default)] pt-6">
          <p className="nexus-meta-label text-[10px] text-[var(--nexus-text-muted)]">
            AI Systems Innovation Company
          </p>
        </div>
      </div>
    </div>
  );
};

MobileNavigation.displayName = 'MobileNavigation';
