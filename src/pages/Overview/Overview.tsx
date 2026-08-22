import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { HeroSection } from '@/components/overview/HeroSection';
import { ThesisSection } from '@/components/overview/ThesisSection';
import { MissionSection } from '@/components/overview/MissionSection';
import { InnovationEngineSection } from '@/components/overview/InnovationEngineSection';
import { MethodologySection } from '@/components/overview/MethodologySection';
import { ArchitectureSection } from '@/components/overview/ArchitectureSection';
import { ResearchProgramsSection } from '@/components/overview/ResearchProgramsSection';
import { EvidenceSection } from '@/components/overview/EvidenceSection';
import { StateMatrixSection } from '@/components/overview/StateMatrixSection';
import { ExplorationSection } from '@/components/overview/ExplorationSection';

export interface OverviewProps {
  onNavigate?: (href: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Identity / Hero */}
      <Section id="identity-hero" spacing="none" width="full" background="primary">
        <HeroSection />
      </Section>

      {/* Section 02: Thesis / Worldview */}
      <Section
        id="thesis-worldview"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="First Principles"
        title="The Core Thesis"
        description="Why ephemeral AI wrappers fail and durable sovereign systems architectures are necessary."
      >
        <ThesisSection />
      </Section>

      {/* Section 03: Mission & Scope */}
      <Section
        id="mission-scope"
        spacing="md"
        width="content"
        background="primary"
        eyebrow="Scope & Mandate"
        title="Institutional Mission"
        description="The foundational research boundary of Nexus LAB AI."
      >
        <MissionSection />
      </Section>

      {/* Section 04: Innovation Engine */}
      <Section
        id="innovation-engine"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Operational Mechanism"
        title="The Innovation Engine"
        description="A repeatable institutional engine converting unsolved problems into durable capabilities."
      >
        <InnovationEngineSection />
      </Section>

      {/* Section 05: NSEM Methodology */}
      <Section
        id="nsem-methodology"
        spacing="md"
        width="content"
        background="primary"
        eyebrow="Engineering Framework"
        title="NSEM Methodology"
        description="Nexus Systems Engineering Methodology: Macro Lifecycle (5 Stages) and Micro Loop (8 Steps)."
      >
        <MethodologySection />
      </Section>

      {/* Section 06: Architecture Hierarchy */}
      <Section
        id="architectural-hierarchy"
        spacing="lg"
        width="wide"
        background="secondary"
        eyebrow="Roots to Fruits"
        title="System Architecture"
        description="The four-tier hierarchy uniting foundational beliefs, methodology, research branches, and validated outputs."
      >
        <ArchitectureSection />
      </Section>

      {/* Section 07: Research Programs */}
      <Section
        id="research-programs"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Active Investigations"
        title="Core Research Programs"
        description="Autonomous research tracks investigating long-running execution, persistent memory, safety middleware, and orbital operating systems."
      >
        <ResearchProgramsSection />
      </Section>

      {/* Section 08: Evidence & Validation */}
      <Section
        id="evidence-validation"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Epistemic Proof"
        title="Empirical Evidence & Validation"
        description="Concrete, reproducible artifacts, chaos soak test logs, and mathematical validation records."
      >
        <EvidenceSection />
      </Section>

      {/* Section 09: Maturity Truth Table */}
      <Section
        id="state-matrix"
        spacing="md"
        width="content"
        background="primary"
        eyebrow="Truth Table"
        title="Maturity & Epistemic Boundaries"
        description="Transparent classification of what is built, what is experimental, and what remains in specification."
      >
        <StateMatrixSection />
      </Section>

      {/* Section 10: System Exploration */}
      <Section
        id="system-exploration"
        spacing="lg"
        width="content"
        background="secondary"
        eyebrow="Deeper Investigation"
        title="Explore the Technical Dossier"
        description="Navigate directly into specialized deep-dive tracks across the Nexus technical website."
      >
        <ExplorationSection onNavigate={onNavigate} />
      </Section>
    </PageShell>
  );
};

Overview.displayName = 'Overview';
export default Overview;
