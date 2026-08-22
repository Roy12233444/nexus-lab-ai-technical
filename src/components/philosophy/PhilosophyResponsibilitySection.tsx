import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyResponsibilitySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const responsibilityConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.05'));

  return (
    <div className="space-y-8">
      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {responsibilityConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
