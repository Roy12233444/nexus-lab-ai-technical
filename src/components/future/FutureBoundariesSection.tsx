import React from 'react';
import { getFutureNonClaims, getQuarantinedFutureClaims } from '@/content/future/future';
import { ShieldAlert, XCircle, AlertTriangle, Lock } from 'lucide-react';

export const FutureBoundariesSection: React.FC = () => {
  const nonClaims = getFutureNonClaims();
  const quarantinedClaims = getQuarantinedFutureClaims();

  return (
    <div className="space-y-8">
      {/* Top: 7 Negative Boundaries */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-slate-700" />
          <span className="font-mono text-xs font-bold tracking-wider text-slate-800 uppercase">
            Global Negative Boundaries (What Nexus LAB AI Does NOT Claim)
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {nonClaims.map((claim, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-all hover:border-slate-300"
            >
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
              <p className="font-sans text-xs leading-relaxed font-medium text-slate-700 sm:text-sm">
                {claim}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Quarantined Claims Demonstration Firewall */}
      <div className="space-y-4 rounded-2xl border border-rose-200 bg-rose-50/40 p-6 shadow-2xs">
        <div className="flex items-center justify-between border-b border-rose-200 pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-rose-600" />
            <span className="font-mono text-xs font-bold tracking-wider text-rose-900 uppercase">
              Quarantine Isolation Firewall (Prohibited Claims Demonstration)
            </span>
          </div>
          <span className="rounded bg-rose-100 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-800">
            STRICTLY PROHIBITED FROM PUBLIC PROSE
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quarantinedClaims.map((q) => (
            <div
              key={q.id}
              className="space-y-2 rounded-xl border border-rose-200 bg-white p-4 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-rose-700">{q.id}</span>
                <Lock className="h-3 w-3 text-rose-400" />
              </div>

              {/* Raw Statement Strike-through */}
              <p className="font-sans text-xs text-slate-400 line-through">"{q.rawStatement}"</p>

              <div className="space-y-1 rounded-lg bg-rose-50 p-2 text-[11px] text-rose-800">
                <span className="block font-mono text-[10px] font-bold uppercase">
                  Quarantine Reason:
                </span>
                <p>{q.quarantineReason}</p>
              </div>

              <div className="pt-1 font-mono text-[10px] text-slate-500">
                Correction: {q.correctionRequirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FutureBoundariesSection.displayName = 'FutureBoundariesSection';
