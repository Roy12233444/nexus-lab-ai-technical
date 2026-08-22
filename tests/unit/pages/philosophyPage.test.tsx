/**
 * Nexus LAB AI — Philosophy Page UI & Adversarial Test Suite
 * Phase 04E.5 — Verification of 12-Section Rendering, Selectors, and Epistemic Safeguards
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Philosophy } from '@/pages/Philosophy/Philosophy';
import { PHILOSOPHY_PAGE_BLUEPRINT } from '@/content/philosophy/sectionArchitecture';
import {
  CANONICAL_PHILOSOPHY_REGISTRY,
  getPublicPhilosophyPrinciples,
  getPublicPrimaryConcepts,
} from '@/content/philosophy/philosophy';
import { ROUTES } from '@/lib/routes';

describe('Phase 04E.5 — Philosophy Page UI Implementation', () => {
  // =========================================================================
  // 1. Full 12-Section Sequential Rendering
  // =========================================================================
  describe('1. Full 12-Section Sequential Rendering', () => {
    it('renders all 12 canonical sections in exact sequential order', () => {
      const { container } = render(<Philosophy />);
      const sections = container.querySelectorAll('section');

      expect(sections).toHaveLength(12);

      PHILOSOPHY_PAGE_BLUEPRINT.sections.forEach((expectedSection, index) => {
        expect(sections[index].id).toBe(expectedSection.id);
      });
    });

    it('maintains strict semantic DOM hierarchy: exactly one H1 in hero section', () => {
      render(<Philosophy />);
      const h1s = screen.getAllByRole('heading', { level: 1 });
      expect(h1s).toHaveLength(1);
      expect(h1s[0].textContent).toMatch(
        /First-Principles Foundations for Verifiable Intelligence/i
      );
    });

    it('renders accessible semantic landmarks and hides decorative vector visuals', () => {
      const { container } = render(<Philosophy />);
      const hiddenVisuals = container.querySelectorAll('[aria-hidden="true"]');
      expect(hiddenVisuals.length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // 2. Canonical Selectors & Content Rendering
  // =========================================================================
  describe('2. Canonical Selectors & Content Rendering', () => {
    it('renders all eight public principles from getPublicPhilosophyPrinciples()', () => {
      render(<Philosophy />);
      const principles = getPublicPhilosophyPrinciples();

      principles.forEach((p) => {
        expect(screen.getByText(p.title)).toBeDefined();
        expect(screen.getByText(`⚙️ ${p.engineeringConsequence}`)).toBeDefined();
      });
    });

    it('renders all primary concepts with their classical definitions and non-claims', () => {
      render(<Philosophy />);
      const primaryConcepts = getPublicPrimaryConcepts();

      primaryConcepts.forEach((c) => {
        const terms = screen.getAllByText(c.term);
        expect(terms.length).toBeGreaterThan(0);

        // Verify non-claims render
        c.nonClaims.forEach((nc) => {
          expect(screen.getByText(nc)).toBeDefined();
        });
      });
    });

    it('renders all 8 testable AI hypotheses with HYPOTHESIS status badges', () => {
      render(<Philosophy />);
      const hypotheses = Object.values(CANONICAL_PHILOSOPHY_REGISTRY.hypotheses);

      hypotheses.forEach((h) => {
        expect(screen.getByText(h.title)).toBeDefined();
        expect(screen.getAllByText(`● ${h.status}`).length).toBeGreaterThan(0);
      });
    });
  });

  // =========================================================================
  // 3. Kill-Critic Hostile Adversarial UI Attacks
  // =========================================================================
  describe('3. Kill-Critic Hostile Adversarial UI Attacks', () => {
    it('KC-UI-01: Verifies quarantined claims appear strictly strike-through in quarantine box', () => {
      render(<Philosophy />);
      const quarantined = CANONICAL_PHILOSOPHY_REGISTRY.quarantinedClaims;

      quarantined.forEach((q) => {
        const claimElements = screen.getAllByText(new RegExp(q.claim, 'i'));
        expect(claimElements.length).toBeGreaterThan(0);
        claimElements.forEach((el) => {
          expect(el.className).toContain('line-through');
        });
      });
    });

    it('KC-UI-02: Guarantees zero hypotheses render as proven engineering facts', () => {
      render(<Philosophy />);
      const provenBadges = screen.queryByText(/● PROVEN_FACT/i);
      expect(provenBadges).toBeNull();
    });

    it('KC-UI-03: Visibly differentiates DIRECT vs RESEARCH vs ANALOGY relationship tiers in mapping table', () => {
      render(<Philosophy />);
      const directBadges = screen.getAllByText('DIRECT');
      const researchBadges = screen.getAllByText('RESEARCH');
      const analogyBadges = screen.getAllByText('ANALOGY');

      expect(directBadges.length).toBeGreaterThan(0);
      expect(researchBadges.length).toBeGreaterThan(0);
      expect(analogyBadges.length).toBeGreaterThan(0);
    });

    it('KC-UI-04: Triggers onNavigate callback when clicking closing gateway links', () => {
      const onNavigateMock = vi.fn();

      render(<Philosophy onNavigate={onNavigateMock} />);
      const researchButton = screen.getByRole('button', { name: /Research Programs/i });

      fireEvent.click(researchButton);
      expect(onNavigateMock).toHaveBeenCalledWith(ROUTES.RESEARCH);
    });
  });
});
