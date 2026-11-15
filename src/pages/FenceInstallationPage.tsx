import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const FenceInstallationPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Mobile-First Fence Contractor Websites Designed for Property Owners',
      paragraphs: [
        'Homeowners researching cedar privacy panels, ornamental aluminum perimeter fencing, or commercial chain-link security barriers usually compare two or three local installers right from their phone in the backyard. If a fence contractor website is slow, cluttered, or hides basic material options behind outdated menus, prospects move on to the next installer.',
        'We engineer lightweight, mobile-first websites tailored specifically to fence and gate companies—organizing your residential and commercial capabilities cleanly so property owners can review styles, confirm territory coverage, and reach your team in seconds.',
      ],
      bullets: [
        'Clean mobile layout highlighting wood, vinyl, ornamental aluminum, steel, and chain-link fencing',
        'Clear gate automation and access-control service sections for residential and commercial sites',
        'Fast image delivery showcasing clean post alignment, hardware, and finished fencelines',
        'Prominent placeholder badges for contractor licensing, liability coverage, and workmanship warranties',
      ],
    },
    {
      h2: 'Emergency Repair Calls and Planned Fence Installation Quote Funnels',
      paragraphs: [
        'Fence businesses handle two distinct incoming requests every week: urgent security and storm-damaged fence calls where a homeowner has pets at risk or a commercial yard gate is stuck open, alongside planned full-perimeter installations that require utility locates, HOA approvals, and linear-footage estimates.',
        'Our fence installation websites separate both paths clearly. Mobile visitors facing downed panels or breached commercial gates get an immediate tap-to-call button above the fold, while planned buyers use a guided quote-request path capturing material preference, approximate linear footage, gate count, and property photos.',
      ],
      bullets: [
        'High-visibility tap-to-call path for storm-damaged panels, fallen posts, and gate repairs',
        'Planned quote-request workflow capturing preferred fence style, height, linear feet, and slope notes',
        'Optional property survey and backyard photo upload to reduce wasted initial site visits',
        'Dedicated commercial perimeter, farm/ranch, and multi-family HOA bid intake forms',
      ],
    },
    {
      h2: 'Before-and-After Project Galleries Organized by Fence Style and Material',
      paragraphs: [
        'Fencing is a highly visual exterior upgrade where straight top rails, uniform picket spacing, sloped grade stepping, and clean concrete footings immediately separate craftsmen from low-bid crews. Homeowners want to see finished yards that look like their own property before scheduling an on-site measurement.',
        'We build fast, filterable before-and-after project galleries grouped by material and application—pairing weathered, leaning old fencelines against freshly set privacy wood, black aluminum pool enclosures, or vinyl ranch rails so prospects can picture the finished transformation.',
      ],
      bullets: [
        'Side-by-side before-and-after project views highlighting old fence tear-out and new installation',
        'Category filtering across board-on-board cedar, vinyl privacy, ornamental steel, and farm fencing',
        'Technical captions noting post depth, steel post upgrades, and gate hardware specifications',
        'Direct estimate prompts connecting every gallery card to your quote funnel',
      ],
    },
    {
      h2: 'Local SEO Architecture Built Around Counties, Subdivisions, and Permits',
      paragraphs: [
        'Fence installation demand concentrates heavily in growing suburbs, new-construction subdivisions, and pool-permit neighborhoods. Generic one-page websites rarely rank across adjacent towns outside your shop zip code.',
        'We build structured local SEO foundations pairing dedicated fence-type pages with unique county and municipal service-area pages—referencing HOA guidelines, frost-line post depths, and local service borders alongside clean Schema.org Service and FAQPage markup.',
      ],
      bullets: [
        'Individual service pages targeting wood, vinyl, aluminum, chain-link, and gate installation',
        'Regional city and county hubs designed to capture surrounding suburban search demand',
        'Structured Schema.org Service, LocalBusiness, and FAQPage JSON-LD metadata',
        'Full Google Business Profile alignment and authentic customer review display sections',
      ],
    },
  ];

  const faqs = [
    {
      q: 'What features help a fence installation website generate better-qualified quotes?',
      a: 'Combining a clear tap-to-call button for urgent storm or gate repairs with a structured quote-request form that asks for material preference, approximate linear footage, number of gates, and optional yard photos pre-qualifies leads before your estimator drives out.',
    },
    {
      q: 'Can our website showcase different fence styles with before-and-after photos?',
      a: 'Yes. We organize dedicated before-and-after project galleries by fence material—such as cedar privacy, vinyl, ornamental aluminum, and commercial chain-link—complete with brief project specs and direct quote calls to action.',
    },
    {
      q: 'How long does it take to launch a fence company website and what does it cost?',
      a: `Project pricing is a one-time fee with no mandatory monthly retainer. Our Essential package starts at ${essentialPrice} (${essentialTime.toLowerCase()}), while our Professional package starts at ${proPrice} (${proTime.toLowerCase()}) and includes custom quote calculators, multi-city SEO pages, and full copywriting.`,
    },
    {
      q: 'Do we keep full ownership of our domain, code, and incoming fence leads?',
      a: 'Yes. Every website we deliver gives you 100% ownership of the domain, custom codebase, photography assets, and direct lead routing with zero lock-in contracts or per-lead charges.',
    },
  ];

  const relatedLinks = [
    { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/fence-installation-website-design"
      name="Fence Installation Website Design"
      h1="Fence Installation Website Design That Turns Yard Searches Into Estimates"
      intro="Custom mobile-first websites for residential and commercial fence contractors across the United States—built with emergency repair tap-to-call paths, linear-footage quote requests, before-and-after fenceline galleries, and local SEO structure."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Fence Installation Website Design',
        'Fence Contractor Web Development',
        'Linear Footage Quote Funnels',
        'Local SEO for Fence Companies',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
