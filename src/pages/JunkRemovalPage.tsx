import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';
import { getFrameUrl } from '../utils/frames';

export const JunkRemovalPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/junk-removal-website-design"
      tradeName="Junk Removal"
      serviceName="Junk Removal Website Design"
      serviceType="Junk Removal Website Design"
      eyebrow="Hauling & Cleanouts"
      h1="Junk Removal Website Design That Turns Searches Into Booked Hauls"
      intro="Fast, conversion-focused junk removal website design engineered for independent hauling fleets across the United States. Pair smartphone photo quote forms, visual truck-load pricing, and instant tap-to-call dispatch to win higher-margin cleanouts away from national franchises—live in 7-10 business days from $1,000."
      ctaText="Get a Free Junk Removal Mockup"
      problemsHeading="Problems Your Junk Removal Website Must Solve"
      problemsIntro="When homeowners clear out a garage or property managers face a 48-hour move-out deadline, slow websites and vague pricing force them straight to franchise call centers."
      problems={[
        {
          title: 'Endless Phone Tag Over Pile Sizes',
          description:
            'Dispatchers waste hours guessing volume from vague descriptions when customers cannot snap and send photos straight from their phone camera.',
        },
        {
          title: 'Sticker-Shock Anxiety Before Booking',
          description:
            'Without clear 1/4, 1/2, 3/4, and full-truck visual load guides, price-conscious homeowners hesitate to schedule pickup windows.',
        },
        {
          title: 'Losing Same-Day Urgent Cleanouts',
          description:
            'Eviction turnovers, estate cleanouts, and HOA deadlines go to whichever hauler displays operating hours and one-tap mobile calling clearly.',
        },
        {
          title: 'Blending In With Pickup-Truck Operators',
          description:
            'Outdated DIY themes make established dump-truck fleets look amateurish compared to branded national junk removal franchises.',
        },
      ]}
      includesHeading="What Every Junk Removal Website Build Includes"
      includesIntro="Engineered around truck density, fast photo quotes, and effortless mobile dispatch booking."
      includes={[
        {
          title: 'High-Margin Service Pages',
          description:
            'Dedicated sections for furniture removal, appliance recycling, garage and estate cleanouts, hot tub tear-outs, and construction debris.',
        },
        {
          title: 'Local Service-Area Section',
          description:
            'Clear county and suburban dispatch perimeter pages helping your trucks win lucrative cleanouts across affluent zip codes.',
        },
        {
          title: 'Before-and-After Haul Gallery',
          description:
            'Visual cleanout transformations showing cluttered garages, basements, and yards swept spotless alongside your branded trucks.',
        },
        {
          title: 'Sticky Tap-to-Call Dispatch',
          description:
            'Always-visible mobile calling and text-to-book triggers converting urgent same-day visitors into booked stops immediately.',
        },
        {
          title: 'Instant Photo Quote Form',
          description:
            'Mobile-friendly estimate intake with multi-angle smartphone photo uploads, stairs/heavy-item flags, and arrival-window requests.',
        },
        {
          title: 'Google Business Profile Sync',
          description:
            'LocalBusiness structured schema and verified five-star review blocks reinforcing your local Google Maps pack authority.',
        },
        {
          title: 'Cellular-Fast Page Speed',
          description:
            'Lean static code free of slow WordPress plugins, loading rapidly on 4G and 5G phones inside basements or driveways.',
        },
        {
          title: 'Mobile-First Booking Flow',
          description:
            'Thumb-calibrated buttons and readable truck-volume tables built specifically for the 85% of haul customers booking on mobile.',
        },
      ]}
      conceptRef={{
        title: 'Junk Bolt',
        subtitle: 'Fleet Dispatch & Volume Estimator',
        description:
          'Highlighted on our /our-work portfolio, the Junk Bolt concept replaces endless bidding calls with a visual truck-bed volume guide, territory verification, and direct arrival-window booking.',
        image: getFrameUrl(1),
        imageAlt: 'Junk Bolt junk removal website design concept preview with truck volume estimator',
      }}
      howItWorksHeading="How We Launch Your Hauling Site"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Share your hauling fleet details, service cities, and pricing model. We design a free custom homepage mockup so you can inspect the direction first.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We build your photo-quote forms, truck-load volume sections, residential and commercial service pages, and clean local SEO structure.',
        },
        {
          step: '03',
          title: 'Launch Live',
          description:
            'Essential junk removal websites go live in 7-10 business days, connecting straight to your dispatch email with full code ownership.',
        },
      ]}
      pricingSummary="Essential junk removal websites start at $1,000 one-time and launch in 7-10 business days. Professional builds start at $1,500 and add interactive truck-volume quote calculators, multi-city SEO pages, and complete copywriting—no mandatory retainers."
      faqs={[
        {
          q: 'Can customers upload photos of junk piles from their phones?',
          a: 'Yes. Every quote form includes a mobile-friendly upload field so homeowners can attach photos from their camera roll, letting your team price cleanouts accurately before rolling a truck.',
        },
        {
          q: 'How fast can a new junk removal website go live?',
          a: 'Our Essential package launches in 7-10 business days once your logo, pricing rules, and photos are ready. Professional builds typically launch within 2-3 weeks.',
        },
        {
          q: 'Can you separate residential pickups from commercial property cleanouts?',
          a: 'Yes. We create clear pathways for homeowners booking single-item or garage hauls alongside commercial portals highlighting COI compliance, W-9 readiness, and recurring cleanouts.',
        },
        {
          q: 'Will we own the website and all incoming hauling leads?',
          a: 'Yes. You receive 100% ownership of the domain, source code, and every phone call or quote submission with zero per-lead fees or agency lock-in.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Excavation Website Design',
          to: '/excavation-website-design',
          note: 'Debris & site prep',
        },
        {
          label: 'Land Clearing Website Design',
          to: '/land-clearing-website-design',
          note: 'Brush & haul-off',
        },
      ]}
    />
  );
};
