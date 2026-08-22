import { FutureVisualAsset, FutureSectionVisualRule, FutureAssetId } from '@/types/futureVisual';

/**
 * Nexus LAB AI — Canonical Future Visual Asset Registry
 * Phase 04F.4 — Visual Design System & Asset Contracts
 */
export const FUTURE_VISUAL_REGISTRY: Record<FutureAssetId, FutureVisualAsset> = {
  'FUTURE-IMG-001': {
    id: 'FUTURE-IMG-001',
    assetFile: '1.png',
    publicPath: '/images/future/1.png',
    title: 'Nexus Future Horizon',
    role: 'HERO_IDENTITY',
    primarySectionId: 'future-hero',
    aspectRatio: '16:9',
    recommendedWidth: {
      desktop: 'w-full max-w-4xl',
      tablet: 'w-full',
      mobile: 'w-full',
    },
    altText:
      'Scientifically realistic Earth floating with subtle technical orbital geometry above a pure white background, with a diverse collective of human researchers looking toward the planet.',
    caption: 'Figure 1.0: Humanity, Earth, Autonomous Intelligence, and the Long Horizon.',
    narrativeMeaning:
      'Establishes the foundational ethos: human civilization as the origin and beneficiary of sovereign autonomous intelligence.',
    epistemicFirewallNote:
      'Represents conceptual institutional orientation; does not imply deployed orbital spacecraft.',
  },
  'FUTURE-IMG-002': {
    id: 'FUTURE-IMG-002',
    assetFile: '2.png',
    publicPath: '/images/future/2.png',
    title: 'Human Agency & Intentional Cognition',
    role: 'HUMAN_AGENCY',
    primarySectionId: 'future-thesis',
    aspectRatio: '3:4',
    recommendedWidth: {
      desktop: 'w-full max-w-md',
      tablet: 'w-full max-w-sm',
      mobile: 'w-full',
    },
    altText:
      'A realistic adult human standing in a calm, intentional posture with subtle minimal geometric decision lines on a pure white background.',
    caption:
      'Figure 2.0: Human agency and epistemic reasoning as the primary origin of intelligence.',
    narrativeMeaning:
      'Reinforces that autonomous systems do not start with ungrounded machines, but with human intention and cognitive discipline.',
    epistemicFirewallNote:
      'Represents human agency; does not imply human-cyborg integration or neural implants.',
  },
  'FUTURE-IMG-003': {
    id: 'FUTURE-IMG-003',
    assetFile: '3.png',
    publicPath: '/images/future/3.png',
    title: 'Collective Humanity & Research Collaboration',
    role: 'COLLECTIVE_CAPABILITY',
    primarySectionId: 'future-directions',
    aspectRatio: '16:9',
    recommendedWidth: {
      desktop: 'w-full',
      tablet: 'w-full',
      mobile: 'w-full',
    },
    altText:
      'A diverse team of engineers, researchers, and builders collaborating around a physical engineering workspace on a pure white background.',
    caption:
      'Figure 3.0: Collective engineering capability driving multi-vector research directions.',
    narrativeMeaning:
      'Illustrates that technical breakthrough is the compounding product of collective institutional engineering.',
    epistemicFirewallNote:
      'Institutional laboratory context; does not represent commercial product endorsement.',
  },
  'FUTURE-IMG-004': {
    id: 'FUTURE-IMG-004',
    assetFile: '4.png',
    publicPath: '/images/future/4.png',
    title: 'Humanity Engineering Autonomous Intelligence',
    role: 'ENGINEERING_BOTTLENECK',
    primarySectionId: 'future-problems',
    aspectRatio: '16:9',
    recommendedWidth: {
      desktop: 'w-full max-w-2xl',
      tablet: 'w-full',
      mobile: 'w-full',
    },
    altText:
      'A researcher working with structured computational node topologies and distributed systems infrastructure against a pure white background.',
    caption:
      'Figure 4.0: Confronting fundamental computational and scientific bottlenecks in autonomous systems.',
    narrativeMeaning:
      'Binds the six open problems to tangible systems engineering constraints rather than abstract speculation.',
    epistemicFirewallNote:
      'Demonstrates active laboratory investigation; open problems remain unsolved challenges.',
  },
  'FUTURE-IMG-005': {
    id: 'FUTURE-IMG-005',
    assetFile: '5.png',
    publicPath: '/images/future/5.png',
    title: 'Planet Earth — The Foundational Cradle',
    role: 'EARTH_FOUNDATION',
    primarySectionId: 'future-vision',
    aspectRatio: '1:1',
    recommendedWidth: {
      desktop: 'w-full max-w-md',
      tablet: 'w-full max-w-sm',
      mobile: 'w-full max-w-xs',
    },
    altText:
      'Scientifically accurate planet Earth with realistic clouds and continental contours isolated against a pure white background.',
    caption:
      'Figure 5.0: Earth as the foundational cradle and sovereign origin of intelligence systems.',
    narrativeMeaning:
      'Grounds the long-horizon vision in civilization preservation and planetary resilience.',
    epistemicFirewallNote:
      'Natural scientific representation; strictly non-apocalyptic and non-speculative.',
  },
  'FUTURE-IMG-006': {
    id: 'FUTURE-IMG-006',
    assetFile: '6.png',
    publicPath: '/images/future/6.png',
    title: 'Orbital Horizon & Extreme-Environment Substrates',
    role: 'ORBITAL_POSSIBILITY',
    primarySectionId: 'future-vision',
    aspectRatio: '16:9',
    recommendedWidth: {
      desktop: 'w-full max-w-xl',
      tablet: 'w-full',
      mobile: 'w-full',
    },
    altText:
      'Planet Earth viewed from above the atmosphere with subtle, plausible orbital trajectories on a pure white background.',
    caption:
      'Figure 5.1: Conceptual extreme-environment orbital computing substrates (COSMOS Program PROG-004).',
    narrativeMeaning:
      'Visualizes the theoretical possibility frontier of extreme-environment, radiation-tolerant operating systems.',
    epistemicFirewallNote:
      'MANDATORY FIREWALL: Purely theoretical research architecture; does NOT claim active spaceflight missions or operational satellites.',
  },
  'FUTURE-IMG-007': {
    id: 'FUTURE-IMG-007',
    assetFile: '7.png',
    publicPath: '/images/future/7.png',
    title: 'Humanity Looking Toward the Long Horizon',
    role: 'LONG_HORIZON_SYNTHESIS',
    primarySectionId: 'future-closing',
    aspectRatio: '21:9',
    recommendedWidth: {
      desktop: 'w-full',
      tablet: 'w-full',
      mobile: 'w-full',
    },
    altText:
      'A diverse multi-generational group of humans standing together on a pure white background looking toward a distant horizon.',
    caption:
      'Figure 6.0: We are not predicting the future; we are engineering the capability to explore it.',
    narrativeMeaning:
      'Synthesizes the entire Future Track: ending on collective human potential rather than technological bravado.',
    epistemicFirewallNote:
      'Philosophical horizon synthesis; strictly non-promotional and non-deterministic.',
  },
};

