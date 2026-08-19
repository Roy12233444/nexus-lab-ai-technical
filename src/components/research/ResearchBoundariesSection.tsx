import React from 'react';
import { CANONICAL_RESEARCH_PROJECTS } from '@/content/research/research';

export const ResearchBoundariesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {CANONICAL_RESEARCH_PROJECTS.map((project) => (
        <div
          key={project.identity.id}
          className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-base font-bold text-slate-900">
                {project.identity.acronym} Boundary Isolation
              </span>
              <span className="rounded bg-rose-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-rose-700">
                BOUNDED SCOPE
              </span>
            </div>

            {/* Bounded Verified Scope */}
            <div className="mt-4">
              <div className="font-mono text-xs font-semibold text-emerald-800">
                [✓] Empirically Bounded Scope:
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                {project.limitations.boundedScope.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explicit Non-Claims / Quarantined Assertions */}
            <div className="mt-4 rounded-lg border border-rose-100 bg-rose-50/50 p-3">
              <div className="font-mono text-xs font-semibold text-rose-800">
                [✗] Explicit Non-Claims (Quarantined):
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-rose-900">
                {project.limitations.quarantinedClaims.map((qc) => (
                  <li key={qc.id} className="leading-relaxed">
                    <span className="font-semibold">"{qc.claim}"</span> —{' '}
                    <span className="text-slate-600">{qc.quarantineReason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
