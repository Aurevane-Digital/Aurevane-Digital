import { SERVICE_PACKAGES } from './packages';
import { ServiceSchemaFaq } from '../utils/schema';

const essentialPkg = SERVICE_PACKAGES.find((p) => p.id === 'starter') || SERVICE_PACKAGES[0];
const proPkg = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];

export const JUNK_REMOVAL_FAQS: ServiceSchemaFaq[] = [
  {
    q: 'Can customers upload photos of junk piles from their phones?',
    a: 'Yes. Every quote form includes a mobile-friendly upload field so homeowners can attach photos from their camera roll, letting your team price cleanouts accurately before rolling a truck.',
  },
  {
    q: 'How much does a junk removal website cost and how fast does it launch?',
    a: `Our Essential package starts at ${essentialPkg.price} (${(essentialPkg.paymentType || 'One-time project fee').toLowerCase()}) and launches in ${essentialPkg.turnaround.toLowerCase()}. Professional builds start at ${proPkg.price} (${proPkg.turnaround.toLowerCase()}), and Enterprise projects are custom scoped with no mandatory monthly retainer.`,
  },
  {
    q: 'Can you separate residential pickups from commercial property cleanouts?',
    a: 'Yes. We create clear pathways for homeowners booking single-item or garage hauls alongside commercial portals highlighting COI compliance, W-9 readiness, and recurring cleanouts.',
  },
  {
    q: 'Will we own the website and all incoming hauling leads?',
    a: 'Yes. You receive 100% ownership of the domain, source code, and every phone call or quote submission with zero per-lead fees or agency lock-in.',
  },
];

export const JUNK_REMOVAL_SEO_FAQS: ServiceSchemaFaq[] = [
  {
    q: 'How does junk removal SEO work alongside website design?',
    a: `A fast, well-structured website is the foundation of local SEO. Our Professional website package starts at ${proPkg.price} (one-time project fee) and includes multi-city local SEO architecture, Schema.org LocalBusiness markup, and brand positioning—with optional Growth & SEO monthly plans available separately on our packages page.`,
  },
  {
    q: 'How long does it take for a junk removal company to rank on Google Maps?',
    a: 'Initial improvements from Google Business Profile optimization and technical site speed fixes often appear within three to six weeks. Dominating competitive suburban map packs typically requires two to three months of consistent customer reviews and localized service-area authority.',
  },
  {
    q: 'Do you create individual pages for every town in our service territory?',
    a: 'We create structured county and regional suburban hubs tailored to your highest-margin territories. Rather than generating dozens of low-quality doorway pages that search engines penalize, we build substantive, localized pages that genuinely help local homeowners and rank safely.',
  },
  {
    q: 'Can we track how many phone calls and form submissions come from SEO?',
    a: 'Yes. We implement Google Analytics 4 conversion tracking for all click-to-call buttons, quote forms, and booking tools, and can integrate dedicated call tracking numbers to measure exact phone lead volume.',
  },
  {
    q: 'Why is website speed so important for local junk removal search rankings?',
    a: 'Google explicitly incorporates mobile page speed and Core Web Vitals into local rankings. More importantly, urgent junk removal customers frequently abandon websites that take longer than three seconds to load, making speed a direct driver of booked jobs.',
  },
];
