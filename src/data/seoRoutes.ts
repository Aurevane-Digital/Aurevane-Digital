export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  links?: { label: string; to: string }[];
  noindex?: boolean;
};

export const SEO_ROUTES: SeoRoute[] = [
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
];

export function getSeo(path: string): SeoRoute {
  const match = SEO_ROUTES.find((r) => r.path === path);
  if (match) {
    return match;
  }
  // Fallback to home route
  return SEO_ROUTES[0];
}
