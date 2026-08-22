import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { FileCheck, CheckCircle2 } from 'lucide-react';

export const EvidenceSection: React.FC = () => {
  const { claims } = OVERVIEW_CONTENT;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {claims.map((claim) => (
          <div
            key={claim.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md sm:p-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="rounded bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-800 uppercase">
                  {claim.provenance.authorityTier.replace('_', ' ')}
                </span>
                <div className="flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>{claim.evidence}</span>
                </div>
              </div>

              <p className="font-sans text-sm leading-snug font-semibold text-slate-900 sm:text-base">
                {claim.statement}
              </p>
            </div>

            <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="flex items-center gap-1 text-slate-600">
                  <FileCheck className="h-3.5 w-3.5 text-slate-400" />
                  <span>Source Artifact:</span>
                </span>
                <span className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 font-bold text-slate-900">
                  {claim.provenance.sourceId}
                </span>
              </div>

              {claim.limitations && claim.limitations.length > 0 && (
                <div className="mt-2 rounded-lg border border-amber-200/60 bg-amber-50/60 p-2.5 text-[11px] text-amber-800 italic">
                  * Note: {claim.limitations[0]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

EvidenceSection.displayName = 'EvidenceSection';
