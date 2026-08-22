import React from 'react';
import { getAllChallenges } from '@/content/challenge/challenge';

export const ChallengeOpenQuestionsSection: React.FC = () => {
  const challenges = getAllChallenges();

  return (
    <div className="space-y-8">
      {/* Intro Note */}
      <div className="border-border bg-card rounded-xl border p-6 shadow-xs">
        <h3 className="text-foreground text-base font-bold">
          The Unresolved Scientific & Systems Docket
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">
          Open research questions are not delayed commercial features; they represent active
          mathematical, algorithmic, and systems frontiers where verified solutions do not yet
          exist.
        </p>
      </div>

      {/* 2-Column Question Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {challenges.map((c) => (
          <div
            key={c.id}
            className="border-border bg-card flex flex-col justify-between rounded-2xl border p-6 shadow-xs"
          >
            <div>
              {/* Header */}
              <div className="border-border flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-muted text-foreground rounded-md px-2 py-0.5 font-mono text-xs font-bold">
                    {c.id}
                  </span>
                  <span className="text-foreground max-w-[200px] truncate text-xs font-bold">
                    {c.canonicalName}
                  </span>
                </div>
                <span className="text-muted-foreground font-mono text-[10px]">
                  {c.openResearchQuestions.length} QUESTIONS
                </span>
              </div>

              {/* Research Questions List */}
              <div className="mt-4 space-y-3">
                {c.openResearchQuestions.map((rq) => (
                  <div
                    key={rq.id}
                    className="border-border/60 bg-background/50 rounded-lg border p-3.5"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      <span>{rq.id}</span>
                      <span className="text-muted-foreground text-[10px]">{rq.scope}</span>
                    </div>
                    <p className="text-foreground mt-1.5 text-xs leading-relaxed font-medium">
                      "{rq.question}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-border/40 text-muted-foreground mt-4 flex justify-between border-t pt-3 text-[11px]">
              <span>
                Evidence Tier:{' '}
                <strong className="text-foreground font-mono">{c.evidenceState}</strong>
              </span>
              <span className="font-mono">{c.relatedPrograms[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
