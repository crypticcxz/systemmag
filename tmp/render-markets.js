const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:8087/index.html#applications', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const info = await page.evaluate(() => {
    const r = (el) => { const b = el?.getBoundingClientRect(); return b ? {x:b.x,y:b.y,w:b.width,h:b.height,top:b.top,left:b.left,right:b.right,bottom:b.bottom} : null; };
    const active = document.querySelector('.market-card.is-scene-active') || document.querySelector('.market-card');
    return {
      scrollY: window.scrollY,
      bodyClass: document.body.className,
      gallery: r(document.querySelector('.market-gallery')),
      active: r(active),
      copy: r(active?.querySelector('.market-card-copy')),
      img: r(active?.querySelector('img')),
      cards: [...document.querySelectorAll('.market-card')].map((c,i)=>({i, cls:c.className, opacity:getComputedStyle(c).opacity, rect:r(c)}))
    };
  });
  await page.screenshot({ path: 'tmp/screens/markets-playwright.png', fullPage: false });
  await browser.close();
  console.log(JSON.stringify(info, null, 2));
})();
