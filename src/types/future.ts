/**
 * Nexus LAB AI — Canonical Future Types & Domain Model
 * Phase 04F.2 — Machine-Enforceable Forward Trajectory Constitution
 */

export type FutureHorizon = 'NEAR' | 'MEDIUM' | 'LONG';

export type FutureClaimType =
  | 'CURRENT_CAPABILITY'
  | 'RESEARCH_DIRECTION'
  | 'EXPLORATION'
  | 'OPEN_PROBLEM'
  | 'FUTURE_DIRECTION'
  | 'LONG_HORIZON'
  | 'ASPIRATION'
  | 'UNKNOWN';

export type FutureEvidenceLevel =
  'VERIFIED' | 'REPORTED' | 'DOCUMENTED' | 'THEORETICAL' | 'UNVERIFIED';

export type DirectionId =
  'FDIR-001' | 'FDIR-002' | 'FDIR-003' | 'FDIR-004' | 'FDIR-005' | 'FDIR-006';

export type ProblemId =
  'FPROB-001' | 'FPROB-002' | 'FPROB-003' | 'FPROB-004' | 'FPROB-005' | 'FPROB-006';

export interface FutureDirection {
  id: DirectionId;
  title: string;
  tagline: string;
  originAnchor: string;
  rationale: string;
  currentFoundation: string[];
  futureWork: string[];
  horizon: FutureHorizon;
  horizonTimeframe: string;
  epistemicStatus: FutureClaimType;
  evidenceLevel: FutureEvidenceLevel;
  nonClaims: string[];
  sourceRefs: string[];
}

export interface OpenProblem {
  id: ProblemId;
  title: string;
  domain: string;
  bottleneck: string;
  technicalImplication: string;
  investigationApproach: string;
  status: 'OPEN_INVESTIGATION';
  sourceRefs: string[];
}

export interface HorizonPlan {
  horizon: FutureHorizon;
  timeframe: string;
  focusTitle: string;
  nature: string;
  initiatives: string[];
  antiPredictionConstraint: string;
}

export interface LongHorizonVision {
  title: string;
  statement: string;
  principles: string[];
  cosmosFirewall: {
    programId: 'PROG-004';
    nature: 'Theoretical Extreme-Environment Operating System';
    status: 'LONG_HORIZON';
    evidence: 'DOCUMENTED';
    explicitNegativeBoundaries: string[];
  };
}

export interface FutureEvolutionNode {
  id: string;
  tier: 'FOUNDATION' | 'CAPABILITY' | 'DISTRIBUTED' | 'HORIZON';
  title: string;
  description: string;
  conceptualAncestors: string[];
}

export interface QuarantinedFutureClaim {
  id: string;
  rawStatement: string;
  quarantineReason: string;
  correctionRequirement: string;
}

export interface FutureContentModel {
  metadata: {
    version: string;
    lastUpdated: string;
    classification: string;
    authorityDocument: string;
  };
  thesis: {
    statement: string;
    derivationSteps: {
      step: string;
      description: string;
    }[];
  };
  directions: FutureDirection[];
  openProblems: OpenProblem[];
  horizons: Record<FutureHorizon, HorizonPlan>;
  vision: LongHorizonVision;
  evolutionNodes: FutureEvolutionNode[];
  nonClaims: string[];
  quarantinedClaims: QuarantinedFutureClaim[];
}
