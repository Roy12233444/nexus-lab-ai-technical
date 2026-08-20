/**
 * Nexus LAB AI — Canonical Programs Content Model & Invariant Tests
 * Phase 04D.3 — Unit & Adversarial Kill-Critic Test Suite
 */

import { describe, it, expect } from 'vitest';
import {
  CANONICAL_PROGRAMS_REGISTRY,
  getPublicPrimaryPrograms,
  getPublicSupportingPrograms,
  getPublicContextPrograms,
  getAllPublicPrograms,
  getNonPublicPrograms,
  getPublicProgramClaims,
} from '@/content/programs/programs';
import { validateProgramContent } from '@/lib/validation/programContentValidation';
import { CanonicalProgramsRegistry, ProgramId } from '@/types/programs';

describe('Phase 04D.3 — Canonical Programs Content Model', () => {
  // =========================================================================
  // 1. Registry Integrity & Schema Conformance
  // =========================================================================
  describe('1. Registry Integrity & Schema Conformance', () => {
    it('passes canonical program validation with zero errors', () => {
      const result = validateProgramContent(CANONICAL_PROGRAMS_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it('contains institutional identity and positioning declaration', () => {
      expect(CANONICAL_PROGRAMS_REGISTRY.identity.name).toBe('Nexus LAB AI Programs');
      expect(CANONICAL_PROGRAMS_REGISTRY.identity.positioning).toContain('Systems Engineering');
      expect(CANONICAL_PROGRAMS_REGISTRY.identity.declaration).toBeTruthy();
    });

    it('contains exactly 15 candidate records in total inventory', () => {
      const totalPrograms = Object.keys(CANONICAL_PROGRAMS_REGISTRY.programs);
      expect(totalPrograms.length).toBe(15);
    });

    it('contains all 13 itemized canonical claims with valid authority tiers', () => {
      const claims = Object.values(CANONICAL_PROGRAMS_REGISTRY.claims);
      expect(claims.length).toBe(13);
      claims.forEach((claim) => {
        expect(claim.id).toMatch(/^CLAIM-PROG-/);
        expect(claim.sourceDoc).toBeTruthy();
        expect(claim.authorityTier).toBeTruthy();
        expect(claim.statement).toBeTruthy();
        expect(claim.verificationBoundary).toBeTruthy();
      });
    });
  });

  // =========================================================================
  // 2. 4-Axis Epistemic State Isolation
  // =========================================================================
  describe('2. 4-Axis Epistemic State Isolation', () => {
    it('preserves NALA authoritative state vector (IMPLEMENTED, VERIFIED, CURRENT, PRIMARY)', () => {
      const nala = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-NALA'];
      expect(nala).toBeDefined();
      expect(nala.state.maturity).toBe('IMPLEMENTED');
      expect(nala.state.evidence).toBe('VERIFIED');
      expect(nala.state.temporal).toBe('CURRENT');
      expect(nala.state.publicState).toBe('PUBLIC_PRIMARY');
    });

    it('preserves AMP authoritative state vector (IMPLEMENTED, VERIFIED, CURRENT, PRIMARY)', () => {
      const amp = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-AMP'];
      expect(amp).toBeDefined();
      expect(amp.state.maturity).toBe('IMPLEMENTED');
      expect(amp.state.evidence).toBe('VERIFIED');
      expect(amp.state.temporal).toBe('CURRENT');
      expect(amp.state.publicState).toBe('PUBLIC_PRIMARY');
    });

    it('preserves RTA-GUARD authoritative state vector (IMPLEMENTED, REPORTED, CURRENT, PRIMARY)', () => {
      const rta = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-RTA-GUARD'];
      expect(rta).toBeDefined();
      expect(rta.state.maturity).toBe('IMPLEMENTED');
      expect(rta.state.evidence).toBe('REPORTED');
      expect(rta.state.temporal).toBe('CURRENT');
      expect(rta.state.publicState).toBe('PUBLIC_PRIMARY');
    });

    it('preserves COSMOS authoritative state vector (PLANNED, DOCUMENTED, FUTURE, PRIMARY)', () => {
      const cosmos = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-COSMOS'];
      expect(cosmos).toBeDefined();
      expect(cosmos.state.maturity).toBe('PLANNED');
      expect(cosmos.state.evidence).toBe('DOCUMENTED');
      expect(cosmos.state.temporal).toBe('FUTURE');
      expect(cosmos.state.publicState).toBe('PUBLIC_PRIMARY');
    });

    it('preserves Supporting programs authoritative states', () => {
      const chaitanya = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-CHAITANYA-SAPTACORE'];
      expect(chaitanya.state.maturity).toBe('SPECIFIED');
      expect(chaitanya.state.evidence).toBe('DOCUMENTED');
      expect(chaitanya.state.publicState).toBe('PUBLIC_SUPPORTING');

      const phantaksha = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-PHANTAKSHA'];
      expect(phantaksha.state.maturity).toBe('IMPLEMENTED');
      expect(phantaksha.state.evidence).toBe('VERIFIED');
      expect(phantaksha.state.publicState).toBe('PUBLIC_SUPPORTING');

      const rfa = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-RFA'];
      expect(rfa.state.maturity).toBe('EXPERIMENTAL');
      expect(rfa.state.evidence).toBe('REPORTED');
      expect(rfa.state.publicState).toBe('PUBLIC_SUPPORTING');
    });

    it('preserves GRAMVANI context-bound state (IMPLEMENTED, REPORTED, CURRENT, CONTEXT)', () => {
      const gramvani = CANONICAL_PROGRAMS_REGISTRY.programs['PROG-GRAMVANI'];
      expect(gramvani).toBeDefined();
      expect(gramvani.state.maturity).toBe('IMPLEMENTED');
      expect(gramvani.state.evidence).toBe('REPORTED');
      expect(gramvani.state.publicState).toBe('PUBLIC_WITH_CONTEXT');
    });
  });

  // =========================================================================
  // 3. Programmatic Selectors & Quarantine Firewall
  // =========================================================================
  describe('3. Programmatic Selectors & Quarantine Firewall', () => {
    it('getPublicPrimaryPrograms returns exactly 4 core programs', () => {
      const primary = getPublicPrimaryPrograms();
      expect(primary.length).toBe(4);
      const ids = primary.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-NALA', 'PROG-AMP', 'PROG-RTA-GUARD', 'PROG-COSMOS']);
    });

    it('getPublicSupportingPrograms returns exactly 3 supporting programs', () => {
      const supporting = getPublicSupportingPrograms();
      expect(supporting.length).toBe(3);
      const ids = supporting.map((p) => p.identity.id);
      expect(ids).toEqual(['PROG-CHAITANYA-SAPTACORE', 'PROG-PHANTAKSHA', 'PROG-RFA']);
    });

    it('getPublicContextPrograms returns exactly 1 context-bound program (GRAMVANI)', () => {
      const context = getPublicContextPrograms();
      expect(context.length).toBe(1);
      expect(context[0].identity.id).toBe('PROG-GRAMVANI');
    });

    it('getAllPublicPrograms returns exactly 8 programs and blocks all 7 non-public programs', () => {
      const allPublic = getAllPublicPrograms();
      expect(allPublic.length).toBe(8);

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

    it('getNonPublicPrograms returns exactly 7 excluded/quarantined initiatives', () => {
      const nonPublic = getNonPublicPrograms();
      expect(nonPublic.length).toBe(7);
    });

    it('getPublicProgramClaims returns only claims linked to public programs', () => {
      const publicClaims = getPublicProgramClaims();
      expect(publicClaims.length).toBe(13);
      publicClaims.forEach((claim) => {
        const program = CANONICAL_PROGRAMS_REGISTRY.programs[claim.programId];
        expect(program).toBeDefined();
        expect(
          ['PUBLIC_PRIMARY', 'PUBLIC_SUPPORTING', 'PUBLIC_WITH_CONTEXT'].includes(
            program.state.publicState
          )
        ).toBe(true);
      });
    });
  });

  // =========================================================================
  // 4. Kill-Critic Adversarial Attack Suite
  // =========================================================================
  describe('4. Kill-Critic Adversarial Attack Suite', () => {
    it('KC-01 (Portfolio Inflation): Rejects injection of quarantined candidate into public state', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-LYRA'].state.publicState = 'PUBLIC_PRIMARY';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-002 Violation'))).toBe(true);
    });

    it('KC-02 (Maturity Inflation): Rejects promotion of COSMOS from PLANNED to IMPLEMENTED', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-COSMOS'].state.maturity = 'IMPLEMENTED';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS maturity'))).toBe(true);
    });

    it('KC-03 (Evidence Conflation): Rejects promotion of RTA-GUARD from REPORTED to VERIFIED', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-RTA-GUARD'].state.evidence = 'VERIFIED';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RTA-GUARD evidence is inflated'))).toBe(true);
    });

    it('KC-04 (Temporal Inflation): Rejects promotion of COSMOS from FUTURE to CURRENT', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-COSMOS'].state.temporal = 'CURRENT';

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS temporal state'))).toBe(true);
    });

    it('KC-05 (Dependency Fabrication): Rejects runtime coupling between programs', () => {
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

    it('KC-06 (Quarantine Breach): Rejects quarantined claim with publicAllowed: true', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      const claimRecord = mutatedRegistry.quarantinedClaims[0] as unknown as Record<
        string,
        unknown
      >;
      claimRecord.publicAllowed = true;

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-002 Violation'))).toBe(true);
    });

    it('KC-07 (Orphaned Claim Reference): Rejects public program referencing non-existent claim', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-NALA'].claimIds.push('CLAIM-NON-EXISTENT-999');

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('references non-existent claim ID'))).toBe(true);
    });

    it('KC-08 (Missing Boundary): Rejects public program without explicit boundary non-claims', () => {
      const mutatedRegistry: CanonicalProgramsRegistry = JSON.parse(
        JSON.stringify(CANONICAL_PROGRAMS_REGISTRY)
      );
      mutatedRegistry.programs['PROG-NALA'].boundaries = [];

      const result = validateProgramContent(mutatedRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-006 Violation'))).toBe(true);
    });
  });
});
