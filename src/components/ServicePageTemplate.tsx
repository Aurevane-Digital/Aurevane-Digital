import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
}) => {
  const seo = getSeo(path);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = buildServiceSchema({
    path,
    name,
    description: seo.description,
    serviceType,
    faqs,
  });

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
      title: 'Sub-Second Fast Loading',
      desc: 'Lightweight static assets, modern image formats, and zero bloated plugins to ensure instantaneous load speeds on cellular connections.',
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Specialized Trade Architecture
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              {h1}
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed mb-8">
              {intro}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-[#141210] text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Get a Free Website Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/packages"
                className="px-7 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors inline-flex items-center justify-center cursor-pointer"
              >
                <span>See Packages</span>
              </Link>
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
          <div className="max-w-2xl mb-12">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedChecklist.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] flex flex-col justify-between"
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
          <div className="text-center max-w-xl mx-auto mb-12">
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

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const qId = `faq-q-${idx}`;
              const aId = `faq-a-${idx}`;

              return (
                <div
                  key={idx}
                  className="bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm overflow-hidden"
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
                      <ChevronDown
                        className={`w-4 h-4 text-[#827C75] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#9E5249]' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  {/* Accessible: Keep answer element in DOM at all times, toggling visibility via styling/hidden attribute */}
                  <div
                    id={aId}
                    role="region"
                    aria-labelledby={qId}
                    hidden={!isOpen}
                    className={`px-6 pb-5 pt-1 text-xs md:text-sm text-[#59544E] font-light leading-relaxed border-t border-[#D9D0C3]/40 ${
                      isOpen ? 'block' : 'hidden'
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

      {/* 5. RELATED PAGE LINKS */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4">
              Explore Related Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="p-5 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-colors group flex items-center justify-between"
                >
                  <span className="text-xs md:text-sm font-medium text-[#141210] group-hover:text-[#9E5249] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FINAL CALL TO ACTION BAND */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141210] text-[#FAF6F0] p-10 md:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
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
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors text-center cursor-pointer"
              >
                Get a Free Website Quote
              </Link>
              <Link
                to="/packages"
                className="px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors text-center cursor-pointer"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
