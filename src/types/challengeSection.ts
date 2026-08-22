/**
 * Nexus LAB AI — Challenge Page Section Architecture Type Definitions
 * Phase 04G.3 — Blueprint & Section Mapping Specification
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type ChallengeSectionComponentType =
  | 'ChallengeHeroSection'
  | 'ChallengePressureModelSection'
  | 'ChallengeFrontierSection'
  | 'ChallengeAnatomySection'
  | 'ChallengeCascadeSection'
  | 'ChallengeMatrixSection'
  | 'ChallengeOpenQuestionsSection'
  | 'ChallengeAlignmentSection'
  | 'ChallengeBoundariesSection'
  | 'ChallengeClosingSection';

export type ChallengeSectionDataSource =
  | 'getChallengeContent'
  | 'getPressureDimensions'
  | 'getAllChallenges'
  | 'getChallengeCrossTrackMappings'
  | 'getGlobalChallengeNegativeBoundaries'
  | 'getQuarantinedChallengeClaims'
  | 'CANONICAL_CHALLENGE_CONTENT';

export interface ChallengeSectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: ChallengeSectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
  dataSource: ChallengeSectionDataSource;
  visualRole: string;
  forbiddenContent: string[];
}

export interface ChallengePageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: ChallengeSectionSpec[];
}
