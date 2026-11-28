import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MagneticWrap } from '../components/MagneticButton';
import { getSeo } from '../data/seoRoutes';
import { buildIndustriesHubSchema } from '../utils/schema';

export const INDUSTRIES_DIRECTORY = [
  {
    number: '01',
    trade: 'Excavation Contractors',
    slug: '/excavation-company-website-design',
    tagline: 'Earthworks & Site Prep',
    description:
      'Custom excavation company websites with civil bid intake forms, blueprint upload fields, machine capacity displays, and county service-area pages.',
  },
  {
    number: '02',
    trade: 'Junk Removal Companies',
    slug: '/junk-removal-website-design',
    tagline: 'Hauling & Cleanouts',
    description:
      'Conversion-focused junk removal websites featuring smartphone photo quote forms, truck-load volume guides, tap-to-call triggers, and arrival-window scheduling.',
  },
  {
    number: '03',
    trade: 'Septic Contractors',
    slug: '/septic-contractor-website-design',
    tagline: 'Pumping, Inspection & Install',
    description:
      'Emergency-ready septic contractor websites turning urgent backup searches into dispatch phone calls while routing tank pumping and drain-field installs cleanly.',
  },
  {
    number: '04',
    trade: 'Land Clearing & Forestry Mulching',
    slug: '/land-clearing-website-design',
    tagline: 'Acreage & Brush Clearing',
    description:
      'Acreage quote websites for land clearing and forestry mulching crews with before-and-after lot galleries, equipment showcases, and parcel-access intake forms.',
  },
  {
    number: '05',
    trade: 'Fence Companies',
    slug: '/fence-company-website-design',
    tagline: 'Residential & Commercial Fencing',
    description:
      'Lead-generating fence installer websites built around material comparison galleries, linear-footage estimate forms, gate options, and neighborhood service pages.',
  },
  {
    number: '06',
    trade: 'Mobile Detailing Businesses',
    slug: '/mobile-detailing-website-design',
    tagline: 'On-Site Automotive Care',
    description:
      'Booking-ready mobile detailing websites with tiered sedan/SUV/truck package pricing, paint-correction before/after galleries, and ZIP-code coverage maps.',
  },
  {
    number: '07',
    trade: 'Electrical Contractors',
    slug: '/electrical-contractor-website-design',
    tagline: 'Licensed Master Electricians',
    description:
      'High-trust electrical contractor websites highlighting state licensing, insurance badges, 24/7 emergency call triggers, panel upgrades, and commercial bid routing.',
  },
  {
    number: '08',
    trade: 'Roofing Contractors',
    slug: '/roofing-website-design',
    tagline: 'Storm Season & Replacements',
    description:
      'Storm-ready roofing websites combining immediate leak tap-to-call paths, insurance-claim restoration guides, shingle galleries, and inspection booking forms.',
  },
];

const ADDITIONAL_PLATFORM_LINKS = [
  { label: 'Contractor Website Design', to: '/contractor-website-design' },
  { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
  { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
  { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
  { label: 'Home Services Website Design', to: '/home-services-website-design' },
  { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
  { label: 'Website Redesign for Service Businesses', to: '/website-redesign' },
];

export const IndustriesPage: React.FC = () => {
  const seo = getSeo('/industries');
  const jsonLd = useMemo(() => buildIndustriesHubSchema(), []);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/industries"
        jsonLd={jsonLd}
      />

      {/* 1. HERO MASTHEAD */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#827C75] mb-6"
          >
            <Link to="/" className="hover:text-[#141210] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-[#9E5249] font-semibold">Industries</span>
          </nav>

          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Trade &amp; Service Sectors
              </span>
              <div data-reveal="line" className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Website Design Built Around Each Blue-Collar Industry
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed mb-8">
              Every trade wins work differently. An emergency septic call requires instant dispatch visibility, while an excavation contractor needs blueprint uploads and equipment credibility. Explore how we build fast, custom websites across our eight core service industries—starting at $1,000 and launching in 7-10 business days.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-editorial w-full sm:w-auto px-7 py-3.5 bg-[#141210] text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
                >
                  <span>Request a Free Mockup</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </MagneticWrap>
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/packages"
                  className="btn-editorial w-full sm:w-auto px-7 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm inline-flex items-center justify-center cursor-pointer"
                >
                  <span>View Packages</span>
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 8 INDUSTRIES GRID */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Eight Specialized Platforms
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              Select Your Trade to Explore Industry Features
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              Each industry page breaks down the intake funnels, trust signals, local SEO architecture, and pricing built specifically for that trade.
            </p>
          </div>

          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {INDUSTRIES_DIRECTORY.map((item) => (
              <Link
                key={item.slug}
                to={item.slug}
                data-reveal-item
                className="card-editorial p-7 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-[#9E5249] font-bold">
                      {item.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#827C75] font-medium">
                      {item.tagline}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#141210] group-hover:text-[#9E5249] transition-colors mb-3">
                    {item.trade}
                  </h3>
                  <p className="text-xs text-[#59544E] font-light leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                  <span>View Industry Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-[#D9D0C3]/60">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4">
              Core Contractor &amp; Local SEO Platforms
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ADDITIONAL_PLATFORM_LINKS.map((platform) => (
                <Link
                  key={platform.to}
                  to={platform.to}
                  className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-sm group flex items-center justify-between gap-3"
                >
                  <span className="text-xs md:text-sm font-medium text-[#141210] group-hover:text-[#9E5249] transition-colors">
                    {platform.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2]">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="fade"
            className="bg-[#141210] text-[#FAF6F0] p-10 md:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                Custom Coded • Zero Templates
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Not sure which package fits your company best?
              </h2>
              <p className="text-xs md:text-sm text-[#D9D0C3] font-light leading-relaxed">
                Essential builds start at $1,000 (7-10 business days) and Professional builds start at $1,500. Request a free homepage mockup first—zero obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/contact"
                className="btn-editorial block px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center"
              >
                Get a Free Mockup
              </Link>
              <Link
                to="/our-work"
                className="btn-editorial block px-8 py-3.5 border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm text-center"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
