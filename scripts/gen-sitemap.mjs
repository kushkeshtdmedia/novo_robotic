import { writeFileSync } from 'node:fs';
import { seoData, SITE } from '../src/data/seo.js';

const validRoutes = new Set([
  '/',
  '/services/tele-robotic-surgery',
  '/services/hernia-surgery',
  '/services/gallbladder-surgery',
  '/services/appendix-surgery',
  '/services/oesophagus-surgery',
  '/services/robotic-sleeve-gastrectomy',
  '/services/robotic-roux-en-y-gastric-bypass',
  '/services/robotic-mini-gastric-bypass',
  '/services/colorectal-cancer-surgery',
  '/services/stomach-cancer-surgery',
  '/services/gynecologic-cancer-surgery',
  '/services/fertility-preserving-surgery',
  '/services/benign-disorders-uterus-ovaries',
  '/doctors/dr-vikrant-sharma',
  '/contact',
  '/blog',
  '/blog/sleeve-gastrectomy-vs-gastric-bypass',
  '/blog/laparoscopic-vs-robotic-surgery',
  '/blog/hernia-signs-and-symptoms',
]);

const today = new Date().toISOString().split('T')[0];
const routes = Object.keys(seoData).filter((route) => validRoutes.has(route));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${SITE}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap.xml — ${routes.length} URLs`);