import { ServicePackage } from '../types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Essential',
    tagline: 'Turnkey Presence',
    price: '$1,000',
    pricePrefix: 'Starting at',
    priceNum: 1000,
    paymentType: 'One-time project fee',
    turnaround: '7 to 10 Business Days',
    description:
      'An essential bespoke digital foundation for independent contractors ready to establish a professional online presence beyond cookie-cutter templates.',
    bestFor: 'Specialty trades, independent contractors, and growing boutique local service businesses.',
    features: [
      'Bespoke 3-Page Architecture (Home, Services, Contact)',
      'Mobile-First Inquiry & Inspection Form',
      'Performance-Focused Speed Optimization',
      'Foundational Local SEO & Google Schema Markup',
      'High-Resolution Project Gallery',
      'Domain Configuration & SSL Deployment',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'High-Conversion / Most Popular',
    tagline: 'Trade Authority',
    featured: true,
    price: '$1,500',
    pricePrefix: 'Starting at',
    priceNum: 1500,
    paymentType: 'One-time project fee',
    turnaround: '2 to 3 Weeks',
    description:
      'A comprehensive trade authority platform engineered to capture qualified inquiries, establish regional credibility, and position your business above local competitors.',
    bestFor:
      'Established contractors, multi-service businesses, and premium firms looking to expand their regional presence and attract higher-value projects.',
    features: [
      'Bespoke 6 to 8 Page Website Architecture (City Hubs & Trade Specializations)',
      'Custom Interactive Scope & Volume Estimator',
      'Multi-City Local SEO Architecture',
      'Full Website Copywriting & Brand Positioning',
      'Google Analytics 4 & Conversion Event Tracking',
      'Automated Email & SMS Lead Notifications',
      'High-Performance CDN & Optimized Infrastructure',
      'Advanced Project Galleries & Case Study Showcases',
    ],
  },
  {
    id: 'custom',
    name: 'Enterprise',
    tagline: 'Enterprise & Multi-Unit',
    price: "Let's Discuss",
    priceNum: 3500,
    paymentType: 'Custom one-time project quotation',
    turnaround: '4 to 6 Weeks (subject to project scope)',
    description:
      'Bespoke digital ecosystems engineered for complex operations, multi-location businesses, and enterprise-level service providers. Designed to streamline customer experiences and support scalable growth.',
    bestFor:
      'Multi-crew contractors, commercial infrastructure firms, regional franchises, and high-volume service operations.',
    features: [
      'Multi-Location Website & Territory Architecture',
      'Custom Website Functionality',
      'Bespoke Customer Portals (where required)',
      'Advanced Inquiry & Tender Systems',
      'Custom Integrations (separately scoped)',
      'Dedicated Conversion Optimization Strategy',
      'Advanced Performance & Infrastructure Optimization',
      'Priority Technical Support',
    ],
  },
];

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  pricePrefix?: string;
  custom?: boolean;
  description: string;
  note?: string;
}

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'geo-silos',
    name: 'Local SEO Expansion',
    price: 450,
    description:
      'Five additional location-targeted service pages with unique, useful content, relevant metadata, and internal linking.',
  },
  {
    id: 'estimator-tool',
    name: 'Interactive Project Estimator',
    price: 550,
    pricePrefix: 'Starting at',
    description:
      'Custom interactive calculators and visual project-selection tools designed to help visitors understand project scope and submit more qualified inquiries. Pricing calculations use client-approved pricing rules, and complex functionality requires a custom quotation.',
    note: 'Professional includes one standard Scope & Volume Estimator. This enhancement is for Essential projects, or for additional or more advanced estimators.',
  },
  {
    id: 'copy-revamp',
    name: 'Premium Brand Messaging & Copywriting',
    price: 400,
    description:
      'Professional website copywriting, brand positioning, and service messaging designed to communicate expertise, credibility, and value.',
  },
  {
    id: 'crm-sync',
    name: 'CRM Integration & Lead Routing',
    price: 0,
    custom: true,
    description:
      'Connect website inquiry forms to compatible CRM platforms and automate lead delivery. Scoped and quoted per project.',
  },
];

export interface MonthlyRetainer {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceSuffix: string;
  description: string;
  includesIntro?: string;
  includes: string[];
  cta: string;
}

export const RETAINER_HEADING = 'Beyond Launch. Built for Growth.';
export const RETAINER_SUBTITLE =
  "A website shouldn't stop working for your business after launch. Through ongoing maintenance, optimization, and search visibility improvements, we help your digital presence continue evolving.";

export const MONTHLY_RETAINERS: MonthlyRetainer[] = [
  {
    id: 'website-care',
    name: 'Website Care',
    price: '$150',
    priceSuffix: '/ month',
    description:
      'Keep your website secure, maintained, and performing reliably with ongoing technical care.',
    includes: [
      'Website Hosting Management',
      'SSL & Security Monitoring',
      'Regular Website Backups',
      'Website Uptime Monitoring',
      'Technical Maintenance',
      'Minor Content & Image Updates',
      'Basic Technical SEO Maintenance',
      'Monthly Website Health Report',
    ],
    cta: 'Inquire About Website Care',
  },
  {
    id: 'growth-seo',
    name: 'Growth & SEO',
    badge: 'Recommended',
    price: '$300',
    priceSuffix: '/ month',
    description:
      'A continuous optimization partnership focused on strengthening organic visibility, improving website performance, and attracting more qualified inquiries.',
    includesIntro: 'Everything in Website Care, plus:',
    includes: [
      'Monthly SEO Optimization',
      'Local Keyword Research',
      'Google Search Console Monitoring',
      'Google Business Profile Optimization',
      'On-Page SEO Improvements',
      'Content Optimization',
      'Conversion Tracking & Performance Analysis',
      'Monthly SEO & Performance Report',
    ],
    cta: 'Inquire About Growth & SEO',
  },
];

export const RETAINER_TERMS =
  'Optional monthly services, billed monthly in advance and separate from website development. Scope and deliverables are defined before commencement. They are ongoing service agreements, not lifetime subscriptions. Domain registration, paid third-party subscriptions, and work outside the agreed scope may incur separate costs. We do not guarantee Google rankings or a specific number of leads, and revisions and content updates are limited to the agreed scope.';

export const PROJECT_PAYMENT_TERMS = [
  '50% deposit to initiate the project.',
  'Remaining 50% due before final launch and handover.',
  'Final pricing depends on project scope and requirements.',
];

export const RETAINER_PAYMENT_TERMS = [
  'Billed monthly in advance.',
  'Optional ongoing service agreements.',
  'Scope and deliverables clearly defined before commencement.',
];
