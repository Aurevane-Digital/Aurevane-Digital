import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const HomeServicesPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';

  const sections: ServiceSection[] = [
    {
      h2: 'Local Service Business Website Design That Drives Urgent Phone Calls',
      paragraphs: [
        'When a homeowner experiences a burst pipe, a failing furnace during winter, or a damaged garage door spring, they do not read through dozens of marketing paragraphs. They pull out their smartphone, search for a reputable technician nearby, and choose the business that communicates immediate reliability, verified safety credentials, and an unmissable phone number.',
        'At Aurevane Digital, our local service business website design focuses squarely on consumer psychology and urgency. We strip away bloated animations and cumbersome navigation, engineering clean, high-speed interfaces that enable residential and commercial property owners to place emergency calls or submit service requests within seconds.',
      ],
      bullets: [
        'Prominent, persistent click-to-call bars optimized for one-thumb mobile tapping',
        'Immediate emergency dispatch badges signaling same-day readiness',
        'Fast, reliable load times that keep urgent homeowners from clicking back to Google',
        'Transparent upfront fee guidelines that build instant trust with new customers',
      ],
    },
    {
      h2: 'Dedicated Architectural Hubs for Every Home Maintenance Discipline',
      paragraphs: [
        'Home service companies frequently outgrow single-page brochures as they expand into multiple specialized crews and adjacent territories. A generic site grouping twenty distinct offerings onto one page dilutes search relevance and confuses potential clients who want specialized assurance.',
        'We build structured, dedicated service hubs for each trade discipline. Our platforms power plumbing, HVAC, electrical, landscaping, lawn care, tree service, pest control, residential cleaning, exterior pressure washing, gutter cleaning and installation, overhead garage door repair, commercial locksmithing, local moving, disaster restoration, and foundation repair websites across the nation.',
      ],
      bullets: [
        'Plumbing & drain repair hubs with live emergency dispatch forms',
        'HVAC heating and AC seasonal maintenance tune-up scheduling pages',
        'Electrician and switchgear panel replacement estimation flows',
        'Landscaping, lawn care, and tree service seasonal contract funnels',
        'Pressure washing, gutter guards, garage doors, and residential cleaning pages',
      ],
    },
    {
      h2: 'Mobile Friction Elimination & Direct Scheduling Workflows',
      paragraphs: [
        'More than eighty percent of home service website visits occur on mobile cellular connections. If your inquiry form requires typing extensive paragraphs or scrolling through broken dropdowns, potential customers immediately bounce to your closest competitor.',
        'We engineer frictionless scheduling funnels specifically for residential customers. With touch-friendly calendar selectors, smart address autocomplete, and simple photo-upload fields, homeowners can describe their repair needs effortlessly while standing directly in front of the issue.',
      ],
      bullets: [
        'Touch-calibrated scheduling selectors for routine service windows',
        'Instant photo and video upload for fast remote repair assessments',
        'Direct integration with dispatch and routing CRM platforms',
        'Automated confirmation notifications sent to customers upon receipt',
      ],
    },
    {
      h2: 'Multi-County Territory Coverage & Verified Review Highlights',
      paragraphs: [
        'High-value homeowners in affluent suburban subdivisions want reassurance that technicians are licensed, background-checked, and regularly working in their exact neighborhood. We construct multi-county service area directories backed by interactive Google Maps embeds and localized customer testimonial feeds.',
        'By organizing your coverage into structured community hubs, your business establishes clear local relevance for neighborhood searches while demonstrating the scale and capacity required to handle regional commercial facilities.',
      ],
      bullets: [
        'Structured county and suburban municipality landing silos',
        'Verified Google Business Profile review embeds at key decision points',
        'Clear proof of insurance, bonding, and state trade licensing credentials',
        '100% clean custom codebase owned entirely by your business upon completion',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does a home services website design package cost?',
      a: `We offer one-time project pricing with no mandatory monthly retainer (optional Website Care and Growth & SEO plans are available separately). Our Essential package starts at ${essentialPrice} (delivered in ${essentialTime}) for a mobile-first 3-page foundation, while our Professional platform starts at ${proPrice} and includes multi-city SEO architecture, custom scope estimators, and full website copywriting. Review our full deliverables on our packages page.`,
    },
    {
      q: 'How quickly can homeowners schedule emergency or routine calls through the website?',
      a: 'Immediately. We build persistent click-to-call headers, tap-to-SMS buttons, and responsive 2-step appointment intake forms that allow mobile visitors to initiate contact in less than fifteen seconds without friction.',
    },
    {
      q: 'Can our website handle multiple service territories across different counties?',
      a: 'Yes. Our architectures support structured regional and suburban service-area hubs, allowing your company to expand ranking and booking coverage into surrounding affluent zip codes without creating duplicate content.',
    },
    {
      q: 'Are your websites built on WordPress themes or proprietary website builder platforms?',
      a: 'Neither. We build modern, lightweight static React and TypeScript architectures engineered for fast performance, minimal third-party maintenance dependencies, and full 100% client code ownership upon project completion.',
    },
    {
      q: 'How does the website showcase customer reviews and trade licenses?',
      a: 'We embed authentic review feeds directly from your Google Business Profile and display prominent trust badges for state licensing, bonding, insurance, and manufacturer certifications directly alongside booking triggers.',
    },
    {
      q: 'Will our home services company appear in ChatGPT or Google AI Overviews?',
      a: 'No web agency can guarantee specific inclusion in AI-generated answers or search engine algorithms. What we focus on is building clean semantic code, comprehensive service FAQs, accurate Schema.org LocalBusiness markup, and fast, reliable load times that provide search crawlers and AI models with the precise, structured data needed to recommend your business.',
    },
  ];

  const relatedLinks = [
    { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
    { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
    { label: 'Junk Removal SEO', to: '/junk-removal-seo' },
    { label: 'Website Redesign', to: '/website-redesign' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/home-services-website-design"
      name="Home Services Website Design"
      h1="Home Services Website Design That Fills Your Calendar"
      intro="Custom digital platforms built for home service and trade companies across the United States. Designed to turn mobile visitors into immediate phone calls, qualified quote requests, and booked service appointments."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Home Services Website Design',
        'Plumbing Website Development',
        'HVAC Contractor Web Design',
        'Electrician Website Design',
        'Local Service Business Web Design',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
