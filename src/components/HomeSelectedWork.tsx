import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';

interface HomeSelectedWorkProps {
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

const ARCHITECTURAL_PROOF = [
  {
    title: 'Custom Scope Estimators',
    detail: 'Interactive volume, square-footage, and inspection qualifiers reduce tire-kicker calls.',
  },
  {
    title: 'Trade-Specific Trust',
    detail: 'Structured licensing, OSHA/safety compliance, and equipment galleries built for buyers.',
  },
  {
    title: 'Clean 100% Ownership',
    detail: 'Hand-coded React + Tailwind architecture with zero proprietary platform lock-in.',
  },
];

export const HomeSelectedWork: React.FC<HomeSelectedWorkProps> = ({ onSelectCaseStudy }) => {
  return (
    <section
      id="selected-work"
      data-gsap-reveal
      className="w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] border-b border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)]">
              03 · Selected Work &amp; Architecture Proof
            </p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#FAFAFA] text-balance">
              Five custom concept builds engineered for{' '}
              <span className="font-serif italic font-normal text-[var(--accent)]">
                real trade workflows.
              </span>
            </h2>
          </div>

          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FAFAFA] hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore interactive scroll showcase</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Real Concept Projects from /our-work */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {CASE_STUDIES.map((study, index) => {
            const isLead = index < 2;
            const spanClass = isLead ? 'md:col-span-6' : 'md:col-span-4';

            return (
              <article
                key={study.id}
                className={`${spanClass} group rounded-[16px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] hover:border-[var(--accent)]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 md:hover:-translate-y-1.5`}
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505]">
                    {study.image && (
                      <img
                        src={study.image}
                        alt={`${study.title} — ${study.category} website architecture`}
                        width={960}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top md:transition-transform md:duration-500 md:group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 font-mono text-[12px] text-[rgba(250,250,250,0.64)]">
                      <span className="text-[var(--accent)] tabular-nums">{study.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Concept Build</span>
                    </div>

                    <h3 className="text-[22px] font-semibold tracking-tight text-[#FAFAFA]">
                      {study.title}
                    </h3>

                    <p className="text-[15px] leading-[1.55] text-[rgba(250,250,250,0.64)]">
                      {study.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <span className="font-mono text-[12px] text-white/50 truncate">
                    {study.subdomainType}
                  </span>

                  {onSelectCaseStudy ? (
                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(study)}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent)] hover:underline cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Inspect architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      to="/our-work"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
                    >
                      <span>View build</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Authentic Architecture Proof Strip (No Fabricated Metrics or Testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURAL_PROOF.map((proof) => (
            <div
              key={proof.title}
              className="p-6 rounded-[16px] bg-white/[0.03] border border-white/[0.06] space-y-2"
            >
              <div className="flex items-center gap-2 text-[14px] font-semibold text-[#FAFAFA]">
                <Check className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{proof.title}</span>
              </div>
              <p className="text-[14px] leading-[1.55] text-[rgba(250,250,250,0.64)]">
                {proof.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
