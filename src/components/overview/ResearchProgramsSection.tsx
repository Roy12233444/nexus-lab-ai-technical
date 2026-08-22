import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { Brain, Database, ShieldCheck, Orbit, CheckCircle2 } from 'lucide-react';

export const ResearchProgramsSection: React.FC = () => {
  const { researchPrograms } = OVERVIEW_CONTENT;

  const programIcons: Record<string, React.ElementType> = {
    'PROG-001': Brain,
    'PROG-002': Database,
    'PROG-003': ShieldCheck,
    'PROG-004': Orbit,
  };

  return (
    <div className="space-y-8" id="research-programs">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {researchPrograms.map((prog) => {
          const Icon = programIcons[prog.id] || Brain;

          return (
            <article
              key={prog.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md sm:p-8"
            >
              <div className="space-y-5">
                {/* Header: Title + Badges */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900">
                        {prog.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs font-medium text-slate-500">
                        {prog.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 font-mono text-xs">
                    <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                      {prog.maturity}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                        prog.evidence === 'VERIFIED'
                          ? 'border border-emerald-300 bg-emerald-100 text-emerald-900'
                          : prog.evidence === 'REPORTED'
                            ? 'border border-indigo-300 bg-indigo-100 text-indigo-900'
                            : 'border border-amber-300 bg-amber-100 text-amber-900'
                      }`}
                    >
                      {prog.evidence}
                    </span>
                  </div>
                </div>

                {/* Problem & Purpose */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Problem Addressed
                    </span>
                    <p className="font-sans text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {prog.problem}
                    </p>
                  </div>

                  <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-800 uppercase">
                      Current Engineering State
                    </span>
                    <p className="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
                      {prog.currentState}
                    </p>
                  </div>
                </div>

                {/* Architecture Layers */}
                {prog.architectureLayers && prog.architectureLayers.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Subsystem Architecture
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.architectureLayers.map((layer, idx) => (
                        <span
                          key={idx}
                          className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] font-medium text-slate-700 shadow-2xs"
                        >
                          {layer}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Verified Milestones */}
              {prog.verifiedMilestones && prog.verifiedMilestones.length > 0 && (
                <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                  <span className="block font-mono text-[10px] font-bold tracking-wider text-emerald-800 uppercase">
                    Verified Proof Milestones
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {prog.verifiedMilestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

ResearchProgramsSection.displayName = 'ResearchProgramsSection';
