import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { ConstitutionHeroSection } from '@/components/constitution/ConstitutionHeroSection';
import { CompletionEquationSection } from '@/components/constitution/CompletionEquationSection';
import { InvariantMatrixSection } from '@/components/constitution/InvariantMatrixSection';
import { DoDPipelineSection } from '@/components/constitution/DoDPipelineSection';
import { ForbiddenPatternsSection } from '@/components/constitution/ForbiddenPatternsSection';
import { AxiomsSection } from '@/components/constitution/AxiomsSection';

export interface ConstitutionProps {
  onNavigate?: (href: string) => void;
}

export const Constitution: React.FC<ConstitutionProps> = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageShell width="full">
      {/* Section 01: Hero / Institutional Identity */}
      <Section id="constitution-hero" spacing="none" width="full" background="primary">
        <ConstitutionHeroSection
          onExploreInvariants={() => scrollToSection('invariants-matrix')}
          onExploreEquation={() => scrollToSection('completion-equation')}
        />
      </Section>

      {/* Section 02: Tripartite Distinction & Multiplicative Completion Equation */}
      <Section
        id="completion-equation"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Normative Doctrine"
        title="The Tripartite Reality of Software Systems"
        description="Feature completion is a multiplicative zero-tolerance product: working behavior must pass canonical boundaries, satisfy invariants, survive crash restarts, and resist adversarial attacks."
      >
        <CompletionEquationSection />
      </Section>

      {/* Section 03: The 15 Non-Negotiable Invariants */}
      <Section
        id="invariants-matrix"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Non-Negotiable System Laws"
        title="The 15 Foundational Architecture Invariants"
        description="Immutable system laws governing causal identity separation, single state authority, authorization before execution, exact action binding, and anti-replay crash recovery."
      >
        <InvariantMatrixSection />
      </Section>

      {/* Section 04: The 13-Stage Definition of Done */}
      <Section
        id="dod-pipeline"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Engineering Rigor"
        title="The 13-Stage Definition of Done Pipeline"
        description="Every capability and pull request at Nexus LAB AI is held to a strict thirteen-stage pipeline from formal contract to adversarial failure injection and signed proof reports."
      >
        <DoDPipelineSection />
      </Section>

      {/* Section 05: Twelve Outlawed Anti-Patterns */}
      <Section
        id="forbidden-patterns"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Zero-Tolerance Boundaries"
        title="Twelve Outlawed Implementation Anti-Patterns"
        description="Code patterns strictly forbidden across all Nexus repositories to prevent architectural decay, security bypasses, and phantom features."
      >
        <ForbiddenPatternsSection />
      </Section>

      {/* Section 06: Nine Axioms & Specification Download */}
      <Section
        id="constitution-axioms"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Governing Philosophy"
        title="Systems Axioms & Canonical Specification"
        description="Core principles establishing that the substrate of an autonomous system must be more deterministic and trustworthy than the intelligence built on top of it."
      >
        <AxiomsSection />
      </Section>
    </PageShell>
  );
};
