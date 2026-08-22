import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

export const InnovationEngineSection: React.FC = () => {
  const { innovationEngine } = OVERVIEW_CONTENT;

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Left Column: Definition & Compounding Purpose */}
      <div className="flex flex-col gap-6 lg:col-span-5">
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          {innovationEngine.definition}
        </p>

        <div className="space-y-3 rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 shadow-2xs">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
              <Zap className="h-4 w-4" />
            </div>
            <span className="font-mono text-xs font-bold tracking-wider text-indigo-800 uppercase">
              Compounding Knowledge Law
            </span>
          </div>
          <p className="font-sans text-xs leading-relaxed text-slate-700 sm:text-sm">
            {innovationEngine.purpose}
          </p>
          <div className="flex items-center gap-1.5 pt-2 font-mono text-xs font-semibold text-indigo-900">
            <TrendingUp className="h-4 w-4 text-indigo-600" />
            <span>Self-Reinforcing R&D Velocity</span>
          </div>
        </div>
      </div>

      {/* Right Column: Linear Micro Engineering Flow */}
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold tracking-wider text-slate-700 uppercase">
            Engineering Flow Pipeline (8 Steps)
          </span>
          <span className="font-mono text-[10px] text-slate-500">Unidirectional Execution</span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {innovationEngine.microEngineeringLoop.map((step, index) => {
            const isLast = index === innovationEngine.microEngineeringLoop.length - 1;

            return (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-all hover:border-sky-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 font-mono text-[11px] font-bold text-slate-700">
                    0{index + 1}
                  </span>
                  <span className="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
                    {step}
                  </span>
                </div>

                {!isLast && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

InnovationEngineSection.displayName = 'InnovationEngineSection';
