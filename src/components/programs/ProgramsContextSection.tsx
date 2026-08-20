import React from 'react';
import { getPublicContextPrograms } from '@/content/programs/programs';
import { ProgramCard } from './ProgramCard';

export const ProgramsContextSection: React.FC = () => {
  const contextPrograms = getPublicContextPrograms();

  return (
    <div className="space-y-8">
      {/* Contextual Explainer Block */}
      <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="text-xl select-none">📌</span>
          <div className="space-y-1 font-sans text-xs text-amber-950 sm:text-sm">
            <span className="block font-mono font-bold tracking-wider text-amber-900 uppercase">
              Applied Program Framing
            </span>
            <p className="leading-relaxed">
              Applied systems initiatives demonstrate sovereign agent, memory, and safety mechanisms
              applied to real-world domain challenges. They are evaluated as technical
              demonstrations and research builds rather than commercial consumer services.
            </p>
          </div>
        </div>
      </div>

      {/* Applied Program Display */}
      <div className="mx-auto max-w-2xl">
        {contextPrograms.map((program) => (
          <ProgramCard key={program.identity.id} program={program} variant="context" />
        ))}
      </div>
    </div>
  );
};
