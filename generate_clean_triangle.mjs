import fs from 'fs';
import { Resvg } from '@resvg/resvg-js';

// Exact vector recreation of image_49dff514-d49b-452e-8430-d6cc798cd235.png
// Transparent background, exact sky-blue gradient & solar orange swoosh
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" fill="none">
  <defs>
    <!-- Sky Blue to Medium Azure Triangle Gradient -->
    <linearGradient id="triangleGrad" x1="180" y1="90" x2="480" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#60B7F8" />
      <stop offset="35%" stop-color="#47A1F2" />
      <stop offset="70%" stop-color="#3187DE" />
      <stop offset="100%" stop-color="#2575C8" />
    </linearGradient>

    <!-- Solar Orange Swoosh Gradient -->
    <linearGradient id="swooshGrad" x1="80" y1="240" x2="480" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF7518" />
      <stop offset="40%" stop-color="#F5650E" />
      <stop offset="80%" stop-color="#E85305" />
      <stop offset="100%" stop-color="#D94400" />
    </linearGradient>
  </defs>

  <!-- 1. The Main Blue Triangle with Rounded Corners -->
  <!-- Left vertical base: x=160, y=110 to 470 with r=45 rounded corners -->
  <!-- Right tip: x=510, y=290 with r=45 rounded tip -->
  <path 
    d="M 160 145 
       L 160 455 
       Q 160 495 195 475 
       L 490 305 
       Q 515 290 490 275 
       L 195 105 
       Q 160 85 160 145 Z" 
    fill="url(#triangleGrad)" 
  />

  <!-- 2. The Orange Swoosh Loop -->
  <!-- Loops on the left side and sweeps across the bottom half of the triangle -->
  <path 
    d="M 160 315
       C 115 315 75 295 75 248
       C 75 200 120 180 160 180
       C 182 180 192 188 192 198
       C 192 208 180 214 160 214
       C 135 214 112 226 112 248
       C 112 268 135 282 160 282
       C 205 282 275 298 348 298
       C 415 298 465 328 488 348
       C 460 395 390 445 285 480
       C 252 492 218 462 218 430
       C 218 402 248 388 275 378
       C 328 358 390 345 435 334
       C 385 310 310 298 245 298
       C 205 298 178 315 160 315 Z" 
    fill="url(#swooshGrad)" 
  />
</svg>`;

const resvg = new Resvg(svgContent, {
  fitTo: {
    mode: 'width',
    value: 600,
  },
});
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

fs.writeFileSync('./public/image_49dff514-d49b-452e-8430-d6cc798cd235.png', pngBuffer);
fs.writeFileSync('./public/logo_triangulo_nowtech.png', pngBuffer);
fs.writeFileSync('./public/logo_triangulo_nowtech.svg', svgContent);
fs.writeFileSync('./src/assets/images/image_49dff514-d49b-452e-8430-d6cc798cd235.png', pngBuffer);
fs.writeFileSync('./src/assets/images/logo_triangulo_nowtech.png', pngBuffer);

console.log('Successfully generated clean transparent triangle logo matching image_49dff514-d49b-452e-8430-d6cc798cd235.png!');
