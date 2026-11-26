import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  FileText,
  Images,
  Layers,
  MapPin,
  PhoneCall,
  Smartphone,
  Zap,
} from 'lucide-react';
import { SEO } from './SEO';
import { MagneticWrap } from './MagneticButton';
import { getSeo } from '../data/seoRoutes';
import { buildNicheIndustrySchema, ServiceSchemaFaq } from '../utils/schema';

export interface NicheProblemItem {
  title: string;
  description: string;
}

export interface NicheIncludeItem {
  title: string;
  description: string;
}

export interface NicheConceptRef {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface NicheLandingTemplateProps {
  path: string;
  tradeName: string;
  serviceName: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaText: string;
  problemsHeading: string;
  problemsIntro: string;
  problems: NicheProblemItem[];
  includesHeading: string;
  includesIntro: string;
  includes: NicheIncludeItem[];
  howItWorksHeading: string;
  howItWorksSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  pricingSummary: string;
  faqs: ServiceSchemaFaq[];
  relatedIndustries: Array<{ label: string; to: string; note: string }>;
  relatedGuides?: Array<{ label: string; to: string }>;
  conceptRef?: NicheConceptRef;
}

const INCLUDE_ICONS = [
  Layers,
  MapPin,
  Images,
  PhoneCall,
  FileText,
  Compass,
  Zap,
  Smartphone,
];

export const NicheLandingTemplate: React.FC<NicheLandingTemplateProps> = ({
  path,
  tradeName,
  serviceName,
  serviceType,
  eyebrow,
  h1,
  intro,
  ctaText,
  problemsHeading,
  problemsIntro,
  problems,
  includesHeading,
  includesIntro,
  includes,
  howItWorksHeading,
  howItWorksSteps,
  pricingSummary,
  faqs,
  relatedIndustries,
  relatedGuides,
  conceptRef,
}) => {
  const seo = getSeo(path);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = useMemo(
    () =>
      buildNicheIndustrySchema({
        path,
        tradeName,
        serviceName,
        description: seo.description,
        serviceType,
        faqs,
      }),
    [path, tradeName, serviceName, seo.description, serviceType, faqs]
  );

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={path}
        jsonLd={jsonLd}
      />

      {/* 1. HERO MASTHEAD */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#827C75] mb-6"
          >
            <Link to="/" className="hover:text-[#141210] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link to="/industries" className="hover:text-[#141210] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-[#9E5249] font-semibold">{tradeName}</span>
          </nav>

          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                {eyebrow}
              </span>
              <div data-reveal="line" className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              {h1}
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed mb-8">
              {intro}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-editorial w-full sm:w-auto px-7 py-3.5 bg-[#141210] text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </MagneticWrap>
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/packages"
                  className="btn-editorial w-full sm:w-auto px-7 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm inline-flex items-center justify-center cursor-pointer"
                >
                  <span>See Packages &amp; Pricing</span>
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRADE PROBLEMS SOLVED */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Industry Challenges
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              {problemsHeading}
            </h2>
            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              {problemsIntro}
            </p>
          </div>

          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {problems.map((problem, idx) => (
              <div
                key={idx}
                data-reveal-item
                className="card-editorial p-7 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60"
              >
                <span className="font-mono text-xs text-[#9E5249] font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#141210] font-normal mb-2">
                  {problem.title}
                </h3>
                <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT THE SITE INCLUDES */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Built-In Deliverables
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              {includesHeading}
            </h2>
            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              {includesIntro}
            </p>
          </div>

          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {includes.map((item, idx) => {
              const IconComp = INCLUDE_ICONS[idx % INCLUDE_ICONS.length];
              return (
                <div
                  key={idx}
                  data-reveal-item
                  className="card-editorial p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-sm bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3] flex items-center justify-center mb-4">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg text-[#141210] mb-2 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#59544E] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D9D0C3]/50 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#9E5249]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

          {conceptRef && (
            <div
              data-reveal="fade"
              className="mt-12 p-6 md:p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-5 aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#141210] border border-[#D9D0C3]">
                <img
                  src={conceptRef.image}
                  alt={conceptRef.imageAlt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E5249] font-bold block">
                  Real Concept Build on Our Work — {conceptRef.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-[#141210] font-normal">
                  {conceptRef.title}
                </h3>
                <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                  {conceptRef.description}
                </p>
                <div className="pt-2">
                  <Link
                    to="/our-work"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#141210] hover:text-[#9E5249] transition-colors group"
                  >
                    <span>View {conceptRef.title} in Our Work</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. HOW IT WORKS + PRICING TEASER */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <div data-reveal="heading" className="max-w-3xl mb-10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Simple Three-Step Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2">
                {howItWorksHeading}
              </h2>
            </div>

            <div
              data-reveal="stagger-group"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {howItWorksSteps.map((step, idx) => (
                <div
                  key={idx}
                  data-reveal-item
                  className="card-editorial p-7 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60"
                >
                  <span className="font-serif text-3xl text-[#9E5249] block mb-3 font-normal">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#141210] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal="fade"
            className="p-8 md:p-10 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                  Transparent One-Time Pricing
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#141210] font-normal">
                  Essential From $1,000 &amp; Professional From $1,500
                </h2>
                <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                  {pricingSummary}
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
                <Link
                  to="/packages"
                  className="btn-editorial px-6 py-3.5 bg-[#141210] text-white hover:bg-[#34302D] text-[11px] font-semibold uppercase tracking-[0.18em] rounded-sm text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Compare Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-editorial px-6 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-[11px] font-semibold uppercase tracking-[0.18em] rounded-sm text-center inline-flex items-center justify-center"
                >
                  <span>{ctaText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCESSIBLE FAQ ACCORDION (4 QUESTIONS) */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-4xl mx-auto">
          <div data-reveal="heading" className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2">
              {tradeName} Website FAQ
            </h2>
          </div>

          <div data-reveal="fade" className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qId = `niche-faq-q-${idx}`;
              const aId = `niche-faq-a-${idx}`;

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
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm md:text-base font-serif text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
                    >
                      <span className="font-medium">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-colors duration-200 ${
                            isOpen ? 'text-[#9E5249]' : 'text-[#827C75]'
                          }`}
                        />
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
                    <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-[#59544E] font-light leading-relaxed border-t border-[#D9D0C3]/40">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. RELATED INDUSTRIES & HUB LINKS */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <span
            data-reveal="fade"
            className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4"
          >
            Explore Related Trades &amp; Next Steps
          </span>
          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            <Link
              to="/industries"
              data-reveal-item
              className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-[#141210] group-hover:text-[#9E5249] transition-colors">
                All Industries Hub
              </span>
              <span className="text-[11px] text-[#59544E] mt-1 inline-flex items-center justify-between">
                <span>Browse 8 trades</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {relatedIndustries.map((rel) => (
              <Link
                key={rel.to}
                to={rel.to}
                data-reveal-item
                className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] group flex flex-col justify-between"
              >
                <span className="text-xs font-semibold text-[#141210] group-hover:text-[#9E5249] transition-colors">
                  {rel.label}
                </span>
                <span className="text-[11px] text-[#59544E] mt-1 inline-flex items-center justify-between">
                  <span>{rel.note}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}

            <Link
              to="/packages"
              data-reveal-item
              className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-[#141210] group-hover:text-[#9E5249] transition-colors">
                Website Packages
              </span>
              <span className="text-[11px] text-[#59544E] mt-1 inline-flex items-center justify-between">
                <span>From $1,000 USD</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/contact"
              data-reveal-item
              className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-[#141210] group-hover:text-[#9E5249] transition-colors">
                Request Free Mockup
              </span>
              <span className="text-[11px] text-[#59544E] mt-1 inline-flex items-center justify-between">
                <span>Contact studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {relatedGuides && relatedGuides.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#D9D0C3]/60">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-3">
                Related guides
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.to}
                    to={guide.to}
                    className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-sm group flex items-center justify-between gap-4"
                  >
                    <span className="text-xs md:text-sm font-medium text-[#141210] group-hover:text-[#9E5249] transition-colors">
                      {guide.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2]">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="fade"
            className="bg-[#141210] text-[#FAF6F0] p-10 md:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                Start With Zero Risk
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                See Your {tradeName} Website Mockup Before Paying a Dollar
              </h2>
              <p className="text-xs md:text-sm text-[#D9D0C3] font-light leading-relaxed">
                Essential builds launch in 7-10 business days starting at $1,000, with 100% code ownership and no mandatory monthly retainer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center cursor-pointer"
                >
                  {ctaText}
                </Link>
              </MagneticWrap>
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/packages"
                  className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center cursor-pointer"
                >
                  View Packages
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
