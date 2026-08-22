import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Future } from '@/pages/Future/Future';
import { FUTURE_PAGE_BLUEPRINT } from '@/content/future/sectionArchitecture';
import { getFutureThesis, getFutureDirections, getOpenProblems } from '@/content/future/future';

describe('Phase 04F.5 — Physical Future UI Implementation (`/future`)', () => {
  describe('Structural & Architectural Integrity', () => {
    it('renders all 10 canonical sections in exact sequential order', () => {
      render(<Future />);

      FUTURE_PAGE_BLUEPRINT.sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        expect(el).not.toBeNull();
      });

      // Verify exact linear sequence in DOM
      const sectionElements = document.querySelectorAll('section[id^="future-"], div[id^="future-"]');
      const renderedIds = Array.from(sectionElements)
        .map((el) => el.id)
        .filter((id) => id.startsWith('future-'));

      const expectedIds = FUTURE_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(renderedIds).toEqual(expectedIds);
    });

    it('maintains strict semantic DOM hierarchy with exactly one H1', () => {
      render(<Future />);
      const h1s = screen.getAllByRole('heading', { level: 1 });
      expect(h1s).toHaveLength(1);
      expect(h1s[0].textContent).toContain('The Horizon of Resilient Autonomous Intelligence');
    });

    it('renders main landmark with skip link structure', () => {
      render(<Future />);
      const main = screen.getByRole('main');
      expect(main).toBeDefined();
      expect(main.getAttribute('id')).toBe('main-content');
    });
  });

  describe('Canonical Content Rendering', () => {
    it('renders the canonical Future Thesis and derivation sequence', () => {
      render(<Future />);
      const thesis = getFutureThesis();
      expect(screen.getByText(thesis.statement)).toBeDefined();

      thesis.derivationSteps.forEach((step) => {
        expect(screen.getByText(step.step)).toBeDefined();
        expect(screen.getByText(step.description)).toBeDefined();
      });
    });

    it('renders all six canonical Future Directions (FDIR-001 to FDIR-006)', () => {
      render(<Future />);
      const directions = getFutureDirections();

      directions.forEach((dir) => {
        expect(screen.getAllByText(dir.title).length).toBeGreaterThan(0);
        expect(screen.getByText(dir.tagline)).toBeDefined();
        expect(screen.getAllByText(dir.id).length).toBeGreaterThan(0);
      });
    });

    it('renders all six Open Problems (FPROB-001 to FPROB-006) with bottlenecks', () => {
      render(<Future />);
      const problems = getOpenProblems();

      problems.forEach((prob) => {
        expect(screen.getByText(prob.title)).toBeDefined();
        expect(screen.getByText(prob.bottleneck)).toBeDefined();
      });
    });

    it('renders the 3 planning horizons with anti-prediction constraints', () => {
      render(<Future />);
      expect(screen.getAllByText(/NEAR HORIZON/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/MEDIUM HORIZON/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/LONG HORIZON/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Anti-Prediction Constraint/i).length).toBeGreaterThanOrEqual(3);
    });

    it('renders the systems evolution hierarchy nodes (EVO-01 to EVO-04)', () => {
      render(<Future />);
      expect(screen.getByText('EVO-01')).toBeDefined();
      expect(screen.getByText('EVO-02')).toBeDefined();
      expect(screen.getByText('EVO-03')).toBeDefined();
      expect(screen.getByText('EVO-04')).toBeDefined();
    });

    it('renders global negative boundaries and quarantined claim box', () => {
      render(<Future />);
      expect(
        screen.getByText(/Global Negative Boundaries \(What Nexus LAB AI Does NOT Claim\)/i)
      ).toBeDefined();
      expect(
        screen.getByText(/Quarantine Isolation Firewall \(Prohibited Claims Demonstration\)/i)
      ).toBeDefined();
      expect(screen.getByText('QCLAIM-FUT-001')).toBeDefined();
    });
  });

  describe('Visual Assets & Section Mapping Integrity', () => {
    it('binds Image 1 to Section 01 (future-hero)', () => {
      render(<Future />);
      const heroSection = document.getElementById('future-hero');
      const img = heroSection?.querySelector('img');
      expect(img?.getAttribute('src')).toBe('/images/future/1.png');
      expect(img?.getAttribute('alt')).toContain('Earth floating');
    });

    it('binds Image 2 to Section 02 (future-thesis)', () => {
      render(<Future />);
      const thesisSection = document.getElementById('future-thesis');
      const img = thesisSection?.querySelector('img');
      expect(img?.getAttribute('src')).toBe('/images/future/2.png');
      expect(img?.getAttribute('alt')).toContain('human standing');
    });

    it('binds Image 3 to Section 03 (future-directions)', () => {
      render(<Future />);
      const dirSection = document.getElementById('future-directions');
      const img = dirSection?.querySelector('img');
      expect(img?.getAttribute('src')).toBe('/images/future/3.png');
      expect(img?.getAttribute('alt')).toContain('team of engineers');
    });

    it('binds Image 4 to Section 05 (future-problems)', () => {
      render(<Future />);
      const probSection = document.getElementById('future-problems');
      const img = probSection?.querySelector('img');
      expect(img?.getAttribute('src')).toBe('/images/future/4.png');
      expect(img?.getAttribute('alt')).toContain('computational node topologies');
    });

    it('binds Image 5 and Image 6 to Section 08 (future-vision)', () => {
      render(<Future />);
      const visionSection = document.getElementById('future-vision');
      const imgs = visionSection?.querySelectorAll('img');
      expect(imgs?.length).toBe(2);
      expect(imgs?.[0].getAttribute('src')).toBe('/images/future/5.png');
      expect(imgs?.[1].getAttribute('src')).toBe('/images/future/6.png');
    });

    it('binds Image 7 to Section 10 (future-closing)', () => {
      render(<Future />);
      const closingSection = document.getElementById('future-closing');
      const img = closingSection?.querySelector('img');
      expect(img?.getAttribute('src')).toBe('/images/future/7.png');
      expect(img?.getAttribute('alt')).toContain('group of humans standing together');
    });

    it('preserves zero images in data-first sections (Horizons, Evolution, Matrix, Boundaries)', () => {
      render(<Future />);
      const noImageSectionIds = [
        'future-horizons',
        'future-evolution',
        'future-matrix',
        'future-boundaries',
      ];

      noImageSectionIds.forEach((secId) => {
        const sec = document.getElementById(secId);
        const imgs = sec?.querySelectorAll('img');
        expect(imgs?.length).toBe(0);
      });
    });
  });

  describe('Epistemic Firewall & Security Invariants', () => {
    it('KC-FUI-04: Visibly displays COSMOS spaceflight firewall disclaimer in Section 08', () => {
      render(<Future />);
      expect(screen.getByText(/COSMOS Program Epistemic Firewall \(PROG-004\)/i)).toBeDefined();
      expect(
        screen.getByText(/COSMOS is NOT an operational spaceflight hardware mission/i)
      ).toBeDefined();
    });

    it('KC-FUI-06: Verifies quarantined claims render exclusively as struck-through text', () => {
      render(<Future />);
      const quarantinedText = screen.getByText(
        /"Nexus LAB AI has deployed an orbital autonomous AI constellation in Low Earth Orbit\."/i
      );
      expect(quarantinedText.className).toContain('line-through');
    });

    it('triggers onNavigate callback when clicking closing exploration links', () => {
      const handleNavigate = vi.fn();
      render(<Future onNavigate={handleNavigate} />);

      const researchLink = screen.getByRole('link', { name: /Research Programs/i });
      fireEvent.click(researchLink);
      expect(handleNavigate).toHaveBeenCalledWith('/research');
    });
  });
});
