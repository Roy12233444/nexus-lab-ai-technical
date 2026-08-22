import React from 'react';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { ROUTES } from '@/lib/routes';

interface PhilosophyClosingSectionProps {
  onNavigate?: (path: string) => void;
}

export const PhilosophyClosingSection: React.FC<PhilosophyClosingSectionProps> = ({
  onNavigate,
}) => {
  const { identity } = CANONICAL_PHILOSOPHY_REGISTRY;

  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      {/* Narrative Synthesis */}
      <div className="space-y-4">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          Long-Horizon Trajectory
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          An Enduring Framework for Verifiable Cognition
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          {identity.mandate}
        </p>
      </div>

      {/* Navigation Gateway Cards */}
      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.RESEARCH)}
          className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04B</span>
          <span className="mt-1 text-base font-bold text-slate-900">Research Programs</span>
          <span className="mt-2 text-xs text-slate-500">Inquiry & Empirical Formulations →</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.TECHNOLOGY)}
          className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04C</span>
          <span className="mt-1 text-base font-bold text-slate-900">Technology Systems</span>
          <span className="mt-2 text-xs text-slate-500">Substrates & Core Engines →</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate?.(ROUTES.PROGRAMS)}
          className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
        >
          <span className="font-mono text-xs font-bold text-sky-700 uppercase">Track 04D</span>
          <span className="mt-1 text-base font-bold text-slate-900">Major Programs</span>
          <span className="mt-2 text-xs text-slate-500">Sovereign Engineering Initiatives →</span>
        </button>
      </div>
    </div>
  );
};
