import React from 'react';
import { getFutureThesis } from '@/content/future/future';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { Globe, Sparkles } from 'lucide-react';

export const FutureHeroSection: React.FC = () => {
  const thesis = getFutureThesis();
  const heroVisual = getFutureVisualAsset('FUTURE-IMG-001');

  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="nexus-container">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 font-mono text-xs font-semibold text-sky-800 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            <span>NEXUS HORIZON TRACK 04F</span>
          </div>

          {/* Page H1 Title */}
          <h1 className="font-sans text-3xl leading-[1.1] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Horizon of Resilient Autonomous Intelligence
          </h1>

          {/* Lead Statement */}
          <p className="mx-auto max-w-3xl font-sans text-base leading-relaxed font-normal text-slate-600 sm:text-lg lg:text-xl">
            {thesis.statement}
          </p>

          {/* Sub-Metadata Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
              <Globe className="h-3.5 w-3.5 text-slate-500" />
              Sovereign Systems Horizon
            </span>
            <span className="rounded bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
              Near • Medium • Long
            </span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800">
              Epistemically Bounded
            </span>
          </div>
        </div>

        {/* Hero Visual Asset (Image 1: Humanity + Earth + Intelligence) */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:shadow-md">
            <img
              src={heroVisual.publicPath}
              alt={heroVisual.altText}
              className="h-auto w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <figcaption className="border-t border-slate-100 bg-white/90 px-4 py-3 text-center font-mono text-xs text-slate-500">
              {heroVisual.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

FutureHeroSection.displayName = 'FutureHeroSection';
