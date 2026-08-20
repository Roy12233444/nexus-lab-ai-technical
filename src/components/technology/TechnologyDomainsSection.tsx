import React from 'react';
import { getPublicTechnologyDomains } from '@/content/technology/technology';

export const TechnologyDomainsSection: React.FC = () => {
  const domains = getPublicTechnologyDomains();

  return (
    <div className="w-full border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-3">
          <div className="text-nexus-cyan inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            <span>// SECTION 04</span>
            <span className="text-slate-300">•</span>
            <span>CAPABILITY TERRITORIES</span>
          </div>
          <h2
            id="tech-domains-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Six Sovereign Technology Domains
          </h2>
          <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
            Our technological efforts are organized into six distinct capability territories, each
            addressing a critical engineering barrier in modern autonomous intelligence.
          </p>
        </div>

        {/* 3x2 Grid for 6 Domains */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              className="flex flex-col justify-between space-y-5 rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all hover:border-sky-300 hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Domain Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono text-xs">
                  <span className="font-bold text-sky-700">DOM-0{index + 1}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                    {domain.capabilityIds.length} CAPABILITIES
                  </span>
                </div>

                <h3 className="text-lg leading-snug font-bold text-slate-900">{domain.name}</h3>
                <p className="font-mono text-xs font-semibold text-sky-800">{domain.tagline}</p>
                <p className="pt-1 font-sans text-xs leading-relaxed text-slate-600">
                  {domain.description}
                </p>
              </div>

              {/* Core Challenges Addressed */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <span className="block font-mono text-[11px] font-bold text-slate-400 uppercase">
                  Target Engineering Challenges:
                </span>
                <ul className="space-y-1.5 font-sans text-xs text-slate-600">
                  {domain.coreChallenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-1.5">
                      <span className="text-nexus-cyan shrink-0 font-mono font-bold">›</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
