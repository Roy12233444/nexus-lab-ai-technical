/**
 * Nexus LAB AI — Canonical Programs Content Registry
 * Phase 04D.3 — Authoritative Ground Truth & Epistemic Separation
 *
 * Source Authority: docs/04D.2_AUTHORITATIVE_PROGRAMS_INFORMATION.md
 */

import { CanonicalProgramsRegistry, CanonicalProgram, ProgramClaim } from '@/types/programs';

export const CANONICAL_PROGRAMS_REGISTRY: CanonicalProgramsRegistry = {
  identity: {
    name: 'Nexus LAB AI Programs',
    positioning: 'Major Sovereign Systems Engineering Initiatives',
    declaration:
      'Sovereign research and engineering programs architected from first principles across autonomous execution, durable cognitive memory, real-time safety middleware, System-2 reasoning, and distributed space infrastructure.',
  },

  programs: {
    // ==========================================
    // Tier 1: Primary Sovereign Programs
    // ==========================================
    'PROG-NALA': {
      identity: {
        id: 'PROG-NALA',
        acronym: 'NALA',
        name: 'Nexus Autonomous Long-Running Agent',
        fullTitle: 'Nexus Autonomous Long-Running Agent Execution Harness',
        category: 'AUTONOMOUS_EXECUTION',
        tagline: 'Fault-tolerant, multi-layer execution harness for extended autonomous runs',
        problemStatement:
          'Extended-duration autonomous execution loops suffer from silent context corruption, tool crashes, infinite loops, and unrecoverable state loss.',
        coreMission:
          'Provide a hardened 4-layer execution harness capable of continuous, crash-resilient multi-hour task execution with ARIES state recovery.',
      },
      state: {
        maturity: 'IMPLEMENTED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_PRIMARY',
      },
      architecturalSubstrate: [
        'Decoupled 4-Layer Harness (BRAIN, HANDS, SESSION, SAFETY)',
        'ARIES 3-Phase Write-Ahead Logging (Analysis, Redo, Undo)',
        'Context Window Tracker & Dronagiri Hand-off Spores',
        'RunawayLoopGuard & Deterministic State Matrix Validator',
      ],
      claimIds: ['CLAIM-PROG-NALA-001', 'CLAIM-PROG-NALA-002'],
      boundaries: [
        'No claim of infinite unmonitored autonomy without human oversight.',
        'No claim of general problem-solving AGI.',
        'No claim of commercial SaaS packaging or service tier pricing.',
      ],
    },

    'PROG-AMP': {
      identity: {
        id: 'PROG-AMP',
        acronym: 'AMP',
        name: 'ANJANEYA Memory Protocol',
        fullTitle: 'ANJANEYA Durable Cognitive Persistence Protocol',
        category: 'COGNITIVE_MEMORY',
        tagline: 'Multi-timescale cognitive memory hierarchy with cryptographic state verification',
        problemStatement:
          'LLM context windows face catastrophic forgetting across restarts, linear token degradation, and unbounded retrieval latency in long-horizon interactions.',
        coreMission:
          'Architect an eternal multi-tier cognitive persistence protocol decoupling working session memory from crystallized episodic and semantic storage.',
      },
      state: {
        maturity: 'IMPLEMENTED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_PRIMARY',
      },
      architecturalSubstrate: [
        'Devotion Crystallization Engine (Theta = 0.85)',
        'Chiranjeevi Rust Persistence Substrate (param_hash, erasure, spore)',
        'Reed-Solomon (N, K) State Erasure Coding',
        'Sankat Mochan Distress-Triggered Memory Retrieval',
      ],
      claimIds: ['CLAIM-PROG-AMP-001', 'CLAIM-PROG-AMP-002'],
      boundaries: [
        'No claim that artificial memory is completely solved.',
        'No claim of zero-latency universal graph storage.',
        'No claim of commercial managed database product availability.',
      ],
    },

    'PROG-RTA-GUARD': {
      identity: {
        id: 'PROG-RTA-GUARD',
        acronym: 'RTA-GUARD',
        name: 'Real-Time Autonomous Guard Protocol',
        fullTitle: 'Pre-Execution Constitutional AI Safety Middleware',
        category: 'CONSTITUTIONAL_SAFETY',
        tagline: 'Low-latency pre-execution synchronous interception and policy validation',
        problemStatement:
          'Post-hoc output filters fail to stop unauthorized file mutations, argument tampering, and destructive API calls executed by autonomous tools.',
        coreMission:
          'Enforce deterministic constitutional safety invariants synchronously before external environment mutations occur.',
      },
      state: {
        maturity: 'IMPLEMENTED',
        evidence: 'REPORTED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_PRIMARY',
      },
      architecturalSubstrate: [
        'Synchronous Pre-Execution Action Interceptor Proxy',
        '13 Rigvedic Rta Constitutional Invariant Rules',
        'Cryptographic Token Verification Hashing',
        'Sub-1.2ms Policy Validation Engine',
      ],
      claimIds: ['CLAIM-PROG-RTA-001', 'CLAIM-PROG-RTA-002'],
      boundaries: [
        'No claim of 100% exploit-proof or infallible security.',
        'No claim of formal DPDP Act or MeiTY compliance certification until audited.',
        'REPORTED benchmark latency is strictly separated from third-party VERIFIED status.',
      ],
    },

    'PROG-COSMOS': {
      identity: {
        id: 'PROG-COSMOS',
        acronym: 'COSMOS',
        name: 'Cognitive Operating System for Multi-Orbital Systems',
        fullTitle: 'Multi-Orbital Delay-Tolerant Constellation Operating System',
        category: 'DISTRIBUTED_SPACE',
        tagline:
          'Decentralized autonomous operating system blueprint for deep-space and orbital nodes',
        problemStatement:
          'Satellite constellations face minutes-to-hours communication latency, frequent signal occultation, and single-point-of-failure risks under centralized ground control.',
        coreMission:
          'Design an autonomous, delay-tolerant constellation operating system supporting resilient orbital state consensus and decentralized payload management.',
      },
      state: {
        maturity: 'PLANNED',
        evidence: 'DOCUMENTED',
        temporal: 'FUTURE',
        publicState: 'PUBLIC_PRIMARY',
      },
      architecturalSubstrate: [
        'Delay-Tolerant Networking (DTN) Bundle Protocol',
        'Digital-Twin Terrestrial Simulation Framework',
        'Decentralized Epistemic Orbital State Consensus',
        'Autonomous Payload Compute & Power Scheduling',
      ],
      claimIds: ['CLAIM-PROG-COSMOS-001', 'CLAIM-PROG-COSMOS-002'],
      boundaries: [
        'No claim of active in-orbit satellite deployment or flight heritage.',
        'No claim of formal aerospace flight certification (DO-178C / NASA NPR 7150.2).',
        'Strictly presented as a forward-looking research architecture.',
      ],
    },

    // ==========================================
    // Tier 2: Supporting Systems Programs
    // ==========================================
    'PROG-CHAITANYA-SAPTACORE': {
      identity: {
        id: 'PROG-CHAITANYA-SAPTACORE',
        acronym: 'CHAITANYA / SAPTACORE',
        name: 'Sovereign Reasoning & Consensus Core',
        fullTitle: 'Sovereign Transformer Primitives & Epistemic Reasoning Council',
        category: 'REASONING_SYSTEMS',
        tagline: 'Custom neural transformer kernels and golden-ratio multi-agent consensus',
        problemStatement:
          'Autoregressive LLMs suffer from shallow System-1 hallucination under multi-step mathematical logic and single-agent reasoning collapse.',
        coreMission:
          'Build sovereign transformer primitives and deliberative multi-agent consensus solvers verifying convergence across complex reasoning steps.',
      },
      state: {
        maturity: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_SUPPORTING',
      },
      architecturalSubstrate: [
        'Custom PyTorch RoPE + RMSNorm + GQA Transformer Blocks',
        'DHI Anderson-Accelerated Fixed-Point Solver',
        '7-Agent ZeroMQ Epistemic Reasoning Council',
        'Golden-Ratio Consensus Voting Threshold (Tau = 0.618)',
      ],
      claimIds: ['CLAIM-PROG-CHAIN-001', 'CLAIM-PROG-SAPTA-001'],
      boundaries: [
        'No claim of a commercial foundation model competing at GPT-4 scale.',
        'Presented strictly as mathematical reasoning kernels and sovereign transformer primitives.',
      ],
    },

    'PROG-PHANTAKSHA': {
      identity: {
        id: 'PROG-PHANTAKSHA',
        acronym: 'PHANTAKSHA',
        name: 'Hardened Systems Relay',
        fullTitle: 'Hardened Rust Systems Relay & Terminal Infrastructure',
        category: 'HIGH_ASSURANCE_INFRA',
        tagline: 'High-assurance memory-safe Rust terminal bridge and process confinement',
        problemStatement:
          'Terminal communication hang-ups, memory safety breaches, and process leaks occur during autonomous agent tool execution on local systems.',
        coreMission:
          'Provide a high-reliability, sandboxed terminal relay verified against rigorous automated regression test suites.',
      },
      state: {
        maturity: 'IMPLEMENTED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_SUPPORTING',
      },
      architecturalSubstrate: [
        'Memory-Safe Rust Terminal Relay & PTY Bridge',
        'Sandboxed Filesystem & Cryptographic Process Confinement',
        'Pacemaker Heartbeat Monitor & Reconnect Daemon',
        'Automated 146-Itemized Unit Test Suite',
      ],
      claimIds: ['CLAIM-PROG-PHANT-001'],
      boundaries: [
        'No claim of DO-178C Level A formal aerospace certification without institutional audit.',
        'Presented as an infrastructure-grade systems relay.',
      ],
    },

    'PROG-RFA': {
      identity: {
        id: 'PROG-RFA',
        acronym: 'RFA',
        name: 'Resonant Field Architecture',
        fullTitle: 'Resonant Field Multi-Agent Coordination Architecture',
        category: 'REASONING_COORDINATION',
        tagline: 'Decentralized non-orchestrated multi-agent resonance and field coordination',
        problemStatement:
          'Centralized multi-agent orchestrators experience quadratic communication explosion and single-point-of-failure bottlenecks at scale.',
        coreMission:
          'Formulate continuous field-decay mathematics and standing-wave consensus for non-orchestrated decentralized agent coordination.',
      },
      state: {
        maturity: 'EXPERIMENTAL',
        evidence: 'REPORTED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_SUPPORTING',
      },
      architecturalSubstrate: [
        'Continuous Field Decay & Resonance Equations',
        'Standing-Wave Consensus Dynamics',
        'Polyphase Rotation Coordination',
        'Real-Embedding Model Stress-Testing Harness',
      ],
      claimIds: ['CLAIM-PROG-RFA-001'],
      boundaries: [
        'No claim of production deployment or general framework replacement.',
        'Presented strictly as an active mathematical research exploration.',
      ],
    },

    // ==========================================
    // Tier 3: Context-Bound Applied Program
    // ==========================================
    'PROG-GRAMVANI': {
      identity: {
        id: 'PROG-GRAMVANI',
        acronym: 'GRAMVANI',
        name: 'Voice-First Agricultural Systems Intelligence',
        fullTitle: 'Voice-First Agronomy Triage & Regional Dialect Synthesis',
        category: 'APPLIED_SYSTEMS',
        tagline: 'Voice-first multi-agent agronomy triage developed for Google Gen AI Academy APAC',
        problemStatement:
          'Rural agronomy communities face linguistic barriers and digital interface divides preventing access to real-time crop disease triage.',
        coreMission:
          'Demonstrate sovereign multi-agent and memory techniques in an applied regional-language voice intelligence system.',
      },
      state: {
        maturity: 'IMPLEMENTED',
        evidence: 'REPORTED',
        temporal: 'CURRENT',
        publicState: 'PUBLIC_WITH_CONTEXT',
      },
      architecturalSubstrate: [
        'Voice-First Multi-Agent Synthesis Pipeline',
        'Regional Language ASR & Translation Relays',
        'AMP-Backed Contextual Agricultural Memory',
        'Sankat Mochan Distress Detection Relays',
      ],
      claimIds: ['CLAIM-PROG-GRAM-001'],
      boundaries: [
        'No claim of a nationwide commercial agricultural SaaS product.',
        'Explicitly presented as an applied research build demonstrating sovereign agent techniques.',
      ],
    },

    // ==========================================
    // Tier 4: Internal Hold Candidates (Non-Public)
    // ==========================================
    'PROG-AGRIVERSE': {
      identity: {
        id: 'PROG-AGRIVERSE',
        acronym: 'AGRIVERSE',
        name: 'Agricultural Systems Domain Modeling',
        fullTitle: 'Agricultural Domain Modeling & Soil Intelligence Research',
        category: 'APPLIED_SYSTEMS',
        tagline: 'Phase 0 agricultural domain and soil intelligence research',
        problemStatement: 'Lack of structured domain modeling in agricultural AI.',
        coreMission: 'Develop a 10-milestone domain modeling framework for soil intelligence.',
      },
      state: {
        maturity: 'EXPERIMENTAL',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicState: 'INTERNAL_HOLD',
      },
      architecturalSubstrate: ['Phase 0 Domain Modeling Framework'],
      claimIds: [],
      boundaries: ['Internal research framework; blocked from public selectors.'],
    },

    'PROG-EMMA': {
      identity: {
        id: 'PROG-EMMA',
        acronym: 'EMMA',
        name: 'Enterprise Metacognitive Fleet',
        fullTitle: 'Historic Hackathon Metacognitive Agent Prototype',
        category: 'AUTONOMOUS_EXECUTION',
        tagline: 'Historic hackathon build for India Runs Hackathon',
        problemStatement: 'Evolutionary code generation under multi-agent constraints.',
        coreMission: 'Retrospective prototype demonstrating evolutionary agent mutants.',
      },
      state: {
        maturity: 'EXPERIMENTAL',
        evidence: 'REPORTED',
        temporal: 'RETROSPECTIVE',
        publicState: 'INTERNAL_HOLD',
      },
      architecturalSubstrate: ['Evolutionary Multi-Agent Code Generation Prototype'],
      claimIds: [],
      boundaries: ['Retrospective hackathon build; blocked from public selectors.'],
    },

    'PROG-DEADRECKONING': {
      identity: {
        id: 'PROG-DEADRECKONING',
        acronym: 'DeadReckoning',
        name: 'Startup Failure Prediction Model',
        fullTitle: 'Historic Hackathon Risk Modeling Prototype',
        category: 'APPLIED_SYSTEMS',
        tagline: 'Historic hackathon build for ContextCon',
        problemStatement: 'Predicting venture failure vectors.',
        coreMission: 'Retrospective prototype built using Crustdata APIs.',
      },
      state: {
        maturity: 'EXPERIMENTAL',
        evidence: 'REPORTED',
        temporal: 'RETROSPECTIVE',
        publicState: 'INTERNAL_HOLD',
      },
      architecturalSubstrate: ['ContextCon Hackathon Prototype'],
      claimIds: [],
      boundaries: ['Retrospective hackathon build; blocked from public selectors.'],
    },

    'PROG-AETHERION': {
      identity: {
        id: 'PROG-AETHERION',
        acronym: 'Aetherion-dLHC',
        name: 'Particle Physics AI Pipeline',
        fullTitle: 'Exploratory High-Energy Physics Prototype',
        category: 'APPLIED_SYSTEMS',
        tagline: 'Exploratory particle physics simulation pipeline',
        problemStatement: 'Polyglot architecture for high-energy physics analytics.',
        coreMission: 'Exploratory research build evaluating particle data pipelines.',
      },
      state: {
        maturity: 'EXPERIMENTAL',
        evidence: 'REPORTED',
        temporal: 'RETROSPECTIVE',
        publicState: 'INTERNAL_HOLD',
      },
      architecturalSubstrate: ['Polyglot Particle Physics Pipeline'],
      claimIds: [],
      boundaries: ['Exploratory research build; blocked from public selectors.'],
    },

    // ==========================================
    // Tier 5: Quarantined Candidates (Non-Public)
    // ==========================================
    'PROG-LYRA': {
      identity: {
        id: 'PROG-LYRA',
        acronym: 'Lyra',
        name: 'Rust Voice Agent Concept',
        fullTitle: 'Conceptual Voice Agent (NOT STARTED)',
        category: 'AUTONOMOUS_EXECUTION',
        tagline: 'Conceptual backlog idea',
        problemStatement: 'Unstarted conceptual idea.',
        coreMission: 'Backlog item explicitly marked as NOT STARTED.',
      },
      state: {
        maturity: 'NOT_STARTED',
        evidence: 'UNVERIFIED',
        temporal: 'DEFERRED',
        publicState: 'QUARANTINED',
      },
      architecturalSubstrate: [],
      claimIds: [],
      boundaries: ['Unstarted conceptual backlog; strictly firewalled.'],
    },

    'PROG-SHADOWTRACE': {
      identity: {
        id: 'PROG-SHADOWTRACE',
        acronym: 'ShadowTrace',
        name: 'Defensive Device Intelligence',
        fullTitle: 'Conceptual Device Intelligence (DEFERRED)',
        category: 'CONSTITUTIONAL_SAFETY',
        tagline: 'Deferred backlog item',
        problemStatement: 'Unstarted defensive intelligence concept.',
        coreMission: 'Backlog item deferred from active roadmap.',
      },
      state: {
        maturity: 'NOT_STARTED',
        evidence: 'UNVERIFIED',
        temporal: 'DEFERRED',
        publicState: 'QUARANTINED',
      },
      architecturalSubstrate: [],
      claimIds: [],
      boundaries: ['Deferred backlog item; strictly firewalled.'],
    },

    'PROG-SYNAPTICODE-SPEC': {
      identity: {
        id: 'PROG-SYNAPTICODE-SPEC',
        acronym: 'SynaptiCode Speculative',
        name: 'Speculative Architecture Lines',
        fullTitle: 'Conceptual/Speculative Lines (QUARANTINED)',
        category: 'REASONING_SYSTEMS',
        tagline: 'Speculative naming layer',
        problemStatement: 'Speculative concepts without engineering code.',
        coreMission: 'Historical naming layer without concrete code artifacts.',
      },
      state: {
        maturity: 'CONCEPTUAL',
        evidence: 'UNVERIFIED',
        temporal: 'DEFERRED',
        publicState: 'QUARANTINED',
      },
      architecturalSubstrate: [],
      claimIds: [],
      boundaries: ['Speculative naming layer; strictly firewalled.'],
    },
  },

  // ==========================================
  // Canonical Program Claims Register
  // ==========================================
  claims: {
    'CLAIM-PROG-NALA-001': {
      id: 'CLAIM-PROG-NALA-001',
      programId: 'PROG-NALA',
      statement:
        'NALA implements a decoupled 4-layer autonomous execution harness (BRAIN, HANDS, SESSION, SAFETY).',
      sourceDoc: 'docs/04B.2 §3.1 & docs/04C.2 §4.2',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Verified via unit and integration tests in NALA repository.',
    },
    'CLAIM-PROG-NALA-002': {
      id: 'CLAIM-PROG-NALA-002',
      programId: 'PROG-NALA',
      statement:
        'NALA passed a 1-hour continuous soak test under synthetic chaos fault injection without context corruption.',
      sourceDoc: 'JIRA-007 & JIRA-007-B',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary:
        'Verified by automated soak test heartbeat logs and failure recovery telemetry.',
    },
    'CLAIM-PROG-AMP-001': {
      id: 'CLAIM-PROG-AMP-001',
      programId: 'PROG-AMP',
      statement:
        'AMP implements a multi-tier memory hierarchy with Devotion Crystallization threshold Theta = 0.85.',
      sourceDoc: 'docs/04B.2 §3.2 & docs/04C.2 §4.3',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Specified in cognitive memory architectural designs.',
    },
    'CLAIM-PROG-AMP-002': {
      id: 'CLAIM-PROG-AMP-002',
      programId: 'PROG-AMP',
      statement:
        'Chiranjeevi Rust persistence substrate guarantees deterministic param hashing and Reed-Solomon state recovery.',
      sourceDoc: 'NEXUS_LAB_AI_PROJECT_PORTFOLIO.md §2.3',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Verified in Rust test suites (param_hash.rs, erasure.rs, spore.rs).',
    },
    'CLAIM-PROG-RTA-001': {
      id: 'CLAIM-PROG-RTA-001',
      programId: 'PROG-RTA-GUARD',
      statement:
        'RTA-GUARD intercepts tool execution requests synchronously before disk/network mutations occur.',
      sourceDoc: 'docs/04B.2 §3.3 & docs/04C.2 §4.5',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'REPORTED',
      verificationBoundary: 'Verified in proxy benchmark reports (sub-1.2ms latency).',
    },
    'CLAIM-PROG-RTA-002': {
      id: 'CLAIM-PROG-RTA-002',
      programId: 'PROG-RTA-GUARD',
      statement:
        'Rta policy validation engine evaluates 13 constitutional safety rules on tool arguments.',
      sourceDoc: 'docs/04C.2 §4.5',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Documented in policy invariant engine specifications.',
    },
    'CLAIM-PROG-COSMOS-001': {
      id: 'CLAIM-PROG-COSMOS-001',
      programId: 'PROG-COSMOS',
      statement:
        'COSMOS defines a delay-tolerant space OS blueprint for multi-orbital satellite constellations.',
      sourceDoc: 'docs/04B.2 §3.4 & docs/04C.2 §4.6',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Formally documented in terrestrial simulation blueprints.',
    },
    'CLAIM-PROG-COSMOS-002': {
      id: 'CLAIM-PROG-COSMOS-002',
      programId: 'PROG-COSMOS',
      statement:
        'COSMOS is a forward-looking research architecture with zero active in-orbit satellite flight deployments.',
      sourceDoc: 'Institutional Invariant Rule 04',
      authorityTier: 'TIER_1_CONSTITUTIONAL',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Bound by strict institutional truth boundary.',
    },
    'CLAIM-PROG-CHAIN-001': {
      id: 'CLAIM-PROG-CHAIN-001',
      programId: 'PROG-CHAITANYA-SAPTACORE',
      statement:
        'CHAITANYA constructs sovereign PyTorch transformer blocks with RoPE, RMSNorm, and GQA.',
      sourceDoc: 'docs/04C.2 §4.1',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Documented in transformer kernel component designs.',
    },
    'CLAIM-PROG-SAPTA-001': {
      id: 'CLAIM-PROG-SAPTA-001',
      programId: 'PROG-CHAITANYA-SAPTACORE',
      statement:
        'SAPTACORE implements a 7-agent ZeroMQ epistemic council with golden-ratio consensus threshold (Tau = 0.618).',
      sourceDoc: 'docs/04C.2 §4.1',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Documented in multi-agent consensus specifications.',
    },
    'CLAIM-PROG-PHANT-001': {
      id: 'CLAIM-PROG-PHANT-001',
      programId: 'PROG-PHANTAKSHA',
      statement:
        'PHANTAKSHA implements a hardened Rust systems terminal relay verified by 146 itemized unit tests.',
      sourceDoc: 'NEXUS_LAB_AI_PROJECT_PORTFOLIO.md §5',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Verified across 146 passing Rust tests in Phase 5 suite.',
    },
    'CLAIM-PROG-RFA-001': {
      id: 'CLAIM-PROG-RFA-001',
      programId: 'PROG-RFA',
      statement:
        'RFA formulates a non-orchestrated multi-agent coordination architecture verified in embedding simulations.',
      sourceDoc: 'NEXUS_LAB_AI_PROJECT_PORTFOLIO.md §8',
      authorityTier: 'TIER_2_ENGINEERING',
      evidenceLevel: 'REPORTED',
      verificationBoundary: 'Documented in simulation test runs and grounding stress-tests.',
    },
    'CLAIM-PROG-GRAM-001': {
      id: 'CLAIM-PROG-GRAM-001',
      programId: 'PROG-GRAMVANI',
      statement:
        'GRAMVANI demonstrated voice-first agricultural distress triage built for the Google Gen AI Academy APAC program.',
      sourceDoc: 'NEXUS_LAB_AI_PROJECT_PORTFOLIO.md §7.1',
      authorityTier: 'TIER_5_PORTFOLIO',
      evidenceLevel: 'REPORTED',
      verificationBoundary: 'Documented in Gen AI Academy submission artifacts.',
    },
  },

  // ==========================================
  // Quarantined Non-Claims Register (Firewall)
  // ==========================================
  quarantinedClaims: [
    {
      id: 'QC-PROG-001',
      programId: 'PROG-NALA',
      claim: 'NALA operates indefinitely without human intervention or failure modes.',
      quarantineReason: 'Theoretical unbacked hyperbole; violates epistemic safety boundary.',
      requiredVerification: 'Long-term empirical soak test over 1,000+ continuous hours.',
      publicAllowed: false,
    },
    {
      id: 'QC-PROG-002',
      programId: 'PROG-AMP',
      claim: 'AMP completely solves artificial memory and eliminates all retrieval loss.',
      quarantineReason: 'Unbacked absolute assertion; retrieval precision is bounded.',
      requiredVerification: 'Peer-reviewed academic benchmark on long-horizon memory tasks.',
      publicAllowed: false,
    },
    {
      id: 'QC-PROG-003',
      programId: 'PROG-RTA-GUARD',
      claim: 'RTA-GUARD provides 100% exploit prevention and certified impenetrable security.',
      quarantineReason: 'Absolute security claims are mathematically unverifiable.',
      requiredVerification: 'Third-party red-team penetration test and formal verification proof.',
      publicAllowed: false,
    },
    {
      id: 'QC-PROG-004',
      programId: 'PROG-COSMOS',
      claim: 'COSMOS is deployed on active orbital satellites or manages in-space constellations.',
      quarantineReason:
        'COSMOS is a forward-looking research architecture without flight hardware.',
      requiredVerification: 'In-orbit flight manifest and telemetry verification.',
      publicAllowed: false,
    },
    {
      id: 'QC-PROG-005',
      programId: 'PROG-LYRA',
      claim: 'Lyra is an active Rust voice agent in active development or deployment.',
      quarantineReason: 'Lyra is a backlog concept explicitly marked as NOT STARTED.',
      requiredVerification: 'Complete architectural implementation and test suite.',
      publicAllowed: false,
    },
    {
      id: 'QC-PROG-006',
      programId: 'PROG-NALA',
      claim: 'Nexus LAB AI programs are commercial SaaS products available for purchase.',
      quarantineReason:
        'Programs are research and engineering initiatives, not commercial products.',
      requiredVerification: 'N/A (Institutional Boundary).',
      publicAllowed: false,
    },
  ],
};

