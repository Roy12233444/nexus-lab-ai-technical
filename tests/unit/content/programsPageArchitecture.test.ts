/**
 * Nexus LAB AI — Programs Page Architecture Blueprint & Adversarial Tests
 * Phase 04D.4 — Section Mapping, Data Bindings & Kill-Critic Invariants
 */

import { describe, it, expect } from 'vitest';
import { PROGRAMS_PAGE_BLUEPRINT } from '@/content/programs/sectionArchitecture';
import {
  getPublicPrimaryPrograms,
  getPublicSupportingPrograms,
  getPublicContextPrograms,
  getAllPublicPrograms,
  CANONICAL_PROGRAMS_REGISTRY,
} from '@/content/programs/programs';
import { ProgramId, ProgramCategory } from '@/types/programs';

describe('Phase 04D.4 — Programs Page Architecture Blueprint', () => {
  // =========================================================================
  // 1. Blueprint Structural Conformance
  // =========================================================================
  describe('1. Blueprint Structural Conformance', () => {
    it('defines the canonical /programs route and page metadata', () => {
      expect(PROGRAMS_PAGE_BLUEPRINT.pageId).toBe('programs');
      expect(PROGRAMS_PAGE_BLUEPRINT.route).toBe('/programs');
      expect(PROGRAMS_PAGE_BLUEPRINT.title).toBe('Nexus LAB AI Programs Track');
      expect(PROGRAMS_PAGE_BLUEPRINT.description).toBeTruthy();
    });

    it('contains exactly 8 sections in strictly sequential order (1 to 8)', () => {
      expect(PROGRAMS_PAGE_BLUEPRINT.sections.length).toBe(8);
      PROGRAMS_PAGE_BLUEPRINT.sections.forEach((section, index) => {
        expect(section.order).toBe(index + 1);
      });
    });

    it('contains unique section IDs matching canonical naming convention', () => {
      const expectedIds = [
        'programs-hero',
        'programs-thesis',
        'programs-core',
        'programs-state',
        'programs-supporting',
        'programs-context',
        'programs-boundaries',
        'programs-closing',
      ];
      const actualIds = PROGRAMS_PAGE_BLUEPRINT.sections.map((s) => s.id);
      expect(actualIds).toEqual(expectedIds);

      const uniqueIds = new Set(actualIds);
      expect(uniqueIds.size).toBe(8);
    });

    it('assigns valid component types, container widths, and backgrounds to every section', () => {
      const validComponents = [
        'ProgramsHeroSection',
        'ProgramsThesisSection',
        'ProgramsCoreSection',
        'ProgramsStateSection',
        'ProgramsSupportingSection',
        'ProgramsContextSection',
        'ProgramsBoundariesSection',
        'ProgramsClosingSection',
      ];
      const validContainers = ['reading', 'narrow', 'content', 'wide', 'full'];
      const validBackgrounds = ['primary', 'secondary', 'tertiary'];

      PROGRAMS_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(validComponents).toContain(section.componentType);
        expect(validContainers).toContain(section.containerWidth);
        expect(validBackgrounds).toContain(section.background);
        expect(section.purpose).toBeTruthy();
        expect(section.sourceAuthority).toBeTruthy();
      });
    });
  });

  // =========================================================================
  // 2. Data Source Binding Integrity
  // =========================================================================
  describe('2. Data Source Binding Integrity', () => {
    it('maps every section to an authorized canonical data source', () => {
      const validDataSources = [
        'getPublicPrimaryPrograms',
        'getPublicSupportingPrograms',
        'getPublicContextPrograms',
        'getAllPublicPrograms',
        'CANONICAL_PROGRAMS_REGISTRY',
      ];

      PROGRAMS_PAGE_BLUEPRINT.sections.forEach((section) => {
        expect(validDataSources).toContain(section.dataSource);
      });
    });

    it('binds programs-core strictly to getPublicPrimaryPrograms', () => {
      const coreSection = PROGRAMS_PAGE_BLUEPRINT.sections.find((s) => s.id === 'programs-core');
      expect(coreSection).toBeDefined();
      expect(coreSection?.dataSource).toBe('getPublicPrimaryPrograms');

      const primaryPrograms = getPublicPrimaryPrograms();
      expect(primaryPrograms.length).toBe(4);
      const ids = primaryPrograms.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-NALA', 'PROG-AMP', 'PROG-RTA-GUARD', 'PROG-COSMOS']);
    });

    it('binds programs-supporting strictly to getPublicSupportingPrograms', () => {
      const supportingSection = PROGRAMS_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'programs-supporting'
      );
      expect(supportingSection).toBeDefined();
      expect(supportingSection?.dataSource).toBe('getPublicSupportingPrograms');

      const supportingPrograms = getPublicSupportingPrograms();
      expect(supportingPrograms.length).toBe(3);
      const ids = supportingPrograms.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-CHAITANYA-SAPTACORE', 'PROG-PHANTAKSHA', 'PROG-RFA']);
    });

    it('binds programs-context strictly to getPublicContextPrograms', () => {
      const contextSection = PROGRAMS_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'programs-context'
      );
      expect(contextSection).toBeDefined();
      expect(contextSection?.dataSource).toBe('getPublicContextPrograms');

      const contextPrograms = getPublicContextPrograms();
      expect(contextPrograms.length).toBe(1);
      expect(contextPrograms[0].identity.id).toBe('PROG-GRAMVANI');
    });

    it('binds programs-state strictly to getAllPublicPrograms', () => {
      const stateSection = PROGRAMS_PAGE_BLUEPRINT.sections.find((s) => s.id === 'programs-state');
      expect(stateSection).toBeDefined();
      expect(stateSection?.dataSource).toBe('getAllPublicPrograms');

      const allPublic = getAllPublicPrograms();
      expect(allPublic.length).toBe(8);
    });

    it('binds programs-boundaries and programs-closing to CANONICAL_PROGRAMS_REGISTRY', () => {
      const boundariesSection = PROGRAMS_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'programs-boundaries'
      );
      const closingSection = PROGRAMS_PAGE_BLUEPRINT.sections.find(
        (s) => s.id === 'programs-closing'
      );
      expect(boundariesSection?.dataSource).toBe('CANONICAL_PROGRAMS_REGISTRY');
      expect(closingSection?.dataSource).toBe('CANONICAL_PROGRAMS_REGISTRY');
      expect(CANONICAL_PROGRAMS_REGISTRY.quarantinedClaims.length).toBeGreaterThan(0);
    });
  });

  // =========================================================================
  // 3. Kill-Critic Adversarial Attack Suite for 04D.4
  // =========================================================================
  describe('3. Kill-Critic Adversarial Attack Suite for 04D.4', () => {
    it('KC-A1 (Portfolio Leakage): Guarantees zero non-public programs in bound section data', () => {
      const allPublic = getAllPublicPrograms();
      const publicIds = new Set(allPublic.map((p) => p.identity.id));
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
        expect(publicIds.has(id)).toBe(false);
      });
    });

    it('KC-A2 (Category Invention): All bound programs belong to canonical categories', () => {
      const validCategories: ProgramCategory[] = [
        'AUTONOMOUS_EXECUTION',
        'COGNITIVE_MEMORY',
        'CONSTITUTIONAL_SAFETY',
        'DISTRIBUTED_SPACE',
        'REASONING_SYSTEMS',
        'HIGH_ASSURANCE_INFRA',
        'REASONING_COORDINATION',
        'APPLIED_SYSTEMS',
      ];

      const allPublic = getAllPublicPrograms();
      allPublic.forEach((program) => {
        expect(validCategories).toContain(program.identity.category);
      });
    });

    it('KC-A3 (Dependency Visualization): Guarantees zero runtime dependency graph in bound data', () => {
      const allPublic = getAllPublicPrograms();
      allPublic.forEach((program) => {
        const raw = program as unknown as Record<string, unknown>;
        expect(raw.dependencies).toBeUndefined();
        expect(raw.requiredRuntimePrograms).toBeUndefined();
        expect(raw.pipelineOrder).toBeUndefined();
      });
    });

    it('KC-A4 (Truth Flattening): Guarantees 4 independent truth axes across all bound programs', () => {
      const allPublic = getAllPublicPrograms();
      allPublic.forEach((program) => {
        expect(program.state.maturity).toBeDefined();
        expect(program.state.evidence).toBeDefined();
        expect(program.state.temporal).toBeDefined();
        expect(program.state.publicState).toBeDefined();
      });
    });

    it('KC-A5 (COSMOS Inflation): Guarantees COSMOS is PLANNED and FUTURE in blueprint data', () => {
      const primary = getPublicPrimaryPrograms();
      const cosmos = primary.find((p) => p.identity.id === 'PROG-COSMOS');
      expect(cosmos).toBeDefined();
      expect(cosmos?.state.maturity).toBe('PLANNED');
      expect(cosmos?.state.evidence).toBe('DOCUMENTED');
      expect(cosmos?.state.temporal).toBe('FUTURE');
    });

    it('KC-A6 (RTA-GUARD Evidence Inflation): Guarantees RTA-GUARD is REPORTED in blueprint data', () => {
      const primary = getPublicPrimaryPrograms();
      const rta = primary.find((p) => p.identity.id === 'PROG-RTA-GUARD');
      expect(rta).toBeDefined();
      expect(rta?.state.evidence).toBe('REPORTED');
    });

    it('KC-A7 (SaaS Drift): Blueprint copy contains zero commercial SaaS pricing or marketing terms', () => {
      const serialized = JSON.stringify(PROGRAMS_PAGE_BLUEPRINT).toLowerCase();
      const forbiddenTerms = [
        'pricing',
        'subscription',
        'plans',
        'customer support',
        'product catalog',
        'buy now',
      ];
      forbiddenTerms.forEach((term) => {
        expect(serialized).not.toContain(term);
      });
    });
  });
});
