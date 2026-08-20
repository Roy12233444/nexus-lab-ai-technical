import React from 'react';
import {
  getPublicTechnologyClaims,
  CANONICAL_TECHNOLOGY_REGISTRY,
} from '@/content/technology/technology';

export const TechnologyEvidenceSection: React.FC = () => {
  const claims = getPublicTechnologyClaims();
  const quarantinedClaims = CANONICAL_TECHNOLOGY_REGISTRY.quarantinedClaims;

  return (
    <div className="w-full border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 08</span>
            <span className="text-slate-300">•</span>
            <span>EPISTEMIC HYGIENE</span>
          </div>
          <h2
            id="tech-evidence-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Evidence, Truth Matrix & Engineering Boundaries
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Nexus LAB AI separates empirical proof from theoretical specifications. Every public
            technology statement is mapped to its evidence level and verification boundary.
          </p>
        </div>

        {/* Evidence Truth Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/60 px-6 py-4">
            <span className="font-mono text-xs font-bold tracking-wider text-slate-700 uppercase">
              Authoritative Technology Claim Register ({claims.length} Claims)
            </span>
            <span className="font-mono text-xs text-slate-500">DECOUPLED 4-AXIS TRUTH</span>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto">
            {claims.map((claim) => (
              <div
                key={claim.id}
                className="grid grid-cols-1 items-start gap-4 p-5 transition-colors hover:bg-slate-50/70 sm:p-6 md:grid-cols-12"
              >
                <div className="space-y-1 md:col-span-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-sky-800">{claim.id}</span>
                    <span className="py-0.2 rounded border border-sky-200 bg-sky-50 px-1.5 font-mono text-[10px] text-sky-700">
                      {claim.evidenceLevel}
                    </span>
                  </div>
                  <span className="block truncate font-mono text-[11px] text-slate-400">
                    {claim.sourceDoc}
                  </span>
                </div>

                <div className="font-sans text-sm font-medium text-slate-800 md:col-span-5">
                  {claim.statement}
                </div>

                <div className="rounded-lg border border-slate-200/60 bg-slate-50 p-2.5 font-mono text-xs text-slate-500 md:col-span-4">
                  <span className="mb-0.5 block font-bold text-slate-700">BOUNDARY:</span>
                  {claim.verificationBoundary || 'Defined in engineering specification.'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quarantined Non-Claims Box */}
        <div className="space-y-4 rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-wider text-rose-900 uppercase">
            <span className="h-2 w-2 rounded-full bg-rose-600" />
            <span>[✗] Quarantined Assertions & Explicit Non-Claims (Public Firewall)</span>
          </div>
          <p className="font-sans text-xs leading-relaxed text-rose-950 sm:text-sm">
            The following unbacked assertions are explicitly quarantined from public technical
            claims:
          </p>
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            {quarantinedClaims.map((qc) => (
              <div
                key={qc.id}
                className="space-y-1.5 rounded-xl border border-rose-200/80 bg-white/90 p-4 font-sans text-xs text-rose-950 shadow-2xs"
              >
                <div className="flex items-center justify-between font-mono text-[10px] font-semibold text-rose-700">
                  <span>{qc.id}</span>
                  <span>NON-CLAIM</span>
                </div>
                <p className="font-semibold text-slate-900">"{qc.claim}"</p>
                <p className="border-t border-rose-100 pt-1 font-mono text-[11px] text-slate-600">
                  REASON: {qc.quarantineReason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
