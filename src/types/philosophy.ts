/**
 * Nexus LAB AI — Canonical Philosophy Types & Epistemic Domain Model
 * Phase 04E.3 — Machine-Enforceable Epistemic Constitution
 */

export type PhilosophicalTradition =
  | 'NYAYA'
  | 'NAVYA_NYAYA'
  | 'SAMKHYA'
  | 'YOGA'
  | 'ADVAITA_VEDANTA'
  | 'PURVA_MIMAMSA'
  | 'DHARMA_SASTRAS'
  | 'JAINA_SYADVADA'
  | 'VYAKARANA'
  | 'PRATYABHIJNA_KASHMIR_SAIVISM'
  | 'MULTIPLE_DARSANAS';

export type PhilosophyEvidenceState =
  | 'DOCUMENTED'
  | 'FORMALIZED'
  | 'EXPERIMENTAL'
  | 'IMPLEMENTED'
  | 'REPORTED'
  | 'VERIFIED'
  | 'UNKNOWN'
  | 'NOT_APPLICABLE';

export type NexusMappingCategory = 'DIRECT' | 'RESEARCH' | 'ANALOGY' | 'NAMING' | 'NONE';

export type PhilosophyVisibilityTier =
  'PUBLIC_PRIMARY' | 'PUBLIC_SUPPORTING' | 'DEEP_RESEARCH' | 'QUARANTINED';

export type ConceptId =
  | 'PHIL-001'
  | 'PHIL-002'
  | 'PHIL-003'
  | 'PHIL-004'
  | 'PHIL-005'
  | 'PHIL-006'
  | 'PHIL-007'
  | 'PHIL-008'
  | 'PHIL-009'
  | 'PHIL-010'
  | 'PHIL-011'
  | 'PHIL-012'
  | 'PHIL-013'
  | 'PHIL-014'
  | 'PHIL-015'
  | 'PHIL-016';

export type ClaimId =
  | 'CLAIM-PHIL-001'
  | 'CLAIM-PHIL-002'
  | 'CLAIM-PHIL-003'
  | 'CLAIM-PHIL-004'
  | 'CLAIM-PHIL-005'
  | 'CLAIM-PHIL-006'
  | 'CLAIM-PHIL-007'
  | 'CLAIM-PHIL-008'
  | 'CLAIM-PHIL-009'
  | 'CLAIM-PHIL-010'
  | 'CLAIM-PHIL-011'
  | 'CLAIM-PHIL-012';

export type HypothesisId =
  | 'HYP-PHIL-001'
  | 'HYP-PHIL-002'
  | 'HYP-PHIL-003'
  | 'HYP-PHIL-004'
  | 'HYP-PHIL-005'
  | 'HYP-PHIL-006'
  | 'HYP-PHIL-007'
  | 'HYP-PHIL-008';

export type QuarantinedClaimId =
  'QC-AUTH-001' | 'QC-AUTH-002' | 'QC-AUTH-003' | 'QC-AUTH-004' | 'QC-AUTH-005';

export interface MultiDimensionalEvidence {
  philosophicalSource: PhilosophyEvidenceState;
  aiHypothesis: PhilosophyEvidenceState;
  prototypeImplementation: PhilosophyEvidenceState;
  productionBenchmark: PhilosophyEvidenceState;
}

export interface PhilosophyConcept {
  id: ConceptId;
  term: string;
  transliteration: string;
  tradition: PhilosophicalTradition;
  researchModule: string;
  visibilityTier: PhilosophyVisibilityTier;
  classicalDefinition: string;
  philosophicalQuestion: string;
  nexusInterpretation: string;
  hypothesisId?: HypothesisId;
  nexusMapping: {
    target: string;
    category: NexusMappingCategory;
    justification: string;
  };
  evidenceState: MultiDimensionalEvidence;
  claimId?: ClaimId;
  publicClaim?: string;
  nonClaims: string[];
}

export interface PhilosophyPrinciple {
  id: string;
  order: number;
  title: string;
  sanskritAnchor: string;
  conceptRef: ConceptId;
  philosophicalFoundation: string;
  nexusInterpretation: string;
  engineeringConsequence: string;
}

export interface PublicClaim {
  id: ClaimId;
  conceptId: ConceptId;
  claimText: string;
  claimType: 'NEXUS_RESEARCH_POSITION' | 'ARCHITECTURAL_INVARIANT';
  evidenceState: PhilosophyEvidenceState;
  publicAllowed: boolean;
}

export interface AIHypothesis {
  id: HypothesisId;
  conceptId: ConceptId;
  title: string;
  hypothesisStatement: string;
  status: 'HYPOTHESIS' | 'CONJECTURE';
  evidenceState: PhilosophyEvidenceState;
}

export interface QuarantinedClaim {
  id: QuarantinedClaimId;
  claim: string;
  quarantineReason: string;
  violatesInvariant: string;
}

export interface CanonicalPhilosophyRegistry {
  metadata: {
    version: string;
    lockedDate: string;
    epistemicAuthority: string;
    totalConcepts: number;
    publicPrimaryCount: number;
    publicSupportingCount: number;
    deepResearchCount: number;
    principlesCount: number;
    claimsCount: number;
    hypothesesCount: number;
    quarantinedCount: number;
  };
  identity: {
    declaration: string;
    mandate: string;
  };
  concepts: Record<ConceptId, PhilosophyConcept>;
  principles: PhilosophyPrinciple[];
  claims: Record<ClaimId, PublicClaim>;
  hypotheses: Record<HypothesisId, AIHypothesis>;
  quarantinedClaims: QuarantinedClaim[];
}
