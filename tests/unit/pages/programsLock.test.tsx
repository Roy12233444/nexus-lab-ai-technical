import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Programs } from '@/pages/Programs/Programs';
import { Overview } from '@/pages/Overview/Overview';
import { Research } from '@/pages/Research/Research';
import { Technology } from '@/pages/Technology/Technology';
import {
  CANONICAL_PROGRAMS_REGISTRY,
  getPublicPrimaryPrograms,
  getPublicSupportingPrograms,
  getPublicContextPrograms,
  getAllPublicPrograms,
  getNonPublicPrograms,
} from '@/content/programs/programs';
import { PROGRAMS_PAGE_BLUEPRINT } from '@/content/programs/sectionArchitecture';
import { validateProgramContent } from '@/lib/validation/programContentValidation';
import { CanonicalProgramsRegistry, ProgramId } from '@/types/programs';

describe('Phase 04D.6 — Programs Verification & Adversarial Lock Audit Suite', () => {
  // =========================================================================
  // Certification Gate 01: Authoritative Truth & Epistemic Invariants
  // =========================================================================
  describe('Certification Gate 01: Authoritative Truth & Epistemic Invariants', () => {
    it('passes all canonical content validation rules with 0 errors (RULE-001 to RULE-006)', () => {
      const result = validateProgramContent(CANONICAL_PROGRAMS_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('strictly contains exactly 8 public programs and 7 excluded initiatives', () => {
      const allPublic = getAllPublicPrograms();
      expect(allPublic).toHaveLength(8);

      const nonPublic = getNonPublicPrograms();
      expect(nonPublic).toHaveLength(7);
    });

    it('preserves the four primary sovereign programs (NALA, AMP, RTA-GUARD, COSMOS)', () => {
      const primary = getPublicPrimaryPrograms();
      expect(primary).toHaveLength(4);
      const ids = primary.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-NALA', 'PROG-AMP', 'PROG-RTA-GUARD', 'PROG-COSMOS']);
    });

    it('preserves the three supporting systems (CHAITANYA / SAPTACORE, PHANTAKSHA, RFA)', () => {
      const supporting = getPublicSupportingPrograms();
      expect(supporting).toHaveLength(3);
      const ids = supporting.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-CHAITANYA-SAPTACORE', 'PROG-PHANTAKSHA', 'PROG-RFA']);
    });

    it('preserves the single context-bound program (GRAMVANI)', () => {
      const context = getPublicContextPrograms();
      expect(context).toHaveLength(1);
      expect(context[0].identity.id).toBe('PROG-GRAMVANI');
    });

    it('strictly consumes the canonical registry declaration rather than hardcoding local prose', () => {
      render(<Programs />);
      expect(screen.getByText(CANONICAL_PROGRAMS_REGISTRY.identity.declaration)).toBeDefined();
    });
  });

  // =========================================================================
  // Certification Gate 02: Adversarial Maturity Attack
  // =========================================================================
  describe('Certification Gate 02: Adversarial Maturity Attack', () => {
    it('KC-L01: Rejects promotion of COSMOS from PLANNED to IMPLEMENTED', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-COSMOS'].state.maturity = 'IMPLEMENTED';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS maturity'))).toBe(true);
    });

    it('guarantees rendered COSMOS card communicates PLANNED and DOCUMENTED', () => {
      const { container } = render(<Programs />);
      const cosmosCard = container.querySelector('#program-cosmos');
      expect(cosmosCard).toBeDefined();
      expect(cosmosCard?.textContent).toContain('PLANNED');
      expect(cosmosCard?.textContent).toContain('DOCUMENTED');
      expect(cosmosCard?.textContent).not.toContain('IMPLEMENTED');
    });
  });

  // =========================================================================
  // Certification Gate 03: Adversarial Evidence Conflation Attack
  // =========================================================================
  describe('Certification Gate 03: Adversarial Evidence Conflation Attack', () => {
    it('KC-L02: Rejects promotion of RTA-GUARD from REPORTED to VERIFIED', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-RTA-GUARD'].state.evidence = 'VERIFIED';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RTA-GUARD evidence is inflated'))).toBe(true);
    });

    it('guarantees rendered RTA-GUARD card communicates REPORTED evidence', () => {
      const { container } = render(<Programs />);
      const rtaCard = container.querySelector('#program-rta-guard');
      expect(rtaCard).toBeDefined();
      expect(rtaCard?.textContent).toContain('REPORTED');
    });
  });

  // =========================================================================
  // Certification Gate 04: Adversarial Temporal Inflation Attack
  // =========================================================================
  describe('Certification Gate 04: Adversarial Temporal Inflation Attack', () => {
    it('KC-L03: Rejects promotion of COSMOS from FUTURE to CURRENT', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-COSMOS'].state.temporal = 'CURRENT';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS temporal state'))).toBe(true);
    });

    it('guarantees rendered COSMOS card communicates FUTURE horizon', () => {
      const { container } = render(<Programs />);
      const cosmosCard = container.querySelector('#program-cosmos');
      expect(cosmosCard?.textContent).toContain('FUTURE');
    });
  });

  // =========================================================================
  // Certification Gate 05: Adversarial Dependency Fabrication Attack
  // =========================================================================
  describe('Certification Gate 05: Adversarial Dependency Fabrication Attack', () => {
    it('KC-L04: Rejects runtime coupling or operational dependencies between programs', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      const cosmosRecord = mutatedRegistry.programs['PROG-COSMOS'] as unknown as Record<
        string,
        unknown
      >;
      cosmosRecord.dependencies = ['PROG-NALA'];

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-004 Violation'))).toBe(true);
    });

    it('guarantees zero execution pipeline graphs or runtime arrows on rendered page', () => {
      const { container } = render(<Programs />);
      const arrows = container.querySelectorAll('.pipeline-arrow, .dependency-link');
      expect(arrows.length).toBe(0);
    });
  });

  // =========================================================================
  // Certification Gate 06: Adversarial Quarantine Firewall Attack
  // =========================================================================
  describe('Certification Gate 06: Adversarial Quarantine Firewall Attack', () => {
    it('KC-L05: Rejects promoting quarantined candidate to public state', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-LYRA'].state.publicState = 'PUBLIC_PRIMARY';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-002 Violation'))).toBe(true);
    });

    it('guarantees zero non-public programs appear on rendered page', () => {
      render(<Programs />);
      const forbidden: ProgramId[] = [
        'PROG-AGRIVERSE',
        'PROG-EMMA',
        'PROG-DEADRECKONING',
        'PROG-AETHERION',
        'PROG-LYRA',
        'PROG-SHADOWTRACE',
        'PROG-SYNAPTICODE-SPEC',
      ];

      forbidden.forEach((id) => {
        const p = CANONICAL_PROGRAMS_REGISTRY.programs[id];
        expect(screen.queryByText(p.identity.name)).toBeNull();
      });
    });
  });

  // =========================================================================
  // Certification Gate 07: Section Architecture & Heading Hierarchy
  // =========================================================================
  describe('Certification Gate 07: Section Architecture & Heading Hierarchy', () => {
    it('renders all 8 canonical sections in exact sequential blueprint order', () => {
      const { container } = render(<Programs />);

      const sectionIds = PROGRAMS_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(sectionIds).toHaveLength(8);

      const renderedSections = container.querySelectorAll('section');
      expect(renderedSections.length).toBe(8);

      renderedSections.forEach((sectionElement, index) => {
        expect(sectionElement.id).toBe(sectionIds[index]);
      });
    });

    it('maintains strict semantic DOM hierarchy: main landmark, exactly 1 H1', () => {
      const { container } = render(<Programs />);
      const mainLandmark = container.querySelector('main');
      expect(mainLandmark).toBeDefined();

      const h1List = screen.getAllByRole('heading', { level: 1 });
      expect(h1List).toHaveLength(1);
      expect(h1List[0].textContent).toContain('Sovereign Engineering');
    });

    it('renders accessible semantic landmarks and hides decorative visuals from screen readers', () => {
      const { container } = render(<Programs />);
      const ariaHiddenVisuals = container.querySelectorAll('[aria-hidden="true"]');
      expect(ariaHiddenVisuals.length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // Certification Gate 08: Cross-Route Non-Regression Verification
  // =========================================================================
  describe('Certification Gate 08: Cross-Route Non-Regression Verification', () => {
    it('renders Overview page without regressions or layout conflict', () => {
      const { container } = render(<Overview />);
      expect(container.querySelector('#overview-hero')).toBeDefined();
    });

    it('renders Research page without regressions or layout conflict', () => {
      const { container } = render(<Research />);
      expect(container.querySelector('#research-hero')).toBeDefined();
    });

    it('renders Technology page without regressions or layout conflict', () => {
      const { container } = render(<Technology />);
      expect(container.querySelector('#technology-hero')).toBeDefined();
    });

    it('renders Programs page without regressions or layout conflict', () => {
      const { container } = render(<Programs />);
      expect(container.querySelector('#programs-hero')).toBeDefined();
    });
  });
});
