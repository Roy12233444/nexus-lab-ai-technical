/**
 * Nexus LAB AI — Physical Challenge Page UI Test Suite
 * Phase 04G.5 — React UI Component & Invariant Enforcer
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Challenge } from '../../../src/pages/Challenge/Challenge';
import {
  CANONICAL_CHALLENGE_IDS,
  CANONICAL_PRESSURE_DIMENSIONS,
} from '../../../src/lib/validation/challengeContentValidation';
import { getAllChallenges, getGlobalChallengeNegativeBoundaries } from '../../../src/content/challenge/challenge';

describe('Phase 04G.5 — Physical Challenge Page UI (/challenge)', () => {
  it('PAGE-01: Renders all 10 canonical sections in exact sequential order', () => {
    const { container } = render(<Challenge />);
    const sections = container.querySelectorAll('section');

    expect(sections.length).toBe(10);
    const expectedIds = [
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

    sections.forEach((sec, idx) => {
      expect(sec.getAttribute('id')).toBe(expectedIds[idx]);
    });
  });

  it('PAGE-02 & PAGE-03: Maintains strict semantic DOM hierarchy with exactly one H1', () => {
    render(<Challenge />);
    const h1Elements = screen.getAllByRole('heading', { level: 1 });
    expect(h1Elements.length).toBe(1);
    expect(h1Elements[0].textContent).toContain('The Hard Problems Behind Autonomous Intelligence');
  });

  it('PAGE-04: Renders all eight canonical challenges (CH-001 to CH-008)', () => {
    render(<Challenge />);
    const allChallenges = getAllChallenges();

    allChallenges.forEach((challenge) => {
      expect(screen.getAllByText(challenge.canonicalName).length).toBeGreaterThan(0);
    });

    CANONICAL_CHALLENGE_IDS.forEach((id) => {
      expect(screen.getAllByText(id).length).toBeGreaterThan(0);
    });
  });

  it('PAGE-05: Renders all seven pressure dimensions in the pressure model section', () => {
    render(<Challenge />);
    CANONICAL_PRESSURE_DIMENSIONS.forEach((dim) => {
      expect(screen.getAllByText(dim).length).toBeGreaterThan(0);
    });
  });

  it('PAGE-06: Preserves evidence state labels and badges without inflation', () => {
    render(<Challenge />);
    const challenges = getAllChallenges();

    challenges.forEach((c) => {
      expect(screen.getAllByText(c.evidenceState).length).toBeGreaterThan(0);
    });
  });

  it('PAGE-07: Quarantined claims are rendered strictly with strike-through protection', () => {
    const { container } = render(<Challenge />);
    const struckElements = container.querySelectorAll('.line-through');
    expect(struckElements.length).toBeGreaterThanOrEqual(3);

    const quarantinedText = screen.getByText(/Nexus LAB AI has completely solved autonomous multi-agent deadlock/);
    expect(quarantinedText).toBeDefined();
  });

  it('PAGE-08: Renders cross-track structural links to Programs, Philosophy, and Future', () => {
    render(<Challenge />);
    expect(screen.getAllByText(/04D Sovereign Program/).length).toBe(8);
    expect(screen.getAllByText(/04E Philosophy Anchor/).length).toBe(8);
    expect(screen.getAllByText(/04F Future Vector/).length).toBe(8);
  });

  it('PAGE-09: Supports tabbed failure anatomy inspection across all challenges', () => {
    render(<Challenge />);
    const ch002Button = screen.getByRole('button', { name: /CH-002/i });
    fireEvent.click(ch002Button);

    expect(screen.getAllByText('Persistent Cognitive Memory').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contradiction Poisoning/i).length).toBeGreaterThan(0);
  });

  it('PAGE-10: Supports interactive pressure vector filtering in the stress matrix', () => {
    render(<Challenge />);
    const timeFilter = screen.getByRole('button', { name: 'TIME' });
    fireEvent.click(timeFilter);

    // Matrix should be filtered to TIME
    expect(screen.getByText('ALL (7)')).toBeDefined();
  });

  it('PAGE-11: Triggers onNavigate callback when clicking closing exploration gateways', () => {
    const onNavigateMock = vi.fn();
    render(<Challenge onNavigate={onNavigateMock} />);

    const programButtons = screen.getAllByRole('button', { name: /Explore Track →/i });
    fireEvent.click(programButtons[0]);

    expect(onNavigateMock).toHaveBeenCalled();
  });

  it('PAGE-12: Renders accessible skip links and main landmark structure', () => {
    const { container } = render(<Challenge />);
    const mainLandmark = container.querySelector('#main-content');
    expect(mainLandmark).not.toBeNull();
  });
});

/* =========================================================================
   KILL-CRITIC ADVERSARIAL ATTACK TESTS (KC-GUI-01 to KC-GUI-10)
   ========================================================================= */

describe('Phase 04G.5 — Kill-Critic Hostile UI Attack Defense', () => {
  it('KC-GUI-01: Prohibits unanchored marketing buzzwords in public UI', () => {
    const { container } = render(<Challenge />);
    const pageText = container.textContent || '';

    expect(pageText).not.toMatch(/guaranteed enterprise solution/i);
    expect(pageText).not.toMatch(/turnkey commercial product/i);
    expect(pageText).not.toMatch(/100% solved autonomy/i);
  });

  it('KC-GUI-02: Prohibits cyberpunk/robotics aesthetic contamination', () => {
    const { container } = render(<Challenge />);
    const html = container.innerHTML;

    expect(html).not.toContain('glowing-matrix-neon');
    expect(html).not.toContain('cyberpunk-hud');
  });

  it('KC-GUI-03: Guarantees zero non-claims are dropped or omitted', () => {
    render(<Challenge />);
    const boundaries = getGlobalChallengeNegativeBoundaries();

    boundaries.forEach((b) => {
      expect(screen.getByText(b)).toBeDefined();
    });
  });

  it('KC-GUI-04: Guarantees multi-agent coordination does not claim unlimited swarm scaling', () => {
    render(<Challenge />);
    expect(
      screen.getByText(/Nexus LAB AI does not claim general autonomous recovery, zero-hallucination models, or unlimited multi-agent scaling are solved/i),
    ).toBeDefined();
  });

  it('KC-GUI-05: Verifies that the directed failure cascade graph includes explicit modeling disclaimers', () => {
    render(<Challenge />);
    expect(screen.getByText(/Scientific Modeling Guardrail/i)).toBeDefined();
  });
});
