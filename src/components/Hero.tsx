import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onRequestAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onRequestAudit }) => {
  const [scrollY, setScrollY] = useState(0);
  const currentScrollRef = useRef(0);

  useEffect(() => {
    let rAFId: number | null = null;

    const handleScroll = () => {
      if (rAFId !== null) return;

      rAFId = window.requestAnimationFrame(() => {
        rAFId = null;
        const currentY = Math.round(window.pageYOffset || document.documentElement.scrollTop);
        if (currentY !== currentScrollRef.current) {
          currentScrollRef.current = currentY;
          setScrollY(currentY);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rAFId !== null) {
        window.cancelAnimationFrame(rAFId);
      }
    };
  }, []);

  // Compute smooth fade & shrink for hero logo as page is scrolled
  const revealThreshold = 220;
  const ratio = Math.max(0, 1 - scrollY / revealThreshold);
  const heroLogoOpacity = scrollY > revealThreshold ? 0.15 : Math.max(0.15, ratio);
  const heroLogoScale = 1 - (1 - ratio) * 0.08;
  const heroLogoTranslate = -(1 - ratio) * 12;

  return (
    <section
      id="hero"
      className="relative w-full px-6 md:px-12 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-24 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#D9D0C3]/40"
    >
      {/* Ambient Glow Behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B89255]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Aurevane Main Hero Logo (Style 1 Dark) */}
      <div
        className="mb-8 flex justify-center transform origin-center transition-all duration-300 ease-out"
        style={{
          opacity: heroLogoOpacity,
          transform: `scale(${heroLogoScale}) translateY(${heroLogoTranslate}px)`,
        }}
      >
        <img
          alt="Aurevane Digital Studio logo"
          className="h-28 sm:h-36 md:h-44 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
          width={532}
          height={423}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          src="/logo.png"
        />
      </div>

      {/* Category Tag */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F5EDE2] border border-[#D9D0C3] mb-6 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E5249] animate-pulse" />
        <span className="text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-[#59544E] font-semibold">
          DIGITAL STUDIO / CONTRACTORS &amp; LUXURY SERVICES
        </span>
      </div>

      {/* Monumental Editorial Headline */}
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal uppercase leading-[1.12] tracking-tight text-[#141210]">
          Blue Collar Business Website Design That Generates Leads
        </h1>
        <p className="font-serif italic text-xl sm:text-3xl md:text-4xl font-normal leading-[1.18] tracking-tight text-[#9E5249] mt-3">
          Digital experiences that make businesses impossible to overlook
        </p>
      </div>

      {/* Subtle Accent Divider */}
      <div className="w-12 h-px bg-[#B89255]/60 my-6" />

      {/* Subtitle Description with Natural Industry Mentions */}
      <p className="text-sm md:text-base text-[#59544E] max-w-2xl mx-auto font-normal leading-relaxed">
        Aurevane Digital builds custom, mobile-friendly websites for contractors, trades, home-service companies and junk removal businesses across the United States.
      </p>

      {/* Dual Hero CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#website-check"
          onClick={(e) => {
            e.preventDefault();
            onRequestAudit();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-all duration-200 group shadow-sm cursor-pointer"
        >
          <span>Get a Free Website Quote</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            onExploreWork();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#141210]/30 text-[#141210] text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#ECE2D3]/60 transition-all duration-200 cursor-pointer"
        >
          See Our Work
        </a>
      </div>

      {/* Qualitative Metrics Row - No Invented Stats */}
      <div className="mt-14 pt-8 border-t border-[#D9D0C3]/60 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#9E5249] font-normal">
            Contractor-Focused
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Niche Expertise
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141210] font-normal">
            Mobile-First
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Every Layout
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141210] font-normal">
            Custom-Coded
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            No Templates
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#9E5249] font-normal">
            Lead-Focused
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Quote Flows
          </span>
        </div>
      </div>
    </section>
  );
};
