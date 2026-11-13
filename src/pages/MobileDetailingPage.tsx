import React from 'react';
import { ServicePageTemplate, ServiceSection } from '../components/ServicePageTemplate';
import { SERVICE_PACKAGES } from '../data/packages';

export const MobileDetailingPage: React.FC = () => {
  const essentialPrice = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.price || '$1,000';
  const proPrice = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.price || '$1,500';
  const essentialTime = SERVICE_PACKAGES.find((p) => p.id === 'starter')?.turnaround || '7 to 10 Business Days';
  const proTime = SERVICE_PACKAGES.find((p) => p.id === 'professional')?.turnaround || '2 to 3 Weeks';

  const sections: ServiceSection[] = [
    {
      h2: 'Seamless Five-Step Online Booking Built Directly for Mobile Vans',
      paragraphs: [
        'Mobile car detailing is a fast-paced, high-convenience service. Vehicle owners searching for a detailer while at work or at home do not want to endure three rounds of phone tag just to check whether an operator has an opening on Friday morning. If your mobile car detailing website forces customers to dial a phone number for basic availability, many will bounce to local franchise competitors.',
        'We engineer multi-step self-service booking funnels optimized for mobile touchscreens. Customers easily select their vehicle classification (coupe, sedan, compact SUV, full-size truck, minivan), choose their desired service tier, select high-margin add-ons like pet hair removal or ozone treatment, verify their location, and submit a confirmed booking request in under two minutes.',
      ],
      bullets: [
        'Vehicle size and class selector adjusting pricing tiers using your client-approved rules',
        'Intuitive package selector with customizable add-on services (engine bay, pet hair, ceramic spray)',
        'Convenient arrival window selection synchronized with your daily mobile van routes',
        'Optional integration with compatible mobile detailing booking platforms (scoped separately per project)',
      ],
    },
    {
      h2: 'Transparent Package Comparison Tables for Everyday and Specialty Detailing',
      paragraphs: [
        'Customer confusion over pricing kills conversion rates. When potential clients visit a detailing business website design, they want to know immediately what differentiates an express wash from a full interior decontamination, a multi-stage paint correction, or an accredited ceramic coating application.',
        'We design high-contrast, transparent package comparison matrices that clearly outline deliverables for every budget level. From basic interior resets to multi-year ceramic coating website design showcases, our pricing tables eliminate ambiguity, build trust, and encourage vehicle owners to upgrade to higher-margin protection packages.',
      ],
      bullets: [
        'Side-by-side package tables for interior detailing, exterior wash & wax, and full resets',
        'Specialty service feature sections for ceramic coating website design and paint correction',
        'Transparent starting rates with vehicle size upcharges clearly communicated',
        'Highlighted feature lists specifying steam cleaning, hot water extraction, and leather conditioning',
      ],
    },
    {
      h2: 'Interactive ZIP-Code Territory and Mobile Service-Area Selector',
      paragraphs: [
        'Operating a mobile rig means your profitability is tied directly to route density and travel time. Sending an equipped van across two counties for a single basic sedan wash eats into your daily margins through fuel and unpaid windshield time.',
        'We build interactive ZIP-code search tools directly into your car detailing website design. Visitors enter their five-digit postal code to immediately verify whether their home or workplace falls within your primary free travel perimeter or requires a travel surcharge, protecting your daily schedule while expanding visibility across target suburban zip codes.',
      ],
      bullets: [
        'Instant ZIP-code perimeter lookup confirming local mobile van service eligibility',
        'Automated notification of designated neighborhood service days to group nearby appointments',
        'Clear travel radius parameters highlighting core county and suburban coverage zones',
        'Local SEO schema linking your mobile operations with regional Google Business Profile territories',
      ],
    },
    {
      h2: 'High-Impact Before-and-After Galleries Highlighting Transformation',
      paragraphs: [
        'In automotive detailing, high-resolution visual evidence is your most powerful sales asset. Car enthusiasts and everyday vehicle owners want to see dramatic visual proof of your swirl-free polishing, leather restoration, and neglected interior deep cleans.',
        'We build responsive before-and-after image showcases designed for mobile swiping. From heavily soiled family SUV upholstery to deep gloss paint correction website design showcases, real transformation photos demonstrate the meticulous care your technicians apply to every vehicle.',
      ],
      bullets: [
        'Interactive before-and-after slider visualizers comparing dirty interiors to pristine finishes',
        'Paint correction gloss comparisons under professional detailing inspection lights',
        'Real customer vehicle showcases categorized by exotic cars, family haulers, and work trucks',
        'Fast-loading next-gen WebP images that maintain razor-sharp detail on smartphone screens',
      ],
    },
    {
      h2: 'Frictionless Tap-to-Call and One-Touch Text-to-Book Buttons',
      paragraphs: [
        'Over eighty-five percent of mobile detailing traffic originates on mobile phones. When customers are browsing your site while waiting in an office lobby or standing in their driveway inspecting a stain, they frequently prefer sending a quick text message or placing a quick call rather than filling out an extensive form.',
        'Every detailing business website design we engineer features persistent mobile action bars with dedicated click-to-call and SMS text-to-book buttons. Customers can tap a single button to initiate a text conversation with your dispatch manager, attach photos of their interior stains, and receive immediate assistance.',
      ],
      bullets: [
        'Sticky mobile footer bar with instant click-to-call and text-to-book triggers',
        'Pre-populated SMS text templates enabling quick one-tap customer inquiries',
        'Prominent business operating hours and clear booking response expectations',
        'Lightweight clean code delivering fast load times on mobile connections',
      ],
    },
    {
      h2: 'Recurring Maintenance Subscriptions, Commercial Fleet Accounts, and Trust',
      paragraphs: [
        'While one-off details provide immediate revenue, recurring bi-weekly maintenance memberships and commercial fleet accounts establish consistent, predictable monthly cash flow. If a mobile car detailing website only promotes single-service visits, you leave significant recurring revenue on the table.',
        'Our platforms include dedicated landing sections for recurring membership maintenance clubs and fleet detailing website design packages for corporate fleets, executive car services, and local business vans. Paired with authentic verified customer reviews from Google Business Profile, your digital presence projects reliable, institutional capability.',
      ],
      bullets: [
        'Dedicated subscription membership club presentations outlining monthly savings',
        'Corporate fleet detailing program overviews with multi-vehicle discount structures',
        'Automated Google Business Profile customer review feeds featuring verified 5-star ratings',
        'Clear commercial insurance and chemical compliance certifications for corporate parking lots',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How much does a custom mobile detailing website design cost?',
      a: `Our mobile car detailing website packages are transparent one-time project fees with no mandatory monthly retainer. Our Essential package starts at ${essentialPrice} (delivered in ${essentialTime}), and our Professional package featuring multi-service package tables, custom booking funnels, and local SEO starts at ${proPrice} (delivered in ${proTime}). Full pricing details and optional monthly plans can be explored on our packages page.`,
    },
    {
      q: 'Can the detailing website link to our existing booking or scheduling platform?',
      a: 'Yes. We can link directly to your external booking or scheduling checkout pages, and custom CRM or booking integrations can be scoped and quoted per project.',
    },
    {
      q: 'Should mobile detailers display exact package prices on their website?',
      a: 'Yes. Vehicle owners strongly favor transparent pricing. Displaying clear starting prices for sedans, SUVs, and trucks eliminates checkout hesitation and pre-qualifies customers before they contact your dispatch.',
    },
    {
      q: 'How does a ZIP-code service-area selector help our detailing business?',
      a: 'An instant ZIP-code selector allows website visitors to confirm whether your van travels to their neighborhood before booking. This prevents booking requests from outside your service territory and helps group appointments for higher daily route density.',
    },
    {
      q: 'How can our mobile detailing website get found by more local customers?',
      a: 'We implement local SEO architecture, structured Schema.org LocalBusiness data, and dedicated city/suburb landing pages. When paired with active Google Business Profile reviews, your site ranks prominently when local car owners search for detailing.',
    },
    {
      q: 'Will my website show up in ChatGPT, Perplexity or Google AI Overviews?',
      a: 'No web designer can guarantee placement in AI overviews or top Google positions. However, we engineer clean, lightweight code with transparent service descriptions, structured pricing data, and comprehensive FAQs that make it easy for AI engines and search crawlers to recognize, index, and quote your mobile detailing business accurately.',
    },
  ];

  const relatedLinks = [
    { label: 'Home Services Website Design', to: '/home-services-website-design' },
    { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
    { label: 'Website Redesign', to: '/website-redesign' },
    { label: 'Packages', to: '/packages' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ServicePageTemplate
      path="/mobile-detailing-website-design"
      name="Mobile Detailing Website Design"
      h1="Mobile Detailing Website Design With Online Booking Built In"
      intro="Fast, mobile-first websites for mobile car detailers across the United States, built around online booking, clear packages and a service-area selector."
      sections={sections}
      faqs={faqs}
      serviceType={[
        'Mobile detailing website design',
        'Auto detailing website design',
        'Mobile detailing booking website',
      ]}
      relatedLinks={relatedLinks}
    />
  );
};
