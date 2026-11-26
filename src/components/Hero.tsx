import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { MagneticWrap } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreWork: () => void;
  onRequestAudit: () => void;
}

const HERO_TITLE_WORDS = [
  'Blue',
  'Collar',
  'Business',
  'Website',
  'Design',
  'That',
  'Generates',
  'Leads',
];

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onRequestAudit }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Sequenced Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '[data-hero-logo]',
        { y: 20, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, clearProps: 'transform,opacity' },
        0.05
      )
        .fromTo(
          '[data-hero-tag]',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, clearProps: 'transform,opacity' },
          0.18
        )
        .fromTo(
          '[data-hero-word]',
          { yPercent: 24 },
          {
            yPercent: 0,
            duration: 0.72,
            stagger: 0.035,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0.08
        )
        .fromTo(
          '[data-hero-subtitle]',
          { yPercent: 20 },
          {
            yPercent: 0,
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0.16
        )
        .fromTo(
          '[data-hero-divider]',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.65, ease: 'power3.inOut', clearProps: 'transform' },
          0.25
        )
        .fromTo(
          '[data-hero-desc]',
          { y: 10 },
          { y: 0, duration: 0.6, clearProps: 'transform' },
          0.2
        )
        .fromTo(
          '[data-hero-cta]',
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.68,
            stagger: 0.09,
            clearProps: 'transform,opacity',
          },
          0.78
        )
        .fromTo(
          '[data-hero-metric]',
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.065,
            clearProps: 'transform,opacity',
          },
          0.88
        );

      // Desktop & Tablet (>= 768px): subtle scroll-scrubbed depth on logo & ambient glow
      mm.add('(min-width: 768px)', () => {
        if (logoWrapRef.current) {
          gsap.fromTo(
            logoWrapRef.current,
            { scale: 1, y: 0, opacity: 1 },
            {
              scale: 0.92,
              y: -16,
              opacity: 0.2,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6,
              },
            }
          );
        }

        if (glowRef.current) {
          gsap.fromTo(
            glowRef.current,
            { yPercent: 0, scale: 1 },
            {
              yPercent: 16,
              scale: 1.08,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.8,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full px-6 md:px-12 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-24 flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#D9D0C3]/40"
    >
      {/* Ambient Glow Behind Hero */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B89255]/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Aurevane Main Hero Logo (Style 1 Dark) */}
      <div ref={logoWrapRef} className="mb-8 flex justify-center origin-center">
        <div data-hero-logo>
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
      </div>

      {/* Category Tag */}
      <div
        data-hero-tag
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F5EDE2] border border-[#D9D0C3] mb-6 shadow-xs"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E5249] animate-pulse" />
        <span className="text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-[#59544E] font-semibold">
          DIGITAL STUDIO / CONTRACTORS &amp; LUXURY SERVICES
        </span>
      </div>

      {/* Monumental Editorial Headline with Masked Word Reveals */}
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal uppercase leading-[1.12] tracking-tight text-[#141210]">
          {HERO_TITLE_WORDS.map((word, idx) => (
            <React.Fragment key={word + idx}>
              <span className="inline-block overflow-hidden align-bottom pb-[0.06em]">
                <span data-hero-word className="inline-block">
                  {word}
                </span>
              </span>
              {idx < HERO_TITLE_WORDS.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))}
        </h1>
        <div className="overflow-hidden mt-3">
          <p
            data-hero-subtitle
            className="font-serif italic text-xl sm:text-3xl md:text-4xl font-normal leading-[1.18] tracking-tight text-[#9E5249]"
          >
            Digital experiences that make businesses impossible to overlook
          </p>
        </div>
      </div>

      {/* Subtle Accent Divider */}
      <div
        data-hero-divider
        className="w-12 h-px bg-[#B89255]/60 my-6 origin-center"
      />

      {/* Subtitle Description with Natural Industry Mentions */}
      <p
        data-hero-desc
        className="text-sm md:text-base text-[#59544E] max-w-2xl mx-auto font-normal leading-relaxed"
      >
        Aurevane Digital builds custom, mobile-friendly websites for contractors, trades, home-service companies and junk removal businesses across the United States.
      </p>

      {/* Dual Hero CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <div data-hero-cta className="w-full sm:w-auto">
          <MagneticWrap className="w-full sm:w-auto">
            <a
              href="#website-check"
              onClick={(e) => {
                e.preventDefault();
                onRequestAudit();
              }}
              className="btn-editorial w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] group shadow-sm cursor-pointer"
            >
              <span>Get a Free Website Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </MagneticWrap>
        </div>

        <div data-hero-cta className="w-full sm:w-auto">
          <MagneticWrap className="w-full sm:w-auto">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                onExploreWork();
              }}
              className="btn-editorial w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#141210]/30 text-[#141210] text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#ECE2D3]/60 cursor-pointer"
            >
              See Our Work
            </a>
          </MagneticWrap>
        </div>
      </div>

      {/* Qualitative Metrics Row - No Invented Stats */}
      <div className="mt-14 pt-8 border-t border-[#D9D0C3]/60 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl text-center">
        <div data-hero-metric className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#9E5249] font-normal">
            Contractor-Focused
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Niche Expertise
          </span>
        </div>
        <div data-hero-metric className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141210] font-normal">
            Mobile-First
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            Every Layout
          </span>
        </div>
        <div data-hero-metric className="flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141210] font-normal">
            Custom-Coded
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#59544E] font-medium mt-1">
            No Templates
          </span>
        </div>
        <div data-hero-metric className="flex flex-col items-center">
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
