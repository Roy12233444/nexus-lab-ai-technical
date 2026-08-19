/**
 * Nexus LAB AI — Canonical Research Track Types & Epistemic Schema
 * Phase 04B.3 — Semantic Architecture & Invariant Enforcement
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

export type ResearchDomain =
  'AGENT_EXECUTION' | 'DURABLE_MEMORY' | 'AI_SAFETY_GOVERNANCE' | 'MULTI_ORBITAL_SYSTEMS';

export interface ResearchProjectIdentity {
  id: 'nala' | 'amp' | 'rta-guard' | 'cosmos';
  name: string;
  acronym: string;
  tagline: string;
  domain: ResearchDomain;
  problemStatement: string;
  coreMission: string;
}

export interface ResearchProjectState {
  maturity: MaturityState;
  evidence: EvidenceState;
  temporal: TemporalState;
  publicRelevance: PublicRelevanceState;
}

export interface ResearchSubsystem {
  name: string;
  role: string;
  description: string;
  maturity: MaturityState;
  evidence: EvidenceState;
}

export interface ResearchEvidenceRecord {
  claimId: string;
  statement: string;
  sourceDoc: string;
  authorityTier: AuthorityTier;
  evidenceLevel: EvidenceState;
  verificationBoundary: string;
}

export interface QuarantinedClaim {
  id: string;
  claim: string;
  quarantineReason: string;
  requiredVerification: string;
}

export interface ResearchProjectLimitations {
  boundedScope: string[];
  unresolvedQuestions: string[];
  quarantinedClaims: QuarantinedClaim[];
}

export interface ResearchProjectSummary {
  publicLead: string;
  technicalDossierSummary: string;
  publicationStatus: 'PUBLIC_NOW' | 'PUBLIC_WITH_CONTEXT' | 'QUARANTINED';
}

export interface ResearchProjectRelationship {
  targetProjectId: string;
  relationshipType: 'INFORMS' | 'COMPLEMENTS' | 'PARALLEL_TRACK';
  rationale: string;
  evidenceRef?: string;
}

export interface CanonicalResearchProject {
  identity: ResearchProjectIdentity;
  state: ResearchProjectState;
  provenance: ProvenanceRecord;
  architecture: {
    description: string;
    subsystems: ResearchSubsystem[];
  };
  evidenceRecords: ResearchEvidenceRecord[];
  limitations: ResearchProjectLimitations;
  publicSummary: ResearchProjectSummary;
  /**
   * Project Independence Boundary:
   * Defaults to empty array. No operational runtime dependency or
   * hierarchical coupling between research projects is assumed.
   */
  relationships: ResearchProjectRelationship[];
}

export interface CanonicalResearchRegistry {
  version: string;
  lastUpdated: string;
  governingDocument: string;
  projects: {
    nala: CanonicalResearchProject;
    amp: CanonicalResearchProject;
    rtaGuard: CanonicalResearchProject;
    cosmos: CanonicalResearchProject;
  };
}
