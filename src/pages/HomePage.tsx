import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { Hero } from '../components/Hero';
import { WebsiteCheckForm } from '../components/WebsiteCheckForm';
import { SEO } from '../components/SEO';
import { AuditReportData } from '../types';

interface HomePageProps {
  onAuditGenerated: (report: AuditReportData) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAuditGenerated }) => {
  const navigate = useNavigate();

  const portfolioHighlights = [
    {
      number: '01',
      title: 'Junk Bolt',
      trade: 'Junk Removal & Hauling',
      highlight: 'Interactive volume calculator with instant dispatch booking.',
    },
    {
      number: '02',
      title: 'Vision Excavation',
      trade: 'Excavation & Construction',
      highlight: 'Heavy earthworks portfolio and instant site-scope estimator.',
    },
    {
      number: '03',
      title: 'James Iron and Steel',
      trade: 'Steel & Metal Services',
      highlight: 'AISC certified commercial tender RFP pipeline.',
    },
    {
      number: '04',
      title: 'Action Electrical',
      trade: 'Electrical Services',
      highlight: 'High-voltage grid & emergency commercial MEP dispatch system.',
    },
    {
      number: '05',
      title: 'Storm Shield',
      trade: 'Roofing & Exterior Services',
      highlight: 'Residential restoration and automated drone intake funnel.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Strategic Trade Positioning',
      desc: 'We analyze your service area, high-margin jobs, and competitor gaps to establish an undeniable tier-one market presence.',
    },
    {
      num: '02',
      title: 'Architectural Editorial Craft',
      desc: 'Zero generic templates. We build bespoke layouts with archival typography, generous negative space, and custom quote tools.',
    },
    {
      num: '03',
      title: 'Conversion Funnels & Turnkey Handover',
      desc: 'Tested across mobile devices with instant lead alerts, local SEO schema, and 100% client code ownership upon launch.',
    },
  ];

  return (
    <>
      <SEO
        title="Aurevane Digital | Premium Websites for Contractors"
        description="Premium, conversion-focused websites for contractors and home service businesses. See our concept work, packages and how we build."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <Hero
        onExploreWork={() => navigate('/our-work')}
        onRequestAudit={() => {
          const el = document.getElementById('website-check');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else navigate('/contact#website-check');
        }}
      />

      {/* 2. SERVICES & CAPABILITIES OVERVIEW */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Capabilities &amp; Specialization
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#141210] font-normal mt-2">
                Engineered for High-Ticket Trade Contractors
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#59544E] max-w-md font-light leading-relaxed">
              We specialize exclusively in contractors and home service businesses where a single customer contract is valued from $5,000 to $100,000+.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60 transition-colors">
              <Compass className="w-6 h-6 text-[#B89255] mb-4" />
              <h3 className="font-serif text-xl text-[#141210] mb-2">Bespoke Trade Positioning</h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed font-light">
                Escape interchangeable contractor templates. We position your firm as the regional authority, commanding premium rates from discerning homeowners and commercial buyers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60 transition-colors">
              <Zap className="w-6 h-6 text-[#B89255] mb-4" />
              <h3 className="font-serif text-xl text-[#141210] mb-2">Interactive Intake Funnels</h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed font-light">
                Custom visual price calculators, volume estimators, and multi-step dispatch intakes that prompt qualified prospects to call and book without hesitation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60 transition-colors">
              <Layers className="w-6 h-6 text-[#B89255] mb-4" />
              <h3 className="font-serif text-xl text-[#141210] mb-2">County Geo SEO Architecture</h3>
              <p className="text-xs md:text-sm text-[#59544E] leading-relaxed font-light">
                Structured localized hub pages engineered to capture high-intent searches in affluent adjacent suburbs and target commercial postal codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CINEMATIC PORTFOLIO PREVIEW */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Cinematic Portfolio Archive
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#141210] font-normal mt-2">
                Five Proven Contractor Websites
              </h2>
            </div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E5249] hover:text-[#141210] transition-colors group cursor-pointer"
            >
              <span>Launch Cinematic Presentation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 5 Project Preview Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {portfolioHighlights.map((proj) => (
              <Link
                key={proj.number}
                to="/our-work"
                className="p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#9E5249] font-bold block mb-1">
                    {proj.number}
                  </span>
                  <h3 className="font-serif text-lg text-[#141210] group-hover:text-[#9E5249] transition-colors leading-tight mb-1">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-3">
                    {proj.trade}
                  </span>
                  <p className="text-xs text-[#59544E] font-light leading-relaxed">
                    {proj.highlight}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                  <span>Inspect</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Cinematic Feature Callout Banner */}
          <div className="p-8 md:p-10 bg-[#141210] text-[#FAF6F0] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                Interactive Showcase
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
                Experience the Frame-by-Frame Scroll Presentation
              </h3>
              <p className="text-xs md:text-sm text-[#D9D0C3] font-light max-w-xl">
                Explore our full scroll-controlled sequence showcasing all five responsive contractor websites in realistic 3D perspective.
              </p>
            </div>
            <Link
              to="/our-work"
              className="px-6 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors shrink-0 group flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROCESS & METHODOLOGY */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Archival Methodology
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#141210] font-normal mt-2 mb-4">
              How We Build Your Digital Advantage
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              Every project is personally directed by our principal team, operating with architectural rigor, transparent milestones, and zero bloated agency retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-[#9E5249] block mb-3 font-normal">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl text-[#141210] mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D9D0C3]/50 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#827C75]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89255]" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPLIMENTARY WEBSITE DIAGNOSTIC */}
      <WebsiteCheckForm onAuditGenerated={onAuditGenerated} />

      {/* 6. FINAL DIRECT CALL TO ACTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Initiate Project
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Ready for a website that commands higher-value bids?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
            We accept a limited number of commissions each quarter to preserve client attention and architectural craft. Explore transparent packages or start a conversation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              View Service Packages
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Direct Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
