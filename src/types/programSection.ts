/**
 * Nexus LAB AI — Programs Page Section Architecture Type Definitions
 * Phase 04D.4 — Blueprint & Section Mapping
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type ProgramSectionComponentType =
  | 'ProgramsHeroSection'
  | 'ProgramsThesisSection'
  | 'ProgramsCoreSection'
  | 'ProgramsStateSection'
  | 'ProgramsSupportingSection'
  | 'ProgramsContextSection'
  | 'ProgramsBoundariesSection'
  | 'ProgramsClosingSection';

export interface ProgramSectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: ProgramSectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
  dataSource:
    | 'getPublicPrimaryPrograms'
    | 'getPublicSupportingPrograms'
    | 'getPublicContextPrograms'
    | 'getAllPublicPrograms'
    | 'CANONICAL_PROGRAMS_REGISTRY';
}

export interface ProgramsPageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: ProgramSectionSpec[];
}
