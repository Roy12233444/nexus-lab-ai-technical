import { FuturePageBlueprint } from '@/types/futureSection';

/**
 * Nexus LAB AI — Canonical Future Page Architecture Blueprint
 * Phase 04F.3 — 10-Section Systems Blueprint & Data Contract
 */
export const FUTURE_PAGE_BLUEPRINT: FuturePageBlueprint = {
  pageId: 'future',
  route: '/future',
  title: 'Nexus LAB AI Future Track',
  description:
    'Strategic Directions, Research Horizons, and Long-Range Systems Architecture — Developing the sovereign institutional machinery required to research, engineer, validate, govern, and coordinate resilient autonomous intelligence across compounding physical and computational horizons.',
  sections: [
    {
      order: 1,
      id: 'future-hero',
      title: 'The Horizon of Resilient Autonomous Intelligence',
      eyebrow: 'Nexus LAB AI Horizon',
      purpose:
        'Establish the institutional Future ethos: transitioning from isolated, fragile AI systems toward sovereign institutional machinery capable of persistent, governed intelligence.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureHeroSection',
      containerWidth: 'full',
      background: 'primary',
      spacing: 'none',
      contentKey: 'thesis',
      dataSource: 'getFutureThesis',
      visualRole: 'Hero identity slot with long-horizon gradient and subtle orbital depth accents.',
      forbiddenContent: [
        'Marketing hype or buzzwords (magic, sentient, limitless)',
        'Unverified operational spaceflight claims',
        'Commercial release date promises',
      ],
    },
    {
      order: 2,
      id: 'future-thesis',
      title: 'The Strategic Future Thesis',
      eyebrow: 'Forward Trajectory',
      purpose:
        'Articulate the 4-step canonical derivation: Where We Are → What We Are Building → What Capabilities Emerge → Where Capabilities Lead.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureThesisSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'md',
      contentKey: 'thesis',
      dataSource: 'getFutureThesis',
      visualRole: 'Structured progression container with step badges and high-contrast typography.',
      forbiddenContent: [
        'Conflating future thesis with current production marketing',
        'Treating future capabilities as solved facts',
      ],
    },
    {
      order: 3,
      id: 'future-directions',
      title: 'Core Future Directions',
      eyebrow: 'Architectural Vectors',
      purpose:
        'Present the six canonical future directions (FDIR-001 to FDIR-006) with provenance origins, current foundations, future work, and mandatory negative non-claims.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureDirectionsSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'directions',
      dataSource: 'getFutureDirections',
      visualRole:
        'Direction cards with origin badges, status tags, and expandable non-claim footers.',
      forbiddenContent: [
        'Inventing ad-hoc future initiatives outside FDIR-001..006',
        'Omitting negative non-claim boundaries on any card',
      ],
    },
    {
      order: 4,
      id: 'future-horizons',
      title: 'Structured Research Horizons',
      eyebrow: 'Planning Frontiers',
      purpose:
        'Detail the Near (0–2y), Medium (2–5y), and Long (5+y) horizons with explicit anti-prediction planning constraints.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureHorizonsSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'horizons',
      dataSource: 'getResearchHorizons',
      visualRole:
        'Three-tiered planning horizon cards with timeframe badges and constraint callouts.',
      forbiddenContent: [
        'Phrasing horizons as guaranteed commercial deadlines',
        'Treating long-horizon exploratory items as current roadmaps',
      ],
    },
    {
      order: 5,
      id: 'future-problems',
      title: 'Fundamental Open Problems',
      eyebrow: 'Technical Bottlenecks',
      purpose:
        'Transparently detail the six core scientific and systems bottlenecks (Autonomy Drift, Memory State Explosion, Multi-Agent Governance Collision, Stochastic Verification, Asynchronous Consensus, and Energy Bounds).',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureProblemsSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'openProblems',
      dataSource: 'getOpenProblems',
      visualRole:
        'Problem cards with bottleneck descriptions, technical implications, and investigation approaches.',
      forbiddenContent: [
        'Claiming open problems are already fully solved',
        'Omitting the technical bottleneck details',
      ],
    },
    {
      order: 6,
      id: 'future-evolution',
      title: 'Systems Evolution Hierarchy',
      eyebrow: 'Conceptual Map',
      purpose:
        'Illustrate the 4-tier conceptual evolution from foundations (EVO-01) to extreme-environment infrastructure (EVO-04) strictly without runtime execution dependency graphs.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureEvolutionSection',
      containerWidth: 'wide',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'evolutionNodes',
      dataSource: 'getFutureEvolutionMap',
      visualRole: 'Conceptual tiered evolution hierarchy with ancestor linkage indicators.',
      forbiddenContent: [
        'Representing evolution as an operational software DAG or runtime build pipeline',
        'Fabricating dependencies between autonomous systems and COSMOS',
      ],
    },
    {
      order: 7,
      id: 'future-matrix',
      title: 'Capability vs Horizon Truth Matrix',
      eyebrow: 'Epistemic Truth Table',
      purpose:
        'Provide a transparent tabular classification separating CURRENT capabilities, RESEARCH directions, EXPLORATION, and LONG_HORIZON architectures.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureMatrixSection',
      containerWidth: 'wide',
      background: 'primary',
      spacing: 'md',
      contentKey: 'directions',
      dataSource: 'getFutureDirections',
      visualRole: 'Structured matrix table with status pills, evidence tiers, and boundary notes.',
      forbiddenContent: [
        'Collapsing all future initiatives into a generic unverified status',
        'Upgrading evidence tiers beyond canonical records',
      ],
    },
    {
      order: 8,
      id: 'future-vision',
      title: 'Resilient Sovereign Infrastructure',
      eyebrow: 'Institutional Vision',
      purpose:
        'Articulate the grand institutional vision for sovereign intelligence infrastructure while enforcing the COSMOS spaceflight firewall.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureVisionSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'vision',
      dataSource: 'getLongHorizonVision',
      visualRole:
        'Visionary container with core sovereignty principles and a dedicated COSMOS firewall callout.',
      forbiddenContent: [
        'Claiming COSMOS is an active satellite constellation or commercial space mission',
        'Promoting uncontrolled, sentient superintelligence visions',
      ],
    },
    {
      order: 9,
      id: 'future-boundaries',
      title: 'Negative Boundaries & Quarantined Non-Claims',
      eyebrow: 'Epistemic Guardrails',
      purpose:
        'Expose the 7 hard global negative boundaries and 4 quarantined claim corrections to prevent capability inflation and false claims.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureBoundariesSection',
      containerWidth: 'content',
      background: 'primary',
      spacing: 'lg',
      contentKey: 'nonClaims',
      dataSource: 'getFutureNonClaims',
      visualRole:
        'Boundary cards with warning badges and quarantined strike-through demonstration box.',
      forbiddenContent: [
        'Omitting quarantined non-claims from public inspection',
        'Softening negative boundaries to sound promotional',
      ],
    },
    {
      order: 10,
      id: 'future-closing',
      title: 'The Continuing Research Mandate',
      eyebrow: 'Horizon Trajectory',
      purpose:
        'Synthesize the Future thesis into rigorous downstream exploration gateways (Research, Technology, Programs, Philosophy) without inflated promises.',
      sourceAuthority: '04F.1_KNOWLEDGE_INVENTORY / 04F.2_CONTENT_MODEL',
      componentType: 'FutureClosingSection',
      containerWidth: 'content',
      background: 'secondary',
      spacing: 'lg',
      contentKey: 'thesis',
      dataSource: 'getFutureThesis',
      visualRole:
        'Closing synthesis container with exploration gateway links and milestone indicators.',
      forbiddenContent: [
        'Introducing new unbacked concepts in the closing summary',
        'Exaggerated commercial hype',
      ],
    },
  ],
};
