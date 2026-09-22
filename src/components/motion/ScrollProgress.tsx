import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();

  // Apply spring physics for buttery smooth motion responsiveness
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      className={`pointer-events-none fixed top-0 right-0 left-0 z-[100] h-[2.5px] bg-slate-100/60 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-sm shadow-blue-500/20"
        style={{ scaleX }}
      />
    </div>
  );
};
