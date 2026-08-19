import React from 'react';
import { CANONICAL_RESEARCH_PROJECTS } from '@/content/research/research';

export interface ResearchGatewaysSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ResearchGatewaysSection: React.FC<ResearchGatewaysSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CANONICAL_RESEARCH_PROJECTS.map((project) => (
        <a
          key={project.identity.id}
          href={`/research/${project.identity.id}`}
          onClick={(e) => {
            if (onSelectProject) {
              e.preventDefault();
              onSelectProject(project.identity.id);
            }
          }}
          className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sky-700">
                {project.identity.acronym}
              </span>
              <span className="font-mono text-[10px] text-slate-400">DOSSIER →</span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-sky-700">
              {project.identity.name}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {project.publicSummary.publicLead}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 font-mono text-xs font-semibold text-sky-700">
            <span>Open Specification</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        </a>
      ))}
    </div>
  );
};
