import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Clock,
  Plus,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  CreditCard,
  Layers,
} from 'lucide-react';
import {
  PACKAGES_PAGE_TIERS,
  PACKAGES_SINGLE_ADDON,
  PACKAGES_ENTERPRISE_STRIP,
  PACKAGES_FAQS,
} from '../data/packages';
import { ServicePackage } from '../types';
import { SEO } from '../components/SEO';
import { MagneticWrap } from '../components/MagneticButton';
import { getSeo } from '../data/seoRoutes';
import { buildPackagesSchema } from '../utils/schema';

interface PackagesPageProps {
  onSelectPackage?: (pkg: ServicePackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onSelectPackage: _onSelectPackage,
}) => {
  const s = getSeo('/packages');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = PACKAGES_FAQS;

  const jsonLd = useMemo(
    () => buildPackagesSchema(s.description, faqs),
    [s.description, faqs]
  );

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <SEO
        title={s.title}
        description={s.description}
        canonicalPath="/packages"
        jsonLd={jsonLd}
      />

      {/* 1. HERO MASTHEAD */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Transparent Investment
              </span>
              <div data-reveal="line" className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              {s.h1}
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              Clear build pricing and monthly local growth plans for contractors and home service companies, with deliverables and payment terms defined before we start.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PACKAGE CARDS + SINGLE ADD-ON + ENTERPRISE STRIP */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {PACKAGES_PAGE_TIERS.map((tier) => {
              const isFeatured = Boolean(tier.featured);

              return (
                <div
                  key={tier.id}
                  data-reveal-item
                  className={`card-editorial p-8 md:p-9 rounded-sm flex flex-col justify-between relative ${
                    isFeatured
                      ? 'border-2 border-[#9E5249] shadow-[0_18px_45px_-16px_rgba(158,82,73,0.35)] ring-1 ring-[#9E5249]/25 bg-[#FAF6F0]'
                      : 'bg-[#F5EDE2] border border-[#D9D0C3] hover:border-[#9E5249]/60 hover:shadow-md'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#9E5249] text-white text-[9px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xs whitespace-nowrap">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#D9D0C3]/70">
                      <h2
                        className={`text-xs uppercase tracking-widest font-bold ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#141210]'
                        }`}
                      >
                        {tier.name}
                      </h2>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold text-right ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#59544E]'
                        }`}
                      >
                        {isFeatured ? 'Website + Monthly SEO' : 'One-Time Build'}
                      </span>
                    </div>

                    <div className="my-6">
                      <div className="font-serif text-3xl md:text-[2.15rem] text-[#141210] font-normal leading-tight">
                        {tier.price}
                      </div>

                      {tier.subline && (
                        <p className="text-xs text-[#9E5249] mt-2.5 font-medium leading-relaxed">
                          {tier.subline}
                        </p>
                      )}

                      <div className="flex items-center gap-1.5 mt-3 text-[11px] text-[#59544E] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#B89255] shrink-0" />
                        <span>Delivery: {tier.delivery}</span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-3 my-6 text-xs text-[#59544E] border-t border-[#D9D0C3]/50 pt-6">
                      {tier.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? 'text-[#9E5249]' : 'text-[#B89255]'
                            }`}
                          />
                          <span
                            className={
                              idx === 0 && isFeatured ? 'text-[#141210] font-medium' : ''
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    {tier.optionalCarePlan && (
                      <div className="mb-4 px-3 py-2.5 bg-[#FAF6F0]/80 border border-[#D9D0C3]/70 rounded-xs text-[11px] text-[#59544E]">
                        <span className="font-semibold text-[#141210]">
                          {tier.optionalCarePlan}
                        </span>
                        {tier.optionalCarePlanDetails && (
                          <span> ({tier.optionalCarePlanDetails})</span>
                        )}
                      </div>
                    )}

                    <Link
                      to={tier.ctaTo}
                      className={`btn-editorial w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-[11px] font-semibold uppercase tracking-widest rounded-sm group ${
                        isFeatured
                          ? 'bg-[#9E5249] text-white hover:bg-[#BA685E] shadow-xs'
                          : 'bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D]'
                      }`}
                    >
                      <span>{tier.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {tier.billingFootnote && (
                      <p className="text-[10px] text-center text-[#59544E] mt-2 font-mono">
                        {tier.billingFootnote}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SINGLE ADD-ON LINE */}
          <div
            data-reveal="fade"
            className="mt-8 px-6 py-4 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-[#141210] font-medium">
              <Plus className="w-4 h-4 text-[#9E5249] shrink-0" />
              <span>
                Optional Add-On: <strong>{PACKAGES_SINGLE_ADDON.label}</strong>
              </span>
            </div>
            <span className="text-xs text-[#59544E] font-light">
              {PACKAGES_SINGLE_ADDON.description}
            </span>
          </div>

          {/* ENTERPRISE STRIP */}
          <div
            data-reveal="fade"
            className="mt-5 p-6 md:p-7 bg-[#141210] text-[#FAF6F0] rounded-sm border border-[#34302D] flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >
            <p className="font-serif text-lg md:text-xl text-white font-normal leading-snug">
              {PACKAGES_ENTERPRISE_STRIP.copy}
            </p>
            <Link
              to={PACKAGES_ENTERPRISE_STRIP.ctaTo}
              className="btn-editorial shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FAF6F0] text-[#141210] hover:bg-white text-[11px] font-semibold uppercase tracking-widest rounded-sm group"
            >
              <span>{PACKAGES_ENTERPRISE_STRIP.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PAYMENT TERMS */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-2xl mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Payment Structure
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#141210] font-normal mt-2">
              How Billing Works
            </h2>
          </div>

          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div
              data-reveal-item
              className="card-editorial p-7 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm hover:border-[#9E5249]/60"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Layers className="w-5 h-5 text-[#9E5249]" />
                <h3 className="font-serif text-xl text-[#141210] font-normal">
                  Website Builds &amp; Setup
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-[#59544E] font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>50% deposit, 50% before launch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>Applies to Essential, Professional, and Growth Partner setup fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>Final scope and deliverables confirmed in writing before work starts.</span>
                </li>
              </ul>
            </div>

            <div
              data-reveal-item
              className="card-editorial p-7 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm hover:border-[#9E5249]/60"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <CreditCard className="w-5 h-5 text-[#9E5249]" />
                <h3 className="font-serif text-xl text-[#141210] font-normal">
                  Growth Partner &amp; Care Plan
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-[#59544E] font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>Monthly plan billed after launch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>Growth Partner ($600/mo) includes a 3-month minimum agreement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                  <span>
                    Optional Care Plan ($150/mo) covers hosting, updates, fixes, and small edits.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST TRIO */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div data-reveal-item className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">100% Code Ownership</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  You own all design files, production code, and domains upon final payment. No lock-in or proprietary agency platforms.
                </p>
              </div>
            </div>

            <div data-reveal-item className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">Milestone Accountability</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Clear delivery timelines backed by structured progress reviews and staging access before launch.
                </p>
              </div>
            </div>

            <div data-reveal-item className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">Questions on Scope?</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Reach out for a direct consultation to confirm exactly which package aligns with your target service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-4xl mx-auto">
          <div data-reveal="heading" className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Packages &amp; Pricing FAQ
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light">
              Clear answers on Growth Partner, one-time packages, Care Plan maintenance, and billing terms.
            </p>
          </div>

          <div data-reveal="fade" className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qId = `pkg-faq-q-${idx}`;
              const aId = `pkg-faq-a-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm overflow-hidden transition-colors duration-200 hover:border-[#B89255]"
                >
                  <h3>
                    <button
                      type="button"
                      id={qId}
                      aria-expanded={isOpen}
                      aria-controls={aId}
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F0]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#9E5249]"
                    >
                      <span className="font-serif text-base md:text-lg text-[#141210] font-normal">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4 text-[#9E5249]" />
                      </motion.span>
                    </button>
                  </h3>

                  <motion.div
                    id={aId}
                    role="region"
                    aria-labelledby={qId}
                    aria-hidden={!isOpen}
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-xs md:text-sm text-[#59544E] font-light leading-relaxed border-t border-[#D9D0C3]/50">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BAND */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
        <div data-reveal="fade" className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Start Your Project
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Ready to build a stronger website for your business?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
            Tell us about your trade, service area, and timeline to get started or request a custom quote.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrap className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-[#9E5249] text-white hover:bg-[#BA685E] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
              >
                Start Growing
              </Link>
            </MagneticWrap>
            <MagneticWrap className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
              >
                Request a Quote
              </Link>
            </MagneticWrap>
          </div>
        </div>
      </section>
    </>
  );
};
