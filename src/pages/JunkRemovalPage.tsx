import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface JunkRemovalPageProps {
  onRequestAudit: () => void;
}

export const JunkRemovalPage: React.FC<JunkRemovalPageProps> = ({ onRequestAudit }) => {
  const jsonLdData = [
    {
      '@type': 'Service',
      name: 'Junk Removal Website Design',
      description:
        'Custom website design for junk removal companies. Clear quote flows, mobile-first layouts and photo-driven pages built to turn visitors into booked jobs.',
      provider: {
        '@id': 'https://aurevanedigital.vercel.app/#organization',
      },
      areaServed: 'United States',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://aurevanedigital.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contractor Website Design',
          item: 'https://aurevanedigital.vercel.app/contractor-website-design',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Junk Removal Website Design',
          item: 'https://aurevanedigital.vercel.app/junk-removal-website-design',
        },
      ],
    },
  ];

  const whyLoseJobs = [
    {
      title: 'Slow or cluttered mobile pages',
      desc: 'Mobile users on cellular networks leave if a page takes more than a few seconds or is packed with messy popups.',
    },
    {
      title: 'No clear quote or booking path',
      desc: 'Customers looking to clear a property want a fast way to get an estimate or book a slot without hunting through menus.',
    },
    {
      title: 'No before-and-after proof',
      desc: 'Without real photo evidence of cleanouts and property restorations, potential clients cannot verify job quality.',
    },
    {
      title: 'Service areas and pricing guidance buried',
      desc: 'Unclear coverage boundaries and concealed pricing expectations create friction and cause visitors to call competitors.',
    },
  ];

  const whatWeBuild = [
    {
      title: 'One-tap call button and short quote form on every screen',
      desc: 'Instant mobile contact so customers can call dispatch immediately or upload job photos for a quick estimate.',
    },
    {
      title: 'Before-and-after photo galleries',
      desc: 'Clear, tactile project showcases highlighting garage clearouts, estate cleanups, and commercial hauling.',
    },
    {
      title: 'Clear lists of what you remove and where you serve',
      desc: 'Detailed item acceptance breakdowns, hazardous waste exclusions, and town-by-town service territory coverage.',
    },
    {
      title: 'Pricing guidance and FAQ sections',
      desc: 'Transparent minimum pricing, truck volume tiers, and upfront answers to cut down on unqualified inquiries.',
    },
    {
      title: 'Fast mobile-first custom code, not a template',
      desc: 'Handcrafted architecture without heavy WordPress themes or slow page builders, loading smoothly across all phones.',
    },
  ];

  const faqs = [
    {
      q: 'What should a junk removal website include?',
      a: 'It should include your direct phone number, service areas, clear lists of items you take and do not take, before-and-after photos, and a simple quote request form.',
    },
    {
      q: 'Do you build quote request forms?',
      a: 'Yes, we build streamlined mobile quote forms and volume estimators customized for your dispatch process.',
    },
    {
      q: 'Are your websites templates?',
      a: 'No, every site is custom coded.',
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Junk Removal Website Design | Aurevane Digital"
        description="Custom website design for junk removal companies. Clear quote flows, mobile-first layouts and photo-driven pages built to turn visitors into booked jobs."
        canonicalPath="/junk-removal-website-design"
        jsonLd={jsonLdData}
      />

      {/* 1. HERO MASTHEAD & BREADCRUMB */}
      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#827C75] flex-wrap">
              <li>
                <a href="/" className="hover:text-[#141210] transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-[#B89255]/60">
                /
              </li>
              <li>
                <a href="/contractor-website-design" className="hover:text-[#141210] transition-colors">
                  Contractor Website Design
                </a>
              </li>
              <li aria-hidden="true" className="text-[#B89255]/60">
                /
              </li>
              <li aria-current="page" className="text-[#141210] font-semibold">
                Junk Removal Website Design
              </li>
            </ol>
          </nav>

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
                href="/packages"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#141210]/40 text-[#141210] hover:bg-[#141210] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors"
              >
                See packages
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
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Tailored Architecture
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

      {/* 4. JUNK REMOVAL WEBSITE CONCEPT */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Portfolio Concept Showcase
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2 mb-4">
              Junk removal website concept
            </h2>
            <p className="text-sm sm:text-base text-[#59544E] font-light leading-relaxed mb-6">
              "Junk Bolt" is one of our website concepts for a junk removal and hauling brand. It is a design demonstration, not a paid client project.
            </p>
            <a
              href="/our-work"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E5249] hover:text-[#141210] transition-colors group"
            >
              <span>See the Junk Bolt concept build</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. COMMON QUESTIONS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Direct Answers
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
                <h3 className="font-serif text-lg text-[#141210] font-normal mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#B89255] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#59544E] font-light leading-relaxed pl-6">
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

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Request Free Website Check
            </button>
            <a
              href="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors"
            >
              See packages
            </a>
          </div>

          {/* Inter-page cross-links */}
          <div className="pt-8 border-t border-[#34302D] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#D9D0C3]">
            <a
              href="/contractor-website-design"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              Contractor Website Design Overview
            </a>
            <span className="hidden sm:inline text-[#59544E]">•</span>
            <a
              href="/excavation-company-website-design"
              className="hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1.5"
            >
              <span>Excavation Company Website Design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
