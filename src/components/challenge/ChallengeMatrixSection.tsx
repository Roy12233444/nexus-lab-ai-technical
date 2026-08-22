import React, { useState } from 'react';
import { getAllChallenges, getPressureDimensions } from '@/content/challenge/challenge';
import { PressureDimension } from '@/types/challenge';

export const ChallengeMatrixSection: React.FC = () => {
  const challenges = getAllChallenges();
  const dimensions = getPressureDimensions();
  const [activeDimension, setActiveDimension] = useState<PressureDimension | null>(null);

  return (
    <div className="space-y-6">
      {/* Matrix Controls / Filter Bar */}
      <div className="border-border bg-card flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
            Filter Pressure Vector:
          </span>
          <button
            onClick={() => setActiveDimension(null)}
            className={`rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-all ${
              activeDimension === null
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            ALL (7)
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {dimensions.map((d) => (
            <button
              key={d.dimension}
              onClick={() =>
                setActiveDimension(d.dimension === activeDimension ? null : d.dimension)
              }
              className={`rounded-md px-2 py-1 font-mono text-[11px] font-medium transition-all ${
                activeDimension === d.dimension
                  ? 'border border-amber-500/40 bg-amber-500/20 font-bold text-amber-700 dark:text-amber-300'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {d.dimension}
            </button>
          ))}
        </div>
      </div>

      {/* Truth Table Matrix */}
      <div className="border-border bg-card overflow-x-auto rounded-2xl border shadow-sm">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-border bg-muted/40 text-muted-foreground border-b font-mono">
              <th className="p-4 font-bold tracking-wider uppercase">Challenge ID & Title</th>
              <th className="p-4 font-bold tracking-wider uppercase">Evidence State</th>
              {dimensions.map((d) => (
                <th
                  key={d.dimension}
                  className={`p-4 text-center font-bold tracking-wider uppercase transition-colors ${
                    activeDimension === d.dimension
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      : ''
                  }`}
                >
                  {d.dimension}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {challenges.map((c) => {
              const isDimGoverned = activeDimension
                ? c.pressureVectors.includes(activeDimension)
                : true;

              return (
                <tr
                  key={c.id}
                  className={`transition-colors ${
                    isDimGoverned ? 'hover:bg-muted/30' : 'bg-muted/10 opacity-40'
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-muted text-foreground rounded-sm px-1.5 py-0.5 font-mono font-bold">
                        {c.id}
                      </span>
                      <span className="text-foreground font-semibold">{c.canonicalName}</span>
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-[11px]">
                      {c.shortHeadline}
                    </div>
                  </td>
                  <td className="p-4 font-mono">
                    <span className="border-border text-muted-foreground rounded-md border px-2 py-0.5 text-[10px] font-semibold">
                      {c.evidenceState}
                    </span>
                  </td>
                  {dimensions.map((d) => {
                    const isApplicable = c.pressureVectors.includes(d.dimension);
                    const isColActive = activeDimension === d.dimension;

                    return (
                      <td
                        key={d.dimension}
                        className={`p-4 text-center ${isColActive ? 'bg-amber-500/5' : ''}`}
                      >
                        {isApplicable ? (
                          <span
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-400"
                            title={`${c.id} governed by ${d.dimension}`}
                          >
                            ✓
                          </span>
                        ) : (
                          <span className="text-muted-foreground/30 font-mono">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
