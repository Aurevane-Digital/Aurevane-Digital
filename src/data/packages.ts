import { ServicePackage } from '../types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Turnkey Presence',
    price: '$1,000',
    priceNum: 1000,
    turnaround: '10 to 14 Business Days',
    description:
      'Essential bespoke digital foundation for independent contractors seeking an immediate escape from cookie-cutter templates.',
    bestFor: 'Specialty trades, solo contractors, and growing boutique local services.',
    features: [
      'Bespoke 3-Page Architecture (Home, Services, Contact)',
      'Mobile-First Inspection Intake Form',
      'Sub-1 Second Speed Optimization (Clean semantic code)',
      'Basic Local Google Schema Markup',
      'High-Resolution Project Gallery Grid',
      'Direct Domain & SSL Hosting Deployment',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most Selected Flagship',
    tagline: 'High-Conversion',
    featured: true,
    price: '$1,500',
    priceNum: 1500,
    turnaround: '2 to 3 Weeks',
    description:
      'Comprehensive trade authority platform with dedicated quote estimators, case study galleries, and full local SEO siloing.',
    bestFor: 'Established contractors and luxury firms looking to dominate regional bids and charge premium rates.',
    features: [
      'Bespoke 6 to 8 Page System (City Hubs, Trade Specializations)',
      'Interactive Scope / Volume Estimator (Custom to your trade)',
      'Multi-City Geo SEO Silo Structure for County Dominance',
      'Full Copywriting & Brand Positioning Polish',
      'Google Analytics 4 & Conversion Event Tracking',
      'SMS / Email Lead Notification Webhook Pipeline',
      'High-Speed CDN & Zero Maintenance Architecture',
    ],
  },
  {
    id: 'custom',
    name: 'Custom',
    tagline: 'Enterprise & Multi-Unit',
    price: "Let's Discuss",
    priceNum: 3500,
    turnaround: '4 to 6 Weeks',
    description:
      'Tailored digital platforms for multi-location contractors, enterprise franchises, or custom customer portal integrations.',
    bestFor: 'Multi-crew contractors, commercial infrastructure firms, and high-volume operations.',
    features: [
      'Full Territory Franchise & Multi-Location Dispatch System',
      'Custom CRM / Jobber / Procore / Housecall Pro Webhooks',
      'Bespoke Drone Photography & Video Creative Direction',
      'Customer Portal / Live Bid Tender Specification Engine',
      'Dedicated Quarterly CRO & Iteration Retainer',
      'Priority 24/7 SLA Technical Support',
    ],
  },
];

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'geo-silos',
    name: 'County Geo SEO Expansion (5 Target Suburbs)',
    price: 450,
    description: 'Targeted service pages designed to capture high-intent suburban homeowner searches.',
  },
  {
    id: 'estimator-tool',
    name: 'Interactive Visual Scope & Price Estimator',
    price: 550,
    description: 'Interactive client visualizer (like Junk Bolt truck bed or shingle picker) to boost qualified inquiries.',
  },
  {
    id: 'copy-revamp',
    name: 'Editorial Brand Voice & High-Ticket Copy Polish',
    price: 400,
    description: 'Dismantles generic contractor jargon and builds authoritative language that justifies high bids.',
  },
  {
    id: 'crm-sync',
    name: 'Jobber / ServiceTitan / Procore Automated Bridge',
    price: 350,
    description: 'Instantly push form submissions directly into your existing dispatch CRM.',
  },
];
