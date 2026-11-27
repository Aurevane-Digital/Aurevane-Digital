import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'aurevanedigital.vercel.app';
const KEY = 'fe92230075934e9a8f183d0d188537c4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const FALLBACK_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/our-work`,
  `https://${HOST}/packages`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/contractor-website-design`,
  `https://${HOST}/home-services-website-design`,
  `https://${HOST}/junk-removal-website-design`,
  `https://${HOST}/junk-removal-seo`,
  `https://${HOST}/website-redesign`,
  `https://${HOST}/excavation-company-website-design`,
  `https://${HOST}/electrical-contractor-website-design`,
  `https://${HOST}/general-contractor-website-design`,
  `https://${HOST}/mobile-detailing-website-design`,
  `https://${HOST}/roofing-website-design`,
  `https://${HOST}/fence-installation-website-design`,
  `https://${HOST}/landscaping-website-design`,
  `https://${HOST}/plumbing-hvac-website-design`,
  `https://${HOST}/industries`,
  `https://${HOST}/septic-contractor-website-design`,
  `https://${HOST}/land-clearing-website-design`,
  `https://${HOST}/fence-company-website-design`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/best-website-design-for-junk-removal-companies`,
  `https://${HOST}/blog/what-should-a-junk-removal-website-include`,
  `https://${HOST}/blog/junk-removal-website-examples-what-to-include`,
  `https://${HOST}/blog/how-much-does-a-contractor-website-cost`,
  `https://${HOST}/blog/local-seo-for-junk-removal-companies`,
  `https://${HOST}/blog/how-much-does-a-junk-removal-website-cost`,
  `https://${HOST}/blog/contractor-website-cost-2026`,
  `https://${HOST}/blog/emergency-vs-planned-job-website-design-for-contractors`,
  `https://${HOST}/blog/why-contractors-need-a-project-gallery`,
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sitemapPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');

function getUrlList() {
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map((match) => match[1].trim())
      .filter(Boolean);
    if (urls.length > 0) {
      return [...new Set(urls)];
    }
  }
  console.warn('Warning: public/sitemap.xml not found or empty; using fallback URL list.');
  return FALLBACK_URLS;
}

async function submitIndexNow() {
  const urlList = getUrlList();
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`Submitting ${urlList.length} URLs to IndexNow (${ENDPOINT})...`);

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`IndexNow response status: ${response.status} ${response.statusText}`);

    if (response.status === 200 || response.status === 202) {
      console.log('Success: URLs submitted cleanly to IndexNow.');
      if (responseText) console.log(responseText);
    } else {
      console.error('Error: IndexNow rejected the submission.');
      if (responseText) console.error('Details:', responseText);
      process.exitCode = 1;
    }
  } catch (error) {
    console.error('Failed to submit URLs to IndexNow:', error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

submitIndexNow();
