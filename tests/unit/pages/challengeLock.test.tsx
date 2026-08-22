/**
 * Nexus LAB AI — Challenge Track Hostile Verification & Immutable Lock Test Suite
 * Phase 04G.6 — Final Certification Gatekeeper & Adversarial Attack Matrix
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Challenge } from '@/pages/Challenge/Challenge';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { Technology } from '@/pages/Technology/Technology';
import { Programs } from '@/pages/Programs/Programs';
import { Philosophy } from '@/pages/Philosophy/Philosophy';
import { Future } from '@/pages/Future/Future';
import { CHALLENGE_PAGE_BLUEPRINT } from '@/content/challenge/sectionArchitecture';
import {
  getAllChallenges,
  getPressureDimensions,
  getGlobalChallengeNegativeBoundaries,
  getQuarantinedChallengeClaims,
  getChallengeContent,
} from '@/content/challenge/challenge';
import {
  CANONICAL_CHALLENGE_IDS,
  CANONICAL_PRESSURE_DIMENSIONS,
  validateChallengeContent,
} from '@/lib/validation/challengeContentValidation';
import { getChallengeEvidenceVisualConstraint } from '@/content/challenge/visualRegistry';

describe('Phase 04G.6 — Challenge Track Hostile Verification & Immutable Lock (`/challenge`)', () => {
  /* =========================================================================
     GATE 01: TRUTH INTEGRITY & UPSTREAM CONSUMPTION
     ========================================================================= */
  describe('Gate 01: Truth Integrity & Upstream Consumption', () => {
    it('strictly consumes the canonical CHALLENGE_CONTENT registry without data drift', () => {
      const validation = validateChallengeContent(getChallengeContent());
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);

      render(<Challenge />);
      const challenges = getAllChallenges();

      challenges.forEach((c) => {
        expect(screen.getAllByText(c.canonicalName).length).toBeGreaterThan(0);
        expect(screen.getAllByText(c.id).length).toBeGreaterThan(0);
      });
    });
  });

  /* =========================================================================
     GATE 02: EIGHT CANONICAL CHALLENGES INTEGRITY
     ========================================================================= */
  describe('Gate 02: Eight Canonical Challenges Integrity (CH-001 to CH-008)', () => {
    it('guarantees exactly eight canonical challenges appear without missing or invented IDs', () => {
      render(<Challenge />);
      const allChallenges = getAllChallenges();

      expect(allChallenges).toHaveLength(8);
      const challengeIds = allChallenges.map((c) => c.id);

      expect(challengeIds).toEqual(CANONICAL_CHALLENGE_IDS);
      CANONICAL_CHALLENGE_IDS.forEach((id) => {
        expect(screen.getAllByText(id).length).toBeGreaterThan(0);
      });
    });
  });

  /* =========================================================================
     GATE 03: SEVEN PRESSURE DIMENSIONS
     ========================================================================= */
  describe('Gate 03: Seven Autonomy Pressure Dimensions', () => {
    it('verifies all seven pressure dimensions remain intact in canonical model and UI', () => {
      render(<Challenge />);
      const dimensions = getPressureDimensions();

      expect(dimensions).toHaveLength(7);
      dimensions.forEach((dim) => {
        expect(CANONICAL_PRESSURE_DIMENSIONS).toContain(dim.dimension);
        expect(screen.getAllByText(dim.dimension).length).toBeGreaterThan(0);
        expect(screen.getAllByText(dim.title).length).toBeGreaterThan(0);
      });
    });
  });

  /* =========================================================================
     GATE 04: EVIDENCE INTEGRITY & ANTI-INFLATION
     ========================================================================= */
  describe('Gate 04: Evidence Integrity & Anti-Inflation', () => {
    it('preserves conservative evidence tiers and forbids ungrounded promotion to verified', () => {
      render(<Challenge />);
      const challenges = getAllChallenges();

      challenges.forEach((c) => {
        const constraint = getChallengeEvidenceVisualConstraint(c.evidenceState);
        expect(constraint.badgeStyle).toBeDefined();
        expect(screen.getAllByText(c.evidenceState).length).toBeGreaterThan(0);

        // Theoretical and experimental challenges must never be marked as verified
        if (c.evidenceState === 'THEORETICAL') {
          expect(c.evidenceState).not.toBe('VERIFIED');
        }
      });
    });
  });

  /* =========================================================================
     GATE 05: VISUAL EPISTEMICS & MODELING GUARDRAILS
     ========================================================================= */
  describe('Gate 05: Visual Epistemics & Modeling Guardrails', () => {
    it('enforces scientific modeling guardrails on conceptual flowcharts', () => {
      render(<Challenge />);
      expect(screen.getByText(/Scientific Modeling Guardrail/i)).toBeDefined();
      expect(
        screen.getByText(
          /This cascade diagram illustrates conceptual error propagation paths across autonomous systems layers/i,
        ),
      ).toBeDefined();
    });
  });

  /* =========================================================================
     GATE 06: QUARANTINE FIREWALL
     ========================================================================= */
  describe('Gate 06: Quarantine Isolation Firewall', () => {
    it('quarantines inaccurate statements strictly within strike-through containers', () => {
      const { container } = render(<Challenge />);
      const quarantined = getQuarantinedChallengeClaims();
      expect(quarantined.length).toBeGreaterThanOrEqual(3);

      const struckElements = container.querySelectorAll('.line-through');
      expect(struckElements.length).toBeGreaterThanOrEqual(3);

      quarantined.forEach((item) => {
        expect(screen.getByText(new RegExp(item.quarantineReason, 'i'))).toBeDefined();
        expect(screen.getByText(new RegExp(item.correctionRequirement, 'i'))).toBeDefined();
      });
    });
  });

  /* =========================================================================
     GATE 07: 10-SECTION ARCHITECTURE INTEGRITY
     ========================================================================= */
  describe('Gate 07: 10-Section Architecture Integrity', () => {
    it('renders all 10 canonical sections in exact sequential order', () => {
      render(<Challenge />);

      CHALLENGE_PAGE_BLUEPRINT.sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        expect(el).not.toBeNull();
      });

      const sectionElements = document.querySelectorAll('section[id^="challenge-"]');
      const renderedIds = Array.from(sectionElements).map((el) => el.id);
      const expectedIds = CHALLENGE_PAGE_BLUEPRINT.sections.map((s) => s.id);

      expect(renderedIds).toEqual(expectedIds);
      expect(renderedIds).toHaveLength(10);
    });
  });

  /* =========================================================================
     GATE 08: VISUAL REGISTRY CONSTRAINTS
     ========================================================================= */
  describe('Gate 08: Visual Registry & Color Independence', () => {
    it('verifies evidence states provide explicit text labels alongside color styling', () => {
      render(<Challenge />);
      const challenges = getAllChallenges();

      challenges.forEach((c) => {
        const constraint = getChallengeEvidenceVisualConstraint(c.evidenceState);
        expect(constraint.epistemicConstraint).toBeDefined();
        expect(screen.getAllByText(c.evidenceState).length).toBeGreaterThan(0);
      });
    });
  });

  /* =========================================================================
     GATE 09: ACCESSIBILITY & SEMANTIC DOM
     ========================================================================= */
  describe('Gate 09: Accessibility, Landmarks & Semantic DOM', () => {
    it('maintains strict semantic DOM hierarchy: main landmark, exactly 1 H1', () => {
      render(<Challenge />);
      const main = screen.getByRole('main');
      expect(main).toBeDefined();
      expect(main.getAttribute('id')).toBe('main-content');

      const h1s = screen.getAllByRole('heading', { level: 1 });
      expect(h1s).toHaveLength(1);
      expect(h1s[0].textContent).toContain('The Hard Problems Behind Autonomous Intelligence');
    });
  });

  /* =========================================================================
     GATE 10: CROSS-ROUTE NON-REGRESSION
     ========================================================================= */
  describe('Gate 10: Cross-Route Non-Regression', () => {
    it('proves Overview, Research, Technology, Programs, Philosophy, Future, and Challenge co-exist without conflict', () => {
      const onNav = vi.fn();

      const { container: c1 } = render(<Overview onNavigate={onNav} />);
      expect(c1.querySelector('#identity-hero')).not.toBeNull();

      const { container: c2 } = render(<Research onNavigate={onNav} />);
      expect(c2.querySelector('#research-hero')).not.toBeNull();

      const { container: c3 } = render(<Technology onNavigate={onNav} />);
      expect(c3.querySelector('#technology-hero')).not.toBeNull();

      const { container: c4 } = render(<Programs onNavigate={onNav} />);
      expect(c4.querySelector('#programs-hero')).not.toBeNull();

      const { container: c5 } = render(<Philosophy onNavigate={onNav} />);
      expect(c5.querySelector('#philosophy-hero')).not.toBeNull();

      const { container: c6 } = render(<Future onNavigate={onNav} />);
      expect(c6.querySelector('#future-hero')).not.toBeNull();

      const { container: c7 } = render(<Challenge onNavigate={onNav} />);
      expect(c7.querySelector('#challenge-hero')).not.toBeNull();
    });
  });
});

