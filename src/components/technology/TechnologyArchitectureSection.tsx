import React, { useState } from 'react';

export const TechnologyArchitectureSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const tiers = [
    {
      tier: 1,
      name: 'TECHNICAL SUBSTRATES',
      subtitle: 'Underlying Machinery & Software Engines',
      description:
        'First-principles software engines, custom PyTorch neural blocks, Rust persistence drivers, ARIES recovery algorithms, and synchronous interception proxies.',
      examples: [
        'CHAITANYA Sovereign Transformer Blocks',
        'DHI Anderson-Accelerated Fixed-Point Solver',
        'NALA 4-Layer Autonomous Execution Harness',
        'AMP Chiranjeevi Rust Persistence Substrate',
        'ARIES Transactional Crash Recovery Substrate',
        'RTA-GUARD Pre-Execution Action Interceptor',
        'COSMOS Delay-Tolerant Space OS Blueprint',
      ],
      color: 'border-sky-300 bg-sky-50/50 text-sky-950',
    },
    {
      tier: 2,
      name: 'SYSTEMIC CAPABILITIES',
      subtitle: 'Problems Solved for Long-Horizon Systems',
      description:
        'The 18 strongly typed functional capabilities addressing hallucination, session amnesia, process crashes, privilege escalation, and orbital signal occultation.',
      examples: [
        'Sovereign Transformer Primitives & System-2 Solver',
        'Epistemic Multi-Agent Consensus (τ = 0.618)',
        'Decoupled 4-Layer Execution & Cost-Aware Routing',
        'Multi-Tier Cognitive Memory & State Erasure Coding',
        'ARIES Transactional Recovery & Sandbox Confinement',
        'Pre-Execution Action Interception & Invariant Checks',
        'Delay-Tolerant Networking & Digital-Twin Simulation',
      ],
      color: 'border-cyan-300 bg-cyan-50/50 text-cyan-950',
    },
    {
      tier: 3,
      name: 'SOVEREIGN PROJECTS',
      subtitle: 'Representative Implementation Vehicles',
      description:
        'Independent research and technology vehicles manifesting these capabilities under the Nexus LAB AI umbrella with zero cross-project operational coupling.',
      examples: [
        'NALA (Autonomous Agent Execution Harness)',
        'AMP (Durable Cognitive Memory Protocol)',
        'RTA-GUARD (Constitutional AI Safety Middleware)',
        'COSMOS (Multi-Orbital Operating System Blueprint)',
        'CHAITANYA & SAPTACORE (Reasoning & Consensus Core)',
        'PHANTAKSHA (Hardened Systems Terminal Relay)',
      ],
      color: 'border-slate-300 bg-slate-50/60 text-slate-950',
    },
  ];

  return (
    <div
      className="w-full bg-white border-b border-slate-200 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 03</span>
            <span className="text-slate-300">•</span>
            <span>SYSTEMS COMPOSITION</span>
          </div>
          <h2
            id="tech-arch-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            The Three-Tier Technology Architecture
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Nexus LAB AI technology is structured in three decoupled tiers: foundational software
            substrates that yield higher-level systemic capabilities, manifested across sovereign
            implementation projects.
          </p>
        </div>

        {/* 3-Tier Layered Interactive Diagram */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: Interactive Tier Selector */}
          <div className="space-y-4 lg:col-span-4">
            <span className="block font-mono text-xs font-bold tracking-wider text-slate-400 uppercase">
              Select Architecture Layer
            </span>
            {tiers.map((t) => (
              <button
                key={t.tier}
                onClick={() => setSelectedTier(t.tier)}
                className={`w-full rounded-xl border p-5 text-left transition-all ${
                  selectedTier === t.tier
                    ? 'border-sky-500 bg-sky-50/80 shadow-md ring-2 ring-sky-200'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="mb-1 flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-sky-700">TIER 0{t.tier}</span>
                  <span className="text-slate-400">
                    {selectedTier === t.tier ? '● ACTIVE INSPECTION' : 'INSPECT'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                <p className="mt-0.5 font-sans text-xs text-slate-500">{t.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Right: Detailed Tier Inspector Panel */}
          <div className="lg:col-span-8">
            {(() => {
              const current = tiers.find((t) => t.tier === selectedTier) || tiers[0];
              return (
                <div
                  className={`rounded-2xl border ${current.color} space-y-6 p-8 shadow-sm sm:p-10`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-sky-700">
                        TIER 0{current.tier} ARCHITECTURAL LAYER
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-slate-900">{current.name}</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-sky-300 bg-white px-3 py-1 font-mono text-xs text-sky-800">
                      {current.examples.length} CANONICAL ENTITIES
                    </span>
                  </div>

                  <p className="font-sans text-base leading-relaxed text-slate-700">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="block font-mono text-xs font-bold tracking-wider text-slate-500 uppercase">
                      Constituent Implementations & Capabilities:
                    </span>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {current.examples.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white/90 px-3.5 py-2.5 font-mono text-xs text-slate-800 shadow-2xs"
                        >
                          <span className="bg-nexus-cyan h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
