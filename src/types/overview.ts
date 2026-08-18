/**
 * Nexus LAB AI — Canonical Overview & Epistemic State Type System
 * Phase 04A.3 — Semantic Architecture & Invariants
 */

export type MaturityState = 'CONCEPTUAL' | 'SPECIFIED' | 'PLANNED' | 'IMPLEMENTED' | 'EXPERIMENTAL';

export type EvidenceState = 'UNKNOWN' | 'DOCUMENTED' | 'REPORTED' | 'OBSERVED' | 'VERIFIED';

export type TemporalState = 'CURRENT' | 'HISTORICAL' | 'FUTURE' | 'UNKNOWN';

export type RelationshipType =
  'DEPENDS_ON' | 'INTEGRATES_WITH' | 'INFORMS' | 'RELATED_TO' | 'DERIVED_FROM';

export type RelationshipState = 'ESTABLISHED' | 'PROPOSED' | 'FUTURE' | 'UNKNOWN';

export type PublicRelevanceState =
  'PRIMARY' | 'SUPPORTING' | 'CONDITIONAL' | 'INTERNAL' | 'EXCLUDED';

export type AuthorityTier =
  | 'TIER_1_CONSTITUTIONAL'
  | 'TIER_2_ENGINEERING'
  | 'TIER_3_VERIFIED_EVIDENCE'
  | 'TIER_4_CURRENT_SPEC'
  | 'TIER_5_PORTFOLIO'
  | 'TIER_6_HISTORICAL'
  | 'TIER_7_UNVERIFIED';

export interface ProvenanceRecord {
  sourceId: string;
  sourceType: string;
  authorityTier: AuthorityTier;
  sourceLocation?: string;
  extractedAt: string;
  notes?: string;
}

export interface ClaimRecord {
  id: string;
  statement: string;
  provenance: ProvenanceRecord;
  temporalState: TemporalState;
  maturity: MaturityState;
  evidence: EvidenceState;
  publicRelevance: PublicRelevanceState;
  limitations?: string[];
}

export interface RelationshipRecord {
  source: string;
  target: string;
  type: RelationshipType;
  state: RelationshipState;
  evidenceRef?: string;
  notes?: string;
}

export interface ArchitectureNodeRecord {
  id: string;
  name: string;
  layer: 'ROOTS' | 'TRUNK' | 'BRANCHES' | 'FRUITS';
  purpose: string;
  maturity: MaturityState;
  evidence: EvidenceState;
  relatedPrograms: string[];
}

export interface ResearchProgramRecord {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  problem: string;
  purpose: string;
  architectureLayers: string[];
  currentState: string;
  maturity: MaturityState;
  evidence: EvidenceState;
  temporalState: TemporalState;
  publicRelevance: PublicRelevanceState;
  verifiedMilestones: string[];
  limitations: string[];
  openQuestions: string[];
}

export interface NexusIdentity {
  name: string;
  brandName: string;
  organizationType: string;
  positioning: string;
  tagline: string;
  missionStatement: string;
  boundaries: string[];
}

export interface NexusThesis {
  problemStatement: string;
  coreHypothesis: string;
  rationale: string;
  approach: string;
}

export interface InnovationEngineModel {
  definition: string;
  purpose: string;
  macroLifecycle: string[];
  microEngineeringLoop: string[];
  hierarchy: {
    roots: string[];
    trunk: string[];
    branches: string[];
    fruits: string[];
  };
}

export interface OverviewContentModel {
  metadata: {
    version: string;
    lastUpdated: string;
    classification: string;
  };
  identity: NexusIdentity;
  thesis: NexusThesis;
  innovationEngine: InnovationEngineModel;
  researchPrograms: ResearchProgramRecord[];
  architectureNodes: ArchitectureNodeRecord[];
  relationships: RelationshipRecord[];
  claims: ClaimRecord[];
}
