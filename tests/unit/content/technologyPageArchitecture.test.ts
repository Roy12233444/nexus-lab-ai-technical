import { describe, it, expect } from 'vitest';
import { TECHNOLOGY_PAGE_BLUEPRINT } from '@/content/technology/sectionArchitecture';
import { CANONICAL_TECHNOLOGY_REGISTRY } from '@/content/technology/technology';

describe('Phase 04C.4 — Technology Page Architecture Blueprint & Section Mapping', () => {
  describe('Narrative Structure & Section Sequence', () => {
    it('defines exactly 8 sequential sections with strictly incrementing order', () => {
      expect(TECHNOLOGY_PAGE_BLUEPRINT.sections).toHaveLength(8);

      TECHNOLOGY_PAGE_BLUEPRINT.sections.forEach((section, index) => {
        expect(section.order).toBe(index + 1);
      });
    });

    it('has correct route and pageId metadata', () => {
      expect(TECHNOLOGY_PAGE_BLUEPRINT.pageId).toBe('technology');
      expect(TECHNOLOGY_PAGE_BLUEPRINT.route).toBe('/technology');
      expect(TECHNOLOGY_PAGE_BLUEPRINT.title.length).toBeGreaterThan(0);
      expect(TECHNOLOGY_PAGE_BLUEPRINT.description.length).toBeGreaterThan(0);
    });

    it('enforces unique, semantic section IDs', () => {
      const sectionIds = TECHNOLOGY_PAGE_BLUEPRINT.sections.map((s) => s.id);
      const uniqueIds = new Set(sectionIds);
      expect(uniqueIds.size).toBe(8);

      expect(sectionIds).toEqual([
        'technology-hero',
        'technology-philosophy',
        'technology-architecture',
        'technology-domains',
        'technology-capabilities',
        'technology-substrates',
        'technology-project-map',
        'technology-evidence',
      ]);
    });
  });

  describe('Design System Token Compliance', () => {
    it('uses valid container widths and backgrounds across all sections', () => {
      const validWidths = ['reading', 'narrow', 'content', 'wide', 'full'];
      const validBackgrounds = ['primary', 'secondary', 'tertiary'];
      const validSpacings = ['sm', 'md', 'lg', 'none'];

      TECHNOLOGY_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(validWidths).toContain(section.containerWidth);
        expect(validBackgrounds).toContain(section.background);
        expect(validSpacings).toContain(section.spacing);
      });
    });
  });

  describe('Data Source Mapping to Canonical Registry', () => {
    it('maps every section to a valid key in the canonical technology registry', () => {
      const validContentKeys = [
        'identity',
        'domains',
        'capabilities',
        'substrates',
        'projects',
        'claims',
        'quarantinedClaims',
      ];

      TECHNOLOGY_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(validContentKeys).toContain(section.contentKey);
        expect(
          CANONICAL_TECHNOLOGY_REGISTRY[
            section.contentKey as keyof typeof CANONICAL_TECHNOLOGY_REGISTRY
          ]
        ).toBeDefined();
      });
    });

    it('preserves the Three-Tier Architecture in section specifications', () => {
      const archSection = TECHNOLOGY_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'technology-architecture'
      );
      expect(archSection).toBeDefined();
      expect(archSection?.purpose).toContain('Technical Substrates');
      expect(archSection?.purpose).toContain('Systemic Capabilities');
      expect(archSection?.purpose).toContain('Sovereign Projects');
    });
  });

  describe('Kill-Critic Architecture Attack Suite', () => {
    it('ATTACK 1: Rejects blueprint with arbitrary or uncanonical domain count', () => {
      const domainCount = Object.keys(CANONICAL_TECHNOLOGY_REGISTRY.domains).length;
      expect(domainCount).toBe(6);
    });

    it('ATTACK 2: Rejects blueprint sections missing explicit source authority tiers', () => {
      TECHNOLOGY_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(section.sourceAuthority.length).toBeGreaterThan(0);
        expect(section.sourceAuthority).toMatch(/TIER_[1-7]/);
      });
    });

    it('ATTACK 3: Rejects operational dependency claims between sovereign projects in project map', () => {
      const projectMapSection = TECHNOLOGY_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'technology-project-map'
      );
      expect(projectMapSection?.purpose).toContain('strictly preserving project independence');
      expect(projectMapSection?.purpose).not.toMatch(/pipeline|depends_on/i);
    });
  });
});
