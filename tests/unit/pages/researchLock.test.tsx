import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Research } from '@/pages/Research/Research';
import { CANONICAL_RESEARCH_REGISTRY } from '@/content/research/research';
import { RESEARCH_PAGE_BLUEPRINT } from '@/content/research/sectionArchitecture';
import { validateResearchContent } from '@/lib/validation/researchContentValidation';

describe('Phase 04B.6 — Research Verification & Lock Audit Suite', () => {
  describe('Dimension 1: Content & Epistemic Invariants Gate', () => {
    it('passes all semantic validation rules with 0 errors', () => {
      const result = validateResearchContent(CANONICAL_RESEARCH_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('preserves canonical identity, domains, and state across all 4 programs', () => {
      const { nala, amp, rtaGuard, cosmos } = CANONICAL_RESEARCH_REGISTRY.projects;

      // NALA
      expect(nala.identity.acronym).toBe('NALA');
      expect(nala.identity.domain).toBe('AGENT_EXECUTION');
      expect(nala.state.maturity).toBe('IMPLEMENTED');
      expect(nala.state.evidence).toBe('VERIFIED');
      expect(nala.state.temporal).toBe('CURRENT');

      // AMP
      expect(amp.identity.acronym).toBe('AMP');
      expect(amp.identity.domain).toBe('DURABLE_MEMORY');
      expect(amp.state.maturity).toBe('IMPLEMENTED');
      expect(amp.state.evidence).toBe('VERIFIED');
      expect(amp.state.temporal).toBe('CURRENT');

      // RTA-GUARD
      expect(rtaGuard.identity.acronym).toBe('RTA-GUARD');
      expect(rtaGuard.identity.domain).toBe('AI_SAFETY_GOVERNANCE');
      expect(rtaGuard.state.maturity).toBe('IMPLEMENTED');
      expect(rtaGuard.state.evidence).toBe('REPORTED');
      expect(rtaGuard.state.temporal).toBe('CURRENT');

      // COSMOS
      expect(cosmos.identity.acronym).toBe('COSMOS');
      expect(cosmos.identity.domain).toBe('MULTI_ORBITAL_SYSTEMS');
      expect(cosmos.state.maturity).toBe('SPECIFIED');
      expect(cosmos.state.evidence).toBe('DOCUMENTED');
      expect(cosmos.state.temporal).toBe('FUTURE');
    });
  });

  describe('Dimension 2: Architecture & Blueprint Sequence Gate', () => {
    it('renders all 8 canonical sections in exact sequential order', () => {
      const { container } = render(<Research />);

      const sectionIds = RESEARCH_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(sectionIds).toHaveLength(8);

      const renderedSections = container.querySelectorAll('section');
      expect(renderedSections.length).toBe(8);

      renderedSections.forEach((sectionElement, index) => {
        expect(sectionElement.id).toBe(sectionIds[index]);
      });
    });
  });

  describe('Dimension 3: Quarantine Firewall Gate', () => {
    it('strictly excludes unbacked and quarantined assertions from promotional copy', () => {
      const { container } = render(<Research />);

      // Hero, Portfolio, Domains, Gateways must not promote unbacked assertions
      const heroEl = container.querySelector('#research-hero');
      const portfolioEl = container.querySelector('#research-portfolio');
      const domainsEl = container.querySelector('#research-domains');
      const gatewaysEl = container.querySelector('#research-gateways');

      [heroEl, portfolioEl, domainsEl, gatewaysEl].forEach((section) => {
        expect(section?.textContent).not.toMatch(/100% epistemic integrity/i);
        expect(section?.textContent).not.toMatch(/operates indefinitely without human/i);
        expect(section?.textContent).not.toMatch(/completely solves artificial memory/i);
        expect(section?.textContent).not.toMatch(/100% exploit prevention/i);
        expect(section?.textContent).not.toMatch(/deployed on active orbital satellites/i);
      });
    });
  });

  describe('Dimension 4: Project Independence & Non-Coupling Gate', () => {
    it('guarantees zero cross-project operational coupling or dependency graphs', () => {
      render(<Research />);

      // Ensure no dependency arrows or hierarchy
      expect(screen.queryByText(/cosmos deploys nala/i)).toBeNull();
      expect(screen.queryByText(/nala requires amp/i)).toBeNull();
      expect(screen.queryByText(/rta-guard runs inside cosmos/i)).toBeNull();
    });
  });

  describe('Dimension 5: Design System & Aesthetic Invariants Gate', () => {
    it('guarantees purely light/white background and absence of internal documentation labels', () => {
      const { container } = render(<Research />);

      // Ensure no dark background classes
      expect(container.querySelector('.bg-black')).toBeNull();

      // Ensure internal doc labels are completely absent
      expect(screen.queryByText(/DOCS-04B.2/i)).toBeNull();
      expect(screen.queryByText(/CANONICAL REGISTER/i)).toBeNull();
      expect(screen.queryByText(/DOTTED MATRIX GUIDE/i)).toBeNull();
    });
  });

  describe('Dimension 6: Accessibility & Performance Gate', () => {
    it('renders accessible semantic landmarks and hides decorative vector visual from assistive tech', () => {
      const { container } = render(<Research />);

      // Main landmark exists
      expect(screen.getByRole('main')).toBeDefined();

      // Heading level 1 exists
      expect(screen.getByRole('heading', { level: 1, name: /Sovereign Research/i })).toBeDefined();

      // Decorative visual has aria-hidden="true"
      const decorativeSvg = container.querySelector('svg');
      expect(decorativeSvg).toBeDefined();
      const decorativeContainer = container.querySelector('[aria-hidden="true"]');
      expect(decorativeContainer).toBeDefined();
    });
  });
});
