import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { Lightbulb, Code2, FlaskConical, Cpu, Award, Sparkles } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const { innovationEngine } = OVERVIEW_CONTENT;

  const macroStages = [
    {
      stage: '01. INSPIRATION',
      question: 'What fundamental unsolved limitation or phenomenon needs addressing?',
      detail:
        'Investigating core bottlenecks in intelligence, persistent state, or safety constraints.',
      icon: Lightbulb,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      stage: '02. FORMALIZATION',
      question: 'Can the solution be mathematically modeled and architecturally bounded?',
      detail:
        'Rigorous theoretical proofs, algorithm design, and constitutional rule specifications.',
      icon: Code2,
      color: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      stage: '03. VALIDATION',
      question: 'What empirical experiment proves or disproves the formal model?',
      detail: 'Harness testing, chaos injection runs, and mathematical boundary verification.',
      icon: FlaskConical,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      stage: '04. ENGINEERING',
      question: 'How do we build durable, high-reliability software architectures?',
      detail:
        'Rust/Python implementations, memory-safe execution, and system-level fault tolerance.',
      icon: Cpu,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      stage: '05. IMPACT',
      question: 'How does validated technology yield downstream sovereign capability?',
      detail:
        'Preserving institutional knowledge, publishing evidence dossiers, and product integration.',
      icon: Award,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  ];

  const macroContent = (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {macroStages.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500">
                  STAGE 0{idx + 1}
                </span>
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg border ${item.color}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
              </div>

              <span className="block font-mono text-xs font-bold text-slate-900">{item.stage}</span>

              <p className="font-sans text-xs leading-snug font-semibold text-slate-900 sm:text-sm">
                {item.question}
              </p>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-600">
              {item.detail}
            </div>
          </div>
        );
      })}
    </div>
  );

  const microContent = (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {innovationEngine.microEngineeringLoop.map((step, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-all hover:border-sky-300 hover:shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="rounded bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-700">
              Step 0{idx + 1}
            </span>
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
          </div>
          <span className="mt-3 font-sans text-sm font-bold text-slate-900">{step}</span>
          <div className="mt-2 font-mono text-[10px] text-slate-400">Micro Loop Operational</div>
        </div>
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
    <div className="space-y-6">
      <Tabs items={tabItems} defaultTab="macro" variant="pills" />
    </div>
  );
};

MethodologySection.displayName = 'MethodologySection';
