import { describe, it, expect } from 'vitest';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { validateOverviewContent } from '@/lib/validation/contentValidation';
import { OverviewContentModel } from '@/types/overview';

describe('Overview Content Model & Semantic Invariants (Phase 04A.3)', () => {
  describe('Canonical Static Overview Content', () => {
    it('validates that OVERVIEW_CONTENT satisfies all semantic rules', () => {
      const result = validateOverviewContent(OVERVIEW_CONTENT);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('contains canonical identity and boundaries', () => {
      expect(OVERVIEW_CONTENT.identity.name).toBe('Nexus LAB AI');
      expect(OVERVIEW_CONTENT.identity.positioning).toBe('AI Systems Innovation Company');
      expect(OVERVIEW_CONTENT.identity.boundaries.length).toBeGreaterThan(0);
    });

    it('contains 4 primary canonical research programs', () => {
      const primaryPrograms = OVERVIEW_CONTENT.researchPrograms.filter(
        (p) => p.publicRelevance === 'PRIMARY'
      );
      expect(primaryPrograms.length).toBe(4);
      const ids = primaryPrograms.map((p) => p.id);
      expect(ids).toContain('nala');
      expect(ids).toContain('amp');
      expect(ids).toContain('rta-guard');
      expect(ids).toContain('cosmos');
    });

    it('preserves multi-axis separation on RTA-GUARD without premature verification', () => {
      const rtaGuard = OVERVIEW_CONTENT.researchPrograms.find((p) => p.id === 'rta-guard');
      expect(rtaGuard).toBeDefined();
      expect(rtaGuard?.maturity).toBe('IMPLEMENTED');
      expect(rtaGuard?.evidence).toBe('REPORTED'); // Honest separation
    });
  });

  describe('Semantic Validation Invariant Tests', () => {
    it('catches claims marked VERIFIED without high-tier authority', () => {
      const invalidModel: OverviewContentModel = {
        ...OVERVIEW_CONTENT,
        claims: [
          {
            id: 'invalid-claim',
            statement: 'An unbacked claim',
            provenance: {
              sourceId: 'UNCHECKED-BLOG',
              sourceType: 'Blog Post',
              authorityTier: 'TIER_7_UNVERIFIED',
              extractedAt: '2026-08-18',
            },
            temporalState: 'CURRENT',
            maturity: 'IMPLEMENTED',
            evidence: 'VERIFIED', // Invalid! TIER_7 cannot be VERIFIED
            publicRelevance: 'PRIMARY',
          },
        ],
      };

      const result = validateOverviewContent(invalidModel);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.rule === 'RULE-002')).toBe(true);
    });

    it('catches ESTABLISHED relationships lacking evidence references', () => {
      const invalidModel: OverviewContentModel = {
        ...OVERVIEW_CONTENT,
        relationships: [
          {
            source: 'nala',
            target: 'cosmos',
            type: 'DEPENDS_ON',
            state: 'ESTABLISHED', // Invalid! Missing evidenceRef
            evidenceRef: '',
          },
        ],
      };

      const result = validateOverviewContent(invalidModel);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.rule === 'RULE-004')).toBe(true);
    });
  });
});
