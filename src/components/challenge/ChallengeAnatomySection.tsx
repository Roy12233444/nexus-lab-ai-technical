import React, { useState } from 'react';
import { getAllChallenges } from '@/content/challenge/challenge';
import { ChallengeId } from '@/types/challenge';
import { getChallengeEvidenceVisualConstraint } from '@/content/challenge/visualRegistry';

export const ChallengeAnatomySection: React.FC = () => {
  const challenges = getAllChallenges();
  const [selectedId, setSelectedId] = useState<ChallengeId>('CH-001');

  const selectedChallenge = challenges.find((c) => c.id === selectedId) || challenges[0];
  const evidenceConstraint = getChallengeEvidenceVisualConstraint(selectedChallenge.evidenceState);

  return (
    <div className="space-y-8">
      {/* Challenge Selector Tabs */}
      <div className="border-border bg-card flex flex-wrap gap-2 rounded-xl border p-2 shadow-xs">
        {challenges.map((c) => {
          const isSelected = c.id === selectedId;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-foreground text-background shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span className="font-bold">{c.id}</span>
              <span className="hidden max-w-[120px] truncate text-[11px] sm:inline">
                {c.canonicalName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Challenge Mechanistic Dossier */}
      <div className="border-border bg-card rounded-2xl border p-6 shadow-sm sm:p-8">
        {/* Header */}
        <div className="border-border flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-muted text-foreground rounded-md px-2.5 py-1 font-mono text-xs font-bold">
                {selectedChallenge.id}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase ${evidenceConstraint.badgeStyle}`}
              >
                {selectedChallenge.evidenceState}
              </span>
            </div>
            <h3 className="text-foreground mt-2 text-2xl font-bold">
              {selectedChallenge.canonicalName}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">{selectedChallenge.shortHeadline}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 self-start">
            {selectedChallenge.pressureVectors.map((pv) => (
              <span
                key={pv}
                className="inline-flex items-center rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-1 font-mono text-xs font-semibold text-amber-700 dark:text-amber-300"
              >
                {pv}
              </span>
            ))}
          </div>
        </div>

        {/* Why Autonomy Escalates Difficulty */}
        <div className="border-border/80 bg-background/60 mt-6 rounded-xl border p-5">
          <div className="text-xs font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400">
            Why Autonomy Escalates Difficulty
          </div>
          <p className="text-foreground mt-2 text-sm leading-relaxed">
            {selectedChallenge.whyAutonomyEscalatesDifficulty}
          </p>
        </div>

        {/* Technical Dimensions + Known Failure Modes */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Technical Dimensions */}
          <div className="border-border bg-background/40 rounded-xl border p-5">
            <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Technical Dimensions & Invariants
            </h4>
            <ul className="mt-3 space-y-2">
              {selectedChallenge.technicalDimensions.map((dim, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground flex items-start gap-2 text-xs leading-relaxed"
                >
                  <span className="font-bold text-amber-600 dark:text-amber-400">•</span>
                  <span>{dim}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Known Failure Modes */}
          <div className="border-border bg-background/40 rounded-xl border p-5">
            <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Known Concrete Failure Modes ({selectedChallenge.knownFailureModes.length})
            </h4>
            <div className="mt-3 space-y-3">
              {selectedChallenge.knownFailureModes.map((fm) => (
                <div key={fm.id} className="border-border/60 bg-card rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-xs font-bold">{fm.name}</span>
                    <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 font-mono text-[10px]">
                      {fm.id}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {fm.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Research Questions */}
        <div className="border-border mt-6 border-t pt-6">
          <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
            Active Open Research Questions
          </h4>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {selectedChallenge.openResearchQuestions.map((rq) => (
              <div key={rq.id} className="border-border/80 bg-background/50 rounded-xl border p-4">
                <div className="flex items-center justify-between font-mono text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                  <span>{rq.id}</span>
                  <span className="text-muted-foreground text-[10px]">{rq.scope}</span>
                </div>
                <p className="text-foreground mt-2 text-xs leading-relaxed font-medium">
                  "{rq.question}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Negative Non-Claims */}
        <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
          <div className="text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-300">
            Explicit Negative Boundaries
          </div>
          <ul className="text-muted-foreground mt-2 space-y-1.5 text-xs">
            {selectedChallenge.negativeNonClaims.map((nc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-amber-600">✕</span>
                <span>{nc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
