import React from 'react';

export const ResearchThesisSection: React.FC = () => {
  const thesisPillars = [
    {
      num: '01',
      failure: 'State Collapse & Crash Fragility',
      solution: 'Multi-timescale continuous checkpointing and deterministic crash recovery.',
      vector: 'NALA',
    },
    {
      num: '02',
      failure: 'Session Amnesia & Identity Drift',
      solution: 'Multi-tier episodic and semantic memory backed by cryptographic state hashing.',
      vector: 'AMP',
    },
    {
      num: '03',
      failure: 'Unchecked Action Execution',
      solution: 'Pre-execution synchronous action interception enforcing constitutional invariants.',
      vector: 'RTA-GUARD',
    },
    {
      num: '04',
      failure: 'Communication Latency & Space Faults',
      solution: 'Decentralized delay-tolerant operating systems for multi-orbital swarms.',
      vector: 'COSMOS',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
      {/* Left Column: Core Research Worldview */}
      <div className="lg:col-span-5">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Why Ephemeral AI Wrappers Fail
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Contemporary foundation models operate predominantly as stateless inference engines. When extended into autonomous workflows, they suffer rapid context exhaustion, memory amnesia, non-deterministic action side effects, and catastrophic failure under network partitions.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Nexus LAB AI investigates the foundational substrate required to transform fragile prompt loops into durable, verified, sovereign intelligent systems.
        </p>
      </div>

      {/* Right Column: 4 Failure-to-Solution Pillars */}
      <div className="space-y-4 lg:col-span-7">
        {thesisPillars.map((pillar) => (
          <div
            key={pillar.num}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-sky-300 sm:flex-row sm:items-start sm:gap-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 font-mono text-xs font-bold text-sky-700">
              {pillar.num}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {pillar.failure}
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium text-slate-600">
                  {pillar.vector}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{pillar.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
