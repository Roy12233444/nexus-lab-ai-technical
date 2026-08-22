import React from 'react';
import { getFutureDirections } from '@/content/future/future';
import { CheckCircle2, Clock } from 'lucide-react';

export const FutureMatrixSection: React.FC = () => {
  const directions = getFutureDirections();

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 font-mono text-[11px] font-bold text-slate-700 uppercase">
          <tr>
            <th className="px-6 py-4">Direction & Origin</th>
            <th className="px-6 py-4">Epistemic Status</th>
            <th className="px-6 py-4">Evidence Level</th>
            <th className="px-6 py-4">Horizon Scope</th>
            <th className="px-6 py-4">Negative Boundary Non-Claim</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-sans">
          {directions.map((dir) => (
            <tr key={dir.id} className="transition-colors hover:bg-slate-50/80">
              {/* Direction & Origin */}
              <td className="px-6 py-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                      {dir.id}
                    </span>
                    <span className="font-bold text-slate-900">{dir.title}</span>
                  </div>
                  <span className="block font-mono text-[10px] text-slate-500">
                    Origin: {dir.originAnchor}
                  </span>
                </div>
              </td>

              {/* Epistemic Status */}
              <td className="px-6 py-4">
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
                  {dir.epistemicStatus.replace('_', ' ')}
                </span>
              </td>

              {/* Evidence Level */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 rounded px-2.5 py-1 font-mono text-[10px] font-bold uppercase ${
                    dir.evidenceLevel === 'VERIFIED'
                      ? 'border border-emerald-300 bg-emerald-100 text-emerald-900'
                      : dir.evidenceLevel === 'REPORTED'
                        ? 'border border-indigo-300 bg-indigo-100 text-indigo-900'
                        : 'border border-amber-300 bg-amber-100 text-amber-900'
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{dir.evidenceLevel}</span>
                </span>
              </td>

              {/* Horizon Scope */}
              <td className="px-6 py-4 font-mono text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Clock className="h-3 w-3 text-slate-400" />
                  <span>
                    {dir.horizon} ({dir.horizonTimeframe})
                  </span>
                </span>
              </td>

              {/* Negative Boundary Non-Claim */}
              <td className="px-6 py-4 text-xs leading-relaxed text-slate-600 italic">
                {dir.nonClaims[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

FutureMatrixSection.displayName = 'FutureMatrixSection';
