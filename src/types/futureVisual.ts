/**
 * Nexus LAB AI — Future Track Visual Design & Asset Domain Types
 * Phase 04F.4 — Machine-Enforceable Visual Architecture
 */

export type FutureAssetId =
  | 'FUTURE-IMG-001'
  | 'FUTURE-IMG-002'
  | 'FUTURE-IMG-003'
  | 'FUTURE-IMG-004'
  | 'FUTURE-IMG-005'
  | 'FUTURE-IMG-006'
  | 'FUTURE-IMG-007';

export type FutureVisualRole =
  | 'HERO_IDENTITY'
  | 'HUMAN_AGENCY'
  | 'COLLECTIVE_CAPABILITY'
  | 'ENGINEERING_BOTTLENECK'
  | 'EARTH_FOUNDATION'
  | 'ORBITAL_POSSIBILITY'
  | 'LONG_HORIZON_SYNTHESIS';

export interface FutureVisualAsset {
  id: FutureAssetId;
  assetFile: string;
  publicPath: string;
  title: string;
  role: FutureVisualRole;
  primarySectionId: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1' | '21:9';
  recommendedWidth: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  altText: string;
  caption: string;
  narrativeMeaning: string;
  epistemicFirewallNote: string;
}

export interface FutureSectionVisualRule {
  sectionId: string;
  sectionOrder: number;
  hasDedicatedImage: boolean;
  assignedAssetIds: FutureAssetId[];
  layoutMode: 'IMAGE_HERO' | 'IMAGE_SIDEBAR' | 'IMAGE_GRID' | 'DATA_FIRST_NO_IMAGE';
  designRationale: string;
}
