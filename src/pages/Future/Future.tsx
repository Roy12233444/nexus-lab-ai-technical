import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { FutureHeroSection } from '@/components/future/FutureHeroSection';
import { FutureThesisSection } from '@/components/future/FutureThesisSection';
import { FutureDirectionsSection } from '@/components/future/FutureDirectionsSection';
import { FutureHorizonsSection } from '@/components/future/FutureHorizonsSection';
import { FutureProblemsSection } from '@/components/future/FutureProblemsSection';
import { FutureEvolutionSection } from '@/components/future/FutureEvolutionSection';
import { FutureMatrixSection } from '@/components/future/FutureMatrixSection';
import { FutureVisionSection } from '@/components/future/FutureVisionSection';
import { FutureBoundariesSection } from '@/components/future/FutureBoundariesSection';
import { FutureClosingSection } from '@/components/future/FutureClosingSection';

export interface FutureProps {
  onNavigate?: (href: string) => void;
}

export const Future: React.FC<FutureProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Hero Identity */}
      <Section id="future-hero" spacing="none" width="full" background="primary">
        <FutureHeroSection />
      </Section>

      {/* Section 02: Strategic Thesis */}
      <Section
        id="future-thesis"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Forward Trajectory"
        title="The Strategic Future Thesis"
        description="A continuous institutional progression from human cognitive intention toward sovereign, resilient autonomous systems."
      >
        <FutureThesisSection />
      </Section>

      {/* Section 03: Core Directions */}
      <Section
        id="future-directions"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Architectural Vectors"
        title="Core Future Directions"
        description="Six canonical research directions advancing autonomous execution, memory continuity, safety middleware, and swarm coordination."
      >
        <FutureDirectionsSection />
      </Section>

      {/* Section 04: Research Horizons */}
      <Section
        id="future-horizons"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Planning Frontiers"
        title="Structured Research Horizons"
        description="Near (0–2y), Medium (2–5y), and Long (5+y) horizons bounded by strict anti-prediction constraints."
      >
        <FutureHorizonsSection />
      </Section>

      {/* Section 05: Open Problems */}
      <Section
        id="future-problems"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Technical Bottlenecks"
        title="Fundamental Open Problems"
        description="Six core scientific and engineering bottlenecks standing between today's systems and persistent autonomous intelligence."
      >
        <FutureProblemsSection />
      </Section>

      {/* Section 06: Systems Evolution */}
      <Section
        id="future-evolution"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Conceptual Map"
        title="Systems Evolution Hierarchy"
        description="A four-tier conceptual progression from foundational methodology to extreme-environment operating infrastructure."
      >
        <FutureEvolutionSection />
      </Section>

      {/* Section 07: Truth Matrix */}
      <Section
        id="future-matrix"
        spacing="md"
        width="wide"
        background="primary"
        eyebrow="Epistemic Truth Table"
        title="Capability vs Horizon Truth Matrix"
        description="Transparent classification of what is built, what is under active research, and what represents long-horizon exploration."
      >
        <FutureMatrixSection />
      </Section>

      {/* Section 08: Long-Horizon Vision */}
      <Section
        id="future-vision"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Institutional Vision"
        title="Resilient Sovereign Infrastructure"
        description="Grounded vision for sovereign computational infrastructure across planetary and extreme orbital domains."
      >
        <FutureVisionSection />
      </Section>

      {/* Section 09: Epistemic Boundaries */}
      <Section
        id="future-boundaries"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Epistemic Guardrails"
        title="Negative Boundaries & Quarantined Non-Claims"
        description="Hard negative boundaries and quarantined claim corrections enforcing absolute institutional credibility."
      >
        <FutureBoundariesSection />
      </Section>

      {/* Section 10: Continuing Mandate */}
      <Section
        id="future-closing"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Horizon Trajectory"
        title="The Continuing Research Mandate"
        description="Synthesizing foundational research into ongoing exploration across the Nexus technical dossier."
      >
        <FutureClosingSection onNavigate={onNavigate} />
      </Section>
    </PageShell>
  );
};

Future.displayName = 'Future';
export default Future;
