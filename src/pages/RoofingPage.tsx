import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const RoofingPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Mobile-First Roofing Websites Built for Storm-Stressed Homeowners',
      paragraphs: [
        'Homeowners rarely sit down at a desktop monitor when water is dripping through a ceiling or wind has lifted architectural shingles off a ridge vent. They grab their smartphone and search local roofing contractors right away. A mobile-first roofing website loads quickly over cellular connections, presents clear credentials without pinching or zooming, and makes your dispatch number effortless to reach.',
        'At Aurevane Digital, we code every roofing website cleanly from the ground up with legible mobile typography, concise service scopes, and structured trust placement—so both urgent repair callers and deliberate full-replacement buyers gain immediate confidence in your crew.',
      ],
      bullets: [
        'Thumb-friendly mobile navigation built around high-intent roofing services',
        'Fast page rendering without bloated templates or sluggish slider plugins',
        'Prominent credential slots for state roofing licenses, liability insurance, and manufacturer certifications',
        'Clear distinction between residential steep-slope, metal roofing, and commercial flat systems',
      ],
    },
    {
      h2: 'Dual Intake Paths: Emergency Tap-to-Call vs. Planned Roof Replacements',
      paragraphs: [
        'Emergency tarp jobs and planned full roof replacements carry completely different buyer mindsets and margin profiles. Forcing both types of prospects into the same generic contact form causes urgent callers to leave and fails to qualify property owners shopping architectural shingle or standing seam metal upgrades.',
        'We separate these journeys deliberately. Urgent storm damage and active leak visitors see a high-contrast tap-to-call dispatch path immediately above the fold, while homeowners planning reroofs, storm insurance inspections, or commercial coatings enter a structured quote-request funnel capturing roof type, approximate pitch or square footage, and photo uploads.',
      ],
      bullets: [
        'Persistent tap-to-call phone triggers for active leaks, blown-off shingles, and emergency tarping',
        'Multi-step planned quote-request funnel for full replacements, gutters, and metal upgrades',
        'Smartphone photo upload allowing homeowners to submit fascia, flashing, or hail damage snapshots',
        'Separate commercial roof coating and property manager RFP intake routing',
      ],
    },
    {
      h2: 'Before-and-After Roofing Project Galleries That Close High-Value Bids',
      paragraphs: [
        'When a property owner is preparing to spend five figures on a roof replacement, generic stock photographs undermine credibility instantly. Homeowners and insurance adjusters want proof of straight ridge lines, clean valley metalwork, proper drip-edge flashing, and spotless yard magnet sweeps.',
        'We structure categorized before-and-after project galleries organized by neighborhood, roofing material, and job type—showing torn-off decking repairs alongside finished architectural shingle, slate, or standing seam installations so prospects can inspect your craftsmanship up close.',
      ],
      bullets: [
        'Interactive before-and-after transformations paired with scope notes and material specs',
        'Filterable project showcases for architectural shingles, metal roofing, and flat TPO/EPDM systems',
        'Real crew and job-site protection imagery documenting landscaping tarps and magnetic cleanup',
        'Direct quote links embedded beneath each project gallery item',
      ],
    },
    {
      h2: 'Local SEO Structure Engineered for City and County Roofing Searches',
      paragraphs: [
        'Outranking storm-chasing lead aggregators across your metro requires structured local search architecture rather than thin keyword stuffing. We organize individual service pages by roof system and build dedicated county and suburban city hubs showcasing real neighborhoods, local hail and wind codes, and verified Google reviews.',
        'Combined with clean Schema.org Service and LocalBusiness markup, semantic HTML headings, and crisp internal linking, search engines and local homeowners alike clearly understand every municipality your roofing trucks serve across the United States.',
      ],
      bullets: [
        'Dedicated service pages for roof replacement, storm repair, metal roofing, and commercial roofing',
        'Scalable city and county service-area hubs referencing regional weather conditions and codes',
        'Schema.org Service, LocalBusiness, and FAQPage JSON-LD structured data',
        'Clean URL hierarchy and internal cross-linking ready for long-term local ranking growth',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How do you handle urgent leak calls differently from planned roof replacement quotes?',
      a: 'We build two clear conversion paths: prominent tap-to-call triggers above the fold on mobile for active leaks and emergency tarping, alongside a structured quote-request form that gathers roof material, property type, timeline, and optional damage photos for planned replacements.',
    },
    {
      q: 'What should a roofing contractor website include in its project gallery?',
      a: 'Your gallery should showcase authentic before-and-after transformations organized by material (architectural shingle, standing seam metal, flat commercial membranes) with short notes on ventilation, flashing upgrades, and cleanup protection rather than stock photos.',
    },
    {
      q: 'How much does a custom roofing contractor website cost?',
      a: `Website projects are one-time fees with no mandatory monthly retainer. Our Essential package starts at ${essentialPrice} (delivered in ${essentialTime.toLowerCase()}), and our flagship Professional package starts at ${proPrice} (delivered in ${proTime.toLowerCase()}) with custom quote funnels, project galleries, and multi-city local SEO structure.`,
    },
    {
      q: 'Will we own our roofing website code, domain, and leads?',
      a: 'Yes. Upon final project completion, you own 100% of your website code, domain registration, visual assets, and every phone call or quote request submitted through your site with zero lock-in contracts.',
    },
  ];

  const relatedLinks = [
    { label: 'Contractor Website Design', to: '/contractor-website-design' },
    { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
    { label: 'Website Redesign Services', to: '/website-redesign' },
    { label: 'Transparent Packages & Pricing', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/roofing-website-design"
      name="Roofing Website Design"
      h1="Roofing Website Design Built for Storm Calls and Full Replacements"
      intro="Mobile-first websites for residential and commercial roofing contractors across the United States—combining emergency tap-to-call dispatch paths, structured replacement quote funnels, before-and-after roof galleries, and local SEO architecture."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Roofing Website Design',
        'Roofing Contractor Web Development',
        'Roof Replacement Quote Funnels',
        'Local SEO for Roofing Companies',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
