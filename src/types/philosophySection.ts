/**
 * Nexus LAB AI — Philosophy Page Section Architecture Type Definitions
 * Phase 04E.4 — Blueprint & Section Mapping Specification
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type PhilosophySectionComponentType =
  | 'PhilosophyHeroSection'
  | 'PhilosophyThesisSection'
  | 'PhilosophyPrinciplesSection'
  | 'PhilosophyEpistemologySection'
  | 'PhilosophyCognitionSection'
  | 'PhilosophyAgencySection'
  | 'PhilosophyResponsibilitySection'
  | 'PhilosophyFormalizationSection'
  | 'PhilosophyHypothesesSection'
  | 'PhilosophyMappingSection'
  | 'PhilosophyBoundariesSection'
  | 'PhilosophyClosingSection';

export interface PhilosophySectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: PhilosophySectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
  dataSource:
    | 'getPublicPrimaryConcepts'
    | 'getPublicSupportingConcepts'
    | 'getDeepResearchConcepts'
    | 'getPublicPhilosophyPrinciples'
    | 'getAllPublicClaims'
    | 'getQuarantinedClaims'
    | 'CANONICAL_PHILOSOPHY_REGISTRY';
}

export interface PhilosophyPageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: PhilosophySectionSpec[];
}
