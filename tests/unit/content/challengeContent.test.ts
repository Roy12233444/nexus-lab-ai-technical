/**
 * Nexus LAB AI — Challenge Content & Epistemic Validation Test Suite
 * Phase 04G.2 — Machine-Enforceable Verification & Mutation Defense
 */

import { describe, it, expect } from 'vitest';
import {
  CANONICAL_CHALLENGE_CONTENT,
  getChallengeContent,
  getAllChallenges,
  getChallengeById,
  getChallengesByPressureDimension,
  getChallengesByEvidenceLevel,
  getPressureDimensions,
  getChallengeCrossTrackMappings,
  getGlobalChallengeNegativeBoundaries,
  getQuarantinedChallengeClaims,
} from '../../../src/content/challenge/challenge';
import {
  validateChallengeContent,
  CANONICAL_CHALLENGE_IDS,
  CANONICAL_PRESSURE_DIMENSIONS,
} from '../../../src/lib/validation/challengeContentValidation';
import { ChallengeContentModel, ChallengeId } from '../../../src/types/challenge';

describe('Phase 04G.2 — Authoritative Challenge Content Model & Invariant Engine', () => {
  it('validates that CANONICAL_CHALLENGE_CONTENT satisfies all validation rules with 0 errors', () => {
    const result = validateChallengeContent(CANONICAL_CHALLENGE_CONTENT);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(getChallengeContent().version).toBe('1.0.0-PROD-CHALLENGE');
  });

  it('verifies that exactly 8 canonical challenges are registered in strict sequential order', () => {
    const challenges = getAllChallenges();
    expect(challenges.length).toBe(8);
    expect(challenges.map((c) => c.id)).toEqual(CANONICAL_CHALLENGE_IDS);
  });

  it('verifies that all 7 canonical pressure dimensions are defined with governing challenges', () => {
    const dimensions = getPressureDimensions();
    expect(dimensions.length).toBe(7);
    expect(dimensions.map((d) => d.dimension)).toEqual(CANONICAL_PRESSURE_DIMENSIONS);

    dimensions.forEach((dim) => {
      expect(dim.governingChallenges.length).toBeGreaterThan(0);
      dim.governingChallenges.forEach((cid) => {
        expect(CANONICAL_CHALLENGE_IDS).toContain(cid);
      });
    });
  });

  it('verifies that every challenge specifies non-empty negative non-claims (RULE-005)', () => {
    const challenges = getAllChallenges();
    challenges.forEach((challenge) => {
      expect(challenge.negativeNonClaims.length).toBeGreaterThan(0);
      challenge.negativeNonClaims.forEach((claim) => {
        expect(claim.trim().length).toBeGreaterThan(10);
      });
    });
  });

  it('verifies that every challenge specifies known failure modes and open research questions (RULE-006)', () => {
    const challenges = getAllChallenges();
    challenges.forEach((challenge) => {
      expect(challenge.knownFailureModes.length).toBeGreaterThan(0);
      expect(challenge.openResearchQuestions.length).toBeGreaterThan(0);

      challenge.knownFailureModes.forEach((fm) => {
        expect(fm.id).toBeTruthy();
        expect(fm.name).toBeTruthy();
        expect(fm.description).toBeTruthy();
      });

      challenge.openResearchQuestions.forEach((rq) => {
        expect(rq.id).toBeTruthy();
        expect(rq.question).toBeTruthy();
        expect(rq.scope).toBeTruthy();
      });
    });
  });

  it('verifies selector getChallengeById for every valid canonical challenge ID', () => {
    CANONICAL_CHALLENGE_IDS.forEach((id) => {
      const challenge = getChallengeById(id);
      expect(challenge).toBeDefined();
      expect(challenge?.id).toBe(id);
    });
  });

  it('verifies selectors getChallengesByPressureDimension and getChallengesByEvidenceLevel', () => {
    const timeChallenges = getChallengesByPressureDimension('TIME');
    expect(timeChallenges.length).toBeGreaterThan(0);
    timeChallenges.forEach((c) => expect(c.pressureVectors).toContain('TIME'));

    const expChallenges = getChallengesByEvidenceLevel('EXPERIMENTAL');
    expect(expChallenges.length).toBeGreaterThan(0);
    expChallenges.forEach((c) => expect(c.evidenceState).toBe('EXPERIMENTAL'));
  });

  it('verifies that cross-track mappings link all 8 challenges to Programs, Philosophy, and Future', () => {
    const mappings = getChallengeCrossTrackMappings();
    expect(mappings.length).toBe(8);

    mappings.forEach((m) => {
      expect(CANONICAL_CHALLENGE_IDS).toContain(m.challengeId);
      expect(m.primaryNexusProgram).toBeTruthy();
      expect(m.philosophyConceptId).toBeTruthy();
      expect(m.futureDirectionId).toBeTruthy();
      expect(m.architecturalRole).toBeTruthy();
    });
  });

  it('verifies global negative boundaries and quarantined claims retrieval', () => {
    const boundaries = getGlobalChallengeNegativeBoundaries();
    expect(boundaries.length).toBeGreaterThanOrEqual(4);

    const quarantined = getQuarantinedChallengeClaims();
    expect(quarantined.length).toBeGreaterThanOrEqual(3);
  });
});

