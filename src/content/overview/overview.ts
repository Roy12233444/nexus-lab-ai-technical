import { OverviewContentModel } from '@/types/overview';

/**
 * Nexus LAB AI — Canonical Overview Static Content Model
 * Generated strictly from Phase 04A.2 Authoritative Information Register.
 */
export const OVERVIEW_CONTENT: OverviewContentModel = {
  metadata: {
    version: '1.0.0',
    lastUpdated: '2026-08-18',
    classification: 'CANONICAL_SOURCE_TRUTH',
  },
  identity: {
    name: 'Nexus LAB AI',
    brandName: 'NEXUS LAB AI',
    organizationType: 'Sovereign AI Systems Innovation Company',
    positioning: 'AI Systems Innovation Company',
    tagline: 'AI Systems Innovation Company',
    missionStatement:
      'Researching, engineering, and validating durable intelligent-system capabilities.',
    boundaries: [
      'Not a SaaS wrapper or generic incubator.',
      'Not a collection of unrelated standalone products.',
      'Products are downstream fruits of validated foundational research, not the primary organizational definition.',
    ],
  },
  thesis: {
    problemStatement:
      'Contemporary AI development prioritizes rapid ephemeral wrappers over durable, mathematically sound, and self-recovering systems architectures.',
    coreHypothesis:
      'A continuous institutional loop combining first-principles research, rigorous systems engineering, reproducible experimentation, and evidence extraction compounds sovereign technological capability.',
    rationale:
      'Without sovereign foundational layers (epistemic reasoning, persistent memory, and constitutional safety), autonomous systems remain fragile and non-deterministic.',
    approach:
      'First-principles research manifested through sovereign architectural pillars (Roots → Trunk → Branches → Fruits).',
  },
  innovationEngine: {
    definition:
      'The central institutional mechanism through which Nexus LAB AI converts difficult unsolved technological challenges into durable, validated capabilities.',
    purpose:
      'To establish a repeatable, compounding lifecycle of technological discovery, engineering, and empirical validation.',
    macroLifecycle: ['INSPIRATION', 'FORMALIZATION', 'VALIDATION', 'ENGINEERING', 'IMPACT'],
    microEngineeringLoop: [
      'Problem',
      'Research',
      'Architecture',
      'Implementation',
      'Experiment',
      'Evidence',
      'Validation',
      'Validated Technology',
    ],
    hierarchy: {
      roots: ['Foundational Beliefs', 'Nexus Constitution', 'Knowledge Extraction Report (KER)'],
      trunk: ['NSEM Methodology', 'Innovation Engine', 'Evidence & Validation Framework'],
      branches: ['NALA', 'AMP', 'RTA-GUARD', 'COSMOS'],
      fruits: ['Validated Technologies', 'Downstream Products'],
    },
  },
  researchPrograms: [
    {
      id: 'nala',
      name: 'NALA',
      shortName: 'NALA',
      tagline: 'Multi-Timescale Long-Running Autonomous Agent Harness',
      problem:
        'Autonomous agent fragility, context degradation, and crash recovery over long runtimes.',
      purpose: 'Engineered for persistent, continuous multi-timescale agent execution.',
      architectureLayers: [
        'BRAIN (Planner + SAPTACORE Council)',
        'HANDS (Executor + Sandbox + Model Router)',
        'SESSION (AMP Chiranjeevi + TQB + Dronagiri)',
        'SAFETY (RTA-GUARD + USHA Protocol)',
      ],
      currentState: 'Core 68-file harness built and soak-tested; UI integration active.',
      maturity: 'IMPLEMENTED',
      evidence: 'VERIFIED',
      temporalState: 'CURRENT',
      publicRelevance: 'PRIMARY',
      verifiedMilestones: [
        '1-Hour Chaos Soak Test passed (JIRA-007)',
        'Context Window Tracker & Compaction (JIRA-004)',
        'Crash Recovery Engine & ARIES Phases (JIRA-005)',
      ],
      limitations: [
        'One-month continuous run goal still in validation phase.',
        'Verified for specific harness execution scenarios, not universal production readiness.',
      ],
      openQuestions: ['Full multi-agent swarm scalability under extreme token pressure.'],
    },
    {
      id: 'amp',
      name: 'ANJANEYA Memory Protocol',
      shortName: 'AMP',
      tagline: 'High-Durability Cognitive Memory Architecture',
      problem:
        'Null retrieval, catastrophic forgetting, and uncompressed state explosion in neural systems.',
      purpose:
        'Zero null-retrieval guarantees, devotion crystallization, and multi-substrate persistence.',
      architectureLayers: [
        'Devotion Crystallization',
        'Dronagiri Holographic Compression',
        'Chiranjeevi Persistence Layer',
        'Sankat Mochan Retrieval',
        'Anima-Mahima Adaptive Scaling',
      ],
      currentState: 'Phase 1 Rust core implemented; broader architectural pillars specified.',
      maturity: 'IMPLEMENTED',
      evidence: 'VERIFIED',
      temporalState: 'CURRENT',
      publicRelevance: 'PRIMARY',
      verifiedMilestones: [
        'Phase 1 Rust core implementation (param_hash.rs, erasure.rs, spore.rs)',
        'Zero null-retrieval mathematical formalization',
      ],
      limitations: [
        'Phase 1 verified at subsystem level; full 5-pillar deployment in active research.',
      ],
      openQuestions: ['Substrate wear leveling under multi-terabyte continuous streaming.'],
    },
    {
      id: 'rta-guard',
      name: 'RTA-GUARD',
      shortName: 'RTA-GUARD',
      tagline: 'Constitutional AI Safety Middleware',
      problem:
        'Post-hoc prompt filtering failing to provide mathematical guarantees and tamper-proof audit trails.',
      purpose:
        'Constitutional safety middleware with quantum-resistant cryptographic audit trails.',
      architectureLayers: [
        'Constitutional Rules Engine',
        'Quantum-Resistant Audit Logger',
        'DPDP & MeiTY Governance Validator',
      ],
      currentState:
        'Substantial implementation reported (70K+ LOC, 2K+ tests); independent code audit pending.',
      maturity: 'IMPLEMENTED',
      evidence: 'REPORTED',
      temporalState: 'CURRENT',
      publicRelevance: 'PRIMARY',
      verifiedMilestones: [
        '13 Constitutional Rules formalized',
        '18-phase safety middleware architecture specified',
      ],
      limitations: [
        'Scale metrics reported from project portfolio; independent repository audit pending.',
      ],
      openQuestions: ['Microsecond latency bounds under heavy concurrent cryptographic signing.'],
    },
    {
      id: 'cosmos',
      name: 'COSMOS',
      shortName: 'COSMOS',
      tagline: 'Cognitive Operating System for Multi-Orbital Systems',
      problem:
        'High-latency, radiation-prone, autonomous space systems requiring onboard cognition without terrestrial reliance.',
      purpose:
        'Autonomous multi-orbital operating system for satellite constellation coordination and mission resilience.',
      architectureLayers: [
        'Orbital Telemetry Ingestion',
        'Autonomous Reasoning Kernel',
        'Fault Isolation & Reconfiguration',
        'Inter-Satellite Mesh Protocol',
      ],
      currentState:
        'Comprehensive architectural specification defined in COSMOS Project Structure Plan.',
      maturity: 'SPECIFIED',
      evidence: 'DOCUMENTED',
      temporalState: 'CURRENT',
      publicRelevance: 'PRIMARY',
      verifiedMilestones: ['COSMOS 4-part architecture plan documented'],
      limitations: ['Architectural design phase; flight simulator benchmarking planned.'],
      openQuestions: ['Hard real-time deterministic scheduling on rad-hardened RISC-V compute.'],
    },
  ],
  architectureNodes: [
    {
      id: 'roots',
      name: 'Roots (Foundational Beliefs & Constitution)',
      layer: 'ROOTS',
      purpose: 'First-principles axioms, ethical constraints, and epistemic validation criteria.',
      maturity: 'SPECIFIED',
      evidence: 'DOCUMENTED',
      relatedPrograms: ['Constitution', 'KER', 'FBVC'],
    },
    {
      id: 'trunk',
      name: 'Trunk (NSEM & Innovation Engine)',
      layer: 'TRUNK',
      purpose: 'Methodological engine driving repeatable research, engineering, and validation.',
      maturity: 'IMPLEMENTED',
      evidence: 'DOCUMENTED',
      relatedPrograms: ['NSEM', 'Innovation Engine'],
    },
    {
      id: 'branches',
      name: 'Branches (Autonomous Research Programs)',
      layer: 'BRANCHES',
      purpose: 'Specialized deep-tech research tracks investigating fundamental problems.',
      maturity: 'IMPLEMENTED',
      evidence: 'VERIFIED',
      relatedPrograms: ['NALA', 'AMP', 'RTA-GUARD', 'COSMOS'],
    },
    {
      id: 'fruits',
      name: 'Fruits (Validated Technologies & Products)',
      layer: 'FRUITS',
      purpose:
        'Downstream applications and sovereign technologies derived from validated research.',
      maturity: 'PLANNED',
      evidence: 'DOCUMENTED',
      relatedPrograms: ['Validated Technologies', 'Products'],
    },
  ],
  relationships: [
    {
      source: 'roots',
      target: 'trunk',
      type: 'INFORMS',
      state: 'ESTABLISHED',
      evidenceRef: 'Nexus Constitution & KER',
      notes: 'Foundational axioms govern the rules of the Innovation Engine.',
    },
    {
      source: 'trunk',
      target: 'branches',
      type: 'DERIVED_FROM',
      state: 'ESTABLISHED',
      evidenceRef: 'NSEM Lifecycle',
      notes: 'Research programs operate as branches nurtured by the Innovation Engine.',
    },
    {
      source: 'nala',
      target: 'amp',
      type: 'INTEGRATES_WITH',
      state: 'ESTABLISHED',
      evidenceRef: 'NALA JIRA-004 / SESSION Layer',
      notes: 'NALA utilizes AMP Chiranjeevi & Dronagiri compression for memory durability.',
    },
    {
      source: 'nala',
      target: 'rta-guard',
      type: 'INTEGRATES_WITH',
      state: 'ESTABLISHED',
      evidenceRef: 'NALA SAFETY Layer Specification',
      notes: 'NALA embeds RTA-GUARD as its primary constitutional safety shield.',
    },
    {
      source: 'branches',
      target: 'fruits',
      type: 'INFORMS',
      state: 'PROPOSED',
      evidenceRef: 'Innovation Engine Fruit Doctrine',
      notes: 'Products and technologies are yielded downstream upon empirical validation.',
    },
  ],
  claims: [
    {
      id: 'claim-001',
      statement: 'Nexus LAB AI is a sovereign AI systems innovation company.',
      provenance: {
        sourceId: 'REDESIGN-MASTER',
        sourceType: 'Master Architecture Specification',
        authorityTier: 'TIER_1_CONSTITUTIONAL',
        sourceLocation: 'docs/04A.2_AUTHORITATIVE_NEXUS_INFORMATION.md',
        extractedAt: '2026-08-18',
      },
      temporalState: 'CURRENT',
      maturity: 'SPECIFIED',
      evidence: 'DOCUMENTED',
      publicRelevance: 'PRIMARY',
    },
    {
      id: 'claim-002',
      statement: 'NALA has successfully completed a 1-Hour Chaos Soak Test (JIRA-007).',
      provenance: {
        sourceId: 'NALA-VERIFICATION-RECORDS',
        sourceType: 'Live Execution Test Log',
        authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
        sourceLocation: 'JIRA-007 Execution Artifacts',
        extractedAt: '2026-08-18',
      },
      temporalState: 'CURRENT',
      maturity: 'IMPLEMENTED',
      evidence: 'VERIFIED',
      publicRelevance: 'PRIMARY',
      limitations: [
        'Verified for specific harness scenarios; continuous 30-day soak test remains in progress.',
      ],
    },
    {
      id: 'claim-003',
      statement: 'AMP Phase 1 Rust core is implemented and passing unit verification.',
      provenance: {
        sourceId: 'AMP-RUST-CODEBASE',
        sourceType: 'Rust Core Repository',
        authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
        sourceLocation: 'param_hash.rs, erasure.rs, spore.rs',
        extractedAt: '2026-08-18',
      },
      temporalState: 'CURRENT',
      maturity: 'IMPLEMENTED',
      evidence: 'VERIFIED',
      publicRelevance: 'PRIMARY',
      limitations: ['Broader 5-pillar ecosystem remains in active specification/research.'],
    },
    {
      id: 'claim-004',
      statement: 'RTA-GUARD contains 70,000+ LOC and 2,000+ tests across 18 phases as reported.',
      provenance: {
        sourceId: 'NEXUS-PORTFOLIO-MATRIX',
        sourceType: 'Portfolio Matrix',
        authorityTier: 'TIER_5_PORTFOLIO',
        sourceLocation: 'docs/NEXUS_LAB_AI_PROJECT_PORTFOLIO.md',
        extractedAt: '2026-08-18',
      },
      temporalState: 'CURRENT',
      maturity: 'IMPLEMENTED',
      evidence: 'REPORTED',
      publicRelevance: 'PRIMARY',
      limitations: ['Independent repository audit required before upgrading to VERIFIED evidence.'],
    },
  ],
};