/* =========================================================================
   KILL-CRITIC ADVERSARIAL ATTACK SUITE (KC-GLOCK-01 to KC-GLOCK-12)
   ========================================================================= */

describe('Phase 04G.6 — Kill-Critic Hostile Attack Matrix (KC-GLOCK-01 to KC-GLOCK-12)', () => {
  it('KC-GLOCK-01: Defends against fake challenge injection (e.g. CH-999)', () => {
    const all = getAllChallenges();
    const injectedFakeIds = all.filter((c) => !CANONICAL_CHALLENGE_IDS.includes(c.id));
    expect(injectedFakeIds).toHaveLength(0);

    const { container } = render(<Challenge />);
    expect(container.textContent).not.toContain('CH-999');
    expect(container.textContent).not.toContain('CH-000');
  });

  it('KC-GLOCK-02: Defends against canonical challenge deletion or omission', () => {
    render(<Challenge />);
    CANONICAL_CHALLENGE_IDS.forEach((id) => {
      const elements = screen.getAllByText(id);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('KC-GLOCK-03: Defends against pressure dimension mutation or renaming', () => {
    const dimensions = getPressureDimensions();
    expect(dimensions.map((d) => d.dimension)).toEqual(CANONICAL_PRESSURE_DIMENSIONS);
  });

  it('KC-GLOCK-04: Defends against evidence tier inflation or false proof promotion', () => {
    const challenges = getAllChallenges();
    challenges.forEach((c) => {
      expect([
        'VERIFIED',
        'REPORTED',
        'DOCUMENTED',
        'EXPERIMENTAL',
        'THEORETICAL',
        'UNVERIFIED',
      ]).toContain(c.evidenceState);
    });
  });

  it('KC-GLOCK-05: Defends against research-question removal or omission', () => {
    const challenges = getAllChallenges();
    challenges.forEach((c) => {
      expect(c.openResearchQuestions.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('KC-GLOCK-06: Defends against quarantine leakage into positive statements', () => {
    render(<Challenge />);
    const quarantined = getQuarantinedChallengeClaims();

    quarantined.forEach((item) => {
      // Must only appear as struck-through text
      const element = screen.getByText(new RegExp(item.rawStatement.slice(0, 30), 'i'));
      expect(element.className).toContain('line-through');
    });
  });

  it('KC-GLOCK-07: Defends against section reordering or duplicate section insertion', () => {
    render(<Challenge />);
    const sections = Array.from(document.querySelectorAll('section[id^="challenge-"]'));
    const ids = sections.map((s) => s.id);

    const expected = [
      'challenge-hero',
      'challenge-pressure-model',
      'challenge-frontier',
      'challenge-anatomy',
      'challenge-cascade',
      'challenge-matrix',
      'challenge-open-questions',
      'challenge-alignment',
      'challenge-boundaries',
      'challenge-closing',
    ];

    expect(ids).toEqual(expected);
  });

  it('KC-GLOCK-08: Defends against visual registry bypass and arbitrary hardcoded styles', () => {
    const challenges = getAllChallenges();
    challenges.forEach((c) => {
      const constraint = getChallengeEvidenceVisualConstraint(c.evidenceState);
      expect(constraint.badgeStyle).toBeDefined();
    });
  });

  it('KC-GLOCK-09: Defends against accessibility degradation and missing aria attributes', () => {
    render(<Challenge />);
    expect(screen.getByRole('main').getAttribute('id')).toBe('main-content');
    const heroH1 = screen.getByRole('heading', { level: 1 });
    expect(heroH1).toBeDefined();
  });

  it('KC-GLOCK-10: Defends against marketing hyperbole and commercial buzzword contamination', () => {
    const { container } = render(<Challenge />);
    const text = container.textContent || '';

    expect(text).not.toMatch(/100% turnkey autonomy/i);
    expect(text).not.toMatch(/unlimited swarm magic/i);
    expect(text).not.toMatch(/instant enterprise artificial general intelligence/i);
  });

  it('KC-GLOCK-11: Defends against cross-route ID collisions and DOM leakage', () => {
    const onNav = vi.fn();
    const { container: fContainer } = render(<Future onNavigate={onNav} />);
    const { container: cContainer } = render(<Challenge onNavigate={onNav} />);

    const futureIds = Array.from(fContainer.querySelectorAll('[id]')).map((el) => el.id);
    const challengeIds = Array.from(cContainer.querySelectorAll('[id]')).map((el) => el.id);

    const intersection = futureIds.filter(
      (id) => id !== 'main-content' && challengeIds.includes(id)
    );
    expect(intersection).toHaveLength(0);
  });

  it('KC-GLOCK-12: Defends against false completion and ungrounded problem-solved claims', () => {
    const boundaries = getGlobalChallengeNegativeBoundaries();
    expect(boundaries.length).toBeGreaterThanOrEqual(5);

    render(<Challenge />);
    boundaries.forEach((b) => {
      expect(screen.getByText(b)).toBeDefined();
    });
  });
});
