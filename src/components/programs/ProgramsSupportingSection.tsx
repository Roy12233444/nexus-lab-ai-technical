import React from 'react';
import { getPublicSupportingPrograms } from '@/content/programs/programs';
import { ProgramCard } from './ProgramCard';

export const ProgramsSupportingSection: React.FC = () => {
  const supportingPrograms = getPublicSupportingPrograms();

  return (
    <div className="space-y-8">
      {/* Editorial Lead Context */}
      <div className="max-w-3xl space-y-2">
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          These three supporting systems provide foundational computational substrates, reasoning
          kernels, hardened execution relays, and decentralized coordination mathematics across the
          Nexus engineering ecosystem.
        </p>
      </div>

      {/* 3-Column Supporting Programs Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {supportingPrograms.map((program) => (
          <ProgramCard key={program.identity.id} program={program} variant="supporting" />
        ))}
      </div>
    </div>
  );
};
