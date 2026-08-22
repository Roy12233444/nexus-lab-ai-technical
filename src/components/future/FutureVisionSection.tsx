import React from 'react';
import { getLongHorizonVision } from '@/content/future/future';
import { getFutureVisualAsset } from '@/content/future/visualRegistry';
import { ShieldAlert, Globe, Radio, Sparkles, CheckCircle2 } from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  const vision = getLongHorizonVision();
  const earthVisual = getFutureVisualAsset('FUTURE-IMG-005');
  const orbitalVisual = getFutureVisualAsset('FUTURE-IMG-006');

  return (
    <div className="space-y-10">
      {/* Vision Statement Card */}
      <div className="space-y-6 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/60 via-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-mono text-xs font-bold tracking-wider text-purple-800 uppercase">
            Institutional Long-Horizon Mandate
          </span>
        </div>

        <p className="font-sans text-xl leading-snug font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
          {vision.statement}
        </p>

        {/* 4 Core Sovereignty Principles */}
        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
          {vision.principles.map((principle, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 rounded-xl border border-purple-100 bg-white/80 p-3.5 text-xs font-medium text-slate-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Visual Container: Earth Foundation (Img 5) + Orbital Horizon (Img 6) */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Left: Earth Foundation (Image 5) */}
        <div className="space-y-3 lg:col-span-5">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src={earthVisual.publicPath}
              alt={earthVisual.altText}
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="space-y-1 border-t border-slate-100 bg-white p-4 font-sans text-xs text-slate-600">
              <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-800 uppercase">
                <Globe className="h-3.5 w-3.5 text-sky-600" />
                <span>{earthVisual.caption}</span>
              </div>
              <p className="text-[11px] text-slate-500">{earthVisual.narrativeMeaning}</p>
            </figcaption>
          </figure>
        </div>

        {/* Right: Orbital Possibility (Image 6) + COSMOS Firewall Callout */}
        <div className="space-y-4 lg:col-span-7">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src={orbitalVisual.publicPath}
              alt={orbitalVisual.altText}
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="space-y-1 border-t border-slate-100 bg-white p-4 font-sans text-xs text-slate-600">
              <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-800 uppercase">
                <Radio className="h-3.5 w-3.5 text-purple-600" />
                <span>{orbitalVisual.caption}</span>
              </div>
              <p className="text-[11px] text-slate-500">{orbitalVisual.narrativeMeaning}</p>
            </figcaption>
          </figure>

          {/* Mandatory COSMOS Spaceflight Firewall Card */}
          <div className="space-y-2.5 rounded-2xl border border-amber-300 bg-amber-50/70 p-5 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-amber-700" />
              <span className="font-mono text-xs font-bold tracking-wider text-amber-900 uppercase">
                COSMOS Program Epistemic Firewall (PROG-004)
              </span>
            </div>

            <p className="text-xs leading-relaxed font-semibold text-amber-900">
              Status: {vision.cosmosFirewall.status} • Evidence: {vision.cosmosFirewall.evidence} •
              Nature: {vision.cosmosFirewall.nature}
            </p>

            <ul className="space-y-1 text-xs text-amber-800 italic">
              {vision.cosmosFirewall.explicitNegativeBoundaries.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

FutureVisionSection.displayName = 'FutureVisionSection';
