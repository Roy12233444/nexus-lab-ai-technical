import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Footer } from '@/components/layout/Footer';
import { FOOTER_NAV_GROUPS } from '@/lib/routes';
import { SITE_CONFIG } from '@/lib/constants';

describe('Footer & Legal/Meta System (Phase 03B)', () => {
  describe('Footer Structure & Landmark', () => {
    it('renders semantic footer landmark with accessible label', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo', { name: /nexus lab ai footer/i });
      expect(footer).toBeDefined();
    });

    it('renders compressed identity block and mission statement', () => {
      render(<Footer />);
      expect(screen.getByText(SITE_CONFIG.tagline)).toBeDefined();
      expect(screen.getByText(SITE_CONFIG.missionStatement)).toBeDefined();
    });
  });

  describe('Grouped Navigation', () => {
    it('renders all canonical navigation group titles and items', () => {
      render(<Footer />);
      FOOTER_NAV_GROUPS.forEach((group) => {
        const titles = screen.getAllByText(group.title);
        expect(titles.length).toBeGreaterThan(0);
        group.items.forEach((item) => {
          const links = screen.getAllByRole('link', { name: item.label });
          expect(links.length).toBeGreaterThan(0);
        });
      });
    });

    it('triggers onNavigate callback when footer link is clicked', () => {
      const handleNavigate = vi.fn();
      render(<Footer onNavigate={handleNavigate} />);
      const researchLink = screen.getByRole('link', { name: 'Research Programs' });
      fireEvent.click(researchLink);
      expect(handleNavigate).toHaveBeenCalledWith('/research');
    });
  });

  describe('Legal & System Metadata', () => {
    it('renders copyright year and technical license label', () => {
      render(<Footer />);
      expect(screen.getByText(new RegExp(`${SITE_CONFIG.year}`))).toBeDefined();
      expect(screen.getByText(SITE_CONFIG.license)).toBeDefined();
    });
  });
});
