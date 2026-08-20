import React from 'react';
import { CANONICAL_PROGRAMS_REGISTRY } from '@/content/programs/programs';

export const ProgramsBoundariesSection: React.FC = () => {
  const { quarantinedClaims } = CANONICAL_PROGRAMS_REGISTRY;

  return (
    <div className="space-y-8">
      {/* Editorial Lead Context */}
      <div className="max-w-3xl space-y-2">
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          To prevent epistemic drift and marketing hyperbole, Nexus LAB AI maintains an explicit,
          publicly visible register of boundary constraints and non-claims.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Side: Epistemic Safeguards Declaration */}
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-4 lg:p-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-sky-700 uppercase">
              Epistemic Safeguards
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Truth & Boundary Invariants
          </h3>
          <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
            Our systems engineering claims are bound strictly by verifiable empirical evidence,
            documented mathematical specifications, and continuous regression tests.
          </p>
          <div className="rounded-lg border border-sky-200 bg-sky-50/60 p-3 font-mono text-[11px] text-sky-900">
            🔒 INVARIANT: Unverified or speculative assertions are quarantined and prohibited from
            public representation.
          </div>
        </div>

        {/* Right Side: Quarantined Non-Claims Grid */}
        <div className="space-y-3 lg:col-span-8">
          {quarantinedClaims.map((qc) => (
            <div
              key={qc.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-slate-300 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-base font-bold text-red-500 select-none">✕</span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-800 uppercase">
                      NON-CLAIM:
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-slate-500">
                      [{qc.programId}]
                    </span>
                  </div>
                  <p className="font-sans text-xs font-medium text-slate-800 sm:text-sm">
                    "{qc.claim}"
                  </p>
                  <p className="pt-0.5 text-xs text-slate-500 italic">
                    Reason: {qc.quarantineReason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
