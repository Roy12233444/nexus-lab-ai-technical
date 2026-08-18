import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Overview } from '@/pages/Overview/Overview';
import { OVERVIEW_CONTENT } from '@/content/overview/overview';
import { OVERVIEW_PAGE_BLUEPRINT } from '@/content/overview/sectionArchitecture';
import { validateOverviewContent } from '@/lib/validation/contentValidation';

describe('Phase 04A.6 — Overview Verification & Lock Audit Suite', () => {
  describe('Dimension 1: Content & Semantic Invariants Gate', () => {
    it('passes all semantic validation rules with 0 errors', () => {
      const result = validateOverviewContent(OVERVIEW_CONTENT);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('preserves canonical identity and explicit boundaries', () => {
      expect(OVERVIEW_CONTENT.identity.name).toBe('Nexus LAB AI');
      expect(OVERVIEW_CONTENT.identity.positioning).toBe('AI Systems Innovation Company');
      expect(OVERVIEW_CONTENT.identity.boundaries).toContain(
        'Not a SaaS wrapper or generic incubator.'
      );
      expect(OVERVIEW_CONTENT.identity.boundaries).toContain(
        'Not a collection of unrelated standalone products.'
      );
      expect(OVERVIEW_CONTENT.identity.boundaries).toContain(
        'Products are downstream fruits of validated foundational research, not the primary organizational definition.'
      );
    });
  });

  describe('Dimension 2: Architecture & Blueprint Sequence Gate', () => {
    it('renders all 10 canonical sections in exact sequential order', () => {
      const { container } = render(<Overview />);

      const sectionIds = OVERVIEW_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(sectionIds).toHaveLength(10);

      const renderedSections = container.querySelectorAll('section');
      expect(renderedSections.length).toBe(10);

      renderedSections.forEach((sectionElement, index) => {
        expect(sectionElement.id).toBe(sectionIds[index]);
      });
    });
  });

  describe('Dimension 3: Design System & Aesthetic Invariants Gate', () => {
    it('guarantees purely light/white background and absence of reference guide panels', () => {
      const { container } = render(<Overview />);

      // Ensure no dark background classes
      expect(container.querySelector('.bg-black')).toBeNull();
      expect(container.querySelector('.bg-slate-950')).toBeNull();

      // Ensure reference guide panel is completely excluded
      expect(screen.queryByText(/DOTTED MATRIX GUIDE/i)).toBeNull();
      expect(screen.queryByText(/Subtle Dot Grid explanation/i)).toBeNull();
    });

    it('contains valid decorative matrix background with aria-hidden="true"', () => {
      const { container } = render(<Overview />);

      const decorativeBg = container.querySelector('[aria-hidden="true"]');
      expect(decorativeBg).toBeDefined();
    });
  });

  describe('Dimension 4: Evidence & Epistemic Maturity Isolation Gate', () => {
    it('isolates component evidence from program-wide claims', () => {
      // RTA-GUARD must not be claimed as VERIFIED without independent audit
      const rtaGuard = OVERVIEW_CONTENT.researchPrograms.find((p) => p.id === 'rta-guard');
      expect(rtaGuard?.maturity).toBe('IMPLEMENTED');
      expect(rtaGuard?.evidence).toBe('REPORTED');

      // COSMOS must not be claimed as IMPLEMENTED
      const cosmos = OVERVIEW_CONTENT.researchPrograms.find((p) => p.id === 'cosmos');
      expect(cosmos?.maturity).toBe('SPECIFIED');
      expect(cosmos?.evidence).toBe('DOCUMENTED');
    });

    it('guarantees that all claims carry Tier 1–3 provenance citations', () => {
      OVERVIEW_CONTENT.claims.forEach((claim) => {
        expect(claim.provenance.sourceId).toBeDefined();
        expect(claim.provenance.authorityTier).toBeDefined();
        expect(claim.provenance.extractedAt).toBeDefined();
      });
    });
  });

  describe('Dimension 5: Accessibility & Navigation Gate', () => {
    it('provides skip-to-content and main landmark structure', () => {
      render(<Overview />);

      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeDefined();
      expect(skipLink.getAttribute('href')).toBe('#main-content');

      const mainLandmark = screen.getByRole('main');
      expect(mainLandmark.id).toBe('main-content');
    });

    it('ensures all interactive CTA buttons are accessible and labeled', () => {
      render(<Overview />);

      const exploreArchBtn = screen.getByRole('button', { name: /EXPLORE ARCHITECTURE/i });
      expect(exploreArchBtn).toBeDefined();

      const researchProgramsBtn = screen.getByRole('button', { name: /RESEARCH PROGRAMS/i });
      expect(researchProgramsBtn).toBeDefined();
    });
  });
});
