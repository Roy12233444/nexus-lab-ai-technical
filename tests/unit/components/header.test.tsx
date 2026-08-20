import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';
import { PRIMARY_NAV_ITEMS } from '@/lib/routes';

describe('Header & Navigation System (Phase 03A)', () => {
  describe('Header Component', () => {
    it('renders brand identity linking to root', () => {
      render(<Header currentPath="/" />);
      const brandLink = screen.getByLabelText(/nexus lab ai home/i);
      expect(brandLink).toBeDefined();
      expect(brandLink.getAttribute('href')).toBe('/');
    });

    it('renders all primary navigation routes in desktop nav with exact sequence', () => {
      render(<Header currentPath="/" />);
      const expectedLabels = [
        'Overview',
        'Research',
        'Technology',
        'Programs',
        'Philosophy',
        'Future',
        'Challenge',
      ];

      expect(PRIMARY_NAV_ITEMS.map((item) => item.label)).toEqual(expectedLabels);

      expectedLabels.forEach((label) => {
        const links = screen.getAllByRole('link', { name: label });
        expect(links.length).toBeGreaterThan(0);
      });
    });

    it('strictly excludes Evidence and Products from primary navigation', () => {
      render(<Header currentPath="/" />);
      const navEl = screen.getByRole('navigation', { name: /primary navigation/i });
      expect(navEl.textContent).not.toContain('Evidence');
      expect(navEl.textContent).not.toContain('Products');
    });

    it('displays active state for current path', () => {
      render(<Header currentPath="/research" />);
      const researchLink = screen.getByRole('link', { name: 'Research' });
      expect(researchLink.getAttribute('aria-current')).toBe('page');
    });

    it('renders technical status indicator', () => {
      render(<Header currentPath="/" />);
      expect(screen.getByText(/core system/i)).toBeDefined();
    });
  });

  describe('Mobile Navigation Drawer', () => {
    it('opens mobile drawer when hamburger button is clicked', () => {
      render(<Header currentPath="/" />);
      const menuTrigger = screen.getByLabelText(/open navigation menu/i);
      expect(menuTrigger.getAttribute('aria-expanded')).toBe('false');

      fireEvent.click(menuTrigger);
      expect(menuTrigger.getAttribute('aria-expanded')).toBe('true');
      expect(screen.getByRole('dialog', { name: /mobile navigation menu/i })).toBeDefined();
    });

    it('closes mobile drawer on close button click', () => {
      const handleClose = vi.fn();
      render(<MobileNavigation isOpen={true} onClose={handleClose} currentPath="/" />);
      const closeBtn = screen.getByLabelText(/close navigation menu/i);
      fireEvent.click(closeBtn);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('closes mobile drawer on Escape key press', () => {
      const handleClose = vi.fn();
      render(<MobileNavigation isOpen={true} onClose={handleClose} currentPath="/" />);
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Navigation Link Clicks', () => {
    it('fires onNavigate callback when link is clicked', () => {
      const handleNavigate = vi.fn();
      render(<Navigation currentPath="/" onNavigate={handleNavigate} />);
      const techLink = screen.getByRole('link', { name: 'Technology' });
      fireEvent.click(techLink);
      expect(handleNavigate).toHaveBeenCalledWith('/technology');
    });
  });
});
