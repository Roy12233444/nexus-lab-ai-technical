import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyEpistemologySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const epistemologyConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.02'));

  return (
    <div className="space-y-8">
      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {epistemologyConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
