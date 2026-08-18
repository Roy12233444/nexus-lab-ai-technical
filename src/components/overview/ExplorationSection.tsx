import React from 'react';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/lib/routes';
import { ArrowUpRight } from 'lucide-react';

export interface ExplorationSectionProps {
  onNavigate?: (href: string) => void;
}

export const ExplorationSection: React.FC<ExplorationSectionProps> = ({ onNavigate }) => {
  const explorationGateways = [
    {
      title: 'Research Programs',
      href: ROUTES.RESEARCH,
      description: 'Explore NALA, AMP, RTA-GUARD, and COSMOS deep-dive architectural dossiers.',
      tag: 'RESEARCH',
    },
    {
      title: 'Technology Capabilities',
      href: ROUTES.TECHNOLOGY,
      description:
        'Review sovereign technical capabilities, runtime pipelines, and subsystem nodes.',
      tag: 'TECHNOLOGY',
    },
    {
      title: 'Evidence Explorer',
      href: ROUTES.EVIDENCE,
      description:
        'Inspect empirical benchmarks, chaos soak test artifacts, and verification logs.',
      tag: 'EVIDENCE',
    },
    {
      title: 'Philosophy & Horizon',
      href: ROUTES.PHILOSOPHY,
      description:
        'Examine first-principles reasoning, epistemic frameworks, and the long-horizon roadmap.',
      tag: 'PHILOSOPHY',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {explorationGateways.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate(item.href);
            }
          }}
          className="group rounded-[var(--nexus-radius-lg)] focus-visible:ring-2 focus-visible:ring-[var(--nexus-text-primary)] focus-visible:outline-none"
        >
          <Card
            variant="default"
            padding="md"
            className="nexus-transition-fast flex h-full flex-col gap-3 border border-[var(--nexus-border-default)] bg-[var(--nexus-bg-primary)] group-hover:border-[var(--nexus-text-primary)]"
          >
            <div className="flex items-center justify-between">
              <span className="nexus-meta-label text-[11px] font-semibold text-[var(--nexus-text-muted)]">
                {item.tag}
              </span>
              <ArrowUpRight
                className="nexus-transition-fast h-4 w-4 text-[var(--nexus-text-muted)] group-hover:text-[var(--nexus-text-primary)]"
                aria-hidden="true"
              />
            </div>

            <div>
              <h4 className="nexus-h4 text-base font-semibold text-[var(--nexus-text-primary)] group-hover:text-[var(--nexus-text-primary)]">
                {item.title}
              </h4>
              <p className="nexus-body-sm mt-1.5 text-xs leading-relaxed text-[var(--nexus-text-secondary)]">
                {item.description}
              </p>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

ExplorationSection.displayName = 'ExplorationSection';
