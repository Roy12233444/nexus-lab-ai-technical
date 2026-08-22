import React from 'react';
import { getChallengeContent } from '@/content/challenge/challenge';

export const ChallengeHeroSection: React.FC = () => {
  const content = getChallengeContent();
  const { thesis } = content;

  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:py-24">
      {/* Background ambient gradient accents */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
              Nexus LAB AI Problem Frontier
            </div>

            <h1 className="text-foreground mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Hard Problems Behind Autonomous Intelligence
            </h1>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl">
              {thesis.statement}
            </p>

            {/* Quick Diagnostic Metrics */}
            <div className="border-border/60 mt-8 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
              <div className="border-border/50 bg-card/50 rounded-lg border p-3">
                <div className="text-foreground text-2xl font-bold">8</div>
                <div className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  Canonical Challenges
                </div>
              </div>
              <div className="border-border/50 bg-card/50 rounded-lg border p-3">
                <div className="text-foreground text-2xl font-bold">7</div>
                <div className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  Pressure Vectors
                </div>
              </div>
              <div className="border-border/50 bg-card/50 rounded-lg border p-3">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">16+</div>
                <div className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  Open Questions
                </div>
              </div>
              <div className="border-border/50 bg-card/50 rounded-lg border p-3">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  100%
                </div>
                <div className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                  Open Frontier
                </div>
              </div>
            </div>
          </div>

          {/* Derivation Steps Visual Panel (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="border-border bg-card rounded-2xl border p-6 shadow-sm">
              <div className="border-border flex items-center justify-between border-b pb-4">
                <span className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Systemic Derivation Sequence
                </span>
                <span className="bg-muted text-muted-foreground rounded-sm px-2 py-0.5 font-mono text-[10px]">
                  CANONICAL
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {thesis.derivationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group border-border/60 bg-background/50 hover:border-border hover:bg-background rounded-xl border p-4 transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                      <span>{step.step}</span>
                    </div>
                    <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/40 text-muted-foreground mt-4 rounded-lg p-3 text-[11px]">
                <span className="text-foreground font-semibold">Epistemic Note: </span>
                Challenges describe active engineering friction and scientific bottlenecks, not
                product roadmap features.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
