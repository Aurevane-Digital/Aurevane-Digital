import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function setOrCreateMeta(
  selector: string,
  attributeName: string,
  attributeValue: string,
  contentValue: string
) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', contentValue);
}

function setOrCreateCanonical(href: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = 'https://aurevanedigital.vercel.app/og-image.png',
  noindex = false,
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Canonical URL
    const baseUrl = 'https://aurevanedigital.vercel.app';
    const normalizedPath = canonicalPath.startsWith('/')
      ? canonicalPath
      : canonicalPath
      ? `/${canonicalPath}`
      : '';
    const canonicalUrl = `${baseUrl}${normalizedPath}`;
    setOrCreateCanonical(canonicalUrl);

    // 3. Meta Description
    setOrCreateMeta('meta[name="description"]', 'name', 'description', description);

    // 4. Meta Robots
    const robotsContent = noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
    setOrCreateMeta('meta[name="robots"]', 'name', 'robots', robotsContent);

    // 5. Open Graph Tags
    setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setOrCreateMeta(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      'Aurevane Digital — websites that turn visitors into booked jobs'
    );

    // 6. Twitter Tags
    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 7. Page JSON-LD Structured Data
    let scriptElement = document.querySelector<HTMLScriptElement>('script[data-seo="page"]');
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.setAttribute('data-seo', 'page');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Cleanup injected page script when component unmounts
      const pageScript = document.querySelector<HTMLScriptElement>('script[data-seo="page"]');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, [title, description, canonicalPath, ogImage, noindex, jsonLd]);

  return null;
};
