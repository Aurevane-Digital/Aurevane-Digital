import React from 'react';
import { NicheLandingTemplate } from '../components/NicheLandingTemplate';

export const SepticContractorPage: React.FC = () => {
  return (
    <NicheLandingTemplate
      path="/septic-contractor-website-design"
      tradeName="Septic Contractors"
      serviceName="Septic Contractor Website Design"
      serviceType="Septic Contractor Website Design"
      eyebrow="Pumping, Inspection & Install"
      h1="Septic Contractor Website Design Built to Capture Emergency Calls"
      intro="Conversion-driven septic contractor website design for septic pumping, tank inspection, drain-field repair, and new system installation companies across the United States. Turn panicked backup searches into immediate dispatch calls while qualifying routine pumping and real-estate inspection requests—starting at $1,000."
      ctaText="Get a Free Septic Website Mockup"
      problemsHeading="Problems Your Septic Company Website Must Solve"
      problemsIntro="Septic buyers fall into two very different camps: stressed homeowners with an alarm sounding at midnight and buyers or builders scheduling inspections and new drain-field installs."
      problems={[
        {
          title: 'Emergency Searches Lost to Lead Brokers',
          description:
            'When toilets back up or effluent pools in a yard, homeowners tap the first clear local phone button—losing callers to middlemen if your number is buried.',
        },
        {
          title: 'Mixing Pumping Calls With Full Drain-Field Bids',
          description:
            'Sending $350 routine pump-outs and $20,000+ leach-field replacements through identical forms wastes office time on both ends.',
        },
        {
          title: 'Missing Real-Estate & County Permit Trust',
          description:
            'Homebuyers and agents scheduling Point-of-Sale septic inspections demand visible state installer licenses, certified pumper badges, and clear turnaround assurances.',
        },
        {
          title: 'Vague Inquiries Without Tank or Access Info',
          description:
            'Drivers lose route time when forms fail to ask for approximate tank gallonage, buried lid depth, gate width, or hose-run distance from the driveway.',
        },
      ]}
      includesHeading="What Every Septic Contractor Website Includes"
      includesIntro="Built cleanly for both urgent pump-truck dispatch and high-ticket septic system installations."
      includes={[
        {
          title: 'Core Septic Service Pages',
          description:
            'Focused pages covering septic tank pumping, grease traps, hydro-jetting, Point-of-Sale inspections, riser installs, and drain-field replacement.',
        },
        {
          title: 'County & Rural Service-Area Map',
          description:
            'Dedicated territory pages targeting outlying towns, lake communities, and unincorporated counties relying on private wastewater systems.',
        },
        {
          title: 'Installation & Repair Gallery',
          description:
            'Clean field photos showcasing tidy distribution boxes, riser installations, pump trucks, and restored yards after drain-field trenching.',
        },
        {
          title: '24/7 Emergency Tap-to-Call Bar',
          description:
            'High-contrast mobile dispatch buttons connecting flooded basements and sounding septic alarms directly to your on-call pumper.',
        },
        {
          title: 'Smart Pumping & Install Quote Form',
          description:
            'Guided intake capturing service urgency, tank size, lid accessibility, and soil or percolation report uploads for new builds.',
        },
        {
          title: 'Google Business Profile Integration',
          description:
            'Structured LocalBusiness schema, verified homeowner review blocks, and accurate county dispatch alignment for Google Maps visibility.',
        },
        {
          title: 'Rural-Signal Speed Optimization',
          description:
            'Lightweight static pages stripped of bloated scripts so sites load quickly on weak rural cellular towers outside city limits.',
        },
        {
          title: 'Mobile-First Trust Architecture',
          description:
            'Prominent slots for state wastewater certifications, pumping permits, and upfront service-call expectations legible on any phone.',
        },
      ]}
      howItWorksHeading="From Free Septic Mockup to Launch"
      howItWorksSteps={[
        {
          step: '01',
          title: 'Free Mockup',
          description:
            'Send your truck services, licensing details, and service counties. We create a custom homepage concept mockup free before any payment.',
        },
        {
          step: '02',
          title: 'Custom Build',
          description:
            'We code your emergency call bars, pumping and installation quote funnels, service pages, and local SEO structure clean from scratch.',
        },
        {
          step: '03',
          title: 'Launch in 7-10 Days',
          description:
            'Essential septic contractor websites launch in 7-10 business days, routing calls and quote leads directly to your dispatch team.',
        },
      ]}
      pricingSummary="Essential septic contractor websites start at $1,000 one-time with a 7-10 business day turnaround. Professional packages start at $1,500 and add multi-county service-area SEO hubs, full trade copywriting, and custom pumping/install estimators."
      faqs={[
        {
          q: 'How does the website handle emergency backups versus routine pumping?',
          a: 'We place persistent tap-to-call buttons at the top of mobile and desktop screens for urgent backups and alarms, while routing routine pumping, risers, and drain-field installs into a structured quote form.',
        },
        {
          q: 'Can our quote form ask about buried tank lids and truck access?',
          a: 'Yes. We customize form fields to collect tank access status, approximate gallonage, driveway length, and inspection deadlines so your pump operators arrive prepared.',
        },
        {
          q: 'How much does a septic contractor website cost and how fast is launch?',
          a: 'One-time pricing starts at $1,000 for our Essential package (7-10 business days) and $1,500 for our Professional package (2-3 weeks) with zero mandatory monthly retainers.',
        },
        {
          q: 'Do you optimize the site for outlying rural towns and counties?',
          a: 'Yes. We structure dedicated county and rural community service-area sections alongside clean Schema.org markup so homeowners outside main metro centers find your fleet.',
        },
      ]}
      relatedIndustries={[
        {
          label: 'Excavation Website Design',
          to: '/excavation-website-design',
          note: 'Trenching & grading',
        },
        {
          label: 'Land Clearing Website Design',
          to: '/land-clearing-website-design',
          note: 'New lot prep',
        },
      ]}
    />
  );
};
