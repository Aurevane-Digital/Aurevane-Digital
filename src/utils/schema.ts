export interface ServiceSchemaFaq {
  q: string;
  a: string;
}

export interface ServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string[];
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds schema.org JSON-LD representations for service landing pages.
 * Returns an array containing:
 * 1. Service schema with provider and serviceType
 * 2. FAQPage schema matching visible on-page FAQs
 * 3. BreadcrumbList schema (Home > Current Page)
 */
export function buildServiceSchema({
  path,
  name,
  description,
  serviceType,
  faqs,
}: ServiceSchemaParams): Array<Record<string, unknown>> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: pageUrl,
    provider: {
      '@id': 'https://aurevanedigital.vercel.app/#organization',
    },
    areaServed: 'United States',
    serviceType,
  };

  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aurevanedigital.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  };

  return [serviceSchema, faqSchema, breadcrumbSchema];
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
 * Builds schema.org JSON-LD representations for blog articles.
 * Returns an array containing:
 * 1. Article schema (headline, description, datePublished, dateModified, author, publisher, image, mainEntityOfPage)
 * 2. BreadcrumbList schema (Home > Blog > Post)
 * 3. Optional FAQPage schema when article includes FAQs
 */
export function buildArticleSchema({
  slug,
  headline,
  description,
  datePublished,
  dateModified = datePublished,
  faqs,
}: ArticleSchemaParams): Array<Record<string, unknown>> {
  const pageUrl = `https://aurevanedigital.vercel.app/blog/${slug}`;

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: pageUrl,
    image: 'https://aurevanedigital.vercel.app/og-image.png',
    author: {
      '@id': 'https://aurevanedigital.vercel.app/#organization',
    },
    publisher: {
      '@id': 'https://aurevanedigital.vercel.app/#organization',
    },
  };

  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aurevanedigital.vercel.app/',
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
  };

  const schemas: Array<Record<string, unknown>> = [articleSchema, breadcrumbSchema];

  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
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

  return schemas;
}

export interface FaqPageSchemaParams {
  path: string;
  name: string;
  description?: string;
  serviceType?: string[];
  faqs: ServiceSchemaFaq[];
}

/**
 * Builds schema.org JSON-LD representations for pages with an FAQ section (e.g. Packages).
 * Returns an array containing:
 * 1. Service schema (provider & areaServed: United States)
 * 2. FAQPage schema matching visible on-page FAQs
 * 3. BreadcrumbList schema (Home > Page Name)
 */
export function buildFaqPageSchema({
  path,
  name,
  description,
  serviceType = ['Contractor Website Design', 'Local Service Website Development'],
  faqs,
}: FaqPageSchemaParams): Array<Record<string, unknown>> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath}`;

  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    ...(description ? { description } : {}),
    url: pageUrl,
    provider: {
      '@id': 'https://aurevanedigital.vercel.app/#organization',
    },
    areaServed: 'United States',
    serviceType,
  };

  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aurevanedigital.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  };

  return [serviceSchema, faqSchema, breadcrumbSchema];
}

export interface PageServiceSchemaParams {
  path: string;
  name: string;
  description: string;
  serviceType: string[];
}

/**
 * Builds schema.org Service (with areaServed: United States) + BreadcrumbList JSON-LD
 * for non-FAQ core pages (Home, Our Work, About, Contact).
 */
export function buildPageServiceSchema({
  path,
  name,
  description,
  serviceType,
}: PageServiceSchemaParams): Array<Record<string, unknown>> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `https://aurevanedigital.vercel.app${normalizedPath === '/' ? '/' : normalizedPath}`;

  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: pageUrl,
    provider: {
      '@id': 'https://aurevanedigital.vercel.app/#organization',
    },
    areaServed: 'United States',
    serviceType,
  };

  if (normalizedPath === '/') {
    return [serviceSchema];
  }

  const breadcrumbSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aurevanedigital.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  };

  return [serviceSchema, breadcrumbSchema];
}

