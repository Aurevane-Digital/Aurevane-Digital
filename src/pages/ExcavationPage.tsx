import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';
import { getFrameUrl } from '../utils/frames';

export const ExcavationPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/excavation-website-design"
      tradeName="Excavation Contractors"
      serviceName="Excavation Company Website Design"
      serviceType="Excavation Company Website Design"
      eyebrow="Earthworks & Site Prep"
      h1="Excavation Company Website Design Built to Win More Bid Requests"
      intro="Custom excavation company website design for grading, trenching, foundation prep, and site-work contractors across the United States. Built to prove machine capacity, accept civil plans online, and convert commercial estimators and property owners into qualified bid calls starting at $1,000."
      ctaText="Get a Free Excavation Mockup"
      problemsHeading="Problems Your Excavation Website Must Solve"
      problemsIntro="General contractors and land developers size up earthwork subs online in thirty seconds. Generic brochure templates cost you profitable civil and residential pads before an estimator ever dials your number."
      problems={[
        {
          title: 'Generic Contact Forms Missing Site Variables',
          description:
            'Standard name-and-message boxes invite vague inquiries. Estimators need parcel addresses, rough acreage, dig depth, and PDF grading plan uploads captured upfront.',
        },
        {
          title: 'Invisible Iron Capacity & GPS Precision',
          description:
            'Builders want confirmation that your crew owns the excavators, dozers, skid steers, and laser or GPS grading gear required to hit tight slab tolerances on schedule.',
        },
        {
          title: 'Buried Licensing, Bonding & Safety Credentials',
          description:
            'Commercial GCs require upfront state contractor license numbers, commercial liability limits, and OSHA compliance signals before adding your company to their bid list.',
        },
        {
          title: 'Slow Mobile Loading on Remote Job Sites',
          description:
            'Superintendents searching for urgent trenching or subgrade repair on active dirt pads bounce immediately if heavy unoptimized themes stall on weak cellular bars.',
        },
      ]}
      includesHeading="What Every Excavation Website Build Includes"
      includesIntro="Every excavation build ships cleanly coded from the ground up with zero plugin bloat and 100% client ownership."
      includes={[
        {
          title: 'Dedicated Service Pages',
          description:
            'Focused pages for site preparation, mass grading, foundation digging, utility trenching, drainage, and driveway construction.',
        },
        {
          title: 'County Service-Area Section',
          description:
            'Targeted regional hubs highlighting your haul radius, surrounding towns, and quarry-to-site mobilization territories.',
        },
        {
          title: 'Equipment & Site Gallery',
          description:
            'Before-and-after lot-prep photography pairing rough acreage transformations with real excavator and dozer spreads.',
        },
        {
          title: 'Instant Tap-to-Call Triggers',
          description:
            'Persistent click-to-call headers built for builders and property managers needing immediate dispatch from the field.',
        },
        {
          title: 'Civil Bid & Plan Quote Form',
          description:
            'Structured bid intake capturing project scope, target start dates, parcel details, and engineering print attachments.',
        },
        {
          title: 'Google Business Profile Sync',
          description:
            'Clean LocalBusiness schema, verified review display blocks, and territory alignment supporting your Google Maps listing.',
        },
        {
          title: 'Fast Core Web Vitals Speed',
          description:
            'Lightweight static React delivery with compressed WebP job-site imagery engineered for near-instant load times.',
        },
        {
          title: 'Mobile-First Field Layout',
          description:
            'Legible typography, thumb-ready navigation, and clear credential badges calibrated for phones, tablets, and office monitors.',
        },
      ]}
      conceptRef={{
        title: 'Vision Excavation',
        subtitle: 'Heavy Civil Earthworks & Site Prep',
        description:
          'Featured directly on our /our-work showcase, the Vision Excavation concept demonstrates how structured heavy equipment displays, safety accreditation callouts, and 2-step scope intake work together for earthwork bids.',
        image: getFrameUrl(150),
        imageAlt: 'Vision Excavation custom excavation contractor website design concept preview',
      }}
      howItWorksHeading="From Free Excavation Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Tell us your services, fleet highlights, and target counties. We craft a custom homepage concept mockup before you spend a dollar.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'Once approved, we code your responsive pages, bid intake forms, equipment galleries, and local SEO schema cleanly from scratch.',
        },
        {
          step: '03',
          title: 'Fast Launch',
          description:
            'Essential excavation builds launch in 7-10 business days on fast cloud hosting with 100% code and domain ownership transferred to you.',
        },
      ]}
      pricingSummary="Our Essential excavation website package starts at $1,000 one-time and launches in 7-10 business days. Need multi-county SEO pages, copywriting, and expanded bid estimators? Our Professional package starts at $1,500 with zero mandatory retainers."
      faqs={[
        {
          q: 'How much does an excavation company website cost?',
          a: 'Our Essential excavation website starts at a one-time $1,000 fee and goes live in 7-10 business days. The Professional package starts at $1,500 and adds multi-city local SEO pages, full copywriting, and custom bid-scope forms.',
        },
        {
          q: 'Can general contractors upload site plans or blueprints on the quote form?',
          a: 'Yes. We configure bid request forms with clean attachment fields so builders and engineers can upload grading plans, surveys, or job-site photos alongside target dates and parcel info.',
        },
        {
          q: 'Do we keep ownership of our website code and domain after launch?',
          a: 'Yes, 100%. Unlike agencies that rent templates with ongoing platform fees, you own every line of production code, design assets, and incoming bid leads outright.',
        },
        {
          q: 'What should an excavation contractor show to win higher-value bids?',
          a: 'Display real photos of your excavators and haul trucks on active sites, list state licensing and bonding credentials clearly, and separate residential driveways from commercial earthworks.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Land Clearing Website Design',
          to: '/land-clearing-website-design',
          note: 'Acreage & mulching',
        },
        {
          label: 'Septic Contractor Website Design',
          to: '/septic-contractor-website-design',
          note: 'Trenching & install',
        },
      ]}
    />
  );
};
