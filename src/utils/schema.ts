import { SERVICE_PACKAGES } from '../data/packages';

export interface ServiceSchemaFaq {
  q: string;
  a: string;
}

const SITE_URL = 'https://aurevanedigital.vercel.app/';
const ORG_NODE_ID = 'https://aurevanedigital.vercel.app/#organization';
const PRO_SERVICE_NODE_ID = 'https://aurevanedigital.vercel.app/#professionalservice';
const WEBSITE_NODE_ID = 'https://aurevanedigital.vercel.app/#website';

const essentialPkg = SERVICE_PACKAGES.find((p) => p.id === 'starter') || SERVICE_PACKAGES[0];
const proPkg = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];

const LOGO_IMAGE_OBJECT = {
  '@type': 'ImageObject',
  url: 'https://aurevanedigital.vercel.app/logo-512.png',
  width: 512,
  height: 512,
};

const OG_IMAGE_OBJECT = {
  '@type': 'ImageObject',
  url: 'https://aurevanedigital.vercel.app/og-image.png',
  width: 1200,
  height: 630,
};

const AREA_SERVED_US = {
  '@type': 'Country',
  name: 'United States',
};

const PACKAGE_OFFERS = [
  {
    '@type': 'Offer',
    name: essentialPkg.name,
    description: essentialPkg.description,
    price: String(essentialPkg.priceNum),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://aurevanedigital.vercel.app/packages',
  },
  {
    '@type': 'Offer',
    name: proPkg.name,
    description: proPkg.description,
    price: String(proPkg.priceNum),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://aurevanedigital.vercel.app/packages',
  },
];

const SERVICE_PROVIDER = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: LOGO_IMAGE_OBJECT,
};

const ARTICLE_AUTHOR = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
};

const ARTICLE_PUBLISHER = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: LOGO_IMAGE_OBJECT,
};

const ORGANIZATION_NODE = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: LOGO_IMAGE_OBJECT,
  image: OG_IMAGE_OBJECT,
  description:
    'Aurevane Digital builds custom websites for contractors, home-service businesses, and junk removal fleets across the United States.',
  email: 'aurevanedigital@gmail.com',
  areaServed: AREA_SERVED_US,
  knowsAbout: [
    'Website design for contractors',
    'Website design for junk removal companies',
    'Local SEO for service businesses',
    'Structured data and schema markup',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'aurevanedigital@gmail.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
};

const PROFESSIONAL_SERVICE_NODE = {
  '@type': 'ProfessionalService',
  '@id': PRO_SERVICE_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  description:
    'Web design for junk removal and home service businesses across the United States. Custom one-time website builds starting at $1,000.',
  image: OG_IMAGE_OBJECT,
  logo: LOGO_IMAGE_OBJECT,
  email: 'aurevanedigital@gmail.com',
  priceRange: '$$',
  areaServed: AREA_SERVED_US,
  makesOffer: [
    {
      '@type': 'Offer',
      name: `${essentialPkg.name} Website Package`,
      description: essentialPkg.description,
      price: String(essentialPkg.priceNum),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://aurevanedigital.vercel.app/packages',
      itemOffered: {
        '@type': 'Service',
        name: 'Web design for junk removal and home service businesses',
        serviceType: 'Web design for junk removal and home service businesses',
        areaServed: AREA_SERVED_US,
      },
    },
    {
      '@type': 'Offer',
      name: `${proPkg.name} Website Package`,
      description: proPkg.description,
      price: String(proPkg.priceNum),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://aurevanedigital.vercel.app/packages',
      itemOffered: {
        '@type': 'Service',
        name: 'Web design for junk removal and home service businesses',
        serviceType: 'Web design for junk removal and home service businesses',
        areaServed: AREA_SERVED_US,
      },
    },
  ],
};

const WEBSITE_NODE = {
  '@type': 'WebSite',
  '@id': WEBSITE_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  publisher: {
    '@id': ORG_NODE_ID,
  },
};

export interface ServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string | string[];
  faqs?: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for service landing pages:
 * - Service node
 * - BreadcrumbList: Home > Services > <Page>
 */
