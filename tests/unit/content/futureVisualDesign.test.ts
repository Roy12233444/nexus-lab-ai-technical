import { describe, it, expect } from 'vitest';
import {
  FUTURE_VISUAL_REGISTRY,
  FUTURE_SECTION_VISUAL_RULES,
  getFutureVisualAsset,
  getAllFutureVisualAssets,
  getVisualsForSection,
  getSectionVisualRule,
} from '@/content/future/visualRegistry';

describe('Phase 04F.4 — Future Visual Design & Asset Mapping Specifications', () => {
  describe('Asset Registry & Epistemic Contracts', () => {
    it('registers exactly 7 canonical visual assets', () => {
      const assets = getAllFutureVisualAssets();
      expect(assets).toHaveLength(7);

      const expectedIds = [
        'FUTURE-IMG-001',
        'FUTURE-IMG-002',
        'FUTURE-IMG-003',
        'FUTURE-IMG-004',
        'FUTURE-IMG-005',
        'FUTURE-IMG-006',
        'FUTURE-IMG-007',
      ];
      expect(assets.map((a) => a.id)).toEqual(expectedIds);
    });

    it('enforces non-empty alt text and valid public paths for all 7 assets', () => {
      getAllFutureVisualAssets().forEach((asset) => {
        expect(asset.altText.length).toBeGreaterThan(20);
        expect(asset.caption.length).toBeGreaterThan(10);
        expect(asset.narrativeMeaning.length).toBeGreaterThan(15);
        expect(asset.epistemicFirewallNote.length).toBeGreaterThan(15);
        expect(asset.publicPath).toMatch(/^\/images\/future\/[1-7]\.png$/);
        expect(['16:9', '4:3', '3:4', '1:1', '21:9']).toContain(asset.aspectRatio);
      });
    });

    it('retrieves individual assets by ID selector', () => {
      const heroAsset = getFutureVisualAsset('FUTURE-IMG-001');
      expect(heroAsset).toBeDefined();
      expect(heroAsset.role).toBe('HERO_IDENTITY');
      expect(heroAsset.primarySectionId).toBe('future-hero');
    });
  });

  describe('Section-to-Image Mapping Rules', () => {
    it('defines rules for all 10 canonical sections', () => {
      expect(FUTURE_SECTION_VISUAL_RULES).toHaveLength(10);
      const orders = FUTURE_SECTION_VISUAL_RULES.map((r) => r.sectionOrder);
      expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('preserves data-first sections without forced generated images', () => {
      const dataFirstSectionIds = [
        'future-horizons', // Order 04
        'future-evolution', // Order 06
        'future-matrix', // Order 07
        'future-boundaries', // Order 09
      ];

      dataFirstSectionIds.forEach((secId) => {
        const rule = getSectionVisualRule(secId);
        expect(rule).toBeDefined();
        expect(rule?.hasDedicatedImage).toBe(false);
        expect(rule?.assignedAssetIds).toHaveLength(0);
        expect(rule?.layoutMode).toBe('DATA_FIRST_NO_IMAGE');
        expect(getVisualsForSection(secId)).toHaveLength(0);
      });
    });

    it('binds image-enabled sections to their exact assigned assets', () => {
      // 01: Hero -> Img 1
      expect(getVisualsForSection('future-hero').map((a) => a.id)).toEqual(['FUTURE-IMG-001']);

      // 02: Thesis -> Img 2
      expect(getVisualsForSection('future-thesis').map((a) => a.id)).toEqual(['FUTURE-IMG-002']);

      // 03: Directions -> Img 3
      expect(getVisualsForSection('future-directions').map((a) => a.id)).toEqual([
        'FUTURE-IMG-003',
      ]);

      // 05: Problems -> Img 4
      expect(getVisualsForSection('future-problems').map((a) => a.id)).toEqual(['FUTURE-IMG-004']);

      // 08: Vision -> Img 5 & Img 6
      expect(getVisualsForSection('future-vision').map((a) => a.id)).toEqual([
        'FUTURE-IMG-005',
        'FUTURE-IMG-006',
      ]);

      // 10: Closing -> Img 7
      expect(getVisualsForSection('future-closing').map((a) => a.id)).toEqual(['FUTURE-IMG-007']);
    });
  });

  describe('Hostile Adversarial Visual Invariants (KC-FVIS-01 to KC-FVIS-06)', () => {
    it('KC-FVIS-01: Verifies mandatory COSMOS spaceflight firewall on Image 6', () => {
      const img6 = FUTURE_VISUAL_REGISTRY['FUTURE-IMG-006'];
      expect(img6.epistemicFirewallNote).toContain('MANDATORY FIREWALL');
      expect(img6.epistemicFirewallNote).toContain('does NOT claim active spaceflight');
    });

    it('KC-FVIS-02: Verifies no image forces dark-mode backgrounds', () => {
      getAllFutureVisualAssets().forEach((asset) => {
        expect(asset.altText.toLowerCase()).toContain('white background');
      });
    });

    it('KC-FVIS-03: Prohibits assigning images to epistemic boundary section', () => {
      const boundaryVisuals = getVisualsForSection('future-boundaries');
      expect(boundaryVisuals).toHaveLength(0);
    });

    it('KC-FVIS-04: Prohibits assigning images to matrix truth table section', () => {
      const matrixVisuals = getVisualsForSection('future-matrix');
      expect(matrixVisuals).toHaveLength(0);
    });

    it('KC-FVIS-05: Verifies non-claim distinction between Image 3 (building) and Image 7 (becoming)', () => {
      const img3 = FUTURE_VISUAL_REGISTRY['FUTURE-IMG-003'];
      const img7 = FUTURE_VISUAL_REGISTRY['FUTURE-IMG-007'];

      expect(img3.role).toBe('COLLECTIVE_CAPABILITY');
      expect(img7.role).toBe('LONG_HORIZON_SYNTHESIS');
      expect(img3.primarySectionId).not.toBe(img7.primarySectionId);
    });

    it('KC-FVIS-06: Verifies all asset image files map 1-to-1 with prompt numbering 1.png..7.png', () => {
      for (let i = 1; i <= 7; i++) {
        const id = `FUTURE-IMG-00${i}` as keyof typeof FUTURE_VISUAL_REGISTRY;
        expect(FUTURE_VISUAL_REGISTRY[id].assetFile).toBe(`${i}.png`);
      }
    });
  });
});
