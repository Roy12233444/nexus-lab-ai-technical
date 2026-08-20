import React, { useState } from 'react';
import {
  getPublicTechnologyCapabilities,
  getPublicTechnologyDomains,
  CANONICAL_TECHNOLOGY_REGISTRY,
} from '@/content/technology/technology';
import { TechnologyDomainId } from '@/types/technology';

export const TechnologyCapabilitiesSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const domains = getPublicTechnologyDomains();
  const allCapabilities = getPublicTechnologyCapabilities();

  const filteredCapabilities =
    selectedDomain === 'all'
      ? allCapabilities
      : allCapabilities.filter((c) => c.domainId === selectedDomain);

  return (
    <div
      className="w-full border-b border-slate-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 05</span>
            <span className="text-slate-300">•</span>
            <span>ENGINEERING BREADTH</span>
          </div>
          <h2
            id="tech-caps-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Systemic Capability Matrix
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Eighteen strongly typed capabilities engineered across first-principles neural kernels,
            multi-layer harnesses, cognitive memory protocols, and space-grade systems relays.
          </p>
        </div>

        {/* Domain Filter Buttons */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-slate-200/80 pb-8">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
              selectedDomain === 'all'
                ? 'bg-slate-900 font-semibold text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            ALL CAPABILITIES ({allCapabilities.length})
          </button>
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDomain(d.id)}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
                selectedDomain === d.id
                  ? 'bg-sky-600 font-semibold text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {d.name.split('&')[0].trim().toUpperCase()}
            </button>
          ))}
        </div>

        {/* Capability Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCapabilities.map((cap) => {
            const domain =
              CANONICAL_TECHNOLOGY_REGISTRY.domains[cap.domainId as TechnologyDomainId];
            return (
              <div
                key={cap.id}
                className="flex flex-col justify-between space-y-4 rounded-xl border border-slate-200/90 bg-slate-50/60 p-6 transition-all hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-semibold text-sky-700 uppercase">
                      {domain?.name.split('&')[0]}
                    </span>
                    <span className="text-slate-400">CAP-ID: {cap.id.substring(0, 8)}</span>
                  </div>
                  <h3 className="text-base leading-snug font-bold text-slate-900">{cap.name}</h3>
                  <p className="font-sans text-xs leading-relaxed text-slate-600">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 pt-3 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span>PROJECTS:</span>
                    <span className="font-semibold text-slate-800 uppercase">
                      {cap.projectIds.join(', ')}
                    </span>
                  </div>
                  <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-800">
                    {cap.technologyIds.length} SUBSTRATE{cap.technologyIds.length > 1 ? 'S' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
