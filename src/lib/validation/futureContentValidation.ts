import {
  FutureContentModel,
  FutureDirection,
  FutureHorizon,
  FutureClaimType,
  FutureEvidenceLevel,
} from '@/types/future';

export interface FutureValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  auditedCount: {
    directions: number;
    openProblems: number;
    horizons: number;
    nonClaims: number;
    quarantined: number;
  };
}

const VALID_CLAIM_TYPES: FutureClaimType[] = [
  'CURRENT_CAPABILITY',
  'RESEARCH_DIRECTION',
  'EXPLORATION',
  'OPEN_PROBLEM',
  'FUTURE_DIRECTION',
  'LONG_HORIZON',
  'ASPIRATION',
  'UNKNOWN',
];

const VALID_HORIZONS: FutureHorizon[] = ['NEAR', 'MEDIUM', 'LONG'];

const VALID_EVIDENCE_LEVELS: FutureEvidenceLevel[] = [
  'VERIFIED',
  'REPORTED',
  'DOCUMENTED',
  'THEORETICAL',
  'UNVERIFIED',
];

/**
 * Validates the canonical Future Content Model against epistemic invariants.
 */
export function validateFutureContent(model: FutureContentModel): FutureValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Thesis validation
  if (!model.thesis || !model.thesis.statement || model.thesis.statement.trim().length === 0) {
    errors.push('Rule 01: Canonical Future Thesis statement is missing or empty.');
  }

  if (!model.thesis.derivationSteps || model.thesis.derivationSteps.length < 4) {
    errors.push('Rule 01b: Future Thesis must contain at least 4 derivation steps.');
  }

  // 2. Directions validation
  const directionIds = new Set<string>();
  model.directions.forEach((direction: FutureDirection) => {
    // Unique ID check
    if (directionIds.has(direction.id)) {
      errors.push(`Rule 02: Duplicate Future Direction ID detected: "${direction.id}"`);
    }
    directionIds.add(direction.id);

    // Valid Epistemic Status
    if (!VALID_CLAIM_TYPES.includes(direction.epistemicStatus)) {
      errors.push(
        `Rule 03: Invalid epistemic status "${direction.epistemicStatus}" on direction "${direction.id}"`
      );
    }

    // Valid Horizon
    if (!VALID_HORIZONS.includes(direction.horizon)) {
      errors.push(`Rule 04: Invalid horizon "${direction.horizon}" on direction "${direction.id}"`);
    }

    // Valid Evidence Level
    if (!VALID_EVIDENCE_LEVELS.includes(direction.evidenceLevel)) {
      errors.push(
        `Rule 05: Invalid evidence level "${direction.evidenceLevel}" on direction "${direction.id}"`
      );
    }

    // Non-claims enforcement
    if (!direction.nonClaims || direction.nonClaims.length === 0) {
      errors.push(
        `Rule 06: Direction "${direction.id}" must contain at least one explicit non-claim boundary.`
      );
    }

    // Provenance / Source refs enforcement
    if (!direction.sourceRefs || direction.sourceRefs.length === 0) {
      errors.push(
        `Rule 07: Direction "${direction.id}" is missing source references (provenance anchor).`
      );
    }

    // COSMOS Firewall Check
    if (direction.id === 'FDIR-006' || direction.title.toLowerCase().includes('orbital')) {
      if (direction.epistemicStatus === 'CURRENT_CAPABILITY') {
        errors.push(
          `Rule 08 (COSMOS Firewall): Extreme-environment / Orbital substrates cannot be classified as CURRENT_CAPABILITY.`
        );
      }
      if (direction.horizon !== 'LONG') {
        errors.push(
          `Rule 08b (COSMOS Firewall): Orbital substrates must be classified under LONG horizon.`
        );
      }
    }
  });

  // 3. Open Problems validation
  const problemIds = new Set<string>();
  model.openProblems.forEach((problem) => {
    if (problemIds.has(problem.id)) {
      errors.push(`Rule 09: Duplicate Open Problem ID detected: "${problem.id}"`);
    }
    problemIds.add(problem.id);

    if (!problem.bottleneck || problem.bottleneck.trim().length === 0) {
      errors.push(`Rule 09b: Open Problem "${problem.id}" has empty bottleneck description.`);
    }

    if (!problem.sourceRefs || problem.sourceRefs.length === 0) {
      errors.push(`Rule 09c: Open Problem "${problem.id}" lacks provenance source references.`);
    }
  });

  // 4. Horizons validation
  VALID_HORIZONS.forEach((h) => {
    const horizonPlan = model.horizons[h];
    if (!horizonPlan) {
      errors.push(`Rule 10: Missing horizon plan for "${h}" horizon.`);
    } else {
      if (
        !horizonPlan.antiPredictionConstraint ||
        horizonPlan.antiPredictionConstraint.trim().length === 0
      ) {
        errors.push(`Rule 10b: Horizon plan "${h}" lacks mandatory anti-prediction constraint.`);
      }
      if (!horizonPlan.initiatives || horizonPlan.initiatives.length === 0) {
        errors.push(`Rule 10c: Horizon plan "${h}" has no initiatives.`);
      }
    }
  });

  // 5. Long-Horizon Vision & COSMOS Firewall
  if (!model.vision || !model.vision.cosmosFirewall) {
    errors.push(
      'Rule 11: Long-Horizon Vision must contain explicit COSMOS firewall specification.'
    );
  } else {
    const fw = model.vision.cosmosFirewall;
    if (fw.status !== 'LONG_HORIZON' || fw.evidence !== 'DOCUMENTED') {
      errors.push(
        `Rule 11b: COSMOS firewall requires status LONG_HORIZON and evidence DOCUMENTED.`
      );
    }
    if (!fw.explicitNegativeBoundaries || fw.explicitNegativeBoundaries.length < 3) {
      errors.push(`Rule 11c: COSMOS firewall requires at least 3 explicit negative boundaries.`);
    }
  }

  // 6. Global Non-Claims
  if (!model.nonClaims || model.nonClaims.length < 5) {
    errors.push('Rule 12: Model must define at least 5 global negative boundaries / non-claims.');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    auditedCount: {
      directions: model.directions.length,
      openProblems: model.openProblems.length,
      horizons: Object.keys(model.horizons).length,
      nonClaims: model.nonClaims.length,
      quarantined: model.quarantinedClaims.length,
    },
  };
}
