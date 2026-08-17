/**
 * Nexus LAB AI — Evidence & Status Type Definitions
 * Epistemic maturity states decoupled from runtime operational states.
 */

export type EvidenceStatus = 'VERIFIED' | 'IMPLEMENTED' | 'EXPERIMENTAL' | 'HYPOTHESIS';

export type RuntimeStatus = 'ACTIVE' | 'PAUSED' | 'OFFLINE' | 'RESEARCH';

export interface EvidenceStatusMetadata {
  status: EvidenceStatus;
  label: string;
  shortLabel: string;
  description: string;
  badgeVariant: 'verified' | 'implemented' | 'experimental' | 'hypothesis';
  ariaLabel: string;
}

export interface EvidenceRecord {
  id: string;
  title: string;
  status: EvidenceStatus;
  claim: string;
  description: string;
  scope: string;
  evidenceSummary: string;
  limitations: string[];
  validationsCount?: number;
  relatedResearch?: string[];
  lastUpdated?: string;
}

export interface ValidationItem {
  id: string;
  evidenceId: string;
  name: string;
  type: 'benchmark' | 'unit_proof' | 'stress_test' | 'formal_verification' | 'empirical_run';
  result: 'passed' | 'partial' | 'inconclusive';
  metric?: string;
  verifiedAt: string;
}
