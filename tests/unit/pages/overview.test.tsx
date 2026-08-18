import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Overview } from '@/pages/Overview/Overview';

describe('Overview Page UI Implementation (Phase 04A.5)', () => {
  describe('Full Overview Page Assembly', () => {
    it('renders the 10 canonical sections', () => {
      render(<Overview />);

      expect(screen.getByRole('heading', { level: 1, name: /AI SYSTEMS/i })).toBeDefined();
      expect(screen.getByText('The Core Thesis')).toBeDefined();
      expect(screen.getByText('Institutional Mission')).toBeDefined();
      expect(screen.getByText('The Innovation Engine')).toBeDefined();
      expect(screen.getByText('NSEM Methodology')).toBeDefined();
      expect(screen.getAllByText('System Architecture').length).toBeGreaterThan(0);
      expect(screen.getByText('Core Research Programs')).toBeDefined();
      expect(screen.getByText('Empirical Evidence & Validation')).toBeDefined();
      expect(screen.getByText('Maturity & Epistemic Boundaries')).toBeDefined();
      expect(screen.getByText('Explore the Technical Dossier')).toBeDefined();
    });

    it('renders all four core research programs with correct names', () => {
      render(<Overview />);

      expect(screen.getAllByText('NALA').length).toBeGreaterThan(0);
      expect(screen.getAllByText('ANJANEYA Memory Protocol').length).toBeGreaterThan(0);
      expect(screen.getAllByText('RTA-GUARD').length).toBeGreaterThan(0);
      expect(screen.getAllByText('COSMOS').length).toBeGreaterThan(0);
    });

    it('toggles methodology tabs between Macro and Micro views', () => {
      render(<Overview />);

      const microTab = screen.getByRole('tab', { name: /Micro Engineering Loop/i });
      fireEvent.click(microTab);

      expect(screen.getByText('Step 01')).toBeDefined();
      expect(screen.getAllByText('Problem').length).toBeGreaterThan(0);
    });

    it('renders exploration gateway links', () => {
      render(<Overview />);

      const researchGateway = screen.getAllByRole('link', { name: /Research Programs/i });
      expect(researchGateway.length).toBeGreaterThan(0);
    });
  });
});
