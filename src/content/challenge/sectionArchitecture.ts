import { ChallengePageBlueprint, ChallengeSectionSpec } from '../../types/challengeSection';
import { CANONICAL_CHALLENGE_IDS } from '../../lib/validation/challengeContentValidation';
import { getAllChallenges } from './challenge';

/**
 * Nexus LAB AI — Canonical Challenge Page Architecture Blueprint
 * Phase 04G.3 — 10-Section Systems Blueprint & Data Contract
 */
export const CHALLENGE_PAGE_BLUEPRINT: ChallengePageBlueprint = {
  pageId: 'challenge',
  route: '/challenge',
  title: 'Nexus LAB AI Problem Frontier & Autonomy Pressures',
  description:
    'The Hard Problems Behind Autonomous Intelligence — Investigating the fundamental systems engineering, mathematical, and operational bottlenecks that emerge when intelligent systems persist across time, failure, uncertainty, scale, and resource constraints.',
  sections: [
    {
      order: 1,
      id: 'challenge-hero',
      title: 'The Hard Problems Behind Autonomous Intelligence',
      eyebrow: 'Nexus LAB AI Problem Frontier',
      purpose:
        'Establish the central thesis: moving from short-lived, supervised model inference to persistent, autonomous execution creates fundamental engineering bottlenecks that cannot be solved by scale alone.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeHeroSection',
      containerWidth: 'full',
      background: 'primary',
      spacing: 'none',
      contentKey: 'thesis',
      dataSource: 'getChallengeContent',
      visualRole:
        'Hero conceptual orientation slot framing systemic autonomy pressure against raw compute.',
      forbiddenContent: [
        'Marketing claims that any challenge is completely solved',
        'Speculative product delivery deadlines or commercial promises',
        'Vague buzzwords (magic, infallible, unstoppable autonomy)',
      ],
    },
    {
      order: 2,
      id: 'challenge-pressure-model',
      title: 'The Seven Pressure Dimensions of Autonomy',
      eyebrow: 'Systemic Physics',
      purpose:
        'Introduce the 7 foundational pressure vectors (Time, Uncertainty, Failure, Scale, Resource Limits, Responsibility, Environment Shift) that govern autonomous failure modes.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengePressureModelSection',
      containerWidth: 'wide',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'pressureDimensions',
      dataSource: 'getPressureDimensions',
      visualRole:
        'Structured topology layout visualizing the compounding vectors of systemic stress.',
      forbiddenContent: [
        'Inventing ad-hoc pressure dimensions outside the canonical 7',
        'Claiming any pressure vector is computationally trivial',
      ],
    },
    {
      order: 3,
      id: 'challenge-frontier',
      title: 'The Eight Canonical Engineering Challenges',
      eyebrow: 'Problem Landscape',
      purpose:
        'Provide a comprehensive structural overview of all eight canonical challenges (CH-001 to CH-008) with their pressure vectors, evidence states, and core problem statements.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeFrontierSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'challenges',
      dataSource: 'getAllChallenges',
      visualRole:
        'Eight-card diagnostic grid displaying canonical challenge profiles and evidence badges.',
      forbiddenContent: [
        'Omitting any of the eight canonical challenges (CH-001 to CH-008)',
        'Promoting theoretical or experimental tiers to proven operational status',
      ],
    },
    {
      order: 4,
      id: 'challenge-anatomy',
      title: 'Deep Failure Anatomy & Technical Dimensions',
      eyebrow: 'Mechanistic Analysis',
      purpose:
        'Deconstruct why autonomy escalates difficulty, detailing specific failure modes (e.g. Context Catastrophe, Cascading Retry Loops) and concrete technical dimensions for each challenge.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeAnatomySection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'challenges',
      dataSource: 'getAllChallenges',
      visualRole: 'Deep technical breakdown containers with structured failure mode callouts.',
      forbiddenContent: [
        'Abstract hand-waving without concrete technical dimensions',
        'Inventing failure modes not present in the canonical registry',
      ],
    },
    {
      order: 5,
      id: 'challenge-cascade',
      title: 'Systemic Cascading Failure Dynamics',
      eyebrow: 'Failure Interaction',
      purpose:
        'Illustrate how isolated failures in memory, epistemics, or recovery compound into systemic deadlocks and catastrophic multi-agent coordination collapse.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeCascadeSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'thesis',
      dataSource: 'getChallengeContent',
      visualRole: 'Interactive sequential cascade graph demonstrating compound error propagation.',
      forbiddenContent: [
        'Claiming linear failure chains are universal or fully deterministic',
        'Presenting cascading failure models as unverified catastrophe hype',
      ],
    },
    {
      order: 6,
      id: 'challenge-matrix',
      title: 'Autonomous Systems Stress Matrix',
      eyebrow: 'Diagnostic Cross-Evaluation',
      purpose:
        'Tabulate all eight challenges across the seven pressure dimensions, providing an architectural diagnostic instrument for systems evaluation.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeMatrixSection',
      containerWidth: 'wide',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'challenges',
      dataSource: 'getAllChallenges',
      visualRole: 'High-density truth table matrix with interactive pressure vector highlighting.',
      forbiddenContent: [
        'Mismatched pressure vector assignments conflicting with canonical registry',
        'Empty or unlinked matrix cells',
      ],
    },
    {
      order: 7,
      id: 'challenge-open-questions',
      title: 'Open Scientific & Systems Research Questions',
      eyebrow: 'Unsolved Frontier',
      purpose:
        'Transparently present the open mathematical and systems research questions that define the current boundary of knowledge across all eight challenges.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeOpenQuestionsSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'challenges',
      dataSource: 'getAllChallenges',
      visualRole:
        'Editorial research docket with structured question scopes and investigation tracks.',
      forbiddenContent: [
        'Hiding open questions to make problems appear artificially solved',
        'Authoring ad-hoc research questions outside the canonical model',
      ],
    },
    {
      order: 8,
      id: 'challenge-alignment',
      title: 'Nexus Systems & Cross-Track Research Alignment',
      eyebrow: 'Institutional Intersections',
      purpose:
        'Map every challenge to its governing Nexus Programs (NALA, AMP, RTA-GUARD, COSMOS), Philosophy Concepts (Pramāṇa, Dharma), and Future Directions.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeAlignmentSection',
      containerWidth: 'wide',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'crossTrackMappings',
      dataSource: 'getChallengeCrossTrackMappings',
      visualRole:
        'Cross-track relationship matrix linking challenges to architectural and philosophical anchors.',
      forbiddenContent: [
        'Claiming research alignment equals production completion',
        'Unanchored mapping to non-existent programs or philosophy concepts',
      ],
    },
    {
      order: 9,
      id: 'challenge-boundaries',
      title: 'Global Negative Boundaries & Quarantined Non-Claims',
      eyebrow: 'Epistemic Discipline',
      purpose:
        'Enforce institutional truth boundaries: explicitly display what Nexus LAB AI does not claim, alongside quarantined claims rendered exclusively with strike-through protection.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeBoundariesSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'boundaries',
      dataSource: 'getGlobalChallengeNegativeBoundaries',
      visualRole:
        'High-contrast boundary container with quarantined warning block and strike-through text.',
      forbiddenContent: [
        'Removing or softening explicit negative boundaries',
        'Rendering quarantined claims as valid positive assertions',
      ],
    },
    {
      order: 10,
      id: 'challenge-closing',
      title: 'The Open Frontier: Engineering Sovereign Resilient Systems',
      eyebrow: 'Synthesis & Trajectory',
      purpose:
        'Synthesize the challenge narrative: autonomous intelligence is defined not by frictionless demos, but by how systems endure under pressure, offering exploration gateways to the rest of the laboratory.',
      sourceAuthority: '04G.1_KNOWLEDGE_INVENTORY / 04G.2_CONTENT_MODEL',
      componentType: 'ChallengeClosingSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'thesis',
      dataSource: 'getChallengeContent',
      visualRole:
        'Reflective closing statement with interactive navigation gateways to Research, Tech, Programs, Philosophy, and Future.',
      forbiddenContent: [
        'Triumphalist claims of total victory over AI challenges',
        'Dead-end footer lacking navigational bridges',
      ],
    },
  ],
};

