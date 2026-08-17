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

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: ROUTES.HOME },
  { label: 'Research', href: ROUTES.RESEARCH },
  { label: 'Technology', href: ROUTES.TECHNOLOGY },
  { label: 'Evidence', href: ROUTES.EVIDENCE },
  { label: 'Products', href: ROUTES.PRODUCTS },
  { label: 'Philosophy', href: ROUTES.PHILOSOPHY },
  { label: 'Future', href: ROUTES.FUTURE },
  { label: 'Challenge', href: ROUTES.CHALLENGE },
];
