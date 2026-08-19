import React from 'react';

export const ResearchDomainsSection: React.FC = () => {
  const domains = [
    {
      num: '01',
      title: 'Agent Execution & Orchestration',
      program: 'NALA',
      tag: 'RUNTIME SUBSTRATE',
      challenge:
        'Multi-step process collapse and crash recovery failure in long-running autonomous workflows.',
      capabilities: [
        'Multi-timescale loop orchestration',
        'Transactional state checkpointing',
        'Deterministic crash resumption',
        'Isolated execution sandboxing',
      ],
    },
    {
      num: '02',
      title: 'Durable Memory & Identity',
      program: 'AMP',
      tag: 'COGNITIVE PERSISTENCE',
      challenge:
        'Stateless session loss, context buffer exhaustion, and catastrophic semantic amnesia in LLMs.',
      capabilities: [
        'Working & episodic memory tiers',
        'Cryptographic state parameter hashing',
        'Background semantic consolidation',
        'Deterministic identity preservation',
      ],
    },
    {
      num: '03',
      title: 'Constitutional Safety & Governance',
      program: 'RTA-GUARD',
      tag: 'INTERCEPTION MIDDLEWARE',
      challenge:
        'Autonomous tool misfires, privilege escalation, and runtime divergence from invariant safety rules.',
      capabilities: [
        'Synchronous pre-execution action gating',
        'Constitutional policy rule verification',
        'Payload and token anomaly detection',
        'Tamper-evident ARIES forensic logging',
      ],
    },
    {
      num: '04',
      title: 'Distributed Multi-Orbital Systems',
      program: 'COSMOS',
      tag: 'SPACE-GRADE ARCHITECTURE',
      challenge:
        'Deep-space latency, radiation faults, and intermittent ground connectivity in satellite swarms.',
      capabilities: [
        'Delay-Tolerant Networking (DTN)',
        'Autonomous orbital edge station-keeping',
        'Inter-satellite mesh coordination',
        'High-fidelity digital-twin simulation',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {domains.map((d) => (
        <div
          key={d.num}
          className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-sky-300"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sky-700">{d.num}</span>
              <span className="rounded bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-sky-800">
                {d.program}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">{d.title}</h3>
            <div className="mt-1 font-mono text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
              {d.tag}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-600">{d.challenge}</p>

            <div className="mt-4 border-t border-slate-100 pt-3">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                Target Capabilities
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                {d.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-sky-500"></span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
