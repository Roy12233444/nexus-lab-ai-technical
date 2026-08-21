/**
 * Nexus LAB AI — Canonical Philosophy Content Model & Authoritative Registry
 * Phase 04E.3 — Source of Truth for Philosophy Track
 */

import {
  CanonicalPhilosophyRegistry,
  PhilosophyConcept,
  PhilosophyPrinciple,
  PublicClaim,
  QuarantinedClaim,
} from '@/types/philosophy';

export const CANONICAL_PHILOSOPHY_REGISTRY: CanonicalPhilosophyRegistry = {
  metadata: {
    version: '1.0.0-phase04e.3',
    lockedDate: '2026-08-21',
    epistemicAuthority: 'docs/04E.2_AUTHORITATIVE_PHILOSOPHY_INFORMATION.md',
    totalConcepts: 16,
    publicPrimaryCount: 8,
    publicSupportingCount: 4,
    deepResearchCount: 4,
    principlesCount: 8,
    claimsCount: 12,
    hypothesesCount: 8,
    quarantinedCount: 5,
  },
  identity: {
    declaration:
      'Nexus LAB AI investigates classical Indian epistemological, cognitive, and normative systems to establish rigorous computational architectures for verifiable machine intelligence.',
    mandate:
      'We do not retroactively claim ancient texts invented modern AI. We extract foundational questions regarding knowledge, cognition, agency, and responsibility to inform first-principles systems engineering.',
  },
  concepts: {
    'PHIL-001': {
      id: 'PHIL-001',
      term: 'Pramāṇa',
      transliteration: 'Pramana',
      tradition: 'NYAYA',
      researchModule: '01.02 Epistemology',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The legitimate instruments, methods, or means (pramāṇa) through which a cognizer (pramātṛ) acquires true, uncontradicted knowledge (pramā) of an objective reality (prameya).',
      philosophicalQuestion:
        'What constitutes valid knowledge, how is it acquired, and how is it rigorously distinguished from unverified belief or sensory illusion?',
      nexusInterpretation:
        'We investigate whether artificial agents can be architected to explicitly tag, track, and differentiate the epistemic sources of their data (direct observation vs deductive inference vs authoritative testimony).',
      hypothesisId: 'HYP-PHIL-001',
      nexusMapping: {
        target: 'NALA',
        category: 'RESEARCH',
        justification:
          'Active research hypothesis evaluating multi-step verifiable proof traces and source-tagging in agent reasoning loops.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-001',
      publicClaim:
        'Nexus LAB AI investigates explicit distinctions between sources of knowledge (direct observation, deductive inference, authoritative testimony, and uncertainty) as an architectural foundation for verifiable AI reasoning.',
      nonClaims: [
        'We do NOT claim ancient Nyāya philosophers invented automated reasoning algorithms.',
        'We do NOT claim Pramāṇa theory has eliminated LLM hallucinations in production.',
        'We do NOT claim NALA is an ancient Indian logic engine.',
      ],
    },
    'PHIL-002': {
      id: 'PHIL-002',
      term: 'Pañcāvayava',
      transliteration: 'Pancavayava',
      tradition: 'NYAYA',
      researchModule: '01.02 Epistemology',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The five-member structured schema for public demonstrative inference: Proposition (pratijñā), Reason (hetu), Universal Concomitance with Example (udāharaṇa), Application (upanaya), and Final Synthesis (nigamana).',
      philosophicalQuestion:
        'How can a logical deduction be structured such that formal syntactic validity is intrinsically anchored to verifiable empirical reality?',
      nexusInterpretation:
        'We explore structured reasoning traces where every intermediate deductive step requires explicit corroboration against an empirical baseline or ground-truth constraint before concluding.',
      hypothesisId: 'HYP-PHIL-002',
      nexusMapping: {
        target: 'NALA',
        category: 'RESEARCH',
        justification:
          'Evaluated in formal proof-tree exploration and fallacy-checking middleware within NALA.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-002',
      publicClaim:
        'We investigate five-phase structured inference pipelines that bind deductive steps directly to empirical instances and formal fallacy checks.',
      nonClaims: [
        'We do NOT claim modern neural networks naturally follow Indian syllogistic forms.',
        'We do NOT claim the five-step syllogism replaces standard first-order mathematical logic.',
      ],
    },
    'PHIL-003': {
      id: 'PHIL-003',
      term: 'Svataḥ vs Parataḥ Prāmāṇya',
      transliteration: 'Svatah vs Paratah Pramanya',
      tradition: 'PURVA_MIMAMSA',
      researchModule: '01.02 Epistemology',
      visibilityTier: 'PUBLIC_SUPPORTING',
      classicalDefinition:
        'The epistemological debate over whether knowledge is intrinsically valid upon generation (svataḥ) until defeated, or requires extrinsic pragmatic verification (parataḥ).',
      philosophicalQuestion:
        'Is awareness inherently trustworthy until contradicted, or must every state be verified by secondary evidence?',
      nexusInterpretation:
        'Balances default fast-path execution in low-risk contexts with explicit verification pipelines in mission-critical decision paths.',
      nexusMapping: {
        target: 'RTA-GUARD',
        category: 'RESEARCH',
        justification:
          'Informs dual-regime verification gating across deterministic safety middleware.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-009',
      publicClaim:
        'We explore dual epistemic validation regimes: pragmatic default execution balanced with rigorous extrinsic verification in critical decision paths.',
      nonClaims: [
        'We do NOT claim one philosophical school’s theory of validity is universally superior in software.',
      ],
    },
    'PHIL-004': {
      id: 'PHIL-004',
      term: 'Khyātivāda',
      transliteration: 'Khyativada',
      tradition: 'MULTIPLE_DARSANAS',
      researchModule: '01.02 Epistemology',
      visibilityTier: 'PUBLIC_SUPPORTING',
      classicalDefinition:
        'Systematic classical taxonomies explaining cognitive error: mislocating real attributes (anyathākhyāti), non-discrimination (akhyāti), or indeterminate illusion (anirvacanīyakhyāti).',
      philosophicalQuestion:
        'How does error originate, and why does an agent project subjective constructs onto objective reality?',
      nexusInterpretation:
        'Classifies AI hallucination modes into precise failure taxonomies: associative attribute misattribution, context-retrieval confusion, and unanchored generative confabulation.',
      nexusMapping: {
        target: 'Research Infrastructure',
        category: 'RESEARCH',
        justification:
          'Applied in categorization matrices for hallucination mitigation benchmarks.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-010',
      publicClaim:
        'We categorize and mitigate artificial intelligence errors through structured failure taxonomies distinguishing sensory mislocation from memory-retrieval confusion.',
      nonClaims: [
        'We do NOT claim ancient error theories eliminate modern hallucination phenomena.',
      ],
    },
    'PHIL-005': {
      id: 'PHIL-005',
      term: 'Antaḥkaraṇa',
      transliteration: 'Antahkarana',
      tradition: 'SAMKHYA',
      researchModule: '01.03 Cognition',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The functional four-fold internal cognitive stack comprising: Manas (sensory routing/deliberation), Ahaṃkāra (self-referential frame operator), Buddhi (determinative intellect and judgment), and Citta (latent memory reservoir).',
      philosophicalQuestion:
        'How do distinct cognitive sub-functions (perception, identity, executive determination, memory) collaborate to generate cohesive mental action?',
      nexusInterpretation:
        'Rather than relying on a single monolithic model, autonomous agent architectures benefit from decomposing processing into discrete functional substrates: sensory routing, contextual frame tracking, executive judgment, and persistent associative memory.',
      hypothesisId: 'HYP-PHIL-003',
      nexusMapping: {
        target: 'CHAITANYA / SAPTACORE',
        category: 'DIRECT',
        justification:
          'Formally instantiated in the seven-kernel modular topology of CHAITANYA / SAPTACORE.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'FORMALIZED',
        prototypeImplementation: 'IMPLEMENTED',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-003',
      publicClaim:
        'Nexus LAB AI structures cognitive systems into decoupled functional layers—separating dynamic sensory routing, determinative executive judgment, and persistent memory stores.',
      nonClaims: [
        'We do NOT claim artificial neural networks possess subjective conscious awareness (Chetanā).',
        'We do NOT claim Antaḥkaraṇa decomposition represents a metaphysical soul.',
      ],
    },
    'PHIL-006': {
      id: 'PHIL-006',
      term: 'Saṃskāra & Smṛti',
      transliteration: 'Samskara & Smrti',
      tradition: 'YOGA',
      researchModule: '01.03 Cognition',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'Cognitive actions leave subliminal latent impressions (saṃskāras) stored in the mind-substance (citta), which remain dormant until activated by contextual similarity to generate memory recall (smṛti).',
      philosophicalQuestion:
        'How does past experience persist across time without occupying active conscious awareness, and how is it accurately reconstructed upon demand?',
      nexusInterpretation:
        'We model agent memory as a dynamic latent store where episodic interactions are consolidated into structured latent traces that activate only upon semantic resonance, avoiding catastrophic forgetting.',
      hypothesisId: 'HYP-PHIL-004',
      nexusMapping: {
        target: 'AMP',
        category: 'RESEARCH',
        justification: 'Investigated in the durable associative memory engine of AMP.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-004',
      publicClaim:
        'We model memory not as a static flat text buffer, but as a multi-tier repository of latent impressions that consolidate across sessions and activate contextually.',
      nonClaims: [
        'We do NOT claim vector embeddings are identical to yogic saṃskāras.',
        'We do NOT claim machine memory solves the biological mystery of human memory.',
      ],
    },
    'PHIL-007': {
      id: 'PHIL-007',
      term: 'Cittavṛtti Nirodha',
      transliteration: 'Cittavrtti Nirodha',
      tradition: 'YOGA',
      researchModule: '01.03 Cognition',
      visibilityTier: 'PUBLIC_SUPPORTING',
      classicalDefinition:
        'The systematic restraint and stabilization of chaotic cognitive fluctuations through disciplined attention, habituation, and noise reduction.',
      philosophicalQuestion:
        'How can a cognitive apparatus maintain focus and prevent degradation from internal and external noise?',
      nexusInterpretation:
        'Informs dynamic noise-filtering, attention focus stabilization, and entropy regularization in continuous reasoning loops.',
      nexusMapping: {
        target: 'Neural Attention Research',
        category: 'RESEARCH',
        justification:
          'Exploratory investigation into entropy regularization and drift suppression in deep transformers.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-011',
      publicClaim:
        'We investigate attention-stabilization and noise-suppression mechanisms to prevent drift and divergence during extended inference loops.',
      nonClaims: [
        'We do NOT claim AI algorithms practice meditation or achieve spiritual samādhi.',
      ],
    },
    'PHIL-008': {
      id: 'PHIL-008',
      term: 'Prakṛti Functionalism',
      transliteration: 'Prakrti Functionalism',
      tradition: 'SAMKHYA',
      researchModule: '01.04 Agency',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The radical dualist distinction between Prakṛti (the unconscious, dynamic, physical substrate that performs all cognitive, logical, and computational functions) and Puruṣa (the passive witness consciousness).',
      philosophicalQuestion:
        'Can cognition, intelligence, decision-making, and logical analysis operate entirely within unconscious physical matter without requiring conscious feeling?',
      nexusInterpretation:
        'Sāṃkhya provides a rigorous philosophical justification for modern AI functionalism: computational systems can execute sophisticated reasoning, planning, and goal resolution entirely within physical substrates (Prakṛti) without requiring or possessing phenomenal sentience (Puruṣa).',
      hypothesisId: 'HYP-PHIL-005',
      nexusMapping: {
        target: 'Nexus LAB AI Institutional Philosophy',
        category: 'RESEARCH',
        justification:
          'Forms the fundamental ontological boundary separating computational capability from phenomenal sentience.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'FORMALIZED',
        prototypeImplementation: 'NOT_APPLICABLE',
        productionBenchmark: 'NOT_APPLICABLE',
      },
      claimId: 'CLAIM-PHIL-005',
      publicClaim:
        'We maintain that artificial intelligence is an advanced material computation substrate—capable of sophisticated reasoning and decision-making while remaining completely devoid of subjective sentience or phenomenal consciousness.',
      nonClaims: [
        'We do NOT claim AI systems have souls, minds, feelings, or inner subjective lives.',
        'We do NOT claim AI sentience is possible or desirable.',
      ],
    },
    'PHIL-009': {
      id: 'PHIL-009',
      term: 'Prayatna Volition Chains',
      transliteration: 'Prayatna Volition Chains',
      tradition: 'NYAYA',
      researchModule: '01.04 Agency',
      visibilityTier: 'DEEP_RESEARCH',
      classicalDefinition:
        'The causal sequence governing action: valid cognition (jñāna) generating desire/aversion (icchā/dveṣa), leading to conscious volition (prayatna), resulting in motor execution (kṛti).',
      philosophicalQuestion:
        'What constitutes the causal bridge between understanding a state and executing an action?',
      nexusInterpretation:
        'Formalizes goal-directed agent execution pipelines where plan formulation must explicitly lead to verified execution traces.',
      nexusMapping: {
        target: 'Agent Execution Middleware',
        category: 'RESEARCH',
        justification: 'Underlying causal model for multi-step agent planning routines.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      nonClaims: ['We do NOT claim software agents possess biological or moral free will.'],
    },
    'PHIL-010': {
      id: 'PHIL-010',
      term: 'Svātantrya & Vimarśa',
      transliteration: 'Svatantrya & Vimarsa',
      tradition: 'PRATYABHIJNA_KASHMIR_SAIVISM',
      researchModule: '01.04 Agency',
      visibilityTier: 'DEEP_RESEARCH',
      classicalDefinition:
        'Autonomous reflective agency (svātantrya) characterized by dynamic self-recognition and self-monitoring (vimarśa).',
      philosophicalQuestion:
        'What distinguishes genuine reflective agency from passive mechanical determinism?',
      nexusInterpretation:
        'Conceptual model for meta-cognitive self-monitoring loops where an agent continuously evaluates its internal execution state against goal constraints.',
      nexusMapping: {
        target: 'Self-Monitoring Research',
        category: 'ANALOGY',
        justification:
          'High-level conceptual correspondence for supervisory agentic feedback loops.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      nonClaims: [
        'We do NOT claim computational self-monitoring constitutes divine or spiritual self-realization.',
      ],
    },
    'PHIL-011': {
      id: 'PHIL-011',
      term: 'Svadharma & Sāmānya-Dharma',
      transliteration: 'Svadharma & Samanya-Dharma',
      tradition: 'DHARMA_SASTRAS',
      researchModule: '01.05 Responsibility',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The vital distinction between Sāmānya-Dharma (universal, invariant ethical boundaries such as non-injury and truthfulness) and Svadharma (highly specific, contextual duties determined by an agent’s precise role, state, and domain).',
      philosophicalQuestion:
        'How can an agent act responsibly when universal rules are too broad to provide actionable guidance in specialized, localized contexts?',
      nexusInterpretation:
        'AI safety cannot rely solely on generic global system prompts. Robust governance requires combining invariant global bounds with strict, role-specific operational constraints (svadharma) tailored to each agent’s domain boundary.',
      hypothesisId: 'HYP-PHIL-006',
      nexusMapping: {
        target: 'RTA-GUARD',
        category: 'RESEARCH',
        justification: 'Evaluated in the role-scoped safety policy compiler of RTA-GUARD.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-006',
      publicClaim:
        'Nexus LAB AI designs agent governance around dual constraint layers: immutable universal safety bounds combined with strictly scoped, role-specific operational parameters.',
      nonClaims: [
        'We do NOT claim ancient caste or social codes apply to artificial intelligence.',
        'We do NOT claim machine safety constraints constitute cosmic spiritual morality.',
      ],
    },
    'PHIL-012': {
      id: 'PHIL-012',
      term: 'Dharma-Saṅkaṭa',
      transliteration: 'Dharma-Sankata',
      tradition: 'PURVA_MIMAMSA',
      researchModule: '01.05 Responsibility',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'A structural dilemma (dharma-saṅkaṭa) where two or more valid, authoritative normative injunctions conflict directly in an empirical situation, requiring hierarchical priority principles to resolve.',
      philosophicalQuestion:
        'How should an agent decide when two fundamental duties are mutually exclusive in a real-world edge case?',
      nexusInterpretation:
        'Real-world autonomous AI systems inevitably encounter conflicting objectives (e.g., latency vs verification depth, privacy vs transparency). System architectures must incorporate explicit, deterministic conflict-arbitration hierarchies.',
      hypothesisId: 'HYP-PHIL-007',
      nexusMapping: {
        target: 'RTA-GUARD',
        category: 'RESEARCH',
        justification: 'Investigated in the constraint-satisfaction middleware of RTA-GUARD.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-007',
      publicClaim:
        'We engineer explicit priority hierarchies and constraint arbitration matrices to resolve competing operational objectives in autonomous runtime environments.',
      nonClaims: [
        'We do NOT claim AI systems can resolve universal moral dilemmas perfectly.',
        'We do NOT claim algorithmic conflict resolution replaces human ethical responsibility.',
      ],
    },
    'PHIL-013': {
      id: 'PHIL-013',
      term: 'Adhikāra',
      transliteration: 'Adhikara',
      tradition: 'PURVA_MIMAMSA',
      researchModule: '01.05 Responsibility',
      visibilityTier: 'PUBLIC_PRIMARY',
      classicalDefinition:
        'The strict prerequisite qualification (adhikāra)—possessing the requisite competence, capability, mandate, and contextual authorization—before an agent is entitled or commanded to execute an action.',
      philosophicalQuestion:
        'Under what conditions is an agent actually authorized and competent to perform an action?',
      nexusInterpretation:
        'An autonomous agent must never be permitted to execute an external action or system call without pre-flight validation verifying its operational mandate, capability bounds, contextual safety clearance, and cryptographic authorization.',
      hypothesisId: 'HYP-PHIL-008',
      nexusMapping: {
        target: 'RTA-GUARD',
        category: 'DIRECT',
        justification: 'Implemented as the pre-flight gatekeeper middleware in RTA-GUARD.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'FORMALIZED',
        prototypeImplementation: 'IMPLEMENTED',
        productionBenchmark: 'REPORTED',
      },
      claimId: 'CLAIM-PHIL-008',
      publicClaim:
        'Autonomous actions must be bounded by rigorous pre-flight validation—ensuring an agent acts only within verified competence, contextual authorization, and safety clearances.',
      nonClaims: [
        'We do NOT claim authorization gating guarantees 100% exploit-proof software.',
        'We do NOT claim ritual qualification concepts translate directly to computer security.',
      ],
    },
    'PHIL-014': {
      id: 'PHIL-014',
      term: 'Syādvāda & Anekāntavāda',
      transliteration: 'Syadvada & Anekantavada',
      tradition: 'JAINA_SYADVADA',
      researchModule: '01.01 Source Traditions',
      visibilityTier: 'PUBLIC_SUPPORTING',
      classicalDefinition:
        'The seven-fold conditional truth predicate framework (saptabhaṅgī) asserting that propositions are conditionally valid relative to specific observational perspectives (nayas).',
      philosophicalQuestion:
        'How can complex, multifaceted truth values be modeled without collapsing into binary oversimplification?',
      nexusInterpretation:
        'Models uncertainty calibration and multi-perspective consensus protocols in distributed multi-agent networks operating under partial observability.',
      nexusMapping: {
        target: 'COSMOS',
        category: 'ANALOGY',
        justification:
          'Conceptual analogy for multi-perspective truth evaluation across high-latency orbital nodes.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      claimId: 'CLAIM-PHIL-012',
      publicClaim:
        'We explore multi-perspectival conditional logic to calibrate uncertainty and achieve robust consensus across distributed agents.',
      nonClaims: ['We do NOT claim Syādvāda replaces standard Bayesian probability theory.'],
    },
    'PHIL-015': {
      id: 'PHIL-015',
      term: 'Sphoṭa & Generative Syntax',
      transliteration: 'Sphota & Generative Syntax',
      tradition: 'VYAKARANA',
      researchModule: '01.01 Source Traditions',
      visibilityTier: 'DEEP_RESEARCH',
      classicalDefinition:
        'The holistic flash of semantic meaning (sphoṭa) and generative rule-based formal grammar (Pāṇinian sūtras).',
      philosophicalQuestion:
        'How do sequential linguistic tokens synthesize into instantaneous semantic comprehension?',
      nexusInterpretation:
        'Theoretical linguistics foundation for formal grammar grounding and compositional semantic parsing.',
      nexusMapping: {
        target: 'Formal Linguistics Research',
        category: 'ANALOGY',
        justification: 'Theoretical research reference for generative syntax models.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      nonClaims: ['We do NOT claim ancient grammarians anticipated modern large language models.'],
    },
    'PHIL-016': {
      id: 'PHIL-016',
      term: 'Anirvacanīya Indeterminacy',
      transliteration: 'Anirvacaniya Indeterminacy',
      tradition: 'ADVAITA_VEDANTA',
      researchModule: '01.02 Epistemology',
      visibilityTier: 'DEEP_RESEARCH',
      classicalDefinition:
        'The ontological category of the indeterminate—that which can neither be described as wholly real nor wholly unreal.',
      philosophicalQuestion:
        'How should a formal system categorize states that defy binary true/false categorization?',
      nexusInterpretation:
        'Models open-world unmodeled states and out-of-distribution inputs in autonomous systems.',
      nexusMapping: {
        target: 'Epistemic Uncertainty Research',
        category: 'RESEARCH',
        justification: 'Informs theoretical classification of out-of-distribution uncertainty.',
      },
      evidenceState: {
        philosophicalSource: 'DOCUMENTED',
        aiHypothesis: 'DOCUMENTED',
        prototypeImplementation: 'EXPERIMENTAL',
        productionBenchmark: 'UNKNOWN',
      },
      nonClaims: ['We do NOT claim machine uncertainty represents metaphysical illusion (Māyā).'],
    },
  },
  principles: [
    {
      id: 'PRIN-001',
      order: 1,
      title: 'Epistemic Source Grounding',
      sanskritAnchor: 'Pramāṇa',
      conceptRef: 'PHIL-001',
      philosophicalFoundation:
        'Knowledge is valid only when grounded in legitimate, uncontradicted means of cognition.',
      nexusInterpretation:
        'AI systems must explicitly distinguish direct observation, deductive inference, authoritative testimony, and uncertainty.',
      engineeringConsequence:
        'Epistemic source tagging on internal context tokens; auditable provenance graphs on all generated assertions.',
    },
    {
      id: 'PRIN-002',
      order: 2,
      title: 'Structured Empirical Justification',
      sanskritAnchor: 'Pañcāvayava',
      conceptRef: 'PHIL-002',
      philosophicalFoundation:
        'Deductive necessity must be explicitly corroborated by empirical instances and fallacy testing.',
      nexusInterpretation:
        'Chain-of-thought reasoning must not operate as an opaque black box; it must produce verifiable step-by-step proofs.',
      engineeringConsequence:
        'Five-phase justification pipelines with explicit grounding checks before assertion emission.',
    },
    {
      id: 'PRIN-003',
      order: 3,
      title: 'Material Cognitive Functionalism',
      sanskritAnchor: 'Prakṛti',
      conceptRef: 'PHIL-008',
      philosophicalFoundation:
        'Executive intelligence and logical computation operate entirely within physical matter without requiring conscious sentience.',
      nexusInterpretation:
        'AI systems can exhibit sophisticated reasoning while remaining purely unconscious computational tools.',
      engineeringConsequence:
        'Strict rejection of machine sentience claims; complete institutional focus on verifiable functional capability.',
    },
    {
      id: 'PRIN-004',
      order: 4,
      title: 'Multi-Tier Cognitive Decoupling',
      sanskritAnchor: 'Antaḥkaraṇa',
      conceptRef: 'PHIL-005',
      philosophicalFoundation:
        'The internal cognitive stack functions through distinct, specialized faculties (routing, self-frame, judgment, memory).',
      nexusInterpretation:
        'Autonomous agents require decoupled modular substrates rather than monolithic single-model architectures.',
      engineeringConsequence:
        'Modular systems architecture separating fast sensory relays, determinative solvers, and long-term memory stores.',
    },
    {
      id: 'PRIN-005',
      order: 5,
      title: 'Durable Latent Retrieval',
      sanskritAnchor: 'Saṃskāra & Smṛti',
      conceptRef: 'PHIL-006',
      philosophicalFoundation:
        'Experiences leave persistent latent impressions that reactivate upon contextual resonance.',
      nexusInterpretation:
        'Memory must not be treated as a flat context buffer; it must consolidate into structured latent repositories.',
      engineeringConsequence:
        'Multi-tier associative memory engines that mitigate catastrophic forgetting across extended operational horizons.',
    },
    {
      id: 'PRIN-006',
      order: 6,
      title: 'Contextual Role Boundaries',
      sanskritAnchor: 'Svadharma',
      conceptRef: 'PHIL-011',
      philosophicalFoundation:
        'True responsibility arises from localized role duties bounded by universal invariant constraints.',
      nexusInterpretation:
        'Safety cannot be guaranteed by generic prompts; it requires explicit, role-scoped behavioral invariant filters.',
      engineeringConsequence:
        'Hierarchical constraint compilers combining universal safety boundaries with domain-specific agent contracts.',
    },
    {
      id: 'PRIN-007',
      order: 7,
      title: 'Principled Conflict Arbitration',
      sanskritAnchor: 'Dharma-Saṅkaṭa',
      conceptRef: 'PHIL-012',
      philosophicalFoundation:
        'Normative dilemmas require explicit priority hierarchies to resolve competing obligations.',
      nexusInterpretation:
        'Autonomous systems must deterministically arbitrate conflicting runtime objectives (speed vs verification, privacy vs utility).',
      engineeringConsequence:
        'Deontic constraint matrices and hierarchical optimization filters embedded in execution middleware.',
    },
    {
      id: 'PRIN-008',
      order: 8,
      title: 'Pre-Flight Authorization Gating',
      sanskritAnchor: 'Adhikāra',
      conceptRef: 'PHIL-013',
      philosophicalFoundation:
        'Action is permissible only when an agent possesses verified competence, capacity, and mandate.',
      nexusInterpretation:
        'Autonomous agents must never execute external actions without pre-flight validation of permissions and safety boundaries.',
      engineeringConsequence:
        'Cryptographically signed capability-based authorization gates preceding all external tool invocations.',
    },
  ],
  claims: {
    'CLAIM-PHIL-001': {
      id: 'CLAIM-PHIL-001',
      conceptId: 'PHIL-001',
      claimText:
        'Nexus LAB AI investigates explicit distinctions between sources of knowledge (direct observation, deductive inference, authoritative testimony, and uncertainty) as an architectural foundation for verifiable AI reasoning.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-002': {
      id: 'CLAIM-PHIL-002',
      conceptId: 'PHIL-002',
      claimText:
        'We investigate five-phase structured inference pipelines that bind deductive steps directly to empirical instances and formal fallacy checks.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-003': {
      id: 'CLAIM-PHIL-003',
      conceptId: 'PHIL-005',
      claimText:
        'Nexus LAB AI structures cognitive systems into decoupled functional layers—separating dynamic sensory routing, determinative executive judgment, and persistent memory stores.',
      claimType: 'ARCHITECTURAL_INVARIANT',
      evidenceState: 'FORMALIZED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-004': {
      id: 'CLAIM-PHIL-004',
      conceptId: 'PHIL-006',
      claimText:
        'We model memory not as a static flat text buffer, but as a multi-tier repository of latent impressions that consolidate across sessions and activate contextually.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'EXPERIMENTAL',
      publicAllowed: true,
    },
    'CLAIM-PHIL-005': {
      id: 'CLAIM-PHIL-005',
      conceptId: 'PHIL-008',
      claimText:
        'We maintain that artificial intelligence is an advanced material computation substrate—capable of sophisticated reasoning and decision-making while remaining completely devoid of subjective sentience or phenomenal consciousness.',
      claimType: 'ARCHITECTURAL_INVARIANT',
      evidenceState: 'FORMALIZED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-006': {
      id: 'CLAIM-PHIL-006',
      conceptId: 'PHIL-011',
      claimText:
        'Nexus LAB AI designs agent governance around dual constraint layers: immutable universal safety bounds combined with strictly scoped, role-specific operational parameters.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-007': {
      id: 'CLAIM-PHIL-007',
      conceptId: 'PHIL-012',
      claimText:
        'We engineer explicit priority hierarchies and constraint arbitration matrices to resolve competing operational objectives in autonomous runtime environments.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-008': {
      id: 'CLAIM-PHIL-008',
      conceptId: 'PHIL-013',
      claimText:
        'Autonomous actions must be bounded by rigorous pre-flight validation—ensuring an agent acts only within verified competence, contextual authorization, and safety clearances.',
      claimType: 'ARCHITECTURAL_INVARIANT',
      evidenceState: 'IMPLEMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-009': {
      id: 'CLAIM-PHIL-009',
      conceptId: 'PHIL-003',
      claimText:
        'We explore dual epistemic validation regimes: pragmatic default execution balanced with rigorous extrinsic verification in critical decision paths.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-010': {
      id: 'CLAIM-PHIL-010',
      conceptId: 'PHIL-004',
      claimText:
        'We categorize and mitigate artificial intelligence errors through structured failure taxonomies distinguishing sensory mislocation from memory-retrieval confusion.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-011': {
      id: 'CLAIM-PHIL-011',
      conceptId: 'PHIL-007',
      claimText:
        'We investigate attention-stabilization and noise-suppression mechanisms to prevent drift and divergence during extended inference loops.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
    'CLAIM-PHIL-012': {
      id: 'CLAIM-PHIL-012',
      conceptId: 'PHIL-014',
      claimText:
        'We explore multi-perspectival conditional logic to calibrate uncertainty and achieve robust consensus across distributed agents.',
      claimType: 'NEXUS_RESEARCH_POSITION',
      evidenceState: 'DOCUMENTED',
      publicAllowed: true,
    },
  },
  hypotheses: {
    'HYP-PHIL-001': {
      id: 'HYP-PHIL-001',
      conceptId: 'PHIL-001',
      title: 'Epistemic Gating Hypothesis',
      hypothesisStatement:
        'AI architectures enforcing strict source-typing on internal context tokens exhibit a statistically significant reduction in hallucination rates compared to undifferentiated auto-regressive context buffers.',
      status: 'HYPOTHESIS',
      evidenceState: 'DOCUMENTED',
    },
    'HYP-PHIL-002': {
      id: 'HYP-PHIL-002',
      conceptId: 'PHIL-002',
      title: 'Structured Justification Hypothesis',
      hypothesisStatement:
        'Enforcing five-step empirical inference trees on reasoning agents prevents ungrounded tautological drift and produces verifiable decision graphs.',
      status: 'HYPOTHESIS',
      evidenceState: 'DOCUMENTED',
    },
    'HYP-PHIL-003': {
      id: 'HYP-PHIL-003',
      conceptId: 'PHIL-005',
      title: 'Decoupled Cognitive Stacking Hypothesis',
      hypothesisStatement:
        'Architectures that isolate fast token routing from determinative executive judgment and durable memory access achieve higher task completion stability in multi-turn environments.',
      status: 'HYPOTHESIS',
      evidenceState: 'FORMALIZED',
    },
    'HYP-PHIL-004': {
      id: 'HYP-PHIL-004',
      conceptId: 'PHIL-006',
      title: 'Latent Trace Memory Hypothesis',
      hypothesisStatement:
        'Consolidating episodic logs into dual-tier latent semantic indices prevents context-window saturation and enables durable long-horizon retrieval.',
      status: 'HYPOTHESIS',
      evidenceState: 'DOCUMENTED',
    },
    'HYP-PHIL-005': {
      id: 'HYP-PHIL-005',
      conceptId: 'PHIL-008',
      title: 'Material Substrate Functionalism',
      hypothesisStatement:
        'High-level intelligence, self-monitoring, and error correction do not require artificial consciousness or biological substrates.',
      status: 'CONJECTURE',
      evidenceState: 'FORMALIZED',
    },
    'HYP-PHIL-006': {
      id: 'HYP-PHIL-006',
      conceptId: 'PHIL-011',
      title: 'Role-Specific Constraint Hypothesis',
      hypothesisStatement:
        'Multi-agent networks governed by explicit, role-scoped behavioral invariant filters exhibit fewer security policy violations than networks relying on monolithic global safety prompts.',
      status: 'HYPOTHESIS',
      evidenceState: 'DOCUMENTED',
    },
    'HYP-PHIL-007': {
      id: 'HYP-PHIL-007',
      conceptId: 'PHIL-012',
      title: 'Hierarchical Dilemma Resolution Hypothesis',
      hypothesisStatement:
        'Autonomous middleware incorporating formal deontic priority matrices resolves conflicting runtime constraints with lower operational failure rates than unconstrained heuristic agents.',
      status: 'HYPOTHESIS',
      evidenceState: 'DOCUMENTED',
    },
    'HYP-PHIL-008': {
      id: 'HYP-PHIL-008',
      conceptId: 'PHIL-013',
      title: 'Pre-Flight Authorization Gating Hypothesis',
      hypothesisStatement:
        'Cryptographically signed, capability-based pre-execution filters (adhikāra-checks) eliminate unauthorized tool-invocation exploits in autonomous agent workflows.',
      status: 'HYPOTHESIS',
      evidenceState: 'FORMALIZED',
    },
  },
  quarantinedClaims: [
    {
      id: 'QC-AUTH-001',
      claim: 'Ancient Indian scriptures contain blueprints for modern AI.',
      quarantineReason:
        'Gross historical anachronism. Ancient texts analyzed human cognition; AI translation is purely a modern hypothesis.',
      violatesInvariant: 'Constitutional Invariant 1 (Strict Historical Attribution)',
    },
    {
      id: 'QC-AUTH-002',
      claim: 'Nexus LAB AI has created or will create conscious machines.',
      quarantineReason:
        'Violates Sāṃkhya material functionalism and empirical truth. AI is unconscious material computation (Prakṛti).',
      violatesInvariant: 'Constitutional Invariant 1 & 4 (Material Substrate Functionalism)',
    },
    {
      id: 'QC-AUTH-003',
      claim: 'Dharma is simply a Sanskrit word for corporate AI safety.',
      quarantineReason:
        'Conceptual overcompression. Dharma is a profound contextual duty architecture, not a narrow compliance patch.',
      violatesInvariant: 'Constitutional Invariant 3 (Layer Non-Collapse)',
    },
    {
      id: 'QC-AUTH-004',
      claim: 'NALA is an exact software implementation of the Nyāya Sūtras.',
      quarantineReason:
        'False equivalence. NALA is a modern software engine; Nyāya provides formal epistemological inspiration.',
      violatesInvariant: 'Constitutional Invariant 1 & 3 (Layer Non-Collapse)',
    },
    {
      id: 'QC-AUTH-005',
      claim: 'Nexus algorithms compute cosmic karma or spiritual destiny.',
      quarantineReason: 'Pseudoscientific mysticism. Invariant computation only.',
      violatesInvariant: 'Constitutional Invariant 4 (Empirical Humility)',
    },
  ],
};

// ============================================================================
// Public Selectors
// ============================================================================

export function getPublicPrimaryConcepts(): PhilosophyConcept[] {
  return Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).filter(
    (c) => c.visibilityTier === 'PUBLIC_PRIMARY'
  );
}

export function getPublicSupportingConcepts(): PhilosophyConcept[] {
  return Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).filter(
    (c) => c.visibilityTier === 'PUBLIC_SUPPORTING'
  );
}

export function getDeepResearchConcepts(): PhilosophyConcept[] {
  return Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).filter(
    (c) => c.visibilityTier === 'DEEP_RESEARCH'
  );
}

export function getPublicPhilosophyPrinciples(): PhilosophyPrinciple[] {
  return [...CANONICAL_PHILOSOPHY_REGISTRY.principles].sort((a, b) => a.order - b.order);
}

export function getAllPublicClaims(): PublicClaim[] {
  return Object.values(CANONICAL_PHILOSOPHY_REGISTRY.claims).filter((c) => c.publicAllowed);
}

export function getQuarantinedClaims(): QuarantinedClaim[] {
  return [...CANONICAL_PHILOSOPHY_REGISTRY.quarantinedClaims];
}
