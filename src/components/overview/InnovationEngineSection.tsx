import React from 'react';
import { Card } from '@/components/ui/Card';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { ArrowRight } from 'lucide-react';

export const InnovationEngineSection: React.FC = () => {
  const { innovationEngine } = OVERVIEW_CONTENT;

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Left Column: Definition & Compounding Purpose */}
      <div className="flex flex-col gap-4 lg:col-span-5">
        <p className="nexus-body-lg leading-relaxed font-normal text-[var(--nexus-text-secondary)]">
          {innovationEngine.definition}
        </p>

        <Card variant="bordered" padding="md" className="mt-2 bg-[var(--nexus-bg-primary)]">
          <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
            Compounding Knowledge Law
          </span>
          <p className="nexus-body-sm mt-2 leading-relaxed text-[var(--nexus-text-secondary)]">
            {innovationEngine.purpose}
          </p>
        </Card>
      </div>

      {/* Right Column: Linear Micro Engineering Flow */}
      <div className="flex flex-col gap-3 lg:col-span-7">
        <span className="nexus-meta-label text-xs text-[var(--nexus-text-muted)] uppercase">
          Engineering Flow Pipeline
        </span>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {innovationEngine.microEngineeringLoop.map((step, index) => {
            const isLast = index === innovationEngine.microEngineeringLoop.length - 1;

            return (
              <Card
                key={index}
                variant="default"
                padding="sm"
                className="flex items-center justify-between bg-[var(--nexus-bg-primary)]"
              >
                <div className="flex items-center gap-3">
                  <span className="nexus-code-inline text-xs">0{index + 1}</span>
                  <span className="nexus-body-sm font-semibold text-[var(--nexus-text-primary)]">
                    {step}
                  </span>
                </div>

                {!isLast && (
                  <ArrowRight
                    className="hidden h-3.5 w-3.5 shrink-0 text-[var(--nexus-text-muted)] sm:block"
                    aria-hidden="true"
                  />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

InnovationEngineSection.displayName = 'InnovationEngineSection';
