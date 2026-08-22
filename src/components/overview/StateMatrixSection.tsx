import React from 'react';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { CheckCircle2, Clock } from 'lucide-react';

export const StateMatrixSection: React.FC = () => {
  const { researchPrograms } = OVERVIEW_CONTENT;

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 font-mono text-[11px] font-bold text-slate-700 uppercase">
          <tr>
            <th className="px-6 py-4">Program & Vector</th>
            <th className="px-6 py-4">Maturity State</th>
            <th className="px-6 py-4">Evidence Level</th>
            <th className="px-6 py-4">Temporal Scope</th>
            <th className="px-6 py-4">Public Mandate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-sans">
          {researchPrograms.map((prog) => (
            <tr key={prog.id} className="transition-colors hover:bg-slate-50/80">
              <td className="px-6 py-4">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-900">{prog.name}</span>
                  <span className="block font-mono text-[10px] text-slate-500">{prog.tagline}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                  {prog.maturity}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 rounded px-2.5 py-1 font-mono text-[10px] font-bold uppercase ${
                    prog.evidence === 'VERIFIED'
                      ? 'border border-emerald-300 bg-emerald-100 text-emerald-900'
                      : prog.evidence === 'REPORTED'
                        ? 'border border-indigo-300 bg-indigo-100 text-indigo-900'
                        : 'border border-amber-300 bg-amber-100 text-amber-900'
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{prog.evidence}</span>
                </span>
              </td>
              <td className="px-6 py-4 font-mono text-xs text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3 text-slate-400" />
                  <span>{prog.temporalState}</span>
                </span>
              </td>
              <td className="px-6 py-4 leading-relaxed font-medium text-slate-700">
                {prog.publicRelevance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

StateMatrixSection.displayName = 'StateMatrixSection';
