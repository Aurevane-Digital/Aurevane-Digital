import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { SelectedWork } from '../components/SelectedWork';
import { SEO } from '../components/SEO';
import { getSeo } from '../data/seoRoutes';
import { CaseStudy } from '../types';

interface WorkPageProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectCaseStudy }) => {
  const s = getSeo('/our-work');

  return (
    <>
      <SEO title={s.title} description={s.description} canonicalPath="/our-work" />

      {/* MASTHEAD HEADER */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Cinematic Portfolio Archive
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Contractor Websites Built for High-Ticket Bids.
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed mb-6">
              Every digital build below is engineered specifically for home service and trade contractors where average job values range from $5,000 to $100,000+. Scroll through our frame-by-frame interactive presentation to inspect the live interface architectures.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#D9D0C3]/70 text-xs font-mono text-[#59544E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9E5249]" />
                <span>5 Commercial Showcases</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#B89255]" />
                <span>Scroll-Controlled Interactive 3D Perspective</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89255]" />
                <span>100% Custom Coded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CINEMATIC SCROLL-CONTROLLED FRAME ANIMATION:
        The exact, intact frame sequence (1 to 289 frames)
        Preserving:
        1. Junk Bolt
        2. Vision Excavation
        3. James Iron and Steel
        4. Action Electrical
        5. Storm Shield Roofing
      */}
      <SelectedWork onSelectCaseStudy={onSelectCaseStudy} />

      {/* POST-SHOWCASE COMMISSION / CONVERSION SECTION */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-t border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141210] text-[#FAF6F0] p-10 md:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                Commission Your Platform
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Demand authority in your territory with a website built to close.
              </h2>
              <p className="text-xs md:text-sm text-[#D9D0C3] font-light leading-relaxed">
                We accept only 2 to 3 new contractor commissions each month to preserve the level of detail seen above. Explore our transparent packages or request a consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/packages"
                className="px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors text-center cursor-pointer"
              >
                View Packages
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Direct Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE CONCEPT BUILDS SECTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-t border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Architectural Concept Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141210] font-normal mt-2 mb-4">
              The Five Concept Builds
            </h2>
            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              Each build in our archive is an original concept project engineered by Aurevane Digital to demonstrate how dedicated digital architecture elevates trade businesses. These concept designs showcase custom intake tools, commercial tender gateways, and territory dispatch systems without generic templates or stock layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 01: Junk Bolt */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#9E5249] font-bold">01</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3]">
                  Concept Project
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141210] mb-2 font-normal">
                Junk Bolt
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3 font-medium">
                Fleet Dispatch &amp; Volume Estimator
              </span>
              <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                A concept fleet dispatch platform engineered for residential junk removal and commercial hauling. The concept tackles price shopping and phone friction by integrating a visual truck bed volume calculator with territory verification, allowing property owners to self-select load sizes and lock in dispatch windows before crews depart.
              </p>
            </div>

            {/* 02: Vision Excavation */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#9E5249] font-bold">02</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3]">
                  Concept Project
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141210] mb-2 font-normal">
                Vision Excavation
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3 font-medium">
                Heavy Civil Earthworks &amp; Site Prep
              </span>
              <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                This heavy earthworks concept website addresses the stringent vetting demands of general contractors and commercial developers. The layout presents machine specifications, safety accreditations, and job-site preparation capabilities through high-contrast imagery, paired with a structured tender intake flow designed to facilitate commercial subcontract prequalification.
              </p>
            </div>

            {/* 03: James Iron and Steel */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#9E5249] font-bold">03</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3]">
                  Concept Project
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141210] mb-2 font-normal">
                James Iron and Steel
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3 font-medium">
                Structural Fabrication &amp; Architectural Iron
              </span>
              <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                Created as a concept digital presence for commercial steel fabricators and architectural metalsmiths. To prevent critical engineering specifications from getting lost in generic templates, the architecture highlights AISC fabrication compliance, certified metallurgy, and crane-scale project galleries alongside an accessible tender documentation download portal.
              </p>
            </div>

            {/* 04: Action Electrical */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#9E5249] font-bold">04</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3]">
                  Concept Project
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141210] mb-2 font-normal">
                Action Electrical
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3 font-medium">
                Commercial Electrical &amp; Mechanical Contracting
              </span>
              <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                An industrial concept platform tailored for commercial electrical and mechanical contractors. Built to satisfy enterprise procurement officers and facility engineers, the system provides immediate access to switchgear diagnostics, safety compliance records, and an urgent emergency MEP response portal for regional commercial facilities.
              </p>
            </div>

            {/* 05: Storm Shield */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#9E5249] font-bold">05</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#F5EDE2] text-[#9E5249] border border-[#D9D0C3]">
                  Concept Project
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141210] mb-2 font-normal">
                Storm Shield
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3 font-medium">
                Flagship Contractor &amp; Insurance Restoration
              </span>
              <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                Designed as a concept exterior restoration and roofing showcase addressing homeowner trust barriers. The interface balances architectural drone scans with transparent shingle impact ratings and warranty guides, directing residential property owners through a straightforward two-step roof inspection scheduler without sales pressure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
