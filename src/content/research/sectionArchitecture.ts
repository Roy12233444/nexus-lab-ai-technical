import { ResearchPageBlueprint } from '@/types/researchSection';

/**
 * Nexus LAB AI — Canonical Research Page Architecture Blueprint
 * Phase 04B.4 — 8-Section Narrative & Cognitive Composition
 */
export const RESEARCH_PAGE_BLUEPRINT: ResearchPageBlueprint = {
  pageId: 'research',
  route: '/research',
  title: 'Nexus LAB AI Research Track',
  description:
    'Sovereign AI Systems Research — Investigating autonomous agent execution, durable memory protocols, constitutional safety middleware, and multi-orbital operating systems.',
  sections: [
    {
      order: 1,
      id: 'research-hero',
      title: 'Sovereign Research Vectors',
      eyebrow: 'Nexus LAB AI Research',
      purpose:
        'Establish research identity and overarching mandate: investigating resilient autonomous intelligence, durable memory, safety middleware, and distributed space systems.',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL / TIER_4_CURRENT_SPEC',
      componentType: 'ResearchHeroSection',
      containerWidth: 'full',
      background: 'primary',
      spacing: 'none',
      contentKey: 'projects',
    },
    {
      order: 2,
      id: 'research-thesis',
      title: 'Why We Research',
      eyebrow: 'First Principles',
      purpose:
        'Articulate the fundamental engineering necessity for durable execution, memory persistence, safety gating, and delay-tolerant distributed systems before detailing specific programs.',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL / TIER_2_ENGINEERING',
      componentType: 'ResearchThesisSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'projects',
    },
    {
      order: 3,
      id: 'research-portfolio',
      title: 'Core Research Vectors',
      eyebrow: 'Independent Programs',
      purpose:
        'Present the four sovereign research projects (NALA, AMP, RTA-GUARD, COSMOS) as parallel vectors under the Nexus umbrella with zero invented cross-system operational dependencies.',
      sourceAuthority: 'TIER_3_VERIFIED_EVIDENCE / TIER_4_CURRENT_SPEC',
      componentType: 'ResearchPortfolioSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'projects',
    },
    {
      order: 4,
      id: 'research-domains',
      title: 'Research Domains & Territories',
      eyebrow: 'Capability Taxonomy',
      purpose:
        'Classify the four specialized technical territories (Agent Execution, Durable Memory, AI Safety & Governance, Multi-Orbital Systems) to provide a structured mental landscape.',
      sourceAuthority: 'TIER_2_ENGINEERING / TIER_4_CURRENT_SPEC',
      componentType: 'ResearchDomainsSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'projects',
    },
    {
      order: 5,
      id: 'research-evidence-matrix',
      title: 'Epistemic Maturity & Evidence Matrix',
      eyebrow: 'Truth Table',
      purpose:
        'Present an honest, transparent four-axis classification table (Maturity, Evidence, Temporal, Public Relevance) with explicit claim-level provenance and bounded verification limits.',
      sourceAuthority: 'TIER_3_VERIFIED_EVIDENCE / TIER_4_CURRENT_SPEC / TIER_5_PORTFOLIO',
      componentType: 'ResearchEvidenceMatrixSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'projects',
    },
    {
      order: 6,
      id: 'research-boundaries',
      title: 'Research Boundaries & Non-Claims',
      eyebrow: 'Epistemic Hygiene',
      purpose:
        'Transparently articulate what is verified vs what is not claimed (e.g., NALA bounded duration ≠ infinite autonomy; AMP Phase 1 persistence ≠ full cognitive convergence; RTA-GUARD reported LOC ≠ audited proof; COSMOS simulation ≠ in-orbit flight).',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL / TIER_3_VERIFIED_EVIDENCE / TIER_4_CURRENT_SPEC',
      componentType: 'ResearchBoundariesSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'projects',
    },
    {
      order: 7,
      id: 'research-gateways',
      title: 'Program Technical Dossiers',
      eyebrow: 'Deeper Investigation',
      purpose:
        'Provide clean doorways routing technical visitors into deep dossier tracks for each research program without overwhelming the primary landing page.',
      sourceAuthority: 'TIER_4_CURRENT_SPEC',
      componentType: 'ResearchGatewaysSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'projects',
    },
    {
      order: 8,
      id: 'research-closing',
      title: 'Roots Before Fruits',
      eyebrow: 'The Long Horizon',
      purpose:
        'Reiterate the institutional commitment to compounding foundational research into durable, sovereign technological capability.',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL',
      componentType: 'ResearchClosingSection',
      containerWidth: 'reading',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'projects',
    },
  ],
};
