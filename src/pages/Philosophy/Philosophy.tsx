import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { PhilosophyHeroSection } from '@/components/philosophy/PhilosophyHeroSection';
import { PhilosophyThesisSection } from '@/components/philosophy/PhilosophyThesisSection';
import { PhilosophyPrinciplesSection } from '@/components/philosophy/PhilosophyPrinciplesSection';
import { PhilosophyEpistemologySection } from '@/components/philosophy/PhilosophyEpistemologySection';
import { PhilosophyCognitionSection } from '@/components/philosophy/PhilosophyCognitionSection';
import { PhilosophyAgencySection } from '@/components/philosophy/PhilosophyAgencySection';
import { PhilosophyResponsibilitySection } from '@/components/philosophy/PhilosophyResponsibilitySection';
import { PhilosophyFormalizationSection } from '@/components/philosophy/PhilosophyFormalizationSection';
import { PhilosophyHypothesesSection } from '@/components/philosophy/PhilosophyHypothesesSection';
import { PhilosophyMappingSection } from '@/components/philosophy/PhilosophyMappingSection';
import { PhilosophyBoundariesSection } from '@/components/philosophy/PhilosophyBoundariesSection';
import { PhilosophyClosingSection } from '@/components/philosophy/PhilosophyClosingSection';

export interface PhilosophyProps {
  onNavigate?: (href: string) => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Philosophy Hero / Identity */}
      <Section id="philosophy-hero" spacing="none" width="full" background="primary">
        <PhilosophyHeroSection />
      </Section>

      {/* Section 02: Shastra–AI Integration Thesis */}
      <Section
        id="philosophy-thesis"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Epistemic Framework"
        title="The Shastra–AI Integration Methodology"
        description="Extracting classical philosophical inquiries, formulating modern interpretations, constructing testable AI hypotheses, and building verified computational systems."
      >
        <PhilosophyThesisSection />
      </Section>

      {/* Section 03: Eight Foundational Principles */}
      <Section
        id="philosophy-principles"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Public Epistemic Constitution"
        title="The Eight Foundational Principles"
        description="The non-negotiable intellectual constitution governing all Nexus LAB AI research, formalization, and engineering."
      >
        <PhilosophyPrinciplesSection />
      </Section>

      {/* Section 04: Epistemic Grounding */}
      <Section
        id="philosophy-epistemology"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Pramāṇa-Śāstra"
        title="Epistemic Grounding & Knowledge Validation"
        description="Investigating classical Nyāya epistemology to formulate verifiable knowledge gating and multi-step inference chains."
      >
        <PhilosophyEpistemologySection />
      </Section>

      {/* Section 05: Cognitive Architecture */}
      <Section
        id="philosophy-cognition"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Antaḥkaraṇa & Citta"
        title="Cognitive Architecture & Latent Memory"
        description="Deconstructing the multi-tier cognitive stack into sensory parsing, contextual attention, and persistent latent trace retrieval."
      >
        <PhilosophyCognitionSection />
      </Section>

      {/* Section 06: Material Agency */}
      <Section
        id="philosophy-agency"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Prakṛti & Kartṛtva"
        title="Material Functionalism & Computational Agency"
        description="Goal-directed agency operates entirely within physical matter (Prakṛti) without requiring subjective sentience (Puruṣa)."
      >
        <PhilosophyAgencySection />
      </Section>

      {/* Section 07: Responsibility & Normative Governance */}
      <Section
        id="philosophy-responsibility"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Dharma & Adhikāra"
        title="Normative Governance & Duty Boundaries"
        description="Role-scoped duty boundaries (Svadharma), dilemma arbitration hierarchies (Dharma-saṅkaṭa), and prerequisite capability gating (Adhikāra)."
      >
        <PhilosophyResponsibilitySection />
      </Section>

      {/* Section 08: Formalization Frontier */}
      <Section
        id="philosophy-formalization"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Computational Tractability"
        title="The Formalization Frontier"
        description="Three strict zones of computational tractability, preventing metaphysical cargo-culting."
      >
        <PhilosophyFormalizationSection />
      </Section>

      {/* Section 09: AI Hypotheses */}
      <Section
        id="philosophy-hypotheses"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Testable Conjectures"
        title="AI Research Hypotheses"
        description="Cataloging testable computational conjectures derived from classical Indian philosophy."
      >
        <PhilosophyHypothesesSection />
      </Section>

      {/* Section 10: Nexus Mapping */}
      <Section
        id="philosophy-mapping"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Grounded Systems Mapping"
        title="Nexus Architectural Alignment Matrix"
        description="Mapping classical concepts to active Nexus engineering initiatives across Direct, Research, and Analogy tiers."
      >
        <PhilosophyMappingSection />
      </Section>

      {/* Section 11: Epistemic Boundaries */}
      <Section
        id="philosophy-boundaries"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Epistemic Safeguards"
        title="Epistemic Firewall & Explicit Non-Claims"
        description="Public boundary layer declaring what Nexus LAB AI does NOT claim."
      >
        <PhilosophyBoundariesSection />
      </Section>

      {/* Section 12: Long-Horizon Trajectory */}
      <Section
        id="philosophy-closing"
        spacing="lg"
        width="narrow"
        background="secondary"
        eyebrow="Systems Exploration"
        title="Long-Horizon Philosophical Trajectory"
        description="Enduring foundations for verifiable machine cognition."
      >
        <PhilosophyClosingSection onNavigate={onNavigate} />
      </Section>
    </PageShell>
  );
};