/* =========================================================================
   PUBLIC BLUEPRINT SELECTORS & VALIDATORS
   ========================================================================= */

/**
 * Returns the entire canonical Challenge page blueprint.
 */
export function getChallengePageBlueprint(): ChallengePageBlueprint {
  return CHALLENGE_PAGE_BLUEPRINT;
}

/**
 * Returns all 10 section specifications in strict sequential order.
 */
export function getChallengeSections(): ChallengeSectionSpec[] {
  return CHALLENGE_PAGE_BLUEPRINT.sections;
}

/**
 * Retrieves a specific section specification by its unique ID.
 */
export function getChallengeSectionById(id: string): ChallengeSectionSpec | undefined {
  return CHALLENGE_PAGE_BLUEPRINT.sections.find((s) => s.id === id);
}

/**
 * Validates that all eight canonical challenges are covered within the blueprint.
 */
export function validateChallengeSectionCoverage(): {
  isFullyCovered: boolean;
  coveredChallengeIds: string[];
  missingChallengeIds: string[];
} {
  const challenges = getAllChallenges();
  const coveredIds = challenges.map((c) => c.id);
  const missingIds = CANONICAL_CHALLENGE_IDS.filter((id) => !coveredIds.includes(id));

  return {
    isFullyCovered: missingIds.length === 0,
    coveredChallengeIds: coveredIds,
    missingChallengeIds: missingIds,
  };
}
