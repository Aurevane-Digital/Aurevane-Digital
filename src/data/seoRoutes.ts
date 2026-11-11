import { BLOG_POSTS } from './posts';

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  links?: { label: string; to: string }[];
  noindex?: boolean;
};

const BASE_SEO_ROUTES: SeoRoute[] = [
  {
    path: '/',
    title: 'Blue Collar Business Website Design | Aurevane Digital',
    description:
      'Lead-generating websites for contractors, trades, home-service and junk removal businesses across the United States. Get more calls, quotes and bookings.',
    h1: 'Blue Collar Business Website Design That Generates Leads',
    intro:
      'Aurevane Digital builds custom, mobile-friendly websites for contractors, trades, home-service companies and junk removal businesses across the United States.',
    links: [
      { label: 'Our Work', to: '/our-work' },
      { label: 'Packages', to: '/packages' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/our-work',
    title: 'Our Work — Cinematic Portfolio | Aurevane Digital',
    description:
      'Explore five concept website designs for roofing, junk removal, excavation, electrical, and structural steel firms.',
    h1: 'Contractor Websites Built for High-Ticket Bids.',
    intro:
      'Every digital build below is engineered specifically for home service and trade contractors where average job values range from $5,000 to $100,000+.',
    links: [
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/packages',
    title: 'Service Packages & Transparent Pricing | Aurevane Digital',
    description:
      'Transparent contractor website design packages and pricing. Starter ($1,000), Professional ($1,500), and Custom solutions for trade contractors.',
    h1: 'Contractor Website Packages. Zero Hidden Fees.',
    intro:
      'Clear, turnkey digital platforms with locked-in milestone pricing, zero bloated retainers, and 100% code ownership.',
    links: [
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/about',
    title: 'About Our Studio | Aurevane Digital',
    description:
      'Learn about Aurevane Digital\'s architectural approach and design philosophy crafting bespoke websites for high-ticket trade contractors.',
    h1: 'Architectural Rigor for the Modern Trades.',
    intro:
      'Aurevane Digital crafts bespoke digital platforms with the same architectural precision, structural integrity, and enduring standards contractors bring to their physical job sites.',
    links: [
      { label: 'Our Work', to: '/our-work' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/contact',
    title: 'Contact & Free Website Audit | Aurevane Digital',
    description:
      'Initiate a contractor website project with Aurevane Digital or request a complimentary website diagnostic audit. Inquire today.',
    h1: 'Let\'s Create Something Your Business Deserves.',
    intro:
      'Tell us about your organization and target timeline, or request a complimentary diagnostic audit of your current contractor website.',
    links: [
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
    ],
  },
  {
    path: '/contractor-website-design',
    title: 'Contractor Website Design & Development | Aurevane Digital',
    description:
      'Contractor website design for roofers, remodelers, excavators, painters and builders. Custom, fast, lead-focused websites built for the United States.',
    h1: 'Contractor Website Design Built to Win More Bids',
    intro:
      'Aurevane Digital builds custom, fast, lead-focused websites for general contractors, roofers, remodelers, and specialty trade builders across the United States.',
    links: [
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/home-services-website-design',
    title: 'Home Services Website Design | Aurevane Digital',
    description:
      'Website design for plumbers, HVAC, electricians, landscapers, cleaners and movers. Mobile-friendly sites that turn visitors into calls and bookings.',
    h1: 'Home Services Website Design That Fills Your Calendar',
    intro:
      'Mobile-friendly websites engineered for local service businesses including plumbers, HVAC technicians, electricians, landscapers, and residential cleaners.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/junk-removal-website-design',
    title: 'Junk Removal Website Design | Aurevane Digital',
    description:
      'Junk removal website design with instant quote forms, photo upload and online booking. Built for junk hauling companies across the United States.',
    h1: 'Junk Removal Website Design That Books More Jobs',
    intro:
      'High-converting websites for junk hauling companies with smartphone photo uploads, interactive truck volume pricing estimators, and instant online dispatch booking.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Junk Removal SEO', to: '/junk-removal-seo' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/junk-removal-seo',
    title: 'Junk Removal SEO & Local Search | Aurevane Digital',
    description:
      'Junk removal SEO for hauling companies: Google Business Profile, service-area pages, reviews and site structure that ranks and converts.',
    h1: 'Junk Removal SEO That Gets Your Phone Ringing',
    intro:
      'Junk removal SEO for hauling companies: Google Business Profile, service-area pages, reviews and site structure that ranks and converts. Built to keep your trucks on the road.',
    links: [
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/website-redesign',
    title: 'Website Redesign for Service Businesses | Aurevane Digital',
    description:
      'Website redesign for contractors, home-service and junk removal companies. Faster, mobile-first, conversion-focused rebuilds without losing your rankings.',
    h1: 'Website Redesign for Service Businesses',
    intro:
      'Website redesign for contractors, home-service and junk removal companies. Faster, mobile-first, conversion-focused rebuilds without losing your rankings.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Junk Removal SEO', to: '/junk-removal-seo' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/blog',
    title: 'Website & SEO Guides for Contractors & Junk Removal | Aurevane Digital',
    description:
      'Practical guides on contractor website design, junk removal SEO, website development costs, and local search rankings for trade businesses.',
    h1: 'Website & SEO Guides for Contractors and Junk Removal Companies',
    intro:
      'Actionable guides, pricing breakdowns, and local search strategies engineered for contractors and junk removal businesses across the United States.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Junk Removal SEO', to: '/junk-removal-seo' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const blogPostRoutes: SeoRoute[] = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} | Aurevane Digital`,
  description: post.description,
  h1: post.title,
  intro: post.description,
  links: [
    ...post.relatedLinks,
    { label: 'All Blog Guides', to: '/blog' },
    { label: 'Direct Project Inquiry', to: '/contact' },
  ],
}));

export const SEO_ROUTES: SeoRoute[] = [...BASE_SEO_ROUTES, ...blogPostRoutes];

export function getSeo(path: string): SeoRoute {
  const match = SEO_ROUTES.find((r) => r.path === path);
  if (match) {
    return match;
  }
  // Fallback to home route
  return SEO_ROUTES[0];
}
