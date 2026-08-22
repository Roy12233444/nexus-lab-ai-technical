/**
 * Nexus LAB AI — Challenge Content Validation Engine
 * Phase 04G.2 — Machine-Enforceable Problem Frontier Invariant Enforcer
 */

import {
  ChallengeContentModel,
  ChallengeId,
  ChallengeValidationResult,
  PressureDimension,
  ChallengeEvidenceLevel,
} from '../../types/challenge';

export const CANONICAL_CHALLENGE_IDS: ChallengeId[] = [
  'CH-001',
  'CH-002',
  'CH-003',
  'CH-004',
  'CH-005',
  'CH-006',
  'CH-007',
  'CH-008',
];

export const CANONICAL_PRESSURE_DIMENSIONS: PressureDimension[] = [
  'TIME',
  'UNCERTAINTY',
  'FAILURE',
  'SCALE',
  'RESOURCE_LIMITS',
  'RESPONSIBILITY',
  'ENVIRONMENT_SHIFT',
];

export const CANONICAL_EVIDENCE_LEVELS: ChallengeEvidenceLevel[] = [
  'VERIFIED',
  'REPORTED',
  'DOCUMENTED',
  'EXPERIMENTAL',
  'THEORETICAL',
  'UNVERIFIED',
];

export const PROHIBITED_MARKETING_TERMS = [
  'guaranteed enterprise solution',
  'turnkey commercial product',
  '100% solved',
  'zero-risk autonomous',
  'commercial turnkey',
  'market-leading feature',
  'completely eliminated hallucination',
  'foolproof ai agent',
];

/**
 * Validates a ChallengeContentModel against all canonical systems engineering invariants.
 */
