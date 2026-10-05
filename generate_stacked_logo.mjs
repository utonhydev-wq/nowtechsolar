import fs from 'fs';
import { Resvg } from '@resvg/resvg-js';

// SVG Recreation of IMG-20261005-WA0103.jpg
// Triangle on top, "NowTECH" in Orange/Blue below, "ENERGIA SOLAR" in black underneath.
const createSvg = (withWhiteBg = false) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 650" width="800" height="650" fill="none">
  <defs>
    <!-- Blue Triangle Gradient -->
    <linearGradient id="stackedBlueGrad" x1="330" y1="60" x2="480" y2="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="35%" stop-color="#0EA5E9" />
      <stop offset="75%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>

    <!-- Orange Loop / Swoosh Gradient -->
    <linearGradient id="stackedOrangeGrad" x1="280" y1="180" x2="470" y2="290" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF9500" />
      <stop offset="40%" stop-color="#F97316" />
      <stop offset="85%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#C2410C" />
    </linearGradient>

    <!-- Wordmark Blue Gradient for TECH -->
    <linearGradient id="wordmarkBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>

    <!-- Wordmark Orange Gradient for Now -->
    <linearGradient id="wordmarkOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="100%" stop-color="#EA580C" />
    </linearGradient>

    <filter id="softDropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.12" />
    </filter>
  </defs>

  ${withWhiteBg ? '<rect width="800" height="650" rx="36" fill="#FFFFFF" />' : ''}

  <g filter="url(#softDropShadow)">
    <!-- 1. ICON SYMBOL (Centered horizontally on top) -->
    <!-- Blue Rounded Triangle -->
    <!-- Left base: x=330, y=90 to 290. Right tip: x=490, y=190 -->
    <path 
      d="M 330 110 
         L 330 290 
         Q 330 312 350 300 
         L 490 205 
         Q 505 195 490 185 
         L 350 90 
         Q 330 78 330 110 Z" 
      fill="url(#stackedBlueGrad)" 
    />

    <!-- Orange Curved Swoosh looping from exterior left and sweeping across lower triangle -->
    <path 
      d="M 330 220
         C 305 220 278 208 278 182
         C 278 156 305 144 330 144
         C 344 144 350 148 350 156
         C 350 164 344 167 330 167
         C 315 167 298 174 298 182
         C 298 190 315 198 330 198
         C 355 198 395 208 438 208
         C 475 208 498 222 508 232
         C 490 258 448 290 398 308
         C 378 315 358 298 358 280
         C 358 266 376 256 392 250
         C 420 240 452 234 476 228
         C 445 212 400 205 362 205
         C 345 205 336 220 330 220 Z" 
      fill="url(#stackedOrangeGrad)" 
    />

    <!-- 2. "Now" in Bold Vibrant Orange (Centered) -->
    <text x="180" y="475" 
          font-family="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
          font-size="140" 
          font-weight="900" 
          fill="url(#wordmarkOrange)" 
          letter-spacing="-0.04em">Now</text>

    <!-- Extended bar of the T in TECH reaching over the 'w' of Now -->
    <path d="M 456 372 L 562 372 Q 566 372 566 380 L 566 392 Q 566 398 560 398 L 524 398 L 524 472 Q 524 478 516 478 L 498 478 Q 490 478 490 472 L 490 398 L 456 398 Q 448 398 448 385 Q 448 372 456 372 Z" fill="url(#wordmarkBlue)" />

    <!-- "ECH" in Tech Blue -->
    <text x="550" y="475" 
          font-family="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
          font-size="140" 
          font-weight="900" 
          fill="url(#wordmarkBlue)" 
          letter-spacing="-0.02em">ECH</text>

    <!-- "ENERGIA SOLAR" in Clean Modern Spaced Caps -->
    <text x="235" y="540" 
          font-family="'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif" 
          font-size="40" 
          font-weight="700" 
          fill="#1E293B" 
          letter-spacing="0.32em">ENERGIA SOLAR</text>
  </g>
</svg>`;

const transparentSvg = createSvg(false);
const whiteBgSvg = createSvg(true);

fs.writeFileSync('./public/nowtech_logo_stacked.svg', transparentSvg);

// Render Transparent PNG
const resvgTrans = new Resvg(transparentSvg, { fitTo: { mode: 'width', value: 800 } });
const pngTransBuffer = resvgTrans.render().asPng();
fs.writeFileSync('./public/nowtech_logo_stacked.png', pngTransBuffer);
fs.writeFileSync('./src/assets/images/nowtech_logo_stacked.png', pngTransBuffer);
fs.writeFileSync('./src/assets/images/nowtech_logo_horizontal.png', pngTransBuffer);

// Render White Background PNG
const resvgWhite = new Resvg(whiteBgSvg, { fitTo: { mode: 'width', value: 800 } });
const pngWhiteBuffer = resvgWhite.render().asPng();
fs.writeFileSync('./public/nowtech_logo_stacked_white.png', pngWhiteBuffer);

console.log('Successfully generated stacked logo PNGs and SVGs!');
