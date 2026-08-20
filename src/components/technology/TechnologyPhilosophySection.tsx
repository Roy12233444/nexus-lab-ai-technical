import React from 'react';

export const TechnologyPhilosophySection: React.FC = () => {
  const axioms = [
    {
      code: 'AXIOM-01',
      title: 'Architectural Sovereignty',
      statement: 'Sovereign-by-construction, not sovereign-by-branding.',
      description:
        'We construct custom transformer attention primitives, fixed-point System-2 convergence solvers, and multi-agent consensus protocols from first principles rather than assembling superficial prompt wrappers around third-party APIs.',
    },
    {
      code: 'AXIOM-02',
      title: 'Multi-Timescale State Persistence',
      statement: 'Cognitive state must survive session termination without degradation.',
      description:
        'Memory is architected as a multi-tier persistent hierarchy. Ephemeral token context is strictly decoupled from episodic event histories, semantic graphs, and cryptographically hashed identity anchors.',
    },
    {
      code: 'AXIOM-03',
      title: 'Pre-Execution Constitutional Safety',
      statement: 'Interception before dispatch, not inspection after mutation.',
      description:
        'Safety cannot be an afterthought filter. We enforce deterministic constitutional invariants synchronously before tool invocations mutate external filesystems, databases, or API environments.',
    },
    {
      code: 'AXIOM-04',
      title: 'Transactional Crash Resilience',
      statement: 'Autonomous systems must resume deterministically from failure.',
      description:
        'Long-running autonomous loops are hardened with write-ahead logging (WAL), ARIES-style 3-phase recovery (Analysis, Redo, Undo), and automated runaway loop guards.',
    },
  ];

  return (
    <div className="w-full border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 02</span>
            <span className="text-slate-300">•</span>
            <span>ENGINEERING AXIOMS</span>
          </div>
          <h2
            id="tech-philosophy-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            First-Principles Systems Philosophy
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            How we engineer intelligent systems is governed by four non-negotiable axioms:
            sovereignty over wrappers, durable state over session amnesia, synchronous interception
            over post-hoc filtering, and transactional resilience over brittle execution.
          </p>
        </div>

        {/* 2x2 Axiom Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {axioms.map((axiom) => (
            <div
              key={axiom.code}
              className="space-y-4 rounded-xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-sky-300/80 hover:shadow-md sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono text-xs">
                <span className="font-bold text-sky-700">{axiom.code}</span>
                <span className="text-slate-400">FOUNDATIONAL AXIOM</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{axiom.title}</h3>
                <p className="text-sm font-semibold text-slate-700 italic">"{axiom.statement}"</p>
              </div>
              <p className="font-sans text-sm leading-relaxed text-slate-600">
                {axiom.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
