import { EvidenceStatus, EvidenceStatusMetadata } from '@/types/evidence';

export const EVIDENCE_STATUS_MAP: Record<EvidenceStatus, EvidenceStatusMetadata> = {
  VERIFIED: {
    status: 'VERIFIED',
    label: 'Verified Claim',
    shortLabel: 'VERIFIED',
    description:
      'Claim is supported by documented validation and empirical proof within stated scope.',
    badgeVariant: 'verified',
    ariaLabel: 'Evidence status: Verified claim with documented proof',
  },
  IMPLEMENTED: {
    status: 'IMPLEMENTED',
    label: 'Implemented Artifact',
    shortLabel: 'IMPLEMENTED',
    description:
      'Working engineering artifact demonstrated within tested scope, pending comprehensive external validation.',
    badgeVariant: 'implemented',
    ariaLabel: 'Evidence status: Implemented working artifact',
  },
  EXPERIMENTAL: {
    status: 'EXPERIMENTAL',
    label: 'Experimental Investigation',
    shortLabel: 'EXPERIMENTAL',
    description: 'Active research and empirical evaluation subject to measurement and refinement.',
    badgeVariant: 'experimental',
    ariaLabel: 'Evidence status: Experimental investigation in progress',
  },
  HYPOTHESIS: {
    status: 'HYPOTHESIS',
    label: 'Theoretical Hypothesis',
    shortLabel: 'HYPOTHESIS',
    description: 'Proposed conceptual architecture or claim not yet empirically demonstrated.',
    badgeVariant: 'hypothesis',
    ariaLabel: 'Evidence status: Theoretical hypothesis with explicit uncertainty boundaries',
  },
};

export const getEvidenceMetadata = (status: EvidenceStatus): EvidenceStatusMetadata => {
  return (
    EVIDENCE_STATUS_MAP[status] || {
      status: 'HYPOTHESIS',
      label: 'Unknown State',
      shortLabel: 'UNKNOWN',
      description: 'Unclassified research state.',
      badgeVariant: 'hypothesis',
      ariaLabel: 'Evidence status: Unknown state',
    }
  );
};
