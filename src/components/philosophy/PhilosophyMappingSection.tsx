import React from 'react';
import {
  getPublicPrimaryConcepts,
  getPublicSupportingConcepts,
} from '@/content/philosophy/philosophy';

export const PhilosophyMappingSection: React.FC = () => {
  const allPublic = [...getPublicPrimaryConcepts(), ...getPublicSupportingConcepts()];

  return (
    <div className="space-y-8">
      {/* Alignment Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 font-mono text-[11px] font-bold text-slate-700 uppercase">
            <tr>
              <th className="px-6 py-4">Concept & Tradition</th>
              <th className="px-6 py-4">Target System</th>
              <th className="px-6 py-4">Relationship Tier</th>
              <th className="px-6 py-4">Computational Justification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {allPublic.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-slate-50/80">
                <td className="px-6 py-4">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900">{c.term}</span>
                    <div className="font-mono text-[10px] text-slate-500">
                      {c.tradition.replace(/_/g, ' ')} • {c.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono font-bold text-slate-900">
                  {c.nexusMapping.target}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded px-2.5 py-1 font-mono text-[10px] font-bold ${
                      c.nexusMapping.category === 'DIRECT'
                        ? 'border border-emerald-300 bg-emerald-100 text-emerald-900'
                        : c.nexusMapping.category === 'RESEARCH'
                          ? 'border border-sky-300 bg-sky-100 text-sky-900'
                          : 'border border-purple-300 bg-purple-100 text-purple-900'
                    }`}
                  >
                    {c.nexusMapping.category}
                  </span>
                </td>
                <td className="max-w-md px-6 py-4 leading-relaxed text-slate-600">
                  {c.nexusMapping.justification}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
