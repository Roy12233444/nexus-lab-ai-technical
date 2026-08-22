import React from 'react';
import { getFutureDirections } from '@/content/future/future';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { CheckCircle2, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

export const FutureDirectionsSection: React.FC = () => {
  const directions = getFutureDirections();
  const visual = getFutureVisualAsset('FUTURE-IMG-003');

  return (
    <div className="space-y-10">
      {/* Context Banner Visual (Image 3: Collective Humanity / Collaboration) */}
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <img
          src={visual.publicPath}
          alt={visual.altText}
          className="max-h-[360px] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="border-t border-slate-100 bg-white/90 px-4 py-2.5 text-center font-mono text-xs text-slate-500">
          {visual.caption} — {visual.narrativeMeaning}
        </figcaption>
      </figure>

      {/* 6 Future Direction Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {directions.map((dir) => (
          <article
            key={dir.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
          >
            <div className="space-y-4">
              {/* Header: ID + Horizon Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                  {dir.id}
                </span>
                <span
                  className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${
                    dir.horizon === 'NEAR'
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                      : dir.horizon === 'MEDIUM'
                        ? 'border border-sky-200 bg-sky-50 text-sky-800'
                        : 'border border-purple-200 bg-purple-50 text-purple-800'
                  }`}
                >
                  {dir.horizon} HORIZON ({dir.horizonTimeframe})
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">{dir.title}</h3>
                <p className="mt-1 font-sans text-xs font-medium text-slate-500">{dir.tagline}</p>
              </div>

              {/* Rationale */}
              <p className="font-sans text-xs leading-relaxed text-slate-700 sm:text-sm">
                {dir.rationale}
              </p>

              {/* Current Foundation */}
              <div className="space-y-1.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-700 uppercase">
                  Current Foundation
                </span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {dir.currentFoundation.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Work Required */}
              <div className="space-y-1.5">
                <span className="block font-mono text-[10px] font-bold tracking-wider text-sky-800 uppercase">
                  Future Research Frontier
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {dir.futureWork.map((fw, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-sky-600" />
                      <span>{fw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Non-Claim Boundary Footer */}
            <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-amber-800">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
                <span>Epistemic Boundary</span>
              </div>
              <ul className="space-y-1 rounded-lg border border-amber-200/50 bg-amber-50/40 p-2.5 text-[11px] text-slate-500 italic">
                {dir.nonClaims.map((nc, i) => (
                  <li key={i}>• {nc}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>{dir.originAnchor}</span>
                </span>
                <span className="font-semibold uppercase">{dir.evidenceLevel}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

FutureDirectionsSection.displayName = 'FutureDirectionsSection';
