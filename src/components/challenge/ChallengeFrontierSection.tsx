import React from 'react';
import { getAllChallenges } from '@/content/challenge/challenge';
import { getChallengeEvidenceVisualConstraint } from '@/content/challenge/visualRegistry';

export const ChallengeFrontierSection: React.FC = () => {
  const challenges = getAllChallenges();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {challenges.map((challenge) => {
          const evidenceConstraint = getChallengeEvidenceVisualConstraint(challenge.evidenceState);

          return (
            <div
              key={challenge.id}
              className="group border-border bg-card flex flex-col justify-between rounded-2xl border p-5 transition-all hover:border-amber-500/40 hover:shadow-md"
            >
              <div>
                {/* Header: ID + Evidence Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-muted text-foreground rounded-md px-2.5 py-1 font-mono text-xs font-bold">
                    {challenge.id}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase ${evidenceConstraint.badgeStyle}`}
                  >
                    {challenge.evidenceState}
                  </span>
                </div>

                {/* Challenge Title */}
                <h4 className="text-foreground mt-4 text-base font-bold transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
                  {challenge.canonicalName}
                </h4>

                {/* Headline / Summary */}
                <p className="text-muted-foreground mt-2 line-clamp-3 text-xs leading-relaxed">
                  {challenge.problemStatement}
                </p>

                {/* Pressure Vectors */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {challenge.pressureVectors.map((pv) => (
                    <span
                      key={pv}
                      className="bg-muted/60 text-muted-foreground inline-flex items-center rounded-sm px-1.5 py-0.5 font-mono text-[10px]"
                    >
                      {pv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Nexus Program + Non-Claim Count */}
              <div className="border-border/50 text-muted-foreground mt-6 flex items-center justify-between border-t pt-3 text-[11px]">
                <span className="font-mono">{challenge.relatedPrograms[0]}</span>
                <span className="font-medium text-amber-600 dark:text-amber-400">
                  {challenge.knownFailureModes.length} Failure Modes
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
