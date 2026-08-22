import { describe, it, expect } from 'vitest';
import {
  FUTURE_CONTENT,
  getFutureThesis,
  getFutureDirections,
  getFutureDirectionById,
  getDirectionsByHorizon,
  getNearHorizonDirections,
  getMediumHorizonDirections,
  getLongHorizonDirections,
  getOpenProblems,
  getOpenProblemById,
  getResearchHorizons,
  getHorizonPlan,
  getLongHorizonVision,
  getFutureEvolutionMap,
  getFutureNonClaims,
  getQuarantinedFutureClaims,
} from '@/content/future/future';
import { validateFutureContent } from '@/lib/validation/futureContentValidation';
import { FutureContentModel } from '@/types/future';

describe('Phase 04F.2 — Canonical Future Content Model & Information Register', () => {
  describe('Canonical Integrity & Validation Engine', () => {
    it('passes 100% of all validation rules without errors or warnings', () => {
      const result = validateFutureContent(FUTURE_CONTENT);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.auditedCount.directions).toBe(6);
      expect(result.auditedCount.openProblems).toBe(6);
      expect(result.auditedCount.horizons).toBe(3);
      expect(result.auditedCount.nonClaims).toBeGreaterThanOrEqual(5);
      expect(result.auditedCount.quarantined).toBe(4);
    });

    it('validates canonical thesis statement and derivation sequence', () => {
      const thesis = getFutureThesis();
      expect(thesis.statement).toContain('Nexus LAB AI is evolving');
      expect(thesis.statement).toContain('resilient autonomous intelligence');
      expect(thesis.derivationSteps).toHaveLength(4);
      expect(thesis.derivationSteps[0].step).toBe('Where We Are');
      expect(thesis.derivationSteps[3].step).toBe('Where Capabilities Lead');
    });
  });

  describe('Future Directions Public Selectors', () => {
    it('retrieves all 6 canonical Future Directions with exact IDs', () => {
      const directions = getFutureDirections();
      expect(directions).toHaveLength(6);
      const ids = directions.map((d) => d.id);
      expect(ids).toEqual(['FDIR-001', 'FDIR-002', 'FDIR-003', 'FDIR-004', 'FDIR-005', 'FDIR-006']);
    });

    it('retrieves individual directions by ID', () => {
      const nalaDir = getFutureDirectionById('FDIR-001');
      expect(nalaDir).toBeDefined();
      expect(nalaDir?.title).toBe('Autonomous Self-Recovering Execution');
      expect(nalaDir?.evidenceLevel).toBe('VERIFIED');
      expect(nalaDir?.sourceRefs).toContain('04B.2-NALA');

      const nonExistent = getFutureDirectionById('FDIR-999');
      expect(nonExistent).toBeUndefined();
    });

    it('correctly filters directions by horizon tier', () => {
      const near = getNearHorizonDirections();
      const medium = getMediumHorizonDirections();
      const long = getLongHorizonDirections();

      expect(near.length).toBeGreaterThan(0);
      expect(medium.length).toBeGreaterThan(0);
      expect(long.length).toBeGreaterThan(0);

      near.forEach((d) => expect(d.horizon).toBe('NEAR'));
      medium.forEach((d) => expect(d.horizon).toBe('MEDIUM'));
      long.forEach((d) => expect(d.horizon).toBe('LONG'));

      expect(getDirectionsByHorizon('NEAR')).toEqual(near);
    });
  });

  describe('Open Problems & Horizons Public Selectors', () => {
    it('retrieves all 6 canonical Open Problems with bottlenecks', () => {
      const problems = getOpenProblems();
      expect(problems).toHaveLength(6);

      const drift = getOpenProblemById('FPROB-001');
      expect(drift).toBeDefined();
      expect(drift?.title).toContain('Autonomy Drift');
      expect(drift?.status).toBe('OPEN_INVESTIGATION');
    });

    it('retrieves research horizons with strict anti-prediction constraints', () => {
      const horizons = getResearchHorizons();
      expect(horizons.NEAR.timeframe).toBe('0–2 Years');
      expect(horizons.MEDIUM.timeframe).toBe('2–5 Years');
      expect(horizons.LONG.timeframe).toBe('5+ Years');

      const nearPlan = getHorizonPlan('NEAR');
      expect(nearPlan.antiPredictionConstraint).toBeDefined();
      expect(nearPlan.initiatives.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Vision, Evolution & Epistemic Boundaries', () => {
    it('retrieves institutional vision with strict COSMOS firewall', () => {
      const vision = getLongHorizonVision();
      expect(vision.title).toBe('Resilient Sovereign Intelligence Infrastructure');
      expect(vision.cosmosFirewall.status).toBe('LONG_HORIZON');
      expect(vision.cosmosFirewall.evidence).toBe('DOCUMENTED');
      expect(vision.cosmosFirewall.explicitNegativeBoundaries.length).toBeGreaterThanOrEqual(3);
    });

    it('retrieves non-operational evolution map nodes', () => {
      const nodes = getFutureEvolutionMap();
      expect(nodes).toHaveLength(4);
      expect(nodes[0].tier).toBe('FOUNDATION');
      expect(nodes[3].tier).toBe('HORIZON');
    });

    it('retrieves global negative boundaries and quarantined claims', () => {
      const nonClaims = getFutureNonClaims();
      expect(nonClaims.length).toBeGreaterThanOrEqual(7);
      nonClaims.forEach((claim) => {
        expect(claim).toContain('NOT');
      });

      const quarantined = getQuarantinedFutureClaims();
      expect(quarantined).toHaveLength(4);
      expect(quarantined[0].id).toBe('QCLAIM-FUT-001');
    });
  });

  describe('Hostile Kill-Critic Adversarial Vectors (KC-FMODEL-01 to KC-FMODEL-08)', () => {
    it('KC-FMODEL-01: Blocks capability inflation on COSMOS', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      const cosmos = corrupted.directions.find((d) => d.id === 'FDIR-006');
      if (cosmos) {
        cosmos.epistemicStatus = 'CURRENT_CAPABILITY';
      }

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS Firewall'))).toBe(true);
    });

    it('KC-FMODEL-02: Blocks invalid horizon assignment', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      // @ts-expect-error Testing invalid runtime string
      corrupted.directions[0].horizon = 'IMMEDIATE_RELEASE';

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Invalid horizon'))).toBe(true);
    });

    it('KC-FMODEL-03: Blocks directions lacking explicit non-claim boundaries', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.directions[1].nonClaims = [];

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('explicit non-claim boundary'))).toBe(true);
    });

    it('KC-FMODEL-04: Blocks directions lacking provenance source references', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.directions[2].sourceRefs = [];

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('missing source references'))).toBe(true);
    });

    it('KC-FMODEL-05: Blocks horizons lacking anti-prediction constraint', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.horizons.NEAR.antiPredictionConstraint = '';

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(
        result.errors.some((e) => e.includes('lacks mandatory anti-prediction constraint'))
      ).toBe(true);
    });

    it('KC-FMODEL-06: Blocks empty or corrupted thesis statement', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.thesis.statement = '';

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Thesis statement is missing'))).toBe(true);
    });

    it('KC-FMODEL-07: Blocks duplicate Future Direction IDs', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.directions[1].id = 'FDIR-001';

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('Duplicate Future Direction ID'))).toBe(true);
    });

    it('KC-FMODEL-08: Blocks vision missing COSMOS negative boundaries', () => {
      const corrupted: FutureContentModel = JSON.parse(JSON.stringify(FUTURE_CONTENT));
      corrupted.vision.cosmosFirewall.explicitNegativeBoundaries = [];

      const result = validateFutureContent(corrupted);
      expect(result.isValid).toBe(false);
      expect(result.errors.some((e) => e.includes('COSMOS firewall requires at least 3'))).toBe(
        true
      );
    });
  });
});
