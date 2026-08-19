import React from 'react';
import { CANONICAL_RESEARCH_PROJECTS } from '@/content/research/research';
import { CanonicalResearchProject } from '@/types/research';

export interface ResearchPortfolioSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ResearchPortfolioSection: React.FC<ResearchPortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const getDomainLabel = (domain: string) => {
    switch (domain) {
      case 'AGENT_EXECUTION':
        return 'AGENT EXECUTION';
      case 'DURABLE_MEMORY':
        return 'DURABLE MEMORY';
      case 'AI_SAFETY_GOVERNANCE':
        return 'AI SAFETY & GOVERNANCE';
      case 'MULTI_ORBITAL_SYSTEMS':
        return 'MULTI-ORBITAL SYSTEMS';
      default:
        return domain;
    }
  };

  const getMaturityBadgeClass = (maturity: string) => {
    switch (maturity) {
      case 'IMPLEMENTED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'SPECIFIED':
      case 'PLANNED':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getEvidenceBadgeClass = (evidence: string) => {
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
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {CANONICAL_RESEARCH_PROJECTS.map((project: CanonicalResearchProject, idx) => (
        <div
          key={project.identity.id}
          className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:border-sky-300 hover:shadow-md sm:p-8"
        >
          <div>
            {/* Card Header: Index & Domain */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="font-mono text-xs font-bold text-sky-700">VECTOR 0{idx + 1}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700">
                {getDomainLabel(project.identity.domain)}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="mt-5">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {project.identity.acronym}
              </h3>
              <div className="mt-1 font-mono text-xs text-slate-500">{project.identity.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.identity.tagline}
              </p>
            </div>

            {/* Core Mission */}
            <div className="mt-4 rounded-lg bg-slate-50 p-3.5 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Core Mission: </span>
              {project.identity.coreMission}
            </div>

            {/* Architecture Subsystems */}
            <div className="mt-5">
              <div className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Core Subsystems
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                {project.architecture.subsystems.map((subsystem) => (
                  <li key={subsystem.name} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                    <span>
                      <strong className="text-slate-800">{subsystem.name}:</strong> {subsystem.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Footer: Maturity & Action */}
          <div className="mt-8 border-t border-slate-100 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md border px-2.5 py-1 font-mono text-xs ${getMaturityBadgeClass(
                    project.state.maturity
                  )}`}
                >
                  {project.state.maturity}
                </span>
                <span
                  className={`rounded-md border px-2.5 py-1 font-mono text-xs ${getEvidenceBadgeClass(
                    project.state.evidence
                  )}`}
                >
                  {project.state.evidence}
                </span>
              </div>

              <a
                href={`/research/${project.identity.id}`}
                onClick={(e) => {
                  if (onSelectProject) {
                    e.preventDefault();
                    onSelectProject(project.identity.id);
                  }
                }}
                className="font-mono text-xs font-semibold text-sky-700 transition hover:text-sky-900 hover:underline"
              >
                Explore Dossier →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
