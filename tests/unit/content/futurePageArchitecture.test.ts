import { describe, it, expect } from 'vitest';
import { FUTURE_PAGE_BLUEPRINT } from '@/content/future/sectionArchitecture';
import { FutureSectionSpec } from '@/types/futureSection';

describe('Phase 04F.3 — Future Page Architecture & Section Mapping Blueprint', () => {
  describe('Canonical Blueprint Specifications', () => {
    it('defines the correct page metadata and route', () => {
      expect(FUTURE_PAGE_BLUEPRINT.pageId).toBe('future');
      expect(FUTURE_PAGE_BLUEPRINT.route).toBe('/future');
      expect(FUTURE_PAGE_BLUEPRINT.title).toBe('Nexus LAB AI Future Track');
      expect(FUTURE_PAGE_BLUEPRINT.sections).toHaveLength(10);
    });

    it('renders all 10 canonical sections in exact sequential order (1 to 10)', () => {
      const expectedSequence = [
        { order: 1, id: 'future-hero', component: 'FutureHeroSection' },
        { order: 2, id: 'future-thesis', component: 'FutureThesisSection' },
        { order: 3, id: 'future-directions', component: 'FutureDirectionsSection' },
        { order: 4, id: 'future-horizons', component: 'FutureHorizonsSection' },
        { order: 5, id: 'future-problems', component: 'FutureProblemsSection' },
        { order: 6, id: 'future-evolution', component: 'FutureEvolutionSection' },
        { order: 7, id: 'future-matrix', component: 'FutureMatrixSection' },
        { order: 8, id: 'future-vision', component: 'FutureVisionSection' },
        { order: 9, id: 'future-boundaries', component: 'FutureBoundariesSection' },
        { order: 10, id: 'future-closing', component: 'FutureClosingSection' },
      ];

      FUTURE_PAGE_BLUEPRINT.sections.forEach((sec, idx) => {
        expect(sec.order).toBe(expectedSequence[idx].order);
        expect(sec.id).toBe(expectedSequence[idx].id);
        expect(sec.componentType).toBe(expectedSequence[idx].component);
      });
    });

    it('enforces complete data contracts and forbidden content on every section', () => {
      FUTURE_PAGE_BLUEPRINT.sections.forEach((sec: FutureSectionSpec) => {
        expect(sec.title.length).toBeGreaterThan(0);
        expect(sec.eyebrow.length).toBeGreaterThan(0);
        expect(sec.purpose.length).toBeGreaterThan(0);
        expect(sec.sourceAuthority.length).toBeGreaterThan(0);
        expect(sec.visualRole.length).toBeGreaterThan(0);
        expect(sec.forbiddenContent.length).toBeGreaterThan(0);
        expect(['reading', 'narrow', 'content', 'wide', 'full']).toContain(sec.containerWidth);
        expect(['primary', 'secondary', 'tertiary']).toContain(sec.background);
      });
    });
  });

  describe('Hostile Adversarial Architecture Vectors (KC-FPAGE-01 to KC-FPAGE-08)', () => {
    it('KC-FPAGE-01: Verifies strict linear section order without permutations', () => {
      const orders = FUTURE_PAGE_BLUEPRINT.sections.map((s) => s.order);
      expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('KC-FPAGE-02: Verifies no missing sections from the 10-section canonical blueprint', () => {
      const ids = new Set(FUTURE_PAGE_BLUEPRINT.sections.map((s) => s.id));
      const requiredIds = [
        'future-hero',
        'future-thesis',
        'future-directions',
        'future-horizons',
        'future-problems',
        'future-evolution',
        'future-matrix',
        'future-vision',
        'future-boundaries',
        'future-closing',
      ];
      requiredIds.forEach((reqId) => {
        expect(ids.has(reqId)).toBe(true);
      });
    });

    it('KC-FPAGE-03: Rejects unauthorized section IDs outside canonical blueprint', () => {
      const canonicalIds = [
        'future-hero',
        'future-thesis',
        'future-directions',
        'future-horizons',
        'future-problems',
        'future-evolution',
        'future-matrix',
        'future-vision',
        'future-boundaries',
        'future-closing',
      ];
      FUTURE_PAGE_BLUEPRINT.sections.forEach((sec) => {
        expect(canonicalIds).toContain(sec.id);
      });
    });

    it('KC-FPAGE-04: Verifies valid data source selectors for every section', () => {
      const validSelectors = [
        'getFutureThesis',
        'getFutureDirections',
        'getResearchHorizons',
        'getOpenProblems',
        'getFutureEvolutionMap',
        'getLongHorizonVision',
        'getFutureNonClaims',
        'getQuarantinedFutureClaims',
        'CANONICAL_FUTURE_REGISTRY',
      ];
      FUTURE_PAGE_BLUEPRINT.sections.forEach((sec) => {
        expect(validSelectors).toContain(sec.dataSource);
      });
    });

    it('KC-FPAGE-05: Prohibits operational spaceflight inflation in future-vision section', () => {
      const visionSec = FUTURE_PAGE_BLUEPRINT.sections.find((s) => s.id === 'future-vision');
      expect(visionSec).toBeDefined();
      expect(
        visionSec?.forbiddenContent.some((fc) => fc.includes('active satellite constellation'))
      ).toBe(true);
    });

    it('KC-FPAGE-06: Prohibits commercial deadline inflation in future-horizons section', () => {
      const horizonsSec = FUTURE_PAGE_BLUEPRINT.sections.find((s) => s.id === 'future-horizons');
      expect(horizonsSec).toBeDefined();
      expect(
        horizonsSec?.forbiddenContent.some((fc) => fc.includes('guaranteed commercial deadlines'))
      ).toBe(true);
    });

    it('KC-FPAGE-07: Prohibits omitting non-claims or softening negative boundaries in future-boundaries', () => {
      const boundariesSec = FUTURE_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'future-boundaries'
      );
      expect(boundariesSec).toBeDefined();
      expect(
        boundariesSec?.forbiddenContent.some((fc) => fc.includes('quarantined non-claims'))
      ).toBe(true);
    });

    it('KC-FPAGE-08: Verifies architecture blueprint contains pure static config without React JSX contamination', () => {
      const blueprintString = JSON.stringify(FUTURE_PAGE_BLUEPRINT);
      expect(blueprintString).not.toContain('<div');
      expect(blueprintString).not.toContain('React.createElement');
      expect(blueprintString).not.toContain('onClick');
    });
  });
});