export function buildServiceSchema({
  path,
  name,
  description,
  serviceType,
}: ServiceSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;
  const primaryServiceType = Array.isArray(serviceType) ? serviceType[0] : serviceType;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name,
        description,
        url: pageUrl,
        image: OG_IMAGE_OBJECT,
        provider: SERVICE_PROVIDER,
        areaServed: AREA_SERVED_US,
        serviceType: primaryServiceType,
        offers: PACKAGE_OFFERS,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://aurevanedigital.vercel.app/industries',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export interface ArticleSchemaParams {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  faqs?: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for blog articles:
 * - Article node
 * - BreadcrumbList: Home > Blog > <Post>
 */
export function buildArticleSchema({
  slug,
  headline,
  description,
  datePublished,
  dateModified = datePublished,
}: ArticleSchemaParams): Record<string, unknown> {
  const pageUrl = `https://aurevanedigital.vercel.app/blog/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline,
        description,
        url: pageUrl,
        datePublished,
        dateModified,
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        image: OG_IMAGE_OBJECT,
        author: ARTICLE_AUTHOR,
        publisher: ARTICLE_PUBLISHER,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://aurevanedigital.vercel.app/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: headline,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export interface NicheIndustrySchemaParams {
  path: string;
  tradeName: string;
  serviceName: string;
  description: string;
  serviceType: string;
  faqs?: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for niche industry landing pages:
 * - Service node
 * - BreadcrumbList: Home > Industries > <Trade>
 */
export function buildNicheIndustrySchema({
  path,
  tradeName,
  serviceName,
  description,
  serviceType,
}: NicheIndustrySchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: serviceName,
        description,
        url: pageUrl,
        image: OG_IMAGE_OBJECT,
        provider: SERVICE_PROVIDER,
        serviceType,
        areaServed: AREA_SERVED_US,
        offers: PACKAGE_OFFERS,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Industries',
            item: 'https://aurevanedigital.vercel.app/industries',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: tradeName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function buildIndustriesHubSchema(): Record<string, unknown> {
  const pageUrl = 'https://aurevanedigital.vercel.app/industries';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: 'Trade Web Design Industries | Aurevane Digital',
        url: pageUrl,
        description:
          'Custom website design for excavation, junk removal, septic, land clearing, fence, mobile detailing, electrical, and roofing contractors.',
        isPartOf: {
          '@id': WEBSITE_NODE_ID,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Industries',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export interface WebPageSchemaParams {
  path: string;
  name: string;
  description: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  breadcrumbLabel: string;
}

export function buildWebPageSchema({
  path,
  name,
  description,
  pageType = 'WebPage',
  breadcrumbLabel,
}: WebPageSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': `${pageUrl}#webpage`,
        name,
        description,
        url: pageUrl,
        inLanguage: 'en-US',
        isPartOf: {
          '@id': WEBSITE_NODE_ID,
        },
        primaryImageOfPage: OG_IMAGE_OBJECT,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumbLabel,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Homepage-only schema graph including Organization, ProfessionalService, WebSite, and Service.
 */
export function buildHomeSchema(description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION_NODE,
      PROFESSIONAL_SERVICE_NODE,
      WEBSITE_NODE,
      {
        '@type': 'Service',
        '@id': `${SITE_URL}#service`,
        name: 'Web Design for Junk Removal and Home Service Businesses',
        description,
        url: SITE_URL,
        image: OG_IMAGE_OBJECT,
        provider: SERVICE_PROVIDER,
        areaServed: AREA_SERVED_US,
        serviceType: 'Web design for junk removal and home service businesses',
        offers: PACKAGE_OFFERS,
      },
    ],
  };
}

export function buildPackagesSchema(
  description: string,
  _faqs?: ServiceSchemaFaq[]
): Record<string, unknown> {
  const pageUrl = 'https://aurevanedigital.vercel.app/packages';

  const packagesOffers: Array<Record<string, unknown>> = [
    {
      '@type': 'Offer',
      name: 'Growth Partner',
      description:
        'Custom conversion-focused website, premium brand copywriting, local SEO every month, Google Business Profile setup + management, city/service area pages, review request system, and monthly performance report. $1,000 setup + $600/mo (3-month minimum, billed after launch).',
      price: '1000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
      priceSpecification: [
        {
          '@type': 'UnitPriceSpecification',
          name: 'Website Setup Fee',
          price: '1000',
          priceCurrency: 'USD',
        },
        {
          '@type': 'UnitPriceSpecification',
          name: 'Monthly Growth Plan (3-month minimum, billed after launch)',
          price: '600',
          priceCurrency: 'USD',
          billingDuration: 1,
          unitCode: 'MON',
        },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Professional',
      description:
        'Multi-page custom website, premium brand copywriting included, on-page SEO, quote/contact forms, and mobile-first design. Delivery in 2-3 weeks.',
      price: '1500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
    {
      '@type': 'Offer',
      name: 'Essential',
      description:
        'Custom 1-page website, mobile-first design, and contact form. Delivery in 7-10 business days.',
      price: '1000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
    {
      '@type': 'Offer',
      name: 'Care Plan (Optional)',
      description:
        'Hosting, updates, fixes, and small edits for Professional and Essential websites.',
      price: '150',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '150',
        priceCurrency: 'USD',
        billingDuration: 1,
        unitCode: 'MON',
      },
    },
    {
      '@type': 'Offer',
      name: 'Interactive Project Estimator (Optional Add-On)',
      description: 'Custom interactive scope or price estimator starting from +$550.',
      price: '550',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Contractor Website Packages and Pricing',
        description,
        url: pageUrl,
        image: OG_IMAGE_OBJECT,
        provider: SERVICE_PROVIDER,
        areaServed: AREA_SERVED_US,
        serviceType: 'Web design and local SEO packages for contractors and home service businesses',
        offers: packagesOffers,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Packages',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
