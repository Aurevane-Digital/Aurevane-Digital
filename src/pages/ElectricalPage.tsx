import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const ElectricalPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Direct Service-Call Booking and Urgent Emergency Dispatch Triggers',
      paragraphs: [
        'When a circuit breaker trips continuously, a storm knocks out primary service, or a commercial kitchen loses refrigeration power, clients need immediate electrical assistance. High-performing electrician website design prioritizes immediate communication, allowing homeowners and business managers to book arrival windows or reach on-call master electricians with zero delay.',
        'We engineer frictionless scheduling interfaces featuring prominent emergency call-out banners and real-time online appointment requests. By placing persistent click-to-call bars on every mobile viewport, your electrical service company website design ensures that urgent inquiries turn into confirmed dispatches instead of lost opportunities.',
      ],
      bullets: [
        'High-contrast emergency service status banners indicating active crew availability',
        'Persistent sticky mobile tap-to-call bars that connect directly with dispatch dispatchers',
        'Streamlined two-minute service call booking forms with address auto-completion',
        'Automated SMS notifications alerting on-call technicians the second an urgent request arrives',
      ],
    },
    {
      h2: 'Prominent State Electrical Licensing and Commercial Insurance Badges',
      paragraphs: [
        'Electrical work carries severe fire and life-safety risks. Savvy property owners and general contractors will never hire an unverified contractor to open a main distribution panel. Professional electrical web design establishes trust by prominently featuring the contractor’s own verified master electrician license numbers and commercial liability insurance credentials.',
        'We position your genuine trade credentials—state master and journeyman license numbers, bond verification, and commercial coverage limits—right alongside service booking forms and telephone triggers. Highlighting only the contractor’s own real accreditations gives discerning clients the confidence to approve work without hesitation.',
      ],
      bullets: [
        'Prominent placement of state electrical contractor and master license numbers',
        'Verified commercial general liability insurance and bonding credential badges',
        'OSHA safety compliance notes and continuing trade education callouts',
        'Visible assurance of permitted, code-compliant workmanship adhering to the NEC',
      ],
    },
    {
      h2: 'Dedicated Landing Silos for Every High-Margin Electrical Service',
      paragraphs: [
        'Grouping residential panel upgrades, whole-home rewiring, EV charger installations, and commercial tenant improvements onto a single cluttered page damages search engine rankings. Modern websites for electricians require dedicated, content-rich pages for each distinct specialty to maximize local search relevance.',
        'We build structured service silos for residential 200-amp panel upgrades, Level 2 EV charging stations, architectural lighting, standby generator hookups, and commercial electrical maintenance. Each page answers common homeowner concerns, explains local permitting, and routes visitors into a dedicated quote intake.',
      ],
      bullets: [
        'Dedicated service pages for panel upgrades, EV chargers, generators, and lighting',
        'Clear educational breakdowns covering residential code upgrades and amp requirements',
        'Transparent scope outlines detailing permit acquisition and municipal inspection stages',
        'Direct quote requests tailored to each specific electrical service offering',
      ],
    },
    {
      h2: 'Structured Commercial Bid Intake and Tenant Improvement RFPs',
      paragraphs: [
        'Commercial general contractors, retail build-out managers, and property managers require detailed technical documentation when requesting estimates. An electrical contractor website for bid requests must provide a structured intake channel for commercial plans, electrical drawings, and scope specifications.',
        'Our commercial intake funnels allow general contractors to specify square footage, phase requirements, voltage specs, and attach engineering prints. This streamlined pipeline establishes your firm as a capable commercial subcontractor ready for complex electrical tenders.',
      ],
      bullets: [
        'Commercial RFP submission portal supporting multi-page blueprint and specification uploads',
        'Structured scope checklists covering switchgear, lighting retrofits, and 3-phase power',
        'Direct routing into your commercial estimating queue with automated receipt confirmation',
        'Showcase of commercial tenant improvements, industrial warehouses, and retail projects',
      ],
    },
    {
      h2: 'Authentic Customer Reviews and Local Neighborhood Social Proof',
      paragraphs: [
        'Inviting an electrician into a private home or busy commercial facility requires personal trust. Property owners look for reassurance that your electricians are punctual, respect finished flooring, communicate clearly, and charge honest code-compliant rates.',
        'We integrate authentic customer feedback directly from your Google Business Profile and local trade directories. By presenting verified local reviews alongside actual job-site photos of clean panel wiring and elegant lighting fixtures, your electrical contractor marketing website transforms casual visitors into loyal repeat customers.',
      ],
      bullets: [
        'Automated synchronization of authentic 5-star Google Business Profile customer reviews',
        'High-resolution project gallery showcasing clean conduit runs and tidy panel wire management',
        'Neighborhood-specific customer testimonials building local suburban trust',
        'Strict policy featuring only the contractor’s own genuine customer feedback',
      ],
    },
    {
      h2: 'Call Tracking, Lead Routing, and Segmented Residential vs. Commercial Paths',
      paragraphs: [
        'Residential homeowners seeking an emergency outlet repair require a completely different user experience than facility engineers commissioning primary switchgear. A high-converting electrical service company website design segments residential and commercial visitors immediately at the homepage.',
        'We implement dynamic call tracking numbers and segmented inquiry forms that route emergency home calls to on-call vans while directing commercial tender requests to senior estimators. Detailed Google Analytics 4 event logging provides transparent visibility into which marketing channels produce your most profitable electrical work.',
      ],
      bullets: [
        'Clear dual-path navigation funneling residential homeowners and commercial clients',
        'Dynamic call tracking insertion to measure lead attribution across marketing sources',
        'Google Analytics 4 event tracking for phone clicks, estimate forms, and service bookings',
        'Optional webhook connections to compatible field service software (scoped separately per project)',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does an electrical contractor website design cost?',
      a: `Our electrician website design pricing uses transparent one-time project fees with no mandatory monthly retainer. Our Essential package starts at ${essentialPrice} (delivered in ${essentialTime}), and our Professional package with multi-city architecture, commercial RFP intake, and local SEO starts at ${proPrice} (delivered in ${proTime}). View our packages page for complete details on one-time builds and optional monthly plans.`,
    },
    {
      q: 'Can our website show our state license numbers and credential badges?',
      a: 'Yes. We prominently display your state electrical contractor license, master electrician numbers, and proof of liability insurance across your header, footer, and estimate forms, reinforcing customer trust and compliance.',
    },
    {
      q: 'How can our electrical website generate more daily service calls?',
      a: 'Websites for electricians generate more calls when they eliminate friction. Persistent tap-to-call mobile buttons, clear emergency availability notices, and upfront service options allow urgent clients to book immediately.',
    },
    {
      q: 'Should our company have a separate page for each electrical service?',
      a: 'Yes. Search engines rank individual, focused pages far higher than a single generic services list. Having dedicated pages for panel replacements, EV chargers, and commercial lighting helps capture specific high-intent searches.',
    },
    {
      q: 'Can our electrical website track where our phone calls originate?',
      a: 'Yes. We integrate dynamic call tracking numbers and conversion analytics to identify exactly which pages, local service areas, or search terms generate your phone calls and estimate submissions.',
    },
    {
      q: 'Will my website show up in ChatGPT, Perplexity or Google AI Overviews?',
      a: 'No agency can guarantee inclusion in generative AI answers or specific Google rankings. We focus on engineering fast, technically sound pages with detailed service explanations, comprehensive FAQs, and complete Schema.org structured data, giving AI systems and search crawlers the structured clarity needed to accurately quote your business.',
    },
  ];

  const relatedLinks = [
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Website Redesign', to: '/website-redesign' },
    { label: 'Packages', to: '/packages' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/electrical-contractor-website-design"
      name="Electrical Contractor Website Design"
      h1="Electrical Contractor Website Design That Brings In Service Calls"
      intro="Fast, mobile-friendly websites for electricians and electrical contractors across the United States, built around service calls, estimate requests and trust."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Electrical contractor website design',
        'Electrician website design',
        'Electrical contractor lead generation website',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
