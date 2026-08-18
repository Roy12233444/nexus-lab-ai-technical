import React from 'react';
import { Card } from '@/components/ui/Card';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';

export const ArchitectureSection: React.FC = () => {
  const { architectureNodes } = OVERVIEW_CONTENT;

  const layerMetadata = {
    ROOTS: {
      colorBadge: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
      description:
        'First-principles beliefs, constitutional governance, and knowledge validation criteria.',
    },
    TRUNK: {
      colorBadge: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      description:
        'NSEM methodology, repeatable innovation engine, and empirical validation frameworks.',
    },
    BRANCHES: {
      colorBadge: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
      description:
        'Autonomous deep-tech research programs investigating core capability frontiers.',
    },
    FRUITS: {
      colorBadge: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      description:
        'Downstream validated sovereign technologies, libraries, and production platforms.',
    },
  };

  return (
    <div className="flex flex-col gap-6" id="architectural-hierarchy">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {architectureNodes.map((node) => {
          const meta = layerMetadata[node.layer];

          return (
            <Card
              key={node.id}
              variant="default"
              padding="lg"
              className="flex flex-col gap-4 border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`nexus-meta-label rounded border px-2.5 py-0.5 text-xs font-semibold ${meta.colorBadge}`}
                >
                  {node.layer}
                </span>
                <span className="nexus-code-inline text-[11px]">{node.maturity}</span>
              </div>

              <div>
                <h3 className="nexus-h4 font-semibold text-[var(--nexus-text-primary)]">
                  {node.name}
                </h3>
                <p className="nexus-body-sm mt-2 leading-relaxed text-[var(--nexus-text-secondary)]">
                  {node.purpose}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[var(--nexus-border-default)] pt-3">
                {node.relatedPrograms.map((prog, idx) => (
                  <span
                    key={idx}
                    className="nexus-meta-label rounded bg-[var(--nexus-bg-secondary)] px-2 py-0.5 text-[11px] text-[var(--nexus-text-muted)]"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

ArchitectureSection.displayName = 'ArchitectureSection';
