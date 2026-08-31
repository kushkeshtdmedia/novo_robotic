import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import puppeteer from 'puppeteer';
import { seoData } from '../src/data/seo.js';

const DIST = 'dist';
const PORT = 4173;
const MAX_ATTEMPTS = 3;

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

// dist/ ko serve karne wala chhota server
const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = join(DIST, urlPath);

  if (!extname(filePath) || !existsSync(filePath)) {
    filePath = join(DIST, 'index.html');
  }

  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));

const routes = Object.keys(seoData);
console.log(`\nPrerendering ${routes.length} routes...\n`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

let failed = 0;

for (const route of routes) {
  let lastErr;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const page = await browser.newPage();
    try {
      // 'domcontentloaded' — 'networkidle0' nahi. GTM/Fonts ki background requests
      // CI par kabhi settle nahi hoti, jisse navigation timeout ho jata hai.
      // React ready hai ya nahi, wo neeche waitForFunction confirm karta hai.
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });

      // React render hone ka wait
      await page.waitForFunction(
        () => document.getElementById('root')?.children.length > 0,
        { timeout: 30000 }
      );

      // Helmet prerender ke waqt do baar render karta hai — duplicate head tags saaf karo.
      // Title explicitly set hota hai; baaki tags ka aakhri instance sahi route ka hota hai.
      await page.evaluate((expectedTitle) => {
        const head = document.head;

        head.querySelectorAll('title').forEach((t) => t.remove());
        const titleEl = document.createElement('title');
        titleEl.textContent = expectedTitle;
        head.insertBefore(titleEl, head.firstChild);

        const canonicals = [...head.querySelectorAll('link[rel="canonical"]')];
        canonicals.slice(0, -1).forEach((c) => c.remove());

        const seen = new Set();
        [...head.querySelectorAll('meta[name], meta[property]')]
          .reverse()
          .forEach((m) => {
            const key = m.getAttribute('name') || m.getAttribute('property');
            if (seen.has(key)) m.remove();
            else seen.add(key);
          });

        // JSON-LD ko content ke hisaab se dedupe karo, position ke hisaab se nahi.
        // Har page par do alag blocks hote hain (organization + page schema),
        // aur Helmet dono ki duplicate copies chhod jata hai.
        const seenLd = new Set();
        [...head.querySelectorAll('script[type="application/ld+json"]')].forEach((s) => {
          const key = s.textContent.trim();
          if (!key || seenLd.has(key)) s.remove();
          else seenLd.add(key);
        });

        // Runtime pe inject hue GTM script tags hatao — inline snippet khud inject karega
        head
          .querySelectorAll('script[src*="googletagmanager"]')
          .forEach((s) => s.remove());
      }, seoData[route].title);

      const html = await page.content();

      const outDir = route === '/' ? DIST : join(DIST, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, 'index.html'), html, 'utf-8');

      const ldCount = (html.match(/application\/ld\+json/g) || []).length;
      const size = (Buffer.byteLength(html) / 1024).toFixed(1);
      const note = attempt > 1 ? `  (attempt ${attempt})` : '';
      console.log(`  ok    ${route.padEnd(45)} ${size} kB  ${ldCount} ld+json${note}`);

      lastErr = null;
      break;
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_ATTEMPTS) {
        console.warn(`  retry ${route.padEnd(45)} attempt ${attempt}: ${err.message}`);
      }
    } finally {
      await page.close();
    }
  }

  if (lastErr) {
    failed++;
    console.error(`  FAIL  ${route.padEnd(45)} ${lastErr.message}`);
  }
}

// Windows par Puppeteer ka temp Chrome profile kabhi-kabhi locked reh jata hai
// aur close() EPERM throw karta hai. HTML pehle hi likha ja chuka hota hai,
// isliye cleanup fail hone se build ko fail nahi karna chahiye.
try {
  await browser.close();
} catch (err) {
  console.warn(`  note  browser cleanup skipped (${err.code || err.message})`);
}

server.close();

// SPA fallback — prerender ke baad banana zaroori hai
await writeFile(join(DIST, '404.html'), await readFile(join(DIST, 'index.html')));

console.log(`\nDone. ${routes.length - failed} ok, ${failed} failed.\n`);
process.exit(failed > 0 ? 1 : 0);
