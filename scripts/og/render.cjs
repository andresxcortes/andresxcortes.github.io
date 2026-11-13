const { chromium } = require('playwright');
const path = require('node:path');

const root = path.resolve(__dirname, '../..');
const jobs = [];
for (const l of ['es', 'en']) jobs.push([`pci-framework.html?lang=${l}`, 1200, 630, `public/og-pci-${l}.png`]);
for (const l of ['es', 'en', 'pt']) {
  jobs.push([`ueno.html?lang=${l}&kind=og`, 1200, 630, `public/og-ueno-${l}.png`]);
  jobs.push([`ueno.html?lang=${l}&kind=lessons`, 1200, 1000, `public/research/ueno/lecciones-${l}.png`]);
  jobs.push([`ueno.html?lang=${l}&kind=ethics`, 1200, 1000, `public/research/ueno/etica-${l}.png`]);
}
(async () => {
const browser = await chromium.launch();
for (const [page, w, h, out] of jobs) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  const [file, query] = page.split('?');
  await p.goto(`file://${root}/scripts/og/${file}?${query}`);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: path.join(root, out) });
  await p.close();
}
await browser.close();
})();
