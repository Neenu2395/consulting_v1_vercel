// One-off generator for the branded Open Graph / Twitter social card.
// Renders an SVG to public/og-image.png (1200x630) so link previews on
// LinkedIn, X, WhatsApp, iMessage, Slack, etc. show a branded card instead
// of a generic stock photo (those platforms do not accept SVG og:images).
//
// Run with:  npm run og
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, '../public/og-image.png');

const NAVY = '#0A192F';
const GOLD = '#C5A059';
const GOLD_LIGHT = '#E2C285';
const CREAM = '#F8F5F0';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${GOLD}"/>
      <stop offset="1" stop-color="${GOLD_LIGHT}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="${NAVY}"/>

  <!-- Subtle skewed accent panel on the right -->
  <g opacity="0.06">
    <polygon points="820,-50 1300,-50 1200,680 720,680" fill="#FFFFFF"/>
  </g>

  <!-- Gold frame -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="url(#goldGrad)" stroke-width="2" opacity="0.7"/>

  <!-- Eyebrow -->
  <text x="100" y="150" fill="${GOLD}" font-family="Helvetica, Arial, sans-serif"
        font-size="22" letter-spacing="8" font-weight="700">GLOBAL MBA &amp; MS STRATEGY</text>

  <!-- Wordmark -->
  <text x="98" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700">
    <tspan fill="${CREAM}">ELITE</tspan><tspan fill="${GOLD}"> CONSULTING</tspan>
  </text>

  <!-- Subhead -->
  <text x="100" y="370" fill="${CREAM}" font-family="Georgia, serif" font-size="40" opacity="0.92">
    M7 &amp; Top European MBA / MS Admissions
  </text>

  <!-- Divider -->
  <rect x="100" y="420" width="120" height="3" fill="url(#goldGrad)"/>

  <!-- Credibility line -->
  <text x="100" y="490" fill="${GOLD}" font-family="Helvetica, Arial, sans-serif"
        font-size="28" font-weight="600">By HEC Paris &amp; SDA Bocconi Alumni</text>

  <!-- URL -->
  <text x="100" y="545" fill="${CREAM}" font-family="Helvetica, Arial, sans-serif"
        font-size="22" letter-spacing="2" opacity="0.7">elite-admissions-consulting.com</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(out, png);
console.log(`Wrote ${out} (${(png.length / 1024).toFixed(1)} KB)`);
