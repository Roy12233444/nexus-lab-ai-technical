import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { Target, ShieldX, CheckCircle2 } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const { identity } = OVERVIEW_CONTENT;

  return (
    <div className="space-y-8">
      {/* Primary Mission Card */}
      <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/60 via-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 shadow-2xs">
            <Target className="h-6 w-6" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-wider text-sky-700 uppercase">
                Institutional Mandate
              </span>
              <span className="rounded bg-sky-100 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-800">
                Nexus Charter
              </span>
            </div>
            <p className="font-sans text-xl leading-snug font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
              {identity.missionStatement}
            </p>
          </div>
        </div>
      </div>

      {/* Explicit Boundary Rules Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldX className="h-4 w-4 text-amber-600" />
          <span className="font-mono text-xs font-bold tracking-wider text-slate-700 uppercase">
            Boundary Constraints & Non-Identity
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {identity.boundaries.map((boundary, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                    BOUNDARY 0{index + 1}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <p className="font-sans text-xs leading-relaxed font-medium text-slate-700 sm:text-sm">
                  {boundary}
                </p>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-2 font-mono text-[10px] text-slate-400">
                Strict Architectural Invariant
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MissionSection.displayName = 'MissionSection';
