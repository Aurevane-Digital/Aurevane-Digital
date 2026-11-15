import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MARQUEE_PHRASE = 'BUILT FOR CONTRACTORS · BUILT TO CONVERT · ';

export const HomeFinalCta: React.FC = () => {
  const repeatedPhrase = Array.from({ length: 6 }, () => MARQUEE_PHRASE).join('');

  return (
    <section
      id="final-cta"
      data-gsap-reveal
      className="relative w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle bottom-center radial accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[720px] h-[360px] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(212, 255, 79, 0.22) 0%, rgba(212, 255, 79, 0) 72%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto text-center flex flex-col items-center">
        <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)] mb-6">
          Start Your Project · 2026
        </p>

        <h2 className="text-[clamp(40px,6.5vw,84px)] font-semibold tracking-[-0.03em] leading-[1.03] text-[#FAFAFA] max-w-5xl text-balance">
          Ready for a site that{' '}
          <span className="font-serif italic font-normal text-[var(--accent)]">wins jobs</span>? Or
          still losing them to a competitor?
        </h2>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--accent)] text-[#0A0A0A] text-[15px] font-semibold rounded-[16px] hover:scale-[1.02] transition-transform duration-200 whitespace-nowrap shadow-[0_0_40px_-10px_rgba(212,255,79,0.55)]"
          >
            <span>Get your free mockup</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Marquee strip below CTA */}
      <div
        aria-hidden="true"
        className="relative z-10 mt-16 border-y border-white/[0.06] py-4 overflow-hidden marquee-wrapper"
      >
        <div className="animate-marquee font-mono text-[13px] tracking-[0.35em] uppercase text-[rgba(250,250,250,0.64)]">
          <span className="pr-4">{repeatedPhrase}</span>
          <span className="pr-4">{repeatedPhrase}</span>
        </div>
      </div>
    </section>
  );
};
