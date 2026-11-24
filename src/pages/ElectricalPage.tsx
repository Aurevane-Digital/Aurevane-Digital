import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';
import { getFrameUrl } from '../utils/frames';

export const ElectricalPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/electrical-contractor-website-design"
      tradeName="Electrical Contractors"
      serviceName="Electrical Contractor Website Design"
      serviceType="Electrical Contractor Website Design"
      eyebrow="Licensed Master Electricians"
      h1="Electrical Contractor Website Design That Brings In Service Calls"
      intro="High-trust electrical contractor website design built for licensed residential electricians and commercial MEP teams across the United States. Combine prominent state licensing and insurance badges, 24/7 emergency call triggers, and structured panel-upgrade or commercial RFP forms—live in 7-10 business days from $1,000."
      ctaText="Get a Free Electrician Website Mockup"
      problemsHeading="Problems Your Electrical Contractor Website Must Solve"
      problemsIntro="Electrical failures trigger immediate safety stress. Homeowners checking flickering panels and commercial facility managers vetting switchgear bids refuse to gamble on unverified sites."
      problems={[
        {
          title: 'Hidden Master License & Insurance Proof',
          description:
            'Safety-conscious buyers leave immediately if state electrical contractor numbers, bonding limits, and liability coverage are buried in fine print.',
        },
        {
          title: 'Emergency Tripped Breakers Mixed With Rewires',
          description:
            'Panicked callers with partial power outages need instant one-tap dispatch numbers, while Level 2 EV charger and 200-amp panel shoppers want scoped estimates.',
        },
        {
          title: 'No Commercial Print or Switchgear RFP Channel',
          description:
            'General contractors and warehouse managers need dedicated commercial intake supporting 3-phase specs, tenant build-out drawings, and OSHA EMR metrics.',
        },
        {
          title: 'Slow Pages Inside Basements and Utility Rooms',
          description:
            'Homeowners standing beside tripped breaker boxes on weak indoor signal abandon heavy template sites that take over three seconds to render.',
        },
      ]}
      includesHeading="What Every Electrical Website Build Includes"
      includesIntro="Engineered around safety trust, emergency dispatch speed, and clear residential vs. commercial lead routing."
      includes={[
        {
          title: 'Focused Electrical Service Pages',
          description:
            'Individual pages for 200-amp panel upgrades, EV chargers, standby generators, whole-home rewiring, recessed lighting, and commercial troubleshooting.',
        },
        {
          title: 'Metro & County Service-Area Hubs',
          description:
            'Dedicated neighborhood and municipal sections clarifying local NEC permit compliance and dispatch coverage boundaries.',
        },
        {
          title: 'Clean Panel & Fixture Gallery',
          description:
            'Before-and-after mechanical galleries showcasing tidy breaker labeling, straight conduit runs, EV wall boxes, and exterior lighting.',
        },
        {
          title: '24/7 Emergency Tap-to-Call Bar',
          description:
            'Persistent high-contrast calling triggers putting live dispatch and on-call trouble trucks one tap away on every screen.',
        },
        {
          title: 'Residential & Commercial Quote Form',
          description:
            'Structured intake capturing panel photos, charger model specs, project urgency, and commercial electrical blueprint uploads.',
        },
        {
          title: 'Google Business Profile Integration',
          description:
            'Complete LocalBusiness schema, state license metadata, and verified homeowner reviews reinforcing your Google Maps ranking.',
        },
        {
          title: 'Cellular-Fast Core Web Vitals',
          description:
            'Lean custom code free of slow builder scripts, loading rapidly in utility rooms, garages, and commercial jobsites.',
        },
        {
          title: 'Mobile-First Licensed Trust Design',
          description:
            'Clear state license badge placement, master electrician highlights, and upfront service expectations formatted cleanly on phones.',
        },
      ]}
      conceptRef={{
        title: 'Action Electrical',
        subtitle: 'Commercial Electrical & Mechanical Contracting',
        description:
          'Showcased on our /our-work page, the Action Electrical concept illustrates high-contrast emergency MEP dispatch routing, OSHA EMR safety scoreboards, and commercial switchgear RFP access.',
        image: getFrameUrl(218),
        imageAlt: 'Action Electrical electrician and electrical contractor website design concept preview',
      }}
      howItWorksHeading="From Free Electrician Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Send your state license details, residential and commercial services, and coverage cities. We design a free custom homepage mockup first.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We code your emergency call bars, dedicated electrical service pages, license badges, panel galleries, and estimate forms cleanly.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential electrical contractor websites go live in 7-10 business days with 100% code ownership and direct lead notifications.',
        },
      ]}
      pricingSummary="Essential electrician websites start at $1,000 one-time and launch in 7-10 business days. Professional platforms start at $1,500 and add multi-city local SEO architecture, commercial RFP portals, and complete copywriting."
      faqs={[
        {
          q: 'Can our state electrical license numbers and insurance appear right at the top?',
          a: 'Yes. We display your state master or contractor license numbers, bonding, and liability insurance badges prominently in the hero and near every booking button.',
        },
        {
          q: 'Should we separate emergency service calls from commercial electrical bids?',
          a: 'Yes. Dual-path routing gives urgent residential callers instant tap-to-call access while guiding general contractors to a commercial RFP form supporting plan uploads.',
        },
        {
          q: 'How much does an electrician website cost and how long does it take?',
          a: 'Our one-time Essential package starts at $1,000 and goes live in 7-10 business days. Our Professional package starts at $1,500 and launches in 2-3 weeks.',
        },
        {
          q: 'Can homeowners upload a photo of their breaker panel when requesting a quote?',
          a: 'Yes. We can add smartphone photo upload fields to your quote form so customers can send breaker box or EV-location pictures upfront.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Roofing Website Design',
          to: '/roofing-website-design',
          note: 'Urgent home calls',
        },
        {
          label: 'Septic Contractor Website Design',
          to: '/septic-contractor-website-design',
          note: '24/7 dispatch design',
        },
      ]}
    />
  );
};
