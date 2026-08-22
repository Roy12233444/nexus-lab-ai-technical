import React, { useState } from 'react';
import clsx from 'clsx';
import { Menu, ArrowUpRight } from 'lucide-react';
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
        'fixed top-0 right-0 left-0 z-[var(--nexus-z-header)] w-full transition-all duration-300',
        'px-3 pt-2 pb-2 sm:px-6 sm:pt-3',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all sm:h-16 sm:px-6">
          {/* Left: Custom Geometric Brand Wordmark */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={ROUTES.HOME}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(ROUTES.HOME);
                }
              }}
              aria-label="Nexus LAB AI Home"
              className="group flex items-center rounded-lg transition-transform duration-200 select-none hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              <NexusBrandLogo size="sm" />
            </a>
          </div>

          {/* Center: Desktop Pill Navigation */}
          <Navigation currentPath={currentPath} onNavigate={onNavigate} />

          {/* Right: Technical State & Action Portal */}
          <div className="flex items-center gap-3">
            {/* Status Beacon Indicator */}
            <div className="hidden items-center rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 sm:flex">
              <StatusIndicator status="active" label="CORE SYSTEM" size="sm" pulse />
            </div>

            {/* Quick Explore Button */}
            <a
              href={ROUTES.RESEARCH}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(ROUTES.RESEARCH);
                }
              }}
              className="group hidden items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 font-sans text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-slate-800 hover:shadow-sm md:inline-flex"
            >
              <span>Explore Lab</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:outline-none lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
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
