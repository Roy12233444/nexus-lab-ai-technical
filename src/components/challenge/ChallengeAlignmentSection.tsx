import React, { useState } from 'react';
import { getChallengeCrossTrackMappings, getAllChallenges } from '@/content/challenge/challenge';
import { ChallengeId } from '@/types/challenge';
import { Layers, BookOpen, Compass, ArrowRight, ShieldCheck, Network } from 'lucide-react';

interface ChallengeAlignmentSectionProps {
  onNavigate?: (href: string) => void;
}

export const ChallengeAlignmentSection: React.FC<ChallengeAlignmentSectionProps> = ({
  onNavigate,
}) => {
  const mappings = getChallengeCrossTrackMappings();
  const challenges = getAllChallenges();
  const [selectedId, setSelectedId] = useState<ChallengeId>('CH-001');

  const activeMapping = mappings.find((m) => m.challengeId === selectedId) || mappings[0];
  const activeChallenge = challenges.find((c) => c.id === selectedId) || challenges[0];

  return (
    <div className="space-y-8">
      {/* Intro Header Card */}
      <div className="border-border bg-card rounded-2xl border p-6 shadow-xs sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-amber-500" />
              <span className="font-mono text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-300">
                Cross-Track Systems Alignment
              </span>
            </div>
            <h3 className="text-foreground text-xl font-bold sm:text-2xl">
              Cross-Track Structural Convergence
            </h3>
            <p className="text-muted-foreground max-w-3xl text-sm">
              Every technical challenge intersects with specific sovereign engineering programs,
              classical philosophical doctrines, and long-horizon research directions.
            </p>
          </div>

          <div className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 self-start rounded-xl border px-3.5 py-2 font-mono text-xs">
            <Network className="h-4 w-4 text-amber-500" />
            <span>3-Pillar Convergence Triad</span>
          </div>
        </div>
      </div>

      {/* Interactive Challenge Tab Switcher */}
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
              <span className="hidden max-w-[130px] truncate text-[11px] sm:inline">
                {c.canonicalName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Challenge Convergence Spotlight */}
      <div className="border-border bg-card rounded-2xl border p-6 shadow-sm sm:p-8">
        <div className="border-border flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-muted text-foreground rounded-md px-2.5 py-1 font-mono text-xs font-bold">
                {activeMapping.challengeId}
              </span>
              <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                Convergence Architecture
              </span>
            </div>
            <h4 className="text-foreground mt-2 text-2xl font-bold">
              {activeChallenge.canonicalName}
            </h4>
            <p className="text-muted-foreground mt-1 text-sm">{activeChallenge.shortHeadline}</p>
          </div>

          <button
            onClick={() => onNavigate?.('/programs')}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 font-mono text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-500/20 dark:text-amber-300"
          >
            <span>Inspect Linked Program</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* 3 Convergence Pillars */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Pillar 1: Sovereign Engineering Program */}
          <div className="border-border/80 bg-background/60 flex flex-col justify-between rounded-xl border p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                  Sovereign Program
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Layers className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="text-foreground mt-3 font-mono text-sm font-bold">
                {activeMapping.primaryNexusProgram}
              </div>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                Direct execution runtime substrate and active verification harness for this
                challenge.
              </p>
            </div>
            <div className="border-border/40 mt-4 border-t pt-3">
              <button
                onClick={() => onNavigate?.('/programs')}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                <span>View Program Specs</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Foundational Philosophy Anchor */}
          <div className="border-border/80 bg-background/60 flex flex-col justify-between rounded-xl border p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                  Philosophy Anchor
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <BookOpen className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="text-foreground mt-3 text-sm font-bold">
                <span className="mr-1.5 font-mono font-bold text-amber-600 dark:text-amber-400">
                  {activeMapping.philosophyConceptId}:
                </span>
                {activeMapping.philosophyConceptTitle}
              </div>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                Epistemological axioms, Pramāṇa truth boundaries, and non-anthropomorphic grounding.
              </p>
            </div>
            <div className="border-border/40 mt-4 border-t pt-3">
              <button
                onClick={() => onNavigate?.('/philosophy')}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
              >
                <span>View Epistemic Doctrine</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Strategic Future Vector */}
          <div className="border-border/80 bg-background/60 flex flex-col justify-between rounded-xl border p-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                  Future Vector
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Compass className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="text-foreground mt-3 text-sm font-bold">
                <span className="mr-1.5 font-mono font-bold text-purple-600 dark:text-purple-400">
                  {activeMapping.futureDirectionId}:
                </span>
                {activeMapping.futureDirectionTitle}
              </div>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                Long-range systems roadmap, asymptotic constraints, and next-generation research
                trajectory.
              </p>
            </div>
            <div className="border-border/40 mt-4 border-t pt-3">
              <button
                onClick={() => onNavigate?.('/future')}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400"
              >
                <span>View Future Direction</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Role Synthesis Box */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <div className="text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-300">
              Structural Role & Synergy
            </div>
            <p className="text-foreground text-xs leading-relaxed">
              {activeMapping.architecturalRole}
            </p>
          </div>
        </div>
      </div>

      {/* Complete 8-Card Relational Grid Overview */}
      <div className="space-y-4">
        <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
          Complete Cross-Track Matrix (8 Sovereign Challenges)
        </h4>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mappings.map((mapping) => {
            const challenge = challenges.find((c) => c.id === mapping.challengeId);
            const isSelected = mapping.challengeId === selectedId;

            return (
              <div
                key={mapping.challengeId}
                onClick={() => setSelectedId(mapping.challengeId)}
                className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all ${
                  isSelected
                    ? 'bg-card border-amber-500/60 shadow-md ring-2 ring-amber-500/20'
                    : 'border-border bg-card hover:border-amber-500/40 hover:shadow-md'
                }`}
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
                  <div className="mt-4 space-y-2.5 text-xs">
                    {/* Program Link */}
                    <div className="bg-muted/40 rounded-lg p-2.5">
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
                        <Layers className="h-3 w-3 text-blue-500" />
                        <span>Sovereign Program</span>
                      </div>
                      <div className="text-foreground mt-1 font-mono text-[11px] font-semibold">
                        {mapping.primaryNexusProgram}
                      </div>
                    </div>

                    {/* Philosophy Link */}
                    <div className="bg-muted/40 rounded-lg p-2.5">
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
                        <BookOpen className="h-3 w-3 text-amber-500" />
                        <span>Philosophy Anchor</span>
                      </div>
                      <div className="text-foreground mt-1 truncate text-[11px] font-medium">
                        <span className="mr-1 font-mono font-bold text-amber-600 dark:text-amber-400">
                          {mapping.philosophyConceptId}:
                        </span>
                        {mapping.philosophyConceptTitle}
                      </div>
                    </div>

                    {/* Future Link */}
                    <div className="bg-muted/40 rounded-lg p-2.5">
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase">
                        <Compass className="h-3 w-3 text-purple-500" />
                        <span>Future Vector</span>
                      </div>
                      <div className="text-foreground mt-1 truncate text-[11px] font-medium">
                        <span className="mr-1 font-mono font-bold text-purple-600 dark:text-purple-400">
                          {mapping.futureDirectionId}:
                        </span>
                        {mapping.futureDirectionTitle}
                      </div>
                    </div>
                  </div>

                  {/* Architectural Role Description */}
                  <p className="text-muted-foreground mt-3.5 line-clamp-3 text-xs leading-relaxed">
                    {mapping.architecturalRole}
                  </p>
                </div>

                {/* Exploration CTA */}
                <div className="border-border/50 mt-4 flex items-center justify-between border-t pt-3">
                  <span className="font-mono text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                    {isSelected ? 'ACTIVE SELECTION' : 'SELECT TO INSPECT'}
                  </span>
                  <ArrowRight className="text-muted-foreground h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
