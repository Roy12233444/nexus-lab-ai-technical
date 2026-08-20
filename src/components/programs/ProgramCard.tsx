import React from 'react';
import { CanonicalProgram } from '@/types/programs';

interface ProgramCardProps {
  program: CanonicalProgram;
  variant?: 'primary' | 'supporting' | 'context';
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, variant = 'primary' }) => {
  const { identity, state, architecturalSubstrate, boundaries } = program;
  const isPlanned = state.maturity === 'PLANNED';
  const isSupporting = variant === 'supporting';
  const isContext = variant === 'context';

  return (
    <article
      id={`program-${identity.acronym.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
        isPlanned
          ? 'border-indigo-200/80 bg-gradient-to-b from-white to-indigo-50/20 hover:border-indigo-300 hover:shadow-md'
          : isSupporting
            ? 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
            : isContext
              ? 'border-amber-200/80 bg-amber-50/20 hover:border-amber-300 hover:shadow-sm'
              : 'border-slate-200/90 bg-white hover:border-sky-300 hover:shadow-md'
      } p-6 sm:p-8`}
    >
      <div className="space-y-5">
        {/* Top Meta Bar: Category + Epistemic Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
            {identity.category.replace(/_/g, ' ')}
          </span>

          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] font-semibold">
            {/* Maturity Badge */}
            <span
              className={`rounded px-2 py-0.5 ${
                state.maturity === 'IMPLEMENTED'
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                  : state.maturity === 'SPECIFIED'
                    ? 'border border-sky-200 bg-sky-50 text-sky-700'
                    : state.maturity === 'EXPERIMENTAL'
                      ? 'border border-purple-200 bg-purple-50 text-purple-700'
                      : 'border border-indigo-200 bg-indigo-50 text-indigo-700'
              }`}
            >
              {state.maturity}
            </span>

            {/* Evidence Badge */}
            <span
              className={`rounded px-2 py-0.5 ${
                state.evidence === 'VERIFIED'
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                  : state.evidence === 'REPORTED'
                    ? 'border border-amber-200 bg-amber-50 text-amber-800'
                    : 'border border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {state.evidence}
            </span>

            {/* Temporal Badge */}
            <span
              className={`rounded px-2 py-0.5 ${
                state.temporal === 'CURRENT'
                  ? 'border border-sky-200 bg-sky-50 text-sky-800'
                  : 'border border-indigo-200 bg-indigo-50 text-indigo-800'
              }`}
            >
              {state.temporal}
            </span>
          </div>
        </div>

        {/* Identity & Headings */}
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {identity.acronym}
            </h3>
            {identity.name !== identity.acronym && (
              <span className="truncate font-mono text-xs text-slate-500">({identity.name})</span>
            )}
          </div>
          <p className="font-mono text-xs font-medium text-sky-800">{identity.fullTitle}</p>
          <p className="pt-1 font-sans text-sm font-medium text-slate-700">{identity.tagline}</p>
        </div>

        {/* Problem Statement */}
        <div className="space-y-1 rounded-lg border border-slate-100 bg-slate-50 p-4">
          <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
            Frontier Problem Addressed
          </span>
          <p className="font-sans text-xs leading-relaxed text-slate-600">
            {identity.problemStatement}
          </p>
        </div>

        {/* Architectural Substrates */}
        {architecturalSubstrate.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              Architectural Substrates
            </span>
            <ul className="space-y-1.5">
              {architecturalSubstrate.map((substrate, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="font-mono text-sky-500 select-none">▸</span>
                  <span>{substrate}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer / Boundary Safeguards */}
      {boundaries.length > 0 && (
        <div className="mt-6 border-t border-slate-100 pt-3">
          <div className="flex items-start gap-1.5 font-sans text-[11px] text-slate-500">
            <span className="font-bold text-amber-600 select-none">🛡️</span>
            <span className="italic">{boundaries[0]}</span>
          </div>
        </div>
      )}
    </article>
  );
};
