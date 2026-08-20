/**
 * Nexus LAB AI — Programs Page Unit & Adversarial Tests
 * Phase 04D.5 — UI Verification & Invariant Enforcement
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Programs } from '@/pages/Programs/Programs';

describe('Phase 04D.5 — Programs UI Page Implementation', () => {
  // =========================================================================
  // 1. Page Assembly & Sequential Section Structure
  // =========================================================================
  describe('1. Page Assembly & Sequential Section Structure', () => {
    it('renders all 8 canonical sections in exact sequential order', () => {
      const { container } = render(<Programs />);
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);

      const expectedIds = [
        'programs-hero',
        'programs-thesis',
        'programs-core',
        'programs-state',
        'programs-supporting',
        'programs-context',
        'programs-boundaries',
        'programs-closing',
      ];

      sections.forEach((section, index) => {
        expect(section.getAttribute('id')).toBe(expectedIds[index]);
      });
    });

    it('maintains strict semantic DOM hierarchy with exactly one h1', () => {
      render(<Programs />);
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements.length).toBe(1);
      expect(h1Elements[0].textContent).toContain('Sovereign Engineering');
    });

    it('renders accessible semantic landmarks and hides decorative vector visuals', () => {
      const { container } = render(<Programs />);
      const mainLandmark = container.querySelector('main');
      expect(mainLandmark).toBeDefined();

      const ariaHiddenVisuals = container.querySelectorAll('[aria-hidden="true"]');
      expect(ariaHiddenVisuals.length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // 2. Program Portfolio & Selective Rendering
  // =========================================================================
  describe('2. Program Portfolio & Selective Rendering', () => {
    it('renders all four primary sovereign programs in Core section', () => {
      render(<Programs />);
      expect(screen.getAllByText('NALA').length).toBeGreaterThan(0);
      expect(screen.getAllByText('AMP').length).toBeGreaterThan(0);
      expect(screen.getAllByText('RTA-GUARD').length).toBeGreaterThan(0);
      expect(screen.getAllByText('COSMOS').length).toBeGreaterThan(0);
    });

    it('renders all three supporting systems in Supporting section', () => {
      render(<Programs />);
      expect(screen.getAllByText('CHAITANYA / SAPTACORE').length).toBeGreaterThan(0);
      expect(screen.getAllByText('PHANTAKSHA').length).toBeGreaterThan(0);
      expect(screen.getAllByText('RFA').length).toBeGreaterThan(0);
    });

    it('renders GRAMVANI with applied context framing in Context section', () => {
      render(<Programs />);
      expect(screen.getAllByText('GRAMVANI').length).toBeGreaterThan(0);
      expect(screen.getByText(/Applied Program Framing/i)).toBeDefined();
    });

    it('strictly excludes non-public, retrospective, and quarantined candidates', () => {
      render(<Programs />);
      const forbidden = [
        'AGRIVERSE',
        'EMMA',
        'DeadReckoning',
        'Aetherion-dLHC',
        'Lyra',
        'ShadowTrace',
        'SynaptiCode Speculative',
      ];

      forbidden.forEach((candidate) => {
        expect(screen.queryByText(candidate)).toBeNull();
      });
    });
  });

  // =========================================================================
  // 3. 4-Axis Epistemic State Decoupling
  // =========================================================================
  describe('3. 4-Axis Epistemic State Decoupling', () => {
    it('preserves COSMOS planned and future state without promotion', () => {
      const { container } = render(<Programs />);
      const cosmosCard = container.querySelector('#program-cosmos');
      expect(cosmosCard).toBeDefined();
      expect(cosmosCard?.textContent).toContain('PLANNED');
      expect(cosmosCard?.textContent).toContain('DOCUMENTED');
      expect(cosmosCard?.textContent).toContain('FUTURE');
      expect(cosmosCard?.textContent).not.toContain('IMPLEMENTED');
    });

    it('preserves RTA-GUARD reported evidence state without promotion to verified', () => {
      const { container } = render(<Programs />);
      const rtaCard = container.querySelector('#program-rta-guard');
      expect(rtaCard).toBeDefined();
      expect(rtaCard?.textContent).toContain('IMPLEMENTED');
      expect(rtaCard?.textContent).toContain('REPORTED');
      expect(rtaCard?.textContent).toContain('CURRENT');
    });

    it('renders the reality matrix table and allows tier filtering', () => {
      render(<Programs />);
      expect(screen.getByText('Program State & Reality Matrix')).toBeDefined();

      // Filter by Supporting
      const supportingFilterBtn = screen.getByRole('button', { name: /Supporting/i });
      fireEvent.click(supportingFilterBtn);

      expect(screen.getAllByText('CHAITANYA / SAPTACORE').length).toBeGreaterThan(0);
      expect(screen.getAllByText('PHANTAKSHA').length).toBeGreaterThan(0);
      expect(screen.getAllByText('RFA').length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // 4. Epistemic Firewall & Boundary Non-Claims
  // =========================================================================
  describe('4. Epistemic Firewall & Boundary Non-Claims', () => {
    it('renders explicit quarantined non-claims in Boundaries section', () => {
      render(<Programs />);
      expect(screen.getByText(/Program Boundaries & Explicit Non-Claims/i)).toBeDefined();
      expect(screen.getByText(/operates indefinitely without human intervention/i)).toBeDefined();
      expect(screen.getByText(/deployed on active orbital satellites/i)).toBeDefined();
    });

    it('guarantees zero commercial SaaS pricing or product catalog copy', () => {
      const { container } = render(<Programs />);
      const text = container.textContent?.toLowerCase() || '';
      expect(text).not.toContain('pricing plans');
      expect(text).not.toContain('subscription tier');
      expect(text).not.toContain('buy now');
    });
  });

  // =========================================================================
  // 5. Navigation Callbacks & Project Independence
  // =========================================================================
  describe('5. Navigation Callbacks & Project Independence', () => {
    it('triggers onNavigate callback when clicking closing exploration links', () => {
      const handleNavigate = vi.fn();
      render(<Programs onNavigate={handleNavigate} />);

      const exploreResearchBtn = screen.getByRole('button', { name: /Explore Research Track/i });
      fireEvent.click(exploreResearchBtn);
      expect(handleNavigate).toHaveBeenCalledWith('/research');

      const exploreTechBtn = screen.getByRole('button', { name: /Explore Technology Substrates/i });
      fireEvent.click(exploreTechBtn);
      expect(handleNavigate).toHaveBeenCalledWith('/technology');
    });

    it('guarantees zero execution pipeline graphs or runtime coupling', () => {
      const { container } = render(<Programs />);
      const arrows = container.querySelectorAll('.pipeline-arrow, .dependency-link');
      expect(arrows.length).toBe(0);
    });
  });
});
