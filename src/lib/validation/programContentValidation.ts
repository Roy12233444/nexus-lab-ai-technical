/**
 * Nexus LAB AI — Canonical Programs Content Validation Engine
 * Phase 04D.3 — Semantic Invariant & Quarantine Firewall Enforcement
 */

import { CanonicalProgramsRegistry, ProgramId } from '@/types/programs';
import { getAllPublicPrograms } from '@/content/programs/programs';

export interface ProgramValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateProgramContent(
  registry: CanonicalProgramsRegistry
): ProgramValidationResult {
  const errors: string[] = [];

  // =========================================================================
  // RULE-001: Provenance & Claim Linkage
  // Every public program must reference valid, existing claims
  // =========================================================================
  const publicPrograms = Object.values(registry.programs).filter(
    (p) =>
      p.state.publicState === 'PUBLIC_PRIMARY' ||
      p.state.publicState === 'PUBLIC_SUPPORTING' ||
      p.state.publicState === 'PUBLIC_WITH_CONTEXT'
  );

  publicPrograms.forEach((program) => {
    if (program.claimIds.length === 0) {
      errors.push(
        `RULE-001 Violation: Public program "${program.identity.name}" has zero linked provenance claims.`
      );
    }

    program.claimIds.forEach((claimId) => {
      const claim = registry.claims[claimId];
      if (!claim) {
        errors.push(
          `RULE-001 Violation: Program "${program.identity.name}" references non-existent claim ID "${claimId}".`
        );
      } else if (!claim.sourceDoc || !claim.authorityTier) {
        errors.push(`RULE-001 Violation: Claim "${claimId}" lacks sourceDoc or authorityTier.`);
      } else if (claim.programId !== program.identity.id) {
        errors.push(
          `RULE-001 Violation: Claim "${claimId}" belongs to program "${claim.programId}", but is referenced by "${program.identity.id}".`
        );
      }
    });
  });

  // Verify all registered claims link to existing programs
  Object.values(registry.claims).forEach((claim) => {
    const program = registry.programs[claim.programId];
    if (!program) {
      errors.push(
        `RULE-001 Violation: Claim "${claim.id}" references non-existent program ID "${claim.programId}".`
      );
    }
  });

  // =========================================================================
  // RULE-002: Quarantine Firewall
  // Quarantined claims must have publicAllowed: false and cannot leak
  // =========================================================================
  registry.quarantinedClaims.forEach((qc) => {
    if (qc.publicAllowed !== false) {
      errors.push(`RULE-002 Violation: Quarantined claim "${qc.id}" has publicAllowed !== false.`);
    }
  });

  // Check quarantined programs
  const quarantinedIds = ['PROG-LYRA', 'PROG-SHADOWTRACE', 'PROG-SYNAPTICODE-SPEC'];
  quarantinedIds.forEach((id) => {
    const p = registry.programs[id];
    if (p && p.state.publicState !== 'QUARANTINED') {
      errors.push(
        `RULE-002 Violation: Backlog/speculative program "${id}" is not marked as QUARANTINED.`
      );
    }
  });

  // =========================================================================
  // RULE-003: 4-Axis Epistemic Decoupling
  // Maturity, Evidence, Temporal, and PublicState must remain decoupled
  // =========================================================================
  Object.values(registry.programs).forEach((program) => {
    // Cannot be IMPLEMENTED + VERIFIED + FUTURE
    if (
      program.state.maturity === 'IMPLEMENTED' &&
      program.state.evidence === 'VERIFIED' &&
      program.state.temporal === 'FUTURE'
    ) {
      errors.push(
        `RULE-003 Violation: Program "${program.identity.name}" has invalid state combination (IMPLEMENTED + VERIFIED + FUTURE).`
      );
    }

    // COSMOS must be PLANNED and FUTURE
    if (program.identity.id === 'PROG-COSMOS') {
      if (program.state.maturity !== 'PLANNED') {
        errors.push(
          `RULE-003 Violation: COSMOS maturity is "${program.state.maturity}", must be "PLANNED".`
        );
      }
      if (program.state.temporal !== 'FUTURE') {
        errors.push(
          `RULE-003 Violation: COSMOS temporal state is "${program.state.temporal}", must be "FUTURE".`
        );
      }
    }

    // RTA-GUARD evidence must be REPORTED (not VERIFIED until formal audit)
    if (program.identity.id === 'PROG-RTA-GUARD') {
      if (program.state.evidence === 'VERIFIED') {
        errors.push(
          `RULE-003 Violation: RTA-GUARD evidence is inflated to "VERIFIED", must be "REPORTED".`
        );
      }
    }
  });

  // =========================================================================
  // RULE-004: Sovereign Program Independence (Zero Runtime Coupling)
  // Programs must not define runtime dependencies or operational pipelines
  // =========================================================================
  Object.values(registry.programs).forEach((program) => {
    const rawRecord = program as unknown as Record<string, unknown>;
    if (rawRecord.dependencies || rawRecord.requiredRuntimePrograms || rawRecord.pipelineOrder) {
      errors.push(
        `RULE-004 Violation: Program "${program.identity.name}" contains runtime dependency couplings.`
      );
    }
  });

  // =========================================================================
  // RULE-005: Public Selector Count & Content Isolation
  // Public selectors must return exactly 8 programs (4 Primary, 3 Supporting, 1 Context)
  // =========================================================================
  const selectorPublic = getAllPublicPrograms();
  if (selectorPublic.length !== 8) {
    errors.push(
      `RULE-005 Violation: getAllPublicPrograms() returned ${selectorPublic.length} programs, expected exactly 8.`
    );
  }

  const publicIds = new Set(selectorPublic.map((p) => p.identity.id));
  const forbiddenIds: ProgramId[] = [
    'PROG-AGRIVERSE',
    'PROG-EMMA',
    'PROG-DEADRECKONING',
    'PROG-AETHERION',
    'PROG-LYRA',
    'PROG-SHADOWTRACE',
    'PROG-SYNAPTICODE-SPEC',
  ];

  forbiddenIds.forEach((id) => {
    if (publicIds.has(id)) {
      errors.push(`RULE-005 Violation: Non-public program "${id}" leaked into public selectors.`);
    }
  });

  // =========================================================================
  // RULE-006: Boundary Non-Claims Requirement
  // Every public program must specify explicit non-claims
  // =========================================================================
  publicPrograms.forEach((program) => {
    if (program.boundaries.length === 0) {
      errors.push(
        `RULE-006 Violation: Public program "${program.identity.name}" lacks explicit non-claim boundaries.`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
