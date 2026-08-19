import React from 'react';
import { CANONICAL_RESEARCH_PROJECTS } from '@/content/research/research';
import { CanonicalResearchProject } from '@/types/research';

export const ResearchEvidenceMatrixSection: React.FC = () => {
  const getMaturityBadge = (maturity: string) => {
    switch (maturity) {
      case 'IMPLEMENTED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'SPECIFIED':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getEvidenceBadge = (evidence: string) => {
    switch (evidence) {
      case 'VERIFIED':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold';
      case 'REPORTED':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'DOCUMENTED':
        return 'bg-sky-50 text-sky-800 border-sky-300';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-300';
    }
  };

  return (
    <div>
      {/* Desktop Wide Table (Hidden on small screens) */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs md:block">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-4">
                Research Program
              </th>
              <th scope="col" className="px-6 py-4">
                Maturity State
              </th>
              <th scope="col" className="px-6 py-4">
                Evidence State
              </th>
              <th scope="col" className="px-6 py-4">
                Temporal Horizon
              </th>
              <th scope="col" className="px-6 py-4">
                Empirical Demonstration / Scope
              </th>
              <th scope="col" className="px-6 py-4">
                Authority Tier
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {CANONICAL_RESEARCH_PROJECTS.map((project: CanonicalResearchProject) => (
              <tr key={project.identity.id} className="transition hover:bg-sky-50/40">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-900">{project.identity.acronym}</div>
                  <div className="font-mono text-xs text-slate-500">{project.identity.name}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-md border px-2.5 py-0.5 font-mono text-xs ${getMaturityBadge(
                      project.state.maturity
                    )}`}
                  >
                    {project.state.maturity}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-md border px-2.5 py-0.5 font-mono text-xs ${getEvidenceBadge(
                      project.state.evidence
                    )}`}
                  >
                    {project.state.evidence}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-700">
                  {project.state.temporal}
                </td>
                <td className="px-6 py-4 text-xs text-slate-700">
                  {project.evidenceRecords[0]?.statement ||
                    project.publicSummary.technicalDossierSummary}
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-500">
                  {project.provenance.authorityTier.replace(/_/g, ' ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (Shown only on small screens) */}
      <div className="space-y-4 md:hidden">
        {CANONICAL_RESEARCH_PROJECTS.map((project: CanonicalResearchProject) => (
          <div
            key={project.identity.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">{project.identity.acronym}</span>
              <span className="font-mono text-xs text-slate-500">{project.state.temporal}</span>
            </div>
            <div className="mt-1 text-xs text-slate-500">{project.identity.name}</div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-md border px-2 py-0.5 font-mono text-xs ${getMaturityBadge(
                  project.state.maturity
                )}`}
              >
                {project.state.maturity}
              </span>
              <span
                className={`rounded-md border px-2 py-0.5 font-mono text-xs ${getEvidenceBadge(
                  project.state.evidence
                )}`}
              >
                {project.state.evidence}
              </span>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-700">
              <div className="font-semibold text-slate-900">Demonstration Scope:</div>
              <p className="mt-1">
                {project.evidenceRecords[0]?.statement ||
                  project.publicSummary.technicalDossierSummary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
