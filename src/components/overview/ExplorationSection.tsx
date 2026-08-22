import React from 'react';
import { ROUTES } from '@/lib/routes';
import { BookOpen, Cpu, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

export interface ExplorationSectionProps {
  onNavigate?: (href: string) => void;
}

export const ExplorationSection: React.FC<ExplorationSectionProps> = ({ onNavigate }) => {
  const explorationGateways = [
    {
      title: 'Research Programs',
      href: ROUTES.RESEARCH,
      description: 'Explore NALA, AMP, RTA-GUARD, and COSMOS deep-dive architectural dossiers.',
      tag: 'Track 04B',
      icon: BookOpen,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      title: 'Technology Capabilities',
      href: ROUTES.TECHNOLOGY,
      description:
        'Review sovereign technical capabilities, runtime pipelines, and subsystem nodes.',
      tag: 'Track 04C',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Major Programs',
      href: ROUTES.PROGRAMS,
      description:
        'Inspect flagship systems engineering vectors, supporting engines, and state matrices.',
      tag: 'Track 04D',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Philosophy & Horizon',
      href: ROUTES.PHILOSOPHY,
      description:
        'Examine first-principles reasoning, epistemic frameworks, and the long-horizon roadmap.',
      tag: 'Track 04E',
      icon: Compass,
      color: 'text-purple-600 bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {explorationGateways.map((item, idx) => {
        const Icon = item.icon;

        return (
          <a
            key={idx}
            href={item.href}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.href);
              }
            }}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-500 uppercase">
                  {item.tag}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                  {item.title}
                </h4>
                <p className="mt-1.5 font-sans text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-1 border-t border-slate-100 pt-2 text-xs font-semibold text-slate-500 transition-colors group-hover:text-sky-600">
              <span>Explore Track</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

ExplorationSection.displayName = 'ExplorationSection';
