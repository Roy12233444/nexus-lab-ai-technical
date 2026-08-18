import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { HeroSection } from '@/components/overview/HeroSection';
import { HeroMatrixBackground } from '@/components/overview/HeroMatrixBackground';

describe('Nexus LAB AI Hero & Dotted Matrix Subsystem (Kill-Critic Precision Pass)', () => {
  describe('HeroSection Semantic Rendering', () => {
    it('renders canonical identity, overline tracks, and centered heading', () => {
      render(<HeroSection />);

      expect(screen.getAllByText(/RESEARCH/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/ENGINEERING/i)).toBeDefined();
      expect(screen.getByRole('heading', { level: 1, name: /NEXUS LAB AI/i })).toBeDefined();
      expect(
        screen.getByRole('heading', { level: 2, name: /AI Systems Innovation Company/i })
      ).toBeDefined();
      expect(
        screen.getByText(
          /We research, engineer, and validate intelligent systems that are durable, trustworthy, and built for the future/i
        )
      ).toBeDefined();
    });

    it('renders 4 evidence-grounded architectural information signals', () => {
      render(<HeroSection />);

      expect(screen.getByText('Multi-domain research programs')).toBeDefined();
      expect(screen.getByText('SYSTEMS')).toBeDefined();
      expect(screen.getByText('Autonomous systems in development')).toBeDefined();
      expect(screen.getAllByText('EVIDENCE').length).toBeGreaterThan(0);
      expect(screen.getByText('Evidence-driven validation')).toBeDefined();
      expect(screen.getByText('HORIZON')).toBeDefined();
      expect(screen.getByText('Long-horizon systems research')).toBeDefined();
    });

    it('does NOT contain unbacked marketing metrics or absolute claims', () => {
      render(<HeroSection />);

      expect(screen.queryByText(/100% Epistemic Integrity/i)).toBeNull();
      expect(screen.queryByText(/04\+ Active Tracks/i)).toBeNull();
      expect(screen.queryByText(/12\+ Across Domains/i)).toBeNull();
      expect(screen.queryByText(/∞ Future Focus/i)).toBeNull();
    });

    it('invokes CTA callbacks on user interaction without competing third buttons', () => {
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

      expect(screen.queryByText(/Enter the Nexus Innovation Engine/i)).toBeNull();
    });

    it('guarantees that reference design guide panel elements are NOT present in UI', () => {
      render(<HeroSection />);

      expect(screen.queryByText(/DOTTED MATRIX GUIDE/i)).toBeNull();
      expect(screen.queryByText(/Subtle Dot Grid explanation/i)).toBeNull();
      expect(screen.queryByText(/Dynamic Nodes explanation/i)).toBeNull();
      expect(screen.queryByText(/Connecting Lines explanation/i)).toBeNull();
    });
  });

  describe('HeroMatrixBackground Decorative Substrate', () => {
    it('renders as a decorative layer with aria-hidden="true" and pointer-events-none', () => {
      const { container } = render(<HeroMatrixBackground />);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.getAttribute('aria-hidden')).toBe('true');
      expect(wrapper.className).toContain('pointer-events-none');
    });

    it('contains SVG dot grid pattern and topological connection lines', () => {
      const { container } = render(<HeroMatrixBackground />);

      const svgs = container.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThanOrEqual(2);

      const circles = container.querySelectorAll('circle');
      expect(circles.length).toBeGreaterThan(0);

      const lines = container.querySelectorAll('line');
      expect(lines.length).toBeGreaterThan(0);
    });
  });
});
