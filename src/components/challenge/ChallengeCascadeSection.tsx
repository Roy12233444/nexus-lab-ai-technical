import React, { useState } from 'react';
import {
  Database,
  Compass,
  Terminal,
  ZapOff,
  GitFork,
  Activity,
  ArrowRight,
  AlertTriangle,
  Layers,
  LucideIcon,
} from 'lucide-react';

interface CascadeStage {
  step: string;
  title: string;
  shortLabel: string;
  vulnerability: string;
  failureMechanism: string;
  downstreamImpact: string;
  governingChallenge: string;
  icon: LucideIcon;
  colorScheme: {
    badge: string;
    iconBg: string;
    border: string;
    glow: string;
  };
}

const CASCADE_STAGES: CascadeStage[] = [
  {
    step: '01',
    title: 'State Inconsistency',
    shortLabel: 'Memory / Checkpoint Drift',
    vulnerability: 'Context buffer pruning or non-deterministic serialization.',
    failureMechanism:
      'Checkpoint misalignment produces stale or contradictory internal working facts.',
    downstreamImpact: 'Subsequent reasoning operates on falsified premises.',
    governingChallenge: 'CH-001 (Continuity)',
    icon: Database,
    colorScheme: {
      badge: 'text-blue-700 bg-blue-500/10 border-blue-500/30 dark:text-blue-400',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      border: 'hover:border-blue-500/40',
      glow: 'from-blue-500/5',
    },
  },
  {
    step: '02',
    title: 'Inference Miscalibration',
    shortLabel: 'Epistemic Overconfidence',
    vulnerability: 'Lack of formal Pramāṇa evidence verification rails.',
    failureMechanism: 'Model assigns 99%+ probability to ungrounded synthetic deductions.',
    downstreamImpact: 'Agent converts hallucinated assumptions into executable action plans.',
    governingChallenge: 'CH-004 (Epistemics)',
    icon: Compass,
    colorScheme: {
      badge: 'text-indigo-700 bg-indigo-500/10 border-indigo-500/30 dark:text-indigo-400',
      iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      border: 'hover:border-indigo-500/40',
      glow: 'from-indigo-500/5',
    },
  },
  {
    step: '03',
    title: 'Erroneous Tool Action',
    shortLabel: 'Non-Idempotent Mutation',
    vulnerability: 'Pre-execution policy sandbox lacks dynamic parameter arbitration.',
    failureMechanism: 'Agent issues destructive API mutations, file writes, or database calls.',
    downstreamImpact: 'External environment enters mutated, uncoordinated state.',
    governingChallenge: 'CH-007 (Responsibility)',
    icon: Terminal,
    colorScheme: {
      badge: 'text-amber-700 bg-amber-500/10 border-amber-500/30 dark:text-amber-400',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      border: 'hover:border-amber-500/40',
      glow: 'from-amber-500/5',
    },
  },
  {
    step: '04',
    title: 'Partial Mutation Failure',
    shortLabel: 'Transactional Partition',
    vulnerability: 'Absence of two-phase commit or automatic inverse compensation.',
    failureMechanism: 'Network timeout leaves persistent storage corrupted and half-written.',
    downstreamImpact: 'Agent crash recovery fails due to broken transactional invariants.',
    governingChallenge: 'CH-003 (Self-Recovery)',
    icon: ZapOff,
    colorScheme: {
      badge: 'text-rose-700 bg-rose-500/10 border-rose-500/30 dark:text-rose-400',
      iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      border: 'hover:border-rose-500/40',
      glow: 'from-rose-500/5',
    },
  },
  {
    step: '05',
    title: 'Coordination Breakdown',
    shortLabel: 'Multi-Agent Deadlock',
    vulnerability: 'Quadratic messaging graph without Byzantine consensus arbitration.',
    failureMechanism: 'Subagents receive contradictory state snapshots, causing circular lockups.',
    downstreamImpact: 'Swarm exhausts compute budget on coordination chatter without progress.',
    governingChallenge: 'CH-005 (Coordination)',
    icon: GitFork,
    colorScheme: {
      badge: 'text-purple-700 bg-purple-500/10 border-purple-500/30 dark:text-purple-400',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      border: 'hover:border-purple-500/40',
      glow: 'from-purple-500/5',
    },
  },
  {
    step: '06',
    title: 'Systemic Drift',
    shortLabel: 'Persistent Entropy Growth',
    vulnerability: 'Non-stationary environment drift and corrupted memory consolidation.',
    failureMechanism: 'Unresolved execution faults poison long-term memory repositories.',
    downstreamImpact: 'Future reasoning cycles inherit compounding latent errors.',
    governingChallenge: 'CH-008 (Resilience)',
    icon: Activity,
    colorScheme: {
      badge: 'text-emerald-700 bg-emerald-500/10 border-emerald-500/30 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      border: 'hover:border-emerald-500/40',
      glow: 'from-emerald-500/5',
    },
  },
];

