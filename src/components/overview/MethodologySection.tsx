import React from 'react';
import { Card } from '@/components/ui/Card';
import { Tabs } from '@/components/ui/Tabs';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';

export const MethodologySection: React.FC = () => {
  const { innovationEngine } = OVERVIEW_CONTENT;

  const macroStages = [
    {
      stage: '01. INSPIRATION',
      question: 'What fundamental unsolved limitation or phenomenon needs addressing?',
      detail:
        'Investigating core bottlenecks in intelligence, persistent state, or safety constraints.',
    },
    {
      stage: '02. FORMALIZATION',
      question: 'Can the solution be mathematically modeled and architecturally bounded?',
      detail:
        'Rigorous theoretical proofs, algorithm design, and constitutional rule specifications.',
    },
    {
      stage: '03. VALIDATION',
      question: 'What empirical experiment proves or disproves the formal model?',
      detail: 'Harness testing, chaos injection runs, and mathematical boundary verification.',
    },
    {
      stage: '04. ENGINEERING',
      question: 'How do we build durable, high-reliability software architectures?',
      detail:
        'Rust/Python implementations, memory-safe execution, and system-level fault tolerance.',
    },
    {
      stage: '05. IMPACT',
      question: 'How does validated technology yield downstream sovereign capability?',
      detail:
        'Preserving institutional knowledge, publishing evidence dossiers, and product integration.',
    },
  ];

  const macroContent = (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {macroStages.map((item, idx) => (
        <Card
          key={idx}
          variant="default"
          padding="md"
          className="flex flex-col gap-2.5 border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]"
        >
          <span className="nexus-code-inline text-[11px] font-semibold text-[var(--nexus-text-primary)]">
            {item.stage}
          </span>
          <p className="nexus-body-sm leading-snug font-medium text-[var(--nexus-text-primary)]">
            {item.question}
          </p>
          <p className="nexus-meta-label mt-auto border-t border-[var(--nexus-border-default)] pt-2 text-[11px] leading-relaxed text-[var(--nexus-text-muted)]">
            {item.detail}
          </p>
        </Card>
      ))}
    </div>
  );

  const microContent = (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {innovationEngine.microEngineeringLoop.map((step, idx) => (
        <Card
          key={idx}
          variant="default"
          padding="md"
          className="flex flex-col gap-1.5 bg-[var(--nexus-bg-secondary)]"
        >
          <span className="nexus-code-inline w-fit text-xs">Step 0{idx + 1}</span>
          <span className="nexus-h4 mt-1 text-sm font-semibold text-[var(--nexus-text-primary)]">
            {step}
          </span>
        </Card>
      ))}
    </div>
  );

  const tabItems = [
    {
      id: 'macro',
      label: 'Macro Lifecycle (5 Stages)',
      content: macroContent,
    },
    {
      id: 'micro',
      label: 'Micro Engineering Loop (8 Steps)',
      content: microContent,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Tabs items={tabItems} defaultTab="macro" variant="pills" />
    </div>
  );
};

MethodologySection.displayName = 'MethodologySection';
