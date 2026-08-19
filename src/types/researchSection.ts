/**
 * Nexus LAB AI — Research Page Section Architecture Type Definitions
 * Phase 04B.4 — Blueprint & Section Mapping
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type ResearchSectionComponentType =
  | 'ResearchHeroSection'
  | 'ResearchThesisSection'
  | 'ResearchPortfolioSection'
  | 'ResearchDomainsSection'
  | 'ResearchEvidenceMatrixSection'
  | 'ResearchBoundariesSection'
  | 'ResearchGatewaysSection'
  | 'ResearchClosingSection';

export interface ResearchSectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: ResearchSectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
}

export interface ResearchPageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: ResearchSectionSpec[];
}