/* =========================================================================
   KILL-CRITIC ADVERSARIAL MUTATION GATES (KC-GMODEL-01 to KC-GMODEL-08)
   ========================================================================= */

describe('Phase 04G.2 — Kill-Critic Hostile Mutation Attack Gates', () => {
  it('KC-GMODEL-01: Rejects fake or non-canonical challenge injection', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    (mutated.challenges as Record<string, unknown>)['CH-999'] = {
      ...mutated.challenges['CH-001'],
      id: 'CH-999',
      canonicalName: 'Fake Autonomous Problem',
    };

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('CH-999'))).toBe(true);
  });

  it('KC-GMODEL-02: Rejects invalid or corrupt evidence states', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    (mutated.challenges['CH-008'] as unknown as { evidenceState: string }).evidenceState =
      'INVALID_PROOF_TIER';

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('invalid evidence state'))).toBe(true);
  });

  it('KC-GMODEL-03: Rejects deletion of negative non-claims (RULE-005)', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    mutated.challenges['CH-003'].negativeNonClaims = [];

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('RULE-005'))).toBe(true);
  });

  it('KC-GMODEL-04: Rejects injection of invalid pressure dimensions (RULE-003)', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    (mutated.challenges['CH-005'].pressureVectors as unknown as string[]).push('AGI_SUPREMACY');

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('AGI_SUPREMACY'))).toBe(true);
  });

  it('KC-GMODEL-05: Rejects challenge orphaning by deletion of open research questions', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    mutated.challenges['CH-001'].openResearchQuestions = [];

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('at least one open research question'))).toBe(true);
  });

  it('KC-GMODEL-06: Rejects corrupt cross-track mapping with unknown challengeId', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    mutated.crossTrackMappings[0].challengeId = 'CH-INVALID' as ChallengeId;

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('unknown challengeId: CH-INVALID'))).toBe(true);
  });

  it('KC-GMODEL-07: Blocks marketing hype injection via Marketing Firewall (RULE-008)', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    mutated.challenges['CH-004'].problemStatement +=
      ' This provides a guaranteed enterprise solution for zero-risk autonomous operations.';

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('RULE-008'))).toBe(true);
  });

  it('KC-GMODEL-08: Rejects empty problem statements or missing failure modes', () => {
    const mutated = JSON.parse(
      JSON.stringify(CANONICAL_CHALLENGE_CONTENT)
    ) as ChallengeContentModel;
    mutated.challenges['CH-002'].problemStatement = '';
    mutated.challenges['CH-002'].knownFailureModes = [];

    const result = validateChallengeContent(mutated);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.includes('empty problem statement'))).toBe(true);
    expect(result.errors.some((e) => e.includes('at least one known failure mode'))).toBe(true);
  });
});
