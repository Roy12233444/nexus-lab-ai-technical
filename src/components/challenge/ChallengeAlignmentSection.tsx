import React from 'react';
import { getChallengeCrossTrackMappings, getAllChallenges } from '@/content/challenge/challenge';

interface ChallengeAlignmentSectionProps {
  onNavigate?: (href: string) => void;
}

export const ChallengeAlignmentSection: React.FC<ChallengeAlignmentSectionProps> = ({
  onNavigate,
}) => {
  const mappings = getChallengeCrossTrackMappings();
  const challenges = getAllChallenges();

  return (
    <div className="space-y-8">
      {/* Intro Box */}
      <div className="border-border bg-card rounded-xl border p-6 shadow-xs">
        <h3 className="text-foreground text-base font-bold">Cross-Track Structural Convergence</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          Every technical challenge intersects with specific sovereign engineering programs,
          classical philosophical doctrines, and long-horizon research directions.
        </p>
      </div>

      {/* Relational 4-Column Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mappings.map((mapping) => {
          const challenge = challenges.find((c) => c.id === mapping.challengeId);

          return (
            <div
              key={mapping.challengeId}
              className="border-border bg-card flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all hover:border-amber-500/40 hover:shadow-md"
            >
              <div>
                {/* Challenge Anchor */}
                <div className="border-border flex items-center justify-between border-b pb-3">
                  <span className="bg-muted text-foreground rounded-md px-2 py-0.5 font-mono text-xs font-bold">
                    {mapping.challengeId}
                  </span>
                  <span className="text-foreground max-w-[140px] truncate text-xs font-bold">
                    {challenge?.canonicalName}
                  </span>
                </div>

                {/* Relational Bridges */}
                <div className="mt-4 space-y-3 text-xs">
                  {/* Program Link */}
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                      04D Sovereign Program
                    </div>
                    <div className="text-foreground mt-1 font-mono font-semibold">
                      {mapping.primaryNexusProgram}
                    </div>
                  </div>

                  {/* Philosophy Link */}
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                      04E Philosophy Anchor
                    </div>
                    <div className="text-foreground mt-1 font-medium">
                      <span className="mr-1 font-mono font-bold text-amber-600 dark:text-amber-400">
                        {mapping.philosophyConceptId}:
                      </span>
                      {mapping.philosophyConceptTitle}
                    </div>
                  </div>

                  {/* Future Link */}
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                      04F Future Vector
                    </div>
                    <div className="text-foreground mt-1 font-medium">
                      <span className="mr-1 font-mono font-bold text-blue-600 dark:text-blue-400">
                        {mapping.futureDirectionId}:
                      </span>
                      {mapping.futureDirectionTitle}
                    </div>
                  </div>
                </div>

                {/* Architectural Role Description */}
                <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                  {mapping.architecturalRole}
                </p>
              </div>

              {/* Exploration CTA */}
              <div className="border-border/50 mt-5 border-t pt-3">
                <button
                  onClick={() => onNavigate?.('/programs')}
                  className="inline-flex items-center gap-1 font-mono text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  Inspect Program Architecture →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
