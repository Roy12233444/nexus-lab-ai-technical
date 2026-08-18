import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { HeroSection } from '@/components/overview/HeroSection';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';

describe('Nexus LAB AI Hero & 3D Isometric Network Subsystem', () => {
  describe('HeroSection Semantic Rendering', () => {
    it('renders canonical identity, overline, stacked title, and lead statement', () => {
      render(<HeroSection />);

      expect(screen.getByText(/NEXUS LAB AI/i)).toBeDefined();
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: /AI SYSTEMS/i,
        })
      ).toBeDefined();
      expect(
        screen.getByText(
          /Researching, engineering, and validating durable intelligent-system capabilities/i
        )
      ).toBeDefined();
      expect(screen.getByText(/CORE ARCHITECTURE : ACTIVE/i)).toBeDefined();
    });

    it('renders 4 architectural information dock items and floating 10 layers badge', () => {
      render(<HeroSection />);

      expect(screen.getByText('First Principles')).toBeDefined();
      expect(screen.getByText('SYSTEMS')).toBeDefined();
      expect(screen.getByText('Engineered for Reliability')).toBeDefined();
      expect(screen.getByText('EVIDENCE')).toBeDefined();
      expect(screen.getByText('Verified. Transparent. Repeatable.')).toBeDefined();
      expect(screen.getByText('HORIZON')).toBeDefined();
      expect(screen.getByText('Building for the Future')).toBeDefined();

      expect(screen.getByText('10')).toBeDefined();
      expect(screen.getByText('SYSTEM LAYERS')).toBeDefined();
      expect(screen.getByText('ONE ENGINE')).toBeDefined();
    });

    it('invokes CTA callbacks on user interaction', () => {
      const onExploreArchitecture = vi.fn();
      const onExplorePrograms = vi.fn();

      render(
        <HeroSection
          onExploreArchitecture={onExploreArchitecture}
          onExplorePrograms={onExplorePrograms}
        />
      );

      const archBtn = screen.getByRole('button', { name: /EXPLORE ARCHITECTURE/i });
      fireEvent.click(archBtn);
      expect(onExploreArchitecture).toHaveBeenCalledTimes(1);

      const progBtn = screen.getByRole('button', { name: /RESEARCH PROGRAMS/i });
      fireEvent.click(progBtn);
      expect(onExplorePrograms).toHaveBeenCalledTimes(1);
    });
  });

  describe('HeroMatrixBackground 3D Isometric Substrate', () => {
    it('renders as a decorative layer with aria-hidden="true" and pointer-events-none', () => {
      const { container } = render(<HeroMatrixBackground />);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.getAttribute('aria-hidden')).toBe('true');
      expect(wrapper.className).toContain('pointer-events-none');
    });

    it('contains SVG isometric canvas with cubes and topological nodes', () => {
      const { container } = render(<HeroMatrixBackground />);

      const svg = container.querySelector('svg');
      expect(svg).toBeDefined();

      const polygons = container.querySelectorAll('polygon');
      expect(polygons.length).toBeGreaterThan(0);

      const circles = container.querySelectorAll('circle');
      expect(circles.length).toBeGreaterThan(0);
    });
  });
});
