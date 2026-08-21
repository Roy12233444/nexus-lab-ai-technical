/**
 * Nexus LAB AI — Philosophy Content Model Tests & Hostile Adversarial Suite
 * Phase 04E.3 — Validation of Epistemic Invariants & Content Model
 */

import { describe, it, expect } from 'vitest';
import {
  CANONICAL_PHILOSOPHY_REGISTRY,
  getPublicPrimaryConcepts,
  getPublicSupportingConcepts,
  getDeepResearchConcepts,
  getPublicPhilosophyPrinciples,
  getAllPublicClaims,
  getQuarantinedClaims,
} from '@/content/philosophy/philosophy';
import { validatePhilosophyContent } from '@/lib/validation/philosophyContentValidation';
import { CanonicalPhilosophyRegistry } from '@/types/philosophy';

describe('Phase 04E.3 — Canonical Philosophy Content Model', () => {
  // =========================================================================
  // 1. Canonical Registry Integrity & Cardinality
  // =========================================================================
  describe('1. Canonical Registry Integrity & Cardinality', () => {
    it('passes all canonical content validation rules with 0 errors', () => {
      const result = validatePhilosophyContent(CANONICAL_PHILOSOPHY_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('contains exactly 16 total concepts across designated visibility tiers', () => {
      const concepts = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts);
      expect(concepts).toHaveLength(16);

      const primary = getPublicPrimaryConcepts();
      expect(primary).toHaveLength(8);

      const supporting = getPublicSupportingConcepts();
      expect(supporting).toHaveLength(4);

      const deepResearch = getDeepResearchConcepts();
      expect(deepResearch).toHaveLength(4);
    });

    it('contains exactly 8 public principles in sequential order', () => {
      const principles = getPublicPhilosophyPrinciples();
      expect(principles).toHaveLength(8);
      principles.forEach((p, idx) => {
        expect(p.order).toBe(idx + 1);
      });
    });

    it('contains exactly 12 reconciled public claims and 8 AI hypotheses', () => {
      const claims = getAllPublicClaims();
      expect(claims).toHaveLength(12);

      const hypotheses = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.hypotheses);
      expect(hypotheses).toHaveLength(8);
    });

    it('contains exactly 5 quarantined claim classes', () => {
      const quarantined = getQuarantinedClaims();
      expect(quarantined).toHaveLength(5);
    });
  });

  // =========================================================================
  // 2. Selectors Integrity & Layer Separation
  // =========================================================================
  describe('2. Selectors Integrity & Layer Separation', () => {
    it('ensures every public primary concept has explicit non-claims', () => {
      const primary = getPublicPrimaryConcepts();
      primary.forEach((concept) => {
        expect(concept.nonClaims.length).toBeGreaterThan(0);
      });
    });

    it('preserves multi-layer separation on all concepts without prose collapse', () => {
      Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).forEach((c) => {
        expect(c.classicalDefinition).toBeTruthy();
        expect(c.philosophicalQuestion).toBeTruthy();
        expect(c.nexusInterpretation).toBeTruthy();
        expect(c.classicalDefinition).not.toBe(c.nexusInterpretation);
      });
    });

    it('preserves re-audited DIRECT mappings strictly for verified architectures', () => {
      const directConcepts = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).filter(
        (c) => c.nexusMapping.category === 'DIRECT'
      );
      expect(directConcepts.map((c) => c.id)).toEqual(['PHIL-005', 'PHIL-013']);
    });
  });

  // =========================================================================
  // 3. Kill-Critic Hostile Adversarial Attacks
  // =========================================================================
  describe('3. Kill-Critic Hostile Adversarial Attacks', () => {
    it('KC-C01: Rejects historical anachronisms asserting ancient texts invented AI', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.concepts['PHIL-001'].publicClaim =
        'Ancient Indian scriptures contain blueprints for modern AI architectures.';

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-002 Violation'))).toBe(true);
    });

    it('KC-C02: Rejects promoting an AI hypothesis to an established fact', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      const mutatedHyp = mutated.hypotheses['HYP-PHIL-001'] as unknown as Record<string, unknown>;
      mutatedHyp.status = 'PROVEN_FACT';

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-005 Violation'))).toBe(true);
    });

    it('KC-C03: Rejects mapping inflation (mutating ANALOGY to DIRECT on unverified target)', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.concepts['PHIL-014'].nexusMapping.category = 'DIRECT';
      mutated.concepts['PHIL-014'].nexusMapping.target = 'COSMOS';

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-006 Violation'))).toBe(true);
    });

    it('KC-C04: Rejects orphan claims referencing non-existent concept IDs', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.claims['CLAIM-PHIL-001'].conceptId =
        'PHIL-999' as unknown as (typeof mutated.claims)['CLAIM-PHIL-001']['conceptId'];

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-001 Violation'))).toBe(true);
    });

    it('KC-C05: Rejects stripping mandatory non-claims from public concepts', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.concepts['PHIL-001'].nonClaims = [];

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-004 Violation'))).toBe(true);
    });

    it('KC-C06: Rejects leaking quarantined claims into the active public claims registry', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      const mutatedClaims = mutated.claims as unknown as Record<string, unknown>;
      mutatedClaims['QC-AUTH-001'] = {
        id: 'QC-AUTH-001',
        conceptId: 'PHIL-001',
        claimText: 'Ancient AI claim',
        claimType: 'NEXUS_RESEARCH_POSITION',
        evidenceState: 'DOCUMENTED',
        publicAllowed: true,
      };

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-008 Violation'))).toBe(true);
    });

    it('KC-C07: Rejects evidence inflation asserting VERIFIED production benchmarks without proof', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.concepts['PHIL-001'].evidenceState.productionBenchmark = 'VERIFIED';

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-007 Violation'))).toBe(true);
    });

    it('KC-C08: Rejects concept layer collapse (identical classical & nexus interpretation)', () => {
      const mutated: CanonicalPhilosophyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY)
      );
      mutated.concepts['PHIL-001'].classicalDefinition = 'Identical text across layers.';
      mutated.concepts['PHIL-001'].nexusInterpretation = 'Identical text across layers.';

      const result = validatePhilosophyContent(mutated);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-003 Violation'))).toBe(true);
    });
  });
});
