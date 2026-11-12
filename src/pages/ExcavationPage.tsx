import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const ExcavationPage: React.FC = () => {
  const starterPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const starterTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '10 to 14 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Bid Request Forms Engineered for Site Prep and Earthwork Scope',
      paragraphs: [
        'Commercial estimators, home builders, and property developers do not want to fill out vague generic contact forms when planning site work. A high-converting excavation contractor website design requires an intake form built specifically around job-site details: exact parcel address, project acreage, scope requirements, target start date, and blueprint uploads.',
        'We engineer specialized civil bid intake forms that allow developers and general contractors to attach civil grading plans, soil reports, and site photos directly from their desktops or phones. By collecting essential scope variables up front, your estimating team spends less time on exploratory phone calls and more time delivering accurate, profitable bids.',
      ],
      bullets: [
        'Dedicated plan upload fields supporting PDF engineering prints and site aerials',
        'Granular scope selectors for site preparation, grading, trenching, and land clearing',
        'Target start date and project completion timeline inputs to qualify urgency',
        'Direct email and webhook routing straight to your estimating desk or CRM',
      ],
    },
    {
      h2: 'Heavy Equipment Portfolio and Job Capacity Showcases',
      paragraphs: [
        'Project owners and municipal procurement managers need instant visual confirmation that your company has the iron, tonnage, and operator capacity required for their specific job. An excavation lead generation website must prominently showcase your real fleet in action on real job sites.',
        'We build structured project galleries organized by discipline: commercial site preparation, selective land clearing, precision GPS grading, utility excavation, septic excavation, and structural demolition. High-resolution imagery of your excavators, bulldozers, and wheel loaders provides undeniable proof of operational capability.',
      ],
      bullets: [
        'Discipline-specific galleries for site preparation, grading, and utility trenching',
        'Equipment inventory displays listing machine tonnages, bucket sizes, and GPS tech',
        'Before-and-after transformations of rough acreage into build-ready pads',
        'Clean photo categorization distinguishing residential driveways from commercial civil jobs',
      ],
    },
    {
      h2: 'Credentials, Bonding, and Safety Standards Commercial Estimators Seek',
      paragraphs: [
        'When general contractors vet a heavy equipment contractor for multi-phase commercial or subdivision work, compliance credentials are non-negotiable. If your current website buries your state licensing, bonding capacity, or insurance coverage, risk-conscious estimators will move down their bid list.',
        'We position your genuine trade credentials—state contractor license numbers, active general liability limits, commercial bonding capacity, and OSHA safety compliance—in prominent credential badges directly alongside bid intake triggers. Only the contractor’s own real accreditations are displayed, establishing undeniable institutional legitimacy.',
      ],
      bullets: [
        'Prominent placement of state contractor license numbers and registration data',
        'Clear verification of general liability insurance limits and commercial bonding',
        'OSHA compliance badges and operator safety protocol callouts',
        'Prequalification document download links for commercial general contractors',
      ],
    },
    {
      h2: 'Regional Service-Area and Civil Project-Type Silos',
      paragraphs: [
        'Excavating contractors frequently haul equipment across three or four adjacent counties, but standard websites often rank only for their home dispatch shop. Modern web design for excavating must feature structured service-area pages engineered to capture high-value commercial and residential searches across your entire operating territory.',
        'We build targeted regional landing pages highlighting specific county jurisdictions, municipal soil conditions, regional quarry proximity, and local permit procedures. These dedicated hubs help your business capture searches for septic excavation, commercial pad grading, and land clearing in surrounding growth corridors.',
      ],
      bullets: [
        'Dedicated county and township landing hubs highlighting active service territories',
        'Localized project highlights reflecting regional soil types and rock excavation needs',
        'Interactive service area perimeters showing standard equipment mobilization zones',
        'Local SEO schema mapping linking regional hubs with your Google Business Profile',
      ],
    },
    {
      h2: 'Sub-Second Speed on Remote Job-Site Mobile Connections',
      paragraphs: [
        'Site superintendents, project managers, and utility foreman frequently search for emergency trenching or subgrade repair while standing in muddy work boots on an active parcel with poor cellular reception. If an excavation contractor website design takes seven seconds to load heavy video backgrounds, superintendents immediately tap back to search results.',
        'We build ultra-fast, lightweight websites that load in less than one second, even on remote cellular connections. Persistent, high-contrast click-to-call buttons ensure that general contractors can reach your operations team with a single tap from any field device.',
      ],
      bullets: [
        'Lightweight semantic code loading in less than one second on mobile networks',
        'Persistent sticky mobile contact bar featuring immediate click-to-call dialing',
        'Zero bloated WordPress plugins or heavy external page-builder dependencies',
        'Optimized WebP image delivery that preserves crisp detail while saving mobile data',
      ],
    },
    {
      h2: 'Trade-Specific Service Pages That Eliminate Confusion',
      paragraphs: [
        'Lumping all earthwork capabilities onto a single generic services page dilutes your search relevance and confuses potential clients. A homeowner seeking driveway grading has completely different questions than a utility contractor seeking deep mainline trenching or a developer needing mass site preparation.',
        'Our excavation lead generation website systems provide dedicated, content-rich pages for every core discipline your crews handle. Each individual service page explains your equipment methods, typical project phases, and local regulations, providing the detailed technical reassurance high-ticket clients require.',
      ],
      bullets: [
        'Independent service silos for land clearing, grading, and utility excavation',
        'Granular technical breakdowns covering compaction testing, cut-and-fill, and laser grading',
        'Clear distinction between residential earthworks and commercial civil contracts',
        'Direct quote intake forms matched to each specific earthwork service',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does a custom excavation website design cost?',
      a: `Our excavation contractor website design packages are fully transparent. Our Starter package is priced at ${starterPrice} (delivered in ${starterTime}), and our flagship Professional package with multi-page service-area siloing and custom quote tools is priced at ${proPrice} (delivered in ${proTime}). You can review all deliverables on our packages page.`,
    },
    {
      q: 'Which pages should an excavation contractor website include?',
      a: 'A high-performing excavation website should include dedicated pages for core services (site preparation, land clearing, grading, utility excavation, and septic systems), an equipment and capacity portfolio, a detailed commercial bid request form, about/safety credentials, and localized service-area pages covering your target counties.',
    },
    {
      q: 'How can an excavation contractor website get more bid requests?',
      a: 'To attract qualified bid requests, web design for excavating must eliminate intake friction. Replacing generic text boxes with an intuitive form that accepts blueprint uploads, specifies acreage, and asks for project timelines gives commercial estimators the confidence to submit plans.',
    },
    {
      q: 'Can our website display our real equipment fleet and licensing credentials?',
      a: 'Yes, absolutely. We encourage showcasing your actual excavators, dozers, and haul trucks, along with your official state license numbers and commercial bonding capacity. Highlighting real assets builds immediate credibility with developers and project owners.',
    },
    {
      q: 'Can we move from our old website to a new site without losing Google rankings?',
      a: 'Yes. Our website redesign protocol includes careful 1-to-1 301 redirect mapping, preserving existing high-performing URLs, and carrying forward established domain authority while dramatically upgrading speed and mobile responsiveness. Learn more on our website redesign page.',
    },
    {
      q: 'Will my website show up in ChatGPT, Perplexity or Google AI Overviews?',
      a: 'Nobody can guarantee placement in AI answers or in Google search results. However, we engineer clean, fast pages with clear service descriptions, detailed FAQs, structured Schema.org data, and consistent business information, which helps search engine algorithms and generative AI tools accurately understand and cite your business.',
    },
  ];

  const relatedLinks = [
    { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Website Redesign', to: '/website-redesign' },
    { label: 'Packages', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/excavation-website-design"
      name="Excavation Website Design"
      h1="Excavation Website Design That Brings In Bid Requests"
      intro="Fast, mobile-first websites for excavating, grading, land clearing and site-prep contractors across the United States, built around bid requests, project proof and service areas."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Excavation website design',
        'Excavation contractor website development',
        'Land clearing website design',
        'Grading contractor website design',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
