import React from 'react';
import { ROUTES } from '@/lib/routes';

interface ProgramsClosingSectionProps {
  onNavigate?: (href: string) => void;
}

export const ProgramsClosingSection: React.FC<ProgramsClosingSectionProps> = ({ onNavigate }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      {/* Decorative Top Accent */}
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 shadow-sm">
        <span className="h-3 w-3 rounded-full bg-sky-600" />
      </div>

      {/* Main Closing Heading */}
      <div className="space-y-3">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-800 uppercase">
          Long-Horizon Engineering
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Engineering the Systems Frontier
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          We architect, verify, and document sovereign AI systems from first principles. By testing
          computational kernels against adversarial conditions, we systematically expand what
          autonomous intelligence can reliably achieve.
        </p>
      </div>

      {/* Institutional Exploration Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4 font-sans text-sm">
        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.RESEARCH)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
        >
          <span>Explore Research Track</span>
          <span className="font-mono text-sky-600">→</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.TECHNOLOGY)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
        >
          <span>Explore Technology Substrates</span>
          <span className="font-mono text-sky-600">→</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.HOME)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
        >
          <span>Institutional Overview</span>
          <span className="font-mono text-sky-600">→</span>
        </button>
      </div>
    </div>
  );
};
