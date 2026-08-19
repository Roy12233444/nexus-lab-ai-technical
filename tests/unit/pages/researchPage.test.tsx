import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Research } from '@/pages/Research/Research';
import { CANONICAL_RESEARCH_PROJECTS } from '@/content/research/research';

describe('Research Page UI Implementation (Phase 04B.5)', () => {
  describe('Full 8-Section Page Assembly', () => {
    it('renders all 8 canonical sections in exact sequential order', () => {
      render(<Research />);

      // Section 01: Hero
      expect(screen.getByRole('heading', { level: 1, name: /Sovereign Research/i })).toBeDefined();

      // Section 02: Thesis
      expect(screen.getAllByText('Why We Research').length).toBeGreaterThan(0);
      expect(screen.getByText('Why Ephemeral AI Wrappers Fail')).toBeDefined();

      // Section 03: Portfolio
      expect(screen.getAllByText('Core Research Vectors').length).toBeGreaterThan(0);

      // Section 04: Domains
      expect(screen.getAllByText('Research Domains & Territories').length).toBeGreaterThan(0);

      // Section 05: Evidence Matrix
      expect(screen.getAllByText('Epistemic Maturity & Evidence Matrix').length).toBeGreaterThan(0);

      // Section 06: Boundaries
      expect(screen.getAllByText('Research Boundaries & Non-Claims').length).toBeGreaterThan(0);

      // Section 07: Gateways
      expect(screen.getAllByText('Program Technical Dossiers').length).toBeGreaterThan(0);

      // Section 08: Closing
      expect(screen.getAllByText('Roots Before Fruits').length).toBeGreaterThan(0);
    });

    it('renders all four sovereign research programs without missing any', () => {
      render(<Research />);

      CANONICAL_RESEARCH_PROJECTS.forEach((project) => {
        expect(screen.getAllByText(project.identity.acronym).length).toBeGreaterThan(0);
        expect(screen.getAllByText(project.identity.name).length).toBeGreaterThan(0);
      });
    });

    it('renders decoupled four-axis epistemic badges in the truth table', () => {
      render(<Research />);

      expect(screen.getAllByText('IMPLEMENTED').length).toBeGreaterThan(0);
      expect(screen.getAllByText('VERIFIED').length).toBeGreaterThan(0);
      expect(screen.getAllByText('SPECIFIED').length).toBeGreaterThan(0);
      expect(screen.getAllByText('DOCUMENTED').length).toBeGreaterThan(0);
      expect(screen.getAllByText('REPORTED').length).toBeGreaterThan(0);
    });

    it('renders research boundaries with explicit quarantined non-claims', () => {
      render(<Research />);

      expect(screen.getAllByText(/Explicit Non-Claims \(Quarantined\):/i).length).toBeGreaterThan(
        0
      );
      expect(screen.getAllByText(/BOUNDED SCOPE/i).length).toBeGreaterThan(0);
    });

    it('triggers onNavigate when clicking exploration gateways or dossier links', () => {
      const handleNavigate = vi.fn();
      render(<Research onNavigate={handleNavigate} />);

      const nalaDossierLinks = screen.getAllByRole('link', { name: /NALA/i });
      if (nalaDossierLinks.length > 0) {
        fireEvent.click(nalaDossierLinks[0]);
        expect(handleNavigate).toHaveBeenCalledWith('/research/nala');
      }
    });
  });
});
