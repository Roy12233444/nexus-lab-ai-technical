/**
 * Nexus LAB AI — Challenge Page Architecture & Section Blueprint Test Suite
 * Phase 04G.3 — Machine-Enforceable Narrative & Layout Contract
 */

import { describe, it, expect } from 'vitest';
import {
  CHALLENGE_PAGE_BLUEPRINT,
  getChallengePageBlueprint,
  getChallengeSections,
  getChallengeSectionById,
  validateChallengeSectionCoverage,
} from '../../../src/content/challenge/sectionArchitecture';
import { CANONICAL_CHALLENGE_IDS } from '../../../src/lib/validation/challengeContentValidation';
import { getAllChallenges } from '../../../src/content/challenge/challenge';

describe('Phase 04G.3 — Challenge Page Architecture & Section Blueprint', () => {
  it('verifies that the blueprint defines exactly 10 canonical sections', () => {
    const blueprint = getChallengePageBlueprint();
    expect(blueprint.sections.length).toBe(10);
    expect(blueprint.pageId).toBe('challenge');
    expect(blueprint.route).toBe('/challenge');
    expect(CHALLENGE_PAGE_BLUEPRINT.sections.length).toBe(10);
  });

  it('KC-GPAGE-01: Verifies that every section ID is strictly unique with zero duplication', () => {
    const sections = getChallengeSections();
    const ids = sections.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
  });

  it('KC-GPAGE-02: Verifies that sections are ordered in strict sequential ascending order (1 to 10)', () => {
    const sections = getChallengeSections();
    const orders = sections.map((s) => s.order);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('KC-GPAGE-03: Verifies that all 8 canonical challenges (CH-001 to CH-008) are fully covered', () => {
    const coverage = validateChallengeSectionCoverage();
    expect(coverage.isFullyCovered).toBe(true);
    expect(coverage.coveredChallengeIds).toEqual(CANONICAL_CHALLENGE_IDS);
    expect(coverage.missingChallengeIds).toEqual([]);
  });

  it('KC-GPAGE-04: Verifies that every section specifies a valid dataSource and componentType', () => {
    const sections = getChallengeSections();
    const validDataSources = [
      'getChallengeContent',
      'getPressureDimensions',
      'getAllChallenges',
      'getChallengeCrossTrackMappings',
      'getGlobalChallengeNegativeBoundaries',
      'getQuarantinedChallengeClaims',
      'CANONICAL_CHALLENGE_CONTENT',
    ];

    sections.forEach((section) => {
      expect(validDataSources).toContain(section.dataSource);
      expect(section.componentType).toBeTruthy();
      expect(section.containerWidth).toMatch(/^(reading|narrow|content|wide|full)$/);
      expect(section.background).toMatch(/^(primary|secondary|tertiary)$/);
      expect(section.visualRole).toBeTruthy();
    });
  });

  it('KC-GPAGE-05: Verifies that no non-canonical challenge IDs exist in the registry', () => {
    const allChallenges = getAllChallenges();
    allChallenges.forEach((challenge) => {
      expect(CANONICAL_CHALLENGE_IDS).toContain(challenge.id);
    });
  });

  it('KC-GPAGE-06: Verifies that the Boundaries section enforces negative claims and quarantine defense', () => {
    const boundarySection = getChallengeSectionById('challenge-boundaries');
    expect(boundarySection).toBeDefined();
    expect(boundarySection?.dataSource).toBe('getGlobalChallengeNegativeBoundaries');
    expect(boundarySection?.forbiddenContent.some((f) => f.includes('quarantined'))).toBe(true);
  });

  it('KC-GPAGE-07: Verifies that evidence tiers are preserved without distortion', () => {
    const challenges = getAllChallenges();
    const validEvidenceTiers = [
      'VERIFIED',
      'REPORTED',
      'DOCUMENTED',
      'EXPERIMENTAL',
      'THEORETICAL',
      'UNVERIFIED',
    ];

    challenges.forEach((c) => {
      expect(validEvidenceTiers).toContain(c.evidenceState);
      expect(c.evidenceState).not.toBe('PROVEN_FACT');
    });
  });

  it('KC-GPAGE-08: Verifies that every section defines non-empty forbiddenContent rules against marketing hype', () => {
    const sections = getChallengeSections();
    sections.forEach((section) => {
      expect(section.forbiddenContent.length).toBeGreaterThan(0);
      section.forbiddenContent.forEach((rule) => {
        expect(rule.trim().length).toBeGreaterThan(5);
      });
    });
  });

  it('verifies selector getChallengeSectionById retrieves expected section definitions', () => {
    const hero = getChallengeSectionById('challenge-hero');
    expect(hero?.order).toBe(1);
    expect(hero?.componentType).toBe('ChallengeHeroSection');

    const closing = getChallengeSectionById('challenge-closing');
    expect(closing?.order).toBe(10);
    expect(closing?.componentType).toBe('ChallengeClosingSection');
  });
});
