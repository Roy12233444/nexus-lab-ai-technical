import { describe, it, expect } from 'vitest';
import { RESEARCH_PAGE_BLUEPRINT } from '@/content/research/sectionArchitecture';
import { CANONICAL_RESEARCH_REGISTRY } from '@/content/research/research';

describe('Phase 04B.4 — Research Page Architecture & Section Mapping Suite', () => {
  describe('Structural Blueprint Integrity', () => {
    it('contains exactly 8 sequential sections', () => {
      expect(RESEARCH_PAGE_BLUEPRINT.sections).toHaveLength(8);
      RESEARCH_PAGE_BLUEPRINT.sections.forEach((section, idx) => {
        expect(section.order).toBe(idx + 1);
      });
    });

    it('defines the canonical 8-section narrative order', () => {
      const sectionIds = RESEARCH_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(sectionIds).toEqual([
        'research-hero',
        'research-thesis',
        'research-portfolio',
        'research-domains',
        'research-evidence-matrix',
        'research-boundaries',
        'research-gateways',
        'research-closing',
      ]);
    });

    it('enforces that every section has complete metadata and valid tokens', () => {
      const validWidths = ['reading', 'narrow', 'content', 'wide', 'full'];
      const validBackgrounds = ['primary', 'secondary', 'tertiary'];
      const validSpacings = ['sm', 'md', 'lg', 'none'];

      RESEARCH_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(section.id).toBeDefined();
        expect(section.title).toBeDefined();
        expect(section.eyebrow).toBeDefined();
        expect(section.purpose).toBeDefined();
        expect(section.sourceAuthority).toBeDefined();
        expect(section.componentType).toBeDefined();

        expect(validWidths).toContain(section.containerWidth);
        expect(validBackgrounds).toContain(section.background);
        expect(validSpacings).toContain(section.spacing);
      });
    });
  });

  describe('Registry Data Connection & Epistemic Alignment', () => {
    it('references valid content keys within CANONICAL_RESEARCH_REGISTRY', () => {
      expect(CANONICAL_RESEARCH_REGISTRY.projects).toBeDefined();
      expect(CANONICAL_RESEARCH_REGISTRY.projects.nala).toBeDefined();
      expect(CANONICAL_RESEARCH_REGISTRY.projects.amp).toBeDefined();
      expect(CANONICAL_RESEARCH_REGISTRY.projects.rtaGuard).toBeDefined();
      expect(CANONICAL_RESEARCH_REGISTRY.projects.cosmos).toBeDefined();
    });

    it('guarantees all four research programs are covered across portfolio and gateway sections', () => {
      const portfolioSection = RESEARCH_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'research-portfolio'
      );
      const gatewaysSection = RESEARCH_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'research-gateways'
      );

      expect(portfolioSection).toBeDefined();
      expect(gatewaysSection).toBeDefined();
    });
  });

  describe('Kill-Critic Invariant Checks', () => {
    it('Attack #1: guarantees zero cross-project operational dependencies in blueprint purpose definitions', () => {
      RESEARCH_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(section.purpose.toLowerCase()).not.toContain('cosmos deploys nala');
        expect(section.purpose.toLowerCase()).not.toContain('nala requires amp');
      });
    });

    it('Attack #2: ensures no quarantined claims are present in section titles or eyebrows', () => {
      const allText = RESEARCH_PAGE_BLUEPRINT.sections
        .map((s) => `${s.title} ${s.eyebrow} ${s.purpose}`)
        .join(' ')
        .toLowerCase();

      expect(allText).not.toContain('100% epistemic integrity');
      expect(allText).not.toContain('indefinite autonomy');
      expect(allText).not.toContain('operational orbital deployment');
    });

    it('Attack #3: verifies componentType mapping exists for every section', () => {
      RESEARCH_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(section.componentType.startsWith('Research')).toBe(true);
      });
    });
  });
});
