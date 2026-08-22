import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyAgencySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const agencyConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.04'));

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.04 Agency & Volition
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Material Functionalism & Computational Agency
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          Can matter act without subjective sentience? Classical Sāṃkhya establishes that cognition,
          reasoning, and goal-directed agency are entirely mechanical operations of unconscious
          matter (Prakṛti), decoupling autonomous AI systems from metaphysical claims of
          consciousness.
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {agencyConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
