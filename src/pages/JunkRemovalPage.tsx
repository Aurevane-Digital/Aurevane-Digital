import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { updatePageHead } from '../utils/seoHelper';

interface JunkRemovalPageProps {
  onRequestAudit: () => void;
}

export const JunkRemovalPage: React.FC<JunkRemovalPageProps> = ({ onRequestAudit }) => {
  useEffect(() => {
    updatePageHead({
      title: 'Junk Removal Website Design | Aurevane Digital',
      description:
        'Custom website design for junk removal companies. Clear quote flows, mobile-first layouts and photo-driven pages built to turn visitors into booked jobs.',
      canonicalUrl: 'https://aurevanedigital.vercel.app/junk-removal-website-design',
      serviceJsonLd: {
        name: 'Junk Removal Website Design',
        description:
          'Custom website design for junk removal companies. Clear quote flows, mobile-first layouts and photo-driven pages built to turn visitors into booked jobs.',
      },
    });
    window.scrollTo(0, 0);
  }, []);

  const whyLoseJobs = [
    {
      title: 'Slow or cluttered mobile pages',
      desc: 'Mobile visitors on cellular data abandon pages that take more than a couple of seconds to render.',
    },
    {
      title: 'No clear quote or booking path',
      desc: 'Visitors cannot quickly locate a simple way to get an estimate or request a pickup schedule.',
    },
    {
      title: 'No before-and-after proof',
      desc: 'Without real photo evidence of cleanouts and property restorations, trust is immediately questioned.',
    },
    {
      title: 'Service areas and pricing guidance buried',
      desc: 'Unclear service boundaries and zero price expectations create friction and prompt visitors to click away.',
    },
  ];

  const whatWeBuild = [
    {
      title: 'A one-tap call button and short quote form on every screen',
      desc: 'Designed for instant mobile contact so prospects can phone your dispatch or submit photos in seconds.',
    },
    {
      title: 'Before-and-after photo galleries',
      desc: 'Tactile, clean project showcases highlighting property transformations, estate cleanouts, and commercial clearings.',
    },
    {
      title: 'Clear lists of what you remove and where you serve',
      desc: 'Comprehensive lists of accepted items, hazardous waste exclusions, and regional service territory maps.',
    },
    {
      title: 'Pricing guidance and FAQ sections that cut down on tire-kicker calls',
      desc: 'Transparent pricing tiers, truck volume guidelines, and answers to common pickup questions.',
    },
    {
      title: 'Fast, mobile-first custom code, not a template',
      desc: 'Handcrafted architecture without heavy plugins or page builders, loading smoothly across all mobile devices.',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Free website check of your current site',
      desc: 'We review your existing online presence to identify conversion leaks and mobile obstacles.',
    },
    {
      step: '02',
      title: 'Custom design mockup for your business',
      desc: 'We create a tailored design layout aligned with your local service territory and brand identity.',
    },
    {
      step: '03',
      title: 'Build and launch',
      desc: 'We custom-code the website, test mobile responsiveness, configure local SEO, and push live.',
    },
  ];

  const faqs = [
    {
      q: 'Do you use templates?',
      a: 'No, every site is custom coded.',
    },
    {
      q: 'Can you work with my existing branding?',
      a: 'Yes.',
    },
    {
      q: 'How do I get started?',
      a: 'Request a free website check.',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO MASTHEAD */}
      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Specialized Trade Practice
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Website Design for Junk Removal Companies
            </h1>

            <p className="text-base sm:text-lg text-[#59544E] font-light leading-relaxed mb-8">
              Junk removal customers decide fast. Your website should make it obvious what you haul, where you work, and how to get a quote in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestAudit}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer group shadow-sm"
              >
                <span>Request Free Website Check</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#what-we-build"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#141210]/40 text-[#141210] hover:bg-[#141210] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors"
              >
                What We Build
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JUNK REMOVAL WEBSITES LOSE JOBS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Common Drop-Off Points
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              Why junk removal websites lose jobs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyLoseJobs.map((item, index) => (
              <div
                key={index}
                className="p-7 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] flex items-start gap-4"
              >
                <div className="p-2 rounded-xs bg-[#FAF6F0] text-[#9E5249] shrink-0 mt-0.5 border border-[#D9D0C3]/60">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#141210] font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD FOR JUNK REMOVAL COMPANIES */}
      <section
        id="what-we-build"
        className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Tailored Digital Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              What we build for junk removal companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map((item, index) => (
              <div
                key={index}
                className="p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-xs bg-[#F5EDE2] border border-[#D9D0C3] flex items-center justify-center text-[#B89255] mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#141210] font-normal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Process
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-[#9E5249] font-normal block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#141210] font-normal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON QUESTIONS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              FAQ
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              Common questions
            </h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]"
              >
                <h3 className="font-serif text-lg text-[#141210] font-normal mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#59544E] font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & INTER-PAGE LINKS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Take Action
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            Ready to upgrade your junk removal website?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light max-w-xl mx-auto leading-relaxed">
            Get a comprehensive review of your current site and a clear path toward more calls and bookings.
          </p>

          <div className="pt-2">
            <button
              onClick={onRequestAudit}
              className="inline-flex items-center justify-center px-9 py-4 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Request Free Website Check
            </button>
          </div>

          {/* Inter-page cross-links */}
          <div className="pt-8 border-t border-[#34302D] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#D9D0C3]">
            <a
              href="/excavation-company-website-design"
              className="hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Excavation Company Website Design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="hidden sm:inline text-[#59544E]">•</span>
            <a
              href="/"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              Contractor website design
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
