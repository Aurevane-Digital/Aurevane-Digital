import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const JunkRemovalSeoPage: React.FC = () => {
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';

  const sections: ServiceSection[] = [
    {
      h2: 'Google Business Profile Optimization for Hauling Fleets',
      paragraphs: [
        'For junk removal companies, Google Business Profile is the primary engine driving immediate local dispatches. When a homeowner needs an old couch or hot tub removed before a weekend moving truck arrives, they turn directly to Google Maps and call one of the top three businesses in the map pack.',
        'We configure your profile with precise primary categories, geo-tagged fleet service photos, verified operational hours, and granular service menus. By aligning your profile data with structured website schema, we help your business achieve dominant visibility across Google Maps in your target dispatch territories.',
      ],
      bullets: [
        'Strategic primary and secondary category calibration',
        'Custom service catalog listing specific high-margin pickup items',
        'Territory perimeter definition reflecting actual truck dispatch zones',
        'Direct synchronization between profile details and website schema markup',
      ],
    },
    {
      h2: 'County & Suburb Service-Area Pages That Expand Reach',
      paragraphs: [
        'Operating from a single industrial lot or home dispatch address should not limit your search visibility to one city center. Most high-ticket estate cleanouts and residential cleanouts originate in affluent suburban communities ten to twenty miles away from your headquarters.',
        'We build scalable service-area page structures engineered specifically for local search algorithms. Each suburb landing page features unique community-level service information, local disposal guidelines, and responsive Google Maps embeds, allowing your fleet to capture adjacent county searches without duplicating generic content.',
      ],
      bullets: [
        'Structured county and suburban municipality landing silos',
        'Unique localized copy covering local disposal and recycling rules',
        'Localized customer review showcases and territory dispatch phone triggers',
        'Embedded service area maps clarifying exact zip code perimeters',
      ],
    },
    {
      h2: 'Systematic Review Acquisition Strategy at Job Completion',
      paragraphs: [
        'Customer reviews are the single greatest ranking factor in the Google local map algorithm, as well as the primary trust signal that convinces homeowners to book. A hauling operator with 150 detailed, authentic reviews consistently wins jobs over lower-priced competitors with sparse profiles.',
        'We integrate systematic review collection workflows into your customer touchpoints. By prompting satisfied property owners with direct SMS and email review links immediately upon invoice payment, your business steadily builds unbeatable social proof and algorithmic authority.',
      ],
      bullets: [
        'Automated post-job review request workflows integrated with field CRMs',
        'Direct one-tap Google review link generators that eliminate user friction',
        'Review schema markup highlighting five-star ratings directly in search snippets',
        'Ethical review collection guidelines complying with FTC and Google policies',
      ],
    },
    {
      h2: 'Fast Page Speed, Call Tracking, and Conversion Architecture',
      paragraphs: [
        'Local SEO for junk removal companies is only effective if clicking a search result leads to a booked pickup. If mobile homeowners encounter a sluggish site with broken phone links, your hard-won search rankings produce zero revenue.',
        'Every website we engineer is built for fast load times on mobile cellular connections, paired with dynamic call tracking and dedicated form conversion logging. You receive clear visibility into which search terms, cities, and services produce your highest-margin truckloads.',
      ],
      bullets: [
        'Lightweight semantic code built for fast loading on mobile networks',
        'Call tracking integration to attribute phone leads to specific channels',
        'Google Analytics 4 conversion event logging for quote submissions and calls',
        'High-contrast mobile tap-to-call bars that eliminate booking hesitation',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How does junk removal SEO work alongside website design?',
      a: `A fast, well-structured website is the foundation of local SEO. Our Professional website package starts at ${proPrice} (one-time project fee) and includes multi-city local SEO architecture, Schema.org LocalBusiness markup, and brand positioning—with optional Growth & SEO monthly plans available separately on our packages page.`,
    },
    {
      q: 'How long does it take for a junk removal company to rank on Google Maps?',
      a: 'Initial improvements from Google Business Profile optimization and technical site speed fixes often appear within three to six weeks. Dominating competitive suburban map packs typically requires two to three months of consistent customer reviews and localized service-area authority.',
    },
    {
      q: 'Do you create individual pages for every town in our service territory?',
      a: 'We create structured county and regional suburban hubs tailored to your highest-margin territories. Rather than generating dozens of low-quality doorway pages that search engines penalize, we build substantive, localized pages that genuinely help local homeowners and rank safely.',
    },
    {
      q: 'Can we track how many phone calls and form submissions come from SEO?',
      a: 'Yes. We implement Google Analytics 4 conversion tracking for all click-to-call buttons, quote forms, and booking tools, and can integrate dedicated call tracking numbers to measure exact phone lead volume.',
    },
    {
      q: 'Why is website speed so important for local junk removal search rankings?',
      a: 'Google explicitly incorporates mobile page speed and Core Web Vitals into local rankings. More importantly, urgent junk removal customers frequently abandon websites that take longer than three seconds to load, making speed a direct driver of booked jobs.',
    },
  ];

  const relatedLinks = [
    { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
    { label: 'Website Redesign Services', to: '/website-redesign' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
  ];

  return (
    <ServicePageTemplate
      path="/junk-removal-seo"
      name="Junk Removal SEO"
      h1="Junk Removal SEO That Gets Your Phone Ringing"
      intro="Junk removal SEO for hauling companies: Google Business Profile, service-area pages, reviews and site structure that ranks and converts. Built to keep your trucks on the road."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Junk Removal SEO',
        'Google Business Profile Optimization',
        'Local SEO for Hauling Companies',
        'Service-Area Page Architecture',
        'Local Map Pack Ranking Strategy',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
