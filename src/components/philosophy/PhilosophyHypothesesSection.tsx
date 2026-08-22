import React from 'react';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { Activity, Microscope } from 'lucide-react';

export const PhilosophyHypothesesSection: React.FC = () => {
  const hypotheses = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.hypotheses);

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.07 AI Hypotheses
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Testable AI Research Hypotheses
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          Rigorous computational conjectures derived from classical Indian philosophy. Every
          hypothesis is explicitly designated as an unproven conjecture subject to rigorous
          empirical falsification.
        </p>
      </div>

      {/* 8 Hypotheses Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {hypotheses.map((h) => (
          <article
            key={h.id}
            id={`hypothesis-${h.id.toLowerCase()}`}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md sm:p-8"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-indigo-900 px-2 py-0.5 font-mono text-xs font-bold text-white">
                    {h.id}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{h.conceptId}</span>
                </div>
                <div className="inline-flex items-center gap-1 rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-700 uppercase">
                  <Activity className="h-3 w-3 text-indigo-600" />
                  <span>{h.status}</span>
                </div>
              </div>

              {/* Title & Core Hypothesis Statement */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{h.title}</h3>
                <p className="text-xs font-medium text-slate-600 italic sm:text-sm">
                  "{h.hypothesisStatement}"
                </p>
              </div>

              {/* Evidence State */}
              <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <span className="block font-mono text-[10px] font-bold text-slate-700 uppercase">
                  Evidence State
                </span>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {h.evidenceState}
                </p>
              </div>
            </div>

            {/* Falsification Invariant */}
            <div className="mt-6 space-y-1 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-1.5">
                <Microscope className="h-3.5 w-3.5 text-amber-700" />
                <span className="block font-mono text-[10px] font-bold text-amber-900 uppercase">
                  Epistemic Classification
                </span>
              </div>
              <p className="font-sans text-xs text-slate-600 italic">
                Subject to rigorous empirical falsification in production benchmarks
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
