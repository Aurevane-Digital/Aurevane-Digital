import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const JunkRemovalPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';

  const sections: ServiceSection[] = [
    {
      h2: 'Frictionless Quote Form with Instant Smartphone Photo Upload',
      paragraphs: [
        'Hauling dispatchers spend hours every day trying to interpret vague customer text messages or attempting to price garage cleanouts blindly over the phone. When customers can quickly snap three photos of their pile on their smartphone and upload them straight into your intake form, quote accuracy skyrockets and dispatch friction disappears.',
        'We engineer custom junk removal quote funnels equipped with native mobile image compression and multi-angle file uploads. Potential clients simply select their pickup timeframe, attach photos directly from their phone camera roll, and receive a prompt, professional estimate without unnecessary back-and-forth phone tag.',
      ],
      bullets: [
        'Direct smartphone camera and camera roll photo attachment fields',
        'Automatic client-side photo compression for instant submission speeds',
        'Detailed item classification tags (heavy items, stairs, disassembly needed)',
        'Immediate notification delivered straight to your operations email or dispatch CRM',
      ],
    },
    {
      h2: 'Online Booking and Automated Dispatch Scheduling',
      paragraphs: [
        'Modern homeowners and busy property managers expect the convenience of booking service appointments online at any hour of the day. If your hauling website only features a generic email link or requires an immediate phone conversation, evening and weekend prospects frequently leave to book with national franchises.',
        'Our online booking systems allow customers to select their preferred arrival window, confirm their exact street address, and review upfront diagnostic terms in a few effortless clicks. Your team maintains full calendar control with buffer times between jobs and designated crew service routes.',
      ],
      bullets: [
        'Selectable two-hour arrival windows calibrated to your daily crew routes',
        'Address validation with Google Maps autocomplete to ensure service perimeter match',
        'Automated booking confirmation and reminder notifications',
        'Flexible reservation options that synchronize with your field dispatch software',
      ],
    },
    {
      h2: 'Interactive Truck-Volume and Upfront Price Estimator',
      paragraphs: [
        'The number one hesitation holding homeowners back from hiring a professional hauling service is fear of unexpected pricing upon arrival. When a website provides an interactive visual truck-bed calculator, customers gain immediate clarity regarding volume increments—from minimum loads and quarter-trucks to half-beds and full sixteen-foot box trucks.',
        'By providing an intuitive volume visualizer, your website qualifies expectations before your truck ever pulls into the driveway. Customers arrive educated on load sizes, eliminating contentious on-site negotiation and establishing your company as a transparent, high-integrity service.',
      ],
      bullets: [
        'Interactive 1/4, 1/2, 3/4, and full truck-bed volume visualizers',
        'Customizable starting rate tiers matching your company fleet specifications',
        'Heavy material surcharge indicators for concrete, tile, dirt, and brick',
        'Integrated quote summary that transfers automatically into booking requests',
      ],
    },
    {
      h2: 'Same-Day Service Messaging That Captures Urgent Hauling Demands',
      paragraphs: [
        'A significant proportion of junk removal calls are urgent: a home sale closing in forty-eight hours, an unexpected eviction turnover, a broken refrigerator blocking a driveway, or urgent HOA violation notices. In these high-intent scenarios, visitors need immediate assurance that your crews are available today.',
        'We position dynamic same-day service messaging and prominent click-to-call triggers across every mobile viewport. Visitors instantly see your operating hours, immediate dispatch availability, and direct telephone hotline without hunting through nested navigation menus.',
      ],
      bullets: [
        'Prominent emergency and same-day dispatch status callout bars',
        'Sticky one-tap mobile calling and SMS dispatch buttons',
        'Fast page speeds engineered to load reliably on cellular signals',
        'Clear payment and credit card acceptance icons to reduce checkout hesitation',
      ],
    },
    {
      h2: 'Distinct Residential vs Commercial Hauling Architectures',
      paragraphs: [
        'The priorities of a residential homeowner clearing out a backyard shed are fundamentally different from an office property manager coordinating a multi-floor corporate decommission or a construction site superintendent requiring scheduled roll-off cleanouts.',
        'Our junk hauling architectures separate residential and commercial services into dedicated navigation hubs. Commercial property managers find tax-deductible invoicing protocols, Certificates of Insurance (COI) download gateways, and recurring account terms, while homeowners enjoy warm, accessible pricing guides and cleanout checklists.',
      ],
      bullets: [
        'Residential service hubs for domestic cleanouts and single-item removals',
        'Commercial portals featuring W-9 forms, COI verification, and net-30 terms',
        'Property manager and real estate turnover priority scheduling agreements',
        'Contractor partnership portals for post-remodel job site sweeps',
      ],
    },
    {
      h2: 'Junk Removal Website Redesign Built for Modern Hauling Companies',
      paragraphs: [
        'Many independent hauling operators started with a quick do-it-yourself website builder or a generic local business theme. While adequate for launching a first truck, those outdated templates load slowly, display blurry photos, and fail to distinguish premium trade haulers from unlicensed operators working with pickup trucks.',
        'A comprehensive junk removal website redesign elevates your brand to compete directly with national franchise networks. We replace cluttered layouts with clean, editorial typography, professional job site photography, and modern intake engineering that projects authority and justifies healthy ticket averages.',
      ],
      bullets: [
        'Complete elimination of slow WordPress plugins and builder bloat',
        'High-resolution fleet galleries showcasing clean, branded dump trucks',
        'Full brand voice polish emphasizing eco-friendly recycling and donation diversion',
        'Complete 100% code ownership with zero ongoing platform licensing fees',
      ],
    },
    {
      h2: 'High-Volume Junk Hauling and Fleet Logistics Platforms',
      paragraphs: [
        'As hauling businesses scale from two trucks to multi-territory fleets, their digital requirements expand. Multiple dispatch locations, localized suburb hubs, and custom webhook connections to compatible operational and dispatch software (scoped separately per project) help prevent operational bottlenecks.',
        'We engineer scalable platforms designed to support multiple dispatch hubs across regional territories. Every location page is built with unique community-level service content, localized Google Maps integration, and dedicated phone tracking numbers to maintain pristine campaign attribution.',
      ],
      bullets: [
        'Scalable multi-territory directory architecture for expanding fleet footprints',
        'Automated webhook bridges connecting inquiries directly to dispatch software',
        'Custom eco-diversion and local donation partnership highlight modules',
        'Schema.org LocalBusiness and Service structured data across all territory pages',
      ],
    },
    {
      h2: 'High-Value Jobs Your Junk Removal Website Should Rank For',
      paragraphs: [
        'Winning consistently in local search requires targeting specific high-intent disposal items that homeowners and property managers actively search for every day. We architect individual service silos and content modules tailored around your highest-margin pickup categories.',
        'Our platforms are structured to naturally capture search demand for furniture removal, residential appliance disposal, mattress recycling, hot tub dismantling and removal, shed demolition and haul-away, full garage cleanouts, basement decluttering, attic cleanouts, comprehensive estate cleanouts, construction debris hauling, electronic waste (e-waste) recycling, commercial tire disposal, and seasonal yard debris cleanups.',
      ],
      bullets: [
        'Furniture removal (sofas, sectionals, dressers, dining tables, armoires)',
        'Appliance recycling (refrigerators, washers, dryers, dishwashers, freezers)',
        'Mattress & box spring eco-friendly disposal and recycling',
        'Light demolition & removal (hot tubs, wooden sheds, playsets, decks)',
        'Full-property cleanouts (garages, basements, attics, foreclosures, estates)',
        'Construction debris & renovation waste removal (drywall, lumber, tile, fixtures)',
        'Specialty items (e-waste recycling, scrap metal, tires, yard waste & tree brush)',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does a custom junk removal website cost?',
      a: `Our website packages are one-time project fees with no mandatory monthly retainer (optional Website Care and Growth & SEO plans are available separately). Our Essential package starts at ${essentialPrice} (delivered in ${essentialTime}) for a mobile-first 3-page custom site, while our flagship Professional package starts at ${proPrice} and includes our interactive scope and volume estimator, multi-city SEO architecture, and full website copywriting. You can view full package details on our packages page.`,
    },
    {
      q: 'Can customers upload photos of their junk pile directly on their phones?',
      a: 'Yes. Our intake forms are optimized for mobile cellular browsers, enabling customers to capture and attach multiple photos of their furniture, appliances, or garage piles directly from their smartphone camera with client-side compression.',
    },
    {
      q: 'How does the interactive truck-volume calculator work for customers?',
      a: 'The visual estimator illustrates fraction-of-bed load sizes (such as 1/4, 1/2, 3/4, or full truck bed) with your client-approved pricing rules. Customers select their estimated volume and see upfront price ranges, establishing trust and qualifying job scopes before dispatch.',
    },
    {
      q: 'Will this website integrate with our dispatch or field management software?',
      a: 'Yes. Inquiries and booking reservations can connect with compatible field management platforms via webhooks, or through our optional CRM Integration & Lead Routing enhancement scoped and quoted per project.',
    },
    {
      q: 'Do you offer redesigns for established junk removal businesses looking to upgrade?',
      a: 'Yes. We specialize in junk removal website redesigns that replace slow WordPress templates or basic DIY builder sites with fast, high-converting platforms engineered to compete with national franchises.',
    },
    {
      q: 'Will our junk removal website rank in Google AI Overviews and ChatGPT?',
      a: 'No agency can guarantee placement in AI overviews or search results. However, we engineer clean semantic code, fast loading speeds, detailed service descriptions, structured FAQs, and complete Schema.org LocalBusiness markup, making it easy for AI engines and search crawlers to recognize, cite, and recommend your junk removal company accurately.',
    },
  ];

  const relatedLinks = [
    { label: 'Excavation Website Design', to: '/excavation-website-design' },
    { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
    { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Junk Removal SEO Guide', to: '/junk-removal-seo' },
    { label: 'Website Redesign Services', to: '/website-redesign' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Cinematic Concept Portfolio', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/junk-removal-website-design"
      name="Junk Removal Website Design"
      h1="Junk Removal Website Design: Photo Quotes to Booked Jobs"
      intro="Junk removal website design with instant quote forms, photo upload and online booking. Built for junk hauling companies across the United States seeking more calls and booked jobs."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Junk Removal Website Design',
        'Junk Hauling Web Development',
        'Truck Volume Estimator Tools',
        'Hauling Company Website Redesign',
        'Cleanout & Debris Removal SEO',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