export function validateChallengeContent(
  content: ChallengeContentModel
): ChallengeValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Thesis Validation
  if (
    !content.thesis ||
    !content.thesis.statement ||
    content.thesis.statement.trim().length === 0
  ) {
    errors.push('Thesis statement is missing or empty.');
  }

  if (!content.thesis.derivationSteps || content.thesis.derivationSteps.length < 3) {
    errors.push('Thesis must contain at least 3 derivation steps.');
  }

  // 2. Canonical Completeness (RULE-002)
  const challengeKeys = Object.keys(content.challenges || {}) as ChallengeId[];
  if (challengeKeys.length !== CANONICAL_CHALLENGE_IDS.length) {
    errors.push(
      `Expected exactly ${CANONICAL_CHALLENGE_IDS.length} canonical challenges, found ${challengeKeys.length}.`
    );
  }

  // 3. ID Integrity & Coverage (RULE-001)
  for (const canonicalId of CANONICAL_CHALLENGE_IDS) {
    if (!content.challenges[canonicalId]) {
      errors.push(`Missing canonical challenge record: ${canonicalId}`);
    }
  }

  for (const key of challengeKeys) {
    if (!CANONICAL_CHALLENGE_IDS.includes(key)) {
      errors.push(`Unrecognized non-canonical challenge ID detected: ${key}`);
    }
  }

  // 4. Pressure Dimension Integrity (RULE-003)
  const pressureKeys = Object.keys(content.pressureDimensions || {}) as PressureDimension[];
  for (const dim of CANONICAL_PRESSURE_DIMENSIONS) {
    if (!content.pressureDimensions[dim]) {
      errors.push(`Missing canonical pressure dimension definition: ${dim}`);
    }
  }

  for (const dim of pressureKeys) {
    if (!CANONICAL_PRESSURE_DIMENSIONS.includes(dim)) {
      errors.push(`Unrecognized non-canonical pressure dimension: ${dim}`);
    }
  }

  // 5. Individual Challenge Invariants (RULE-003, RULE-004, RULE-005, RULE-006, RULE-008)
  for (const id of challengeKeys) {
    const record = content.challenges[id];
    if (!record) continue;

    if (record.id !== id) {
      errors.push(`Record ID mismatch: key "${id}" does not match internal id "${record.id}".`);
    }

    if (!record.canonicalName || record.canonicalName.trim().length === 0) {
      errors.push(`Challenge ${id} has an empty canonical name.`);
    }

    if (!record.problemStatement || record.problemStatement.trim().length === 0) {
      errors.push(`Challenge ${id} has an empty problem statement.`);
    }

    if (
      !record.whyAutonomyEscalatesDifficulty ||
      record.whyAutonomyEscalatesDifficulty.trim().length === 0
    ) {
      errors.push(`Challenge ${id} lacks explanation of why autonomy escalates difficulty.`);
    }

    // Pressure vectors
    if (!record.pressureVectors || record.pressureVectors.length === 0) {
      errors.push(`Challenge ${id} must specify at least one pressure dimension.`);
    } else {
      for (const vector of record.pressureVectors) {
        if (!CANONICAL_PRESSURE_DIMENSIONS.includes(vector)) {
          errors.push(`Challenge ${id} references invalid pressure vector: ${vector}`);
        }
      }
    }

    // Technical dimensions
    if (!record.technicalDimensions || record.technicalDimensions.length === 0) {
      errors.push(`Challenge ${id} must specify at least one technical dimension.`);
    }

    // Known failure modes (RULE-006)
    if (!record.knownFailureModes || record.knownFailureModes.length === 0) {
      errors.push(`Challenge ${id} must specify at least one known failure mode.`);
    } else {
      for (const fm of record.knownFailureModes) {
        if (!fm.id || !fm.name || !fm.description) {
          errors.push(`Challenge ${id} contains an incomplete failure mode definition.`);
        }
      }
    }

    // Open research questions (RULE-006)
    if (!record.openResearchQuestions || record.openResearchQuestions.length === 0) {
      errors.push(`Challenge ${id} must specify at least one open research question.`);
    } else {
      for (const rq of record.openResearchQuestions) {
        if (!rq.id || !rq.question || !rq.scope) {
          errors.push(`Challenge ${id} contains an incomplete research question definition.`);
        }
      }
    }

    // Negative non-claims (RULE-005)
    if (!record.negativeNonClaims || record.negativeNonClaims.length === 0) {
      errors.push(`Challenge ${id} violates RULE-005: must define explicit negative non-claims.`);
    }

    // Evidence State (RULE-004)
    if (!CANONICAL_EVIDENCE_LEVELS.includes(record.evidenceState)) {
      errors.push(`Challenge ${id} has invalid evidence state: ${record.evidenceState}`);
    }

    // Marketing Firewall (RULE-008)
    const serializedText = JSON.stringify(record).toLowerCase();
    for (const forbidden of PROHIBITED_MARKETING_TERMS) {
      if (serializedText.includes(forbidden.toLowerCase())) {
        errors.push(
          `Challenge ${id} violates RULE-008 (Marketing Firewall): contains prohibited term "${forbidden}".`
        );
      }
    }
  }

  // 6. Cross-Track Mapping Validation (RULE-007)
  if (!content.crossTrackMappings || content.crossTrackMappings.length < 8) {
    errors.push('Cross-track mappings must cover at least all 8 canonical challenges.');
  } else {
    for (const map of content.crossTrackMappings) {
      if (!CANONICAL_CHALLENGE_IDS.includes(map.challengeId)) {
        errors.push(`Cross-track mapping references unknown challengeId: ${map.challengeId}`);
      }
      if (!map.primaryNexusProgram || !map.philosophyConceptId || !map.futureDirectionId) {
        errors.push(`Incomplete cross-track mapping for challenge ${map.challengeId}`);
      }
    }
  }

  // 7. Global Negative Boundaries
  if (!content.globalNegativeBoundaries || content.globalNegativeBoundaries.length < 4) {
    errors.push('Global negative boundaries must contain at least 4 authoritative statements.');
  }

  // 8. Quarantined Claims
  if (!content.quarantinedClaims || content.quarantinedClaims.length === 0) {
    warnings.push(
      'No quarantined claims registered; quarantine firewall is recommended to maintain explicit negative examples.'
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
