import React from 'react';
import clsx from 'clsx';
import { FOOTER_NAV_GROUPS, ROUTES } from '@/lib/routes';
import { SITE_CONFIG } from '@/lib/constants';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { NexusBrandLogo } from '@/components/ui/NexusBrandLogo';
import { ArrowUp, ArrowUpRight, ShieldCheck, Globe, Cpu, Sparkles } from 'lucide-react';

export interface FooterProps {
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ className, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Nexus LAB AI Footer"
      className={clsx(
        'relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/80 text-slate-600',
        className
      )}
    >
      <div className="nexus-container relative z-10 space-y-16 py-16 sm:space-y-20 sm:py-20 lg:py-24">
        {/* Upper Masthead: Editorial Headline & Status Beacon (Footer.design inspired) */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-xs font-bold text-sky-800">
                <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                <span>SOVEREIGN AI RESEARCH & SYSTEMS ENGINEERING</span>
              </div>
              <h2 className="font-sans text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Engineering Sovereign Foundations for Autonomous Intelligence.
              </h2>
              <p className="max-w-2xl font-sans text-sm leading-relaxed text-slate-600 sm:text-base">
                {SITE_CONFIG.missionStatement}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <a
                href={ROUTES.RESEARCH}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(ROUTES.RESEARCH);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-sans text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
              >
                <span>Explore Research Programs</span>
                <ArrowUpRight className="h-4 w-4 text-slate-300" />
              </a>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <Globe className="h-3.5 w-3.5 text-slate-400" />
                <span>Open Science & Technical Dossier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Identity + Navigation Groups */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Identity Column (5 Cols on lg) */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <a
              href={ROUTES.HOME}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(ROUTES.HOME);
                }
              }}
              aria-label="Nexus LAB AI Home"
              className="inline-flex w-fit items-center rounded-lg transition-transform select-none hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:outline-none"
            >
              <NexusBrandLogo size="md" />
            </a>

            <p className="font-mono text-xs font-semibold text-slate-700">{SITE_CONFIG.tagline}</p>

            <p className="max-w-md font-sans text-xs leading-relaxed text-slate-500 sm:text-sm">
              {SITE_CONFIG.missionStatement}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-2xs">
                <StatusIndicator status="active" label="CORE ARCHITECTURE" size="sm" />
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600 shadow-2xs">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>SAIF Level-3</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns (7 Cols on lg) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
            {FOOTER_NAV_GROUPS.map((group, idx) => (
              <div key={group.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold text-sky-600">0{idx + 1}</span>
                  <h4 className="font-mono text-xs font-bold tracking-wider text-slate-900 uppercase">
                    {group.title}
                  </h4>
                </div>

                <ul className="flex flex-col gap-2.5">
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
                        className="group flex items-center justify-between font-sans text-xs font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:ring-1 focus-visible:ring-slate-900 focus-visible:outline-none"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-3 w-3 text-slate-300 opacity-0 transition-opacity group-hover:text-slate-900 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Monumental Watermark Branding (Footer.design trademark signature) */}
        <div className="pointer-events-none border-t border-slate-200/80 pt-10 text-center select-none">
          <span className="block text-[clamp(2.5rem,8vw,7.5rem)] leading-none font-black tracking-tighter text-slate-900/[0.04] uppercase">
            NEXUS LAB AI
          </span>
        </div>

        {/* Bottom Bar: Legal, System Info & Back to Top */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            <span>
              © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono font-medium text-slate-700">{SITE_CONFIG.license}</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-slate-600">
              Technical Foundation v{SITE_CONFIG.version}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-600">
              <Cpu className="h-3.5 w-3.5 text-slate-400" />
              <span>Security: SAIF Compliant</span>
            </span>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
