/**
 * Nexus LAB AI — Canonical Route Definitions & Information Architecture
 */

export const ROUTES = {
  HOME: '/',
  OVERVIEW: '/overview',
  RESEARCH: '/research',
  RESEARCH_COSMOS: '/research/cosmos',
  RESEARCH_NALA: '/research/nala',
  RESEARCH_AMP: '/research/amp',
  RESEARCH_RTA_GUARD: '/research/rta-guard',
  RESEARCH_FUTURE: '/research/future',
  TECHNOLOGY: '/technology',
  PROGRAMS: '/programs',
  EVIDENCE: '/evidence',
  EVIDENCE_EXPERIMENTS: '/evidence/experiments',
  EVIDENCE_VALIDATIONS: '/evidence/validations',
  PRODUCTS: '/products',
  PHILOSOPHY: '/philosophy',
  FUTURE: '/future',
  CHALLENGE: '/challenge',
  INNOVATION_ENGINE: '/innovation-engine',
} as const;

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: ROUTES.HOME },
  { label: 'Research', href: ROUTES.RESEARCH },
  { label: 'Technology', href: ROUTES.TECHNOLOGY },
  { label: 'Programs', href: ROUTES.PROGRAMS },
  { label: 'Philosophy', href: ROUTES.PHILOSOPHY },
  { label: 'Future', href: ROUTES.FUTURE },
  { label: 'Challenge', href: ROUTES.CHALLENGE },
];

export const FOOTER_NAV_GROUPS: NavGroup[] = [
  {
    title: 'Explore',
    items: [
      { label: 'Overview', href: ROUTES.HOME },
      { label: 'Research Programs', href: ROUTES.RESEARCH },
      { label: 'Technology Capabilities', href: ROUTES.TECHNOLOGY },
      { label: 'Programs', href: ROUTES.PROGRAMS },
    ],
  },
  {
    title: 'Research Programs',
    items: [
      { label: 'COSMOS Program', href: ROUTES.RESEARCH_COSMOS },
      { label: 'NALA System', href: ROUTES.RESEARCH_NALA },
      { label: 'AMP Architecture', href: ROUTES.RESEARCH_AMP },
      { label: 'RTA-GUARD Protocol', href: ROUTES.RESEARCH_RTA_GUARD },
      { label: 'Future Explorations', href: ROUTES.RESEARCH_FUTURE },
    ],
  },
  {
    title: 'Systems & Architecture',
    items: [
      { label: 'Engineering Philosophy', href: ROUTES.PHILOSOPHY },
      { label: 'Horizon & Roadmap', href: ROUTES.FUTURE },
      { label: 'Technical Challenge', href: ROUTES.CHALLENGE },
      { label: 'Innovation Engine', href: ROUTES.INNOVATION_ENGINE },
    ],
  },
];
