import React from 'react';
import { getFutureEvolutionMap } from '@/content/future/future';
import { Layers, ArrowDown } from 'lucide-react';

export const FutureEvolutionSection: React.FC = () => {
  const nodes = getFutureEvolutionMap();

  const tierStyles = {
    FOUNDATION: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      border: 'border-indigo-200',
    },
    CAPABILITY: {
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      border: 'border-sky-200',
    },
    DISTRIBUTED: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      border: 'border-emerald-200',
    },
    HORIZON: {
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      border: 'border-purple-200',
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 font-sans text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-slate-500" />
          <span className="font-mono font-bold text-slate-800 uppercase">
            Conceptual Evolution Hierarchy (Non-Operational)
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-400">
          Conceptual lineage; not an execution software DAG
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {nodes.map((node, index) => {
          const style = tierStyles[node.tier];
          const isLast = index === nodes.length - 1;

          return (
            <div
              key={node.id}
              className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${style.border}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded border px-2.5 py-0.5 font-mono text-[10px] font-bold ${style.badge}`}
                  >
                    TIER 0{index + 1}: {node.tier}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-400">{node.id}</span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-slate-900">{node.title}</h3>

                <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {node.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 font-mono text-[10px] text-slate-500">
                <span>
                  {node.conceptualAncestors.length > 0
                    ? `Derives from: ${node.conceptualAncestors.join(', ')}`
                    : 'Foundational Root'}
                </span>
                {!isLast && <ArrowDown className="h-3 w-3 text-slate-400 md:-rotate-90" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FutureEvolutionSection.displayName = 'FutureEvolutionSection';
