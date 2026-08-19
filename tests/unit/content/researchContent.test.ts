import { describe, it, expect } from 'vitest';
import {
  CANONICAL_RESEARCH_REGISTRY,
  CANONICAL_RESEARCH_PROJECTS,
} from '@/content/research/research';
import {
  validateResearchContent,
  ResearchValidationError,
} from '@/lib/validation/researchContentValidation';
import { CanonicalResearchRegistry } from '@/types/research';

describe('Phase 04B.3 — Canonical Research Content Model & Invariant Suite', () => {
  describe('Structural & Canonical Completeness', () => {
    it('contains exactly four canonical research projects', () => {
      expect(CANONICAL_RESEARCH_PROJECTS).toHaveLength(4);
      const projectIds = CANONICAL_RESEARCH_PROJECTS.map((p) => p.identity.id);
      expect(projectIds).toContain('nala');
      expect(projectIds).toContain('amp');
      expect(projectIds).toContain('rta-guard');
      expect(projectIds).toContain('cosmos');
    });

    it('passes all semantic invariant validation rules with 0 errors', () => {
      const result = validateResearchContent(CANONICAL_RESEARCH_REGISTRY);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('enforces that every project has identity, state, and provenance', () => {
      CANONICAL_RESEARCH_PROJECTS.forEach((project) => {
        expect(project.identity.name).toBeDefined();
        expect(project.identity.acronym).toBeDefined();
        expect(project.identity.domain).toBeDefined();
        expect(project.identity.problemStatement).toBeDefined();
        expect(project.identity.coreMission).toBeDefined();

        expect(project.state.maturity).toBeDefined();
        expect(project.state.evidence).toBeDefined();
        expect(project.state.temporal).toBeDefined();
        expect(project.state.publicRelevance).toBeDefined();

        expect(project.provenance.sourceId).toBeDefined();
        expect(project.provenance.authorityTier).toBeDefined();
        expect(project.provenance.extractedAt).toBeDefined();
      });
    });

    it('verifies that every public evidence record carries explicit claim ID and provenance', () => {
      CANONICAL_RESEARCH_PROJECTS.forEach((project) => {
        expect(project.evidenceRecords.length).toBeGreaterThan(0);
        project.evidenceRecords.forEach((record) => {
          expect(record.claimId).toMatch(/^CLM-[A-Z]+-[0-9]{3}$/);
          expect(record.statement).toBeDefined();
          expect(record.sourceDoc).toBeDefined();
          expect(record.authorityTier).toBeDefined();
          expect(record.evidenceLevel).toBeDefined();
          expect(record.verificationBoundary).toBeDefined();
        });
      });
    });
  });

  describe('Project Independence & Boundary Isolation', () => {
    it('guarantees project independence with empty operational relationship graphs by default', () => {
      CANONICAL_RESEARCH_PROJECTS.forEach((project) => {
        expect(project.relationships).toEqual([]);
      });
    });

    it('preserves quarantined claims safely away from public summaries', () => {
      CANONICAL_RESEARCH_PROJECTS.forEach((project) => {
        expect(project.limitations.quarantinedClaims.length).toBeGreaterThan(0);
        project.limitations.quarantinedClaims.forEach((qc) => {
          expect(qc.id).toMatch(/^QC-[A-Z]+-[0-9]{3}$/);
          expect(qc.claim).toBeDefined();
          expect(qc.quarantineReason).toBeDefined();
          expect(qc.requiredVerification).toBeDefined();
          // Quarantined claim text must not be in public lead
          expect(
            project.publicSummary.publicLead.toLowerCase().includes(qc.claim.toLowerCase())
          ).toBe(false);
        });
      });
    });
  });

  describe('Kill-Critic Invariant Attack Tests', () => {
    it('Attack #1: catches missing provenance on evidence claims', () => {
      const invalidRegistry: CanonicalResearchRegistry = JSON.parse(
        JSON.stringify(CANONICAL_RESEARCH_REGISTRY)
      );
      invalidRegistry.projects.nala.evidenceRecords[0].sourceDoc = '';

      const result = validateResearchContent(invalidRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e: ResearchValidationError) => e.rule === 'RULE-001')).toBe(true);
    });

    it('Attack #2: catches VERIFIED claims without Tier 1-3 authority backing', () => {
      const invalidRegistry: CanonicalResearchRegistry = JSON.parse(
        JSON.stringify(CANONICAL_RESEARCH_REGISTRY)
      );
      invalidRegistry.projects.nala.evidenceRecords[0].authorityTier = 'TIER_5_PORTFOLIO';

      const result = validateResearchContent(invalidRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e: ResearchValidationError) => e.rule === 'RULE-002')).toBe(true);
    });

    it('Attack #3: catches quarantined claim leakage into public summary lead', () => {
      const invalidRegistry: CanonicalResearchRegistry = JSON.parse(
        JSON.stringify(CANONICAL_RESEARCH_REGISTRY)
      );
      invalidRegistry.projects.amp.publicSummary.publicLead =
        'Completely solves artificial memory and semantic forgetting across all foundation models.';

      const result = validateResearchContent(invalidRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e: ResearchValidationError) => e.rule === 'RULE-003')).toBe(true);
    });

    it('Attack #4: catches unbacked in-orbit flight claims on COSMOS', () => {
      const invalidRegistry: CanonicalResearchRegistry = JSON.parse(
        JSON.stringify(CANONICAL_RESEARCH_REGISTRY)
      );
      invalidRegistry.projects.cosmos.evidenceRecords[1].evidenceLevel = 'VERIFIED';

      const result = validateResearchContent(invalidRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e: ResearchValidationError) => e.rule === 'RULE-005')).toBe(true);
    });

    it('Attack #5: catches FUTURE temporal projects falsely claiming IMPLEMENTED maturity', () => {
      const invalidRegistry: CanonicalResearchRegistry = JSON.parse(
        JSON.stringify(CANONICAL_RESEARCH_REGISTRY)
      );
      invalidRegistry.projects.cosmos.state.maturity = 'IMPLEMENTED';
      invalidRegistry.projects.cosmos.state.temporal = 'FUTURE';

      const result = validateResearchContent(invalidRegistry);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e: ResearchValidationError) => e.rule === 'RULE-006')).toBe(true);
    });
  });
});
