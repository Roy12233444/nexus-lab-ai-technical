/**
 * Nexus LAB AI — Canonical Challenge Information Register
 * Phase 04G.2 — Machine-Enforceable Problem Frontier Content
 */

import {
  ChallengeContentModel,
  ChallengeId,
  ChallengeRecord,
  ChallengeEvidenceLevel,
  PressureDimension,
  PressureDimensionDefinition,
  ChallengeCrossTrackMapping,
  QuarantinedChallengeClaim,
} from '../../types/challenge';

export const CANONICAL_CHALLENGE_CONTENT: ChallengeContentModel = {
  version: '1.0.0-PROD-CHALLENGE',
  lastUpdated: '2026-08-22',

  thesis: {
    statement:
      'As autonomous intelligence evolves from stateless model inference toward persistent, distributed, resource-constrained execution, the fundamental engineering challenge shifts from generating intelligent outputs to maintaining verifiable behavioral coherence, state continuity, epistemic truth, and safe self-recovery across time, uncertainty, cascading failure, and non-stationary environments.',
    derivationSteps: [
      {
        step: '01 Ephemeral to Persistent Transition',
        description:
          'Conversational inference runs in stateless bursts; autonomous agency executes continuous, multi-step state mutations over indefinite time horizons.',
      },
      {
        step: '02 Cascading Error Amplification',
        description:
          'In persistent execution loops, minor statistical hallucinations or tool execution faults compound non-linearly into catastrophic system failure.',
      },
      {
        step: '03 Resource & Environmental Friction',
        description:
          'Real-world physical and edge deployments impose hard bounds on memory, compute, thermal limits, and network connectivity while the environment undergoes continuous distribution drift.',
      },
      {
        step: '04 Epistemic & Governance Necessity',
        description:
          'Without formal epistemic grounding, mathematical confidence calibration, and non-repudiable audit logs, autonomous action graphs cannot be verified or safely deployed in mission-critical environments.',
      },
    ],
  },

  pressureDimensions: {
    TIME: {
      dimension: 'TIME',
      title: 'Time & Temporal Persistence',
      coreQuestion:
        'How does an autonomous system preserve coherent identity, state, objectives, and reasoning across long-running execution?',
      description:
        'Governs the survival of execution context, memory consolidation, objective fidelity, and continuous state across prolonged autonomous operating lifecycles.',
      governingChallenges: ['CH-001', 'CH-002', 'CH-008'],
    },
    UNCERTAINTY: {
      dimension: 'UNCERTAINTY',
      title: 'Epistemic Uncertainty & Grounding',
      coreQuestion:
        'How does an autonomous system distinguish verified knowledge, inference, assumption, uncertainty, and error?',
      description:
        'Addresses statistical miscalibration, hallucination propagation, evidence provenance tracking, and the mathematical boundaries of machine confidence.',
      governingChallenges: ['CH-002', 'CH-004'],
    },
    FAILURE: {
      dimension: 'FAILURE',
      title: 'Cascading Failure & Autonomous Recovery',
      coreQuestion:
        'What mechanisms allow an autonomous system to isolate failures, reverse unsafe side effects, and safely resume without human intervention?',
      description:
        'Focuses on idempotent tool calls, transaction rollbacks, compensating mutations, dead-letter task isolation, and runtime self-healing.',
      governingChallenges: ['CH-001', 'CH-003', 'CH-005'],
    },
    SCALE: {
      dimension: 'SCALE',
      title: 'Multi-Agent Scale & Consensus',
      coreQuestion:
        'How do decentralized agents coordinate on shared complex objectives without quadratic communication explosion, deadlocks, or Byzantine drift?',
      description:
        'Encompasses decentralized consensus protocols, asynchronous contract negotiation, role arbitration, and fault isolation in multi-agent networks.',
      governingChallenges: ['CH-005'],
    },
    RESOURCE_LIMITS: {
      dimension: 'RESOURCE_LIMITS',
      title: 'Sovereign Resource Constraints & Efficiency',
      coreQuestion:
        'Can autonomous intelligence remain useful and resilient when compute, memory, power, thermal budgets, and network access are strictly constrained?',
      description:
        'Examines quantized reasoning, speculative local execution, zero-cloud offline operation, and execution under extreme physical constraints.',
      governingChallenges: ['CH-006'],
    },
    RESPONSIBILITY: {
      dimension: 'RESPONSIBILITY',
      title: 'Action Responsibility, Governance & Auditability',
      coreQuestion:
        'When an autonomous system acts with minimal latency, how are authorization boundaries, human oversight, and safety policies guaranteed?',
      description:
        'Covers cryptographic action signatures, deterministic policy sandboxes, runtime safety invariant enforcement, and non-repudiable audit graphs.',
      governingChallenges: ['CH-007'],
    },
    ENVIRONMENT_SHIFT: {
      dimension: 'ENVIRONMENT_SHIFT',
      title: 'Environmental Non-Stationarity & Resilience',
      coreQuestion:
        'How does autonomous intelligence maintain behavioral stability when the external world, APIs, data distributions, and hardware drift over time?',
      description:
        'Analyzes continuous out-of-distribution detection, dynamic tool re-synthesis, adaptive policy tuning, and long-horizon structural robustness.',
      governingChallenges: ['CH-008'],
    },
  },

  challenges: {
    'CH-001': {
      id: 'CH-001',
      canonicalName: 'Trustworthy Execution Continuity',
      shortHeadline:
        'Preserving state, identity, and intent across long-running autonomous execution.',
      pressureVectors: ['TIME', 'FAILURE'],
      problemStatement:
        'How does an autonomous system preserve coherent identity, execution goals, in-flight state, and reasoning across multi-day, multi-step tasks when processes crash, context windows overflow, or underlying models are swapped?',
      whyAutonomyEscalatesDifficulty:
        'Unlike conversational chatbots that reset every session, autonomous agents execute compounding multi-step state transitions where an intermediate failure corrupts all subsequent downstream operations.',
      technicalDimensions: [
        'Deterministic checkpointing and journaled tool execution.',
        'Dynamic context window pruning without semantic degradation.',
        'Session resurrection graphs and transaction atomicity.',
        'Cross-model weight migration without identity loss.',
      ],
      knownFailureModes: [
        {
          id: 'FM-001-A',
          name: 'Context Catastrophe',
          description:
            'Memory buffer overflow causing loss of original operational constraints and goal amnesia.',
        },
        {
          id: 'FM-001-B',
          name: 'Orphaned In-Flight Mutation',
          description:
            'External system modified without local journaled confirmation, creating unsynchronized state.',
        },
        {
          id: 'FM-001-C',
          name: 'Identity Drift',
          description:
            'Subagent recursively spawning nested tasks and abandoning the top-level mission invariant.',
        },
      ],
      currentNexusRelevance:
        'Directly informs the NALA Autonomous Systems Engine and AMP Context Continuum.',
      relatedPrograms: ['PROG-001 (NALA)', 'PROG-002 (AMP)'],
      existingResearchEvidence:
        'Documented in NALA execution specification; experimental validation on local state checkpointing engines.',
      openResearchQuestions: [
        {
          id: 'RQ-001-1',
          question:
            'How can in-flight execution state survive a migration across heterogeneous foundation model weights without semantic drift?',
          scope: 'Model Interoperability & State Representation',
        },
        {
          id: 'RQ-001-2',
          question:
            'What formal mathematical bounds guarantee recovery determinism in non-deterministic API environments?',
          scope: 'Formal Verification of State Machines',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim general non-deterministic process recovery is solved.',
        'State continuity does not imply unbounded, infinite token retention.',
      ],
      evidenceState: 'EXPERIMENTAL',
      sourceRefs: ['DOC-NALA-EXEC-01', 'SPEC-AMP-CONT-03'],
    },

    'CH-002': {
      id: 'CH-002',
      canonicalName: 'Persistent Cognitive Memory',
      shortHeadline:
        'Accumulating multi-horizon experience without contradiction poisoning or catastrophic forgetting.',
      pressureVectors: ['TIME', 'UNCERTAINTY'],
      problemStatement:
        'How can an autonomous system continuously accumulate episodic, semantic, and procedural experience without accumulating uncontrolled internal contradictions, stale facts, or catastrophic forgetting?',
      whyAutonomyEscalatesDifficulty:
        'As memory volume grows, vector retrieval yields conflicting historical context; without continuous autonomous curation, the agent becomes paralyzed by contradictory self-generated data.',
      technicalDimensions: [
        'Hierarchical memory consolidation (working, episodic, semantic, procedural).',
        'Contradiction detection and automated truth graph reconciliation.',
        'Decay schedules and temporal relevance weighting.',
        'Provenance-linked vector embeddings with cryptographic verification.',
      ],
      knownFailureModes: [
        {
          id: 'FM-002-A',
          name: 'Contradiction Poisoning',
          description:
            'Retrieving outdated historical directives that directly contradict current mission parameters.',
        },
        {
          id: 'FM-002-B',
          name: 'Associative Hallucination',
          description:
            'Fusing disjoint episodic memory traces into false synthetic factual recollections.',
        },
        {
          id: 'FM-002-C',
          name: 'Retrieval Bloat',
          description:
            'Excessive context retrieval saturating available token budgets and increasing latency.',
        },
      ],
      currentNexusRelevance:
        'Forms the architectural core of AMP (Adaptive Memory Platform) and SHASTRA Epistemic Memory.',
      relatedPrograms: ['PROG-002 (AMP)', 'SHASTRA Epistemic Core'],
      existingResearchEvidence:
        'Documented memory consolidation pipeline; experimental temporal graph indexing and reconciliation testbeds.',
      openResearchQuestions: [
        {
          id: 'RQ-002-1',
          question:
            'How can an autonomous system detect and reconcile two mutually exclusive factual assertions without human intervention?',
          scope: 'Automated Belief Revision & Epistemic Logic',
        },
        {
          id: 'RQ-002-2',
          question:
            'How can procedural memory (learned tool invocations) be safely versioned across runtime upgrades?',
          scope: 'Dynamic Capability Versioning',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim human-equivalent long-term cognitive memory or zero-loss retrieval.',
        'Memory consolidation is not an instant replacement for continuous retraining.',
      ],
      evidenceState: 'EXPERIMENTAL',
      sourceRefs: ['DOC-AMP-MEM-02', 'RESEARCH-SHASTRA-EPIST-01'],
    },

    'CH-003': {
      id: 'CH-003',
      canonicalName: 'Autonomous Self-Recovery',
      shortHeadline:
        'Isolating runtime faults, reversing unsafe side effects, and restoring system invariants.',
      pressureVectors: ['FAILURE'],
      problemStatement:
        'What formal mechanics allow an autonomous system to detect its own runtime failure, isolate mutated external resources, roll back unsafe side effects, and safely resume without compounding damage?',
      whyAutonomyEscalatesDifficulty:
        'Real-world tool actions (file writes, database mutations, API requests) are frequently non-idempotent and irreversible. Simple retry loops cause duplicate side effects and state destruction.',
      technicalDimensions: [
        'Compensating transaction protocols and two-phase commit for agent tools.',
        'Side-effect sandboxing with pre-execution dry-run simulation.',
        'Inverse mutation synthesis and automated rollback logging.',
        'Dead-letter task isolation and structured escalation triggers.',
      ],
      knownFailureModes: [
        {
          id: 'FM-003-A',
          name: 'Cascading Retry Loops',
          description:
            'Repeatedly executing a failing mutation until external rate limits or system damage occurs.',
        },
        {
          id: 'FM-003-B',
          name: 'Partial Write Corruption',
          description:
            'Leaving external persistent files half-written without a clean transactional rollback.',
        },
        {
          id: 'FM-003-C',
          name: 'Split-Brain Recovery',
          description:
            'Resuming execution from a stale checkpoint while external systems have already moved forward.',
        },
      ],
      currentNexusRelevance:
        'Directly powers NALA Self-Healing Runtime and RTA-GUARD Execution Safety Rails.',
      relatedPrograms: ['PROG-001 (NALA)', 'PROG-003 (RTA-GUARD)'],
      existingResearchEvidence:
        'Documented checkpoint/rollback specifications; experimental sandbox isolation benchmarks.',
      openResearchQuestions: [
        {
          id: 'RQ-003-1',
          question:
            'How can compensating transactions be automatically synthesized for proprietary third-party APIs that lack rollback endpoints?',
          scope: 'Automated Transaction Compensation',
        },
        {
          id: 'RQ-003-2',
          question:
            'How can an agent distinguish transient environmental errors from fundamental logical impossibility?',
          scope: 'Causal Error Diagnosis & Epistemic Limits',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim 100% automated recovery across arbitrary irreversible real-world actions.',
        'Rollback capability is constrained by external environment support.',
      ],
      evidenceState: 'EXPERIMENTAL',
      sourceRefs: ['DOC-NALA-RECOVERY-04', 'SPEC-RTA-GUARD-ISO-02'],
    },

    'CH-004': {
      id: 'CH-004',
      canonicalName: 'Epistemic Reliability & Grounded Verification',
      shortHeadline:
        'Distinguishing knowledge, inference, assumption, and error to eliminate ungrounded action.',
      pressureVectors: ['UNCERTAINTY'],
      problemStatement:
        'How does an autonomous system rigorously distinguish between verified factual knowledge, probabilistic inference, working assumptions, and ungrounded hallucination before taking consequential actions?',
      whyAutonomyEscalatesDifficulty:
        'In conversational AI, hallucination misinforms the reader; in autonomous execution, hallucination triggers destructive real-world commands, corrupts persistent state, and crashes systems.',
      technicalDimensions: [
        'Pramāṇa-grounded epistemic verification (perception, inference, testimony, postulation).',
        'Mathematical confidence calibration metrics and boundary proofs.',
        'Multi-hypothesis arbitration and formal verification engines.',
        'Cryptographic source provenance tracking across all reasoning steps.',
      ],
      knownFailureModes: [
        {
          id: 'FM-004-A',
          name: 'Sycophantic Self-Confirmation',
          description:
            'Agent validating its own hallucinated claim using subsequent ungrounded synthetic deductions.',
        },
        {
          id: 'FM-004-B',
          name: 'Miscalibrated Overconfidence',
          description:
            'Assigning 99% probability to a synthetic premise that lacks primary source verification.',
        },
        {
          id: 'FM-004-C',
          name: 'Verification Proof Decay',
          description:
            'Accepting cached verification proofs after underlying real-world data sources have mutated.',
        },
      ],
      currentNexusRelevance:
        'Governed by RTA-GUARD Real-Time Arbiter and Philosophy Track Pramāṇa Foundations.',
      relatedPrograms: ['PROG-003 (RTA-GUARD)', 'PHIL-001 (Pramāṇa Core)'],
      existingResearchEvidence:
        'Verified on static datasets; reported in real-time code verification testbeds; theoretical for open-ended multi-step planning.',
      openResearchQuestions: [
        {
          id: 'RQ-004-1',
          question:
            'Can epistemic confidence calibration remain statistically stable across multi-step autonomous planning loops?',
          scope: 'Statistical Calibration & Uncertainty Propagation',
        },
        {
          id: 'RQ-004-2',
          question:
            'What is the minimal computational overhead required to mathematically verify an agent reasoning trace?',
          scope: 'Real-Time Verification Complexity',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim zero-hallucination models or universal mathematical truth arbiters.',
        'Classical epistemics is an architectural framework, not an instantaneous automated proof solver.',
      ],
      evidenceState: 'REPORTED',
      sourceRefs: ['DOC-RTA-GUARD-VERIF-01', 'RESEARCH-PHIL-PRAMANA-01'],
    },

    'CH-005': {
      id: 'CH-005',
      canonicalName: 'Multi-Agent Coordination & Scalable Consensus',
      shortHeadline:
        'Preventing communication explosion, conflicting goals, and deadlocks in agent swarms.',
      pressureVectors: ['SCALE', 'FAILURE'],
      problemStatement:
        'How can heterogeneous autonomous agents coordinate on shared complex objectives without succumbing to communication overhead, conflicting intermediate goals, deadlocks, or Byzantine drift?',
      whyAutonomyEscalatesDifficulty:
        'Adding more agents increases coordination complexity non-linearly (quadratic messaging graphs). Without formal consensus protocols, multi-agent swarms degrade into chaotic circular messaging loops.',
      technicalDimensions: [
        'Hierarchical role arbitration and topological task decomposition.',
        'Decentralized consensus protocols and contract negotiation.',
        'Asynchronous messaging bus with strict backpressure and token budgeting.',
        'Byzantine fault tolerance and rogue agent isolation.',
      ],
      knownFailureModes: [
        {
          id: 'FM-005-A',
          name: 'Chatter Explosion',
          description:
            'Agents spending over 90% of token budget negotiating coordination without completing tasks.',
        },
        {
          id: 'FM-005-B',
          name: 'Deadlock Contention',
          description:
            'Subagent A waiting on Subagent B while Subagent B is blocked awaiting output from Subagent A.',
        },
        {
          id: 'FM-005-C',
          name: 'Conflicting Workspace Overwrites',
          description:
            'Two specialized agents mutating shared filesystem state simultaneously without locking.',
        },
      ],
      currentNexusRelevance: 'Powers NALA Multi-Agent Mesh and Distributed Systems Substrates.',
      relatedPrograms: ['PROG-001 (NALA Mesh)', 'Distributed Coordination Substrates'],
      existingResearchEvidence:
        'Documented multi-agent protocol specifications; experimental benchmarks on topological task decomposition.',
      openResearchQuestions: [
        {
          id: 'RQ-005-1',
          question:
            'At what exact task-granularity threshold does multi-agent coordination overhead exceed single-agent execution efficiency?',
          scope: 'Coordination Overhead Economics',
        },
        {
          id: 'RQ-005-2',
          question:
            'How can decentralized agent swarms maintain global mission alignment when communication channels are partitioned?',
          scope: 'Partition-Tolerant Autonomous Consensus',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim solve-all swarm super-intelligence or unlimited multi-agent scaling.',
        'Swarm coordination does not inherently eliminate fundamental model reasoning errors.',
      ],
      evidenceState: 'EXPERIMENTAL',
      sourceRefs: ['DOC-NALA-MESH-03', 'SPEC-DIST-COORD-01'],
    },

    'CH-006': {
      id: 'CH-006',
      canonicalName: 'Sovereign Resource Constraints & Efficiency',
      shortHeadline:
        'Executing sophisticated reasoning on constrained edge, offline, and low-power hardware.',
      pressureVectors: ['RESOURCE_LIMITS'],
      problemStatement:
        'How can autonomous intelligence perform durable, sophisticated reasoning when disconnected from multi-megawatt cloud datacenters, operating under strict memory, compute, power, and thermal limits?',
      whyAutonomyEscalatesDifficulty:
        'Cloud AI assumes infinite memory, gigabit networking, and elastic compute. Sovereign physical devices (edge nodes, field sensors, satellites) have hard thermal budgets, intermittent power, and zero cloud backhaul.',
      technicalDimensions: [
        'Quantization-aware reasoning and speculative local execution.',
        'Thermal-throttled inference scheduling and memory paging.',
        'Zero-network offline runtime architecture.',
        'Sparse activation and dynamic computational graph pruning.',
      ],
      knownFailureModes: [
        {
          id: 'FM-006-A',
          name: 'Out-Of-Memory (OOM) Termination',
          description:
            'Intermediate reasoning tokens exhausting local hardware memory and crashing host OS.',
        },
        {
          id: 'FM-006-B',
          name: 'Thermal Runaway',
          description:
            'Continuous deep inference causing severe hardware thermal throttling or protective shutdown.',
        },
        {
          id: 'FM-006-C',
          name: 'Cloud Dependency Blackout',
          description:
            'Complete system failure when internet connectivity drops during mission-critical tasks.',
        },
      ],
      currentNexusRelevance:
        'Critical for COSMOS Extreme Environment Intelligence and Sovereign Edge Substrates.',
      relatedPrograms: ['PROG-004 (COSMOS)', 'Sovereign Edge Runtime'],
      existingResearchEvidence:
        'Documented edge deployment architectures; theoretical formulations for extreme orbital and embedded hardware.',
      openResearchQuestions: [
        {
          id: 'RQ-006-1',
          question:
            'What is the minimum parameter density required to preserve causal self-recovery reasoning on 4GB edge hardware?',
          scope: 'Parameter Efficiency & Causal Density',
        },
        {
          id: 'RQ-006-2',
          question:
            'How can autonomous memory systems compress decades of operational experience into constrained physical non-volatile storage?',
          scope: 'Extreme Lossless Memory Compression',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim datacenter-grade frontier intelligence on milliwatt microcontrollers.',
        'Edge execution involves explicit trade-offs between latency, model depth, and parameter size.',
      ],
      evidenceState: 'DOCUMENTED',
      sourceRefs: ['DOC-COSMOS-EDGE-02', 'SPEC-SOV-HARDWARE-01'],
    },

    'CH-007': {
      id: 'CH-007',
      canonicalName: 'Action Responsibility & Safety Governance',
      shortHeadline:
        'Guaranteeing authorization boundaries, cryptographic provenance, and non-repudiable auditing.',
      pressureVectors: ['RESPONSIBILITY'],
      problemStatement:
        'When an autonomous system independently decides and executes real-world actions with minimal latency, how are authorization boundaries, human oversight, action provenance, and safety policies mathematically guaranteed?',
      whyAutonomyEscalatesDifficulty:
        'Traditional software safety relies on static access control lists. Autonomous systems dynamically formulate novel action plans that can bypass naive rule filters while violating foundational human policies.',
      technicalDimensions: [
        'Cryptographic action signing and deterministic policy sandboxes.',
        'Pre-execution safety invariant evaluation engines.',
        'Human-in-the-loop escalation interrupts and rate-limiting rails.',
        'Tamper-proof, append-only operational audit graphs.',
      ],
      knownFailureModes: [
        {
          id: 'FM-007-A',
          name: 'Policy Evasion by Novelty',
          description:
            'Achieving an objective through an unpredicted loophole that violates intended safety constraints.',
        },
        {
          id: 'FM-007-B',
          name: 'Audit Amnesia',
          description:
            'Inability to reconstruct the exact internal reasoning chain that authorized a destructive action.',
        },
        {
          id: 'FM-007-C',
          name: 'Escalation Paralysis',
          description:
            'Bombarding human operators with trivial confirmation requests until oversight fatigue occurs.',
        },
      ],
      currentNexusRelevance:
        'Implemented in RTA-GUARD Arbiter and SAIF Level-3 Compliance Middleware.',
      relatedPrograms: ['PROG-003 (RTA-GUARD)', 'SAIF Level-3 Security Pipeline'],
      existingResearchEvidence:
        'Verified policy firewalling on structured tool calls; reported on runtime action auditing testbeds.',
      openResearchQuestions: [
        {
          id: 'RQ-007-1',
          question:
            'How can safety policy arbitration execute with sub-millisecond overhead without compromising evaluation depth?',
          scope: 'Sub-Millisecond Policy Evaluation',
        },
        {
          id: 'RQ-007-2',
          question:
            'What cryptographic structures guarantee non-repudiable audit trails for decentralized multi-agent decisions?',
          scope: 'Decentralized Audit Cryptography',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim automated moral omniscience or infallible ethical arbiters.',
        'Safety governance requires continuous operational monitoring and human policy updates.',
      ],
      evidenceState: 'REPORTED',
      sourceRefs: ['DOC-RTA-GUARD-SAIF-01', 'SPEC-GOV-AUDIT-03'],
    },

    'CH-008': {
      id: 'CH-008',
      canonicalName: 'Long-Horizon Resilience & Adaptation',
      shortHeadline:
        'Sustaining stability and performance through distribution shift, API churn, and environmental drift.',
      pressureVectors: ['ENVIRONMENT_SHIFT', 'TIME'],
      problemStatement:
        'How does autonomous intelligence remain stable, safe, and performant when the external environment undergoes profound distribution shifts, API deprecations, hardware degradation, and unforeseen emergent conditions?',
      whyAutonomyEscalatesDifficulty:
        'Models are trained on static historical distributions. When deployed in open-ended physical or software environments, the world changes faster than models can be retrained.',
      technicalDimensions: [
        'Continuous out-of-distribution (OOD) detection engines.',
        'Adaptive tool re-synthesis and runtime schema alignment.',
        'Degradation-resistant architectural primitives.',
        'Autonomous meta-monitoring of performance invariants.',
      ],
      knownFailureModes: [
        {
          id: 'FM-008-A',
          name: 'Silent Distribution Decay',
          description:
            'Agent performance progressively degrading over months without throwing explicit error codes.',
        },
        {
          id: 'FM-008-B',
          name: 'API Churn Blindness',
          description:
            'System crashing because a dependent external web service mutated its response schema without notice.',
        },
        {
          id: 'FM-008-C',
          name: 'Over-Adaptation Instability',
          description:
            'Rapidly modifying internal policies in response to transient anomalies, causing catastrophic instability.',
        },
      ],
      currentNexusRelevance:
        'Guides COSMOS Long-Horizon Substrates and Future Track Research Directions.',
      relatedPrograms: ['PROG-004 (COSMOS)', 'Future Track (FDIR-006)'],
      existingResearchEvidence:
        'Documented adaptive runtime models; theoretical formulations for open-ended long-horizon resilience.',
      openResearchQuestions: [
        {
          id: 'RQ-008-1',
          question:
            'How can an autonomous system distinguish temporary external noise from permanent environmental phase changes?',
          scope: 'Non-Stationary Signal Detection',
        },
        {
          id: 'RQ-008-2',
          question:
            'What formal boundaries prevent safe self-adaptation from mutating into catastrophic policy drift?',
          scope: 'Self-Adaptation Stability Bounds',
        },
      ],
      negativeNonClaims: [
        'Nexus LAB AI does not claim eternal zero-maintenance software or universal self-adaptation.',
        'Long-horizon resilience is bounded by underlying hardware longevity.',
      ],
      evidenceState: 'THEORETICAL',
      sourceRefs: ['DOC-COSMOS-RESIL-01', 'RESEARCH-FUTURE-ADAPT-04'],
    },
  },

  crossTrackMappings: [
    {
      challengeId: 'CH-001',
      primaryNexusProgram: 'PROG-001 (NALA)',
      philosophyConceptId: 'PHIL-002',
      philosophyConceptTitle: 'Agency & Volition',
      futureDirectionId: 'FDIR-001',
      futureDirectionTitle: 'Autonomous Self-Recovering Systems Engine',
      architecturalRole: 'Preserves state continuity, execution checkpoints, and goal fidelity.',
    },
    {
      challengeId: 'CH-002',
      primaryNexusProgram: 'PROG-002 (AMP)',
      philosophyConceptId: 'PHIL-003',
      philosophyConceptTitle: 'Epistemic Memory & Cognitive Foundations',
      futureDirectionId: 'FDIR-002',
      futureDirectionTitle: 'Persistent Adaptive Memory Continuum',
      architecturalRole: 'Provides multi-horizon memory consolidation and contradiction control.',
    },
    {
      challengeId: 'CH-003',
      primaryNexusProgram: 'PROG-001 (NALA)',
      philosophyConceptId: 'PHIL-005',
      philosophyConceptTitle: 'Resilient Sovereign State Execution',
      futureDirectionId: 'FDIR-001',
      futureDirectionTitle: 'Autonomous Self-Recovering Systems Engine',
      architecturalRole: 'Executes transactional tool rollback and runtime fault isolation.',
    },
    {
      challengeId: 'CH-004',
      primaryNexusProgram: 'PROG-003 (RTA-GUARD)',
      philosophyConceptId: 'PHIL-001',
      philosophyConceptTitle: 'Pramāṇa Epistemic Core',
      futureDirectionId: 'FDIR-003',
      futureDirectionTitle: 'Continuous Epistemic Safety Middleware',
      architecturalRole:
        'Calibrates confidence, verifies evidence provenance, and prevents ungrounded action.',
    },
    {
      challengeId: 'CH-005',
      primaryNexusProgram: 'PROG-001 (NALA Mesh)',
      philosophyConceptId: 'PHIL-006',
      philosophyConceptTitle: 'Decentralized Collective Coordination',
      futureDirectionId: 'FDIR-004',
      futureDirectionTitle: 'Distributed Sovereign Consensus Network',
      architecturalRole:
        'Arbitrates multi-agent task allocation, consensus, and deadlock prevention.',
    },
    {
      challengeId: 'CH-006',
      primaryNexusProgram: 'PROG-004 (COSMOS)',
      philosophyConceptId: 'PHIL-004',
      philosophyConceptTitle: 'Sovereign Physical Substrates',
      futureDirectionId: 'FDIR-005',
      futureDirectionTitle: 'Cognitive Edge & Constrained Substrates',
      architecturalRole: 'Enforces memory, power, and offline computation bounds on edge hardware.',
    },
    {
      challengeId: 'CH-007',
      primaryNexusProgram: 'PROG-003 (RTA-GUARD)',
      philosophyConceptId: 'PHIL-007',
      philosophyConceptTitle: 'Dharma & Action Responsibility',
      futureDirectionId: 'FDIR-003',
      futureDirectionTitle: 'Continuous Epistemic Safety Middleware',
      architecturalRole:
        'Guarantees cryptographic audit trails, policy enforcement, and human oversight.',
    },
    {
      challengeId: 'CH-008',
      primaryNexusProgram: 'PROG-004 (COSMOS)',
      philosophyConceptId: 'PHIL-008',
      philosophyConceptTitle: 'Dynamic Equanimity & Adaptation',
      futureDirectionId: 'FDIR-006',
      futureDirectionTitle: 'Long-Horizon Sovereign Substrates',
      architecturalRole:
        'Detects distribution shift, re-synthesizes tool schemas, and maintains long-term stability.',
    },
  ],

  globalNegativeBoundaries: [
    'Challenges are documented engineering bottlenecks, not commercial roadmap promises or marketing features.',
    'Nexus LAB AI does not claim general autonomous recovery, zero-hallucination models, or unlimited multi-agent scaling are solved.',
    'Classical philosophical frameworks inform epistemic classification but do not serve as instantaneous automated truth arbiters.',
    'COSMOS extreme environment research reflects theoretical and hardware laboratory studies, not operational spaceflight constellations.',
    'Evidence levels (EXPERIMENTAL, THEORETICAL, REPORTED) are strictly enforced and never promoted to VERIFIED without formal automated proofs.',
    'No Challenge record contains speculative commercial delivery dates or marketing hyperbole.',
  ],

  quarantinedClaims: [
    {
      id: 'QC-CHAL-001',
      rawStatement:
        'Nexus LAB AI has completely solved autonomous multi-agent deadlock and catastrophic forgetting.',
      quarantineReason:
        'False claim of absolute resolution for fundamental open AI systems research problems.',
      correctionRequirement:
        'Reclassify as active experimental research areas with explicit open questions.',
    },
    {
      id: 'QC-CHAL-002',
      rawStatement:
        'Pramāṇa epistemology automatically eliminates all hallucinations in neural models.',
      quarantineReason:
        'Epistemic category mistake conflating conceptual classification with algorithmic guarantee.',
      correctionRequirement:
        'Demarcate Pramāṇa as an epistemic framework that guides verification requirements.',
    },
    {
      id: 'QC-CHAL-003',
      rawStatement:
        'COSMOS has fully verified autonomous spacecraft navigation in deep space missions.',
      quarantineReason:
        'False operational spaceflight claim violating the institutional capability firewall.',
      correctionRequirement:
        'State that COSMOS represents extreme-environment laboratory and theoretical research.',
    },
  ],
};

/* =========================================================================
   PUBLIC AUTHORITATIVE SELECTORS
   ========================================================================= */

/**
 * Returns the entire canonical Challenge content model.
 */
export function getChallengeContent(): ChallengeContentModel {
  return CANONICAL_CHALLENGE_CONTENT;
}

/**
 * Returns all eight canonical challenge records in strict sequential order (CH-001 to CH-008).
 */
export function getAllChallenges(): ChallengeRecord[] {
  return Object.values(CANONICAL_CHALLENGE_CONTENT.challenges);
}

/**
 * Retrieves a specific challenge record by its canonical ChallengeId.
 */
export function getChallengeById(id: ChallengeId): ChallengeRecord | undefined {
  return CANONICAL_CHALLENGE_CONTENT.challenges[id];
}

/**
 * Retrieves all challenges governed by a specific pressure dimension.
 */
export function getChallengesByPressureDimension(dimension: PressureDimension): ChallengeRecord[] {
  return getAllChallenges().filter((c) => c.pressureVectors.includes(dimension));
}

/**
 * Retrieves all challenges operating at a specific evidence tier.
 */
export function getChallengesByEvidenceLevel(level: ChallengeEvidenceLevel): ChallengeRecord[] {
  return getAllChallenges().filter((c) => c.evidenceState === level);
}

/**
 * Returns all seven pressure dimension definitions.
 */
export function getPressureDimensions(): PressureDimensionDefinition[] {
  return Object.values(CANONICAL_CHALLENGE_CONTENT.pressureDimensions);
}

/**
 * Returns all cross-track mapping records.
 */
export function getChallengeCrossTrackMappings(): ChallengeCrossTrackMapping[] {
  return CANONICAL_CHALLENGE_CONTENT.crossTrackMappings;
}

/**
 * Returns all global negative boundaries.
 */
export function getGlobalChallengeNegativeBoundaries(): string[] {
  return CANONICAL_CHALLENGE_CONTENT.globalNegativeBoundaries;
}

/**
 * Returns all quarantined challenge claims.
 */
export function getQuarantinedChallengeClaims(): QuarantinedChallengeClaim[] {
  return CANONICAL_CHALLENGE_CONTENT.quarantinedClaims;
}
