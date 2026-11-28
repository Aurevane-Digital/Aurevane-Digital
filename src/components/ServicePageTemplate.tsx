import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  FileText,
  CalendarCheck,
  MapPin,
  Star,
  Compass,
  Smartphone,
  Zap,
} from 'lucide-react';
import { SEO } from './SEO';
import { MagneticWrap } from './MagneticButton';
import { getSeo } from '../data/seoRoutes';
import { buildServiceSchema, ServiceSchemaFaq } from '../utils/schema';

export interface ServiceSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ServicePageTemplateProps {
  path: string;
  name: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceSchemaFaq[];
  serviceType: string[];
  relatedLinks: Array<{ label: string; to: string }>;
  relatedGuide?: { label: string; to: string };
  relatedGuides?: Array<{ label: string; to: string }>;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  path,
  name,
  h1,
  intro,
  sections,
  faqs,
  serviceType,
  relatedLinks,
  relatedGuide,
  relatedGuides,
}) => {
  const combinedGuides = [
    ...(relatedGuide ? [relatedGuide] : []),
    ...(relatedGuides || []),
  ].filter(
    (guide, index, arr) =>
      arr.findIndex((item) => item.to === guide.to) === index
  );
  const seo = getSeo(path);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = useMemo(
    () =>
      buildServiceSchema({
        path,
        name,
        description: seo.description,
        serviceType,
        faqs,
      }),
    [path, name, seo.description, serviceType, faqs]
  );

  const includedChecklist = [
    {
      title: 'Click-to-Call Buttons',
      desc: 'High-visibility phone triggers placed prominently above the fold so mobile visitors can dial your dispatch instantly.',
      icon: PhoneCall,
    },
    {
      title: 'Quote Request Funnel',
      desc: 'Frictionless multi-step quote intake forms capturing project dimensions, photos, and timelines without overwhelming prospects.',
      icon: FileText,
    },
    {
      title: 'Online Booking & Scheduling',
      desc: 'Seamless appointment requests synchronized with your dispatch calendar, allowing customers to reserve service slots directly.',
      icon: CalendarCheck,
    },
    {
      title: 'Google Maps Embed',
      desc: 'Interactive, responsive map embeds signaling exact regional service perimeters for clear local customer confirmation.',
      icon: MapPin,
    },
    {
      title: 'Review Integration',
      desc: 'Live review highlights and verified customer badges showcasing authentic Google and trade reputation right at decision points.',
      icon: Star,
    },
    {
      title: 'Service-Area Content',
      desc: 'Dedicated territory coverage copy engineered to rank for surrounding county, suburban, and regional home service searches.',
      icon: Compass,
    },
    {
      title: 'Mobile-First Layout',
      desc: 'Touch-optimized typography, thumb-friendly navigation, and legible pricing qualifiers designed specifically for mobile homeowners.',
      icon: Smartphone,
    },
    {
      title: 'Fast Mobile Loading',
      desc: 'Lightweight static assets, modern image formats, and clean code engineered for fast load times on cellular connections.',
      icon: Zap,
    },
  ];

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
              Services
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-[#9E5249] font-semibold">{name}</span>
          </nav>

          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Specialized Trade Architecture
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
                  <span>Get a Free Website Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </MagneticWrap>
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/packages"
                  className="btn-editorial w-full sm:w-auto px-7 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm inline-flex items-center justify-center cursor-pointer"
                >
                  <span>See Packages</span>
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTIONS */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {sections.map((section, idx) => (
            <div
              key={idx}
              data-reveal="fade"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 first:pt-0 border-t first:border-t-0 border-[#D9D0C3]/50"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-[#9E5249] font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal leading-tight">
                  {section.h2}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {section.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9E5249] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#141210] font-medium leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INCLUDED IN EVERY BUILD CHECKLIST */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Standard Specifications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Included in Every Build
            </h2>
            <p className="text-sm text-[#59544E] font-light leading-relaxed">
              Every website we deliver is engineered with essential conversion tools, search optimization fundamentals, and clean mobile responsiveness straight out of the box.
            </p>
          </div>

          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {includedChecklist.map((item, idx) => {
              const IconComp = item.icon;
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
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D9D0C3]/50 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#9E5249]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ACCESSIBLE FAQ ACCORDION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-4xl mx-auto">
          <div data-reveal="heading" className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#59544E] font-light leading-relaxed">
              Straightforward details regarding our website build process, turnaround expectations, and transparent costs.
            </p>
          </div>

          <div data-reveal="fade" className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qId = `faq-q-${idx}`;
              const aId = `faq-a-${idx}`;

              return (
                <div
                  key={idx}
                  className="bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm overflow-hidden transition-colors duration-200 hover:border-[#B89255]"
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

                  {/* Accessible animated drawer keeping answer region in DOM */}
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

      {/* 5. RELATED PAGE LINKS */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
          <div className="max-w-7xl mx-auto">
            <span
              data-reveal="fade"
              className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4"
            >
              Explore Related Services
            </span>
            <div
              data-reveal="stagger-group"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  data-reveal-item
                  className="card-editorial p-5 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-sm group flex items-center justify-between"
                >
                  <span className="text-xs md:text-sm font-medium text-[#141210] group-hover:text-[#9E5249] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
            {combinedGuides.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#D9D0C3]/60">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-3">
                  Related guides
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {combinedGuides.map((guide) => (
                    <Link
                      key={guide.to}
                      to={guide.to}
                      className="card-editorial p-5 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-sm group flex items-center justify-between gap-4"
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
      )}

      {/* 6. FINAL CALL TO ACTION BAND */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="fade"
            className="bg-[#141210] text-[#FAF6F0] p-10 md:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                Get Started
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Ready for a website that works as hard as your crews?
              </h2>
              <p className="text-xs md:text-sm text-[#D9D0C3] font-light leading-relaxed">
                Contact our studio for a straightforward discussion on your business goals, target counties, and custom intake funnels.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center cursor-pointer"
                >
                  Get a Free Website Quote
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
