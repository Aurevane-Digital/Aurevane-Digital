import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  SERVICE_PACKAGES,
  ADD_ON_OPTIONS,
  MONTHLY_RETAINERS,
  RETAINER_HEADING,
  RETAINER_SUBTITLE,
  RETAINER_TERMS,
  PROJECT_PAYMENT_TERMS,
  RETAINER_PAYMENT_TERMS,
} from '../data/packages';
import { ServicePackage } from '../types';
import { SEO } from '../components/SEO';
import { getSeo } from '../data/seoRoutes';
import { buildFaqPageSchema, ServiceSchemaFaq } from '../utils/schema';

interface PackagesPageProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onSelectPackage }) => {
  const s = getSeo('/packages');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const essentialPkg = SERVICE_PACKAGES.find((p) => p.id === 'starter') || SERVICE_PACKAGES[0];
  const proPkg = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];
  const enterprisePkg = SERVICE_PACKAGES.find((p) => p.id === 'custom') || SERVICE_PACKAGES[2];

  const carePlan =
    MONTHLY_RETAINERS.find((r) => r.id === 'website-care') || MONTHLY_RETAINERS[0];
  const growthPlan =
    MONTHLY_RETAINERS.find((r) => r.id === 'growth-seo') || MONTHLY_RETAINERS[1];

  const faqs: ServiceSchemaFaq[] = useMemo(
    () => [
      {
        q: 'Are your website packages one-time fees?',
        a: `Yes. Our ${essentialPkg.name} (starting at ${essentialPkg.price}), ${proPkg.name} (starting at ${proPkg.price}), and ${enterprisePkg.name} builds are one-time project fees with 100% ownership of your code. Optional monthly care and SEO plans are billed separately only if you want ongoing post-launch support.`,
      },
      {
        q: 'Do I have to pay a monthly fee after launch?',
        a: `No. Website projects have no mandatory monthly retainer. Optional ${carePlan.name} (${carePlan.price} ${carePlan.priceSuffix}) and ${growthPlan.name} (${growthPlan.price} ${growthPlan.priceSuffix}) plans are completely optional and billed separately. Domain registration and any paid third-party subscriptions or tools are separate costs as well.`,
      },
      {
        q: 'How does payment work?',
        a: 'Website projects require a 50% deposit to initiate the project, with the remaining 50% due before final launch and handover. Final pricing depends on project scope and requirements. If you opt into a monthly plan, it is billed monthly in advance under a separate agreement.',
      },
      {
        q: 'What is not included in package prices?',
        a: 'Domain registration, paid third-party subscriptions or software tools, and work outside the agreed project scope are not included in package prices and may incur separate costs.',
      },
      {
        q: 'Can you guarantee Google rankings or a number of leads?',
        a: 'No. Nobody can guarantee specific Google rankings or a set volume of leads. We engineer a fast, structured, high-converting foundation and, with an optional monthly plan, continue optimizing your site over time without making unrealistic promises.',
      },
      {
        q: 'How long does a project take?',
        a: `${essentialPkg.name} projects typically deploy in ${essentialPkg.turnaround.toLowerCase()}, ${proPkg.name} builds take ${proPkg.turnaround.toLowerCase()}, and ${enterprisePkg.name} platforms take ${enterprisePkg.turnaround.toLowerCase()}.`,
      },
    ],
    [essentialPkg, proPkg, enterprisePkg, carePlan, growthPlan]
  );

  const jsonLd = useMemo(
    () =>
      buildFaqPageSchema({
        path: '/packages',
        name: 'Packages',
        faqs,
      }),
    [faqs]
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Transparent Investment
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              {s.h1}
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              One-time project pricing, optional enhancements and optional monthly care and SEO plans, with scope and payment terms defined before we start.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PACKAGE CARDS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICE_PACKAGES.map((pkg) => {
              const isFeatured = pkg.featured;
              const isEnterprise = pkg.id === 'custom';

              return (
                <div
                  key={pkg.id}
                  className={`p-8 md:p-9 rounded-sm flex flex-col justify-between transition-all relative ${
                    isFeatured
                      ? 'border-2 border-[#9E5249] shadow-xl ring-1 ring-[#9E5249]/20 bg-[#FAF6F0]'
                      : 'bg-[#F5EDE2] border border-[#D9D0C3] hover:shadow-md'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#9E5249] text-white text-[9px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xs whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#D9D0C3]/70">
                      <h2
                        className={`text-xs uppercase tracking-widest font-bold ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#141210]'
                        }`}
                      >
                        {pkg.name}
                      </h2>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold text-right ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#59544E]'
                        }`}
                      >
                        {pkg.tagline}
                      </span>
                    </div>

                    <div className="my-6">
                      <div className="flex items-baseline flex-wrap gap-2">
                        {pkg.pricePrefix && (
                          <span className="text-xs text-[#59544E]">{pkg.pricePrefix}</span>
                        )}
                        <span className="font-serif text-3xl md:text-5xl text-[#141210] font-normal">
                          {pkg.price}
                        </span>
                      </div>

                      {pkg.paymentType && (
                        <span className="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold text-[#9E5249] bg-[#FAF6F0] px-2.5 py-0.5 border border-[#D9D0C3] rounded-xs">
                          {pkg.paymentType}
                        </span>
                      )}

                      <div className="flex items-center gap-1.5 mt-3 text-[11px] text-[#59544E] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#B89255] shrink-0" />
                        <span>Turnaround: {pkg.turnaround}</span>
                      </div>

                      <p className="text-xs text-[#59544E] mt-3 font-light leading-relaxed">
                        {pkg.description}
                      </p>

                      {pkg.bestFor && (
                        <div className="mt-3 p-3 bg-[#FAF6F0]/80 rounded-xs border border-[#D9D0C3]/60 text-[11px] text-[#59544E]">
                          <strong className="text-[#141210] font-semibold">Best for: </strong>
                          {pkg.bestFor}
                        </div>
                      )}
                    </div>

                    <ul className="flex flex-col gap-3 my-6 text-xs text-[#59544E] border-t border-[#D9D0C3]/50 pt-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? 'text-[#9E5249]' : 'text-[#B89255]'
                            }`}
                          />
                          <span className={idx === 0 && isFeatured ? 'text-[#141210] font-medium' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full inline-flex items-center justify-center py-3.5 px-4 text-[11px] font-semibold uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#9E5249] text-white hover:bg-[#BA685E] shadow-xs'
                          : 'bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D]'
                      }`}
                    >
                      {isEnterprise ? 'Book a Consultation' : 'Start Your Project'}
                    </button>
                    <p className="text-[10px] text-center text-[#59544E] mt-2 font-mono">
                      {isEnterprise
                        ? 'Custom Scope & Direct Consultation'
                        : 'One-Time Project Fee • 100% Code Ownership'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OPTIONAL ENHANCEMENTS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Modular Extensions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Optional Enhancements
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              Extend your website&apos;s capabilities with specialized features and strategic enhancements tailored to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADD_ON_OPTIONS.map((addon) => (
              <div
                key={addon.id}
                className="p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg text-[#141210] font-medium">
                      {addon.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-[#9E5249] shrink-0">
                      {addon.custom
                        ? 'Custom quotation'
                        : `${addon.pricePrefix ? `${addon.pricePrefix} ` : ''}+$${addon.price}`}
                    </span>
                  </div>
                  <p className="text-xs text-[#59544E] font-light leading-relaxed">
                    {addon.description}
                  </p>
                  {addon.note && (
                    <p className="text-[11px] text-[#59544E] mt-3 p-2.5 bg-[#F5EDE2]/80 border border-[#D9D0C3]/60 rounded-xs italic">
                      {addon.note}
                    </p>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9D0C3]/60 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#827C75]">
                  <Plus className="w-3 h-3 text-[#B89255]" />
                  <span>Available with any package</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPTIONAL MONTHLY RETAINERS ("Beyond Launch. Built for Growth.") */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Optional monthly retainers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              {RETAINER_HEADING}
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              {RETAINER_SUBTITLE}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {MONTHLY_RETAINERS.map((retainer) => {
              const isRecommended = Boolean(retainer.badge);
              return (
                <div
                  key={retainer.id}
                  className={`p-8 md:p-9 rounded-sm bg-[#141210] text-[#FAF6F0] flex flex-col justify-between relative ${
                    isRecommended
                      ? 'border-2 border-[#B89255] shadow-xl'
                      : 'border border-[#34302D]'
                  }`}
                >
                  {retainer.badge && (
                    <div className="absolute -top-3.5 right-8 px-4 py-0.5 bg-[#B89255] text-[#141210] text-[9px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xs">
                      {retainer.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#34302D]">
                      <h3 className="font-serif text-2xl text-white font-normal">
                        {retainer.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B89255] border border-[#B89255]/40 bg-[#B89255]/10 px-2.5 py-0.5 rounded-xs">
                        Optional monthly plan
                      </span>
                    </div>

                    <div className="my-6">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-3xl md:text-4xl text-[#B89255] font-normal">
                          {retainer.price}
                        </span>
                        <span className="text-xs text-[#D9D0C3] font-light">
                          {retainer.priceSuffix}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-[#D9D0C3] mt-3 font-light leading-relaxed">
                        {retainer.description}
                      </p>
                    </div>

                    <div className="border-t border-[#34302D] pt-6 my-6">
                      {retainer.includesIntro && (
                        <p className="text-xs font-semibold text-[#B89255] mb-3 uppercase tracking-wider">
                          {retainer.includesIntro}
                        </p>
                      )}
                      <ul className="flex flex-col gap-2.5 text-xs text-[#D9D0C3]">
                        {retainer.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-[11px] font-semibold uppercase tracking-widest rounded-sm transition-colors ${
                        isRecommended
                          ? 'bg-[#B89255] text-[#141210] hover:bg-[#cfa867]'
                          : 'bg-[#FAF6F0] text-[#141210] hover:bg-white'
                      }`}
                    >
                      <span>{retainer.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-[11px] text-[#59544E] font-light leading-relaxed max-w-4xl">
            {RETAINER_TERMS}
          </p>
        </div>
      </section>

      {/* 5. PAYMENT INFORMATION */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Payment Structure
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#141210] font-normal mt-2">
              How Billing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Layers className="w-5 h-5 text-[#9E5249]" />
                <h3 className="font-serif text-xl text-[#141210] font-normal">
                  Website projects
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-[#59544E] font-light">
                {PROJECT_PAYMENT_TERMS.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <CreditCard className="w-5 h-5 text-[#9E5249]" />
                <h3 className="font-serif text-xl text-[#141210] font-normal">
                  Monthly retainers
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm text-[#59544E] font-light">
                {RETAINER_PAYMENT_TERMS.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST TRIO (CODE OWNERSHIP ETC.) */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">100% Code Ownership</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  You own all design files, production code, and domains upon final payment. No lock-in or proprietary agency platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">Milestone Accountability</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Clear delivery timelines backed by structured progress demos and staging access before launch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#141210] mb-1">Questions on Scope?</h3>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Reach out for a direct consultation to confirm exactly which package aligns with your target territory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Packages &amp; Pricing FAQ
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light">
              Clear answers on one-time project fees, optional monthly retainers, ownership, and deliverables.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qId = `pkg-faq-q-${idx}`;
              const aId = `pkg-faq-a-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm overflow-hidden"
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
                      <ChevronDown
                        className={`w-4 h-4 text-[#9E5249] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={aId}
                    role="region"
                    aria-labelledby={qId}
                    hidden={!isOpen}
                    className={`px-6 text-xs md:text-sm text-[#59544E] font-light leading-relaxed border-t border-[#D9D0C3]/50 transition-all ${
                      isOpen ? 'py-5 block' : 'hidden'
                    }`}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BAND */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Start Your Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Ready to secure your project milestone?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
            Start your build directly or talk with our team about your project scope and timeline.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onSelectPackage(proPkg)}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Start a Professional Project (from {proPkg.price})
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Contact Our Principal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
