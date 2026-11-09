import React from 'react';
import { Compass, Sparkles, Zap, Gauge, Building2 } from 'lucide-react';

export const Ethos: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Ethos */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Studio Ethos • Architectural Precision
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal leading-tight">
              Built for home service businesses ready to stand apart.
            </h2>

            <p className="text-sm md:text-base text-[#59544E] leading-relaxed font-light">
              Most service business websites are built on bloated, interchangeable templates. Whether for roofing specialists, junk removal operators, electrical contractors, excavation teams, or fence and landscaping companies, generic websites broadcast compromise before a client conversation even begins.
            </p>

            <p className="text-sm md:text-base text-[#59544E] leading-relaxed font-light">
              Aurevane Digital provides bespoke contractor website design as an antidote to template mediocrity. We combine architectural structure, luxury editorial typography, and precision conversion funnels that help contractors win higher-value contracts.
            </p>

            <div className="p-6 bg-[#FAF6F0] rounded-sm border-l-2 border-[#9E5249] shadow-xs mt-2">
              <p className="font-serif italic text-lg text-[#141210] mb-2">
                "A cheap website costs tenfold in high-value bids lost to competitors with superior presentation."
              </p>
              <span className="text-[11px] uppercase tracking-widest text-[#59544E] font-semibold">
                — Aurevane Design Principle
              </span>
            </div>
          </div>

          {/* Right Column: 5 Core Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Pillar 1 */}
            <div className="p-6 md:p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]/70 hover:border-[#9E5249]/60 transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
                  Pillar 01
                </span>
                <Compass className="w-5 h-5 text-[#B89255]" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-1.5">
                Strategic Trade Positioning
              </h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed">
                Repositioning contractors, craftsmen, and niche home service businesses into unquestionable regional tier-one market authorities.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 md:p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]/70 hover:border-[#9E5249]/60 transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
                  Pillar 02
                </span>
                <Sparkles className="w-5 h-5 text-[#B89255]" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-1.5">
                Quiet Editorial Aesthetics
              </h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed">
                Subtle negative space, archival serif typography, and tactile photography layouts that command immediate confidence from commercial procurement and discerning homeowners.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 md:p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]/70 hover:border-[#9E5249]/60 transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
                  Pillar 03
                </span>
                <Zap className="w-5 h-5 text-[#B89255]" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-1.5">
                Frictionless Conversion Funnels
              </h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed">
                Streamlined intake quote flows and project estimators that eliminate user hesitation, prompting qualified prospects to call and book on both desktop and mobile.
              </p>
            </div>

            {/* Two-col bento for 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]/70 hover:border-[#9E5249]/60 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
                    Pillar 04
                  </span>
                  <Gauge className="w-5 h-5 text-[#B89255]" />
                </div>
                <h3 className="font-serif text-lg text-[#141210] mb-1.5">
                  Sub-Second Performance
                </h3>
                <p className="text-xs text-[#59544E] leading-relaxed">
                  Clean semantic code free of JavaScript clutter, achieving near-perfect 100/100 Lighthouse performance and Core Web Vitals compliance.
                </p>
              </div>

              <div className="p-6 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3]/70 hover:border-[#9E5249]/60 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
                    Pillar 05
                  </span>
                  <Building2 className="w-5 h-5 text-[#B89255]" />
                </div>
                <h3 className="font-serif text-lg text-[#141210] mb-1.5">
                  High-Ticket Contractor Focus
                </h3>
                <p className="text-xs text-[#59544E] leading-relaxed">
                  Designed specifically around commercial bids, residential roofing, structural steel tenders, and service packages valued at $5k to $100k+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
