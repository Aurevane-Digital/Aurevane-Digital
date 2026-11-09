export interface PageHeadConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  serviceJsonLd?: {
    name: string;
    description: string;
  };
}

const DEFAULT_HOMEPAGE_CONFIG: PageHeadConfig = {
  title: 'Contractor Website Design | Aurevane Digital',
  description:
    'Aurevane Digital designs high-converting websites for roofers, junk removal, electrical and other home service contractors. Get more calls and quotes.',
  canonicalUrl: 'https://aurevanedigital.vercel.app/',
};

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function updatePageHead(config: PageHeadConfig) {
  if (typeof document === 'undefined') return;

  // 1. Title
  document.title = config.title;

  // 2. Meta description
  setMetaTag('name', 'description', config.description);

  // 3. Canonical
  setCanonical(config.canonicalUrl);

  // 4. Open Graph
  setMetaTag('property', 'og:url', config.canonicalUrl);
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);

  // 5. Twitter
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);

  // 6. Service JSON-LD
  const SCRIPT_ID = 'service-jsonld';
  let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (config.serviceJsonLd) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = SCRIPT_ID;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    const serviceData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: config.serviceJsonLd.name,
      description: config.serviceJsonLd.description,
      provider: {
        '@id': 'https://aurevanedigital.vercel.app/#organization',
      },
      areaServed: 'United States',
    };
    scriptEl.textContent = JSON.stringify(serviceData);
  } else if (scriptEl) {
    scriptEl.remove();
  }
}

export function restoreHomepageHead() {
  updatePageHead(DEFAULT_HOMEPAGE_CONFIG);
}
