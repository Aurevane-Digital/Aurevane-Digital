export interface ServiceSchemaFaq {
  q: string;
  a: string;
}

const ORG_NODE_ID = 'https://aurevanedigital.vercel.app/#organization';
const SITE_URL = 'https://aurevanedigital.vercel.app/';

const SERVICE_PROVIDER = {
  '@type': 'Organization',
  '@id': ORG_NODE_ID,
  name: 'Aurevane Digital',
  url: SITE_URL,
};

const AREA_SERVED_US = {
  '@type': 'Country',
  name: 'United States',
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
  logo: {
    '@type': 'ImageObject',
    url: 'https://aurevanedigital.vercel.app/logo-512.png',
    width: 512,
    height: 512,
  },
};

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
      provider: SERVICE_PROVIDER,
      areaServed: AREA_SERVED_US,
      serviceType: primaryServiceType,
    },
    {
      '@type': 'BreadcrumbList',
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
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
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
      datePublished,
      dateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://aurevanedigital.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
      author: ARTICLE_AUTHOR,
      publisher: ARTICLE_PUBLISHER,
    },
    {
      '@type': 'BreadcrumbList',
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
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
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
  description,
  serviceType = 'Contractor Website Design',
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
      ...(description ? { description } : {}),
      url: pageUrl,
      provider: SERVICE_PROVIDER,
      areaServed: AREA_SERVED_US,
      serviceType: primaryServiceType,
    },
    {
      '@type': 'BreadcrumbList',
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
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
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
 * Builds a single schema.org @graph JSON-LD object for non-FAQ core pages.
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
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name,
      description,
      url: pageUrl,
      provider: SERVICE_PROVIDER,
      areaServed: AREA_SERVED_US,
      serviceType: primaryServiceType,
    },
  ];

  if (normalizedPath !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
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
 * - Service with Aurevane Digital provider and Country areaServed ("United States")
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
      provider: SERVICE_PROVIDER,
      serviceType,
      areaServed: AREA_SERVED_US,
    },
    {
      '@type': 'BreadcrumbList',
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
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildIndustriesHubSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://aurevanedigital.vercel.app/industries#collection',
        name: 'Industries We Serve | Aurevane Digital',
        url: 'https://aurevanedigital.vercel.app/industries',
        description:
          'Custom website design for excavation, junk removal, septic, land clearing, fence, mobile detailing, electrical, and roofing contractors.',
        isPartOf: {
          '@id': 'https://aurevanedigital.vercel.app/#website',
        },
      },
      {
        '@type': 'BreadcrumbList',
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
        ],
      },
    ],
  };
}
