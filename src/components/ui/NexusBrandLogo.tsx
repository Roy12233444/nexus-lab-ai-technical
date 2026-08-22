import React from 'react';
import clsx from 'clsx';

export interface NexusBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const NexusBrandLogo: React.FC<NexusBrandLogoProps> = ({
  className,
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeStyles = {
    sm: {
      container: 'h-8',
      titleHeight: 18,
      subtitleSize: 'text-[9px] tracking-tight',
    },
    md: {
      container: 'h-10',
      titleHeight: 22,
      subtitleSize: 'text-[10px] tracking-normal',
    },
    lg: {
      container: 'h-14',
      titleHeight: 30,
      subtitleSize: 'text-xs tracking-wide',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={clsx('flex flex-col justify-center select-none', className)}>
      {/* Top Geometric Wordmark: NEXUS LAB AI with custom Lambda 'A' and geometric curves */}
      <svg
        viewBox="0 0 350 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto"
        style={{ height: `${currentSize.titleHeight}px` }}
        aria-hidden="true"
      >
        <g stroke="#0f172a" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
          {/* === N === */}
          <path d="M4 28V4L22 28V4" />

          {/* === E (Rounded outer corners) === */}
          <path d="M48 4H34C31.5 4 30 5.5 30 8V24C30 26.5 31.5 28 34 28H48" />
          <path d="M30 16H44" />

          {/* === X === */}
          <path d="M56 4L74 28" />
          <path d="M74 4L56 28" />

          {/* === U === */}
          <path d="M82 4V20C82 25 86 28 91 28C96 28 100 25 100 20V4" />

          {/* === S === */}
          <path d="M125 7C124 5 121.5 4 118 4H113C109.5 4 108 5.5 108 8.5C108 11.5 110 13.5 114 14.5L119 16C123 17 125 19 125 22.5C125 26 122.5 28 118 28H113C109 28 108 26.5 107 24" />

          {/* === L === */}
          <path d="M148 4V28H165" />

          {/* === Λ (A without horizontal crossbar) === */}
          <path d="M172 28L183 4L194 28" />

          {/* === B === */}
          <path d="M202 4V28H214C218 28 220 25.5 220 22C220 18.5 218 16 214 16H202" />
          <path d="M202 16H213C216.5 16 218.5 14 218.5 10C218.5 6 216.5 4 213 4H202" />

          {/* === Λ (A without horizontal crossbar) === */}
          <path d="M236 28L247 4L258 28" />

          {/* === I === */}
          <path d="M268 4V28" />
        </g>
      </svg>

      {/* Subtitle: AI Systems Innovation for Autonomous Intelligence . */}
      {showSubtitle && (
        <div className="mt-0.5 flex items-center gap-0.5 whitespace-nowrap">
          <span
            className={clsx('font-sans font-semibold text-slate-800', currentSize.subtitleSize)}
          >
            AI Systems Innovation for Autonomous Intelligence
          </span>
          <span className="text-sm leading-none font-bold text-sky-500">.</span>
        </div>
      )}
    </div>
  );
};

NexusBrandLogo.displayName = 'NexusBrandLogo';
