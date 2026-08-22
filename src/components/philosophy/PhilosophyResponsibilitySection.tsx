import React from 'react';
import { getPublicPrimaryConcepts } from '@/content/philosophy/philosophy';
import { PhilosophyConceptCard } from './PhilosophyConceptCard';

export const PhilosophyResponsibilitySection: React.FC = () => {
  const primaryConcepts = getPublicPrimaryConcepts();
  const responsibilityConcepts = primaryConcepts.filter((c) => c.researchModule.includes('01.05'));

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="max-w-3xl space-y-2">
        <span className="font-mono text-xs font-bold tracking-widest text-sky-700 uppercase">
          01.05 Dharma & Responsibility
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Normative Governance & Duty Boundaries
        </h2>
        <p className="font-sans text-base leading-relaxed text-slate-600">
          What constrains autonomous action? Rather than generic universal alignment, Indian ethics
          provides role-scoped duty boundaries (Svadharma), rigorous arbitration hierarchies for
          competing obligations (Dharma-saṅkaṭa), and prerequisite capability gating (Adhikāra).
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {responsibilityConcepts.map((concept) => (
          <PhilosophyConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
};
