// Generates the sitemap files into public/ from a single source of truth.
// Runs automatically before each build (see the "build" script), so the blog
// sitemap always matches src/data/posts.ts and can never drift.
//
//   public/sitemap.xml        sitemap INDEX pointing to the two below
//   public/sitemap-pages.xml  core marketing pages
//   public/sitemap-blog.xml   the /blog listing + every article
//
// Run manually with:  npm run sitemap
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { posts } from '../src/data/posts';

const SITE = 'https://elite-admissions-consulting.com';

// Bump this when the core marketing pages change meaningfully. Blog posts use
// their own per-post date, so they update on their own.
const PAGES_LASTMOD = '2026-06-28';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

const today = new Date().toISOString().slice(0, 10);

const urlEntry = (loc: string, lastmod: string, priority: string) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;

const urlset = (entries: string[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join(
    '\n',
  )}\n</urlset>\n`;

// --- Core pages ----------------------------------------------------------
const pages: { path: string; priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/founders', priority: '0.8' },
  { path: '/services', priority: '0.8' },
  { path: '/success-stories', priority: '0.9' },
  { path: '/evaluate', priority: '0.7' },
  { path: '/faq', priority: '0.8' },
  { path: '/blog', priority: '0.7' },
  { path: '/resources/mba-application-checklist', priority: '0.8' },
];
const pagesXml = urlset(pages.map((p) => urlEntry(`${SITE}${p.path}`, PAGES_LASTMOD, p.priority)));

// --- Blog posts ----------------------------------------------------------
const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const blogXml = urlset(sortedPosts.map((p) => urlEntry(`${SITE}/blog/${p.slug}`, p.date, '0.6')));
const newestPostDate = sortedPosts[0]?.date ?? today;

// --- Sitemap index -------------------------------------------------------
const indexXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <sitemap>\n    <loc>${SITE}/sitemap-pages.xml</loc>\n    <lastmod>${PAGES_LASTMOD}</lastmod>\n  </sitemap>\n` +
  `  <sitemap>\n    <loc>${SITE}/sitemap-blog.xml</loc>\n    <lastmod>${newestPostDate}</lastmod>\n  </sitemap>\n` +
  `</sitemapindex>\n`;

writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), pagesXml);
writeFileSync(path.join(publicDir, 'sitemap-blog.xml'), blogXml);
writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);

console.log(
  `Generated sitemap.xml (index) + sitemap-pages.xml (${pages.length} pages) + sitemap-blog.xml (${sortedPosts.length} posts)`,
);
