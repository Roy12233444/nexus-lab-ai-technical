import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyAgencySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const agencyConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.04'));

  return (
    <div className="space-y-8">
      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {agencyConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
