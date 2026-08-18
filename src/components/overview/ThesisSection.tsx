import React from 'react';
import { Card } from '@/components/ui/Card';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';

export const ThesisSection: React.FC = () => {
  const { thesis } = OVERVIEW_CONTENT;

  return (
    <div className="flex flex-col gap-8">
      {/* Problem Callout Box */}
      <div className="border-l-2 border-[var(--nexus-text-primary)] py-2 pl-6">
        <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
          The Problem
        </span>
        <p className="nexus-h4 mt-1.5 leading-snug font-medium text-[var(--nexus-text-primary)]">
          {thesis.problemStatement}
        </p>
      </div>

      {/* Core Hypothesis & Rationale */}
      <Card variant="default" padding="lg" className="flex flex-col gap-5">
        <div>
          <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
            Core Hypothesis
          </span>
          <p className="nexus-body-lg mt-2 font-medium text-[var(--nexus-text-primary)]">
            {thesis.coreHypothesis}
          </p>
        </div>

        <hr className="border-t border-[var(--nexus-border-default)]" />

        <div className="grid grid-cols-1 gap-6 pt-1 md:grid-cols-2">
          <div>
            <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)]">
              First-Principles Rationale
            </span>
            <p className="nexus-body-sm mt-1.5 leading-relaxed text-[var(--nexus-text-secondary)]">
              {thesis.rationale}
            </p>
          </div>

          <div>
            <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)]">
              Architectural Approach
            </span>
            <p className="nexus-body-sm mt-1.5 leading-relaxed text-[var(--nexus-text-secondary)]">
              {thesis.approach}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

ThesisSection.displayName = 'ThesisSection';