// ==========================================
// Semantic Public Selectors & Firewall
// ==========================================

export function getPublicPrimaryPrograms(): CanonicalProgram[] {
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.programs).filter(
    (program) => program.state.publicState === 'PUBLIC_PRIMARY'
  );
}

export function getPublicSupportingPrograms(): CanonicalProgram[] {
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.programs).filter(
    (program) => program.state.publicState === 'PUBLIC_SUPPORTING'
  );
}

export function getPublicContextPrograms(): CanonicalProgram[] {
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.programs).filter(
    (program) => program.state.publicState === 'PUBLIC_WITH_CONTEXT'
  );
}

export function getAllPublicPrograms(): CanonicalProgram[] {
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.programs).filter(
    (program) =>
      program.state.publicState === 'PUBLIC_PRIMARY' ||
      program.state.publicState === 'PUBLIC_SUPPORTING' ||
      program.state.publicState === 'PUBLIC_WITH_CONTEXT'
  );
}

export function getNonPublicPrograms(): CanonicalProgram[] {
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.programs).filter(
    (program) =>
      program.state.publicState === 'INTERNAL_HOLD' || program.state.publicState === 'QUARANTINED'
  );
}

export function getPublicProgramClaims(): ProgramClaim[] {
  const publicProgramIds = new Set(getAllPublicPrograms().map((p) => p.identity.id));
  return Object.values(CANONICAL_PROGRAMS_REGISTRY.claims).filter((claim) =>
    publicProgramIds.has(claim.programId)
  );
}
