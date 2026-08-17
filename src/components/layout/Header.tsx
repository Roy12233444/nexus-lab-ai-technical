import React, { useState } from 'react';
import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { ROUTES } from '@/lib/routes';

export interface HeaderProps {
  currentPath?: string;
  onNavigate?: (href: string) => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate, className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className={clsx(
        'nexus-transition-fast sticky top-0 z-[var(--nexus-z-header)] w-full border-b border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]/90 backdrop-blur-md',
        className
      )}
    >
      <div className="nexus-container flex h-16 items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <a
            href={ROUTES.HOME}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(ROUTES.HOME);
              }
            }}
            aria-label="Nexus LAB AI Home"
            className="flex items-center gap-2.5 rounded-[var(--nexus-radius-sm)] select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-[var(--nexus-radius-sm)] bg-[var(--nexus-text-primary)] text-xs font-bold text-[var(--nexus-text-inverse)]">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[var(--nexus-text-primary)]">
                NEXUS<span className="ml-1 font-normal text-[var(--nexus-text-muted)]">LAB AI</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <Navigation currentPath={currentPath} onNavigate={onNavigate} />

        {/* Right: Technical State & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center border-l border-[var(--nexus-border-default)] pl-2 lg:flex">
            <StatusIndicator status="active" label="CORE SYSTEM" size="sm" pulse />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileMenuOpen(true)}
            className="nexus-transition-fast flex rounded-[var(--nexus-radius-md)] p-2 text-[var(--nexus-text-muted)] hover:bg-[var(--nexus-bg-tertiary)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
    </header>
  );
};

Header.displayName = 'Header';
