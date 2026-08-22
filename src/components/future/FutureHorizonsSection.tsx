import React from 'react';
import { getResearchHorizons } from '@/content/future/future';
import { Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FutureHorizonsSection: React.FC = () => {
  const horizons = getResearchHorizons();
  const horizonKeys = ['NEAR', 'MEDIUM', 'LONG'] as const;

  const horizonColors = {
    NEAR: {
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      border: 'border-emerald-200 hover:border-emerald-300',
      iconColor: 'text-emerald-600',
    },
    MEDIUM: {
      badge: 'bg-sky-50 text-sky-800 border-sky-200',
      border: 'border-sky-200 hover:border-sky-300',
      iconColor: 'text-sky-600',
    },
    LONG: {
      badge: 'bg-purple-50 text-purple-800 border-purple-200',
      border: 'border-purple-200 hover:border-purple-300',
      iconColor: 'text-purple-600',
    },
  };

  return (
    <div className="space-y-8">
      {/* 3-Tier Horizon Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {horizonKeys.map((key) => {
          const plan = horizons[key];
          const colors = horizonColors[key];

          return (
            <div
              key={key}
              className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8 ${colors.border}`}
            >
              <div className="space-y-4">
                {/* Header: Horizon Title & Timeframe */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span
                    className={`rounded border px-2.5 py-0.5 font-mono text-[11px] font-bold ${colors.badge}`}
                  >
                    {plan.horizon} HORIZON
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{plan.timeframe}</span>
                  </div>
                </div>

                {/* Focus Title & Nature */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {plan.focusTitle}
                  </h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {plan.nature}
                  </p>
                </div>

                {/* Planned Initiatives */}
                <div className="space-y-2 pt-2">
                  <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-700 uppercase">
                    Core Technical Initiatives
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
                    {plan.initiatives.map((init, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${colors.iconColor}`} />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Anti-Prediction Invariant Box */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-700 uppercase">
                    <ShieldCheck className="h-3.5 w-3.5 text-slate-500" />
                    <span>Anti-Prediction Constraint</span>
                  </div>
                  <p className="text-[11px] leading-relaxed italic">
                    {plan.antiPredictionConstraint}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FutureHorizonsSection.displayName = 'FutureHorizonsSection';
