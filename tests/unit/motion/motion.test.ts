import { describe, it, expect } from 'vitest';
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  fadeInVariants,
  fadeUpVariants,
  fadeDownVariants,
  scaleInVariants,
  staggerContainerVariants,
} from '@/lib/motion';

describe('Motion System Primitives (Phase 02F)', () => {
  describe('Motion Tokens & Durations', () => {
    it('defines restrained technical duration tokens', () => {
      expect(MOTION_DURATIONS.instant).toBe(0.075);
      expect(MOTION_DURATIONS.fast).toBe(0.15);
      expect(MOTION_DURATIONS.normal).toBe(0.25);
      expect(MOTION_DURATIONS.slow).toBe(0.4);
      expect(MOTION_DURATIONS.deliberate).toBe(0.6);
    });

    it('defines standard and emphasized easing curves', () => {
      expect(MOTION_EASINGS.standard).toEqual([0.4, 0, 0.2, 1]);
      expect(MOTION_EASINGS.emphasized).toEqual([0.2, 0, 0, 1]);
    });
  });

  describe('Framer Motion Variants', () => {
    it('provides hardware-accelerated fadeIn variants', () => {
      expect(fadeInVariants.hidden).toEqual({ opacity: 0 });
      expect(fadeInVariants.visible).toHaveProperty('opacity', 1);
    });

    it('provides hardware-accelerated fadeUp variants', () => {
      expect(fadeUpVariants.hidden).toEqual({ opacity: 0, y: 8 });
      expect(fadeUpVariants.visible).toHaveProperty('y', 0);
      expect(fadeUpVariants.visible).toHaveProperty('opacity', 1);
    });

    it('provides hardware-accelerated fadeDown variants', () => {
      expect(fadeDownVariants.hidden).toEqual({ opacity: 0, y: -8 });
      expect(fadeDownVariants.visible).toHaveProperty('y', 0);
      expect(fadeDownVariants.visible).toHaveProperty('opacity', 1);
    });

    it('provides subtle scaleIn variants', () => {
      expect(scaleInVariants.hidden).toEqual({ opacity: 0, scale: 0.98 });
      expect(scaleInVariants.visible).toHaveProperty('scale', 1);
      expect(scaleInVariants.visible).toHaveProperty('opacity', 1);
    });

    it('provides staggered container orchestration', () => {
      expect(staggerContainerVariants.visible).toHaveProperty('transition');
    });
  });
});
