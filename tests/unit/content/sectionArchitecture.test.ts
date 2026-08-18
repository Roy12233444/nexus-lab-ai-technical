import { describe, it, expect } from 'vitest';
import { OVERVIEW_PAGE_BLUEPRINT } from '@/content/overview/sectionArchitecture';

describe('Overview Page Architecture Blueprint (Phase 04A.4)', () => {
  it('contains exactly 10 sequential sections from 1 to 10', () => {
    expect(OVERVIEW_PAGE_BLUEPRINT.sections).toHaveLength(10);
    OVERVIEW_PAGE_BLUEPRINT.sections.forEach((section, index) => {
      expect(section.order).toBe(index + 1);
    });
  });

  it('has unique IDs across all sections', () => {
    const ids = OVERVIEW_PAGE_BLUEPRINT.sections.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('assigns spatial containers aligned with content density requirements', () => {
    const heroSection = OVERVIEW_PAGE_BLUEPRINT.sections.find((s) => s.id === 'identity-hero');
    const architectureSection = OVERVIEW_PAGE_BLUEPRINT.sections.find(
      (s) => s.id === 'architectural-hierarchy'
    );
    const programsSection = OVERVIEW_PAGE_BLUEPRINT.sections.find(
      (s) => s.id === 'research-programs'
    );

    expect(heroSection?.containerWidth).toBe('reading');
    expect(architectureSection?.containerWidth).toBe('wide');
    expect(programsSection?.containerWidth).toBe('content');
  });

  it('ensures every section has valid component types and source authorities', () => {
    OVERVIEW_PAGE_BLUEPRINT.sections.forEach((section) => {
      expect(section.componentType).toBeDefined();
      expect(section.sourceAuthority).toContain('TIER_');
      expect(section.contentKey).toBeDefined();
    });
  });
});
