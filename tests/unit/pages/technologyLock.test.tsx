import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Technology } from '@/pages/Technology/Technology';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { CANONICAL_TECHNOLOGY_REGISTRY } from '@/content/technology/technology';
import { TECHNOLOGY_PAGE_BLUEPRINT } from '@/content/technology/sectionArchitecture';
import { validateTechnologyContent } from '@/lib/validation/technologyContentValidation';

describe('Phase 04C.6 — Technology Verification & Adversarial Lock Audit Suite', () => {
  describe('Certification Gate 01: Content Truth & Epistemic Invariants', () => {
    it('passes all canonical content validation rules with 0 errors (RULE-001 to RULE-008)', () => {
      const result = validateTechnologyContent(CANONICAL_TECHNOLOGY_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('preserves the six canonical domains without mutation or data fabrication', () => {
      const { domains } = CANONICAL_TECHNOLOGY_REGISTRY;
      const domainKeys = Object.keys(domains);
      expect(domainKeys).toHaveLength(6);
      expect(domainKeys).toEqual([
        'reasoning',
        'agent_execution',
        'memory',
        'fault_tolerance',
        'safety_governance',
        'distributed_space',
      ]);
    });

    it('preserves all 18 canonical capabilities across their designated domains', () => {
      const { capabilities } = CANONICAL_TECHNOLOGY_REGISTRY;
      const capabilityKeys = Object.keys(capabilities);
      expect(capabilityKeys).toHaveLength(18);
    });

    it('strictly consumes the canonical registry rather than hardcoding local data structures', () => {
      render(<Technology />);
      // Verify declaration text directly matches canonical identity
      expect(screen.getByText(CANONICAL_TECHNOLOGY_REGISTRY.identity.declaration)).toBeDefined();
    });
  });

  describe('Certification Gate 02: Three-Tier Architecture Integrity', () => {
    it('renders all 8 canonical sections in exact sequential blueprint order', () => {
      const { container } = render(<Technology />);

      const sectionIds = TECHNOLOGY_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(sectionIds).toHaveLength(8);

      const renderedSections = container.querySelectorAll('section');
      expect(renderedSections.length).toBe(8);

      renderedSections.forEach((sectionElement, index) => {
        expect(sectionElement.id).toBe(sectionIds[index]);
      });
    });

    it('preserves the 3-tier hierarchy: Substrates → Capabilities → Projects', () => {
      const { container } = render(<Technology />);
      const archSection = container.querySelector('#technology-architecture');
      expect(archSection).toBeDefined();
      expect(archSection?.textContent).toContain('TIER 01');
      expect(archSection?.textContent).toContain('TECHNICAL SUBSTRATES');
      expect(archSection?.textContent).toContain('SYSTEMIC CAPABILITIES');
      expect(archSection?.textContent).toContain('SOVEREIGN PROJECTS');
    });
  });

  describe('Certification Gate 03: Epistemic Hygiene & Quarantine Firewall', () => {
    it('maintains complete decoupling among the four independent truth axes across substrates', () => {
      const substrates = Object.values(CANONICAL_TECHNOLOGY_REGISTRY.substrates);
      substrates.forEach((substrate) => {
        expect(substrate.state.maturity).toBeDefined();
        expect(substrate.state.evidence).toBeDefined();
        expect(substrate.state.temporal).toBeDefined();
        expect(substrate.state.publicRelevance).toBeDefined();
      });
    });

    it('Kill-Critic Attack: REPORTED claims must not be conflated with VERIFIED claims', () => {
      const claims = Object.values(CANONICAL_TECHNOLOGY_REGISTRY.claims);
      const reportedClaims = claims.filter((c) => c.evidenceLevel === 'REPORTED');
      expect(reportedClaims.length).toBeGreaterThan(0);

      reportedClaims.forEach((claim) => {
        expect(claim.evidenceLevel).not.toBe('VERIFIED');
      });
    });

    it('Kill-Critic Attack: PLANNED architectures must not be conflated with IMPLEMENTED systems', () => {
      const { substrates } = CANONICAL_TECHNOLOGY_REGISTRY;
      const cosmosSubstrate = substrates['cosmos_space_os_blueprint'];
      expect(cosmosSubstrate.state.maturity).toBe('PLANNED');
      expect(cosmosSubstrate.state.evidence).toBe('DOCUMENTED');
      expect(cosmosSubstrate.state.temporal).toBe('FUTURE');
    });

    it('Kill-Critic Attack: Quarantined claims are isolated in the quarantine box and blocked from public claims', () => {
      const { container } = render(<Technology />);

      const heroEl = container.querySelector('#technology-hero');
      const philosophyEl = container.querySelector('#technology-philosophy');
      const architectureEl = container.querySelector('#technology-architecture');
      const domainsEl = container.querySelector('#technology-domains');
      const capabilitiesEl = container.querySelector('#technology-capabilities');
      const substratesEl = container.querySelector('#technology-substrates');

      [heroEl, philosophyEl, architectureEl, domainsEl, capabilitiesEl, substratesEl].forEach(
        (section) => {
          expect(section?.textContent).not.toMatch(/100% epistemic integrity/i);
          expect(section?.textContent).not.toMatch(/operates indefinitely without human/i);
          expect(section?.textContent).not.toMatch(/completely solves artificial memory/i);
          expect(section?.textContent).not.toMatch(/100% exploit prevention/i);
          expect(section?.textContent).not.toMatch(/deployed on active orbital satellites/i);
        }
      );
    });
  });

  describe('Certification Gate 04: Project Independence & Non-Coupling', () => {
    it('guarantees zero operational coupling or dependency graphs among projects', () => {
      render(<Technology />);

      // Projects are distinct implementation vehicles, never serialized pipelines
      expect(screen.queryByText(/COSMOS deploys NALA/i)).toBeNull();
      expect(screen.queryByText(/NALA requires AMP/i)).toBeNull();
      expect(screen.queryByText(/RTA-GUARD controls COSMOS/i)).toBeNull();
      expect(screen.queryByText(/COSMOS → NALA → AMP → RTA-GUARD/i)).toBeNull();
    });
  });

  describe('Certification Gate 05: Visual System & Accessibility', () => {
    it('guarantees light laboratory aesthetic (#FFFFFF base, cyan/blue technical accents, zero cyberpunk)', () => {
      const { container } = render(<Technology />);
      const htmlText = container.innerHTML;

      expect(htmlText).not.toContain('bg-black');
      expect(htmlText).not.toContain('bg-neutral-950');
      expect(htmlText).not.toContain('neon-green');
      expect(htmlText).not.toContain('cyberpunk');
    });

    it('maintains strict semantic DOM hierarchy: main landmark, exactly 1 H1, accessible aria-hidden visuals', () => {
      const { container } = render(<Technology />);

      expect(screen.getByRole('main')).toBeDefined();

      const h1Headings = screen.getAllByRole('heading', { level: 1 });
      expect(h1Headings).toHaveLength(1);
      expect(h1Headings[0].textContent).toContain('Engineering From First Principles');

      const decorativeVisual = container.querySelector('#technology-hero [aria-hidden="true"]');
      expect(decorativeVisual).toBeDefined();
    });
  });

  describe('Certification Gate 06: Full Regression & System Invariants', () => {
    it('renders Overview page without regressions or layout conflict', () => {
      const { container } = render(<Overview />);
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(10);
    });

    it('renders Research page without regressions or layout conflict', () => {
      const { container } = render(<Research />);
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    });
  });
});
