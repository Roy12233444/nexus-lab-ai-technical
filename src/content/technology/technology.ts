/**
 * Nexus LAB AI — Canonical Technology Content Registry
 * Phase 04C.3 — Authoritative Ground Truth & Epistemic Separation
 *
 * Source Authority: docs/04C.2_AUTHORITATIVE_TECHNOLOGY_INFORMATION.md
 */

import {
  CanonicalTechnologyRegistry,
  TechnologyDomain,
  TechnologyCapability,
  TechnologySubstrate,
  TechnologyClaim,
} from '@/types/technology';

export const CANONICAL_TECHNOLOGY_REGISTRY: CanonicalTechnologyRegistry = {
  identity: {
    name: 'Nexus LAB AI',
    positioning: 'AI Systems Innovation Company',
    declaration:
      'Engineering sovereign, first-principles architectures across autonomous execution, durable cognitive memory, real-time safety middleware, System-2 reasoning, and distributed space infrastructure.',
  },

  domains: {
    reasoning: {
      id: 'reasoning',
      name: 'System-2 Reasoning & Sovereign Models',
      tagline: 'Deliberative consensus and non-autoregressive convergence kernels',
      description:
        'Eliminates reliance on black-box prompt wrappers by constructing sovereign first-principles transformer components and deliberative multi-agent consensus reasoning engines.',
      coreChallenges: [
        'Shallow System-1 autoregressive hallucination under complex logic',
        'Black-box prompt wrapper dependency and lack of architectural sovereignty',
        'Fragile single-agent reasoning paths in high-consequence decisions',
      ],
      capabilityIds: [
        'sovereign_transformer_primitives',
        'system2_fixed_point_solver',
        'epistemic_multi_agent_consensus',
      ],
    },

    agent_execution: {
      id: 'agent_execution',
      name: 'Autonomous Agent Execution & Orchestration',
      tagline: 'Resilient multi-layer harnesses for extended autonomous execution',
      description:
        'Solves process crashes, state collapse, and unconstrained looping during multi-step, extended-duration autonomous agent execution through decoupled execution layers.',
      coreChallenges: [
        'Silent failure and context corruption in long-running agent loops',
        'Tight coupling between deliberative planning and low-level tool I/O',
        'Suboptimal compute allocation across variable task complexity tiers',
      ],
      capabilityIds: [
        'decoupled_4layer_harness',
        'multitimescale_orchestration',
        'cost_aware_model_routing',
      ],
    },

    memory: {
      id: 'memory',
      name: 'Durable Memory & Cognitive Persistence',
      tagline: 'Multi-tier state persistence and cryptographic parameter hashing',
      description:
        'Eliminates session amnesia, identity drift, context buffer exhaustion, and catastrophic forgetting across long-horizon intelligent systems.',
      coreChallenges: [
        'Context window amnesia and loss of episodic lineage across restarts',
        'Semantic drift and state divergence in persistent memory stores',
        'High latency overhead in unbounded vector recall and state synchronization',
      ],
      capabilityIds: [
        'multitier_cognitive_memory',
        'chiranjeevi_persistence_core',
        'temporal_quarantine_consolidation',
      ],
    },

    fault_tolerance: {
      id: 'fault_tolerance',
      name: 'Fault-Tolerant Execution & Sandboxing',
      tagline: 'ARIES-style transactional recovery and process isolation',
      description:
        'Ensures autonomous systems survive unexpected process termination, hardware faults, and non-deterministic environmental side effects without state loss.',
      coreChallenges: [
        'Process crashes causing unrecoverable mid-task state corruption',
        'Unconstrained runaway execution loops mutating external state',
        'Unsafe filesystem and network side effects from untrusted tool calls',
      ],
      capabilityIds: [
        'aries_transactional_recovery',
        'state_matrix_validation',
        'isolated_execution_sandboxing',
      ],
    },

    safety_governance: {
      id: 'safety_governance',
      name: 'Constitutional AI Safety & Governance',
      tagline: 'Pre-execution synchronous action interception and immutable audit trails',
      description:
        'Prevents unauthorized API actions, unsafe parameter mutations, privilege escalation, and divergence from constitutional safety invariants during autonomous execution.',
      coreChallenges: [
        'Post-hoc safety filters failing to block in-flight harmful tool dispatches',
        'Lack of immutable, tamper-evident audit logging for forensic verification',
        'Undefined constitutional invariants during dynamic tool invocation',
      ],
      capabilityIds: [
        'preexecution_action_interception',
        'constitutional_policy_engine',
        'aries_tamper_evident_logging',
      ],
    },

    distributed_space: {
      id: 'distributed_space',
      name: 'Distributed Systems & Space Infrastructure',
      tagline: 'Delay-Tolerant Networking and aerospace-targeted systems relays',
      description:
        'Enables autonomous computation, mesh coordination, and delay-tolerant routing across extreme communication latency, high radiation, and intermittent terrestrial links.',
      coreChallenges: [
        'Multi-minute signal delays breaking synchronous client-server paradigms',
        'Total loss of ground connectivity during orbital occultation',
        'High cosmic radiation causing single-event bit upsets in unhardened runtimes',
      ],
      capabilityIds: [
        'delay_tolerant_networking',
        'orbital_digital_twin_simulation',
        'aerospace_targeted_systems_relays',
      ],
    },
  },

  capabilities: {
    sovereign_transformer_primitives: {
      id: 'sovereign_transformer_primitives',
      domainId: 'reasoning',
      name: 'Sovereign Transformer Primitives',
      description:
        'Custom implementations of RoPE, RMSNorm, Grouped-Query Attention (GQA), Flash Attention 2, and SwiGLU with Mixture-of-Experts (MoE).',
      technologyIds: ['chaitanya_transformer_core'],
      projectIds: ['chaitanya'],
    },
    system2_fixed_point_solver: {
      id: 'system2_fixed_point_solver',
      domainId: 'reasoning',
      name: 'System-2 Fixed-Point Solver',
      description:
        'Anderson-Accelerated Fixed-Point Solver for iterative mathematical optimization and non-autoregressive deliberative convergence.',
      technologyIds: ['dhi_reasoning_engine'],
      projectIds: ['chaitanya'],
    },
    epistemic_multi_agent_consensus: {
      id: 'epistemic_multi_agent_consensus',
      domainId: 'reasoning',
      name: 'Epistemic Multi-Agent Consensus',
      description:
        '7-agent deliberative council communicating over ZeroMQ DEALER/ROUTER sockets with golden-ratio voting threshold (τ = 0.618).',
      technologyIds: ['saptacore_consensus_engine'],
      projectIds: ['saptacore'],
    },

    decoupled_4layer_harness: {
      id: 'decoupled_4layer_harness',
      domainId: 'agent_execution',
      name: 'Decoupled 4-Layer Harness',
      description:
        'Decoupled execution hierarchy separating BRAIN deliberative planning, HANDS tool execution, SESSION state tracking, and SAFETY policy enforcement.',
      technologyIds: ['nala_execution_harness'],
      projectIds: ['nala'],
    },
    multitimescale_orchestration: {
      id: 'multitimescale_orchestration',
      domainId: 'agent_execution',
      name: 'Multi-Timescale Orchestration',
      description:
        'Separation of high-frequency reactive loops from low-frequency deliberative planning cycles.',
      technologyIds: ['nala_execution_harness'],
      projectIds: ['nala'],
    },
    cost_aware_model_routing: {
      id: 'cost_aware_model_routing',
      domainId: 'agent_execution',
      name: 'Cost-Aware Model Routing',
      description:
        'Dynamic dispatch heuristics routing sub-tasks to optimal model tiers based on complexity, latency, and budget constraints.',
      technologyIds: ['nala_execution_harness'],
      projectIds: ['nala'],
    },

    multitier_cognitive_memory: {
      id: 'multitier_cognitive_memory',
      domainId: 'memory',
      name: 'Multi-Tier Cognitive Memory',
      description:
        'Decoupled memory hierarchy managing working context, episodic event logs, semantic knowledge graphs, and immutable identity anchors.',
      technologyIds: ['amp_memory_protocol'],
      projectIds: ['amp'],
    },
    chiranjeevi_persistence_core: {
      id: 'chiranjeevi_persistence_core',
      domainId: 'memory',
      name: 'Chiranjeevi Persistence Core',
      description:
        'Cryptographic parameter hashing, state erasure coding, and crash-resilient NVMe storage substrate implemented in Rust.',
      technologyIds: ['amp_chiranjeevi_rust_core'],
      projectIds: ['amp'],
    },
    temporal_quarantine_consolidation: {
      id: 'temporal_quarantine_consolidation',
      domainId: 'memory',
      name: 'Temporal Quarantine & Consolidation',
      description:
        'Staged memory ingestion pipeline filtering noisy tokens through semantic distance guards before background crystallization.',
      technologyIds: ['amp_memory_protocol'],
      projectIds: ['amp'],
    },

    aries_transactional_recovery: {
      id: 'aries_transactional_recovery',
      domainId: 'fault_tolerance',
      name: 'ARIES-Style Transactional Recovery',
      description:
        'Three-phase recovery engine (Analysis, Redo, Undo) guaranteeing transactional restoration of agent state graphs following process failure.',
      technologyIds: ['aries_recovery_substrate'],
      projectIds: ['nala'],
    },
    state_matrix_validation: {
      id: 'state_matrix_validation',
      domainId: 'fault_tolerance',
      name: 'State Matrix Validation & Lock Resolution',
      description:
        'Automated lock clearing, runaway loop detection (RunawayLoopGuard), and heartbeat monitors to prevent deadlock.',
      technologyIds: ['aries_recovery_substrate'],
      projectIds: ['nala'],
    },
    isolated_execution_sandboxing: {
      id: 'isolated_execution_sandboxing',
      domainId: 'fault_tolerance',
      name: 'Isolated Execution Sandboxing',
      description:
        'Strict environmental confinement preventing uncontrolled filesystem, network, or OS mutations during tool execution.',
      technologyIds: ['process_sandbox_substrate'],
      projectIds: ['nala'],
    },

    preexecution_action_interception: {
      id: 'preexecution_action_interception',
      domainId: 'safety_governance',
      name: 'Pre-Execution Synchronous Action Interception',
      description:
        'Low-latency synchronous proxy evaluating proposed tool actions and parameters against invariant policy rules prior to dispatch.',
      technologyIds: ['rta_guard_interceptor'],
      projectIds: ['rta-guard'],
    },
    constitutional_policy_engine: {
      id: 'constitutional_policy_engine',
      domainId: 'safety_governance',
      name: 'Constitutional Policy Engine (Ṛta Layer)',
      description:
        'Deterministic rule-based policy verification enforcing 13 immutable constitutional invariants across all agent actions.',
      technologyIds: ['rta_guard_interceptor', 'rta_validator_engine'],
      projectIds: ['rta-guard'],
    },
    aries_tamper_evident_logging: {
      id: 'aries_tamper_evident_logging',
      domainId: 'safety_governance',
      name: 'ARIES Tamper-Evident Audit Logging',
      description:
        'Cryptographically verifiable append-only event recording generating immutable audit trails for post-incident forensic review.',
      technologyIds: ['rta_guard_interceptor'],
      projectIds: ['rta-guard'],
    },

    delay_tolerant_networking: {
      id: 'delay_tolerant_networking',
      domainId: 'distributed_space',
      name: 'Delay-Tolerant Networking (DTN)',
      description:
        'Store-and-forward bundle protocols bridging multi-minute communication blackouts across LEO, MEO, GEO, and Lunar trajectories.',
      technologyIds: ['cosmos_space_os_blueprint'],
      projectIds: ['cosmos'],
    },
    orbital_digital_twin_simulation: {
      id: 'orbital_digital_twin_simulation',
      domainId: 'distributed_space',
      name: 'Orbital Digital Twin Simulation',
      description:
        'Terrestrial simulation harness modeling celestial perturbations, occultation eclipses, and inter-satellite link geometries.',
      technologyIds: ['cosmos_space_os_blueprint'],
      projectIds: ['cosmos'],
    },
    aerospace_targeted_systems_relays: {
      id: 'aerospace_targeted_systems_relays',
      domainId: 'distributed_space',
      name: 'Aerospace-Targeted Systems Relays',
      description:
        'Hardened Rust terminal relays designed against DO-178C Level A and NASA NPR 7150.2C software reliability standards.',
      technologyIds: ['phantaksha_rust_relay'],
      projectIds: ['phantaksha'],
    },
  },

  substrates: {
    chaitanya_transformer_core: {
      id: 'chaitanya_transformer_core',
      domainId: 'reasoning',
      name: 'CHAITANYA Sovereign Transformer Blocks',
      category: 'NEXUS_INVENTION',
      description:
        'PyTorch implementations of custom attention and FFN blocks with Flash Attention 2 and SwiGLU MoE.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-010'],
    },
    dhi_reasoning_engine: {
      id: 'dhi_reasoning_engine',
      domainId: 'reasoning',
      name: 'DHI Anderson-Accelerated Fixed-Point Solver',
      category: 'NEXUS_INVENTION',
      description:
        'System-2 mathematical solver for iterative fixed-point non-autoregressive convergence.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-011'],
    },
    saptacore_consensus_engine: {
      id: 'saptacore_consensus_engine',
      domainId: 'reasoning',
      name: 'SAPTACORE 7-Agent ZeroMQ Consensus Engine',
      category: 'NEXUS_INVENTION',
      description:
        'Multi-agent epistemic council communicating over ZeroMQ sockets with golden-ratio voting threshold.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-005'],
    },

    nala_execution_harness: {
      id: 'nala_execution_harness',
      domainId: 'agent_execution',
      name: 'NALA 4-Layer Autonomous Execution Harness',
      category: 'NEXUS_INVENTION',
      description:
        'Decoupled agent harness with multi-timescale loops, cost-aware router, and tool execution isolation.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-001', 'TECH-002'],
    },

    amp_memory_protocol: {
      id: 'amp_memory_protocol',
      domainId: 'memory',
      name: 'AMP Multi-Tier Cognitive Memory Protocol',
      category: 'NEXUS_INVENTION',
      description:
        'Decoupled 5-pillar cognitive persistence protocol for working, episodic, and semantic memory state.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-004'],
    },
    amp_chiranjeevi_rust_core: {
      id: 'amp_chiranjeevi_rust_core',
      domainId: 'memory',
      name: 'AMP Chiranjeevi Rust Persistence Substrate',
      category: 'NEXUS_INVENTION',
      description:
        'Rust persistence engine with cryptographic parameter hashing, erasure coding, and NVMe drivers.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-003'],
    },

    aries_recovery_substrate: {
      id: 'aries_recovery_substrate',
      domainId: 'fault_tolerance',
      name: 'ARIES Transactional Crash Recovery Substrate',
      category: 'NEXUS_INVENTION',
      description:
        'WAL-backed 3-phase recovery engine with state matrix validation and runaway loop detection.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-002', 'TECH-012'],
    },
    process_sandbox_substrate: {
      id: 'process_sandbox_substrate',
      domainId: 'fault_tolerance',
      name: 'Process Isolation & Execution Sandboxing',
      category: 'NEXUS_INVENTION',
      description:
        'Strict runtime confinement preventing unauthorized disk, network, or environment access.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-001'],
    },

    rta_guard_interceptor: {
      id: 'rta_guard_interceptor',
      domainId: 'safety_governance',
      name: 'RTA-GUARD Pre-Execution Action Interceptor',
      category: 'NEXUS_INVENTION',
      description:
        'Low-latency synchronous proxy intercepting tool dispatches with constitutional invariant validation.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'REPORTED',
        temporal: 'CURRENT',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-006', 'TECH-007'],
    },
    rta_validator_engine: {
      id: 'rta_validator_engine',
      domainId: 'safety_governance',
      name: 'Ṛta Constitutional Policy Validation Engine',
      category: 'NEXUS_INVENTION',
      description:
        '13-rule invariant checker enforcing strict constitutional safety rules on tool arguments.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-006'],
    },

    cosmos_space_os_blueprint: {
      id: 'cosmos_space_os_blueprint',
      domainId: 'distributed_space',
      name: 'COSMOS Multi-Orbital Operating System Blueprint',
      category: 'NEXUS_INVENTION',
      description:
        'Delay-Tolerant space OS architecture and digital-twin terrestrial simulation framework.',
      state: {
        maturity: 'PLANNED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'FUTURE',
        publicRelevance: 'PRIMARY',
      },
      claimIds: ['TECH-015'],
    },
    phantaksha_rust_relay: {
      id: 'phantaksha_rust_relay',
      domainId: 'distributed_space',
      name: 'PHANTAKSHA Hardened Rust Terminal Relay',
      category: 'NEXUS_INVENTION',
      description:
        'High-reliability systems relay with 146 itemized unit tests designed against aerospace targets.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'VERIFIED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-008', 'TECH-009'],
    },

    supporting_rust_python_stack: {
      id: 'supporting_rust_python_stack',
      domainId: 'agent_execution',
      name: 'Supporting Systems & Infrastructure Stack',
      category: 'SUPPORTING_STACK',
      description:
        'Open-source systems foundation: Rust for safety-critical cores, Python for agent harnesses, TypeScript for UI, ZeroMQ for IPC.',
      state: {
        maturity: 'IMPLEMENTED',
        specification: 'SPECIFIED',
        evidence: 'DOCUMENTED',
        temporal: 'CURRENT',
        publicRelevance: 'SUPPORTING',
      },
      claimIds: ['TECH-018'],
    },
  },

  projects: {
    nala: {
      id: 'nala',
      name: 'Nexus Autonomous Long-Running Agent',
      acronym: 'NALA',
      role: 'Long-running autonomous agent execution harness',
      domainId: 'agent_execution',
      relationship: 'REPRESENTATIVE',
    },
    amp: {
      id: 'amp',
      name: 'ANJANEYA Memory Protocol',
      acronym: 'AMP',
      role: 'Durable multi-tier cognitive persistence protocol',
      domainId: 'memory',
      relationship: 'REPRESENTATIVE',
    },
    'rta-guard': {
      id: 'rta-guard',
      name: 'Real-Time Autonomous Guard Protocol',
      acronym: 'RTA-GUARD',
      role: 'Pre-execution constitutional AI safety middleware',
      domainId: 'safety_governance',
      relationship: 'REPRESENTATIVE',
    },
    cosmos: {
      id: 'cosmos',
      name: 'Cognitive Operating System for Multi-Orbital Systems',
      acronym: 'COSMOS',
      role: 'Multi-orbital constellation autonomous operating system',
      domainId: 'distributed_space',
      relationship: 'REPRESENTATIVE',
    },
    chaitanya: {
      id: 'chaitanya',
      name: 'Chaitanya Sovereign Model Core',
      acronym: 'CHAITANYA',
      role: 'First-principles transformer primitives & System-2 solver',
      domainId: 'reasoning',
      relationship: 'SUPPORTING',
    },
    saptacore: {
      id: 'saptacore',
      name: 'Saptacore Multi-Agent Consensus Council',
      acronym: 'SAPTACORE',
      role: '7-agent epistemic consensus reasoning engine',
      domainId: 'reasoning',
      relationship: 'SUPPORTING',
    },
    phantaksha: {
      id: 'phantaksha',
      name: 'Phantaksha Hardened Rust Relay',
      acronym: 'PHANTAKSHA',
      role: 'Aerospace-targeted systems terminal relay',
      domainId: 'distributed_space',
      relationship: 'SUPPORTING',
    },
  },

  claims: {
    'TECH-001': {
      id: 'TECH-001',
      technologyId: 'nala_execution_harness',
      statement: '4-layer autonomous agent harness with multi-timescale loops and tool isolation.',
      sourceDoc: 'NALA Architecture Spec v1',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Core harness implemented; multi-day soak testing ongoing.',
    },
    'TECH-002': {
      id: 'TECH-002',
      technologyId: 'aries_recovery_substrate',
      statement:
        '100% recovery of state checkpoints across 1-hour chaos injection soak test (JIRA-007).',
      sourceDoc: 'JIRA-007 Soak Log',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Validated within 60-minute synthetic chaos injection window.',
    },
    'TECH-003': {
      id: 'TECH-003',
      technologyId: 'amp_chiranjeevi_rust_core',
      statement:
        'Cryptographic parameter hashing, erasure coding, and NVMe state persistence implemented in Rust.',
      sourceDoc: 'Phase 1 Rust Repos',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: 'Passing test suites in Rust codebase substrate.',
    },
    'TECH-004': {
      id: 'TECH-004',
      technologyId: 'amp_memory_protocol',
      statement:
        'Multi-tier cognitive persistence managing episodic, semantic, working, and identity storage.',
      sourceDoc: 'AMP Whitepaper v1',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Architecture specified; cognitive scale testing ongoing.',
    },
    'TECH-005': {
      id: 'TECH-005',
      technologyId: 'saptacore_consensus_engine',
      statement:
        '7-agent epistemic council communicating over ZeroMQ DEALER/ROUTER with golden-ratio voting (τ = 0.618).',
      sourceDoc: 'SAPTACORE Spec v1',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Implemented in NALA BRAIN deliberative planning layer.',
    },
    'TECH-006': {
      id: 'TECH-006',
      technologyId: 'rta_guard_interceptor',
      statement:
        'Pre-execution synchronous action interception and 13-rule constitutional invariant verification.',
      sourceDoc: 'RTA-GUARD Spec',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Middleware interception architecture documented.',
    },
    'TECH-007': {
      id: 'TECH-007',
      technologyId: 'rta_guard_interceptor',
      statement: 'Reported 70,000+ lines of code and 2,000+ automated test suite.',
      sourceDoc: 'Portfolio Summary',
      authorityTier: 'TIER_5_PORTFOLIO',
      evidenceLevel: 'REPORTED',
      verificationBoundary: 'Unaudited reported figure; quarantined from verified claims.',
    },
    'TECH-008': {
      id: 'TECH-008',
      technologyId: 'phantaksha_rust_relay',
      statement:
        'Rust terminal relay with 146 itemized unit and integration tests across 5 test suites.',
      sourceDoc: 'PHANTAKSHA Test Logs',
      authorityTier: 'TIER_3_VERIFIED_EVIDENCE',
      evidenceLevel: 'VERIFIED',
      verificationBoundary: '146 tests verified across 5 test suites.',
    },
    'TECH-009': {
      id: 'TECH-009',
      technologyId: 'phantaksha_rust_relay',
      statement:
        'Designed toward DO-178C Level A and NASA NPR 7150.2C software reliability targets.',
      sourceDoc: 'PHANTAKSHA Architecture',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Design targets only; not held formal regulatory certifications.',
    },
    'TECH-010': {
      id: 'TECH-010',
      technologyId: 'chaitanya_transformer_core',
      statement:
        'Sovereign transformer components (RoPE, GQA, Flash Attention 2, SwiGLU with MoE).',
      sourceDoc: 'CHAITANYA Codebase',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Component-level implementations documented.',
    },
    'TECH-011': {
      id: 'TECH-011',
      technologyId: 'dhi_reasoning_engine',
      statement:
        'Anderson-Accelerated Fixed-Point Solver for iterative System-2 deliberative convergence.',
      sourceDoc: 'dhi_engine.py',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Component-level implementation documented.',
    },
    'TECH-012': {
      id: 'TECH-012',
      technologyId: 'aries_recovery_substrate',
      statement:
        '3-Phase recovery (Analysis, Redo, Undo) with StateMatrixValidator and LockResolver.',
      sourceDoc: 'NALA JIRA-005 Spec',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Integrated into NALA runtime recovery module.',
    },
    'TECH-013': {
      id: 'TECH-013',
      technologyId: 'supporting_rust_python_stack',
      statement:
        'Voice-first AgriAI combining Gemini 1.5 Flash, Sarvam AI, and Firebase for APAC deployment.',
      sourceDoc: 'GRAMVANI Project Doc',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Built for Google Gen AI Academy APAC.',
    },
    'TECH-014': {
      id: 'TECH-014',
      technologyId: 'saptacore_consensus_engine',
      statement:
        'Non-orchestrated field-based multi-agent coordination evaluated in embedding simulations.',
      sourceDoc: 'RFA Research Whitepaper',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Mathematical specification and embedding simulation.',
    },
    'TECH-015': {
      id: 'TECH-015',
      technologyId: 'cosmos_space_os_blueprint',
      statement:
        'Delay-Tolerant Networking and multi-orbital constellation autonomous operating system blueprint.',
      sourceDoc: 'COSMOS Structure Plan',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Terrestrial architectural research blueprint; zero flight heritage.',
    },
    'TECH-016': {
      id: 'TECH-016',
      technologyId: 'cosmos_space_os_blueprint',
      statement: 'Physical in-orbit satellite flight operation.',
      sourceDoc: 'N/A',
      authorityTier: 'TIER_7_UNVERIFIED',
      evidenceLevel: 'UNKNOWN',
      verificationBoundary: 'Zero in-orbit flight heritage; strictly terrestrial research.',
    },
    'TECH-017': {
      id: 'TECH-017',
      technologyId: 'supporting_rust_python_stack',
      statement: 'Obsidian markdown vault and 17-section Nexus Constitution v2.0.',
      sourceDoc: 'Second Brain Archive',
      authorityTier: 'TIER_1_CONSTITUTIONAL',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Internal knowledge management system.',
    },
    'TECH-018': {
      id: 'TECH-018',
      technologyId: 'supporting_rust_python_stack',
      statement:
        'Supporting infrastructure: Python 3.11+, Rust Core, TypeScript/React, ZeroMQ, Docker, PostgreSQL.',
      sourceDoc: 'System Dependencies',
      authorityTier: 'TIER_4_CURRENT_SPEC',
      evidenceLevel: 'DOCUMENTED',
      verificationBoundary: 'Supporting engineering dependencies.',
    },
  },

  quarantinedClaims: [
    {
      id: 'QC-TECH-001',
      claim: 'RTA-GUARD provides 100% exploit prevention and zero-latency interception.',
      quarantineReason:
        'Absolute security is mathematically unverified; interception introduces measurable latency.',
      requiredVerification:
        'Formal verification proofs under defined threat model and latency benchmarks.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-002',
      claim: 'RTA-GUARD features quantum-resistant cryptography.',
      quarantineReason: 'Specific post-quantum lattice algorithms are not audited.',
      requiredVerification: 'Cryptographic specification and formal implementation audit.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-003',
      claim: 'PHANTAKSHA holds aerospace certifications (DO-178C / NASA NPR 7150.2C).',
      quarantineReason: 'Standards are engineering design targets, not formal certifications held.',
      requiredVerification:
        'FAA / NASA compliance certification audit records from accredited authorities.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-004',
      claim: 'NALA runs indefinitely without human intervention.',
      quarantineReason: 'Empirically verified soak window is bounded to 1 hour (JIRA-007).',
      requiredVerification: 'Continuous multi-day/multi-month hardware soak telemetry.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-005',
      claim:
        'AMP completely solves artificial memory and semantic forgetting across all foundation models.',
      quarantineReason:
        'Phase 1 proves low-level persistence; semantic scale retrieval remains in research.',
      requiredVerification: 'Empirical benchmark results across multi-turn long-horizon suites.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-006',
      claim: 'COSMOS is deployed on active orbital satellites or manages NALA/AMP in space.',
      quarantineReason: 'COSMOS is a forward-looking terrestrial research architecture.',
      requiredVerification: 'In-orbit flight telemetry and payload manifest verification.',
      publicAllowed: false,
    },
    {
      id: 'QC-TECH-007',
      claim: 'Nexus LAB AI is a commercial SaaS wrapper company.',
      quarantineReason: 'Direct violation of Institutional Constitution Rule 01.',
      requiredVerification: 'N/A (Institutional Boundary).',
      publicAllowed: false,
    },
  ],
};

// ==========================================
// Semantic Public Selectors & Firewall
// ==========================================

export function getPublicTechnologyDomains(): TechnologyDomain[] {
  return Object.values(CANONICAL_TECHNOLOGY_REGISTRY.domains);
}

export function getPublicTechnologyCapabilities(): TechnologyCapability[] {
  return Object.values(CANONICAL_TECHNOLOGY_REGISTRY.capabilities);
}

export function getPublicTechnologySubstrates(): TechnologySubstrate[] {
  return Object.values(CANONICAL_TECHNOLOGY_REGISTRY.substrates).filter(
    (substrate) =>
      substrate.state.publicRelevance === 'PRIMARY' ||
      substrate.state.publicRelevance === 'SUPPORTING' ||
      substrate.state.publicRelevance === 'CONDITIONAL'
  );
}

export function getPublicTechnologyClaims(): TechnologyClaim[] {
  const publicSubstrateIds = new Set(getPublicTechnologySubstrates().map((s) => s.id));
  return Object.values(CANONICAL_TECHNOLOGY_REGISTRY.claims).filter(
    (claim) => publicSubstrateIds.has(claim.technologyId) && claim.id !== 'TECH-016' // TECH-016 is flight deployment (EXCLUDED)
  );
}
