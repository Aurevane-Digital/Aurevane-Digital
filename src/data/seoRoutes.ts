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
    title: 'Aurevane Digital | Web Design for Home Service Businesses',
    description:
      'Fast, custom websites for home service businesses, contractors and junk removal fleets across the US. See packages or get a free mockup.',
    h1: 'Blue Collar Business Website Design That Generates Leads',
    intro:
      'Aurevane Digital builds custom, mobile-friendly websites for contractors, trades, home-service companies and junk removal businesses across the United States.',
    links: [
      { label: 'Industries', to: '/industries' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Blog', to: '/blog' },
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
      'Explore five concept website designs for roofing, junk removal, excavation, electrical, and structural steel firms. View packages or request a quote.',
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
    title: 'Service Packages & Pricing | Aurevane Digital',
    description:
      'Contractor website packages from $1,000, Professional from $1,500, and custom Enterprise builds. Compare options and book your website today.',
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
      'Learn how Aurevane Digital builds high-converting websites for trade contractors across the US. Explore packages or request a free consultation.',
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
      'Start a custom contractor website project with Aurevane Digital or request a complimentary diagnostic website audit. Send your inquiry today.',
    h1: "Let's Create Something Your Business Deserves.",
    intro:
      'Tell us about your organization and target timeline, or request a complimentary diagnostic audit of your current contractor website.',
    links: [
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
    ],
  },
  {
    path: '/contractor-website-design',
    title: 'Contractor Website Design That Wins Jobs | Aurevane',
    description:
      'Custom contractor website design for roofers, remodelers, excavators, and builders across the United States. See packages or request a free quote.',
    h1: 'Contractor Website Design Built to Win More Bids',
    intro:
      'Aurevane Digital builds custom, fast, lead-focused websites for general contractors, roofers, remodelers, and specialty trade builders across the United States.',
    links: [
      { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'How Much Does a Contractor Website Cost?', to: '/blog/how-much-does-a-contractor-website-cost' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Best Website Design for Junk Removal Companies (2026)', to: '/blog/best-website-design-for-junk-removal-companies' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/home-services-website-design',
    title: 'Home Services Website Design | Aurevane Digital',
    description:
      'Mobile-friendly websites for plumbers, HVAC, electricians, and landscapers that turn visits into booked calls. Explore packages or get a free mockup.',
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
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/junk-removal-website-design',
    title: 'Junk Removal Website Design From $1,000 | Aurevane',
    description:
      'Custom websites for junk removal companies with photo-quote forms, truck-load pricing and local SEO. Live in 7-10 days from $1,000. Free mockup.',
    h1: 'Web Design for Junk Removal Companies Built to Book More Pickups',
    intro:
      'Fast, conversion-focused web design for junk removal companies across the United States. Live in 7-10 business days from $1,000.',
    links: [
      { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Best Website Design for Junk Removal Companies (2026)', to: '/blog/best-website-design-for-junk-removal-companies' },
      { label: 'What Should a Junk Removal Website Include?', to: '/blog/what-should-a-junk-removal-website-include' },
      { label: 'Junk Removal Website Examples: What to Include', to: '/blog/junk-removal-website-examples-what-to-include' },
      { label: 'How Much Does a Junk Removal Website Cost?', to: '/blog/how-much-does-a-junk-removal-website-cost' },
      { label: 'Local SEO for Junk Removal Companies: 2026 Guide', to: '/blog/local-seo-for-junk-removal-companies' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/junk-removal-seo',
    title: 'SEO for Junk Removal Companies | Map Pack & Reviews | Aurevane',
    description:
      'Local SEO for junk removal: Google Business Profile, service-area pages and review systems that get more calls. Start with a free audit.',
    h1: 'SEO for Junk Removal Companies That Gets Your Phone Ringing',
    intro:
      'Local SEO for junk removal companies: optimize Google Business Profile, county service-area pages, customer reviews, and site structure that ranks and converts.',
    links: [
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Best Website Design for Junk Removal Companies (2026)', to: '/blog/best-website-design-for-junk-removal-companies' },
      { label: 'Local SEO for Junk Removal Companies: 2026 Guide', to: '/blog/local-seo-for-junk-removal-companies' },
      { label: 'Junk Removal Website Examples: What to Include', to: '/blog/junk-removal-website-examples-what-to-include' },
      { label: 'How Much Does a Junk Removal Website Cost?', to: '/blog/how-much-does-a-junk-removal-website-cost' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/website-redesign',
    title: 'Website Redesign for Service Businesses | Aurevane',
    description:
      'Upgrade your contractor or junk removal website into a fast, mobile-first build without losing Google rankings. Request a free website audit today.',
    h1: 'Website Redesign for Service Businesses',
    intro:
      'Website redesign for contractors, home-service and junk removal companies. Faster, mobile-first, conversion-focused rebuilds without losing your rankings.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'What Should a Junk Removal Website Include?', to: '/blog/what-should-a-junk-removal-website-include' },
      { label: 'Local SEO for Junk Removal Companies: 2026 Guide', to: '/blog/local-seo-for-junk-removal-companies' },
      { label: 'How Much Does a Junk Removal Website Cost?', to: '/blog/how-much-does-a-junk-removal-website-cost' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/excavation-company-website-design',
    title: 'Excavation Company Website Design | Aurevane',
    description:
      'Custom websites for excavation contractors that bring in more bid requests and calls. Live in 7-10 business days, from $1,000. Get a free mockup.',
    h1: 'Excavation Company Website Design Built to Win More Bid Requests',
    intro:
      'Custom excavation company website design for grading, trenching, foundation prep, and site-work contractors across the United States. Live in 7-10 business days, from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/electrical-contractor-website-design',
    title: 'Electrician Website Design That Gets Calls | Aurevane',
    description:
      'Licensed-and-insured trust design, emergency call buttons and service pages built for electrical contractors. From $1,000. Get a free mockup.',
    h1: 'Electrical Contractor Website Design That Brings In Service Calls',
    intro:
      'High-trust electrical contractor website design built for licensed residential electricians and commercial MEP teams across the United States. Live in 7-10 business days, from $1,000.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/general-contractor-website-design',
    title: 'General Contractor Website Design | Aurevane Digital',
    description:
      'Custom websites for general contractors, builders, and design-build remodelers focused on project proof and bids. See packages or get a free quote.',
    h1: 'General Contractor Website Design That Wins More Projects',
    intro:
      'Custom websites for general contractors, builders, remodelers and design-build firms across the United States, built around project proof, estimate requests and trust.',
    links: [
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
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
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'How Much Does a Contractor Website Cost?', to: '/blog/how-much-does-a-contractor-website-cost' },
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
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/industries',
    title: 'Contractor Web Design Industries | Aurevane Digital',
    description:
      'Explore custom website design for excavation, junk removal, septic, land clearing, fence, detailing, electrical, and roofing. Get a free mockup.',
    h1: 'Website Design Built Around Each Blue-Collar Industry',
    intro:
      'Explore custom website design across our eight core blue-collar and contractor trades—built for phone calls, qualified quotes, and 7-10 business day launch.',
    links: [
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'Septic Contractor Website Design', to: '/septic-contractor-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Mobile Detailing Website Design', to: '/mobile-detailing-website-design' },
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Roofing Website Design', to: '/roofing-website-design' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'General Contractor Website Design', to: '/general-contractor-website-design' },
      { label: 'Plumbing & HVAC Website Design', to: '/plumbing-hvac-website-design' },
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Blog Guides', to: '/blog' },
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
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Land Clearing Website Design', to: '/land-clearing-website-design' },
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'How Much Does a Contractor Website Cost?', to: '/blog/how-much-does-a-contractor-website-cost' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/land-clearing-website-design',
    title: 'Land Clearing Website Design | Aurevane',
    description:
      'Custom websites for land clearing and forestry mulching companies with project galleries and quote requests. From $1,000. Get a free mockup.',
    h1: 'Land Clearing Website Design That Brings In Acreage Quote Requests',
    intro:
      'Bespoke land clearing website design for forestry mulching, brush clearing, lot preparation, and right-of-way crews across the United States.',
    links: [
      { label: 'Industries Hub', to: '/industries' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Fence Company Website Design', to: '/fence-company-website-design' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'How Much Does a Contractor Website Cost?', to: '/blog/how-much-does-a-contractor-website-cost' },
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
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'How Much Does a Contractor Website Cost?', to: '/blog/how-much-does-a-contractor-website-cost' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/fence-installation-website-design',
    title: 'Fence Installation Website Design | Aurevane Digital',
    description:
      'Mobile-first websites for fence contractors with emergency repair calls, quote funnels, galleries, and local SEO. See packages or get a free quote.',
    h1: 'Fence Installation Website Design That Turns Yard Searches Into Estimates',
    intro:
      'Custom mobile-first websites for residential and commercial fence contractors across the United States—built with emergency repair tap-to-call paths, linear-footage quote requests, before-and-after fenceline galleries, and local SEO structure.',
    links: [
      { label: 'Landscaping Website Design', to: '/landscaping-website-design' },
      { label: 'Contractor Website Design', to: '/contractor-website-design' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Contractor Website Cost Guide for 2026', to: '/blog/contractor-website-cost-2026' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/landscaping-website-design',
    title: 'Landscaping Website Design | Aurevane Digital',
    description:
      'Mobile-first landscaping and hardscape contractor websites with urgent call paths, quote funnels, and local SEO. See packages or get a free quote.',
    h1: 'Landscaping Website Design Built for Design-Build and Hardscape Leads',
    intro:
      'Mobile-first websites for landscaping, hardscaping, and drainage contractors across the United States—combining urgent tap-to-call dispatch, planned project quote funnels, before-and-after yard galleries, and local SEO structure.',
    links: [
      { label: 'Fence Installation Website Design', to: '/fence-installation-website-design' },
      { label: 'Excavation Company Website Design', to: '/excavation-company-website-design' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/plumbing-hvac-website-design',
    title: 'Plumbing & HVAC Website Design | Aurevane Digital',
    description:
      'Mobile-first plumbing and HVAC contractor websites with emergency dispatch calls, quote funnels, and local SEO. Explore packages or get a free quote.',
    h1: 'Plumbing & HVAC Website Design Built for Urgent Dispatch and Replacements',
    intro:
      'Mobile-first websites for plumbing, heating, and cooling contractors across the United States—combining emergency tap-to-call paths, planned system quote funnels, before-and-after installation galleries, and local SEO structure.',
    links: [
      { label: 'Electrical Contractor Website Design', to: '/electrical-contractor-website-design' },
      { label: 'Home Services Website Design', to: '/home-services-website-design' },
      { label: 'Emergency vs. Planned Job Website Design', to: '/blog/emergency-vs-planned-job-website-design-for-contractors' },
      { label: 'Why Contractors Need a Project Gallery', to: '/blog/why-contractors-need-a-project-gallery' },
      { label: 'Packages', to: '/packages' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/blog',
    title: 'Website & SEO Guides for Contractors | Aurevane Digital',
    description:
      'Practical guides on contractor website design, junk removal SEO, website costs, and local search rankings. Read a guide or request a free audit.',
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
      { label: 'Web Design for Junk Removal Companies', to: '/junk-removal-website-design' },
      { label: 'SEO for Junk Removal Companies', to: '/junk-removal-seo' },
      { label: 'Website Redesign', to: '/website-redesign' },
      { label: 'Packages', to: '/packages' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const blogPostRoutes: SeoRoute[] = BLOG_POSTS.map((post) => ({
  path: `/blog/${post.slug}`,
  title: post.fullTitle,
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
