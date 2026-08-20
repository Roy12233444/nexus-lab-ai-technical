import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Technology } from '@/pages/Technology/Technology';
import { TECHNOLOGY_PAGE_BLUEPRINT } from '@/content/technology/sectionArchitecture';
import { CANONICAL_TECHNOLOGY_REGISTRY } from '@/content/technology/technology';

describe('Phase 04C.5 — Technology Page UI Assembly & Component Suite', () => {
  it('renders all 8 canonical sections in exact sequential order', () => {
    const { container } = render(<Technology />);

    const sectionIds = TECHNOLOGY_PAGE_BLUEPRINT.sections.map((s) => s.id);
    expect(sectionIds).toHaveLength(8);

    const renderedSections = container.querySelectorAll('section');
    expect(renderedSections.length).toBe(8);

    renderedSections.forEach((sectionElement, index) => {
      expect(sectionElement.id).toBe(sectionIds[index]);
    });
  });

  it('renders all six sovereign technology domains', () => {
    render(<Technology />);

    Object.values(CANONICAL_TECHNOLOGY_REGISTRY.domains).forEach((domain) => {
      expect(screen.getAllByText(domain.name).length).toBeGreaterThan(0);
    });
  });

  it('renders technical substrates with category and provenance claim references', () => {
    const { container } = render(<Technology />);

    const substratesSection = container.querySelector('#technology-substrates');
    expect(substratesSection).toBeDefined();

    expect(screen.getAllByText('CHAITANYA Sovereign Transformer Blocks').length).toBeGreaterThan(0);
    expect(
      screen.getAllByText('DHI Anderson-Accelerated Fixed-Point Solver').length
    ).toBeGreaterThan(0);
    expect(screen.getAllByText('NALA 4-Layer Autonomous Execution Harness').length).toBeGreaterThan(
      0
    );
    expect(
      screen.getAllByText('AMP Chiranjeevi Rust Persistence Substrate').length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText('ARIES Transactional Crash Recovery Substrate').length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText('RTA-GUARD Pre-Execution Action Interceptor').length
    ).toBeGreaterThan(0);
  });

  it('preserves sovereign project independence in the project map', () => {
    render(<Technology />);

    // Verify all representative and supporting projects appear
    expect(screen.getAllByText(/Nexus Autonomous Long-Running Agent/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ANJANEYA Memory Protocol/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Real-Time Autonomous Guard Protocol/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/Cognitive Operating System for Multi-Orbital Systems/i).length
    ).toBeGreaterThan(0);

    // Verify zero operational coupling claims
    expect(screen.queryByText(/COSMOS deploys NALA/i)).toBeNull();
    expect(screen.queryByText(/NALA requires AMP/i)).toBeNull();
    expect(screen.queryByText(/RTA-GUARD runs inside COSMOS/i)).toBeNull();
  });

  it('strictly excludes quarantined assertions from public copy', () => {
    const { container } = render(<Technology />);

    const heroEl = container.querySelector('#technology-hero');
    const philosophyEl = container.querySelector('#technology-philosophy');
    const architectureEl = container.querySelector('#technology-architecture');
    const domainsEl = container.querySelector('#technology-domains');

    [heroEl, philosophyEl, architectureEl, domainsEl].forEach((section) => {
      expect(section?.textContent).not.toMatch(/100% epistemic integrity/i);
      expect(section?.textContent).not.toMatch(/operates indefinitely without human/i);
      expect(section?.textContent).not.toMatch(/completely solves artificial memory/i);
      expect(section?.textContent).not.toMatch(/100% exploit prevention/i);
      expect(section?.textContent).not.toMatch(/deployed on active orbital satellites/i);
    });
  });

  it('renders accessible semantic landmarks and hides decorative topology visual from assistive tech', () => {
    const { container } = render(<Technology />);

    // Main landmark exists
    expect(screen.getByRole('main')).toBeDefined();

    // Exactly one h1 exists
    const h1Headings = screen.getAllByRole('heading', { level: 1 });
    expect(h1Headings).toHaveLength(1);
    expect(h1Headings[0].textContent).toContain('Engineering From First Principles');

    // Decorative topology container carries aria-hidden="true"
    const decorativeContainer = container.querySelector('[aria-hidden="true"]');
    expect(decorativeContainer).toBeDefined();
  });

  it('triggers onNavigate callback when clicking project dossier links', () => {
    const onNavigateMock = vi.fn();
    render(<Technology onNavigate={onNavigateMock} />);

    const dossierButtons = screen.getAllByRole('button', { name: /View Dossier/i });
    expect(dossierButtons.length).toBeGreaterThan(0);

    fireEvent.click(dossierButtons[0]);
    expect(onNavigateMock).toHaveBeenCalledWith('/research');
  });
});
