/**
 * Nexus LAB AI — Technology Page Section Architecture Type Definitions
 * Phase 04C.4 — Blueprint & Section Mapping
 */

export type SectionContainerWidth = 'reading' | 'narrow' | 'content' | 'wide' | 'full';

export type SectionBackground = 'primary' | 'secondary' | 'tertiary';

export type TechnologySectionComponentType =
  | 'TechnologyHeroSection'
  | 'TechnologyPhilosophySection'
  | 'TechnologyArchitectureSection'
  | 'TechnologyDomainsSection'
  | 'TechnologyCapabilitiesSection'
  | 'TechnologySubstratesSection'
  | 'TechnologyProjectMapSection'
  | 'TechnologyEvidenceSection';

export interface TechnologySectionSpec {
  order: number;
  id: string;
  title: string;
  eyebrow: string;
  purpose: string;
  sourceAuthority: string;
  componentType: TechnologySectionComponentType;
  containerWidth: SectionContainerWidth;
  background: SectionBackground;
  spacing: 'sm' | 'md' | 'lg' | 'none';
  contentKey: string;
}

export interface TechnologyPageBlueprint {
  pageId: string;
  route: string;
  title: string;
  description: string;
  sections: TechnologySectionSpec[];
}
