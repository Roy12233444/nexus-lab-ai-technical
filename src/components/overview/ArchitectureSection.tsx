import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { Compass, Network, Layers, Sparkles } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { architectureNodes } = OVERVIEW_CONTENT;

  const layerMetadata = {
    ROOTS: {
      colorBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: Compass,
      description:
        'First-principles beliefs, constitutional governance, and knowledge validation criteria.',
    },
    TRUNK: {
      colorBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Network,
      description:
        'NSEM methodology, repeatable innovation engine, and empirical validation frameworks.',
    },
    BRANCHES: {
      colorBadge: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: Layers,
      description:
        'Autonomous deep-tech research programs investigating core capability frontiers.',
    },
    FRUITS: {
      colorBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Sparkles,
      description:
        'Downstream validated sovereign technologies, libraries, and production platforms.',
    },
  };

  return (
    <div className="space-y-6" id="architectural-hierarchy">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {architectureNodes.map((node) => {
          const meta = layerMetadata[node.layer];
          const Icon = meta.icon;

          return (
            <div
              key={node.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded border px-2.5 py-0.5 font-mono text-[11px] font-bold ${meta.colorBadge}`}
                  >
                    {node.layer}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-700">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{node.name}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {node.purpose}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>MATURITY</span>
                  <span className="font-bold text-slate-800">{node.maturity}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {node.relatedPrograms.map((prog, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ArchitectureSection.displayName = 'ArchitectureSection';
