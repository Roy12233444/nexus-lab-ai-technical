/**
 * Nexus LAB AI — Canonical Challenge Types & Domain Model
 * Phase 04G.2 — Machine-Enforceable Problem Frontier Constitution
 */

export type ChallengeId =
  'CH-001' | 'CH-002' | 'CH-003' | 'CH-004' | 'CH-005' | 'CH-006' | 'CH-007' | 'CH-008';

export type PressureDimension =
  | 'TIME'
  | 'UNCERTAINTY'
  | 'FAILURE'
  | 'SCALE'
  | 'RESOURCE_LIMITS'
  | 'RESPONSIBILITY'
  | 'ENVIRONMENT_SHIFT';

export type ChallengeEvidenceLevel =
  'VERIFIED' | 'REPORTED' | 'DOCUMENTED' | 'EXPERIMENTAL' | 'THEORETICAL' | 'UNVERIFIED';

export interface FailureMode {
  id: string;
  name: string;
  description: string;
}

export interface ResearchQuestion {
  id: string;
  question: string;
  scope: string;
}

export interface ChallengeCrossTrackMapping {
  challengeId: ChallengeId;
  primaryNexusProgram: string;
  philosophyConceptId: string;
  philosophyConceptTitle: string;
  futureDirectionId: string;
  futureDirectionTitle: string;
  architecturalRole: string;
}

export interface ChallengeRecord {
  id: ChallengeId;
  canonicalName: string;
  shortHeadline: string;
  pressureVectors: PressureDimension[];
  problemStatement: string;
  whyAutonomyEscalatesDifficulty: string;
  technicalDimensions: string[];
  knownFailureModes: FailureMode[];
  currentNexusRelevance: string;
  relatedPrograms: string[];
  existingResearchEvidence: string;
  openResearchQuestions: ResearchQuestion[];
  negativeNonClaims: string[];
  evidenceState: ChallengeEvidenceLevel;
  sourceRefs: string[];
}

export interface PressureDimensionDefinition {
  dimension: PressureDimension;
  title: string;
  coreQuestion: string;
  description: string;
  governingChallenges: ChallengeId[];
}

export interface ChallengeThesis {
  statement: string;
  derivationSteps: {
    step: string;
    description: string;
  }[];
}

export interface QuarantinedChallengeClaim {
  id: string;
  rawStatement: string;
  quarantineReason: string;
  correctionRequirement: string;
}

export interface ChallengeContentModel {
  version: string;
  lastUpdated: string;
  thesis: ChallengeThesis;
  pressureDimensions: Record<PressureDimension, PressureDimensionDefinition>;
  challenges: Record<ChallengeId, ChallengeRecord>;
  crossTrackMappings: ChallengeCrossTrackMapping[];
  globalNegativeBoundaries: string[];
  quarantinedClaims: QuarantinedChallengeClaim[];
}

export interface ChallengeValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
