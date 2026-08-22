import React from 'react';

interface CascadeNode {
  step: string;
  title: string;
  description: string;
  governingChallenge: string;
  icon: string;
}

const CASCADE_STEPS: CascadeNode[] = [
  {
    step: '01',
    title: 'State Inconsistency',
    description: 'Context buffer pruning or checkpoint misalignment produces stale internal facts.',
    governingChallenge: 'CH-001 (Continuity)',
    icon: '⏳',
  },
  {
    step: '02',
    title: 'Inference Miscalibration',
    description: 'Underlying model assigns high confidence to ungrounded synthetic assumptions.',
    governingChallenge: 'CH-004 (Epistemics)',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Erroneous Tool Action',
    description: 'Agent issues non-idempotent real-world API mutations based on false premises.',
    governingChallenge: 'CH-007 (Responsibility)',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Partial Mutation Failure',
    description: 'External network timeout leaves persistent filesystem or database half-written.',
    governingChallenge: 'CH-003 (Self-Recovery)',
    icon: '⚡',
  },
  {
    step: '05',
    title: 'Coordination Breakdown',
    description:
      'Subagents receive contradictory state updates, triggering deadlock or circular chatter.',
    governingChallenge: 'CH-005 (Coordination)',
    icon: '🌐',
  },
  {
    step: '06',
    title: 'Systemic Drift',
    description:
      'Unresolved error propagates across persistent memory, corrupting future operational loops.',
    governingChallenge: 'CH-008 (Resilience)',
    icon: '🌊',
  },
];

export const ChallengeCascadeSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Intro Note */}
      <div className="border-border bg-card rounded-xl border p-6 shadow-xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-foreground text-base font-bold">
              Compounding Error Dynamics in Autonomous Loops
            </h3>
            <p className="text-muted-foreground mt-0.5 text-sm">
              In persistent systems, failures are rarely isolated: a minor memory error compounds
              across reasoning, execution, and multi-agent coordination.
            </p>
          </div>
          <span className="inline-flex items-center self-start rounded-md bg-rose-500/10 px-2.5 py-1 font-mono text-xs font-medium text-rose-700 dark:text-rose-300">
            CONCEPTUAL CASCADE
          </span>
        </div>
      </div>

      {/* Directed System Graph Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CASCADE_STEPS.map((node, idx) => (
          <div
            key={node.step}
            className="group border-border bg-card relative flex flex-col justify-between rounded-2xl border p-5 transition-all hover:border-amber-500/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-muted text-foreground flex h-8 w-8 items-center justify-center rounded-lg font-mono text-sm font-bold">
                  {node.step}
                </span>
                <span className="text-xl" role="img" aria-label={node.title}>
                  {node.icon}
                </span>
              </div>

              <h4 className="text-foreground mt-4 text-base font-bold transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
                {node.title}
              </h4>

              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                {node.description}
              </p>
            </div>

            <div className="border-border/50 mt-5 flex items-center justify-between border-t pt-3 text-[11px]">
              <span className="text-muted-foreground font-medium">Origin:</span>
              <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">
                {node.governingChallenge}
              </span>
            </div>

            {/* Connecting Step Indicator for Desktop */}
            {idx < CASCADE_STEPS.length - 1 && (
              <div
                className="text-muted-foreground/40 absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 font-bold lg:block"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Epistemic Guardrail Note */}
      <div className="border-border/60 bg-muted/30 text-muted-foreground rounded-xl border p-4 text-xs">
        <span className="text-foreground font-semibold">Scientific Modeling Guardrail: </span>
        This cascade diagram illustrates conceptual error propagation paths across autonomous
        systems layers. It is an analytical diagnostic model and does not claim that autonomous
        failures follow a single universal deterministic sequence.
      </div>
    </div>
  );
};
