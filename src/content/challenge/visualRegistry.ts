import {
  ChallengeVisualRegistryModel,
  ChallengeSectionVisualRule,
  ChallengeEvidenceVisualConstraint,
} from '../../types/challengeVisual';
import { ChallengeEvidenceLevel } from '../../types/challenge';

/**
 * Nexus LAB AI — Canonical Challenge Visual Asset & Design Registry
 * Phase 04G.4 — Machine-Enforceable Visual Architecture
 */
export const CHALLENGE_VISUAL_REGISTRY: ChallengeVisualRegistryModel = {
  version: '1.0.0-PROD-CHALLENGE-VISUAL',
  lastUpdated: '2026-08-22',

  sectionVisualRules: {
    'challenge-hero': {
      sectionId: 'challenge-hero',
      sectionOrder: 1,
      visualRole: 'HERO_SYSTEM_PRESSURE',
      visualMode: 'SYSTEM_VISUAL_HERO',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'HERO_FULL',
      responsiveBehavior: {
        desktop: 'grid grid-cols-12 gap-8 items-center min-h-[70vh] py-20',
        tablet: 'flex flex-col gap-8 py-16',
        mobile: 'flex flex-col gap-6 py-12',
      },
      accessibilityContract: {
        ariaRole: 'banner',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Hero header introducing the fundamental systems engineering bottlenecks of persistent autonomous intelligence.',
      },
      designRationale:
        'Institutional aperture establishing the core thesis: moving from stateless inference to persistent autonomy introduces compounding engineering friction.',
      forbiddenVisualPatterns: [
        'Generic glowing robot or humanoid cyborg graphics',
        'Sci-fi holograms or glowing blue matrix code rain',
        'Marketing badges claiming autonomy is 100% solved',
      ],
    },

    'challenge-pressure-model': {
      sectionId: 'challenge-pressure-model',
      sectionOrder: 2,
      visualRole: 'PRESSURE_TOPOLOGY',
      visualMode: 'TOPOLOGY_DATA_VISUALIZATION',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'TOPOLOGY_CLUSTER',
      responsiveBehavior: {
        desktop: 'grid grid-cols-3 gap-6 items-stretch',
        tablet: 'grid grid-cols-2 gap-4',
        mobile: 'flex flex-col gap-4',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Diagram of the seven autonomy pressure dimensions: Time, Uncertainty, Failure, Scale, Resource Limits, Responsibility, and Environment Shift.',
      },
      designRationale:
        'Presents the structural physics of the problem space as an interconnected topology of systemic pressures.',
      forbiddenVisualPatterns: [
        'Presenting pressure topology as an absolute mathematical law',
        'Using color alone to denote severity of pressure vectors',
      ],
    },

    'challenge-frontier': {
      sectionId: 'challenge-frontier',
      sectionOrder: 3,
      visualRole: 'DIAGNOSTIC_CARD_GRID',
      visualMode: 'CARD_GRID',
      hasDedicatedDiagram: false,
      hasEditorialAsset: false,
      containerGeometry: 'GRID_4COL',
      responsiveBehavior: {
        desktop: 'grid grid-cols-4 gap-6',
        tablet: 'grid grid-cols-2 gap-4',
        mobile: 'flex flex-col gap-4',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Comprehensive 8-card diagnostic grid displaying canonical challenges CH-001 through CH-008 with pressure tags and evidence states.',
      },
      designRationale:
        'Provides a clean diagnostic overview of the 8 canonical challenges without overloading the initial view.',
      forbiddenVisualPatterns: [
        'Promoting experimental or theoretical challenges to verified operational status',
        'Omitting evidence state badges or negative non-claim indicators',
      ],
    },

    'challenge-anatomy': {
      sectionId: 'challenge-anatomy',
      sectionOrder: 4,
      visualRole: 'MECHANISTIC_DOSSIER',
      visualMode: 'EXPANDABLE_DOSSIER',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'TABBED_DOSSIER',
      responsiveBehavior: {
        desktop: 'grid grid-cols-12 gap-8 items-start',
        tablet: 'flex flex-col gap-6',
        mobile: 'flex flex-col gap-4',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'In-depth mechanistic analysis deconstructing failure modes and technical dimensions for each challenge.',
      },
      designRationale:
        'Dossier-style tabbed layout enabling deep technical inspection of concrete failure modes like Context Catastrophe and Cascading Retry Loops.',
      forbiddenVisualPatterns: [
        'Vague high-level bullet points lacking concrete failure mode IDs',
        'Interactive tabs lacking accessible ARIA keyboard controls',
      ],
    },

    'challenge-cascade': {
      sectionId: 'challenge-cascade',
      sectionOrder: 5,
      visualRole: 'CASCADE_SYSTEM_GRAPH',
      visualMode: 'DIRECTED_SYSTEM_GRAPH',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'FLOW_GRAPH',
      responsiveBehavior: {
        desktop: 'flex flex-row items-center justify-between gap-4 overflow-x-auto p-6',
        tablet: 'grid grid-cols-2 gap-4 p-4',
        mobile: 'flex flex-col gap-3 p-3',
      },
      accessibilityContract: {
        ariaRole: 'figure',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Directed flow graph illustrating conceptual cascading failure dynamics from state corruption to coordination collapse.',
      },
      designRationale:
        'Demonstrates how isolated errors compound into systemic multi-agent deadlock while explicitly labeling the graph as conceptual rather than universal law.',
      forbiddenVisualPatterns: [
        'Presenting cascading failure paths as deterministic or unpreventable doom',
        'Animated flashing laser lines or chaotic particle effects',
      ],
    },

    'challenge-matrix': {
      sectionId: 'challenge-matrix',
      sectionOrder: 6,
      visualRole: 'DIAGNOSTIC_STRESS_MATRIX',
      visualMode: 'DATA_MATRIX',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'DENSE_TABLE',
      responsiveBehavior: {
        desktop: 'w-full overflow-x-auto rounded-xl border border-border shadow-xs',
        tablet: 'w-full overflow-x-auto text-sm',
        mobile: 'w-full overflow-x-auto text-xs',
      },
      accessibilityContract: {
        ariaRole: 'table',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Structured matrix cross-referencing all 8 challenges against the 7 pressure dimensions with text labels alongside indicators.',
      },
      designRationale:
        'High-density scientific diagnostic matrix providing architectural evaluation of autonomy pressure points.',
      forbiddenVisualPatterns: [
        'Hardcoding matrix values not present in the canonical content registry',
        'Using raw unlabelled colored dots without accessible aria labels or text equivalents',
      ],
    },

    'challenge-open-questions': {
      sectionId: 'challenge-open-questions',
      sectionOrder: 7,
      visualRole: 'EDITORIAL_RESEARCH_DOCKET',
      visualMode: 'EDITORIAL_DOCKET',
      hasDedicatedDiagram: false,
      hasEditorialAsset: false,
      containerGeometry: 'RESEARCH_CARDS',
      responsiveBehavior: {
        desktop: 'grid grid-cols-2 gap-6',
        tablet: 'grid grid-cols-1 gap-4',
        mobile: 'flex flex-col gap-4',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Editorial research docket presenting open mathematical, causal, and systems research questions across all 8 challenges.',
      },
      designRationale:
        'Structured research card geometry emphasizing scientific transparency and ongoing investigative horizons.',
      forbiddenVisualPatterns: [
        'Hiding research questions or framing them as already solved commercial features',
        'Decorative icons masquerading as quantitative research proofs',
      ],
    },

    'challenge-alignment': {
      sectionId: 'challenge-alignment',
      sectionOrder: 8,
      visualRole: 'CROSS_TRACK_RELATIONSHIP_MATRIX',
      visualMode: 'RELATIONSHIP_MATRIX',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'RELATIONAL_GRID',
      responsiveBehavior: {
        desktop: 'grid grid-cols-4 gap-6',
        tablet: 'grid grid-cols-2 gap-4',
        mobile: 'flex flex-col gap-4',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Relational matrix linking each Challenge to its corresponding Nexus Program (NALA, AMP, RTA-GUARD, COSMOS), Philosophy concept, and Future direction.',
      },
      designRationale:
        'Architectural integration cards making visible the structural bridges across the entire technical website.',
      forbiddenVisualPatterns: [
        'Inventing unanchored relationships to non-existent programs or philosophy concepts',
        'Conflating research alignment with finished production deployment',
      ],
    },

    'challenge-boundaries': {
      sectionId: 'challenge-boundaries',
      sectionOrder: 9,
      visualRole: 'EPISTEMIC_FIREWALL_BOUNDARY',
      visualMode: 'EPISTEMIC_FIREWALL',
      hasDedicatedDiagram: true,
      hasEditorialAsset: false,
      containerGeometry: 'FIREWALL_BOX',
      responsiveBehavior: {
        desktop: 'flex flex-col gap-6 p-8 border border-red-500/20 bg-red-500/5 rounded-2xl',
        tablet: 'flex flex-col gap-4 p-6 border border-red-500/20 bg-red-500/5 rounded-xl',
        mobile: 'flex flex-col gap-3 p-4 border border-red-500/20 bg-red-500/5 rounded-lg',
      },
      accessibilityContract: {
        ariaRole: 'alert',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Epistemic firewall presenting explicit negative non-claims and isolated quarantined claims rendered with strike-through protection.',
      },
      designRationale:
        'Distinctive defensive visual treatment providing institutional restraint and isolating non-claims.',
      forbiddenVisualPatterns: [
        'Rendering quarantined claims as valid positive statements without strike-through',
        'Softening or omitting explicit negative non-claims',
      ],
    },

    'challenge-closing': {
      sectionId: 'challenge-closing',
      sectionOrder: 10,
      visualRole: 'OPEN_FRONTIER_GATEWAY',
      visualMode: 'SYNTHESIS_GATEWAY',
      hasDedicatedDiagram: false,
      hasEditorialAsset: false,
      containerGeometry: 'GATEWAY_CARDS',
      responsiveBehavior: {
        desktop: 'flex flex-col items-center text-center gap-10 py-16',
        tablet: 'flex flex-col items-center text-center gap-8 py-12',
        mobile: 'flex flex-col items-center text-center gap-6 py-8',
      },
      accessibilityContract: {
        ariaRole: 'region',
        textualEquivalentProvided: true,
        colorIndependenceEnforced: true,
        screenReaderSummary:
          'Closing synthesis stating that autonomous intelligence is defined by resilience under pressure, with navigation links to Research, Tech, Programs, Philosophy, and Future.',
      },
      designRationale:
        'Reflective closing aperture providing seamless route transitions to other laboratory tracks.',
      forbiddenVisualPatterns: [
        'Triumphalist marketing claims of total victory over AI challenges',
        'Dead-end footer lacking navigational bridges to other tracks',
      ],
    },
  },

  evidenceConstraints: {
    VERIFIED: {
      evidenceTier: 'VERIFIED',
      badgeStyle: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:text-emerald-400',
      borderTreatment: 'border-emerald-500/20',
      visualConfidenceLevel: 'FORMALLY_PROVEN_AND_TESTED',
      epistemicConstraint:
        'Reserved exclusively for systems validated by automated unit tests and mathematical proofs.',
    },
    REPORTED: {
      evidenceTier: 'REPORTED',
      badgeStyle: 'bg-blue-500/10 text-blue-700 border-blue-500/30 dark:text-blue-400',
      borderTreatment: 'border-blue-500/20',
      visualConfidenceLevel: 'EMPIRICALLY_OBSERVED_IN_LAB',
      epistemicConstraint: 'Applies to testbed trials and documented benchmark findings.',
    },
    DOCUMENTED: {
      evidenceTier: 'DOCUMENTED',
      badgeStyle: 'bg-slate-500/10 text-slate-700 border-slate-500/30 dark:text-slate-400',
      borderTreatment: 'border-slate-500/20',
      visualConfidenceLevel: 'ARCHITECTURALLY_SPECIFIED',
      epistemicConstraint:
        'Applies to published architecture specifications and formal design documents.',
    },
    EXPERIMENTAL: {
      evidenceTier: 'EXPERIMENTAL',
      badgeStyle: 'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:text-amber-400',
      borderTreatment: 'border-amber-500/20',
      visualConfidenceLevel: 'ACTIVE_PROTOTYPE_UNDER_TEST',
      epistemicConstraint:
        'Indicates active laboratory research; cannot be styled as production-ready.',
    },
    THEORETICAL: {
      evidenceTier: 'THEORETICAL',
      badgeStyle: 'bg-purple-500/10 text-purple-700 border-purple-500/30 dark:text-purple-400',
      borderTreatment: 'border-purple-500/20',
      visualConfidenceLevel: 'CONCEPTUAL_FORMULATION',
      epistemicConstraint:
        'Indicates mathematical or conceptual modeling with zero production implementation.',
    },
    UNVERIFIED: {
      evidenceTier: 'UNVERIFIED',
      badgeStyle: 'bg-rose-500/10 text-rose-700 border-rose-500/30 dark:text-rose-400',
      borderTreatment: 'border-rose-500/20',
      visualConfidenceLevel: 'OPEN_SYSTEMS_BOTTLENECK',
      epistemicConstraint:
        'Indicates known unsolved engineering challenges with zero verification claims.',
    },
  },

  forbiddenVisualPatterns: [
    'Humanoid robots or glowing silicon cyborg aesthetics',
    'Glowing brain vectors or fake neural holographic nodes',
    'Cyberpunk neon grids, laser lines, or dark apocalyptic matrix motifs',
    'Commercial marketing badges claiming 100% solved autonomy',
    'Unlabelled colored indicators violating accessibility color-independence standards',
    'Displaying quarantined claims as valid positive assertions',
  ],
};

