import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Zap, Gauge, Building2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getSeo } from '../data/seoRoutes';
import { SERVICE_PACKAGES, MONTHLY_RETAINERS } from '../data/packages';

export const AboutPage: React.FC = () => {
  const s = getSeo('/about');
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const carePlan = MONTHLY_RETAINERS.find((r) => r.id === 'website-care') || MONTHLY_RETAINERS[0];
  const growthPlan = MONTHLY_RETAINERS.find((r) => r.id === 'growth-seo') || MONTHLY_RETAINERS[1];
  const pillars = [
    {
      num: '01',
      title: 'Strategic Trade Positioning',
      icon: Compass,
      desc: 'Repositioning contractors, craftsmen, and niche home service businesses into unquestionable regional tier-one market authorities. We dismantle generic contractor language and structure your firm so commercial buyers and affluent homeowners immediately perceive superior capability.',
    },
    {
      num: '02',
      title: 'Quiet Editorial Aesthetics',
      icon: Sparkles,
      desc: 'Subtle negative space, archival serif typography, and tactile photography layouts that command immediate confidence from commercial procurement teams and discerning homeowners who reject garish template designs.',
    },
    {
      num: '03',
      title: 'Frictionless Conversion Funnels',
      icon: Zap,
      desc: 'Streamlined intake quote flows and custom project estimators that eliminate user hesitation, prompting qualified prospects to call and book on both desktop and mobile without friction.',
    },
    {
      num: '04',
      title: 'Fast by Design',
      icon: Gauge,
      desc: 'Lean, clean code and optimized media built to load quickly on mobile. No bloated page builders, no slow plugins, and no clunky codebases that drain mobile batteries or delay customer calls.',
    },
    {
      num: '05',
      title: 'High-Ticket Contractor Focus',
      icon: Building2,
      desc: 'Designed specifically around commercial bids, residential roofing, excavation scope, structural steel tenders, and service packages valued at $5k to $100k+. Every pixel is tailored to win large contracts.',
    },
  ];

  return (
    <>
      <SEO title={s.title} description={s.description} canonicalPath="/about" />

      {/* HERO MASTHEAD */}
      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                About Aurevane Digital
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Architectural Rigor for the Modern Trades.
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-[#9E5249] mb-6">
              "A cheap website costs tenfold in high-value bids lost to competitors with superior presentation."
            </p>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              Aurevane Digital was founded on a singular conviction: home service businesses and specialty trade contractors deserve digital platforms crafted with the same architectural precision, structural integrity, and enduring standards they bring to their physical job sites.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & MANIFESTO */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                The Core Problem
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal leading-tight">
                Why Many Contractor Websites Fail to Win Premium Clients.
              </h2>
              <div className="h-0.5 w-16 bg-[#B89255]" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              <p>
                Most contractor websites are built on bloated, interchangeable agency templates. Whether for roofing specialists, junk removal operators, electrical contractors, excavation teams, or fence and landscaping companies, generic websites broadcast compromise before a client conversation even begins.
              </p>
              <p>
                When a commercial developer or affluent homeowner considers spending $15,000, $50,000, or $200,000 with your company, their first impression happens on their smartphone. If your site looks like an unbranded template with stock imagery and broken intake forms, they immediately wonder if your craftsmanship on the job site is just as careless.
              </p>
              <p>
                Aurevane Digital provides bespoke contractor website design as an antidote to template mediocrity. We combine architectural structure, luxury editorial typography, and precision conversion funnels that help contractors command higher rates and win larger contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUREVANE DIGITAL AT A GLANCE */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-2">
              Studio Overview
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#141210] font-normal mb-6">
              Aurevane Digital at a glance
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              <p>
                Aurevane Digital is an independent web design and development studio focused exclusively on trade contractors, home-service companies, and junk removal businesses across the United States.
              </p>
              <p>
                The studio builds bespoke websites featuring clean editorial typography, fast mobile-first page speeds, structured local SEO markup, and intake workflows designed around phone calls, photo quotes, and online bookings.
              </p>
              <p>
                Website projects are delivered as one-time fees—with our Essential package starting at {essentialPrice} and our Professional package starting at {proPrice}—under clear delivery timelines and no mandatory monthly retainer. Optional {carePlan.name} ({carePlan.price} {carePlan.priceSuffix}) and {growthPlan.name} ({growthPlan.price} {growthPlan.priceSuffix}) plans are billed separately.
              </p>
              <p>
                Clients retain 100% unconditional ownership of all custom source code, design assets, and domain configurations upon completion of their build.
              </p>
              <p>
                Direct project inquiries and diagnostic website audits can be requested online or by emailing aurevanedigital@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 CORE PILLARS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-4">
              The Five Core Pillars of Aurevane Digital
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              Every site we engineer adheres to these immutable principles, ensuring speed, distinction, and tangible returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-8 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#9E5249]">
                        PILLAR {pillar.num}
                      </span>
                      <Icon className="w-5 h-5 text-[#B89255]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#141210] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Qualitative Promise Card */}
            <div className="p-8 bg-[#141210] text-[#FAF6F0] rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#B89255]">
                    HUMAN CRAFT
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#B89255]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">
                  Direct Founder Collaboration
                </h3>
                <p className="text-xs md:text-sm text-[#D9D0C3] font-light leading-relaxed">
                  You work directly with senior digital engineers who understand contractor bid structures, commercial timelines, and high-stakes trade marketing.
                </p>
              </div>
              <div className="pt-6 border-t border-[#34302D] flex items-center gap-2 text-xs text-[#FAF6F0]">
                <CheckCircle2 className="w-4 h-4 text-[#B89255]" />
                <span>Direct Principal Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
            Next Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141210] font-normal leading-tight">
            See the Difference in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed max-w-xl mx-auto">
            Experience our interactive frame-by-frame portfolio or explore our transparent project pricing.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/our-work"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#141210] text-white hover:bg-[#34302D] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Explore Our Work
            </Link>
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              View Packages &amp; Pricing
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] border border-[#9E5249] text-[#9E5249] hover:bg-[#9E5249] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
