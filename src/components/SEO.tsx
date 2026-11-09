import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
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
  let el = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(nameOrProperty, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath = '' }) => {
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
  }, [title, description, canonicalPath]);

  return null;
};
