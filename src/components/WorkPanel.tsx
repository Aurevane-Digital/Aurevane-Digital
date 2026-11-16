import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ShowcaseSite {
  id: string;
  counter: string;
  title: string;
  category: string;
  description: string;
  url: string;
  /** Frame index when this project becomes active/visible in scroll sequence */
  startFrame?: number;
  /** Frame index when this project transitions out in scroll sequence */
  endFrame?: number;
  /** Frame where this project is fully centered/arrived */
  peakFrame?: number;
  /** Side of the frame where the empty space (and text panel) sits on desktop */
  textSide: 'left' | 'right';
  /** Vertical center (%) matching the monitor's vertical step on desktop */
  verticalPercent: number;
  /** Video timestamp (seconds) retained for backwards-compatibility */
  holdStart?: number;
  holdEnd?: number;
}

interface WorkPanelProps {
  site: ShowcaseSite;
  isStatic?: boolean;
  panelRef?: (el: HTMLDivElement | null) => void;
}

export const WorkPanel: React.FC<WorkPanelProps> = ({
  site,
  isStatic = false,
  panelRef,
}) => {
  const desktopSideClasses =
    site.textSide === 'right'
      ? 'md:left-[56%] md:right-auto md:w-[38vw] md:max-w-[460px]'
      : 'md:right-[56%] md:left-auto md:w-[38vw] md:max-w-[460px]';

  if (isStatic) {
    return (
      <article className="w-full py-8 border-b border-[#D9D0C3]/60 last:border-b-0 flex flex-col items-start text-left">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B08A5B] tabular-nums mb-2">
          {site.counter}
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.08] text-[#1D1A17] mb-2">
          {site.title}
        </h3>

        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#7B6F63] mb-4">
          {site.category}
        </p>

        <p className="text-sm sm:text-[15px] leading-relaxed text-[#1D1A17]/80 max-w-xl mb-6">
          {site.description}
        </p>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1D1A17] text-[#FFF8F1] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E2924] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08A5B]"
        >
          <span>Visit Site</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </article>
    );
  }

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center px-6
        md:inset-auto md:px-0 md:block md:top-[var(--panel-top)] md:-translate-y-1/2
        ${desktopSideClasses}
        pointer-events-none
      `}
      style={{ '--panel-top': `${site.verticalPercent}%` } as React.CSSProperties}
    >
      <div
        ref={panelRef}
        className="w-full max-w-md md:max-w-none flex flex-col items-center text-center md:items-start md:text-left will-change-[transform,opacity]"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transform: 'translate3d(0, 30px, 0)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B08A5B] tabular-nums mb-2 md:mb-2.5">
          {site.counter}
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-[-0.025em] leading-[1.08] text-[#1D1A17] mb-1.5 md:mb-2">
          {site.title}
        </h3>

        <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-[#7B6F63] mb-3 md:mb-4">
          {site.category}
        </p>

        <p className="text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-[#1D1A17]/80 max-w-sm md:max-w-md mb-5 md:mb-6">
          {site.description}
        </p>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1D1A17] text-[#FFF8F1] px-6 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2E2924] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08A5B]"
        >
          <span>Visit Site</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
