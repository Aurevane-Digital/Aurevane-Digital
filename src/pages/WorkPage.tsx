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
    </>
  );
};
