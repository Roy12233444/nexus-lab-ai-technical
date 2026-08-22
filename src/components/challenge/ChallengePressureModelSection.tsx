import React from 'react';
import { getPressureDimensions } from '@/content/challenge/challenge';
import { PressureDimension } from '@/types/challenge';

const DIMENSION_ICONS: Record<PressureDimension, string> = {
  TIME: '⏳',
  UNCERTAINTY: '🎯',
  FAILURE: '⚡',
  SCALE: '🌐',
  RESOURCE_LIMITS: '🔋',
  RESPONSIBILITY: '⚖️',
  ENVIRONMENT_SHIFT: '🌊',
};

export const ChallengePressureModelSection: React.FC = () => {
  const dimensions = getPressureDimensions();

  return (
    <div className="space-y-8">
      {/* Topology Header Note */}
      <div className="border-border/80 bg-card rounded-xl border p-6 shadow-xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-foreground text-base font-bold">
              The Seven Autonomy Pressure Dimensions
            </h3>
            <p className="text-muted-foreground mt-0.5 text-sm">
              Unlike stateless inference, persistent autonomous execution operates across seven
              simultaneous stress vectors.
            </p>
          </div>
          <span className="inline-flex items-center self-start rounded-md bg-amber-500/10 px-2.5 py-1 font-mono text-xs font-medium text-amber-700 dark:text-amber-300">
            7 PRESSURE VECTORS
          </span>
        </div>
      </div>

      {/* 7-Node Clustered Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dimensions.map((dim) => (
          <div
            key={dim.dimension}
            className="group border-border bg-card relative flex flex-col justify-between rounded-2xl border p-6 transition-all hover:border-amber-500/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-2xl" role="img" aria-label={dim.dimension}>
                  {DIMENSION_ICONS[dim.dimension]}
                </span>
                <span className="border-border bg-muted/60 text-muted-foreground rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase">
                  {dim.dimension}
                </span>
              </div>

              <h4 className="text-foreground mt-4 text-lg font-bold transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
                {dim.title}
              </h4>

              <div className="bg-muted/40 text-muted-foreground mt-2 rounded-lg p-3 text-xs italic">
                "{dim.coreQuestion}"
              </div>

              <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                {dim.description}
              </p>
            </div>

            <div className="border-border/60 mt-6 border-t pt-4">
              <div className="text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
                Governing Challenges:
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {dim.governingChallenges.map((cid) => (
                  <span
                    key={cid}
                    className="bg-background text-foreground border-border inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs font-semibold"
                  >
                    {cid}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
