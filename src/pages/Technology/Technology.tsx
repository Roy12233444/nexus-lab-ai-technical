import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { TechnologyHeroSection } from '@/components/technology/TechnologyHeroSection';
import { TechnologyPhilosophySection } from '@/components/technology/TechnologyPhilosophySection';
import { TechnologyArchitectureSection } from '@/components/technology/TechnologyArchitectureSection';
import { TechnologyDomainsSection } from '@/components/technology/TechnologyDomainsSection';
import { TechnologyCapabilitiesSection } from '@/components/technology/TechnologyCapabilitiesSection';
import { TechnologySubstratesSection } from '@/components/technology/TechnologySubstratesSection';
import { TechnologyProjectMapSection } from '@/components/technology/TechnologyProjectMapSection';
import { TechnologyEvidenceSection } from '@/components/technology/TechnologyEvidenceSection';

export interface TechnologyProps {
  onNavigate?: (href: string) => void;
}

export const Technology: React.FC<TechnologyProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Technology Identity / Hero */}
      <Section id="technology-hero" spacing="none" width="full" background="primary">
        <TechnologyHeroSection onNavigate={onNavigate} />
      </Section>

      {/* Section 02: Systems Philosophy */}
      <Section
        id="technology-philosophy"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Engineering Axioms"
        title="First-Principles Systems Philosophy"
        description="The foundational engineering axioms that guide how Nexus builds solutions."
      >
        <TechnologyPhilosophySection />
      </Section>

      {/* Section 03: Three-Tier Architecture */}
      <Section
        id="technology-architecture"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Systems Composition"
        title="The Three-Tier Technology Architecture"
        description="Technical Substrates producing Systemic Capabilities, manifested in Sovereign Projects."
      >
        <TechnologyArchitectureSection />
      </Section>

      {/* Section 04: Six Technology Domains */}
      <Section
        id="technology-domains"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Capability Territories"
        title="Six Sovereign Technology Domains"
        description="Our technological efforts organized into six distinct capability territories."
      >
        <TechnologyDomainsSection />
      </Section>

      {/* Section 05: Systemic Capability Matrix */}
      <Section
        id="technology-capabilities"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Engineering Breadth"
        title="Systemic Capability Matrix"
        description="Eighteen strongly typed capabilities engineered across first-principles neural kernels and harnesses."
      >
        <TechnologyCapabilitiesSection />
      </Section>

      {/* Section 06: Technical Substrates */}
      <Section
        id="technology-substrates"
        spacing="md"
        width="wide"
        background="secondary"
        eyebrow="Underlying Machinery"
        title="Technical Substrates & Software Engines"
        description="The concrete software engines, custom PyTorch neural blocks, and Rust persistence drivers."
      >
        <TechnologySubstratesSection />
      </Section>

      {/* Section 07: Technology -> Project Map */}
      <Section
        id="technology-project-map"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Applied Systems"
        title="Technology → Project Implementation Vehicles"
        description="Where technologies manifest across distinct sovereign project vehicles with zero operational coupling."
      >
        <TechnologyProjectMapSection onNavigate={onNavigate} />
      </Section>

      {/* Section 08: Evidence & Boundaries */}
      <Section
        id="technology-evidence"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Epistemic Hygiene"
        title="Evidence, Truth Matrix & Engineering Boundaries"
        description="Decoupled four-axis truth table and explicit public quarantine firewall."
      >
        <TechnologyEvidenceSection />
      </Section>
    </PageShell>
  );
};
