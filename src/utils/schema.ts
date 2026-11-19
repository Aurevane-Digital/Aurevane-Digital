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
};

const ARTICLE_AUTHOR = {
  '@type': 'Organization',
  name: 'Aurevane Digital',
  url: SITE_URL,
};

const ARTICLE_PUBLISHER = {
  '@type': 'Organization',
  name: 'Aurevane Digital',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: 'https://aurevanedigital.vercel.app/logo-512.png',
  },
};

export interface ServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string[];
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

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Service',
      name,
      description,
      url: pageUrl,
      provider: SERVICE_PROVIDER,
      areaServed: 'United States',
      serviceType,
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
      headline,
      description,
      datePublished,
      dateModified,
      mainEntityOfPage: pageUrl,
      image: 'https://aurevanedigital.vercel.app/og-image.png',
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
  serviceType?: string[];
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds a single schema.org @graph JSON-LD object for pages with visible FAQs (e.g. Packages).
 */
export function buildFaqPageSchema({
  path,
  name,
  description,
  serviceType = ['Contractor Website Design', 'Local Service Website Development'],
  faqs,
}: FaqPageSchemaParams): Record<string, unknown> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Service',
      name,
      ...(description ? { description } : {}),
      url: pageUrl,
      provider: SERVICE_PROVIDER,
      areaServed: 'United States',
      serviceType,
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
  serviceType: string[];
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

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Service',
      name,
      description,
      url: pageUrl,
      provider: SERVICE_PROVIDER,
      areaServed: 'United States',
      serviceType,
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

