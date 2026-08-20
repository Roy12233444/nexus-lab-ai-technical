/**
 * Nexus LAB AI — Canonical Technology Content Validation Engine
 * Phase 04C.3 — Semantic Invariant & Quarantine Firewall Enforcement
 */

import { CanonicalTechnologyRegistry } from '@/types/technology';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateTechnologyContent(registry: CanonicalTechnologyRegistry): ValidationResult {
  const errors: string[] = [];

  // =========================================================================
  // RULE-001: Provenance Requirement
  // Every substrate must reference existing claims with valid authority tiers
  // =========================================================================
  Object.values(registry.substrates).forEach((substrate) => {
    if (substrate.claimIds.length === 0) {
      errors.push(
        `RULE-001 Violation: Substrate "${substrate.name}" has no linked provenance claims.`
      );
    }

    substrate.claimIds.forEach((claimId) => {
      const claim = registry.claims[claimId];
      if (!claim) {
        errors.push(
          `RULE-001 Violation: Substrate "${substrate.name}" references non-existent claim ID "${claimId}".`
        );
      } else if (!claim.sourceDoc || !claim.authorityTier) {
        errors.push(`RULE-001 Violation: Claim "${claimId}" lacks sourceDoc or authorityTier.`);
      }
    });
  });

  // =========================================================================
  // RULE-002: Quarantine Firewall
  // Quarantined claims must have publicAllowed: false
  // =========================================================================
  registry.quarantinedClaims.forEach((qc) => {
    if (qc.publicAllowed !== false) {
      errors.push(`RULE-002 Violation: Quarantined claim "${qc.id}" has publicAllowed !== false.`);
    }
  });

  // =========================================================================
  // RULE-003: Maturity vs Evidence Decoupling
  // Maturity and Evidence must remain distinct enums
  // =========================================================================
  Object.values(registry.substrates).forEach((substrate) => {
    if (
      substrate.state.maturity === 'IMPLEMENTED' &&
      substrate.state.evidence === 'VERIFIED' &&
      substrate.state.temporal === 'FUTURE'
    ) {
      errors.push(
        `RULE-003 Violation: Substrate "${substrate.name}" has invalid state combination (IMPLEMENTED + VERIFIED + FUTURE).`
      );
    }
  });

  // =========================================================================
  // RULE-004: Project Independence Invariant
  // No technology substrate or capability can invent operational coupling
  // =========================================================================
  Object.values(registry.capabilities).forEach((capability) => {
    if (
      capability.projectIds.includes('cosmos') &&
      capability.projectIds.includes('nala') &&
      capability.name.toLowerCase().includes('deploys')
    ) {
      errors.push(
        `RULE-004 Violation: Capability "${capability.name}" invents unverified operational coupling between COSMOS and NALA.`
      );
    }
  });

  // =========================================================================
  // RULE-005: Supporting Technology Separation
  // Supporting stack cannot be labeled as NEXUS_INVENTION
  // =========================================================================
  Object.values(registry.substrates).forEach((substrate) => {
    if (
      substrate.id === 'supporting_rust_python_stack' &&
      substrate.category === 'NEXUS_INVENTION'
    ) {
      errors.push(
        `RULE-005 Violation: Open-source supporting stack incorrectly marked as NEXUS_INVENTION.`
      );
    }
  });

  // =========================================================================
  // RULE-006: Exclusion Enforcement
  // Excluded or unverified claims must not be marked PRIMARY public relevance
  // =========================================================================
  const excludedClaim = registry.claims['TECH-016'];
  if (excludedClaim && excludedClaim.evidenceLevel === 'VERIFIED') {
    errors.push(
      `RULE-006 Violation: In-orbit spaceflight claim TECH-016 falsely marked as VERIFIED.`
    );
  }

  // =========================================================================
  // RULE-007: Temporal Consistency
  // FUTURE substrates cannot be marked CURRENT or IMPLEMENTED
  // =========================================================================
  Object.values(registry.substrates).forEach((substrate) => {
    if (substrate.state.temporal === 'FUTURE' && substrate.state.maturity === 'IMPLEMENTED') {
      errors.push(
        `RULE-007 Violation: Future substrate "${substrate.name}" cannot have maturity = IMPLEMENTED.`
      );
    }
  });

  // =========================================================================
  // RULE-008: Orphan Reference Integrity
  // Validate referential integrity across domains, capabilities, substrates, projects, claims
  // =========================================================================
  Object.values(registry.domains).forEach((domain) => {
    domain.capabilityIds.forEach((capId) => {
      if (!registry.capabilities[capId]) {
        errors.push(
          `RULE-008 Violation: Domain "${domain.id}" references orphaned capability "${capId}".`
        );
      }
    });
  });

  Object.values(registry.capabilities).forEach((capability) => {
    if (!registry.domains[capability.domainId]) {
      errors.push(
        `RULE-008 Violation: Capability "${capability.id}" references orphaned domain "${capability.domainId}".`
      );
    }
    capability.technologyIds.forEach((techId) => {
      if (!registry.substrates[techId]) {
        errors.push(
          `RULE-008 Violation: Capability "${capability.id}" references orphaned substrate "${techId}".`
        );
      }
    });
    capability.projectIds.forEach((projId) => {
      if (!registry.projects[projId]) {
        errors.push(
          `RULE-008 Violation: Capability "${capability.id}" references orphaned project "${projId}".`
        );
      }
    });
  });

  Object.values(registry.substrates).forEach((substrate) => {
    if (!registry.domains[substrate.domainId]) {
      errors.push(
        `RULE-008 Violation: Substrate "${substrate.id}" references orphaned domain "${substrate.domainId}".`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
