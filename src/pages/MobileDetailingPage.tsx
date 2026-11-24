import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';

export const MobileDetailingPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/mobile-detailing-website-design"
      tradeName="Mobile Detailing"
      serviceName="Mobile Detailing Website Design"
      serviceType="Mobile Detailing Website Design"
      eyebrow="On-Site Automotive Care"
      h1="Mobile Detailing Website Design With Package Booking Built In"
      intro="Booking-ready mobile detailing website design for independent detail vans, paint correction specialists, and ceramic coating studios across the United States. Display transparent sedan, SUV, and truck package tiers, highlight interior and gloss transformations, and verify ZIP-code travel radiuses—live in 7-10 business days from $1,000."
      ctaText="Get a Free Detailing Website Mockup"
      problemsHeading="Problems Your Mobile Detailing Website Must Solve"
      problemsIntro="Car owners book mobile detailers for convenience. Every extra text back-and-forth over vehicle size, water/power access, or pricing sends impatient drivers straight to another operator."
      problems={[
        {
          title: 'Phone Tag Over Availability and Vehicle Sizes',
          description:
            'Busy commuters want to select coupe, sedan, midsize SUV, or three-row truck tiers and request an arrival window without three rounds of voicemail.',
        },
        {
          title: 'Unclear Differences Between Wash & Full Correction',
          description:
            'Drivers hesitate when websites lump express interior resets, deep shampoo extraction, single-stage polish, and ceramic coatings into vague bullet lists.',
        },
        {
          title: 'Wasted Windshield Time Outside Route Zones',
          description:
            'Without an explicit ZIP-code and neighborhood service perimeter, vans lose profitable hours driving across counties for single basic details.',
        },
        {
          title: 'Zero Visual Proof of Swirl Removal & Extraction',
          description:
            'High-ticket paint correction and stained-upholstery buyers expect crisp before-and-after inspection photos instead of generic stock car images.',
        },
      ]}
      includesHeading="What Every Mobile Detailing Website Includes"
      includesIntro="Engineered for high-margin upsells, tight route density, and fast smartphone booking."
      includes={[
        {
          title: 'Tiered Detailing Service Pages',
          description:
            'Structured pages separating interior decontamination, exterior wash-and-sealant, multi-stage paint correction, ceramic coatings, and fleet vans.',
        },
        {
          title: 'ZIP-Code Service-Area Section',
          description:
            'Clear neighborhood coverage maps and postal-code verification keeping your mobile rig clustered inside profitable metro territories.',
        },
        {
          title: 'Before-and-After Detail Gallery',
          description:
            'Swirl-free paint gloss shots and heavily soiled carpet restoration pairs demonstrating meticulous technician care.',
        },
        {
          title: 'One-Tap Call & SMS Text-to-Book',
          description:
            'Persistent mobile footer triggers letting drivers call or text interior stain photos directly from office lots or driveways.',
        },
        {
          title: 'Package & Add-On Booking Form',
          description:
            'Self-service intake capturing vehicle class, desired package, pet-hair or odor add-ons, water/power availability, and preferred date.',
        },
        {
          title: 'Google Business Profile Sync',
          description:
            'Clean LocalBusiness schema and verified five-star driver reviews supporting your local Google Maps ranking.',
        },
        {
          title: 'Fast Image-Optimized Speed',
          description:
            'Crisp WebP vehicle photography paired with lean static code so high-res galleries load instantly on cellular data.',
        },
        {
          title: 'Mobile-First Package Tables',
          description:
            'High-contrast pricing matrices built for 85%+ mobile traffic, showing clear starting rates by vehicle size without horizontal scrolling.',
        },
      ]}
      howItWorksHeading="From Free Detailing Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Share your package menu, vehicle upcharges, and service radius. We design a free custom homepage mockup before you pay.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We build your vehicle package tables, booking forms or external scheduler links, transformation galleries, and local SEO pages.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential detailing websites go live in 7-10 business days, connecting straight to your phone, calendar, or CRM.',
        },
      ]}
      pricingSummary="Our Essential mobile detailing website starts at $1,000 one-time and launches in 7-10 business days. Professional packages start at $1,500 and add interactive package calculators, multi-city suburb pages, and custom copywriting."
      faqs={[
        {
          q: 'Can the website connect to our existing detailing booking software?',
          a: 'Yes. We can link directly to your booking calendar (such as Urable, Housecall Pro, or Square) or configure a clean multi-step vehicle booking request form.',
        },
        {
          q: 'Should mobile detailers show starting prices on their website?',
          a: 'Yes. Clear starting prices across sedan, SUV, and full-size truck tiers filter out bargain hunters and encourage higher-margin interior and ceramic upgrades.',
        },
        {
          q: 'How much does a mobile detailing website cost and how quickly does it launch?',
          a: 'Essential builds start at $1,000 one-time and launch in 7-10 business days. Professional builds start at $1,500 and typically deploy in 2-3 weeks with zero mandatory retainers.',
        },
        {
          q: 'Do you set up pages for surrounding suburbs and recurring fleet accounts?',
          a: 'Yes. We include dedicated service-area sections for adjacent neighborhoods plus clear commercial fleet wash and recurring maintenance membership blocks.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Junk Removal Website Design',
          to: '/junk-removal-website-design',
          note: 'Route-based dispatch',
        },
        {
          label: 'Roofing Website Design',
          to: '/roofing-website-design',
          note: 'Before/after galleries',
        },
      ]}
    />
  );
};
