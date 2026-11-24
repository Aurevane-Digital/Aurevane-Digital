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
      'Fast, mobile-friendly websites for junk removal, excavation, electrical, general contracting and mobile detailing businesses across the United States.',
    h1: 'Blue Collar Business Website Design That Generates Leads',
    intro:
      'Aurevane Digital builds custom, mobile-friendly websites for contractors, trades, home-service companies and junk removal businesses across the United States.',
    links: [
      { label: 'Industries', to: '/industries' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Packages', to: '/packages' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/our-work',
    title: 'Contractor Website Portfolio | Aurevane Digital',
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
      'Contractor website packages: Essential from $1,000, Professional from $1,500, custom Enterprise builds, plus optional monthly care and SEO plans.',
    h1: 'Contractor Website Packages and Pricing',
    intro:
      'One-time website project pricing for contractors and local service businesses, with optional enhancements and optional monthly care and SEO plans billed separately.',
    links: [
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/about',
    title: 'About Our Website Design Studio | Aurevane Digital',
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
      { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
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
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/junk-removal-website-design',
    title: 'Junk Removal Website Design That Books Jobs',
    description:
      'Fast, conversion-focused websites for junk removal companies with instant quote forms and tap-to-call. Live in 7-10 business days. Get a free mockup.',
    h1: 'Junk Removal Website Design That Turns Searches Into Booked Hauls',
    intro:
      'Fast, conversion-focused junk removal website design engineered for independent hauling fleets across the United States. Live in 7-10 business days from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
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
    path: '/excavation-website-design',
    title: 'Excavation Company Website Design | From $1,000',
    description:
      'Custom websites for excavation contractors that bring in more bid requests and calls. Live in 7-10 business days, from $1,000. Get a free mockup.',
    h1: 'Excavation Company Website Design Built to Win More Bid Requests',
    intro:
      'Custom excavation company website design for grading, trenching, foundation prep, and site-work contractors across the United States. Live in 7-10 business days, from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/electrical-contractor-website-design',
    title: 'Electrician Website Design That Gets Calls',
    description:
      'Licensed-and-insured trust design, emergency call buttons and service pages built for electrical contractors. From $1,000. Get a free mockup.',
    h1: 'Electrical Contractor Website Design That Brings In Service Calls',
    intro:
      'High-trust electrical contractor website design built for licensed residential electricians and commercial MEP teams across the United States. Live in 7-10 business days, from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/general-contractor-website-design',
    title: 'General Contractor Website Design | Aurevane Digital',
    description:
      'General contractor website design for builders, remodelers and design-build firms. Custom sites built around project proof, estimate requests and trust.',
    h1: 'General Contractor Website Design That Wins More Projects',
    intro:
      'Custom websites for general contractors, builders, remodelers and design-build firms across the United States, built around project proof, estimate requests and trust.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/mobile-detailing-website-design',
    title: 'Mobile Detailing Website Design | Aurevane',
    description:
      'Booking-ready websites for mobile detailers with package pricing, before/after galleries and service areas. From $1,000. Get a free mockup.',
    h1: 'Mobile Detailing Website Design With Package Booking Built In',
    intro:
      'Booking-ready mobile detailing website design for independent detail vans, paint correction specialists, and ceramic coating studios across the United States.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/roofing-website-design',
    title: 'Roofing Website Design | Live in 7-10 Days',
    description:
      'Roofing websites built for storm season: inspection booking, insurance-claim pages and project galleries. From $1,000. Get a free mockup.',
    h1: 'Roofing Website Design Built for Storm Calls and Full Replacements',
    intro:
      'High-converting roofing website design engineered for residential and commercial roofers across the United States. Live in 7-10 business days, from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/industries',
    title: 'Contractor & Trade Website Design Industries | Aurevane Digital',
    description:
      'Explore custom website design for excavation, junk removal, septic, land clearing, fence, mobile detailing, electrical, and roofing contractors.',
    h1: 'Website Design Built Around Each Blue-Collar Industry',
    intro:
      'Explore custom website design across our eight core blue-collar and contractor trades—built for phone calls, qualified quotes, and 7-10 business day launch.',
    links: [
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Junk Removal Website Design', to: '/junk-removal-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/septic-contractor-website-design',
    title: 'Septic Contractor Website Design | Aurevane',
    description:
      'Websites for septic pumping, inspection and installation companies that turn emergency searches into calls. From $1,000. Get a free mockup.',
    h1: 'Septic Contractor Website Design Built to Capture Emergency Calls',
    intro:
      'Conversion-driven septic contractor website design for septic pumping, tank inspection, drain-field repair, and new system installation companies across the United States.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/land-clearing-website-design',
    title: 'Land Clearing Website Design | Aurevane',
    description:
      'Premium websites for land clearing and forestry mulching companies with project galleries and quote requests. From $1,000. Get a free mockup.',
    h1: 'Land Clearing Website Design That Brings In Acreage Quote Requests',
    intro:
      'Bespoke land clearing website design for forestry mulching, brush clearing, lot preparation, and right-of-way crews across the United States.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/fence-company-website-design',
    title: 'Fence Company Website Design | From $1,000',
    description:
      'Websites for fence installers with material galleries, estimate forms and local service pages. Live in 7-10 business days. Get a free mockup.',
    h1: 'Fence Company Website Design Built to Turn Yard Searches Into Estimates',
    intro:
      'Custom fence company website design for wood privacy, vinyl, ornamental aluminum, chain-link, and automated gate installers across the United States.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/fence-installation-website-design',
    title: 'Fence Installation Website Design | Aurevane Digital',
    description:
      'Custom mobile-first websites for fence contractors with emergency repair calls, quote funnels, before-and-after project galleries, and local SEO.',
    h1: 'Fence Installation Website Design That Turns Yard Searches Into Estimates',
    intro:
      'Custom mobile-first websites for residential and commercial fence contractors across the United States—built with emergency repair tap-to-call paths, linear-footage quote requests, before-and-after fenceline galleries, and local SEO structure.',
    links: [
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/landscaping-website-design',
    title: 'Landscaping Website Design | Aurevane Digital',
    description:
      'Mobile-first landscaping and hardscape contractor websites with urgent call paths, project quote funnels, before-and-after galleries, and local SEO.',
    h1: 'Landscaping Website Design Built for Design-Build and Hardscape Leads',
    intro:
      'Mobile-first websites for landscaping, hardscaping, and drainage contractors across the United States—combining urgent tap-to-call dispatch, planned project quote funnels, before-and-after yard galleries, and local SEO structure.',
    links: [
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Excavation Website Design', to: '/excavation-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/plumbing-hvac-website-design',
    title: 'Plumbing & HVAC Website Design | Aurevane Digital',
    description:
      'Mobile-first plumbing and HVAC contractor websites with tap-to-call emergency dispatch, replacement quote funnels, project galleries, and local SEO.',
    h1: 'Plumbing & HVAC Website Design Built for Urgent Dispatch and Replacements',
    intro:
      'Mobile-first websites for plumbing, heating, and cooling contractors across the United States—combining emergency tap-to-call paths, planned system quote funnels, before-and-after installation galleries, and local SEO structure.',
    links: [
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/blog',
    title: 'Website & SEO Guides for Contractors | Aurevane Digital',
    description:
      'Practical guides on contractor website design, junk removal SEO, website development costs, and local search rankings for trade businesses.',
    h1: 'Website & SEO Guides for Contractors and Junk Removal Companies',
    intro:
      'Actionable guides, pricing breakdowns, and local search strategies engineered for contractors and junk removal businesses across the United States.',
    links: [
      ...BLOG_POSTS.map((post) => ({
        label: post.title,
        to: `/blog/${post.slug}`,
      })),
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
  title: `${post.seoTitle ?? post.title} | Aurevane Digital`,
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
