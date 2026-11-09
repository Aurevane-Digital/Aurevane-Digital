import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

interface ContractorHubPageProps {
  onRequestAudit: () => void;
}

export const ContractorHubPage: React.FC<ContractorHubPageProps> = ({ onRequestAudit }) => {
  const jsonLdData = [
    {
      '@type': 'Service',
      name: 'Contractor Website Design',
      description:
        'Premium website design for contractors and home service businesses. Clear services, real proof and quote flows that turn visitors into inquiries.',
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
      ],
    },
  ];

  const commonProblems = [
    'Outdated or template look',
    'Slow mobile pages',
    'No clear quote path',
    'Work not shown properly',
    'Service areas missing',
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Free website check',
      desc: 'We inspect your current online presence to identify slow loading, missing service areas, and friction in your quote flow.',
    },
    {
      step: '02',
      title: 'Custom design mockup',
      desc: 'We craft a bespoke website design tailored to your trade specialties, service radius, and brand standards.',
    },
    {
      step: '03',
      title: 'Build and launch',
      desc: 'We custom-code your site with clean semantics, mobile speed optimization, and direct inquiry notifications.',
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Contractor Website Design | Aurevane Digital"
        description="Premium website design for contractors and home service businesses. Clear services, real proof and quote flows that turn visitors into inquiries."
        canonicalPath="/contractor-website-design"
        jsonLd={jsonLdData}
      />

      {/* 1. HERO MASTHEAD & BREADCRUMB */}
      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#827C75]">
              <li>
                <a href="/" className="hover:text-[#141210] transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-[#B89255]/60">
                /
              </li>
              <li aria-current="page" className="text-[#141210] font-semibold">
                Contractor Website Design
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Specialized Practice
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Website Design for Contractors
            </h1>

            <p className="text-base sm:text-lg text-[#59544E] font-light leading-relaxed mb-8">
              Aurevane Digital designs premium, custom-coded websites for contractors and home service businesses. Every page is built to show your work clearly and make it easy for a customer to call or request a quote.
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

      {/* 2. WHAT A CONTRACTOR WEBSITE HAS TO DO */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Core Requirements
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              What a contractor website has to do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-xs bg-[#FAF6F0] border border-[#D9D0C3] flex items-center justify-center text-[#B89255] mb-4">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl text-[#141210] font-normal mb-3">
                  Show what you do and where you work
                </h3>
                <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                  Clearly define your core trade capabilities, project scope, and exact geographic service boundaries so local property owners know immediately you cover their area.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-xs bg-[#FAF6F0] border border-[#D9D0C3] flex items-center justify-center text-[#B89255] mb-4">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl text-[#141210] font-normal mb-3">
                  Prove the quality of your work
                </h3>
                <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                  High-resolution project galleries, detailed process breakdowns, and equipment showcases prove your craftsmanship before a client ever picks up the phone.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 rounded-xs bg-[#FAF6F0] border border-[#D9D0C3] flex items-center justify-center text-[#B89255] mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl text-[#141210] font-normal mb-3">
                  Make contact effortless on a phone
                </h3>
                <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                  Prominent click-to-call buttons and streamlined quote forms allow busy homeowners and commercial project managers to reach you in seconds on any mobile device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMON PROBLEMS WE FIX */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Diagnosing Friction
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              Common problems we fix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonProblems.map((problem, index) => (
              <div
                key={index}
                className="p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] flex items-center gap-4"
              >
                <div className="p-2 rounded-xs bg-[#F5EDE2] text-[#9E5249] shrink-0 border border-[#D9D0C3]/60">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#141210]">
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEBSITES BY TRADE */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Trade Specializations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2">
              Websites by trade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/junk-removal-website-design"
              className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[#141210] group-hover:text-[#9E5249] transition-colors">
                  Junk Removal Website Design
                </h3>
                <ArrowRight className="w-4 h-4 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                Custom quote flows, mobile-first layouts and photo-driven pages built to turn visitors into booked jobs.
              </p>
            </a>

            <a
              href="/excavation-company-website-design"
              className="p-8 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[#141210] group-hover:text-[#9E5249] transition-colors">
                  Excavation Company Website Design
                </h3>
                <ArrowRight className="w-4 h-4 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed">
                Show your equipment, service areas and projects, and make requesting a quote easy.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 5. SEE OUR CONCEPT WORK */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Portfolio
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mt-2 mb-4">
              See our concept work
            </h2>
            <p className="text-sm sm:text-base text-[#59544E] font-light leading-relaxed mb-6">
              Our portfolio shows five website concepts for different trades. They are design demonstrations, not paid client projects.
            </p>
            <a
              href="/our-work"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E5249] hover:text-[#141210] transition-colors group"
            >
              <span>Explore the concept builds</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Engagement Flow
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

      {/* 7. FINAL CALL TO ACTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Get Started
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            Ready to upgrade your contractor website?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light max-w-xl mx-auto leading-relaxed">
            Request a free diagnostic review of your current site, or explore our transparent fixed-price packages.
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
        </div>
      </section>
    </div>
  );
};
