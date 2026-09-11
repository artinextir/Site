import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:3000";
const out = process.argv[3] || "shots";
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 1000);

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || "chrome" });

for (const loc of ["en", "fa"]) {
  // Fold shot: motion on, exactly what a visitor lands in.
  const fold = await browser.newPage({ viewport: { width, height } });
  await fold.goto(`${base}/${loc}/`, { waitUntil: "networkidle" });
  await fold.waitForTimeout(2200);
  await fold.screenshot({ path: `${out}/${loc}-${width}-fold.png` });
  await fold.close();

  // Full-page shot: reduced motion, so every reveal renders in its final
  // state — this doubles as the prefers-reduced-motion check.
  const page = await browser.newPage({ viewport: { width, height } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${base}/${loc}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${out}/${loc}-${width}-full.png`, fullPage: true, animations: "disabled" });
  await page.close();
}

await browser.close();
console.log("done");
