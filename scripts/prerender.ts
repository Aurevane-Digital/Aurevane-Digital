import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_ROUTES } from '../src/data/seoRoutes';

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

  // 4. og:url
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

  // 9. <noscript>...</noscript>
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
