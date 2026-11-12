import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const GeneralContractorPage: React.FC = () => {
  const starterPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const starterTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '10 to 14 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Architectural Case Study Portfolios with Dedicated Project Pages',
      paragraphs: [
        'When prospective clients consider a major whole-home remodel, custom build, or commercial tenant improvement, generic photo carousels fail to justify high bid values. Modern general contractor web design requires in-depth case study pages that treat your completed jobs as architectural achievements.',
        'We build individual project showcase pages featuring high-resolution galleries, material specifications, square footage details, and architectural narratives. By organizing your work into dedicated case studies for custom homes, major additions, and commercial build-outs, your construction website design establishes undeniable craftsmanship that commands respect from discerning property owners.',
      ],
      bullets: [
        'Dedicated individual project case study pages detailing scope, materials, and challenges',
        'High-resolution photo galleries highlighting finish carpentry, structural framing, and trim detail',
        'Project parameter callouts covering square footage, project duration, and architectural style',
        'Direct inquiry triggers attached to each specific project page to capture similar commissions',
      ],
    },
    {
      h2: 'Qualifying Estimate Forms with Budget Ranges and Project Timelines',
      paragraphs: [
        'General contractors lose countless estimating hours fielding calls from tire-kickers whose budgets are completely misaligned with custom construction costs. A high-converting GC lead generation website must actively qualify prospective clients before a site walk is ever scheduled.',
        'Our project intake forms guide prospective clients through a structured series of qualifying questions: project classification (custom home, structural addition, interior remodel, commercial tenant improvement), target start date, architectural drawing status, and realistic budget ranges. This filter protects your estimating team and delivers pre-qualified inquiries ready for meaningful consultation.',
      ],
      bullets: [
        'Budget tier selectors that set realistic investment expectations early in the conversation',
        'Target start date and permit status fields to assess project readiness and scheduling viability',
        'Blueprint and design sketch upload capabilities supporting architectural PDF files',
        'Automated intake summary notifications routed immediately to project estimators',
      ],
    },
    {
      h2: 'Credentials, Bonding Capacity, and Contractor Licensing Verification',
      paragraphs: [
        'Hiring a general contractor involves substantial financial commitments often exceeding hundreds of thousands of dollars. Risk-averse commercial developers and affluent homeowners need absolute verification of legal licensing, bonding coverage, and commercial insurance protections.',
        'We prominently feature the contractor’s own real credentials—state general contracting license numbers, verified bonding limits, full commercial general liability coverage, and workers compensation compliance. Displaying verifiable trade credentials directly alongside contract intake points removes hesitation and reassures property owners.',
      ],
      bullets: [
        'Prominent placement of state general contractor license numbers and corporate registration',
        'Clear display of commercial bonding capacity and comprehensive liability insurance limits',
        'Workers compensation verification and active job-site safety protocol documentation',
        'Commercial prequalification credential sheets available for immediate download',
      ],
    },
    {
      h2: 'A Transparent Four-Stage Construction Process in Your Own Voice',
      paragraphs: [
        'Many homeowners dread remodeling or building because they fear unexpected change orders, endless delays, and radio silence from project managers. A high-caliber design-build firm website design dismantles these fears by illustrating your exact construction process from initial discovery to final punch-list handover.',
        'We structure your operational roadmap into clear, client-friendly milestones written in the contractor’s own authentic words: Initial Consultation, Architectural Feasibility & Pre-Construction, Transparent Contract & Permitting, and Active Construction & Handover. Setting clear expectations builds immediate confidence and positions your firm as an organized, professional partner.',
      ],
      bullets: [
        'Step-by-step pre-construction and feasibility explanation eliminating project mystery',
        'Transparent change order and milestone payment communication protocols',
        'Clear timelines detailing architectural permitting and municipal inspection stages',
        'Defined punch-list completion and post-construction warranty handover walk-throughs',
      ],
    },
    {
      h2: 'Distinct Residential Construction and Commercial Contracting Pathways',
      paragraphs: [
        'A corporate facility director seeking a multi-suite commercial office build-out will quickly leave a website that solely features residential kitchen photos. Conversely, homeowners feel alienated if a site reads like an industrial civil procurement document. Successful construction website design cleanly separates these audiences.',
        'We engineer dual-funnel navigation that splits traffic into dedicated residential construction website design and commercial construction website design pathways right from the header. Commercial buyers find relevant tenant improvement portfolios and safety EMR metrics, while residential clients browse custom home galleries and client testimonials.',
      ],
      bullets: [
        'Dedicated residential hub highlighting custom homes, whole-house remodels, and luxury estates',
        'Dedicated commercial hub showcasing retail build-outs, office suites, and structural retrofits',
        'Separate intake forms tailored to residential homeowner questions versus commercial RFP bids',
        'Tailored copy speaking directly to homeowner lifestyles or corporate facility ROI',
      ],
    },
    {
      h2: 'Authentic Customer Reviews, CRM Integration, and Call Tracking',
      paragraphs: [
        'Reputation is the lifeblood of general contracting. Our digital platforms synchronize authentic reviews directly from verified platforms, allowing potential clients to read unvarnished feedback from real community homeowners and commercial clients.',
        'Furthermore, your GC lead generation website connects seamlessly with leading construction CRMs and project management tools such as BuilderTrend, CoConstruct, Procore, or Jobber. Dynamic call tracking ensures your team measures exactly which marketing channels, project categories, and geographic territories produce your most profitable building contracts.',
      ],
      bullets: [
        'Direct feed of authentic customer testimonials synchronized with Google Business Profile',
        'Automated webhook pipelines feeding project inquiries directly into your construction CRM',
        'Dynamic call tracking to evaluate marketing source attribution across phone leads',
        'Google Analytics 4 event logging measuring form submissions, blueprint uploads, and calls',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does a general contractor website design cost?',
      a: `Our general contractor website design packages feature transparent, milestone-based pricing. Our Starter package begins at ${starterPrice} (delivered in ${starterTime}), and our comprehensive Professional package with multi-page project case studies, custom budget qualifying forms, and local SEO is ${proPrice} (delivered in ${proTime}). Full package details are available on our packages page.`,
    },
    {
      q: 'What should a general contractor website include to win more bids?',
      a: 'An effective general contractor website must include detailed project case studies with high-resolution photography, a structured estimate intake form capturing budget ranges and project timelines, verifiable state license and bonding credentials, an explanation of your construction process, and genuine client reviews.',
    },
    {
      q: 'How should general contractors show past projects on their website?',
      a: 'Rather than dumping dozens of random snapshots into an unorganized gallery, contractors should create dedicated case study pages for key builds. Include project scope descriptions, before-and-after photos, finish materials used, and square footage details to showcase true craftsmanship.',
    },
    {
      q: 'How can a construction website filter out low-budget tire-kickers?',
      a: 'We integrate structured budget range selectors into your estimate forms. By setting clear minimum project tiers and asking questions about architectural drawing status and target start dates, low-intent inquiries are naturally filtered out before your team invests time in site visits.',
    },
    {
      q: 'Can website leads route automatically into our construction CRM?',
      a: 'Yes. Our intake forms connect with leading construction and contractor management software, including BuilderTrend, CoConstruct, Jobber, and custom webhooks, ensuring new project inquiries immediately notify your project managers.',
    },
    {
      q: 'Will my website show up in ChatGPT, Perplexity or Google AI Overviews?',
      a: 'No web development agency can honestly guarantee placement inside AI overviews or search engine result pages. However, our platforms utilize clean semantic code, rich case study details, Schema.org LocalBusiness markup, and comprehensive FAQs that make it easy for search algorithms and AI engines to understand, parse, and reference your general contracting business.',
    },
  ];

  const relatedLinks = [
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'Excavation Website Design', to: '/excavation-website-design' },
    { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
    { label: 'Packages', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/general-contractor-website-design"
      name="General Contractor Website Design"
      h1="General Contractor Website Design That Wins More Projects"
      intro="Custom websites for general contractors, builders, remodelers and design-build firms across the United States, built around project proof, estimate requests and trust."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'General contractor website design',
        'Construction company website design',
        'Custom home builder website design',
        'Remodeler website design',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
