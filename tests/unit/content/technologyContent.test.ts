import { describe, it, expect } from 'vitest';
import {
  CANONICAL_TECHNOLOGY_REGISTRY,
  getPublicTechnologyDomains,
  getPublicTechnologyCapabilities,
  getPublicTechnologySubstrates,
  getPublicTechnologyClaims,
} from '@/content/technology/technology';
import { validateTechnologyContent } from '@/lib/validation/technologyContentValidation';
import { CanonicalTechnologyRegistry } from '@/types/technology';

describe('Phase 04C.3 — Canonical Technology Content Model & Semantic Invariants', () => {
  describe('Canonical Domains & Structural Hierarchy', () => {
    it('contains all 6 canonical technology domains', () => {
      const domains = getPublicTechnologyDomains();
      expect(domains).toHaveLength(6);

      const domainIds = domains.map((d) => d.id);
      expect(domainIds).toContain('reasoning');
      expect(domainIds).toContain('agent_execution');
      expect(domainIds).toContain('memory');
      expect(domainIds).toContain('fault_tolerance');
      expect(domainIds).toContain('safety_governance');
      expect(domainIds).toContain('distributed_space');
    });

    it('validates that every domain has valid metadata and non-empty capabilities', () => {
      Object.values(CANONICAL_TECHNOLOGY_REGISTRY.domains).forEach((domain) => {
        expect(domain.name.length).toBeGreaterThan(0);
        expect(domain.tagline.length).toBeGreaterThan(0);
        expect(domain.description.length).toBeGreaterThan(0);
        expect(domain.coreChallenges.length).toBeGreaterThanOrEqual(3);
        expect(domain.capabilityIds.length).toBeGreaterThanOrEqual(3);
      });
    });
  });

  describe('Capability & Substrate Mapping', () => {
    it('maps all capabilities to valid domains, substrates, and projects', () => {
      const capabilities = getPublicTechnologyCapabilities();
      expect(capabilities.length).toBeGreaterThanOrEqual(18);

      capabilities.forEach((cap) => {
        expect(CANONICAL_TECHNOLOGY_REGISTRY.domains[cap.domainId]).toBeDefined();
        cap.technologyIds.forEach((techId) => {
          expect(CANONICAL_TECHNOLOGY_REGISTRY.substrates[techId]).toBeDefined();
        });
        cap.projectIds.forEach((projId) => {
          expect(CANONICAL_TECHNOLOGY_REGISTRY.projects[projId]).toBeDefined();
        });
      });
    });

    it('preserves distinct 4-axis states for all substrates', () => {
      const substrates = getPublicTechnologySubstrates();
      expect(substrates.length).toBeGreaterThan(0);

      Object.values(CANONICAL_TECHNOLOGY_REGISTRY.substrates).forEach((substrate) => {
        expect(['IMPLEMENTED', 'EXPERIMENTAL', 'PLANNED', 'RESEARCH', 'SUPPORTING']).toContain(
          substrate.state.maturity
        );
        expect(['SPECIFIED', 'UNSPECIFIED']).toContain(substrate.state.specification);
        expect(['UNKNOWN', 'DOCUMENTED', 'REPORTED', 'OBSERVED', 'VERIFIED']).toContain(
          substrate.state.evidence
        );
        expect(['CURRENT', 'HISTORICAL', 'FUTURE', 'UNKNOWN']).toContain(substrate.state.temporal);
        expect(['PRIMARY', 'SUPPORTING', 'CONDITIONAL', 'INTERNAL', 'EXCLUDED']).toContain(
          substrate.state.publicRelevance
        );
      });
    });
  });

  describe('Provenance & Claims Register', () => {
    it('contains all 18 claims TECH-001 through TECH-018 with complete provenance', () => {
      for (let i = 1; i <= 18; i++) {
        const claimId = `TECH-${String(i).padStart(3, '0')}`;
        const claim = CANONICAL_TECHNOLOGY_REGISTRY.claims[claimId];
        expect(claim).toBeDefined();
        expect(claim.statement.length).toBeGreaterThan(0);
        expect(claim.sourceDoc.length).toBeGreaterThan(0);
        expect(claim.authorityTier.length).toBeGreaterThan(0);
      }
    });

    it('ensures all quarantined claims have publicAllowed = false', () => {
      expect(CANONICAL_TECHNOLOGY_REGISTRY.quarantinedClaims.length).toBeGreaterThanOrEqual(7);
      CANONICAL_TECHNOLOGY_REGISTRY.quarantinedClaims.forEach((qc) => {
        expect(qc.publicAllowed).toBe(false);
        expect(qc.quarantineReason.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Semantic Validation Engine', () => {
    it('passes canonical registry validation with zero errors', () => {
      const result = validateTechnologyContent(CANONICAL_TECHNOLOGY_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('correctly filters public claims through programmatic selectors', () => {
      const publicClaims = getPublicTechnologyClaims();
      const claimIds = publicClaims.map((c) => c.id);

      // TECH-016 (in-orbit physical deployment) must be excluded
      expect(claimIds).not.toContain('TECH-016');
      expect(claimIds).toContain('TECH-001');
      expect(claimIds).toContain('TECH-002');
      expect(claimIds).toContain('TECH-003');
    });
  });

  describe('Kill-Critic Adversarial Attack Suite', () => {
    it('ATTACK 1: Rejects false in-orbit spaceflight verification', () => {
      const corrupted: CanonicalTechnologyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_TECHNOLOGY_REGISTRY)
      );
      corrupted.claims['TECH-016'].evidenceLevel = 'VERIFIED';

      const result = validateTechnologyContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-006'))).toBe(true);
    });

    it('ATTACK 2: Rejects promoting FUTURE space OS to IMPLEMENTED maturity', () => {
      const corrupted: CanonicalTechnologyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_TECHNOLOGY_REGISTRY)
      );
      corrupted.substrates['cosmos_space_os_blueprint'].state.maturity = 'IMPLEMENTED';
      corrupted.substrates['cosmos_space_os_blueprint'].state.temporal = 'FUTURE';

      const result = validateTechnologyContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-007'))).toBe(true);
    });

    it('ATTACK 3: Rejects open-source supporting stack masquerading as NEXUS_INVENTION', () => {
      const corrupted: CanonicalTechnologyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_TECHNOLOGY_REGISTRY)
      );
      corrupted.substrates['supporting_rust_python_stack'].category = 'NEXUS_INVENTION';

      const result = validateTechnologyContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-005'))).toBe(true);
    });

    it('ATTACK 4: Rejects unbacked operational coupling between COSMOS and NALA', () => {
      const corrupted: CanonicalTechnologyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_TECHNOLOGY_REGISTRY)
      );
      corrupted.capabilities['sovereign_transformer_primitives'].projectIds = ['cosmos', 'nala'];
      corrupted.capabilities['sovereign_transformer_primitives'].name =
        'COSMOS Deploys NALA in Orbit';

      const result = validateTechnologyContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-004'))).toBe(true);
    });

    it('ATTACK 5: Rejects orphaned capability reference in domain', () => {
      const corrupted: CanonicalTechnologyRegistry = JSON.parse(
        JSON.stringify(CANONICAL_TECHNOLOGY_REGISTRY)
      );
      corrupted.domains['reasoning'].capabilityIds.push('non_existent_capability');

      const result = validateTechnologyContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('RULE-008'))).toBe(true);
    });
  });
});
