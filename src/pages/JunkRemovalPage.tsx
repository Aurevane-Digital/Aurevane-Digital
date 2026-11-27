import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';
import { SERVICE_PACKAGES } from '../data/packages';
import { JUNK_REMOVAL_FAQS } from '../data/junkRemovalFaqs';
import { getFrameUrl } from '../utils/frames';

export const JunkRemovalPage: React.FC = () => {
  const essentialPkg = SERVICE_PACKAGES.find((p) => p.id === 'starter') || SERVICE_PACKAGES[0];
  const proPkg = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];
  return (
    <NicheLandingTemplate
      path="/junk-removal-website-design"
      tradeName="Junk Removal"
      serviceName="Web Design for Junk Removal Companies"
      serviceType="Web Design for Junk Removal Companies"
      eyebrow="Hauling & Cleanouts"
      h1="Web Design for Junk Removal Companies That Books More Pickups"
      intro="Custom web design for junk removal companies across the United States. Pair smartphone photo quote forms, visual truck-load pricing, and instant tap-to-call dispatch to win higher-margin cleanouts away from national franchises—live in 7-10 business days from $1,000."
      ctaText="Get a Free Junk Removal Mockup"
      problemsHeading="Problems Web Design for Junk Removal Companies Must Solve"
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
      includesHeading="What Web Design for Junk Removal Companies Includes"
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
      pricingSummary={`Essential junk removal websites start at ${essentialPkg.price} (${(essentialPkg.paymentType || 'One-time project fee').toLowerCase()}) and launch in ${essentialPkg.turnaround.toLowerCase()}. Professional builds start at ${proPkg.price} (${proPkg.turnaround.toLowerCase()}) and add an interactive scope and volume estimator, multi-city local SEO pages, and complete copywriting—with no mandatory monthly retainer.`}
      showPackagePricingCards
      faqs={JUNK_REMOVAL_FAQS}
      relatedIndustries={[
        {
          label: 'SEO for Junk Removal Companies',
          to: '/junk-removal-seo',
          note: 'Map pack & local calls',
        },
        {
          label: 'Excavation Company Website Design',
          to: '/excavation-company-website-design',
          note: 'Debris & site prep',
        },
        {
          label: 'Land Clearing Website Design',
          to: '/land-clearing-website-design',
          note: 'Brush & haul-off',
        },
      ]}
      relatedGuides={[
        {
          label: 'Best Website Design for Junk Removal Companies (2026)',
          to: '/blog/best-website-design-for-junk-removal-companies',
        },
        {
          label: 'What Should a Junk Removal Website Include?',
          to: '/blog/what-should-a-junk-removal-website-include',
        },
        {
          label: 'Junk Removal Website Examples: What to Include',
          to: '/blog/junk-removal-website-examples-what-to-include',
        },
        {
          label: 'How Much Does a Junk Removal Website Cost?',
          to: '/blog/how-much-does-a-junk-removal-website-cost',
        },
        {
          label: 'Local SEO for Junk Removal Companies: 2026 Guide',
          to: '/blog/local-seo-for-junk-removal-companies',
        },
      ]}
    />
  );
};
