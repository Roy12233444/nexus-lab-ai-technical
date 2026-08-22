import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { ChallengeHeroSection } from '@/components/challenge/ChallengeHeroSection';
import { ChallengePressureModelSection } from '@/components/challenge/ChallengePressureModelSection';
import { ChallengeFrontierSection } from '@/components/challenge/ChallengeFrontierSection';
import { ChallengeAnatomySection } from '@/components/challenge/ChallengeAnatomySection';
import { ChallengeCascadeSection } from '@/components/challenge/ChallengeCascadeSection';
import { ChallengeMatrixSection } from '@/components/challenge/ChallengeMatrixSection';
import { ChallengeOpenQuestionsSection } from '@/components/challenge/ChallengeOpenQuestionsSection';
import { ChallengeAlignmentSection } from '@/components/challenge/ChallengeAlignmentSection';
import { ChallengeBoundariesSection } from '@/components/challenge/ChallengeBoundariesSection';
import { ChallengeClosingSection } from '@/components/challenge/ChallengeClosingSection';

export interface ChallengeProps {
  onNavigate?: (href: string) => void;
}

export const Challenge: React.FC<ChallengeProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Hero Problem Orientation */}
      <Section id="challenge-hero" spacing="none" width="full" background="primary">
        <ChallengeHeroSection />
      </Section>

      {/* Section 02: Pressure Model */}
      <Section
        id="challenge-pressure-model"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Systemic Physics"
        title="The Seven Pressure Dimensions of Autonomy"
        description="Persistent autonomous execution operates across seven simultaneous stress vectors: Time, Uncertainty, Failure, Scale, Resource Limits, Responsibility, and Environment Shift."
      >
        <ChallengePressureModelSection />
      </Section>

      {/* Section 03: Challenge Frontier */}
      <Section
        id="challenge-frontier"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Problem Landscape"
        title="The Eight Canonical Engineering Challenges"
        description="A comprehensive structural map of the core engineering bottlenecks in autonomous systems (CH-001 through CH-008)."
      >
        <ChallengeFrontierSection />
      </Section>

      {/* Section 04: Failure Anatomy */}
      <Section
        id="challenge-anatomy"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Mechanistic Analysis"
        title="Deep Failure Anatomy & Technical Dimensions"
        description="Deconstructing why autonomy escalates difficulty, detailing concrete failure modes and technical dimensions for each challenge."
      >
        <ChallengeAnatomySection />
      </Section>

      {/* Section 05: Failure Cascade */}
      <Section
        id="challenge-cascade"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Failure Interaction"
        title="Systemic Cascading Failure Dynamics"
        description="Illustrating how isolated errors in memory, epistemics, or recovery compound into multi-agent coordination deadlocks."
      >
        <ChallengeCascadeSection />
      </Section>

      {/* Section 06: Stress Matrix */}
      <Section
        id="challenge-matrix"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Diagnostic Cross-Evaluation"
        title="Autonomous Systems Stress Matrix"
        description="Cross-referencing all eight challenges against the seven pressure dimensions in a high-density diagnostic truth table."
      >
        <ChallengeMatrixSection />
      </Section>

      {/* Section 07: Open Research Questions */}
      <Section
        id="challenge-open-questions"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Unsolved Frontier"
        title="Open Scientific & Systems Research Questions"
        description="Transparently documenting active mathematical, causal, and architectural frontiers where verified solutions do not yet exist."
      >
        <ChallengeOpenQuestionsSection />
      </Section>

      {/* Section 08: Nexus Alignment */}
      <Section
        id="challenge-alignment"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Institutional Intersections"
        title="Nexus Systems & Cross-Track Research Alignment"
        description="Mapping technical challenges directly to sovereign engineering programs, philosophy doctrines, and future horizons."
      >
        <ChallengeAlignmentSection onNavigate={onNavigate} />
      </Section>

      {/* Section 09: Epistemic Boundaries */}
      <Section
        id="challenge-boundaries"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Epistemic Discipline"
        title="Global Negative Boundaries & Quarantined Non-Claims"
        description="Maintaining institutional truth boundaries: what Nexus explicitly does not claim, and quarantined claims isolated with strike-through protection."
      >
        <ChallengeBoundariesSection />
      </Section>

      {/* Section 10: Closing Synthesis */}
      <Section
        id="challenge-closing"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Synthesis & Trajectory"
        title="The Open Frontier: Engineering Sovereign Resilient Systems"
        description="Autonomous intelligence is defined not by frictionless demos, but by how systems endure under pressure."
      >
        <ChallengeClosingSection onNavigate={onNavigate} />
      </Section>
    </PageShell>
  );
};
