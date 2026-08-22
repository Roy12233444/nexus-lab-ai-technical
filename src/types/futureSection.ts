/**
 * Nexus LAB AI — Future Page Section Architecture Type Definitions
 * Phase 04F.3 — Blueprint & Section Mapping Specification
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type FutureSectionComponentType =
  | 'FutureHeroSection'
  | 'FutureThesisSection'
  | 'FutureDirectionsSection'
  | 'FutureHorizonsSection'
  | 'FutureProblemsSection'
  | 'FutureEvolutionSection'
  | 'FutureMatrixSection'
  | 'FutureVisionSection'
  | 'FutureBoundariesSection'
  | 'FutureClosingSection';

export interface FutureSectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: FutureSectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
  dataSource:
    | 'getFutureThesis'
    | 'getFutureDirections'
    | 'getResearchHorizons'
    | 'getOpenProblems'
    | 'getFutureEvolutionMap'
    | 'getLongHorizonVision'
    | 'getFutureNonClaims'
    | 'getQuarantinedFutureClaims'
    | 'CANONICAL_FUTURE_REGISTRY';
  visualRole: string;
  forbiddenContent: string[];
}

export interface FuturePageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: FutureSectionSpec[];
}
