import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { ProgramsHeroSection } from '@/components/programs/ProgramsHeroSection';
import { ProgramsThesisSection } from '@/components/programs/ProgramsThesisSection';
import { ProgramsCoreSection } from '@/components/programs/ProgramsCoreSection';
import { ProgramsStateSection } from '@/components/programs/ProgramsStateSection';
import { ProgramsSupportingSection } from '@/components/programs/ProgramsSupportingSection';
import { ProgramsContextSection } from '@/components/programs/ProgramsContextSection';
import { ProgramsBoundariesSection } from '@/components/programs/ProgramsBoundariesSection';
import { ProgramsClosingSection } from '@/components/programs/ProgramsClosingSection';

export interface ProgramsProps {
  onNavigate?: (href: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Programs Identity / Hero */}
      <Section id="programs-hero" spacing="none" width="full" background="primary">
        <ProgramsHeroSection onNavigate={onNavigate} />
      </Section>

      {/* Section 02: Programs Thesis (Program != Product) */}
      <Section
        id="programs-thesis"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Institutional Mandate"
        title="The Architecture of a Program"
        description="Articulating the distinction between research inquiries, technology substrates, and sovereign programs."
      >
        <ProgramsThesisSection />
      </Section>

      {/* Section 03: Core Sovereign Programs */}
      <Section
        id="programs-core"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Flagship Initiatives"
        title="Core Sovereign Programs"
        description="Four sovereign systems engineering vectors pursued independently under the Nexus institutional charter."
      >
        <ProgramsCoreSection />
      </Section>

      {/* Section 04: Program State & Reality Matrix */}
      <Section
        id="programs-state"
        spacing="md"
        width="wide"
        background="secondary"
        eyebrow="Rigorous Epistemic Accounting"
        title="Program State & Reality Matrix"
        description="Complete four-axis decoupling of maturity, evidence level, temporal horizon, and public tier."
      >
        <ProgramsStateSection />
      </Section>

      {/* Section 05: Supporting Systems & Foundational Kernels */}
      <Section
        id="programs-supporting"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Architectural Substrates"
        title="Supporting Systems & Foundational Kernels"
        description="Reasoning kernels, hardened execution relays, and decentralized coordination mathematics."
      >
        <ProgramsSupportingSection />
      </Section>

      {/* Section 06: Applied Systems Exploration */}
      <Section
        id="programs-context"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Context-Bound Demonstration"
        title="Applied Systems Exploration"
        description="Demonstrating sovereign agent and memory techniques in regional-language agronomy triage."
      >
        <ProgramsContextSection />
      </Section>

      {/* Section 07: Epistemic Firewall & Boundaries */}
      <Section
        id="programs-boundaries"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Epistemic Firewall"
        title="Program Boundaries & Explicit Non-Claims"
        description="Publicly verified boundary constraints, quarantined assertions, and negative claims."
      >
        <ProgramsBoundariesSection />
      </Section>

      {/* Section 08: Long-Horizon Trajectory / Closing */}
      <Section
        id="programs-closing"
        spacing="lg"
        width="narrow"
        background="secondary"
        eyebrow="Long-Horizon Trajectory"
        title="Engineering the Systems Frontier"
        description="Building, verifying, and methodically expanding the frontier of machine intelligence."
      >
        <ProgramsClosingSection onNavigate={onNavigate} />
      </Section>
    </PageShell>
  );
};
