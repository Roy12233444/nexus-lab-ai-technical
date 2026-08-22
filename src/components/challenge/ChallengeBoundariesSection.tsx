import React from 'react';
import {
  getGlobalChallengeNegativeBoundaries,
  getQuarantinedChallengeClaims,
} from '@/content/challenge/challenge';

export const ChallengeBoundariesSection: React.FC = () => {
  const boundaries = getGlobalChallengeNegativeBoundaries();
  const quarantined = getQuarantinedChallengeClaims();

  return (
    <div className="space-y-8">
      {/* Global Negative Non-Claims Box */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 shadow-xs sm:p-8">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-300">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Institutional Negative Boundaries & Non-Claims
        </div>

        <h3 className="text-foreground mt-2 text-xl font-bold">
          What Nexus LAB AI Explicitly Does Not Claim
        </h3>

        <p className="text-muted-foreground mt-1 text-xs">
          Scientific discipline requires formal negative definitions to prevent commercial hyperbole
          and capability inflation.
        </p>

        <ul className="mt-6 space-y-3">
          {boundaries.map((boundary, idx) => (
            <li
              key={idx}
              className="bg-background/60 text-muted-foreground flex items-start gap-3 rounded-lg border border-amber-500/20 p-3.5 text-xs"
            >
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">✕</span>
              <span className="leading-relaxed">{boundary}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quarantined Claims Isolation Firewall */}
      <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 shadow-xs sm:p-8">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-rose-700 uppercase dark:text-rose-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          Quarantined Claims Isolation Firewall
        </div>

        <h3 className="text-foreground mt-2 text-xl font-bold">
          Quarantined Epistemic Inaccuracies
        </h3>

        <p className="text-muted-foreground mt-1 text-xs">
          The following statements represent ungrounded, inflated, or false claims quarantined by
          our verification engine. They are rendered exclusively with strike-through protection to
          preserve auditability.
        </p>

        <div className="mt-6 space-y-4">
          {quarantined.map((item) => (
            <div
              key={item.id}
              className="bg-background/70 rounded-xl border border-rose-500/20 p-4"
            >
              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-rose-600 dark:text-rose-400">
                <span>{item.id}</span>
                <span className="rounded-sm bg-rose-500/10 px-1.5 py-0.5 uppercase">
                  QUARANTINED
                </span>
              </div>

              {/* Raw Struck-Through Statement */}
              <div className="text-muted-foreground mt-2 text-xs font-medium line-through decoration-rose-500 decoration-2">
                "{item.rawStatement}"
              </div>

              {/* Reason and Correction Requirement */}
              <div className="border-border/40 mt-3 grid grid-cols-1 gap-2 border-t pt-2.5 text-[11px] sm:grid-cols-2">
                <div>
                  <span className="font-semibold text-rose-700 dark:text-rose-400">
                    Quarantine Reason:{' '}
                  </span>
                  <span className="text-muted-foreground">{item.quarantineReason}</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    Correction Requirement:{' '}
                  </span>
                  <span className="text-muted-foreground">{item.correctionRequirement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
