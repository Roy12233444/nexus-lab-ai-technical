import React from 'react';
import { PhilosophyConcept } from '@/types/philosophy';

interface PhilosophyConceptCardProps {
  concept: PhilosophyConcept;
}

export const PhilosophyConceptCard: React.FC<PhilosophyConceptCardProps> = ({ concept }) => {
  const {
    id,
    term,
    transliteration,
    tradition,
    researchModule,
    classicalDefinition,
    philosophicalQuestion,
    nexusInterpretation,
    hypothesisId,
    nexusMapping,
    evidenceState,
    nonClaims,
  } = concept;

  return (
    <article
      id={`concept-${id.toLowerCase()}`}
      className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md sm:p-8"
    >
      <div className="space-y-6">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-sky-800 uppercase">
              {tradition.replace(/_/g, ' ')}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[11px] text-slate-500">{researchModule}</span>
          </div>

          {/* Badges Container */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] font-semibold">
            {/* Mapping Badge */}
            <span
              className={`rounded px-2 py-0.5 ${
                nexusMapping.category === 'DIRECT'
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                  : nexusMapping.category === 'RESEARCH'
                    ? 'border border-sky-200 bg-sky-50 text-sky-800'
                    : 'border border-purple-200 bg-purple-50 text-purple-800'
              }`}
            >
              {nexusMapping.category}: {nexusMapping.target}
            </span>

            {/* Evidence Badge */}
            <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
              {evidenceState.philosophicalSource}
            </span>

            {hypothesisId && (
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-indigo-700">
                {hypothesisId}
              </span>
            )}
          </div>
        </div>

        {/* Term & Heading */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">{term}</h3>
            {transliteration !== term && (
              <span className="font-mono text-xs text-slate-500">({transliteration})</span>
            )}
          </div>
        </div>

        {/* Philosophical Question (Layer 2) */}
        <div className="space-y-1 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
          <span className="block font-mono text-[10px] font-bold tracking-wider text-sky-900 uppercase">
            Fundamental Philosophical Question
          </span>
          <p className="font-sans text-xs font-medium text-sky-950 italic sm:text-sm">
            "{philosophicalQuestion}"
          </p>
        </div>

        {/* Classical Definition (Layer 1) */}
        <div className="space-y-1.5">
          <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
            Classical Philosophical Definition
          </span>
          <p className="font-sans text-xs leading-relaxed text-slate-700 sm:text-sm">
            {classicalDefinition}
          </p>
        </div>

        {/* Nexus Modern Interpretation (Layer 3) */}
        <div className="space-y-1.5 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <span className="block font-mono text-[10px] font-bold tracking-wider text-slate-800 uppercase">
            Nexus LAB AI Computational Interpretation
          </span>
          <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
            {nexusInterpretation}
          </p>
        </div>
      </div>

      {/* Explicit Negative Non-Claims (Layer 8) */}
      {nonClaims.length > 0 && (
        <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
          <span className="block font-mono text-[10px] font-bold tracking-wider text-amber-900 uppercase">
            Explicit Negative Boundaries
          </span>
          <ul className="space-y-1">
            {nonClaims.map((nc, idx) => (
              <li key={idx} className="flex items-start gap-2 font-sans text-xs text-slate-500">
                <span className="font-bold text-amber-600 select-none">🛡️</span>
                <span className="italic">{nc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
