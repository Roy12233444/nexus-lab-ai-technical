/**
 * Nexus LAB AI — Canonical Technology Track Types & Epistemic Schema
 * Phase 04C.3 — Semantic Architecture & Invariant Enforcement
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

export type TechnologyDomainId =
  | 'reasoning'
  | 'agent_execution'
  | 'memory'
  | 'fault_tolerance'
  | 'safety_governance'
  | 'distributed_space';

export type TechnologySubstrateCategory =
  'NEXUS_INVENTION' | 'SUPPORTING_STACK' | 'EXTERNAL_SERVICE';

export type SpecificationState = 'SPECIFIED' | 'UNSPECIFIED';

export interface TechnologyState {
  maturity: MaturityState;
  specification: SpecificationState;
  evidence: EvidenceState;
  temporal: TemporalState;
  publicRelevance: PublicRelevanceState;
}

export interface TechnologyDomain {
  id: TechnologyDomainId;
  name: string;
  tagline: string;
  description: string;
  coreChallenges: string[];
  capabilityIds: string[];
}

export interface TechnologyCapability {
  id: string;
  domainId: TechnologyDomainId;
  name: string;
  description: string;
  technologyIds: string[];
  projectIds: string[];
}

export interface TechnologySubstrate {
  id: string;
  domainId: TechnologyDomainId;
  name: string;
  category: TechnologySubstrateCategory;
  description: string;
  state: TechnologyState;
  claimIds: string[];
}

export interface TechnologyProjectReference {
  id: string;
  name: string;
  acronym: string;
  role: string;
  domainId: TechnologyDomainId;
  relationship: 'REPRESENTATIVE' | 'SUPPORTING' | 'RESEARCH';
}

export interface TechnologyClaim {
  id: string;
  technologyId: string;
  statement: string;
  sourceDoc: string;
  authorityTier: AuthorityTier;
  evidenceLevel: EvidenceState;
  verificationBoundary?: string;
}

export interface QuarantinedTechnologyClaim {
  id: string;
  claim: string;
  quarantineReason: string;
  requiredVerification: string;
  publicAllowed: false;
}

export interface CanonicalTechnologyRegistry {
  identity: {
    name: string;
    positioning: string;
    declaration: string;
  };
  domains: Record<TechnologyDomainId, TechnologyDomain>;
  capabilities: Record<string, TechnologyCapability>;
  substrates: Record<string, TechnologySubstrate>;
  projects: Record<string, TechnologyProjectReference>;
  claims: Record<string, TechnologyClaim>;
  quarantinedClaims: QuarantinedTechnologyClaim[];
}
