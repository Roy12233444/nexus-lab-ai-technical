/**
 * Nexus LAB AI — Challenge Visual Design & Visual Registry Test Suite
 * Phase 04G.4 — Machine-Enforceable Visual Architecture
 */

import { describe, it, expect } from 'vitest';
import {
  CHALLENGE_VISUAL_REGISTRY,
  getChallengeVisualRegistry,
  getChallengeSectionVisualRule,
  getChallengeEvidenceVisualConstraint,
  getForbiddenChallengeVisualPatterns,
  validateChallengeVisualRules,
} from '../../../src/content/challenge/visualRegistry';
import { getChallengeSections } from '../../../src/content/challenge/sectionArchitecture';
import { ChallengeEvidenceLevel } from '../../../src/types/challenge';

describe('Phase 04G.4 — Challenge Visual Design & Visual Registry', () => {
  it('verifies that all 10 canonical sections from 04G.3 have corresponding visual rules', () => {
    const sections = getChallengeSections();
    const sectionIds = sections.map((s) => s.id);
    const validation = validateChallengeVisualRules(sectionIds);

    expect(validation.isValid).toBe(true);
    expect(validation.missingSectionIds).toEqual([]);
    expect(Object.keys(CHALLENGE_VISUAL_REGISTRY.sectionVisualRules).length).toBe(10);
  });

  it('KC-GVIS-01: Verifies that all diagrams and graphs provide textual equivalents for accessibility', () => {
    const registry = getChallengeVisualRegistry();
    const rules = Object.values(registry.sectionVisualRules);

    rules.forEach((rule) => {
      if (rule.hasDedicatedDiagram) {
        expect(rule.accessibilityContract.textualEquivalentProvided).toBe(true);
        expect(rule.accessibilityContract.screenReaderSummary.length).toBeGreaterThan(10);
      }
    });
  });

  it('KC-GVIS-02: Verifies that every visual rule corresponds to a valid section in 04G.3 blueprint', () => {
    const sections = getChallengeSections();
    const validSectionIds = sections.map((s) => s.id);
    const rules = Object.values(getChallengeVisualRegistry().sectionVisualRules);

    rules.forEach((rule) => {
      expect(validSectionIds).toContain(rule.sectionId);
    });
  });

  it('KC-GVIS-03: Verifies that visual roles and modes conform to controlled types', () => {
    const rules = Object.values(getChallengeVisualRegistry().sectionVisualRules);
    rules.forEach((rule) => {
      expect(rule.visualRole).toBeTruthy();
      expect(rule.visualMode).toBeTruthy();
      expect(rule.containerGeometry).toBeTruthy();
      expect(rule.designRationale.length).toBeGreaterThan(10);
    });
  });

  it('KC-GVIS-04: Verifies that evidence constraints enforce distinct visual tiers without inflation', () => {
    const evidenceTiers: ChallengeEvidenceLevel[] = [
      'VERIFIED',
      'REPORTED',
      'DOCUMENTED',
      'EXPERIMENTAL',
      'THEORETICAL',
      'UNVERIFIED',
    ];

    evidenceTiers.forEach((tier) => {
      const constraint = getChallengeEvidenceVisualConstraint(tier);
      expect(constraint).toBeDefined();
      expect(constraint.evidenceTier).toBe(tier);
      expect(constraint.badgeStyle).toBeTruthy();
      expect(constraint.borderTreatment).toBeTruthy();
      expect(constraint.visualConfidenceLevel).toBeTruthy();
      expect(constraint.epistemicConstraint).toBeTruthy();
    });

    const theoretical = getChallengeEvidenceVisualConstraint('THEORETICAL');
    const verified = getChallengeEvidenceVisualConstraint('VERIFIED');
    expect(theoretical.visualConfidenceLevel).not.toBe(verified.visualConfidenceLevel);
  });

  it('KC-GVIS-05: Verifies that decorative visuals are not used to substitute data claims', () => {
    const matrixRule = getChallengeSectionVisualRule('challenge-matrix');
    expect(matrixRule?.visualMode).toBe('DATA_MATRIX');
    expect(matrixRule?.hasEditorialAsset).toBe(false);
  });

  it('KC-GVIS-06: Verifies that the Boundaries section enforces firewall visual treatment', () => {
    const boundaryRule = getChallengeSectionVisualRule('challenge-boundaries');
    expect(boundaryRule).toBeDefined();
    expect(boundaryRule?.visualMode).toBe('EPISTEMIC_FIREWALL');
    expect(boundaryRule?.containerGeometry).toBe('FIREWALL_BOX');
    expect(boundaryRule?.accessibilityContract.ariaRole).toBe('alert');
  });

  it('KC-GVIS-07: Verifies that color independence and accessibility are enforced across all sections', () => {
    const rules = Object.values(getChallengeVisualRegistry().sectionVisualRules);
    rules.forEach((rule) => {
      expect(rule.accessibilityContract.colorIndependenceEnforced).toBe(true);
      expect(rule.accessibilityContract.ariaRole).toBeTruthy();
    });
  });

  it('KC-GVIS-08: Verifies that responsive contracts (desktop, tablet, mobile) are defined for every section', () => {
    const rules = Object.values(getChallengeVisualRegistry().sectionVisualRules);
    rules.forEach((rule) => {
      expect(rule.responsiveBehavior.desktop).toBeTruthy();
      expect(rule.responsiveBehavior.tablet).toBeTruthy();
      expect(rule.responsiveBehavior.mobile).toBeTruthy();
    });
  });

  it('KC-GVIS-09: Verifies that forbidden visual patterns ban cyberpunk neon, glowing brains, and marketing hype', () => {
    const patterns = getForbiddenChallengeVisualPatterns();
    expect(patterns.length).toBeGreaterThanOrEqual(4);
    expect(patterns.some((p) => p.includes('Humanoid'))).toBe(true);
    expect(patterns.some((p) => p.includes('Cyberpunk'))).toBe(true);
    expect(patterns.some((p) => p.includes('100% solved'))).toBe(true);
  });

  it('verifies selector getChallengeSectionVisualRule retrieves expected rules', () => {
    const heroRule = getChallengeSectionVisualRule('challenge-hero');
    expect(heroRule?.sectionOrder).toBe(1);
    expect(heroRule?.visualRole).toBe('HERO_SYSTEM_PRESSURE');

    const closingRule = getChallengeSectionVisualRule('challenge-closing');
    expect(closingRule?.sectionOrder).toBe(10);
    expect(closingRule?.visualRole).toBe('OPEN_FRONTIER_GATEWAY');
  });
});
