import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';

export const LandClearingPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/land-clearing-website-design"
      tradeName="Land Clearing"
      serviceName="Land Clearing Website Design"
      serviceType="Land Clearing Website Design"
      eyebrow="Acreage & Forestry Mulching"
      h1="Land Clearing Website Design That Brings In Acreage Quote Requests"
      intro="Bespoke land clearing website design for forestry mulching, brush clearing, lot preparation, and right-of-way crews across the United States. Showcase dramatic before-and-after acreage transformations, display track-loader and mulcher specs clearly, and qualify parcel sizes before rolling equipment—starting at $1,000."
      ctaText="Get a Free Land Clearing Mockup"
      problemsHeading="Problems Your Land Clearing Website Must Solve"
      problemsIntro="Hauling heavy track loaders and drum mulchers onto raw timber parcels requires real preparation. Generic contractor websites attract tiny backyard inquiries instead of profitable acreage."
      problems={[
        {
          title: 'Unqualified Calls Without Acreage or Terrain Info',
          description:
            'Property owners call asking for a flat price without mentioning whether they own one overgrown quarter-acre or forty acres of dense cedar and granite slope.',
        },
        {
          title: 'Confusion Over Mulching vs. Grubbing & Haul-Off',
          description:
            'Clients often mix up selective forestry mulching with root-raking, burning, or full stump-and-debris haul-off—causing quoting friction on site walks.',
        },
        {
          title: 'No Visual Proof of Overgrown Lot Transformations',
          description:
            'Raw timber buyers want dramatic side-by-side photos proving your operators leave clean, park-like ground without destroying desirable hardwood trees.',
        },
        {
          title: 'Weak Visibility Across Rural Growth Counties',
          description:
            'Out-of-state land buyers and custom homebuilders searching outside metro centers miss crews whose websites only list a single shop town.',
        },
      ]}
      includesHeading="What Every Land Clearing Website Build Includes"
      includesIntro="Designed to qualify parcel acreage, highlight forestry equipment, and rank across target rural counties."
      includes={[
        {
          title: 'Clear Method & Service Pages',
          description:
            'Dedicated sections explaining forestry mulching, brush hogging, fence-line clearing, selective lot thinning, stump grinding, and debris haul-off.',
        },
        {
          title: 'Multi-County Territory Section',
          description:
            'Structured regional service-area hubs targeting rural acreage corridors, lake lots, farm tracts, and suburban build parcels.',
        },
        {
          title: 'Before-and-After Acreage Gallery',
          description:
            'High-contrast photo pairings turning impassable briars and scrub timber into open, walkable build sites and pasture views.',
        },
        {
          title: 'Direct Field Tap-to-Call',
          description:
            'Prominent click-to-call triggers positioned cleanly so builders, ranchers, and surveyors can reach dispatch right from the parcel.',
        },
        {
          title: 'Acreage & Parcel Quote Form',
          description:
            'Guided intake capturing approximate acreage, density level, parcel pin or county address, access gate width, and site photos.',
        },
        {
          title: 'Google Business Profile Alignment',
          description:
            'Schema.org Service markup and verified review displays reinforcing local map visibility across every county you mobilize to.',
        },
        {
          title: 'Fast Rural Mobile Speed',
          description:
            'Compressed WebP project images and lightweight code built to render swiftly on patchy cellular signals at raw land sites.',
        },
        {
          title: 'Mobile-First Equipment Showcase',
          description:
            'Clean mobile cards displaying high-flow skid steers, drum mulchers, excavators, and grapple trucks with state insurance badges.',
        },
      ]}
      howItWorksHeading="From Free Land Clearing Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Share your mulching and clearing capabilities plus target counties. We craft a tailored homepage mockup so you review the layout risk-free.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We code your before-and-after galleries, acreage quote intake, method comparisons, and county SEO pages with zero bloat.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential builds launch in 7-10 business days on fast hosting, sending qualified parcel quote requests straight to your inbox.',
        },
      ]}
      pricingSummary="Essential land clearing websites start at a one-time $1,000 investment and launch in 7-10 business days. Professional packages start at $1,500 and add multi-county SEO pages, interactive acreage qualifiers, and full copywriting."
      faqs={[
        {
          q: 'Can the quote form ask for acreage, tree density, and parcel photos?',
          a: 'Yes. We configure land-clearing intake forms to gather acreage ranges, brush vs. timber density, slope notes, county parcel location, and uploaded photos before you mobilize for a walk.',
        },
        {
          q: 'Should our website explain forestry mulching separately from bulldozing?',
          a: 'Yes. Separating selective forestry mulching from root grubbing and debris haul-off educates landowners on soil retention and cost differences, leading to cleaner bid expectations.',
        },
        {
          q: 'How long does it take to build a land clearing contractor website?',
          a: 'Our Essential website launches in 7-10 business days from $1,000. Larger Professional platforms with county landing hubs launch within 2-3 weeks from $1,500.',
        },
        {
          q: 'Do we keep full ownership of our photos, copy, and website code?',
          a: 'Yes. Upon completion, you own 100% of the domain, custom code, and project galleries with no proprietary builder lock-in or mandatory monthly fees.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Excavation Company Website Design',
          to: '/excavation-company-website-design',
          note: 'Grading & site pads',
        },
        {
          label: 'Fence Company Website Design',
          to: '/fence-company-website-design',
          note: 'Perimeter & ranch lines',
        },
      ]}
      relatedGuides={[
        {
          label: 'Why Contractors Need a Project Gallery',
          to: '/blog/why-contractors-need-a-project-gallery',
        },
        {
          label: 'How Much Does a Contractor Website Cost?',
          to: '/blog/how-much-does-a-contractor-website-cost',
        },
      ]}
    />
  );
};
