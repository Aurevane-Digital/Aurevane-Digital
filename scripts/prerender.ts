import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES, SeoRoute } from '../src/data/seoRoutes';
import { BLOG_POSTS } from '../src/data/posts';
import {
  buildArticleSchema,
  buildHomeSchema,
  buildIndustriesHubSchema,
  buildNicheIndustrySchema,
  buildPackagesSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from '../src/utils/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  throw new Error(`Prerender failed: ${templatePath} not found. Run 'vite build' first.`);
}

const templateHtml = fs.readFileSync(templatePath, 'utf-8');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replaceRequired(
  html: string,
  regex: RegExp,
  replacement: string,
  description: string
): string {
  if (!regex.test(html)) {
    throw new Error(`Prerender failed: could not match ${description} using regex ${regex}`);
  }
  return html.replace(regex, replacement);
}

const NICHE_SCHEMA_MAP: Record<
  string,
  { tradeName: string; serviceName: string; serviceType: string }
> = {
  '/junk-removal-website-design': {
    tradeName: 'Junk Removal',
    serviceName: 'Web Design for Junk Removal Companies',
    serviceType: 'Web Design for Junk Removal Companies',
  },
  '/excavation-company-website-design': {
    tradeName: 'Excavation Contractors',
    serviceName: 'Excavation Company Website Design',
    serviceType: 'Excavation Company Website Design',
  },
  '/septic-contractor-website-design': {
    tradeName: 'Septic Contractors',
    serviceName: 'Septic Contractor Website Design',
    serviceType: 'Septic Contractor Website Design',
  },
  '/land-clearing-website-design': {
    tradeName: 'Land Clearing',
    serviceName: 'Land Clearing Website Design',
    serviceType: 'Land Clearing Website Design',
  },
  '/fence-company-website-design': {
    tradeName: 'Fence Companies',
    serviceName: 'Fence Company Website Design',
    serviceType: 'Fence Company Website Design',
  },
  '/mobile-detailing-website-design': {
    tradeName: 'Mobile Detailing',
    serviceName: 'Mobile Detailing Website Design',
    serviceType: 'Mobile Detailing Website Design',
  },
  '/electrical-contractor-website-design': {
    tradeName: 'Electrical Contractors',
    serviceName: 'Electrical Contractor Website Design',
    serviceType: 'Electrical Contractor Website Design',
  },
  '/roofing-website-design': {
    tradeName: 'Roofing Contractors',
    serviceName: 'Roofing Website Design',
    serviceType: 'Roofing Website Design',
  },
};

const CORE_SERVICE_SCHEMA_MAP: Record<string, { name: string; serviceType: string }> = {
  '/contractor-website-design': {
    name: 'Contractor Website Design',
    serviceType: 'Contractor Website Design',
  },
  '/home-services-website-design': {
    name: 'Home Services Website Design',
    serviceType: 'Home Services Website Design',
  },
  '/general-contractor-website-design': {
    name: 'General Contractor Website Design',
    serviceType: 'General Contractor Website Design',
  },
  '/junk-removal-seo': {
    name: 'SEO for Junk Removal Companies',
    serviceType: 'SEO for Junk Removal Companies',
  },
  '/website-redesign': {
    name: 'Website Redesign',
    serviceType: 'Website Redesign for Service Businesses',
  },
  '/plumbing-hvac-website-design': {
    name: 'Plumbing & HVAC Website Design',
    serviceType: 'Plumbing & HVAC Website Design',
  },
  '/landscaping-website-design': {
    name: 'Landscaping Website Design',
    serviceType: 'Landscaping Website Design',
  },
};

