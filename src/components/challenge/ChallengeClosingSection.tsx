import React from 'react';

interface ChallengeClosingSectionProps {
  onNavigate?: (href: string) => void;
}

const TRACK_GATEWAYS = [
  {
    title: 'Research Programs',
    track: '04D',
    route: '/programs',
    description: 'Explore the 4 sovereign programs: NALA, AMP, RTA-GUARD, and COSMOS.',
    tag: 'SYSTEMS',
  },
  {
    title: 'Foundational Philosophy',
    track: '04E',
    route: '/philosophy',
    description:
      'Investigate Pramāṇa epistemology, agency, resilient state, and cognitive foundations.',
    tag: 'EPISTEMOLOGY',
  },
  {
    title: 'Strategic Future Track',
    track: '04F',
    route: '/future',
    description:
      'Examine research horizons, systems evolution, and sovereign long-range trajectories.',
    tag: 'HORIZONS',
  },
  {
    title: 'Technology Substrates',
    track: '04C',
    route: '/technology',
    description: 'Review sovereign technology domains, runtime substrates, and execution engines.',
    tag: 'PLATFORM',
  },
];

export const ChallengeClosingSection: React.FC<ChallengeClosingSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 py-8">
      {/* Reflective Monolith Statement */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="border-border bg-muted/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-xs font-semibold tracking-wider uppercase">
          Open Problem Frontier
        </span>

        <h3 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          The Frontier of Autonomous Intelligence Remains Open
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          Autonomous intelligence is not defined only by what models can generate under frictionless
          test conditions, but by whether distributed systems can remain coherent, verifiable, and
          resilient while operating through time, cascading failure, epistemic uncertainty, and
          continuous environmental change.
        </p>
      </div>

      {/* Cross-Route Navigation Gateway Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRACK_GATEWAYS.map((gateway) => (
          <div
            key={gateway.route}
            className="group border-border bg-card flex flex-col justify-between rounded-2xl border p-6 shadow-xs transition-all hover:border-amber-500/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="bg-muted text-foreground rounded-md px-2 py-0.5 font-mono text-[10px] font-bold">
                  {gateway.track}
                </span>
                <span className="text-muted-foreground font-mono text-[10px] uppercase">
                  {gateway.tag}
                </span>
              </div>

              <h4 className="text-foreground mt-4 text-base font-bold transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
                {gateway.title}
              </h4>

              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                {gateway.description}
              </p>
            </div>

            <div className="border-border/50 mt-6 border-t pt-3">
              <button
                onClick={() => onNavigate?.(gateway.route)}
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                Explore Track →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
