import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const WebsiteRedesignPage: React.FC = () => {
  const starterPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';

  const sections: ServiceSection[] = [
    {
      h2: 'Purpose-Built Redesigns for Contractors, Home Services, and Junk Removal',
      paragraphs: [
        'Many service businesses are trapped with an outdated website built years ago on bloated page builders, cluttered with broken plugins, stock photos, and confusing navigation. When potential customers visit on their smartphones, they struggle to locate phone numbers, wait endlessly for pages to load, and click away to a competitor.',
        'We engineer complete website redesigns specifically for trade contractors, residential home service providers, and junk removal operators across the United States. We replace fragile legacy platforms with modern, ultra-fast custom code that presents your business with authority, clarifies your service areas, and guides property owners straight into requesting an estimate or booking a dispatch.',
      ],
      bullets: [
        'Tailored layouts for general contractors, remodelers, roofers, plumbers, and haulers',
        'Mobile-first interface redesign prioritizing immediate tap-to-call and quote requests',
        'Modern brand presentation showcasing your real project photos and team capabilities',
        'Streamlined service menus eliminating customer confusion and decision fatigue',
      ],
    },
    {
      h2: 'Seamless SEO Migration Without Losing Your Existing Rankings',
      paragraphs: [
        'The greatest fear when redesigning an established trade website is forfeiting organic search positions and Google Business Profile authority built up over years of operation. Careless rebuilds that alter URL paths without careful planning can erase high-ranking pages overnight.',
        'Our migration process safeguards your established organic equity from day one. We audit your existing site architecture, preserve high-performing URL structures, configure comprehensive 301 redirect maps for every legacy page, and upgrade your on-page Schema.org structured data so search engines immediately recognize and reward the enhanced performance.',
      ],
      bullets: [
        'Comprehensive crawl and inventory of all existing indexed URLs and backlinks',
        'Strict 1-to-1 301 redirect mapping to prevent broken bookmarks and 404 crawl errors',
        'Preservation of core metadata, search intent keywords, and ranking service silos',
        'Upgraded JSON-LD LocalBusiness and Service schema markup across all pages',
      ],
    },
    {
      h2: 'Speed Optimization and Perfect Core Web Vitals',
      paragraphs: [
        'Outdated WordPress themes, unoptimized plugins, and heavy video backgrounds drag load times down to five, eight, or even ten seconds on cellular connections. Mobile homeowners looking for urgent emergency repairs or quick hauling quotes will not wait.',
        'We rebuild your website using lightweight, static-optimized code free from bulky CMS dependencies and fragile third-party plugins. By delivering modern image formats, streamlined CSS, and instantaneous asset delivery, every redesigned page achieves sub-second load times and passing scores across Google Core Web Vitals.',
      ],
      bullets: [
        'Sub-second first contentful paint on mobile 4G and 5G cellular networks',
        'Elimination of vulnerable third-party plugins, databases, and bloated page builders',
        'Next-generation WebP and AVIF image compression with responsive srcset delivery',
        'Zero layout shifts, delivering a stable and smooth browsing experience on touchscreens',
      ],
    },
    {
      h2: 'Conversion-Rate Optimization and Mobile Intake Funnels',
      paragraphs: [
        'A website redesign should do far more than look clean—it must systematically convert casual website traffic into booked bids and scheduled appointments. We analyze customer behavior patterns to position high-intent conversion triggers exactly where mobile prospects expect them.',
        'Every redesigned site features persistent tap-to-call bars, frictionless multi-step estimate request forms, transparent scope explanations, and interactive territory maps. We remove every point of friction between a homeowner discovering your business and requesting an estimate.',
      ],
      bullets: [
        'Persistent sticky mobile contact headers with one-touch phone dispatch dialing',
        'Simple, multi-field estimate request forms that gather project details without overwhelm',
        'Prominent placement of licensed, insured, and verified trade credential badges',
        'Strategic customer testimonial and before-and-after project showcase integration',
      ],
    },
    {
      h2: 'Reliable Hosting, Ongoing Maintenance, and 100% Code Ownership',
      paragraphs: [
        'Many agency redesigns lock contractors into restrictive proprietary website builders with ongoing monthly platform ransom fees, where you lose your entire site the moment you cancel. We reject that business model entirely.',
        'With Aurevane Digital, you retain 100% ownership of your website source code, visual assets, and content. We deploy your site on global cloud infrastructure that eliminates traditional database security vulnerabilities and server downtime, and we provide transparent ongoing maintenance whenever you want to add new service lines.',
      ],
      bullets: [
        'Full ownership of all custom code, assets, and project files with zero vendor lock-in',
        'High-availability global edge hosting with automatic SSL certificates and 99.9% uptime',
        'Protection against database hacks, theme vulnerabilities, and malware injections',
        'Hassle-free routine updates for new service offerings, project galleries, and territory expansions',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Will redesigning our service website cause us to lose our Google rankings?',
      a: 'Not with our migration protocol. We inventory every existing indexed page, preserve high-ranking URL paths, configure comprehensive 301 redirects, and maintain on-page keyword relevance. In most cases, the drastic improvement in mobile speed and structured schema helps rankings improve after launch.',
    },
    {
      q: 'How much does a complete website redesign cost?',
      a: `Our website redesign packages are completely transparent. Our Starter package begins at ${starterPrice} for essential high-converting local service sites, while our Professional package at ${proPrice} includes multi-page service territory silos and advanced SEO architecture. You can compare full package details on our packages page.`,
    },
    {
      q: 'How long does a typical contractor website redesign take?',
      a: 'Most website redesigns are engineered, reviewed, and deployed within two to three weeks once project details and brand assets are collected. We work efficiently to minimize any downtime or disruption to your daily operations.',
    },
    {
      q: 'Do we own the website after the redesign is finished?',
      a: 'Yes, absolutely. You receive complete, 100% ownership of your source code, design assets, and content. We never hold your website hostage or lock you into proprietary website builder subscriptions.',
    },
    {
      q: 'What do we need to provide before you begin our redesign?',
      a: 'We only need your current website address, your logo, high-resolution photos of recent jobs or equipment, and a list of your primary service offerings and service areas. If you lack photos or need help with copy, we assist in organizing your content.',
    },
  ];

  const relatedLinks = [
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
    { label: 'Junk Removal SEO', to: '/junk-removal-seo' },
    { label: 'Website Packages & Pricing', to: '/packages' },
  ];

  return (
    <ServicePageTemplate
      path="/website-redesign"
      name="Website Redesign"
      h1="Website Redesign for Service Businesses"
      intro="Website redesign for contractors, home-service and junk removal companies. Faster, mobile-first, conversion-focused rebuilds without losing your rankings."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Website Redesign',
        'Contractor Website Redesign',
        'Home Services Website Rebuild',
        'SEO Migration & Preservation',
        'Speed & Core Web Vitals Optimization',
        'Conversion Rate Optimization',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
