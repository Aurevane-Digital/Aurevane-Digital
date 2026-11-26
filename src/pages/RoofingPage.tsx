import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';
import { getFrameUrl } from '../utils/frames';

export const RoofingPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/roofing-website-design"
      tradeName="Roofing Contractors"
      serviceName="Roofing Website Design"
      serviceType="Roofing Website Design"
      eyebrow="Storm Season & Replacements"
      h1="Roofing Website Design Built for Storm Calls and Full Replacements"
      intro="High-converting roofing website design engineered for residential and commercial roofers across the United States. Combine storm-season inspection booking, clear insurance-claim restoration pages, before-and-after roof galleries, and urgent leak tap-to-call triggers—live in 7-10 business days starting at $1,000."
      ctaText="Get a Free Roofing Website Mockup"
      problemsHeading="Problems Your Roofing Website Must Solve"
      problemsIntro="After hailstorms and high winds roll through a county, storm-chasing aggregators flood Google. Established local roofers win by proving neighborhood credibility and fast inspection scheduling."
      problems={[
        {
          title: 'Active Leaks & Storm Claims Mixed Into Generic Forms',
          description:
            'Water dripping through drywall demands a live emergency tarping hotline, whereas storm-damage inspections and architectural shingle upgrades need guided booking.',
        },
        {
          title: 'Confusing Homeowners on Insurance-Claim Steps',
          description:
            'Without clear storm-inspection documentation guides explaining adjuster meetings and scope supplements, wary homeowners delay calling.',
        },
        {
          title: 'Missing Material Proof & Yard-Cleanup Trust',
          description:
            'Five-figure reroof buyers inspect straight ridge lines, valley flashing metalwork, and magnetic nail-sweep promises before allowing ladders on their home.',
        },
        {
          title: 'Weak Suburban Visibility Outside Shop Zip Codes',
          description:
            'One-page roofing brochure sites rarely rank across adjacent storm corridors, affluent subdivisions, and commercial flat-roof districts.',
        },
      ]}
      includesHeading="What Every Roofing Website Build Includes"
      includesIntro="Engineered for storm season readiness, inspection booking, and high-ticket replacement authority."
      includes={[
        {
          title: 'System & Insurance-Claim Pages',
          description:
            'Focused pages for full roof replacement, emergency storm tarping, hail insurance claims, standing seam metal, and commercial TPO/EPDM systems.',
        },
        {
          title: 'Storm-Corridor Service-Area Hubs',
          description:
            'City and county service-area sections highlighting regional wind/hail code familiarity and active neighborhood roof counts.',
        },
        {
          title: 'Before-and-After Roof Gallery',
          description:
            'Material-sorted project showcases displaying torn-off decking repairs beside crisp architectural shingle and metal installations.',
        },
        {
          title: 'Urgent Leak Tap-to-Call Dispatch',
          description:
            'Sticky mobile phone triggers putting immediate storm-tarp and active-leak dispatch directly under homeowners’ thumbs.',
        },
        {
          title: 'Inspection Booking & Quote Form',
          description:
            'Two-step inspection request capturing roof age, shingle vs. metal preference, storm-date notes, and damage photo uploads.',
        },
        {
          title: 'Google Business Profile Sync',
          description:
            'LocalBusiness schema markup, state roofing license slots, and verified homeowner reviews supporting map-pack rankings.',
        },
        {
          title: 'Zero-Bloat Speed After Storms',
          description:
            'Lightweight static architecture delivering near-instant mobile rendering even when storm outages strain local cell towers.',
        },
        {
          title: 'Mobile-First Certification Display',
          description:
            'Prominent placement for manufacturer impact-rating certifications, liability coverage, and workmanship warranty assurances.',
        },
      ]}
      conceptRef={{
        title: 'Storm Shield',
        subtitle: 'Flagship Contractor & Insurance Restoration',
        description:
          'Featured directly on /our-work, the Storm Shield concept demonstrates architectural drone roof imagery, Class 4 impact-resistant shingle tiers, and a frictionless two-step inspection scheduler.',
        image: getFrameUrl(285),
        imageAlt: 'Storm Shield custom roofing website design concept preview with inspection booking',
      }}
      howItWorksHeading="From Free Roofing Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Share your roofing specialties, manufacturer credentials, and service counties. We create a custom homepage mockup free upfront.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We build your insurance-claim guides, inspection booking forms, material galleries, leak call bars, and local SEO pages cleanly.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential roofing websites launch in 7-10 business days, ready to convert storm inspections and planned replacements with 100% ownership.',
        },
      ]}
      pricingSummary="Essential roofing contractor websites start at $1,000 one-time and go live in 7-10 business days. Professional packages start at $1,500 and add multi-city local SEO pages, full copywriting, and custom inspection qualification tools."
      faqs={[
        {
          q: 'How can a roofing website convert both emergency leaks and planned replacements?',
          a: 'We place immediate tap-to-call buttons above the fold on mobile for active leaks and blown-off shingles, while directing replacement and hail-claim buyers to a structured inspection form.',
        },
        {
          q: 'Do you include dedicated storm inspection and insurance-claim pages?',
          a: 'Yes. We organize clear step-by-step storm restoration sections explaining hail documentation, adjuster coordination, and code upgrades without pushy storm-chaser clichés.',
        },
        {
          q: 'How much does a custom roofing website cost and when can it launch?',
          a: 'Our one-time Essential package starts at $1,000 and launches in 7-10 business days. Our Professional package starts at $1,500 and deploys in 2-3 weeks.',
        },
        {
          q: 'Do we own the domain, roof gallery photos, and every lead?',
          a: 'Yes, 100%. You retain full control over your domain, custom code, and incoming inspection calls or quote forms with zero ongoing agency lock-in.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Fence Company Website Design',
          to: '/fence-company-website-design',
          note: 'Exterior upgrades',
        },
        {
          label: 'Electrical Contractor Website Design',
          to: '/electrical-contractor-website-design',
          note: 'Storm & emergency calls',
        },
      ]}
      relatedGuides={[
        {
          label: 'Emergency vs. Planned Job Website Design',
          to: '/blog/emergency-vs-planned-job-website-design-for-contractors',
        },
        {
          label: 'Why Contractors Need a Project Gallery',
          to: '/blog/why-contractors-need-a-project-gallery',
        },
      ]}
    />
  );
};
