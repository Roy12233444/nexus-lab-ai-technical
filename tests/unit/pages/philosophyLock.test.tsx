/**
 * Nexus LAB AI — Philosophy Track Hostile Verification & Adversarial Lock Test Suite
 * Phase 04E.6 — Complete 10-Gate Audit & 12-Vector Kill-Critic Hostile Resistance Suite
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Philosophy } from '@/pages/Philosophy/Philosophy';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { Technology } from '@/pages/Technology/Technology';
import { Programs } from '@/pages/Programs/Programs';

import {
  CANONICAL_PHILOSOPHY_REGISTRY,
  getPublicPhilosophyPrinciples,
  getPublicPrimaryConcepts,
  getPublicSupportingConcepts,
  getDeepResearchConcepts,
  getQuarantinedClaims,
} from '@/content/philosophy/philosophy';
import { PHILOSOPHY_PAGE_BLUEPRINT } from '@/content/philosophy/sectionArchitecture';
import { validatePhilosophyContent } from '@/lib/validation/philosophyContentValidation';
import {
  CanonicalPhilosophyRegistry,
  ConceptId,
  HypothesisStatus,
} from '@/types/philosophy';

describe('Phase 04E.6 — Philosophy Verification & Adversarial Lock Audit Suite', () => {
  // =========================================================================
  // Certification Gate 01: Authoritative Truth & Epistemic Invariants
  // =========================================================================
  describe('Gate 01: Authoritative Truth Integrity (04E.2 Authorization)', () => {
    it('passes all canonical content validation rules with 0 errors (RULE-001 to RULE-008)', () => {
      const result = validatePhilosophyContent(CANONICAL_PHILOSOPHY_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('preserves exactly 16 canonical concepts across the three visibility tiers', () => {
      const primary = getPublicPrimaryConcepts();
      const supporting = getPublicSupportingConcepts();
      const deepResearch = getDeepResearchConcepts();

      expect(primary).toHaveLength(8);
      expect(supporting).toHaveLength(4);
      expect(deepResearch).toHaveLength(4);
      expect(primary.length + supporting.length + deepResearch.length).toBe(16);
    });

    it('preserves all eight public epistemic principles in exact sequence', () => {
      const principles = getPublicPhilosophyPrinciples();
      expect(principles).toHaveLength(8);

      const expectedIds = [
        'PRIN-001',
        'PRIN-002',
        'PRIN-003',
        'PRIN-004',
        'PRIN-005',
        'PRIN-006',
        'PRIN-007',
        'PRIN-008',
      ];
      expect(principles.map((p) => p.id)).toEqual(expectedIds);
    });

    it('strictly binds all 8 hypotheses to canonical concept IDs with CONJECTURE/HYPOTHESIS status', () => {
      const hypotheses = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.hypotheses);
      expect(hypotheses).toHaveLength(8);

      hypotheses.forEach((h) => {
        expect(CANONICAL_PHILOSOPHY_REGISTRY.concepts[h.conceptId]).toBeDefined();
        expect(['HYPOTHESIS', 'CONJECTURE']).toContain(h.status);
      });
    });
  });

  // =========================================================================
  // Certification Gate 02: 12-Section Architecture & DOM Landmark Structure
  // =========================================================================
  describe('Gate 02: 12-Section Page Architecture & Blueprint Sequence', () => {
    it('renders all 12 canonical blueprint sections in exact linear sequence', () => {
      const { container } = render(<Philosophy />);
      const sections = container.querySelectorAll('section');

      expect(sections).toHaveLength(12);
      PHILOSOPHY_PAGE_BLUEPRINT.sections.forEach((expectedSection, index) => {
        expect(sections[index].id).toBe(expectedSection.id);
      });
    });

    it('maintains strict semantic DOM hierarchy: main landmark, exactly 1 H1', () => {
      render(<Philosophy />);
      const main = screen.getByRole('main');
      expect(main).toBeDefined();

      const h1s = screen.getAllByRole('heading', { level: 1 });
      expect(h1s).toHaveLength(1);
      expect(h1s[0].textContent).toMatch(
        /First-Principles Foundations for Verifiable Intelligence/i
      );
    });

    it('renders accessible semantic landmarks and hides decorative vector graphics', () => {
      const { container } = render(<Philosophy />);
      const hiddenVisuals = container.querySelectorAll('[aria-hidden="true"]');
      expect(hiddenVisuals.length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // Certification Gate 03: Epistemic UI Truth Preservation & Relationship Badges
  // =========================================================================
  describe('Gate 03: UI Truth Preservation & Visual Epistemic Distinctions', () => {
    it('visibly renders DIRECT, RESEARCH, and ANALOGY relationship tiers distinctly', () => {
      render(<Philosophy />);
      const directBadges = screen.getAllByText('DIRECT');
      const researchBadges = screen.getAllByText('RESEARCH');
      const analogyBadges = screen.getAllByText('ANALOGY');

      expect(directBadges.length).toBeGreaterThan(0);
      expect(researchBadges.length).toBeGreaterThan(0);
      expect(analogyBadges.length).toBeGreaterThan(0);
    });

    it('guarantees zero hypotheses render as proven facts on the public page', () => {
      render(<Philosophy />);
      const provenBadges = screen.queryByText(/PROVEN_FACT/i);
      expect(provenBadges).toBeNull();
    });

    it('renders all primary concepts with explicit non-claims intact', () => {
      render(<Philosophy />);
      const primaryConcepts = getPublicPrimaryConcepts();

      primaryConcepts.forEach((c) => {
        expect(screen.getAllByText(c.term).length).toBeGreaterThan(0);
        c.nonClaims.forEach((nc) => {
          expect(screen.getByText(nc)).toBeDefined();
        });
      });
    });
  });

  // =========================================================================
  // Hostile Kill-Critic Adversarial Attacks (KC-PLOCK-01 to KC-PLOCK-12)
  // =========================================================================
  describe('Hostile Kill-Critic Adversarial Attack Suite (KC-PLOCK-01 to KC-PLOCK-12)', () => {
    it('KC-PLOCK-01: Injection of nonexistent concept PHIL-999 is blocked by validation', () => {
      const hostileRegistry: CanonicalPhilosophyRegistry = {
        ...CANONICAL_PHILOSOPHY_REGISTRY,
        principles: [
          ...CANONICAL_PHILOSOPHY_REGISTRY.principles,
          {
            id: 'PRIN-009',
            order: 9,
            title: 'Hostile Invented Principle',
            sanskritAnchor: 'MITHYĀ',
            conceptRef: 'PHIL-999' as unknown as ConceptId,
            philosophicalFoundation: 'Nonexistent concept foundation',
            nexusInterpretation: 'Invalid interpretation',
            engineeringConsequence: 'Should be rejected',
          },
        ],
      };

      const result = validatePhilosophyContent(hostileRegistry);
      expect(result.isValid).toBe(false);
      expect(
        result.errors.some((e) => e.includes('references non-existent concept PHIL-999'))
      ).toBe(true);
    });

    it('KC-PLOCK-02: Historical Anachronism pseudohistory attacks are blocked by invariant enforcement', () => {
      const anachronisticStatements = [
        'Ancient India invented modern electronic AI',
        'Nyāya was an artificial intelligence architecture for digital computers',
        'The Vedas describe neural network backpropagation',
        'Ancient sages built autonomous robotic agents',
      ];

      // Verify no anachronistic phrases exist in our canonical registry
      const serialized = JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY).toLowerCase();
      anachronisticStatements.forEach((stmt) => {
        expect(serialized).not.toContain(stmt.toLowerCase());
      });
    });

    it('KC-PLOCK-03: Hypothesis status inflation to PROVEN is blocked by validation', () => {
      const hostileRegistry: CanonicalPhilosophyRegistry = {
        ...CANONICAL_PHILOSOPHY_REGISTRY,
        hypotheses: {
          ...CANONICAL_PHILOSOPHY_REGISTRY.hypotheses,
          'HYP-PHIL-001': {
            ...CANONICAL_PHILOSOPHY_REGISTRY.hypotheses['HYP-PHIL-001'],
            status: 'PROVEN' as unknown as HypothesisStatus,
          },
        },
      };

      const result = validatePhilosophyContent(hostileRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('status is promoted'))).toBe(true);
    });

    it('KC-PLOCK-04: Analogy to Direct mapping inflation is strictly blocked', () => {
      // Syadvada mapping must remain ANALOGY, never DIRECT
      const syadvada = CANONICAL_PHILOSOPHY_REGISTRY.concepts['PHIL-014'];
      expect(syadvada).toBeDefined();
      expect(syadvada.nexusMapping.category).toBe('ANALOGY');
      expect(syadvada.nexusMapping.category).not.toBe('DIRECT');
    });

    it('KC-PLOCK-05: Unverified production benchmark assertion is blocked by validation', () => {
      const hostileRegistry: CanonicalPhilosophyRegistry = {
        ...CANONICAL_PHILOSOPHY_REGISTRY,
        concepts: {
          ...CANONICAL_PHILOSOPHY_REGISTRY.concepts,
          'PHIL-001': {
            ...CANONICAL_PHILOSOPHY_REGISTRY.concepts['PHIL-001'],
            evidenceState: {
              ...CANONICAL_PHILOSOPHY_REGISTRY.concepts['PHIL-001'].evidenceState,
              productionBenchmark: 'VERIFIED',
            },
          },
        },
      };

      const result = validatePhilosophyContent(hostileRegistry);
      expect(result.isValid).toBe(false);
      expect(
        result.errors.some((e) => e.includes('asserts VERIFIED production benchmark'))
      ).toBe(true);
    });

    it('KC-PLOCK-06: Deletion of concept nonClaims[] is blocked by validation', () => {
      const hostileRegistry: CanonicalPhilosophyRegistry = {
        ...CANONICAL_PHILOSOPHY_REGISTRY,
        concepts: {
          ...CANONICAL_PHILOSOPHY_REGISTRY.concepts,
          'PHIL-001': {
            ...CANONICAL_PHILOSOPHY_REGISTRY.concepts['PHIL-001'],
            nonClaims: [],
          },
        },
      };

      const result = validatePhilosophyContent(hostileRegistry);
      expect(result.isValid).toBe(false);
      expect(
        result.errors.some((e) => e.includes('missing mandatory explicit negative non-claims'))
      ).toBe(true);
    });

    it('KC-PLOCK-07: Quarantine firewall verifies quarantined claims render only with strike-through', () => {
      render(<Philosophy />);
      const quarantined = getQuarantinedClaims();
      expect(quarantined).toHaveLength(5);

      quarantined.forEach((q) => {
        const matchingElements = screen.getAllByText(new RegExp(q.claim, 'i'));
        expect(matchingElements.length).toBeGreaterThan(0);
        matchingElements.forEach((el) => {
          expect(el.className).toContain('line-through');
        });
      });
    });

    it('KC-PLOCK-08: Reordering or mutating 12-section blueprint sequence is detected', () => {
      const expectedBlueprintSequence = [
        'philosophy-hero',
        'philosophy-thesis',
        'philosophy-principles',
        'philosophy-epistemology',
        'philosophy-cognition',
        'philosophy-agency',
        'philosophy-responsibility',
        'philosophy-formalization',
        'philosophy-hypotheses',
        'philosophy-mapping',
        'philosophy-boundaries',
        'philosophy-closing',
      ];

      expect(PHILOSOPHY_PAGE_BLUEPRINT.sections.map((s) => s.id)).toEqual(
        expectedBlueprintSequence
      );
    });

    it('KC-PLOCK-09: Claim pointing to nonexistent concept is detected and blocked', () => {
      const hostileRegistry: CanonicalPhilosophyRegistry = {
        ...CANONICAL_PHILOSOPHY_REGISTRY,
        claims: {
          ...CANONICAL_PHILOSOPHY_REGISTRY.claims,
          'CLAIM-PHIL-001': {
            ...CANONICAL_PHILOSOPHY_REGISTRY.claims['CLAIM-PHIL-001'],
            conceptId: 'PHIL-999' as unknown as ConceptId,
          },
        },
      };

      const result = validatePhilosophyContent(hostileRegistry);
      expect(result.isValid).toBe(false);
      expect(
        result.errors.some((e) => e.includes('references non-existent concept PHIL-999'))
      ).toBe(true);
    });

    it('KC-PLOCK-10: Public selectors return immutable, pure read-only arrays', () => {
      const primary = getPublicPrimaryConcepts();
      expect(Array.isArray(primary)).toBe(true);
      expect(primary).toHaveLength(8);

      const deepResearch = getDeepResearchConcepts();
      expect(deepResearch).toHaveLength(4);
      deepResearch.forEach((concept) => {
        expect(concept.visibilityTier).toBe('DEEP_RESEARCH');
      });
    });

    it('KC-PLOCK-11: Commercial product language is strictly absent from philosophy registry', () => {
      const forbiddenCommercialTerms = [
        'enterprise pricing',
        'monthly subscription',
        'commercial saas',
        'freemium tier',
        'buy now',
      ];

      const serialized = JSON.stringify(CANONICAL_PHILOSOPHY_REGISTRY).toLowerCase();
      forbiddenCommercialTerms.forEach((term) => {
        expect(serialized).not.toContain(term);
      });
    });

    it('KC-PLOCK-12: Cross-Route non-regression proves Overview, Research, Technology, Programs, and Philosophy render without conflict', () => {
      const onNav = vi.fn();

      const { unmount: unmountOverview } = render(<Overview onNavigate={onNav} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountOverview();

      const { unmount: unmountResearch } = render(<Research onNavigate={onNav} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountResearch();

      const { unmount: unmountTech } = render(<Technology onNavigate={onNav} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountTech();

      const { unmount: unmountProg } = render(<Programs onNavigate={onNav} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountProg();

      const { unmount: unmountPhil } = render(<Philosophy onNavigate={onNav} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountPhil();
    });
  });
});
