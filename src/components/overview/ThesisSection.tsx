import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { AlertOctagon, Lightbulb, Compass, Cpu } from 'lucide-react';

export const ThesisSection: React.FC = () => {
  const { thesis } = OVERVIEW_CONTENT;

  return (
    <div className="space-y-8">
      {/* Problem Callout Box */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-2xs sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            <AlertOctagon className="h-5 w-5" />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold tracking-wider text-amber-800 uppercase">
              The Structural Failure
            </span>
            <p className="font-sans text-base leading-snug font-semibold text-slate-900 sm:text-lg">
              {thesis.problemStatement}
            </p>
          </div>
        </div>
      </div>

      {/* Core Hypothesis & Dual Rationale Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Core Hypothesis Left Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <Lightbulb className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs font-bold tracking-wider text-sky-700 uppercase">
                Core Hypothesis
              </span>
            </div>
            <p className="font-sans text-base leading-relaxed font-bold text-slate-900 sm:text-lg">
              {thesis.coreHypothesis}
            </p>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4 font-mono text-xs text-slate-500">
            Nexus LAB AI Foundational Invariant
          </div>
        </div>

        {/* First-Principles & Architectural Approach Right Cards */}
        <div className="flex flex-col gap-4 lg:col-span-6">
          {/* First-Principles Rationale */}
          <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-indigo-600" />
              <span className="font-mono text-xs font-bold tracking-wider text-slate-700 uppercase">
                First-Principles Rationale
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
              {thesis.rationale}
            </p>
          </div>

          {/* Architectural Approach */}
          <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-sky-700" />
              <span className="font-mono text-xs font-bold tracking-wider text-slate-800 uppercase">
                Architectural Approach
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
              {thesis.approach}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ThesisSection.displayName = 'ThesisSection';
