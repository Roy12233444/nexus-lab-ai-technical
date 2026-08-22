import React from 'react';
import { getFutureThesis } from '@/content/future/future';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const FutureThesisSection: React.FC = () => {
  const thesis = getFutureThesis();
  const visual = getFutureVisualAsset('FUTURE-IMG-002');

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Left Column: 4-Step Canonical Derivation */}
      <div className="space-y-6 lg:col-span-7">
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-sky-50/40 p-6 shadow-2xs sm:p-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <Compass className="h-4 w-4" />
            </div>
            <span className="font-mono text-xs font-bold tracking-wider text-sky-800 uppercase">
              Strategic Research Derivation
            </span>
          </div>

          <p className="font-sans text-sm leading-relaxed font-medium text-slate-800 sm:text-base">
            Autonomous intelligence is not an arbitrary product feature—it is a compounding systems
            evolution requiring rigorous mathematical foundations, durable memory continuity, and
            formal safety guardrails.
          </p>
        </div>

        {/* Step-by-Step Derivation Cards */}
        <div className="space-y-3">
          {thesis.derivationSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-all hover:border-sky-300 hover:shadow-sm"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-mono text-xs font-bold text-slate-700">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-900 uppercase">
                    {step.step}
                  </span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </div>
                <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Editorial Visual Asset (Image 2: Human Agency) */}
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
              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
              <span>{visual.caption}</span>
            </div>
            <p className="text-[11px] text-slate-500">{visual.narrativeMeaning}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

FutureThesisSection.displayName = 'FutureThesisSection';
