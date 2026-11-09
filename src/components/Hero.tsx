import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onRequestAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onRequestAudit }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
          alt="Aurevane Digital — High-Converting Contractor Website Design Agency"
          className="h-28 sm:h-36 md:h-44 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
          width={350}
          height={176}
          loading="eager"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3bFfQg6L8w0oyIgKQ0GRw-NjNHgRDE75hIl7EKKl1NXXp9RbrlkPgDC9ImbFlLO6mkStTZzDsw6giBkAE3d-FNMYSSzOz3auMXJPT2T_WHUgYEJ9E0AxXb5YptKaRa2V9buUhc5JT5zrJIx-8Zma9mzeT7TFTfICkj5VjeirFUSK09d9AiI7WwN5Tr32zTVLo82DeTuBQoeMIIU9ZX3Q3SMb-c09q0Dpw94SuhKm9qj0LfCGQTpaeQ"
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
          Website Design for Contractors Who Want More Calls
        </h1>
        <p className="font-serif italic text-xl sm:text-3xl md:text-4xl font-normal uppercase leading-[1.18] tracking-tight text-[#9E5249] mt-3">
          Digital Experiences That Make Businesses Impossible to Overlook
        </p>
      </div>

      {/* Subtle Accent Divider */}
      <div className="w-12 h-px bg-[#B89255]/60 my-6" />

      {/* Subtitle Description with Natural Industry Mentions */}
      <p className="text-sm md:text-base text-[#59544E] max-w-2xl mx-auto font-normal leading-relaxed">
        We engineer high-converting websites for roofers, junk removal, electrical contractors, excavation specialists, fence and landscaping companies, and home service businesses. Built with minimal aesthetics, architectural rigor, and precision conversion mechanics.
      </p>

      {/* Dual Hero CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            onExploreWork();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-all duration-200 group shadow-sm cursor-pointer"
        >
          <span>Explore Contractor Work</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#website-check"
          onClick={(e) => {
            e.preventDefault();
            onRequestAudit();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#141210]/30 text-[#141210] text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#ECE2D3]/60 transition-all duration-200 cursor-pointer"
        >
          Request Free Website Check
        </a>
      </div>

      {/* Key Stat Metrics Row */}
      <div className="mt-14 pt-8 border-t border-[#D9D0C3]/60 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl text-[#9E5249] font-normal">+194%</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Avg Lead Flow
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl text-[#141210] font-normal">&lt; 0.8s</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Load Time
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl text-[#141210] font-normal">100%</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Bespoke Code
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl text-[#9E5249] font-normal">Bespoke</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            High-Converting
          </span>
        </div>
      </div>
    </section>
  );
};
