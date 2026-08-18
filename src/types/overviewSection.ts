/**
 * Nexus LAB AI — Overview Section Architecture Type Definitions
 * Phase 04A.4 — Blueprint & Section Mapping
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type SectionComponentType =
  | 'HeroSection'
  | 'ThesisSection'
  | 'MissionSection'
  | 'InnovationEngineSection'
  | 'MethodologySection'
  | 'ArchitectureSection'
  | 'ResearchProgramsSection'
  | 'EvidenceSection'
  | 'StateMatrixSection'
  | 'ExplorationSection';

export interface OverviewSectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: SectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg';
  contentKey: string;
}

export interface OverviewPageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: OverviewSectionSpec[];
}
