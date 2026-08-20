import React from 'react';
import { getPublicPrimaryPrograms } from '@/content/programs/programs';
import { ProgramCard } from './ProgramCard';

export const ProgramsCoreSection: React.FC = () => {
  const primaryPrograms = getPublicPrimaryPrograms();

  return (
    <div className="space-y-8">
      {/* Editorial Lead Context */}
      <div className="max-w-3xl space-y-2">
        <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
          The following four flagship initiatives represent sovereign systems engineering vectors
          pursued independently under the Nexus LAB AI institutional charter. Each initiative is
          engineered to resolve structural boundaries in autonomous systems.
        </p>
      </div>

      {/* 2x2 Asymmetric Core Programs Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {primaryPrograms.map((program) => (
          <ProgramCard key={program.identity.id} program={program} variant="primary" />
        ))}
      </div>
    </div>
  );
};
