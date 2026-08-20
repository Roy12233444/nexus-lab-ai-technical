import React from 'react';
import { getPublicTechnologySubstrates } from '@/content/technology/technology';

export const TechnologySubstratesSection: React.FC = () => {
  const substrates = getPublicTechnologySubstrates();

  return (
    <div className="w-full border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 06</span>
            <span className="text-slate-300">•</span>
            <span>UNDERLYING MACHINERY</span>
          </div>
          <h2
            id="tech-substrates-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Technical Substrates & Software Engines
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            The concrete technical mechanisms, neural kernels, state serialization engines, and
            safety interception proxies operating inside the Nexus LAB AI architecture.
          </p>
        </div>

        {/* Substrates Grid (3 Columns) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {substrates.map((sub) => {
            const isNexusInvention = sub.category === 'NEXUS_INVENTION';
            return (
              <div
                key={sub.id}
                className="flex flex-col justify-between space-y-5 rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all hover:border-sky-300 hover:shadow-md"
              >
                <div className="space-y-3">
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono text-[11px]">
                    <span
                      className={`rounded px-2 py-0.5 font-semibold ${
                        isNexusInvention
                          ? 'border border-sky-200 bg-sky-50 text-sky-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {sub.category.replace('_', ' ')}
                    </span>
                    <span className="text-slate-400 uppercase">
                      {sub.domainId.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg leading-snug font-bold text-slate-900">{sub.name}</h3>
                  <p className="font-sans text-xs leading-relaxed text-slate-600">
                    {sub.description}
                  </p>
                </div>

                {/* State Badges & Linked Claims */}
                <div className="space-y-3 border-t border-slate-100 pt-4 font-mono text-[11px]">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                      MATURITY: {sub.state.maturity}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                      EVIDENCE: {sub.state.evidence}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                      TEMPORAL: {sub.state.temporal}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <span>PROVENANCE:</span>
                    <span className="font-semibold text-sky-800">{sub.claimIds.join(', ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
