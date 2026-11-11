import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const ContractorPage: React.FC = () => {
  const starterPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';

  const sections: ServiceSection[] = [
    {
      h2: 'Contractor Website Development Engineered for High-Ticket Bids',
      paragraphs: [
        'When prospective homeowners and commercial general contractors search for building partners, your website is frequently their first formal interaction with your company. A slow, generic site communicates hesitation and compromise before an estimate meeting even takes place. Professional contractor website development replaces that friction with an authoritative digital flagship that reflects the precision, safety standards, and structural rigor you demonstrate on real-world job sites.',
        'At Aurevane Digital, we approach website design for contractors as an architectural discipline rather than a commodity marketing template. Every layout is coded clean from the ground up, highlighting verified trade certifications, detailed project scope galleries, and structured bid intake channels that prompt serious property owners to take action.',
      ],
      bullets: [
        'Architectural typography and generous negative space',
        'Sub-second page loading speeds across cellular networks',
        'Structured project galleries detailing material specifications',
        'Built-in scope qualification forms that weed out tire-kickers',
      ],
    },
    {
      h2: 'Tailored Platforms for Specialized Construction & Remodeling Trades',
      paragraphs: [
        'No two building trades operate under the same bid economics or client expectations. A custom home builder requires expansive architectural portfolios that justify eight-week consultation cycles, whereas an emergency roofing contractor needs immediate hail damage verification and rapid inspection scheduling. We tailor digital architectures directly to the operational demands of your specific sector.',
        'Whether your crews focus on general contracting, residential remodeling, siding installation, exterior painting, structural concrete, asphalt paving, ornamental fencing, custom deck building, excavation, site demolition, hardwood flooring, or high-end handyman services, we develop dedicated service silos that present your capabilities with uncompromising clarity.',
      ],
      bullets: [
        'General contractor and commercial builder platforms',
        'Roofing, siding, and storm restoration intake workflows',
        'Kitchen, bathroom, and complete residential remodeling hubs',
        'Concrete, paving, excavation, and structural earthworks portfolios',
        'Painting, fencing, deck builder, and custom flooring showcases',
      ],
    },
    {
      h2: 'Interactive Intake Funnels That Screen Unqualified Price Shoppers',
      paragraphs: [
        'Contractor owners waste dozens of unbilled hours every month fielding generic calls from tire-kickers seeking ballpark pricing over the phone. Effective contractor website design introduces intelligent qualification funnels that capture square footage, project timelines, photographic attachments, and budget expectations before your estimator ever steps foot on the property.',
        'By integrating structured 2-step quote estimators and consultation request funnels directly into your layout, your company establishes firm professionalism from the initial touchpoint. Homeowners appreciate transparent expectations, and your project managers receive actionable lead dossiers ready for accurate takeoffs.',
      ],
      bullets: [
        'Multi-step scope estimators customized to your pricing model',
        'Direct project photo upload directly from homeowner smartphones',
        'Automated dispatch alerts sent to your email or field CRM',
        'Prominent click-to-call triggers for urgent commercial emergencies',
      ],
    },
    {
      h2: 'Search Engine Architecture Built for High-Intent Homeowners',
      paragraphs: [
        'High-ticket property owners rarely browse past the first page of search results when seeking reliable builders in their territory. We engineer national best-practice local SEO architecture into every build, implementing Schema.org structured data, fast-rendering responsive components, and scalable county-level geo-silos.',
        'This systematic setup ensures that whether a client searches for commercial excavation tenders or a premier kitchen remodeling specialist, your platform presents fast answers, verified review proof, and clear calls to action that consistently win more bids.',
      ],
      bullets: [
        'Schema.org ProfessionalService and LocalBusiness markup',
        'County and suburban service-area directory structures',
        'Google Business Profile integration and verified review highlights',
        'Complete 100% code ownership with zero proprietary agency lock-in',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does custom contractor website design cost?',
      a: `Our contractor website platforms feature transparent, milestone-based pricing with zero hidden agency retainers. The Starter package begins at ${starterPrice} for an essential 3-page custom digital foundation, while our comprehensive Professional package is ${proPrice} and includes multi-county SEO siloing, custom intake tools, and comprehensive copywriting polish. You can review all deliverables on our packages page.`,
    },
    {
      q: 'How long does the website build process take from start to launch?',
      a: 'A standard Starter platform deploys in 10 to 14 business days. The comprehensive Professional system typically takes 2 to 3 weeks, which includes architectural design, scope funnel calibration, content positioning, and complete mobile device performance testing.',
    },
    {
      q: 'Do you design websites for trade contractors outside of roofing and general building?',
      a: 'Yes. We construct bespoke platforms for contractors across the entire United States, including excavation, demolition, concrete paving, commercial painting, custom decks, siding, fencing, flooring, and whole-home remodeling specialists.',
    },
    {
      q: 'Do I own the website code, design assets, and domain after launch?',
      a: 'Yes, 100%. Unlike proprietary website builder agencies that lease platforms or lock your business into ongoing subscriptions, you retain absolute, unconditional ownership of all design files, production code, typography, and domain assets upon final project settlement.',
    },
    {
      q: 'Will our new website integrate with our existing contractor CRM or estimating software?',
      a: 'Yes. Our intake forms connect seamlessly with standard contractor workflows, CRM software, and dispatch pipelines such as Jobber, ServiceTitan, Housecall Pro, and standard webhook endpoints.',
    },
  ];

  const relatedLinks = [
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Cinematic Concept Portfolio', to: '/our-work' },
  ];

  return (
    <ServicePageTemplate
      path="/contractor-website-design"
      name="Contractor Website Design"
      h1="Contractor Website Design Built to Win More Bids"
      intro="Aurevane Digital designs custom, high-converting websites for trade contractors across the United States. We build digital platforms engineered to showcase trade craftsmanship, eliminate phone bidding friction, and secure high-value commercial and residential bids."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Contractor Website Design',
        'General Contractor Websites',
        'Roofing Website Development',
        'Remodeling Contractor Web Design',
        'Excavation & Commercial Web Design',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
