import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const PlumbingHvacPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Mobile-First Plumbing and HVAC Websites Engineered for Immediate Dispatch',
      paragraphs: [
        'When a basement water heater bursts at 6 AM or an air conditioner stops cooling during a July heatwave, homeowners do not read paragraphs of company history on a desktop screen. They open Google on their smartphone and tap the cleanest, fastest local mechanical contractor that clearly services their neighborhood.',
        'At Aurevane Digital, we build lightweight, mobile-first plumbing and HVAC websites that load fast over cellular networks, display clear license and insurance badges immediately, and keep emergency calling effortless on every screen size.',
      ],
      bullets: [
        'Mobile-first architecture with large, legible tap targets and clean service categorization',
        'Clear separation of plumbing repairs, drain/sewer work, heating, cooling, and indoor air quality',
        'Visible trust badge slots for state master mechanical/plumbing licenses, insurance, and bonding',
        'Fast static code eliminating sluggish pop-up bloat when homeowners need urgent help',
      ],
    },
    {
      h2: 'Emergency Tap-to-Call Dispatch vs. Planned System Replacement Quotes',
      paragraphs: [
        'Mechanical and plumbing contractors generate revenue across two completely different urgencies: immediate emergency service calls (burst pipes, sewer backups, no-heat furnaces, failed condensers) and planned system upgrades (heat pump conversions, high-efficiency boilers, whole-home repiping, ductwork, or commercial RTU replacements).',
        'Our page architecture serves both buyer journeys without conflict. Urgent callers get high-contrast tap-to-call buttons anchored prominently above the fold on mobile, while homeowners shopping planned system replacements or second-opinion estimates use a structured quote-request path capturing system age, fuel type, home size, and preferred appointment window.',
      ],
      bullets: [
        'Instant tap-to-call emergency dispatch triggers positioned prominently on mobile and desktop headers',
        'Guided quote-request funnel for HVAC replacements, tankless water heaters, and sewer line projects',
        'Optional equipment nameplate or utility room photo upload so technicians arrive prepared',
        'Structured preventive maintenance membership and seasonal tune-up request workflows',
      ],
    },
    {
      h2: 'Before-and-After Mechanical Room & Installation Project Galleries',
      paragraphs: [
        'Homeowners and commercial facility managers rarely understand hidden ductwork math, but they recognize tidy craftsmanship immediately. Comparing a tangled, corroded old boiler room against crisp copper manifolds, leveled condenser pads, and neatly labeled shutoff valves builds instant authority.',
        'We build structured before-and-after installation galleries showcasing clean mechanical rooms, spotless crawlspace repipes, ductless mini-split line-set hides, and commercial rooftop units—giving customers tangible proof of quality before a technician rings the doorbell.',
      ],
      bullets: [
        'Before-and-after transformation cards highlighting clean copper piping, venting, and manifold work',
        'Categorized showcases for water heaters, boilers, heat pumps, air handlers, and sewer replacements',
        'Project context notes detailing efficiency upgrades, code compliance, and clean job-site protection',
        'Built-in estimate CTAs turning visual inspection into booked comfort consultations',
      ],
    },
    {
      h2: 'Local SEO Architecture Across Service Areas, Suburbs, and Equipment Types',
      paragraphs: [
        'Ranking in the Google Map Pack for competitive plumbing and HVAC keywords requires more than a single generic services list. Search engines reward clear topical depth paired with authentic local territory signals.',
        'We structure dedicated service hubs covering drain cleaning, water heaters, repiping, furnace repair, AC installation, and heat pumps alongside unique municipal and county service-area pages, Schema.org Service and FAQPage JSON-LD markup, and verified Google review highlights.',
      ],
      bullets: [
        'Clean URL silos separating emergency plumbing, drain/sewer, heating, cooling, and commercial HVAC',
        'Dedicated county and suburban service-area pages tailored to regional climates and housing stock',
        'Schema.org Service, LocalBusiness, and FAQPage structured data across every service route',
        'Consistent NAP formatting and call-tracking compatibility for clear marketing attribution',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How does your plumbing and HVAC website design handle emergency calls vs. replacement quotes?',
      a: 'We place prominent tap-to-call triggers right at the top of mobile and desktop screens for burst pipes, drain backups, and heating/cooling outages, while directing planned HVAC replacements, tankless upgrades, and repiping buyers into a structured quote-request funnel.',
    },
    {
      q: 'Why include a before-and-after project gallery on a plumbing or HVAC site?',
      a: 'Clean copper manifolds, straight venting, neat condensate drainage, and tidy mechanical rooms visually prove workmanship in ways generic manufacturer logos cannot—helping convert homeowners comparing higher-ticket system replacement bids.',
    },
    {
      q: 'What is the investment and timeline for a plumbing and HVAC contractor website?',
      a: `Every project uses one-time pricing with no mandatory monthly retainer. Our Essential build starts at ${essentialPrice} (${essentialTime.toLowerCase()}), and our flagship Professional build starts at ${proPrice} (${proTime.toLowerCase()}) including multi-city local SEO structure, custom quote intake tools, and copywriting.`,
    },
    {
      q: 'Do we keep complete ownership of our domain, codebase, and customer leads?',
      a: 'Yes. You own 100% of your website domain, source code, content, and every inbound call or quote lead without lock-in contracts or proprietary platform fees.',
    },
  ];

  const relatedLinks = [
    { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/plumbing-hvac-website-design"
      name="Plumbing & HVAC Website Design"
      h1="Plumbing & HVAC Website Design Built for Urgent Dispatch and Replacements"
      intro="Mobile-first websites for plumbing, heating, and cooling contractors across the United States—combining emergency tap-to-call paths, planned system quote funnels, before-and-after installation galleries, and local SEO structure."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Plumbing Website Design',
        'HVAC Contractor Website Design',
        'Emergency Dispatch & Quote Funnels',
        'Local SEO for Plumbing & HVAC Companies',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
