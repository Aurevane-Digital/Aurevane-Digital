import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';

export const FenceCompanyPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/fence-company-website-design"
      tradeName="Fence Companies"
      serviceName="Fence Company Website Design"
      serviceType="Fence Company Website Design"
      eyebrow="Residential & Commercial Fencing"
      h1="Fence Company Website Design Built to Turn Yard Searches Into Estimates"
      intro="Custom fence company website design for wood privacy, vinyl, ornamental aluminum, chain-link, and automated gate installers across the United States. Showcase material galleries cleanly, pre-qualify linear footage and gate counts, and rank across growing subdivisions—live in 7-10 business days from $1,000."
      ctaText="Get a Free Fence Website Mockup"
      problemsHeading="Problems Your Fence Company Website Must Solve"
      problemsIntro="Homeowners walk their property line on weekends comparing cedar, vinyl, and black aluminum. If your website hides styles or lets tiny patch repairs waste estimator mileage, margins shrink fast."
      problems={[
        {
          title: 'Confusing Material & Style Presentation',
          description:
            'When prospects cannot easily compare board-on-board cedar, vinyl privacy, pool-code aluminum, and ranch rail styles on mobile, they abandon your quote form.',
        },
        {
          title: 'Wasted Drives on Unqualified Footages',
          description:
            'Generic forms send estimators out to quote a single leaning post instead of filtering approximate linear footage, old fence tear-out, and gate count upfront.',
        },
        {
          title: 'Heavy Galleries That Lag on Backyard Wi-Fi',
          description:
            'Bloated WordPress sliders stall on mobile devices when neighbors search outside near the back property stakes.',
        },
        {
          title: 'Missing HOA, Pool-Code & Utility-Locate Clarity',
          description:
            'Subdivision homeowners worry about HOA approvals, setback surveys, and utility marking—building trust starts by outlining your exact permit and 811 workflow.',
        },
      ]}
      includesHeading="What Every Fence Company Website Build Includes"
      includesIntro="Tailored around material showcase galleries, accurate linear-footage estimate forms, and local neighborhood rankings."
      includes={[
        {
          title: 'Dedicated Material Service Pages',
          description:
            'Clear pages for cedar privacy wood, vinyl fencing, ornamental aluminum, steel security, chain-link, farm fencing, and gate operators.',
        },
        {
          title: 'Subdivision & County Service Areas',
          description:
            'Localized service-area sections built to capture new-construction neighborhoods, pool builds, and surrounding county searches.',
        },
        {
          title: 'Before-and-After Material Gallery',
          description:
            'Organized fenceline galleries proving plumb posts, clean sloped stepping, heavy gate hardware, and tidy old-fence tear-outs.',
        },
        {
          title: 'Storm-Repair Tap-to-Call Bar',
          description:
            'Direct mobile calling triggers helping pet owners and commercial yards reach your crew quickly after downed panels or stuck gates.',
        },
        {
          title: 'Linear-Footage Estimate Form',
          description:
            'Guided quote request capturing fence material, height, approximate footage, single/double gate count, and backyard photo uploads.',
        },
        {
          title: 'Google Business Profile Alignment',
          description:
            'Verified homeowner review blocks and clean LocalBusiness schema reinforcing your local Google Maps visibility.',
        },
        {
          title: 'Fast Mobile Rendering Speed',
          description:
            'Next-gen compressed project images and lean static architecture built to pass Core Web Vitals effortlessly.',
        },
        {
          title: 'Mobile-First Trust & Warranty Slots',
          description:
            'Prominent placement for contractor licensing, liability insurance, concrete post-depth specs, and workmanship warranty terms.',
        },
      ]}
      howItWorksHeading="From Free Fence Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Tell us which fence materials you install and the towns you cover. We build a free homepage concept mockup before any commitment.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We code your material galleries, linear-footage estimate forms, repair tap-to-call triggers, and local service pages cleanly.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential fence company websites go live in 7-10 business days, giving your estimators pre-qualified property leads daily.',
        },
      ]}
      pricingSummary="Essential fence contractor websites start at $1,000 one-time and launch in 7-10 business days. Professional packages start at $1,500 and add multi-city local SEO pages, full copywriting, and interactive linear-footage scope estimators."
      faqs={[
        {
          q: 'Can homeowners pick their fence material and estimate footage in the quote form?',
          a: 'Yes. We structure estimate forms to ask for preferred fence style, height, approximate linear feet, gate counts, tear-out needs, and optional yard photos before scheduling a site walk.',
        },
        {
          q: 'How should a fence company organize its project gallery?',
          a: 'Group before-and-after photos by material—wood privacy, vinyl, black aluminum, and commercial chain-link—with brief captions noting post depth, concrete footings, and sloped-grade installation.',
        },
        {
          q: 'What does a custom fence company website cost?',
          a: 'Our one-time Essential package starts at $1,000 (live in 7-10 business days), while our Professional package starts at $1,500 (2-3 weeks) with expanded material pages and multi-city SEO.',
        },
        {
          q: 'Do we keep full control of our domain, galleries, and incoming leads?',
          a: 'Yes. You own 100% of the domain, source code, photography, and every estimate inquiry with zero per-lead fees or agency contracts.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Land Clearing Website Design',
          to: '/land-clearing-website-design',
          note: 'Fence-line clearing',
        },
        {
          label: 'Roofing Website Design',
          to: '/roofing-website-design',
          note: 'Exterior restoration',
        },
      ]}
    />
  );
};