/**
 * Explicit 10-Section Visual Architecture Rules
 */
export const FUTURE_SECTION_VISUAL_RULES: FutureSectionVisualRule[] = [
  {
    sectionId: 'future-hero',
    sectionOrder: 1,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-001'],
    layoutMode: 'IMAGE_HERO',
    designRationale:
      'Dominant hero visual establishing the unified thesis of Humanity + Earth + Autonomous Intelligence.',
  },
  {
    sectionId: 'future-thesis',
    sectionOrder: 2,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-002'],
    layoutMode: 'IMAGE_SIDEBAR',
    designRationale:
      'Supporting editorial visual highlighting individual human agency and cognitive intention.',
  },
  {
    sectionId: 'future-directions',
    sectionOrder: 3,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-003'],
    layoutMode: 'IMAGE_GRID',
    designRationale:
      'Contextual visual showing collective engineering collaboration without competing with the 6 direction cards.',
  },
  {
    sectionId: 'future-horizons',
    sectionOrder: 4,
    hasDedicatedImage: false,
    assignedAssetIds: [],
    layoutMode: 'DATA_FIRST_NO_IMAGE',
    designRationale:
      'Data-first planning horizon cards (Near/Medium/Long); avoids decorative image clutter to maintain anti-prediction discipline.',
  },
  {
    sectionId: 'future-problems',
    sectionOrder: 5,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-004'],
    layoutMode: 'IMAGE_SIDEBAR',
    designRationale:
      'Anchors the 6 open problems to real computational infrastructure and engineering bottlenecks.',
  },
  {
    sectionId: 'future-evolution',
    sectionOrder: 6,
    hasDedicatedImage: false,
    assignedAssetIds: [],
    layoutMode: 'DATA_FIRST_NO_IMAGE',
    designRationale:
      'Native tiered hierarchy visualization (EVO-01 to EVO-04) serves as its own architectural diagram.',
  },
  {
    sectionId: 'future-matrix',
    sectionOrder: 7,
    hasDedicatedImage: false,
    assignedAssetIds: [],
    layoutMode: 'DATA_FIRST_NO_IMAGE',
    designRationale:
      'Epistemic truth table must remain clean, dense, and unambiguous without distracting imagery.',
  },
  {
    sectionId: 'future-vision',
    sectionOrder: 8,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-005', 'FUTURE-IMG-006'],
    layoutMode: 'IMAGE_GRID',
    designRationale:
      'Paired composition: Earth Foundation (Img 5) and Orbital Possibility (Img 6) enforcing the COSMOS spaceflight firewall.',
  },
  {
    sectionId: 'future-boundaries',
    sectionOrder: 9,
    hasDedicatedImage: false,
    assignedAssetIds: [],
    layoutMode: 'DATA_FIRST_NO_IMAGE',
    designRationale:
      'Epistemic firewall and quarantined claims require strict, high-contrast typographical focus.',
  },
  {
    sectionId: 'future-closing',
    sectionOrder: 10,
    hasDedicatedImage: true,
    assignedAssetIds: ['FUTURE-IMG-007'],
    layoutMode: 'IMAGE_HERO',
    designRationale:
      'Panoramic civilizational closing visual: collective humanity looking toward the open horizon.',
  },
];

/* =========================================================================
   PUBLIC VISUAL SELECTORS
   ========================================================================= */

export const getFutureVisualAsset = (id: FutureAssetId): FutureVisualAsset =>
  FUTURE_VISUAL_REGISTRY[id];

export const getAllFutureVisualAssets = (): FutureVisualAsset[] =>
  Object.values(FUTURE_VISUAL_REGISTRY);

export const getVisualsForSection = (sectionId: string): FutureVisualAsset[] => {
  const rule = FUTURE_SECTION_VISUAL_RULES.find((r) => r.sectionId === sectionId);
  if (!rule || !rule.hasDedicatedImage) return [];
  return rule.assignedAssetIds.map((id) => FUTURE_VISUAL_REGISTRY[id]);
};

export const getSectionVisualRule = (sectionId: string): FutureSectionVisualRule | undefined =>
  FUTURE_SECTION_VISUAL_RULES.find((r) => r.sectionId === sectionId);
