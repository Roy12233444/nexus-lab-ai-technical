import React, { useState } from 'react';
import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { NexusBrandLogo } from '@/components/ui/NexusBrandLogo';
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
        'nexus-transition-fast fixed top-0 right-0 left-0 z-[var(--nexus-z-header)] w-full border-b border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]/95 shadow-2xs backdrop-blur-md',
        className
      )}
    >
      <div className="nexus-container flex h-16 items-center justify-between">
        {/* Left: Custom Geometric Brand Wordmark */}
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
            className="flex items-center rounded-[var(--nexus-radius-sm)] select-none focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
          >
            <NexusBrandLogo size="sm" />
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
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--nexus-radius-md)] border border-[var(--nexus-border-default)] text-[var(--nexus-text-secondary)] hover:border-[var(--nexus-border-strong)] hover:text-[var(--nexus-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
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