const CORE_PAGE_META: Record<
  string,
  { pageType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'; breadcrumbLabel: string }
> = {
  '/our-work': { pageType: 'CollectionPage', breadcrumbLabel: 'Our Work' },
  '/about': { pageType: 'AboutPage', breadcrumbLabel: 'About' },
  '/contact': { pageType: 'ContactPage', breadcrumbLabel: 'Contact' },
  '/blog': { pageType: 'CollectionPage', breadcrumbLabel: 'Blog' },
};

function getRouteJsonLd(route: SeoRoute): Record<string, unknown> {
  if (route.path === '/') {
    return buildHomeSchema(route.description);
  }

  if (route.path === '/industries') {
    return buildIndustriesHubSchema();
  }

  if (route.path === '/packages') {
    return buildPackagesSchema(route.description);
  }

  const nicheCfg = NICHE_SCHEMA_MAP[route.path];
  if (nicheCfg) {
    return buildNicheIndustrySchema({
      path: route.path,
      tradeName: nicheCfg.tradeName,
      serviceName: nicheCfg.serviceName,
      description: route.description,
      serviceType: nicheCfg.serviceType,
    });
  }

  const coreSvcCfg = CORE_SERVICE_SCHEMA_MAP[route.path];
  if (coreSvcCfg) {
    return buildServiceSchema({
      path: route.path,
      name: coreSvcCfg.name,
      description: route.description,
      serviceType: coreSvcCfg.serviceType,
    });
  }

  if (route.path.startsWith('/blog/')) {
    const slug = route.path.replace('/blog/', '');
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      return buildArticleSchema({
        slug: post.slug,
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
      });
    }
  }

  const pageMeta = CORE_PAGE_META[route.path] || {
    pageType: 'WebPage' as const,
    breadcrumbLabel: route.h1,
  };

  return buildWebPageSchema({
    path: route.path,
    name: route.title,
    description: route.description,
    pageType: pageMeta.pageType,
    breadcrumbLabel: pageMeta.breadcrumbLabel,
  });
}

const standardLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

for (const route of SEO_ROUTES) {
  let html = templateHtml;
  const canonicalUrl = `https://aurevanedigital.vercel.app${route.path === '/' ? '/' : route.path}`;

  // 1. <title>
  html = replaceRequired(
    html,
    /<title[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`,
    '<title>'
  );

  // 2. <meta name="description" ...>
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?name=["']description["'][^>]*?>/i,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    '<meta name="description">'
  );

  // 3. <link rel="canonical" ...>
  html = replaceRequired(
    html,
    /<link\s+[^>]*?rel=["']canonical["'][^>]*?>/i,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    '<link rel="canonical">'
  );

  // 4. og:type & og:url
  const ogType = route.path.startsWith('/blog/') ? 'article' : 'website';
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?property=["']og:type["'][^>]*?>/i,
    `<meta property="og:type" content="${ogType}" />`,
    '<meta property="og:type">'
  );

  html = replaceRequired(
    html,
    /<meta\s+[^>]*?property=["']og:url["'][^>]*?>/i,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    '<meta property="og:url">'
  );

  // 5. og:title
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?property=["']og:title["'][^>]*?>/i,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    '<meta property="og:title">'
  );

  // 6. og:description
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?property=["']og:description["'][^>]*?>/i,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    '<meta property="og:description">'
  );

  // 7. twitter:title
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?name=["']twitter:title["'][^>]*?>/i,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    '<meta name="twitter:title">'
  );

  // 8. twitter:description
  html = replaceRequired(
    html,
    /<meta\s+[^>]*?name=["']twitter:description["'][^>]*?>/i,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    '<meta name="twitter:description">'
  );

  // 9. Page JSON-LD structured data (avoid duplicating existing data-seo="page")
  const pageJsonLd = getRouteJsonLd(route);
  const jsonLdScript = `<script type="application/ld+json" data-seo="page">${JSON.stringify(pageJsonLd)}</script>`;
  html = html.replace(/<script\s+[^>]*?data-seo=["']page["'][\s\S]*?<\/script>\s*/gi, '');
  html = replaceRequired(html, /<\/head>/i, `    ${jsonLdScript}\n  </head>`, '</head>');

  // 10. <noscript>...</noscript>
  const navLinks = [...standardLinks];
  if (route.links && Array.isArray(route.links)) {
    for (const l of route.links) {
      if (!navLinks.some((existing) => existing.to === l.to)) {
        navLinks.push(l);
      }
    }
  }

  const navHtml = `<nav>${navLinks
    .map((l) => `<a href="${escapeHtml(l.to)}">${escapeHtml(l.label)}</a>`)
    .join(' ')}</nav>`;

  const noscriptContent = `<noscript><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(
    route.intro
  )}</p>${navHtml}</noscript>`;

  html = replaceRequired(
    html,
    /<noscript[\s\S]*?<\/noscript>/i,
    noscriptContent,
    '<noscript>'
  );

  // Write output
  if (route.path === '/') {
    fs.writeFileSync(templatePath, html, 'utf-8');
    console.log(`[prerender] Generated dist/index.html (route: /)`);
  } else {
    const cleanPath = route.path.replace(/^\/+/, '');
    const targetDir = path.join(distDir, cleanPath);
    fs.mkdirSync(targetDir, { recursive: true });
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`[prerender] Generated ${path.relative(projectRoot, targetFile)} (route: ${route.path})`);
  }
}

console.log('[prerender] All routes prerendered successfully.');
