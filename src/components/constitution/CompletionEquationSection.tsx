import React, { useState } from 'react';
import { CONSTITUTION_DATA } from '@/content/constitution/constitution';
import { Check, X, RefreshCw, Calculator, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

export const CompletionEquationSection: React.FC = () => {
  const { tripartitePillars, completionEquation } = CONSTITUTION_DATA;

  // Interactive Factor States (1 = pass, 0 = fail)
  const [factorsState, setFactorsState] = useState<{ [key: string]: boolean }>({
    'Behavior': true,
    'Contract Compliance': true,
    'Invariant Preservation': true,
    'Boundary Integrity': true,
    'Persistence Correctness': true,
    'Recovery Correctness': true,
    'Adversarial Verification': true,
  });

  const toggleFactor = (name: string) => {
    setFactorsState((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const resetAll = () => {
    const allTrue: { [key: string]: boolean } = {};
    completionEquation.factors.forEach((f) => {
      allTrue[f.name] = true;
    });
    setFactorsState(allTrue);
  };

  // Zero-tolerance product: any false => 0%
  const isAllPassed = Object.values(factorsState).every(Boolean);
  const completionPercentage = isAllPassed ? 100 : 0;

  return (
    <div className="space-y-12">
      {/* Upper: The Tripartite Doctrine */}
      <div className="space-y-4">
        <div className="text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600">
            Normative Doctrine
          </span>
          <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            The Tripartite Distinction of Software Reality
          </h3>
          <p className="mt-2 max-w-3xl font-sans text-sm text-slate-600 sm:text-base leading-relaxed">
            Conventional software engineering conflates working UI with engineering truth. At Nexus LAB AI, feature completion is governed by three non-negotiable tiers:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-4">
          {tripartitePillars.map((pillar, idx) => (
            <div
              key={idx}
              className={clsx(
                'relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200',
                idx === 0 && 'border-slate-200 bg-white hover:border-slate-300',
                idx === 1 && 'border-sky-200 bg-sky-50/40 hover:border-sky-300',
                idx === 2 && 'border-emerald-200 bg-emerald-50/40 hover:border-emerald-300'
              )}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-slate-500 uppercase">
                    {pillar.level}
                  </span>
                  <span
                    className={clsx(
                      'rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase',
                      pillar.badgeColor === 'amber' && 'bg-amber-100 text-amber-800 border border-amber-200',
                      pillar.badgeColor === 'sky' && 'bg-sky-100 text-sky-800 border border-sky-200',
                      pillar.badgeColor === 'emerald' && 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    )}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <h4 className="font-sans text-lg font-bold text-slate-900">{pillar.title}</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed sm:text-sm">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lower: Interactive Multiplicative Completion Equation Visualizer */}
      <div
        id="completion-equation"
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-white shadow-xl sm:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300">
              <Calculator className="h-3.5 w-3.5" />
              <span>INTERACTIVE MATHEMATICAL AUDIT</span>
            </div>
            <h4 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3xl text-white">
              The Multiplicative Completion Law
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              {completionEquation.explanation}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-2 font-mono text-xs font-semibold text-slate-300 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset All Factors</span>
            </button>
          </div>
        </div>

        {/* The Mathematical Formula Banner */}
        <div className="my-8 overflow-x-auto rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 sm:p-6 backdrop-blur-md">
          <p className="font-mono text-center text-xs font-semibold tracking-wider text-sky-400 sm:text-sm md:text-base">
            COMPLETION = Behavior &times; Contract &times; Invariants &times; Boundary &times; Persistence &times; Recovery &times; Adversarial Verification
          </p>
        </div>

        {/* Interactive Factor Checklist & Real-Time Result Gauge */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Interactive Checklist */}
          <div className="space-y-2.5 lg:col-span-8">
            <p className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
              Toggle Any Factor to Simulate Engineering Shortfalls:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {completionEquation.factors.map((factor, idx) => {
                const passed = factorsState[factor.name];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleFactor(factor.name)}
                    className={clsx(
                      'flex items-center justify-between rounded-xl border p-3 text-left transition-all cursor-pointer',
                      passed
                        ? 'border-sky-500/40 bg-sky-950/20 hover:border-sky-400/60'
                        : 'border-rose-500/50 bg-rose-950/30 hover:border-rose-400'
                    )}
                  >
                    <div>
                      <span className="block font-sans text-xs font-bold text-white">
                        {factor.name}
                      </span>
                      <span className="block font-sans text-[11px] text-slate-400">
                        {factor.label}
                      </span>
                    </div>

                    <div
                      className={clsx(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold transition-all',
                        passed
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-400/50'
                      )}
                    >
                      {passed ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outcome Gauge */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/90 p-6 text-center lg:col-span-4">
            <div className="space-y-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Audited System Completion
              </span>
              <div
                className={clsx(
                  'font-mono text-5xl sm:text-6xl font-extrabold tracking-tight transition-all',
                  isAllPassed ? 'text-emerald-400' : 'text-rose-500'
                )}
              >
                {completionPercentage}%
              </div>
              <div className="pt-2">
                {isAllPassed ? (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                    <span>ARCHITECTURALLY PROVEN</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 font-mono text-xs font-bold text-rose-400">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    <span>TASK FAILED (ZERO TOLERANCE)</span>
                  </div>
                )}
              </div>
              <p className="mt-3 font-sans text-xs text-slate-400 leading-tight">
                {isAllPassed
                  ? 'All 7 dimensions verified. Feature meets Nexus canonical release standards.'
                  : 'A single unverified boundary or recovery flaw invalidates the entire capability.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
