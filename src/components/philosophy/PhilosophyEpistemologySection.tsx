import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyEpistemologySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const epistemologyConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.02'));

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.02 Epistemology
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Epistemic Grounding & Knowledge Validation
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          How is knowledge acquired, structured, and validated? Investigating classical Nyāya
          epistemology to formulate verifiable knowledge gating and multi-step inference chains.
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {epistemologyConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
