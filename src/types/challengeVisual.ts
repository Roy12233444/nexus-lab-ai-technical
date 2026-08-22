/**
 * Nexus LAB AI — Challenge Track Visual Design & Visual Registry Domain Types
 * Phase 04G.4 — Machine-Enforceable Visual Architecture
 */

import { ChallengeEvidenceLevel } from './challenge';

export type ChallengeVisualRole =
  | 'HERO_SYSTEM_PRESSURE'
  | 'PRESSURE_TOPOLOGY'
  | 'DIAGNOSTIC_CARD_GRID'
  | 'MECHANISTIC_DOSSIER'
  | 'CASCADE_SYSTEM_GRAPH'
  | 'DIAGNOSTIC_STRESS_MATRIX'
  | 'EDITORIAL_RESEARCH_DOCKET'
  | 'CROSS_TRACK_RELATIONSHIP_MATRIX'
  | 'EPISTEMIC_FIREWALL_BOUNDARY'
  | 'OPEN_FRONTIER_GATEWAY';

export type ChallengeVisualMode =
  | 'SYSTEM_VISUAL_HERO'
  | 'TOPOLOGY_DATA_VISUALIZATION'
  | 'CARD_GRID'
  | 'EXPANDABLE_DOSSIER'
  | 'DIRECTED_SYSTEM_GRAPH'
  | 'DATA_MATRIX'
  | 'EDITORIAL_DOCKET'
  | 'RELATIONSHIP_MATRIX'
  | 'EPISTEMIC_FIREWALL'
  | 'SYNTHESIS_GATEWAY';

export type ChallengeContainerGeometry =
  | 'HERO_FULL'
  | 'TOPOLOGY_CLUSTER'
  | 'GRID_4COL'
  | 'TABBED_DOSSIER'
  | 'FLOW_GRAPH'
  | 'DENSE_TABLE'
  | 'RESEARCH_CARDS'
  | 'RELATIONAL_GRID'
  | 'FIREWALL_BOX'
  | 'GATEWAY_CARDS';

export interface ChallengeResponsiveContract {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface ChallengeAccessibilityContract {
  ariaRole: string;
  textualEquivalentProvided: boolean;
  colorIndependenceEnforced: boolean;
  screenReaderSummary: string;
}

export interface ChallengeSectionVisualRule {
  sectionId: string;
  sectionOrder: number;
  visualRole: ChallengeVisualRole;
  visualMode: ChallengeVisualMode;
  hasDedicatedDiagram: boolean;
  hasEditorialAsset: boolean;
  containerGeometry: ChallengeContainerGeometry;
  responsiveBehavior: ChallengeResponsiveContract;
  accessibilityContract: ChallengeAccessibilityContract;
  designRationale: string;
  forbiddenVisualPatterns: string[];
}

export interface ChallengeEvidenceVisualConstraint {
  evidenceTier: ChallengeEvidenceLevel;
  badgeStyle: string;
  borderTreatment: string;
  visualConfidenceLevel: string;
  epistemicConstraint: string;
}

export interface ChallengeVisualRegistryModel {
  version: string;
  lastUpdated: string;
  sectionVisualRules: Record<string, ChallengeSectionVisualRule>;
  evidenceConstraints: Record<ChallengeEvidenceLevel, ChallengeEvidenceVisualConstraint>;
  forbiddenVisualPatterns: string[];
}
