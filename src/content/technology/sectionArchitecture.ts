import { TechnologyPageBlueprint } from '@/types/technologySection';

/**
 * Nexus LAB AI — Canonical Technology Page Architecture Blueprint
 * Phase 04C.4 — 8-Section Narrative & Engineering Systems Composition
 */
export const TECHNOLOGY_PAGE_BLUEPRINT: TechnologyPageBlueprint = {
  pageId: 'technology',
  route: '/technology',
  title: 'Nexus LAB AI Technology Track',
  description:
    'Engineering Intelligent Systems From First Principles — Sovereign transformer building blocks, autonomous execution harnesses, durable cognitive memory, real-time safety middleware, and multi-orbital infrastructure.',
  sections: [
    {
      order: 1,
      id: 'technology-hero',
      title: 'Engineering From First Principles',
      eyebrow: 'Nexus LAB AI Technology',
      purpose:
        'Establish technological identity and engineering mandate: constructing sovereign, fault-tolerant AI systems architectures across 6 capability domains rather than assembling black-box API wrappers.',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL / TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyHeroSection',
      containerWidth: 'full',
      background: 'primary',
      spacing: 'none',
      contentKey: 'identity',
    },
    {
      order: 2,
      id: 'technology-philosophy',
      title: 'First-Principles Systems Philosophy',
      eyebrow: 'Engineering Axioms',
      purpose:
        'Articulate the foundational engineering principles that guide how Nexus builds solutions: architectural sovereignty, multi-timescale state persistence, pre-execution constitutional safety, and transactional crash resilience.',
      sourceAuthority: 'TIER_1_CONSTITUTIONAL / TIER_2_ENGINEERING',
      componentType: 'TechnologyPhilosophySection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'identity',
    },
    {
      order: 3,
      id: 'technology-architecture',
      title: 'The Three-Tier Technology Architecture',
      eyebrow: 'Systems Composition',
      purpose:
        'Present the core structural hierarchy: Technical Substrates (underlying mechanisms) producing Systemic Capabilities (problems solved), manifested in Sovereign Projects (implementation vehicles).',
      sourceAuthority: 'TIER_2_ENGINEERING / TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyArchitectureSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'substrates',
    },
    {
      order: 4,
      id: 'technology-domains',
      title: 'Six Sovereign Technology Domains',
      eyebrow: 'Capability Territories',
      purpose:
        'Expose the six distinct engineering territories (Reasoning, Agent Execution, Memory, Fault Tolerance, Safety & Governance, Distributed Space) with their respective core challenges.',
      sourceAuthority: 'TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyDomainsSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'domains',
    },
    {
      order: 5,
      id: 'technology-capabilities',
      title: 'Systemic Capability Matrix',
      eyebrow: 'Engineering Breadth',
      purpose:
        'Provide a structured, compact matrix of the 18 strongly typed systemic capabilities organized under the 6 technology domains without overwhelming the user with raw text dumps.',
      sourceAuthority: 'TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyCapabilitiesSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'capabilities',
    },
    {
      order: 6,
      id: 'technology-substrates',
      title: 'Technical Substrates & Software Engines',
      eyebrow: 'Underlying Machinery',
      purpose:
        'Detail the concrete software engines (Custom Transformers, Anderson Solver, NALA 4-layer harness, Chiranjeevi Rust core, ARIES recovery, RTA-GUARD interceptor, COSMOS DTN blueprint).',
      sourceAuthority: 'TIER_3_VERIFIED_EVIDENCE / TIER_4_CURRENT_SPEC',
      componentType: 'TechnologySubstratesSection',
      containerWidth: 'wide',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'substrates',
    },
    {
      order: 7,
      id: 'technology-project-map',
      title: 'Technology → Project Implementation Vehicles',
      eyebrow: 'Applied Systems',
      purpose:
        'Illustrate where technologies manifest across sovereign projects (NALA, AMP, RTA-GUARD, COSMOS, CHAITANYA, SAPTACORE, PHANTAKSHA) while strictly preserving project independence.',
      sourceAuthority: 'TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyProjectMapSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'projects',
    },
    {
      order: 8,
      id: 'technology-evidence',
      title: 'Evidence, Truth Matrix & Engineering Boundaries',
      eyebrow: 'Epistemic Hygiene',
      purpose:
        'Communicate the decoupled four-axis truth table (Maturity, Evidence, Temporal, Public Relevance) and establish strict quarantined non-claims boundaries.',
      sourceAuthority: 'TIER_3_VERIFIED_EVIDENCE / TIER_4_CURRENT_SPEC',
      componentType: 'TechnologyEvidenceSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'claims',
    },
  ],
};
