import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import puppeteer from 'puppeteer';
import { seoData } from '../src/data/seo.js';

const DIST = 'dist';
const PORT = 4173;

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
  const page = await browser.newPage();
  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
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

      const ldScripts = [...head.querySelectorAll('script[type="application/ld+json"]')];
      ldScripts.slice(0, -1).forEach((s) => s.remove());

      // Runtime pe inject hue GTM script tags hatao — inline snippet khud inject karega
      head
        .querySelectorAll('script[src*="googletagmanager"]')
        .forEach((s) => s.remove());
    }, seoData[route].title);

    const html = await page.content();

    const outDir = route === '/' ? DIST : join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf-8');

    const size = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`  ok    ${route.padEnd(45)} ${size} kB`);
  } catch (err) {
    failed++;
    console.error(`  FAIL  ${route.padEnd(45)} ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

// SPA fallback — prerender ke baad banana zaroori hai
await writeFile(join(DIST, '404.html'), await readFile(join(DIST, 'index.html')));

console.log(`\nDone. ${routes.length - failed} ok, ${failed} failed.\n`);
process.exit(failed > 0 ? 1 : 0);