export const ChallengeCascadeSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');
  const activeStage = CASCADE_STAGES.find((s) => s.step === activeStep) || CASCADE_STAGES[0];

  return (
    <div className="space-y-8">
      {/* Intro Masthead */}
      <div className="border-border bg-card rounded-2xl border p-6 shadow-xs sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 animate-ping rounded-full bg-rose-500" />
              <span className="font-mono text-xs font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400">
                Compounding Vulnerability Propagation
              </span>
            </div>
            <h3 className="text-foreground text-xl font-bold sm:text-2xl">
              Systemic Cascading Failure Dynamics
            </h3>
            <p className="text-muted-foreground max-w-3xl text-sm">
              In persistent systems, failures are never isolated events: a latent memory defect
              propagates non-linearly through inference, tool execution, transactional rollback, and
              multi-agent consensus.
            </p>
          </div>

          <div className="border-border bg-muted/50 inline-flex items-center gap-2 self-start rounded-xl border px-3.5 py-2 font-mono text-xs">
            <Layers className="h-4 w-4 text-amber-500" />
            <span className="text-muted-foreground">6-Stage Cascade Circuit</span>
          </div>
        </div>
      </div>

      {/* Connected 6-Stage Circuit Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASCADE_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = stage.step === activeStep;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`group relative flex cursor-pointer flex-col justify-between rounded-2xl border p-6 transition-all ${
                  isSelected
                    ? 'bg-card border-amber-500/60 shadow-lg ring-2 ring-amber-500/20'
                    : 'border-border bg-card/80 hover:border-border/80 hover:bg-card shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar: Step Number + Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-foreground text-background flex h-8 w-8 items-center justify-center rounded-xl font-mono text-xs font-bold shadow-xs">
                        {stage.step}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl border ${stage.colorScheme.iconBg}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase ${stage.colorScheme.badge}`}
                    >
                      Stage {stage.step}
                    </span>
                  </div>

                  {/* Title & Short Label */}
                  <h4 className="text-foreground mt-4 text-lg font-bold transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    {stage.title}
                  </h4>
                  <div className="text-muted-foreground mt-0.5 font-mono text-xs font-medium">
                    {stage.shortLabel}
                  </div>

                  {/* Failure Mechanism Description */}
                  <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                    {stage.failureMechanism}
                  </p>
                </div>

                {/* Bottom Conduit Card Info */}
                <div className="border-border/60 mt-6 flex items-center justify-between border-t pt-4 text-xs">
                  <div className="text-muted-foreground flex items-center gap-1.5 font-mono text-[11px]">
                    <span className="text-foreground font-semibold">Origin:</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      {stage.governingChallenge}
                    </span>
                  </div>

                  {/* Stage Connection Indicator */}
                  {idx < CASCADE_STAGES.length - 1 ? (
                    <div className="text-muted-foreground/80 flex items-center gap-1 font-mono text-[11px] font-semibold">
                      <span>Next</span>
                      <ArrowRight className="h-3 w-3 text-amber-500" />
                    </div>
                  ) : (
                    <span className="font-mono text-[11px] font-semibold text-rose-500">
                      Systemic Drift
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Deep-Dive Inspection Panel */}
      <div className="border-border bg-card rounded-2xl border p-6 shadow-sm sm:p-8">
        <div className="border-border flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${activeStage.colorScheme.iconBg}`}
            >
              {React.createElement(activeStage.icon, { className: 'h-5 w-5' })}
            </div>
            <div>
              <div className="text-muted-foreground font-mono text-xs uppercase">
                Detailed Stage Anatomy • Stage {activeStage.step}
              </div>
              <h4 className="text-foreground text-xl font-bold">
                {activeStage.title} ({activeStage.shortLabel})
              </h4>
            </div>
          </div>

          <span className="self-start font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
            {activeStage.governingChallenge}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="border-border/80 bg-background/50 rounded-xl border p-4">
            <div className="text-muted-foreground flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              1. Root Vulnerability
            </div>
            <p className="text-foreground mt-2 text-xs leading-relaxed">
              {activeStage.vulnerability}
            </p>
          </div>

          <div className="border-border/80 bg-background/50 rounded-xl border p-4">
            <div className="text-muted-foreground flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              2. Failure Mechanism
            </div>
            <p className="text-foreground mt-2 text-xs leading-relaxed">
              {activeStage.failureMechanism}
            </p>
          </div>

          <div className="border-border/80 bg-background/50 rounded-xl border p-4">
            <div className="text-muted-foreground flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              3. Downstream Propagation
            </div>
            <p className="text-foreground mt-2 text-xs leading-relaxed">
              {activeStage.downstreamImpact}
            </p>
          </div>
        </div>
      </div>

      {/* Scientific Modeling Guardrail */}
      <div className="border-border/60 bg-muted/30 text-muted-foreground flex items-start gap-3 rounded-xl border p-4 text-xs">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
        <div>
          <span className="text-foreground font-semibold">Scientific Modeling Guardrail: </span>
          This cascade diagram illustrates conceptual error propagation paths across autonomous
          systems layers. It is an analytical diagnostic model and does not claim that autonomous
          failures follow a single universal deterministic sequence.
        </div>
      </div>
    </div>
  );
};