/* =========================================================================
   PUBLIC AUTHORITATIVE SELECTORS
   ========================================================================= */

/**
 * Returns the entire canonical Challenge Visual Registry model.
 */
export function getChallengeVisualRegistry(): ChallengeVisualRegistryModel {
  return CHALLENGE_VISUAL_REGISTRY;
}

/**
 * Retrieves the specific visual rule for a given section ID.
 */
export function getChallengeSectionVisualRule(
  sectionId: string
): ChallengeSectionVisualRule | undefined {
  return CHALLENGE_VISUAL_REGISTRY.sectionVisualRules[sectionId];
}

/**
 * Retrieves the epistemic visual constraint for a given evidence level.
 */
export function getChallengeEvidenceVisualConstraint(
  tier: ChallengeEvidenceLevel
): ChallengeEvidenceVisualConstraint {
  return CHALLENGE_VISUAL_REGISTRY.evidenceConstraints[tier];
}

/**
 * Returns the list of universal forbidden visual patterns.
 */
export function getForbiddenChallengeVisualPatterns(): string[] {
  return CHALLENGE_VISUAL_REGISTRY.forbiddenVisualPatterns;
}

/**
 * Validates that all 10 canonical sections from 04G.3 possess corresponding visual rules.
 */
export function validateChallengeVisualRules(sectionIds: string[]): {
  isValid: boolean;
  missingSectionIds: string[];
} {
  const registeredIds = Object.keys(CHALLENGE_VISUAL_REGISTRY.sectionVisualRules);
  const missing = sectionIds.filter((id) => !registeredIds.includes(id));
  return {
    isValid: missing.length === 0,
    missingSectionIds: missing,
  };
}
