import { Variants, Transition } from 'framer-motion';

/**
 * Nexus LAB AI — Canonical Motion Constants & Framer Motion Tokens
 */

export const MOTION_DURATIONS = {
  instant: 0.075,
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  deliberate: 0.6,
} as const;

export const MOTION_EASINGS = {
  standard: [0.4, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  out: [0, 0, 0.2, 1],
  emphasized: [0.2, 0, 0, 1],
} as const;

export const transitionStandard: Transition = {
  duration: MOTION_DURATIONS.normal,
  ease: MOTION_EASINGS.standard,
};

export const transitionFast: Transition = {
  duration: MOTION_DURATIONS.fast,
  ease: MOTION_EASINGS.standard,
};

export const transitionEmphasized: Transition = {
  duration: MOTION_DURATIONS.normal,
  ease: MOTION_EASINGS.emphasized,
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionEmphasized,
  },
  exit: {
    opacity: 0,
    transition: transitionFast,
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionEmphasized,
  },
  exit: {
    opacity: 0,
    y: 4,
    transition: transitionFast,
  },
};

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionEmphasized,
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: transitionFast,
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionFast,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: transitionFast,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};
