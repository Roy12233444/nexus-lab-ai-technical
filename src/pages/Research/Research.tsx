import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { ResearchHeroSection } from '@/components/research/ResearchHeroSection';
import { ResearchThesisSection } from '@/components/research/ResearchThesisSection';
import { ResearchPortfolioSection } from '@/components/research/ResearchPortfolioSection';
import { ResearchDomainsSection } from '@/components/research/ResearchDomainsSection';
import { ResearchEvidenceMatrixSection } from '@/components/research/ResearchEvidenceMatrixSection';
import { ResearchBoundariesSection } from '@/components/research/ResearchBoundariesSection';
import { ResearchGatewaysSection } from '@/components/research/ResearchGatewaysSection';
import { ResearchClosingSection } from '@/components/research/ResearchClosingSection';

export interface ResearchProps {
  onNavigate?: (href: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onNavigate }) => {
  return (
    <PageShell width="full">
      {/* Section 01: Research Identity / Hero */}
      <Section id="research-hero" spacing="none" width="full" background="primary">
        <ResearchHeroSection />
      </Section>

      {/* Section 02: Research Thesis */}
      <Section
        id="research-thesis"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="First Principles"
        title="Why We Research"
        description="The fundamental engineering necessity for durable AI systems architectures."
      >
        <ResearchThesisSection />
      </Section>

      {/* Section 03: Core Research Portfolio */}
      <Section
        id="research-portfolio"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Independent Programs"
        title="Core Research Vectors"
        description="Four sovereign technical investigations pursued in parallel under the Nexus LAB AI umbrella."
      >
        <ResearchPortfolioSection
          onSelectProject={(projectId) => {
            if (onNavigate) onNavigate(`/research/${projectId}`);
          }}
        />
      </Section>

      {/* Section 04: Research Domains */}
      <Section
        id="research-domains"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Capability Taxonomy"
        title="Research Domains & Territories"
        description="Four capability territories addressing fundamental bottlenecks in intelligent systems."
      >
        <ResearchDomainsSection />
      </Section>

      {/* Section 05: Epistemic Maturity & Evidence Matrix */}
      <Section
        id="research-evidence-matrix"
        spacing="lg"
        width="wide"
        background="primary"
        eyebrow="Truth Table"
        title="Epistemic Maturity & Evidence Matrix"
        description="Transparent classification of implementation maturity, empirical evidence tiers, and temporal horizons."
      >
        <ResearchEvidenceMatrixSection />
      </Section>

      {/* Section 06: Research Boundaries */}
      <Section
        id="research-boundaries"
        spacing="md"
        width="content"
        background="secondary"
        eyebrow="Epistemic Hygiene"
        title="Research Boundaries & Non-Claims"
        description="Transparent declaration of what is verified versus what is explicitly not claimed."
      >
        <ResearchBoundariesSection />
      </Section>

      {/* Section 07: Exploration Gateways */}
      <Section
        id="research-gateways"
        spacing="lg"
        width="content"
        background="primary"
        eyebrow="Deeper Investigation"
        title="Program Technical Dossiers"
        description="Navigate directly into specialized technical dossiers for each active research program."
      >
        <ResearchGatewaysSection
          onSelectProject={(projectId) => {
            if (onNavigate) onNavigate(`/research/${projectId}`);
          }}
        />
      </Section>

      {/* Section 08: Closing Direction */}
      <Section
        id="research-closing"
        spacing="md"
        width="reading"
        background="secondary"
        eyebrow="The Long Horizon"
        title="Roots Before Fruits"
        description="Our institutional commitment to compounding foundational research into durable capability."
      >
        <ResearchClosingSection />
      </Section>
    </PageShell>
  );
};

Research.displayName = 'Research';
export default Research;
