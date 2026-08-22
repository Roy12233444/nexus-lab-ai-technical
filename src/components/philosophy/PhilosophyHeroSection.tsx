import React from 'react';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { PhilosophyHeroVisual } from './PhilosophyHeroVisual';

export const PhilosophyHeroSection: React.FC = () => {
  const { identity, metadata } = CANONICAL_PHILOSOPHY_REGISTRY;

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-white py-16 lg:py-24">
      {/* Subtle Coordinate Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Narrative & Epistemic Declaration */}
          <div className="space-y-6 lg:col-span-7">
            {/* Active Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 font-mono text-xs text-sky-800 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
              <span className="font-semibold tracking-wider">● PHILOSOPHY TRACK : ACTIVE</span>
            </div>

            {/* Main Single Page Heading */}
            <div className="space-y-2">
              <span className="block font-mono text-xs font-bold tracking-widest text-slate-500 uppercase">
                Nexus LAB AI Philosophy
              </span>
              <h1
                id="philosophy-hero-heading"
                className="text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                First-Principles Foundations for{' '}
                <span className="from-nexus-cyan to-nexus-blue bg-gradient-to-r via-sky-600 bg-clip-text text-transparent">
                  Verifiable Intelligence
                </span>
              </h1>
            </div>

            {/* Declaration Lead Statement */}
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-slate-600 sm:text-xl">
              {identity.declaration}
            </p>

            {/* Structural Metrics Ticker */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2">
                <span className="font-mono text-lg font-bold text-slate-900">
                  {metadata.totalConcepts}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Concepts</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2">
                <span className="font-mono text-lg font-bold text-slate-900">
                  0{metadata.principlesCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Principles</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2">
                <span className="font-mono text-lg font-bold text-slate-900">
                  {metadata.claimsCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Public Claims</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2">
                <span className="font-mono text-lg font-bold text-slate-900">
                  0{metadata.hypothesesCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">AI Hypotheses</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#philosophy-principles"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('philosophy-principles')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow"
              >
                Explore Foundational Principles
              </a>
              <a
                href="#philosophy-mapping"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('philosophy-mapping')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-sans text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
              >
                View Systems Alignment Matrix
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Substrate */}
          <div className="lg:col-span-5">
            <PhilosophyHeroVisual />
          </div>
        </div>
      </div>
    </div>
  );
};
