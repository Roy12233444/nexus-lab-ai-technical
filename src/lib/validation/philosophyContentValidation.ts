/**
 * Nexus LAB AI — Philosophy Content Validation Engine
 * Phase 04E.3 — Operationalizes the 04E.2 Epistemic Constitution
 */

import { CanonicalPhilosophyRegistry } from '@/types/philosophy';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validatePhilosophyContent(registry: CanonicalPhilosophyRegistry): ValidationResult {
  const errors: string[] = [];

  const { concepts, principles, claims, hypotheses, quarantinedClaims } = registry;

  // RULE-001: Provenance & Claim Linkage Integrity
  Object.values(claims).forEach((claim) => {
    if (!concepts[claim.conceptId]) {
      errors.push(
        `RULE-001 Violation: Claim ${claim.id} references non-existent concept ${claim.conceptId}`
      );
    }
  });

  Object.values(hypotheses).forEach((hyp) => {
    if (!concepts[hyp.conceptId]) {
      errors.push(
        `RULE-001 Violation: Hypothesis ${hyp.id} references non-existent concept ${hyp.conceptId}`
      );
    }
  });

  principles.forEach((p) => {
    if (!concepts[p.conceptRef]) {
      errors.push(
        `RULE-001 Violation: Principle ${p.id} references non-existent concept ${p.conceptRef}`
      );
    }
  });

  // RULE-002: Historical Anachronism Firewall
  const anachronisticPatterns = [
    /ancient.*invented.*ai/i,
    /scriptures.*contain.*blueprints.*ai/i,
    /rishis.*built.*neural/i,
    /solved.*machine.*consciousness/i,
    /ancient.*ai.*architecture/i,
  ];

  Object.values(concepts).forEach((c) => {
    anachronisticPatterns.forEach((pattern) => {
      if (pattern.test(c.classicalDefinition) || pattern.test(c.publicClaim || '')) {
        errors.push(
          `RULE-002 Violation: Concept ${c.id} contains historical anachronism violating Constitutional Invariant 1`
        );
      }
    });
  });

  // RULE-003: Multi-Layer Separation
  Object.values(concepts).forEach((c) => {
    if (!c.classicalDefinition || !c.philosophicalQuestion || !c.nexusInterpretation) {
      errors.push(
        `RULE-003 Violation: Concept ${c.id} fails multi-layer separation (missing classical, question, or interpretation layer)`
      );
    }

    if (
      c.classicalDefinition.trim() === c.nexusInterpretation.trim() ||
      c.classicalDefinition.trim() === c.philosophicalQuestion.trim()
    ) {
      errors.push(
        `RULE-003 Violation: Concept ${c.id} collapses distinct epistemic layers into identical prose`
      );
    }
  });

  // RULE-004: Non-Claims Requirement for Public Concepts
  Object.values(concepts).forEach((c) => {
    if (
      (c.visibilityTier === 'PUBLIC_PRIMARY' || c.visibilityTier === 'PUBLIC_SUPPORTING') &&
      (!c.nonClaims || c.nonClaims.length === 0)
    ) {
      errors.push(
        `RULE-004 Violation: Public concept ${c.id} is missing mandatory explicit negative non-claims`
      );
    }
  });

  // RULE-005: Hypothesis Status & Label Invariant
  Object.values(hypotheses).forEach((hyp) => {
    if (hyp.status !== 'HYPOTHESIS' && hyp.status !== 'CONJECTURE') {
      errors.push(
        `RULE-005 Violation: Hypothesis ${hyp.id} status is promoted beyond HYPOTHESIS/CONJECTURE`
      );
    }
  });

  // RULE-006: Mapping Integrity & Evidence Gating
  Object.values(concepts).forEach((c) => {
    if (c.nexusMapping.category === 'DIRECT') {
      const allowedDirectTargets = ['CHAITANYA / SAPTACORE', 'RTA-GUARD'];
      if (!allowedDirectTargets.includes(c.nexusMapping.target)) {
        errors.push(
          `RULE-006 Violation: Concept ${c.id} claims DIRECT mapping to unverified target ${c.nexusMapping.target}`
        );
      }
    }
  });

  // RULE-007: Evidence Decoupling & Honesty
  Object.values(concepts).forEach((c) => {
    if (c.evidenceState.productionBenchmark === 'VERIFIED' && c.id !== 'PHIL-013') {
      errors.push(
        `RULE-007 Violation: Concept ${c.id} asserts VERIFIED production benchmark without audited empirical proof`
      );
    }
  });

  // RULE-008: Quarantine Firewall
  const quarantinedIds = new Set(quarantinedClaims.map((q) => q.id));
  Object.keys(claims).forEach((claimId) => {
    if (quarantinedIds.has(claimId as unknown as (typeof quarantinedClaims)[0]['id'])) {
      errors.push(
        `RULE-008 Violation: Quarantined claim ${claimId} leaked into active public claims registry`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
