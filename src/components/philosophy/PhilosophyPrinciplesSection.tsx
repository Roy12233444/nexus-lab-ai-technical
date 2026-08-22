import React from 'react';
import { getPublicPhilosophyPrinciples } from '@/content/philosophy/philosophy';

export const PhilosophyPrinciplesSection: React.FC = () => {
  const principles = getPublicPhilosophyPrinciples();

  return (
    <div className="space-y-8">
      {/* Section Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          Public Epistemic Constitution
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The Eight Foundational Principles
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          The non-negotiable intellectual constitution governing all Nexus LAB AI research,
          formalization, and systems engineering.
        </p>
      </div>

      {/* 8 Principles Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {principles.map((p) => (
          <article
            key={p.id}
            id={`principle-${p.id.toLowerCase()}`}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-sky-300 hover:shadow-md sm:p-8"
          >
            <div className="space-y-6">
              {/* Card Header with Order & Concept Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold">
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-white">0{p.order}</span>
                  <span className="text-slate-500">{p.id}</span>
                </div>
                <span className="font-mono text-xs font-semibold text-sky-700 uppercase">
                  ◈ {p.sanskritAnchor}
                </span>
              </div>

              {/* Principle Name */}
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {p.title}
                </h3>
              </div>

              {/* Classical Foundation */}
              <div className="space-y-1">
                <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  Classical Foundation
                </span>
                <p className="font-sans text-xs leading-relaxed text-slate-700 sm:text-sm">
                  {p.philosophicalFoundation}
                </p>
              </div>

              {/* Nexus Modern Interpretation */}
              <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-800 uppercase">
                  Nexus Modern Interpretation
                </span>
                <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {p.nexusInterpretation}
                </p>
              </div>
            </div>

            {/* Engineering Consequence */}
            <div className="mt-6 space-y-1 border-t border-slate-100 pt-4">
              <span className="block font-mono text-[10px] font-bold tracking-wider text-sky-800 uppercase">
                Concrete Engineering Consequence
              </span>
              <p className="font-sans text-xs font-medium text-slate-900 sm:text-sm">
                ⚙️ {p.engineeringConsequence}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
