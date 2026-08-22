import React from 'react';
import { getOpenProblems } from '@/content/future/future';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { AlertOctagon, HelpCircle, Activity } from 'lucide-react';

export const FutureProblemsSection: React.FC = () => {
  const problems = getOpenProblems();
  const visual = getFutureVisualAsset('FUTURE-IMG-004');

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Left Column: 6 Open Bottleneck Cards (Col-7) */}
      <div className="space-y-4 lg:col-span-7">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <AlertOctagon className="h-4 w-4 text-amber-600" />
            <span className="font-mono text-xs font-bold tracking-wider text-slate-800 uppercase">
              Active Research Bottlenecks (06 Problem Vectors)
            </span>
          </div>
          <span className="font-mono text-[10px] font-semibold text-slate-500">
            Unsolved Scientific Frontiers
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((prob) => (
            <div
              key={prob.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-all hover:border-amber-300 hover:shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded border border-amber-200 bg-amber-50 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-800">
                    {prob.id}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-slate-400">
                    <Activity className="h-3 w-3 text-amber-500" />
                    <span>OPEN</span>
                  </span>
                </div>

                <h4 className="font-sans text-sm leading-snug font-bold text-slate-900">
                  {prob.title}
                </h4>

                <div className="space-y-1 text-xs">
                  <span className="block font-mono text-[10px] font-semibold text-slate-500 uppercase">
                    Core Bottleneck:
                  </span>
                  <p className="leading-relaxed text-slate-700">{prob.bottleneck}</p>
                </div>

                <div className="space-y-1 rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-xs">
                  <span className="block font-mono text-[10px] font-bold text-slate-800 uppercase">
                    Investigation Approach:
                  </span>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    {prob.investigationApproach}
                  </p>
                </div>
              </div>

              <div className="mt-3 border-t border-slate-100 pt-2 font-mono text-[10px] text-slate-400">
                <span>Domain: {prob.domain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Editorial Visual Asset (Image 4: Engineering Limits) */}
      <div className="lg:col-span-5">
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          <img
            src={visual.publicPath}
            alt={visual.altText}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="space-y-1 border-t border-slate-100 bg-white p-4 font-sans text-xs text-slate-600">
            <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-800 uppercase">
              <HelpCircle className="h-3 w-3 text-sky-600" />
              <span>{visual.caption}</span>
            </div>
            <p className="text-[11px] text-slate-500">{visual.narrativeMeaning}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

FutureProblemsSection.displayName = 'FutureProblemsSection';
