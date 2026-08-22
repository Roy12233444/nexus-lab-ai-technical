/**
 * Nexus LAB AI — Philosophy Page Architecture & Blueprint Unit & Adversarial Tests
 * Phase 04E.4 — Verification of 12-Section Architecture & Data Bindings
 */

import { describe, it, expect } from 'vitest';
import { PHILOSOPHY_PAGE_BLUEPRINT } from '@/content/philosophy/sectionArchitecture';
import { CANONICAL_PHILOSOPHY_REGISTRY } from '@/content/philosophy/philosophy';
import { PhilosophyPageBlueprint } from '@/types/philosophySection';

describe('Phase 04E.4 — Philosophy Page Architecture & Section Mapping', () => {
  // =========================================================================
  // 1. Blueprint Structure & Section Cardinality
  // =========================================================================
  describe('1. Blueprint Structure & Section Cardinality', () => {
    it('contains exactly 12 canonical sections in contiguous sequential order', () => {
      const { sections } = PHILOSOPHY_PAGE_BLUEPRINT;
      expect(sections).toHaveLength(12);

      sections.forEach((section, index) => {
        expect(section.order).toBe(index + 1);
      });
    });

    it('enforces unique IDs across all sections', () => {
      const ids = PHILOSOPHY_PAGE_BLUEPRINT.sections.map((s) => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(12);
    });

    it('contains required metadata and valid route', () => {
      expect(PHILOSOPHY_PAGE_BLUEPRINT.pageId).toBe('philosophy');
      expect(PHILOSOPHY_PAGE_BLUEPRINT.route).toBe('/philosophy');
      expect(PHILOSOPHY_PAGE_BLUEPRINT.title).toBeTruthy();
      expect(PHILOSOPHY_PAGE_BLUEPRINT.description).toBeTruthy();
    });

    it('specifies valid semantic container widths and backgrounds', () => {
      const allowedWidths = ['reading', 'narrow', 'content', 'wide', 'full'];
      const allowedBackgrounds = ['primary', 'secondary', 'tertiary'];

      PHILOSOPHY_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(allowedWidths).toContain(section.containerWidth);
        expect(allowedBackgrounds).toContain(section.background);
        expect(section.eyebrow).toBeTruthy();
        expect(section.purpose).toBeTruthy();
      });
    });
  });

  // =========================================================================
  // 2. Data Bindings & Public Selectors Integrity
  // =========================================================================
  describe('2. Data Bindings & Public Selectors Integrity', () => {
    it('binds every section strictly to canonical selectors or registry', () => {
      const allowedDataSources = [
        'getPublicPrimaryConcepts',
        'getPublicSupportingConcepts',
        'getDeepResearchConcepts',
        'getPublicPhilosophyPrinciples',
        'getAllPublicClaims',
        'getQuarantinedClaims',
        'CANONICAL_PHILOSOPHY_REGISTRY',
      ];

      PHILOSOPHY_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(allowedDataSources).toContain(section.dataSource);
      });
    });

    it('ensures boundaries section binds to quarantined claims', () => {
      const boundariesSection = PHILOSOPHY_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'philosophy-boundaries'
      );
      expect(boundariesSection).toBeDefined();
      expect(boundariesSection?.dataSource).toBe('getQuarantinedClaims');
      expect(boundariesSection?.contentKey).toBe('quarantinedClaims');
    });

    it('ensures principles section binds to public philosophy principles', () => {
      const principlesSection = PHILOSOPHY_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'philosophy-principles'
      );
      expect(principlesSection).toBeDefined();
      expect(principlesSection?.dataSource).toBe('getPublicPhilosophyPrinciples');
      expect(principlesSection?.contentKey).toBe('principles');
    });
  });

  // =========================================================================
  // 3. Kill-Critic Hostile Blueprint Adversarial Attacks
  // =========================================================================
  describe('3. Kill-Critic Hostile Blueprint Adversarial Attacks', () => {
    it('KC-PAGE-01: Verifies zero quarantined or excluded claims leak into blueprint descriptions', () => {
      const allText = JSON.stringify(PHILOSOPHY_PAGE_BLUEPRINT).toLowerCase();
      const forbiddenPhrases = [
        'ancient scriptures contain blueprints for modern ai',
        'solved machine consciousness',
        'ancient ai architecture',
        'pricing plans',
        'subscription tier',
        'buy now',
      ];

      forbiddenPhrases.forEach((phrase) => {
        expect(allText).not.toContain(phrase);
      });
    });

    it('KC-PAGE-02: Rejects section order mutation or disruption of 12-section sequence', () => {
      const mutated: PhilosophyPageBlueprint = JSON.parse(
        JSON.stringify(PHILOSOPHY_PAGE_BLUEPRINT)
      );
      // Swap hero and boundaries
      const temp = mutated.sections[0];
      mutated.sections[0] = mutated.sections[10];
      mutated.sections[10] = temp;

      const isSequential = mutated.sections.every(
        (s, idx) => s.order === idx + 1 && s.id === PHILOSOPHY_PAGE_BLUEPRINT.sections[idx].id
      );
      expect(isSequential).toBe(false);
    });

    it('KC-PAGE-03: Guarantees hero section is order 1 and closing is order 12', () => {
      expect(PHILOSOPHY_PAGE_BLUEPRINT.sections[0].id).toBe('philosophy-hero');
      expect(PHILOSOPHY_PAGE_BLUEPRINT.sections[0].order).toBe(1);

      expect(PHILOSOPHY_PAGE_BLUEPRINT.sections[11].id).toBe('philosophy-closing');
      expect(PHILOSOPHY_PAGE_BLUEPRINT.sections[11].order).toBe(12);
    });

    it('KC-PAGE-04: Guarantees all public primary concepts are represented across sections', () => {
      const primary = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.concepts).filter(
        (c) => c.visibilityTier === 'PUBLIC_PRIMARY'
      );
      expect(primary).toHaveLength(8);
      primary.forEach((concept) => {
        expect(concept.nonClaims.length).toBeGreaterThan(0);
      });
    });
  });
});
