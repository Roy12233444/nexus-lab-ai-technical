/**
 * Nexus LAB AI — Semantic Invariant Validation for Research Track
 * Phase 04B.3 — Enforces rules derived from 04B.2 Authoritative Register
 */

import {
  CanonicalResearchRegistry,
  CanonicalResearchProject,
  ResearchEvidenceRecord,
} from '@/types/research';

export interface ResearchValidationError {
  rule: string;
  message: string;
  projectId?: string;
  claimId?: string;
}

export interface ResearchValidationResult {
  isValid: boolean;
  errors: ResearchValidationError[];
}

/**
 * Validates semantic invariants of the Research Track content model.
 */
export function validateResearchContent(
  registry: CanonicalResearchRegistry
): ResearchValidationResult {
  const errors: ResearchValidationError[] = [];
  const projects = Object.values(registry.projects);

  // RULE-001: Every project and evidence record must have complete provenance
  projects.forEach((project: CanonicalResearchProject) => {
    if (!project.provenance || !project.provenance.sourceId || !project.provenance.authorityTier) {
      errors.push({
        rule: 'RULE-001',
        message: `Project ${project.identity.id} is missing complete provenance metadata.`,
        projectId: project.identity.id,
      });
    }

    project.evidenceRecords.forEach((record: ResearchEvidenceRecord) => {
      if (!record.sourceDoc || !record.authorityTier || !record.claimId) {
        errors.push({
          rule: 'RULE-001',
          message: `Evidence record ${record.claimId} in ${project.identity.id} is missing provenance.`,
          projectId: project.identity.id,
          claimId: record.claimId,
        });
      }
    });
  });

  // RULE-002: VERIFIED evidence must have Tier 1–3 source authority
  projects.forEach((project: CanonicalResearchProject) => {
    project.evidenceRecords.forEach((record: ResearchEvidenceRecord) => {
      if (record.evidenceLevel === 'VERIFIED') {
        const isHighTier =
          record.authorityTier === 'TIER_1_CONSTITUTIONAL' ||
          record.authorityTier === 'TIER_2_ENGINEERING' ||
          record.authorityTier === 'TIER_3_VERIFIED_EVIDENCE';

        if (!isHighTier) {
          errors.push({
            rule: 'RULE-002',
            message: `Evidence claim ${record.claimId} in ${project.identity.id} is marked VERIFIED but lacks Tier 1-3 authority backing.`,
            projectId: project.identity.id,
            claimId: record.claimId,
          });
        }
      }
    });
  });

  // RULE-003: Quarantined claims cannot enter public canonical statements
  projects.forEach((project: CanonicalResearchProject) => {
    project.limitations.quarantinedClaims.forEach((qc) => {
      // Ensure quarantined claim is not in public lead
      if (project.publicSummary.publicLead.toLowerCase().includes(qc.claim.toLowerCase())) {
        errors.push({
          rule: 'RULE-003',
          message: `Quarantined claim ${qc.id} detected in public lead of ${project.identity.id}.`,
          projectId: project.identity.id,
          claimId: qc.id,
        });
      }
    });
  });

  // RULE-004: Project Independence Boundary — No unverified operational coupling
  projects.forEach((project: CanonicalResearchProject) => {
    project.relationships.forEach((rel) => {
      if (!rel.rationale || !rel.targetProjectId) {
        errors.push({
          rule: 'RULE-004',
          message: `Project ${project.identity.id} has invalid or unevidenced cross-project relationship.`,
          projectId: project.identity.id,
        });
      }
    });
  });

  // RULE-005: Subsystem evidence cannot promote unverified parent capabilities
  projects.forEach((project: CanonicalResearchProject) => {
    if (project.identity.id === 'cosmos') {
      const flightClaim = project.evidenceRecords.find((c) => c.claimId === 'CLM-COSMOS-002');
      if (flightClaim && flightClaim.evidenceLevel === 'VERIFIED') {
        errors.push({
          rule: 'RULE-005',
          message: `COSMOS cannot claim in-orbit flight deployment as VERIFIED.`,
          projectId: 'cosmos',
          claimId: 'CLM-COSMOS-002',
        });
      }
    }
  });

  // RULE-006: FUTURE temporal states cannot be marked IMPLEMENTED
  projects.forEach((project: CanonicalResearchProject) => {
    if (project.state.temporal === 'FUTURE' && project.state.maturity === 'IMPLEMENTED') {
      errors.push({
        rule: 'RULE-006',
        message: `Project ${project.identity.id} is marked FUTURE temporal state but claims IMPLEMENTED maturity.`,
        projectId: project.identity.id,
      });
    }
  });

  // RULE-007: Excluded claims cannot be marked PUBLIC_NOW
  projects.forEach((project: CanonicalResearchProject) => {
    if (
      project.state.publicRelevance === 'EXCLUDED' &&
      project.publicSummary.publicationStatus === 'PUBLIC_NOW'
    ) {
      errors.push({
        rule: 'RULE-007',
        message: `Project ${project.identity.id} is EXCLUDED but has PUBLIC_NOW publication status.`,
        projectId: project.identity.id,
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
