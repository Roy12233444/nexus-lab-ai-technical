import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { EvidenceStatus } from '@/types/evidence';
import { getEvidenceMetadata, EVIDENCE_STATUS_MAP } from '@/data/evidenceRegistry';
import { ValidationBadge } from '@/components/evidence/ValidationBadge';
import { EvidenceStatus as EvidenceStatusView } from '@/components/evidence/EvidenceStatus';
import { StatusIndicator } from '@/components/ui/StatusIndicator';

describe('Evidence & Status Language System (Phase 02E)', () => {
  const states: EvidenceStatus[] = ['VERIFIED', 'IMPLEMENTED', 'EXPERIMENTAL', 'HYPOTHESIS'];

  describe('Registry & Epistemic Mapping', () => {
    it('defines explicit metadata for all 4 canonical evidence states', () => {
      states.forEach((status) => {
        const meta = getEvidenceMetadata(status);
        expect(meta.status).toBe(status);
        expect(meta.label).toBeDefined();
        expect(meta.description).toBeDefined();
        expect(meta.ariaLabel.toLowerCase()).toContain(status.toLowerCase());
      });
    });

    it('returns safe fallback for unknown states', () => {
      // @ts-expect-error Testing unknown state fallback
      const fallback = getEvidenceMetadata('UNKNOWN_STATE');
      expect(fallback.status).toBe('HYPOTHESIS');
      expect(fallback.shortLabel).toBe('UNKNOWN');
    });
  });

  describe('ValidationBadge Component', () => {
    it.each(states)('renders %s badge with multi-signal icon and accessible label', (status) => {
      render(<ValidationBadge status={status} />);
      const badge = screen.getByLabelText(EVIDENCE_STATUS_MAP[status].ariaLabel);
      expect(badge).toBeDefined();
      expect(screen.getByText(EVIDENCE_STATUS_MAP[status].shortLabel)).toBeDefined();
    });
  });

  describe('EvidenceStatus Component', () => {
    it('renders full status heading and optional description', () => {
      render(<EvidenceStatusView status="VERIFIED" showDescription={true} />);
      expect(screen.getByText('Verified Claim')).toBeDefined();
      expect(
        screen.getByText(
          'Claim is supported by documented validation and empirical proof within stated scope.'
        )
      ).toBeDefined();
    });
  });

  describe('Semantic Decoupling: Evidence Status vs Runtime Status', () => {
    it('allows rendering verified evidence alongside active runtime status independently', () => {
      render(
        <div data-testid="dual-status">
          <ValidationBadge status="VERIFIED" />
          <StatusIndicator status="ACTIVE" label="System Online" />
        </div>
      );
      expect(screen.getByText('VERIFIED')).toBeDefined();
      expect(screen.getByText('System Online')).toBeDefined();
    });
  });
});
