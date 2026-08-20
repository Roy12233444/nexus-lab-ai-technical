/**
 * Nexus LAB AI — Canonical Programs Track Types & Epistemic Schema
 * Phase 04D.3 — Semantic Architecture & Invariant Enforcement
 */

import {
  MaturityState,
  EvidenceState,
  TemporalState,
  PublicRelevanceState,
  AuthorityTier,
  ProvenanceRecord,
} from './overview';

export type {
  MaturityState,
  EvidenceState,
  TemporalState,
  PublicRelevanceState,
  AuthorityTier,
  ProvenanceRecord,
};

export type ProgramCategory =
  | 'AUTONOMOUS_EXECUTION'
  | 'COGNITIVE_MEMORY'
  | 'CONSTITUTIONAL_SAFETY'
  | 'DISTRIBUTED_SPACE'
  | 'REASONING_SYSTEMS'
  | 'HIGH_ASSURANCE_INFRA'
  | 'REASONING_COORDINATION'
  | 'APPLIED_SYSTEMS';

export type ProgramPublicState =
  'PUBLIC_PRIMARY' | 'PUBLIC_SUPPORTING' | 'PUBLIC_WITH_CONTEXT' | 'INTERNAL_HOLD' | 'QUARANTINED';

export type ProgramId =
  | 'PROG-NALA'
  | 'PROG-AMP'
  | 'PROG-RTA-GUARD'
  | 'PROG-COSMOS'
  | 'PROG-CHAITANYA-SAPTACORE'
  | 'PROG-PHANTAKSHA'
  | 'PROG-RFA'
  | 'PROG-GRAMVANI'
  | 'PROG-AGRIVERSE'
  | 'PROG-EMMA'
  | 'PROG-DEADRECKONING'
  | 'PROG-AETHERION'
  | 'PROG-LYRA'
  | 'PROG-SHADOWTRACE'
  | 'PROG-SYNAPTICODE-SPEC';

export type ProgramMaturityState =
  'CONCEPTUAL' | 'SPECIFIED' | 'PLANNED' | 'IMPLEMENTED' | 'EXPERIMENTAL' | 'NOT_STARTED';

export type ProgramEvidenceState =
  'UNKNOWN' | 'DOCUMENTED' | 'REPORTED' | 'OBSERVED' | 'VERIFIED' | 'UNVERIFIED';

export type ProgramTemporalState =
  'CURRENT' | 'HISTORICAL' | 'FUTURE' | 'RETROSPECTIVE' | 'DEFERRED' | 'UNKNOWN';

export interface ProgramIdentity {
  id: ProgramId;
  acronym: string;
  name: string;
  fullTitle: string;
  category: ProgramCategory;
  tagline: string;
  problemStatement: string;
  coreMission: string;
}

export interface ProgramState {
  maturity: ProgramMaturityState;
  evidence: ProgramEvidenceState;
  temporal: ProgramTemporalState;
  publicState: ProgramPublicState;
}

export interface ProgramClaim {
  id: string;
  programId: ProgramId;
  statement: string;
  sourceDoc: string;
  authorityTier: AuthorityTier;
  evidenceLevel: ProgramEvidenceState;
  verificationBoundary: string;
}

export interface QuarantinedProgramClaim {
  id: string;
  programId: ProgramId;
  claim: string;
  quarantineReason: string;
  requiredVerification: string;
  publicAllowed: false;
}

export interface CanonicalProgram {
  identity: ProgramIdentity;
  state: ProgramState;
  architecturalSubstrate: string[];
  claimIds: string[];
  boundaries: string[];
}

export interface CanonicalProgramsRegistry {
  identity: {
    name: string;
    positioning: string;
    declaration: string;
  };
  programs: Record<string, CanonicalProgram>;
  claims: Record<string, ProgramClaim>;
  quarantinedClaims: QuarantinedProgramClaim[];
}
