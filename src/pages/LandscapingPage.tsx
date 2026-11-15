import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const LandscapingPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Mobile-First Website Architecture for Landscaping and Hardscape Firms',
      paragraphs: [
        'Whether a homeowner is standing in a waterlogged yard looking for French drain installation or browsing patio inspiration on the couch, over half of local landscaping searches happen on mobile screens. Generic lawn templates cram tiny text over stock grass photos and make it frustrating to find real design-build work.',
        'At Aurevane Digital, we build mobile-first landscaping websites with editorial restraint, fast image optimization, and crisp typography—positioning full-service design-build teams, hardscapers, and commercial grounds contractors to command higher-margin installations.',
      ],
      bullets: [
        'Mobile-optimized navigation separating design-build hardscaping from recurring grounds maintenance',
        'Clean service hierarchy covering paver patios, retaining walls, drainage, irrigation, and plantings',
        'Fast loading speeds even on cellular connections with high-resolution portfolio photography',
        'Visible license, insurance, and bonding trust slots built right into decision areas',
      ],
    },
    {
      h2: 'Emergency Drainage Calls and Planned Outdoor Living Quote Funnels',
      paragraphs: [
        'Landscaping and tree-adjacent exterior crews regularly field urgent calls—fallen limbs across driveways, washed-out retaining walls, broken irrigation mainlines, or sudden yard flooding—right alongside high-ticket multi-week patio, outdoor kitchen, and grading projects.',
        'Our websites establish clear dual paths for both visitor types. Emergency property issues see an unmistakable tap-to-call trigger immediately at the top of the screen, while planned hardscape and landscape architecture prospects complete a structured quote-request form specifying project scope, timeline, rough budget range, and yard photos.',
      ],
      bullets: [
        'Immediate tap-to-call action bar for storm cleanup, emergency drainage repairs, and irrigation leaks',
        'Multi-step quote-request path for paver patios, retaining walls, sod, lighting, and full yard rebuilds',
        'Smartphone yard-photo and site-plan attachment capability for faster pre-qualification',
        'Separate HOA, commercial property maintenance, and multi-site grounds RFP request forms',
      ],
    },
    {
      h2: 'Before-and-After Landscape Transformations That Justify Premium Pricing',
      paragraphs: [
        'High-ticket outdoor living installations sell on visual proof. Homeowners investing in segmental retaining walls, natural stone walkways, drainage regrading, or outdoor kitchens want to see muddy slopes transformed into finished architectural outdoor spaces.',
        'We design dedicated before-and-after project galleries organized by project discipline—displaying excavation and base compaction alongside finished hardscape lighting, paver borders, and native plantings so clients immediately see the caliber of your crews.',
      ],
      bullets: [
        'Interactive before-and-after galleries contrasting raw or eroded yards with finished hardscapes',
        'Project breakdowns detailing paver systems, wall block materials, drainage specs, and lighting',
        'Clean separation between residential backyard transformations and commercial streetscapes',
        'Integrated consultation links positioned beside completed outdoor living showcases',
      ],
    },
    {
      h2: 'Local SEO Structure Built to Capture High-Value Neighborhood Searches',
      paragraphs: [
        'Competing on generic terms like "lawn care near me" often attracts low-margin mowing shoppers while burying your profitable hardscaping and drainage services. Intentional local SEO architecture positions your company for high-margin searches across target affluent suburbs.',
        'We structure dedicated service silos for hardscaping, drainage, irrigation, and landscape design paired with regional town and county service-area pages, Schema.org Service and FAQPage structured data, and verified Google review proof.',
      ],
      bullets: [
        'Service silos targeting hardscape construction, grading/drainage, irrigation, and design-build',
        'Neighborhood and suburban county hubs calibrated around high-value residential territories',
        'Schema.org Service, LocalBusiness, and FAQPage JSON-LD metadata integrated per page',
        'Direct alignment with Google Business Profile categories and local review streams',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How can a landscaping website attract more hardscaping and design-build leads instead of only small mowing inquiries?',
      a: 'We separate high-margin design-build, paver patio, retaining wall, and drainage services into dedicated sections and use a structured quote-request funnel that asks for project type, property goals, and timeline—filtering low-budget inquiries while showcasing before-and-after transformations.',
    },
    {
      q: 'Does a landscaping website need both tap-to-call and quote forms?',
      a: 'Yes. Tap-to-call triggers serve property owners dealing with urgent irrigation breaks, storm debris, or flooded yards, while structured quote forms capture planned patio, grading, and commercial maintenance inquiries comfortably after hours.',
    },
    {
      q: 'How much does custom landscaping website design cost and how fast is launch?',
      a: `We work on transparent one-time project fees with no mandatory monthly retainer. Our Essential package starts at ${essentialPrice} (${essentialTime.toLowerCase()}), and our Professional package starts at ${proPrice} (${proTime.toLowerCase()}) with interactive scope qualifiers, project galleries, and multi-city local SEO pages.`,
    },
    {
      q: 'Do we keep full ownership of the landscaping website after launch?',
      a: 'Yes. You retain 100% ownership of your website domain, source code, project photography, and incoming customer leads with zero lock-in contracts.',
    },
  ];

  const relatedLinks = [
    { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
    { label: 'Excavation Website Design', to: '/excavation-website-design' },
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/landscaping-website-design"
      name="Landscaping Website Design"
      h1="Landscaping Website Design Built for Design-Build and Hardscape Leads"
      intro="Mobile-first websites for landscaping, hardscaping, and drainage contractors across the United States—combining urgent tap-to-call dispatch, planned project quote funnels, before-and-after yard galleries, and local SEO structure."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Landscaping Website Design',
        'Hardscape & Outdoor Living Web Design',
        'Landscape Contractor Quote Funnels',
        'Local SEO for Landscaping Companies',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
