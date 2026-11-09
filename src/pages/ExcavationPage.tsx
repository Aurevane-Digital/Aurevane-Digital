import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { updatePageHead } from '../utils/seoHelper';

interface ExcavationPageProps {
  onRequestAudit: () => void;
}

export const ExcavationPage: React.FC<ExcavationPageProps> = ({ onRequestAudit }) => {
  useEffect(() => {
    updatePageHead({
      title: 'Excavation Company Website Design | Aurevane Digital',
      description:
        'Custom website design for excavation and dirt work contractors. Show your equipment, service areas and projects, and make requesting a quote easy.',
      canonicalUrl: 'https://aurevanedigital.vercel.app/excavation-company-website-design',
      serviceJsonLd: {
        name: 'Excavation Company Website Design',
        description:
          'Custom website design for excavation and dirt work contractors. Show your equipment, service areas and projects, and make requesting a quote easy.',
      },
    });
    window.scrollTo(0, 0);
  }, []);

  const whyLoseJobs = [
    {
      title: 'Equipment and capabilities are not shown clearly',
      desc: 'Commercial project managers and general contractors cannot quickly verify tonnage, excavators, or job scale capacity.',
    },
    {
      title: 'Service areas are vague',
      desc: 'Prospects cannot determine whether you mobilize to their specific township, county, or job site radius.',
    },
    {
      title: 'No simple way to request a quote from a job site on a phone',
      desc: 'Builders and property developers on active sites need instant mobile quote inputs, not lengthy generic forms.',
    },
    {
      title: 'Past projects not shown',
      desc: 'Without clear photography of completed earthworks, foundations, and grading, potential clients move to competitors.',
    },
  ];

  const whatWeBuild = [
    {
      title: 'Service pages for excavation, grading, trenching, site prep and land clearing',
      desc: 'Dedicated architectural pages structured for each trade discipline to attract high-intent commercial and residential contracts.',
    },
    {
      title: 'Equipment and capability sections',
      desc: 'Clean, authoritative displays of your machinery fleet, attachments, licensing, and bonding capacity.',
    },
    {
      title: 'Project galleries and service area sections',
      desc: 'High-resolution project case studies organized by county and project type to prove local credibility.',
    },
    {
      title: 'Click-to-call and a short quote request form',
      desc: 'Streamlined mobile actions that allow builders and homeowners to send job specs and request bids immediately.',
    },
    {
      title: 'Fast, mobile-first custom code, not a template',
      desc: 'Bespoke lightweight code that renders immediately in the field on phones and tablets with zero template bloat.',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Free website check of your current site',
      desc: 'We inspect your existing site to pinpoint technical issues, slow speeds, and lost bid opportunities.',
    },
    {
      step: '02',
      title: 'Custom design mockup for your business',
      desc: 'We draft a tailored design framework showcasing your machinery, services, and geographic coverage.',
    },
    {
      step: '03',
      title: 'Build and launch',
      desc: 'We build the site with clean custom code, optimize local search signals, and launch with zero downtime.',
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
              Website Design for Excavation Companies
            </h1>

            <p className="text-base sm:text-lg text-[#59544E] font-light leading-relaxed mb-8">
              Customers searching for an excavation or dirt work contractor want to know one thing: can you do my job, in my area, and how do I reach you? Your website should answer that immediately.
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

      {/* 2. WHY EXCAVATION WEBSITES LOSE JOBS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Common Drop-Off Points
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              Why excavation websites lose jobs
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

      {/* 3. WHAT WE BUILD FOR EXCAVATION AND DIRT WORK CONTRACTORS */}
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
              What we build for excavation and dirt work contractors
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
            Ready to upgrade your excavation website?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light max-w-xl mx-auto leading-relaxed">
            Get an in-depth audit of your current site and a clear plan to win more commercial and residential bids.
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
              href="/junk-removal-website-design"
              className="hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Junk Removal Website Design</span>
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
