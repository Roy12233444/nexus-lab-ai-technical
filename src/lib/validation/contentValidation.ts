import {
  OverviewContentModel,
  ClaimRecord,
  RelationshipRecord,
  ResearchProgramRecord,
} from '@/types/overview';

export interface ValidationError {
  rule: string;
  message: string;
  entityId?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validates semantic invariants of the Overview content model.
 */
export function validateOverviewContent(model: OverviewContentModel): ValidationResult {
  const errors: ValidationError[] = [];

  // RULE-001: Every claim must have complete provenance
  model.claims.forEach((claim: ClaimRecord) => {
    if (!claim.provenance || !claim.provenance.sourceId || !claim.provenance.authorityTier) {
      errors.push({
        rule: 'RULE-001',
        message: `Claim ${claim.id} is missing complete provenance metadata.`,
        entityId: claim.id,
      });
    }
  });

  // RULE-002: VERIFIED claims must have Tier 3 or higher authority
  model.claims.forEach((claim: ClaimRecord) => {
    if (claim.evidence === 'VERIFIED') {
      const isHighAuthority =
        claim.provenance.authorityTier === 'TIER_1_CONSTITUTIONAL' ||
        claim.provenance.authorityTier === 'TIER_2_ENGINEERING' ||
        claim.provenance.authorityTier === 'TIER_3_VERIFIED_EVIDENCE';

      if (!isHighAuthority) {
        errors.push({
          rule: 'RULE-002',
          message: `Claim ${claim.id} is marked VERIFIED but lacks Tier 1-3 authority backing.`,
          entityId: claim.id,
        });
      }
    }
  });

  // RULE-003: Historical programs cannot be marked as PRIMARY
  model.researchPrograms.forEach((program: ResearchProgramRecord) => {
    if (program.temporalState === 'HISTORICAL' && program.publicRelevance === 'PRIMARY') {
      errors.push({
        rule: 'RULE-003',
        message: `Program ${program.id} is HISTORICAL but marked as PRIMARY public relevance.`,
        entityId: program.id,
      });
    }
  });

  // RULE-004: ESTABLISHED relationships require evidence references
  model.relationships.forEach((rel: RelationshipRecord) => {
    if (rel.state === 'ESTABLISHED' && (!rel.evidenceRef || rel.evidenceRef.trim() === '')) {
      errors.push({
        rule: 'RULE-004',
        message: `Relationship between ${rel.source} and ${rel.target} is marked ESTABLISHED but lacks an evidenceRef.`,
      });
    }
  });

  // RULE-005: Research programs must have valid maturity and evidence states
  model.researchPrograms.forEach((program: ResearchProgramRecord) => {
    if (
      program.evidence === 'VERIFIED' &&
      (!program.verifiedMilestones || program.verifiedMilestones.length === 0)
    ) {
      errors.push({
        rule: 'RULE-005',
        message: `Program ${program.id} is marked VERIFIED but has no verifiedMilestones recorded.`,
        entityId: program.id,
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
