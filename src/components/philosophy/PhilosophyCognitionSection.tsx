import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyCognitionSection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const cognitionConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.03'));

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.03 Cognition
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cognitive Architecture & Latent Memory
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          How does cognition operate internally? Deconstructing the multi-tier cognitive stack into
          sensory parsing, contextual bounding, deterministic judgment, and durable latent memory
          consolidation.
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cognitionConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
