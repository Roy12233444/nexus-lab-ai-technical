import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Future } from '@/pages/Future/Future';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { Technology } from '@/pages/Technology/Technology';
import { Programs } from '@/pages/Programs/Programs';
import { Philosophy } from '@/pages/Philosophy/Philosophy';
import { FUTURE_PAGE_BLUEPRINT } from '@/content/future/sectionArchitecture';
import {
  getFutureDirections,
  getOpenProblems,
  getResearchHorizons,
  getLongHorizonVision,
  getQuarantinedFutureClaims,
  getFutureNonClaims,
} from '@/content/future/future';
import { getAllFutureVisualAssets } from '@/content/future/visualRegistry';

describe('Phase 04F.6 — Hostile Verification & Immutable Lock (`/future`)', () => {
  describe('Gate 01 & KC-FLOCK-01: Canonical Truth Integrity', () => {
    it('strictly consumes the canonical FUTURE_CONTENT registry without data drift', () => {
      render(<Future />);

      // Verify all 6 FDIR titles and IDs appear from registry
      getFutureDirections().forEach((dir) => {
        expect(screen.getAllByText(dir.title).length).toBeGreaterThan(0);
        expect(screen.getAllByText(dir.id).length).toBeGreaterThan(0);
      });

      // Verify all 6 FPROB titles appear from registry
      getOpenProblems().forEach((prob) => {
        expect(screen.getByText(prob.title)).toBeDefined();
        expect(screen.getByText(prob.bottleneck)).toBeDefined();
      });
    });
  });

  describe('Gate 02 & KC-FLOCK-04: Anti-Prediction Horizon Guard', () => {
    it('preserves planning horizons as structured research windows rather than promised deadlines', () => {
      render(<Future />);
      const horizons = getResearchHorizons();

      expect(screen.getAllByText(/NEAR HORIZON/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/MEDIUM HORIZON/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/LONG HORIZON/i).length).toBeGreaterThan(0);

      // Verify explicit anti-prediction constraints for each horizon
      expect(screen.getByText(horizons.NEAR.antiPredictionConstraint)).toBeDefined();
      expect(screen.getByText(horizons.MEDIUM.antiPredictionConstraint)).toBeDefined();
      expect(screen.getByText(horizons.LONG.antiPredictionConstraint)).toBeDefined();
    });
  });

  describe('Gate 03 & KC-FLOCK-02/03: Epistemic Evidence & Capability Boundary', () => {
    it('strictly prevents promoting research directions to verified operational claims', () => {
      render(<Future />);

      // Matrix truth table must render epistemic statuses
      getFutureDirections().forEach((dir) => {
        expect(dir.epistemicStatus).not.toBe('CURRENT_CAPABILITY');
        expect([
          'RESEARCH_DIRECTION',
          'EXPLORATION',
          'FUTURE_DIRECTION',
          'LONG_HORIZON',
          'ASPIRATION',
        ]).toContain(dir.epistemicStatus);
      });
    });
  });

  describe('Gate 04 & KC-FLOCK-05: Mandatory COSMOS Spaceflight Firewall', () => {
    it('KC-FLOCK-05: Enforces visible non-operational disclaimer alongside orbital visual Image 6', () => {
      render(<Future />);
      const vision = getLongHorizonVision();

      expect(screen.getByText(/COSMOS Program Epistemic Firewall \(PROG-004\)/i)).toBeDefined();
      expect(screen.getByText(new RegExp(vision.cosmosFirewall.nature, 'i'))).toBeDefined();

      vision.cosmosFirewall.explicitNegativeBoundaries.forEach((boundary) => {
        expect(screen.getByText(new RegExp(boundary, 'i'))).toBeDefined();
      });
    });
  });

  describe('Gate 05 & KC-FLOCK-06: Image-to-Section Binding & Asset Integrity', () => {
    it('verifies exact 1-to-1 asset binding and prohibits images in data-first sections', () => {
      render(<Future />);

      // 01: Hero -> 1.png
      const heroSection = document.getElementById('future-hero');
      expect(heroSection?.querySelector('img')?.getAttribute('src')).toBe('/images/future/1.png');

      // 02: Thesis -> 2.png
      const thesisSection = document.getElementById('future-thesis');
      expect(thesisSection?.querySelector('img')?.getAttribute('src')).toBe(
        '/images/future/2.png'
      );

      // 03: Directions -> 3.png
      const dirSection = document.getElementById('future-directions');
      expect(dirSection?.querySelector('img')?.getAttribute('src')).toBe('/images/future/3.png');

      // 05: Problems -> 4.png
      const probSection = document.getElementById('future-problems');
      expect(probSection?.querySelector('img')?.getAttribute('src')).toBe('/images/future/4.png');

      // 08: Vision -> 5.png & 6.png
      const visionSection = document.getElementById('future-vision');
      const visionImgs = visionSection?.querySelectorAll('img');
      expect(visionImgs?.length).toBe(2);
      expect(visionImgs?.[0].getAttribute('src')).toBe('/images/future/5.png');
      expect(visionImgs?.[1].getAttribute('src')).toBe('/images/future/6.png');

      // 10: Closing -> 7.png
      const closingSection = document.getElementById('future-closing');
      expect(closingSection?.querySelector('img')?.getAttribute('src')).toBe(
        '/images/future/7.png'
      );

      // Data-first sections must have zero images
      ['future-horizons', 'future-evolution', 'future-matrix', 'future-boundaries'].forEach(
        (secId) => {
          const sec = document.getElementById(secId);
          expect(sec?.querySelectorAll('img').length).toBe(0);
        }
      );
    });
  });

  describe('Gate 07 & KC-FLOCK-07: Quarantine Isolation Firewall', () => {
    it('renders quarantined claims exclusively as struck-through text within quarantine box', () => {
      render(<Future />);
      const quarantined = getQuarantinedFutureClaims();

      expect(quarantined.length).toBe(4);
      quarantined.forEach((q) => {
        const el = screen.getByText(new RegExp(q.rawStatement, 'i'));
        expect(el.className).toContain('line-through');
        expect(screen.getByText(q.quarantineReason)).toBeDefined();
      });
    });
  });

  describe('Gate 08 & KC-FLOCK-08: Non-Claim Boundary Invariants', () => {
    it('verifies all 7 global negative non-claims are rendered without omission', () => {
      render(<Future />);
      const nonClaims = getFutureNonClaims();

      expect(nonClaims.length).toBe(7);
      nonClaims.forEach((claim) => {
        expect(screen.getByText(claim)).toBeDefined();
      });
    });
  });

  describe('Gate 09 & KC-FLOCK-09: 10-Section Architectural Sequence', () => {
    it('renders all 10 canonical sections in exact sequential order without corruption', () => {
      render(<Future />);

      const sectionElements = document.querySelectorAll(
        'section[id^="future-"], div[id^="future-"]'
      );
      const renderedIds = Array.from(sectionElements)
        .map((el) => el.id)
        .filter((id) => id.startsWith('future-'));

      const expectedIds = FUTURE_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(renderedIds).toEqual(expectedIds);
      expect(renderedIds).toHaveLength(10);
    });
  });

  describe('Gate 11 & KC-FLOCK-11: Semantic Accessibility & DOM Hierarchy', () => {
    it('maintains strict semantic DOM hierarchy: main landmark, exactly 1 H1', () => {
      render(<Future />);

      const h1s = screen.getAllByRole('heading', { level: 1 });
      expect(h1s).toHaveLength(1);
      expect(h1s[0].textContent).toContain('The Horizon of Resilient Autonomous Intelligence');

      const main = screen.getByRole('main');
      expect(main.getAttribute('id')).toBe('main-content');
    });

    it('KC-FLOCK-13: Verifies all 7 visual assets possess descriptive, meaningful alt text', () => {
      getAllFutureVisualAssets().forEach((asset) => {
        expect(asset.altText.length).toBeGreaterThan(20);
        expect(asset.altText).not.toContain('FUTURE-IMG');
      });
    });
  });

  describe('Gate 14 & KC-FLOCK-12: Cross-Route Non-Regression Lock', () => {
    it('proves Overview, Research, Technology, Programs, Philosophy, and Future co-exist without conflict', () => {
      const handleNavigate = vi.fn();

      // Render Overview
      const { unmount: unmountOverview } = render(<Overview onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountOverview();

      // Render Research
      const { unmount: unmountResearch } = render(<Research onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountResearch();

      // Render Technology
      const { unmount: unmountTech } = render(<Technology onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountTech();

      // Render Programs
      const { unmount: unmountPrograms } = render(<Programs onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountPrograms();

      // Render Philosophy
      const { unmount: unmountPhilosophy } = render(<Philosophy onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      unmountPhilosophy();

      // Render Future
      const { unmount: unmountFuture } = render(<Future onNavigate={handleNavigate} />);
      expect(screen.getByRole('main')).toBeDefined();
      expect(document.getElementById('future-hero')).not.toBeNull();
      expect(document.getElementById('future-closing')).not.toBeNull();
      unmountFuture();
    });
  });
});
