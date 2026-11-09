import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const BASE_URL = 'https://aurevanedigital.vercel.app';

/**
 * Constructs the canonical URL conforming to strict technical SEO rules:
 * Full URL with https://aurevanedigital.vercel.app, with no trailing slash
 * except for the root homepage ('/').
 */
function buildCanonicalUrl(path?: string): string {
  if (!path || path === '/' || path === '') {
    return `${BASE_URL}/`;
  }
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return `${BASE_URL}/${cleanPath}`;
}

function setOrCreateMeta(nameOrProperty: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${nameOrProperty}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(nameOrProperty, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath = '', jsonLd }) => {
  const jsonLdSerialized = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // 2. Canonical URL (no trailing slash except homepage)
    const canonicalUrl = buildCanonicalUrl(canonicalPath);
    setOrCreateCanonical(canonicalUrl);

    // 3. Meta Description
    setOrCreateMeta('name', 'description', description);

    // 4. Open Graph Tags
    setOrCreateMeta('property', 'og:url', canonicalUrl);
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);

    // 5. Twitter Card Tags
    setOrCreateMeta('name', 'twitter:title', title);
    setOrCreateMeta('name', 'twitter:description', description);

    // 6. JSON-LD Structured Data: Injected on mount, removed on unmount
    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLdSerialized) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-route-jsonld', 'true');
      const parsed = JSON.parse(jsonLdSerialized);
      const payload = Array.isArray(parsed)
        ? { '@context': 'https://schema.org', '@graph': parsed }
        : { '@context': 'https://schema.org', ...parsed };
      scriptEl.textContent = JSON.stringify(payload);
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonicalPath, jsonLdSerialized]);

  return null;
};
