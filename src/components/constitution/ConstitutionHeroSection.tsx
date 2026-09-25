import React from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { ShieldCheck, Scale, Cpu, Terminal, FileText, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

export interface ConstitutionHeroSectionProps {
  onExploreInvariants?: () => void;
  onExploreEquation?: () => void;
}

export const ConstitutionHeroSection: React.FC<ConstitutionHeroSectionProps> = ({
  onExploreInvariants,
  onExploreEquation,
}) => {
  const { metadata, axioms } = CONSTITUTION_DATA;

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-white py-16 lg:py-24">
      {/* Precision Geometric Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Institutional Declaration */}
          <div className="space-y-6 lg:col-span-7">
            {/* Active Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-3.5 py-1.5 font-mono text-xs text-sky-800 shadow-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-600" />
              <span className="font-semibold tracking-wider">NORMATIVE OPERATING CHARTER : V1.0</span>
            </div>

            {/* Main Single Page Heading */}
            <div className="space-y-2">
              <span className="block font-mono text-xs font-bold tracking-widest text-slate-500 uppercase">
                Nexus LAB AI Public Specification
              </span>
              <h1
                id="constitution-hero-heading"
                className="text-4xl leading-[1.12] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                The Architecture{' '}
                <span className="from-sky-600 via-cyan-600 to-blue-700 bg-gradient-to-r bg-clip-text text-transparent">
                  Constitution
                </span>
              </h1>
            </div>

            {/* Mission Statement */}
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-slate-600 sm:text-xl">
              {metadata.subtitle}. {metadata.scope}
            </p>

            {/* Quote / Prime Directive */}
            <div className="relative rounded-2xl border-l-4 border-sky-500 bg-slate-50 p-4 sm:p-5">
              <p className="font-mono text-xs leading-relaxed text-slate-700 italic sm:text-sm">
                &ldquo;{metadata.axiom}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2 font-mono text-[11px] font-bold text-sky-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>BINDING DOCTRINE: FORENSIC-FIRST • CONTRACT-FIRST • INVARIANT-FIRST</span>
              </div>
            </div>

            {/* Structural Metrics Ticker */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 shadow-2xs">
                <Scale className="h-4 w-4 text-sky-600" />
                <span className="font-mono text-lg font-bold text-slate-900">
                  {metadata.stats.invariantsCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Invariants</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 shadow-2xs">
                <Terminal className="h-4 w-4 text-rose-600" />
                <span className="font-mono text-lg font-bold text-slate-900">
                  {metadata.stats.antiPatternsCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Outlawed Patterns</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 shadow-2xs">
                <Cpu className="h-4 w-4 text-emerald-600" />
                <span className="font-mono text-lg font-bold text-slate-900">
                  {metadata.stats.pipelineStagesCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">DoD Stages</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 shadow-2xs">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="font-mono text-lg font-bold text-slate-900">
                  0{metadata.stats.governingAxiomsCount}
                </span>
                <span className="font-mono text-xs text-slate-600 uppercase">Axioms</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onExploreInvariants}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md cursor-pointer"
              >
                <Scale className="h-4 w-4 text-sky-400" />
                <span>Explore 15 Invariants</span>
                <ArrowDown className="h-4 w-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={onExploreEquation}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-sans text-sm font-semibold text-slate-700 shadow-2xs transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-slate-500" />
                <span>Completion Formula</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Seal / Constitutional Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 p-6 shadow-xl sm:p-8 backdrop-blur-xs">
              {/* Luminous Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-sky-400">
                    <Scale className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-900 uppercase">
                    Canonical Mandate
                  </span>
                </div>
                <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
                  ENFORCED
                </span>
              </div>

              {/* Sub-Axioms Preview */}
              <div className="mt-5 space-y-3">
                <p className="font-mono text-xs font-bold text-slate-500 tracking-wider uppercase">
                  Governing Engineering Maxims
                </p>
                <div className="space-y-2">
                  {axioms.slice(0, 5).map((ax, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-2xs transition-colors hover:border-sky-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-600" />
                      <div>
                        <span className="block font-mono text-xs font-bold text-slate-900">
                          {ax.rule}
                        </span>
                        <span className="block font-sans text-xs text-slate-500 leading-tight">
                          {ax.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Attribution */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-900 p-3.5 text-white">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span className="font-mono text-xs font-medium text-slate-300">
                    Standard: Nexus Architecture Spec
                  </span>
                </div>
                <span className="font-mono text-xs text-sky-300 font-bold">STRICT CONTRACT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
