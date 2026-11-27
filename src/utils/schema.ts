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

// Keep sameAs empty until verified LinkedIn, Facebook, Yelp, and Google Business Profile URLs are added.
const SAME_AS_URLS: string[] = [];

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

const ORGANIZATION_NODE = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: LOGO_IMAGE_OBJECT,
  image: OG_IMAGE_OBJECT,
  email: 'aurevanedigital@gmail.com',
  areaServed: AREA_SERVED_US,
  sameAs: SAME_AS_URLS,
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
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: SAME_AS_URLS,
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

const SERVICE_PROVIDER = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: LOGO_IMAGE_OBJECT,
  sameAs: SAME_AS_URLS,
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

function buildFaqNode(pageUrl: string, faqs: ServiceSchemaFaq[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export interface ServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string | string[];
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for service landing pages.
 */
export function buildServiceSchema({
  path,
  name,
  description,
  serviceType,
  faqs,
}: ServiceSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;
  const primaryServiceType = Array.isArray(serviceType) ? serviceType[0] : serviceType;

  const graph: Array<Record<string, unknown>> = [
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
          name,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push(buildFaqNode(pageUrl, faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
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
 * Builds a single schema.org @graph JSON-LD object for blog articles.
 */
export function buildArticleSchema({
  slug,
  headline,
  description,
  datePublished,
  dateModified = datePublished,
  faqs,
}: ArticleSchemaParams): Record<string, unknown> {
  const pageUrl = `https://aurevanedigital.vercel.app/blog/${slug}`;

  const graph: Array<Record<string, unknown>> = [
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
  ];

  if (faqs && faqs.length > 0) {
    graph.push(buildFaqNode(pageUrl, faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export interface FaqPageSchemaParams {
  path: string;
  name: string;
  description?: string;
  serviceType?: string | string[];
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for pages with visible FAQs (e.g. Packages).
 */
export function buildFaqPageSchema({
  path,
  name,
  description = 'Custom contractor and junk removal website packages starting at $1,000 one-time.',
  serviceType = 'Web design for junk removal and home service businesses',
  faqs,
}: FaqPageSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;
  const primaryServiceType = Array.isArray(serviceType) ? serviceType[0] : serviceType;

  const graph: Array<Record<string, unknown>> = [
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
          name,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push(buildFaqNode(pageUrl, faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export interface PageServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string | string[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for core pages.
 */
export function buildPageServiceSchema({
  path,
  name,
  description,
  serviceType,
}: PageServiceSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath === '/' ? '/' : normalizedPath}`;
  const primaryServiceType = Array.isArray(serviceType) ? serviceType[0] : serviceType;

  const graph: Array<Record<string, unknown>> = [
    ...(normalizedPath === '/' ? [ORGANIZATION_NODE, PROFESSIONAL_SERVICE_NODE] : []),
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
  ];

  if (normalizedPath !== '/') {
    graph.push({
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
          name,
          item: pageUrl,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export interface NicheIndustrySchemaParams {
  path: string;
  tradeName: string;
  serviceName: string;
  description: string;
  serviceType: string;
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for niche industry landing pages:
 * - Service with Aurevane Digital provider, offers, and Country areaServed ("United States")
 * - FAQPage matching the visible FAQ verbatim
 * - BreadcrumbList: Home > Industries > <Trade>
 */
export function buildNicheIndustrySchema({
  path,
  tradeName,
  serviceName,
  description,
  serviceType,
  faqs,
}: NicheIndustrySchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  const graph: Array<Record<string, unknown>> = [
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
  ];

  if (faqs && faqs.length > 0) {
    graph.push(buildFaqNode(pageUrl, faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
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
        name: 'Industries We Serve | Aurevane Digital',
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

export function buildHomeSchema(description: string): Record<string, unknown> {
  return buildPageServiceSchema({
    path: '/',
    name: 'Web Design for Junk Removal and Home Service Businesses',
    description,
    serviceType: 'Web design for junk removal and home service businesses',
  });
}
