import React from 'react';
import { CANONICAL_TECHNOLOGY_REGISTRY } from '@/content/technology/technology';

interface TechnologyProjectMapSectionProps {
  onNavigate?: (href: string) => void;
}

export const TechnologyProjectMapSection: React.FC<TechnologyProjectMapSectionProps> = ({
  onNavigate,
}) => {
  const projects = Object.values(CANONICAL_TECHNOLOGY_REGISTRY.projects);

  return (
    <div
      className="w-full border-b border-slate-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 07</span>
            <span className="text-slate-300">•</span>
            <span>APPLIED SYSTEMS</span>
          </div>
          <h2
            id="tech-proj-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Technology → Project Implementation Vehicles
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Our technology substrates manifest across distinct, sovereign project vehicles. Each
            project operates independently with zero cross-system operational dependencies.
          </p>
        </div>

        {/* Project Topology Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((proj) => {
            const domain = CANONICAL_TECHNOLOGY_REGISTRY.domains[proj.domainId];
            return (
              <div
                key={proj.id}
                className="flex flex-col justify-between space-y-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-7 transition-all hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 font-mono text-[11px]">
                    <span className="font-bold text-sky-700">{proj.acronym}</span>
                    <span className="rounded border border-slate-200 bg-white px-2 py-0.5 font-semibold text-slate-600">
                      {proj.relationship}
                    </span>
                  </div>

                  <h3 className="text-xl leading-snug font-bold text-slate-900">{proj.name}</h3>
                  <p className="font-mono text-xs font-semibold text-slate-700">{domain?.name}</p>
                  <p className="font-sans text-xs leading-relaxed text-slate-600">{proj.role}</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/60 pt-4 font-mono text-xs">
                  <span className="text-slate-400">STATUS: INDEPENDENT VECTOR</span>
                  <button
                    onClick={() => onNavigate?.('/research')}
                    className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900"
                  >
                    View Dossier <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
