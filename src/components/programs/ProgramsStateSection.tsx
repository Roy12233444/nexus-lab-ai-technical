import React, { useState } from 'react';
import { getAllPublicPrograms } from '@/content/programs/programs';
import { ProgramPublicState } from '@/types/programs';

export const ProgramsStateSection: React.FC = () => {
  const allPrograms = getAllPublicPrograms();
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | ProgramPublicState>('ALL');

  const filteredPrograms = allPrograms.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    return p.state.publicState === selectedFilter;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Explainer */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl space-y-2">
          <p className="font-sans text-sm leading-relaxed text-slate-600 sm:text-base">
            Nexus LAB AI enforces complete separation across four independent epistemic dimensions.
            A program being public does not imply it is implemented; an implemented component does
            not imply third-party verified certification.
          </p>
        </div>

        {/* Filter Pill Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <button
            type="button"
            onClick={() => setSelectedFilter('ALL')}
            className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
              selectedFilter === 'ALL'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            All (08)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('PUBLIC_PRIMARY')}
            className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
              selectedFilter === 'PUBLIC_PRIMARY'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Primary (04)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('PUBLIC_SUPPORTING')}
            className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
              selectedFilter === 'PUBLIC_SUPPORTING'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Supporting (03)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('PUBLIC_WITH_CONTEXT')}
            className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
              selectedFilter === 'PUBLIC_WITH_CONTEXT'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Context (01)
          </button>
        </div>
      </div>

      {/* Desktop Reality Table (Hidden on Mobile) */}
      <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <table className="w-full text-left text-sm text-slate-600">
          <caption className="sr-only">Nexus LAB AI Programs Epistemic Reality Matrix</caption>
          <thead className="border-b border-slate-100 bg-slate-50 font-mono text-xs tracking-wider text-slate-500 uppercase">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Program
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Category
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Maturity
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Evidence
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Temporal
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-800">
                Public Tier
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {filteredPrograms.map((program) => (
              <tr key={program.identity.id} className="transition-colors hover:bg-slate-50/80">
                <td className="px-6 py-4 font-medium whitespace-nowrap text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{program.identity.acronym}</span>
                    <span className="font-mono text-xs text-slate-400">
                      ({program.identity.name})
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-600">
                  {program.identity.category.replace(/_/g, ' ')}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded px-2 py-0.5 font-mono text-[11px] font-semibold ${
                      program.state.maturity === 'IMPLEMENTED'
                        ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                        : program.state.maturity === 'SPECIFIED'
                          ? 'border border-sky-200 bg-sky-50 text-sky-700'
                          : program.state.maturity === 'EXPERIMENTAL'
                            ? 'border border-purple-200 bg-purple-50 text-purple-700'
                            : 'border border-indigo-200 bg-indigo-50 text-indigo-700'
                    }`}
                  >
                    {program.state.maturity}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded px-2 py-0.5 font-mono text-[11px] font-semibold ${
                      program.state.evidence === 'VERIFIED'
                        ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                        : program.state.evidence === 'REPORTED'
                          ? 'border border-amber-200 bg-amber-50 text-amber-800'
                          : 'border border-slate-200 bg-slate-100 text-slate-700'
                    }`}
                  >
                    {program.state.evidence}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded px-2 py-0.5 font-mono text-[11px] font-semibold ${
                      program.state.temporal === 'CURRENT'
                        ? 'border border-sky-200 bg-sky-50 text-sky-800'
                        : 'border border-indigo-200 bg-indigo-50 text-indigo-800'
                    }`}
                  >
                    {program.state.temporal}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-700">
                  {program.state.publicState.replace('PUBLIC_', '')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Grid (Rendered only on smaller viewports) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredPrograms.map((program) => (
          <div
            key={program.identity.id}
            className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900">{program.identity.acronym}</span>
              <span className="font-mono text-xs text-slate-500 uppercase">
                {program.state.publicState.replace('PUBLIC_', '')}
              </span>
            </div>

            <p className="text-xs text-slate-600">{program.identity.fullTitle}</p>

            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px]">
              <div className="rounded border border-slate-100 bg-slate-50 p-2">
                <span className="block text-slate-400">MATURITY</span>
                <span className="font-bold text-slate-800">{program.state.maturity}</span>
              </div>
              <div className="rounded border border-slate-100 bg-slate-50 p-2">
                <span className="block text-slate-400">EVIDENCE</span>
                <span className="font-bold text-slate-800">{program.state.evidence}</span>
              </div>
              <div className="rounded border border-slate-100 bg-slate-50 p-2">
                <span className="block text-slate-400">TEMPORAL</span>
                <span className="font-bold text-slate-800">{program.state.temporal}</span>
              </div>
              <div className="rounded border border-slate-100 bg-slate-50 p-2">
                <span className="block text-slate-400">CATEGORY</span>
                <span className="block truncate font-bold text-slate-800">
                  {program.identity.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
