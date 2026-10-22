// Every part of the game world is drawn on the canvas: no downloaded art or fonts.
const C = {
  ink: '#253d43', dark: '#39594f', green: '#7da87b', lightGreen: '#a6c796',
  sage: '#8aaa82', sageLight: '#b6ca9c', sageDark: '#658f75', grass: '#91b681',
  cream: '#fff3ca', white: '#fff9e8', gold: '#e7b95f', peach: '#efc79b',
  pink: '#dca0a0', mauve: '#ad8b9a', orange: '#dd9161', teal: '#659c96',
};

const rect = (c, x, y, w, h, color) => {
  c.fillStyle = color;
  c.fillRect(Math.round(x), Math.round(y), Math.ceil(w), Math.ceil(h));
};
function poly(c, points, color) {
  c.fillStyle = color;
  c.beginPath();
  points.forEach(([x, y], i) => i ? c.lineTo(Math.round(x), Math.round(y)) : c.moveTo(Math.round(x), Math.round(y)));
  c.closePath(); c.fill();
}
function disk(c, x, y, r, color, pixel = 3) {
  for (let yy = -r; yy < r; yy += pixel) {
    const half = Math.floor(Math.sqrt(Math.max(0, r * r - (yy + pixel / 2) ** 2)) / pixel) * pixel;
    if (half) rect(c, x - half, y + yy, half * 2, pixel, color);
  }
}
const hash = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
const mod = (n, m) => ((n % m) + m) % m;

function heart(c, x, y, scale = 1, color = C.pink) {
  c.save(); c.translate(Math.round(x), Math.round(y)); c.scale(scale, scale);
  rect(c, 1, 0, 3, 1, color); rect(c, 6, 0, 3, 1, color);
  rect(c, 0, 1, 10, 3, color); rect(c, 1, 4, 8, 2, color);
  rect(c, 2, 6, 6, 1, color); rect(c, 3, 7, 4, 1, color); rect(c, 4, 8, 2, 1, color);
  rect(c, 2, 1, 1, 1, C.white); c.restore();
}
function sparkle(c, x, y, color = C.cream, s = 1) {
  rect(c, x - s, y - 4 * s, 2 * s, 8 * s, color);
  rect(c, x - 4 * s, y - s, 8 * s, 2 * s, color);
}
function cloud(c, x, y, scale, color) {
  c.save(); c.translate(Math.round(x), Math.round(y)); c.scale(scale, scale);
  rect(c, 9, 0, 20, 5, color); rect(c, 4, 5, 36, 6, color);
  rect(c, 0, 11, 49, 8, color); rect(c, 6, 19, 38, 4, color);
  c.restore();
}

function pine(c, x, bottom, h, color, detail = false) {
  const w = Math.round(h * 0.5), top = bottom - h;
  rect(c, x - 2, bottom - h * 0.32, 5, h * 0.32, detail ? '#8e8e68' : color);
  poly(c, [[x - 3, top], [x + 4, top], [x + 4, top + h * .1], [x + w * .22, top + h * .1],
    [x + w * .22, top + h * .23], [x + w * .4, top + h * .23], [x + w * .4, top + h * .4],
    [x + w * .55, top + h * .4], [x + w * .55, top + h * .57], [x + w * .7, top + h * .57],
    [x + w * .7, top + h * .76], [x - w * .7, top + h * .76], [x - w * .7, top + h * .57],
    [x - w * .55, top + h * .57], [x - w * .55, top + h * .4], [x - w * .4, top + h * .4],
    [x - w * .4, top + h * .23], [x - w * .22, top + h * .23], [x - w * .22, top + h * .1],
    [x - 3, top + h * .1]], color);
  if (detail) {
    rect(c, x - w * .2, top + h * .27, w * .38, 3, '#a9c990');
    rect(c, x - w * .42, top + h * .47, w * .46, 3, '#a9c990');
    rect(c, x + 1, top + h * .66, w * .4, 3, '#a9c990');
  }
}

function backdrop(c, state, W, H) {
  const sunset = state.scene === 'sunset', g = H - 54, cam = state.camera || 0;
  const sky = sunset ? ['#ead5ba', '#efc9ac', '#f1c3a4', '#f4d0ab'] : ['#c7e6dc', '#cee9dc', '#d9eddd', '#e6efda'];
  sky.forEach((color, i) => rect(c, 0, i * H / 4, W, H / 4 + 1, color));
  const sunX = sunset ? W * .73 : W * .79 - cam * .025;
  disk(c, sunX, sunset ? H * .47 : 76, sunset ? 46 : 31, sunset ? '#f8e4a5' : '#f6eac1', 4);
  const motion = state.reducedMotion ? 0 : (state.time || 0) * 1.4;
  for (let i = -1; i < 7; i++) {
    const x = mod(i * 211 - cam * .065 + motion, W + 230) - 120;
    cloud(c, x, 34 + hash(i + 17) * 62, 1.2 + hash(i + 4), sunset ? '#f9dfc5' : '#eef4e3');
  }
  const far = sunset ? '#c3b3b2' : '#b6c8be';
  const near = sunset ? '#ba9fa4' : '#a8bdae';
  for (let layer = 0; layer < 2; layer++) {
    const spacing = layer ? 360 : 420, parallax = layer ? .11 : .065;
    for (let i = -1; i < Math.ceil(W / spacing) + 2; i++) {
      const x = i * spacing - mod(cam * parallax, spacing), base = g - (layer ? 39 : 67);
      const h = 83 + hash(i + layer * 11) * 63;
      poly(c, [[x - 60, base], [x + 28, base - h * .45], [x + 62, base - h * .45], [x + 115, base - h * .8],
        [x + 134, base - h * .8], [x + 166, base - h], [x + 186, base - h], [x + 212, base - h * .77],
        [x + 236, base - h * .77], [x + 290, base - h * .42], [x + 324, base - h * .42], [x + 420, base]], layer ? near : far);
    }
  }
  if (sunset) {
    rect(c, 0, g - 98, W, 118, '#99bdb4');
    for (let j = 0; j < 9; j++) {
      const yy = g - 88 + j * 12;
      for (let i = 0; i < 7; i++) {
        const x = mod(i * 155 + hash(j) * 90 - motion * (j % 2 ? .3 : -.4), W + 80) - 40;
        rect(c, x, yy, 21 + hash(i + j) * 42, 2, j < 5 ? '#c0d0b8' : '#cdd7bb');
      }
    }
    for (let j = 0; j < 8; j++) rect(c, sunX - 8 - j * 4 + (j % 2) * 9, g - 95 + j * 9, 20 + j * 8, 3, '#e9d9b0');
  } else {
    for (let layer = 0; layer < 2; layer++) {
      const spacing = layer ? 91 : 68, parallax = layer ? .32 : .19;
      for (let i = -2; i < W / spacing + 3; i++) {
        const x = i * spacing - mod(cam * parallax, spacing);
        pine(c, x, g + (layer ? 3 : -19), (layer ? 72 : 56) + hash(i + layer * 29) * (layer ? 66 : 54), layer ? '#83a38c' : '#9bb5a0');
      }
    }
  }
  rect(c, 0, g, W, 54, '#b7a47b');
  rect(c, 0, g, W, 6, sunset ? '#8ba98b' : '#6c9370');
  rect(c, 0, g + 6, W, 5, sunset ? '#a8bb91' : '#9ab783');
  rect(c, 0, g + 11, W, 5, '#d0bf92');
  rect(c, 0, g + 16, W, 4, '#dcca9f');
  for (let i = 0; i < W / 20 + 2; i++) {
    const x = i * 20 - mod(cam, 20);
    rect(c, x + hash(i + 8) * 9, g + 26 + hash(i) * 21, 3 + hash(i + 7) * 6, 2, '#cbbb90');
    if (i % 3 === 0) rect(c, x, g + 7, 3, 4, '#bdce96');
  }
}

export function drawAnn(c, x, bottom, scale = 1, facing = 1, step = 0, carrying = false) {
  c.save(); c.translate(Math.round(x + (facing < 0 ? 22 * scale : 0)), Math.round(bottom - 38 * scale));
  c.scale(scale * facing, scale);
  const r = (x, y, w, h, color) => rect(c, x, y, w, h, color);
  // Short blond hair, a white doctor's coat, orange trousers, yellow shoes.
  r(7, 0, 9, 2, C.ink); r(4, 2, 14, 8, C.ink); r(5, 2, 11, 3, C.gold);
  r(4, 4, 4, 7, C.gold); r(7, 5, 10, 9, C.peach); r(8, 3, 7, 3, '#f4d17c');
  r(15, 6, 3, 5, C.peach); r(15, 7, 1, 2, C.ink); r(17, 9, 2, 2, C.peach);
  r(12, 12, 4, 1, '#b77766'); r(8, 13, 6, 3, C.peach);
  r(5, 15, 12, 15, C.ink); r(6, 15, 10, 14, C.white);
  r(10, 15, 3, 10, '#d8e2ce'); r(9, 17, 1, 8, C.teal); r(10, 24, 3, 2, C.teal);
  r(14, 22, 2, 1, '#b3c1af'); r(7, 27, 8, 2, '#e9e9d9');
  const arm = step === 1 ? -1 : step === 3 ? 1 : 0;
  r(3, 17 + arm, 3, 11, C.ink); r(4, 17 + arm, 3, 9, C.white); r(4, 26 + arm, 3, 3, C.peach);
  r(16, 17 - arm, 3, 10, C.ink); r(16, 18 - arm, 2, 7, C.white); r(17, 25 - arm, 3, 3, C.peach);
  const a = step === 1 ? 2 : step === 3 ? -1 : 0, b = step === 3 ? 2 : step === 1 ? -1 : 0;
  r(6, 29, 5, 6 + a, C.orange); r(12, 29, 4, 6 + b, '#c77e58');
  r(5, 34 + a, 7, 3, C.ink); r(5, 34 + a, 7, 2, '#f1c66a');
  r(12, 34 + b, 8, 3, C.ink); r(12, 34 + b, 8, 2, C.gold);
  if (carrying) { r(18, 21, 7, 5, C.cream); r(21, 22, 2, 3, C.pink); }
  c.restore();
}

export function drawMcD(c, x, bottom, scale = 1, healed = false, step = 0) {
  c.save(); c.translate(Math.round(x), Math.round(bottom - 30 * scale)); c.scale(scale, scale);
  const r = (x, y, w, h, color) => rect(c, x, y, w, h, color);
  r(11, 0, 3, 5, C.ink); r(10, 1, 3, 4, '#9b8c63');
  r(5, 4, 17, 4, C.ink); r(2, 8, 23, 5, C.ink); r(4, 7, 19, 4, '#a99066');
  r(3, 11, 22, 3, '#c4ad79'); r(4, 13, 20, 10, C.ink); r(6, 13, 16, 10, '#e3c996');
  r(6, 14, 16, 2, '#c69e72'); r(6, 18, 16, 2, '#c69e72'); r(6, 22, 16, 2, '#c69e72');
  r(9, 13, 2, 2, C.ink); r(17, 13, 2, 2, C.ink);
  r(8, 16, 5, 2, C.ink); r(14, 16, 6, 2, C.ink); r(10, 17, 8, 2, C.ink); r(13, 15, 2, 2, C.peach);
  r(1, 14, 3, 8, C.ink); r(24, 14, 3, 7, C.ink); r(0, 20, 4, 2, C.peach); r(24, 19, 4, 2, C.peach);
  r(7, 24, 4, 4 + (step % 2), C.ink); r(18, 24, 3, 4 - (step % 2), C.ink);
  r(4, 28, 8, 2, C.ink); r(18, 27, 7, 3, C.ink);
  if (healed) { r(18, 25, 4, 2, C.white); r(19, 25, 1, 1, C.pink); }
  c.restore();
}

export function drawZorbas(c, x, bottom, scale = 1, facing = 1, step = 0, tree = false) {
  c.save(); c.translate(Math.round(x + (facing < 0 ? 70 * scale : 0)), Math.round(bottom - 112 * scale));
  c.scale(scale * facing, scale);
  const r = (x, y, w, h, color) => rect(c, x, y, w, h, color);
  // A kind green person, with pointed ears and enormous hands.
  poly(c, [[16, 16], [5, 9], [5, 25], [17, 30]], C.ink);
  poly(c, [[53, 16], [65, 9], [64, 25], [53, 30]], C.ink);
  poly(c, [[17, 18], [8, 14], [9, 23], [17, 26]], C.sage);
  poly(c, [[53, 18], [61, 14], [60, 23], [53, 26]], C.sage);
  r(20, 5, 30, 4, C.ink); r(15, 9, 40, 28, C.ink); r(20, 37, 30, 7, C.ink);
  r(18, 10, 34, 26, C.sage); r(22, 35, 26, 7, C.sage);
  r(22, 11, 27, 9, C.sageLight); r(23, 20, 27, 12, '#a9bf96');
  r(25, 22, 3, 4, C.ink); r(43, 22, 3, 4, C.ink); r(23, 19, 7, 2, C.sageDark); r(41, 19, 7, 2, C.sageDark);
  r(34, 25, 5, 6, C.sage); r(31, 34, 12, 2, C.ink); r(33, 36, 8, 2, C.sageLight);
  r(21, 3, 8, 7, C.dark); r(28, 0, 7, 9, C.dark); r(35, 3, 9, 6, C.dark); r(43, 5, 6, 5, C.dark);
  r(22, 6, 4, 2, C.sageDark); r(31, 2, 3, 3, C.sageDark);
  r(18, 42, 35, 39, C.ink); r(20, 42, 31, 36, C.sage); r(23, 43, 24, 17, '#98b58c');
  r(32, 46, 4, 2, C.sageLight); r(33, 48, 2, 4, C.sageLight); r(39, 46, 4, 2, C.sageLight);
  const arm = step === 1 ? -3 : step === 3 ? 3 : 0;
  r(8, 45 + arm, 11, 28, C.ink); r(10, 46 + arm, 9, 25, C.sage); r(4, 67 + arm, 16, 16, C.ink);
  r(6, 68 + arm, 14, 12, C.sage); r(6, 78 + arm, 3, 5, C.sage); r(11, 79 + arm, 3, 5, C.sage); r(16, 77 + arm, 3, 5, C.sage);
  r(52, 45 - arm, 10, 28, C.ink); r(52, 46 - arm, 8, 25, C.sage); r(52, 67 - arm, 16, 16, C.ink);
  r(53, 68 - arm, 13, 12, C.sage); r(53, 78 - arm, 3, 5, C.sage); r(58, 79 - arm, 3, 5, C.sage); r(63, 77 - arm, 3, 5, C.sage);
  r(19, 77, 34, 15, C.ink); r(21, 78, 30, 12, C.mauve); r(21, 78, 30, 3, '#c2a1aa'); r(34, 85, 3, 8, C.ink);
  const a = step === 1 ? 4 : step === 3 ? -2 : 0, b = step === 3 ? 4 : step === 1 ? -2 : 0;
  r(21, 90, 13, 17 + a, C.ink); r(23, 90, 9, 15 + a, C.sage); r(16, 103 + a, 18, 8, C.ink); r(17, 103 + a, 15, 5, C.sage);
  r(39, 90, 13, 17 + b, C.ink); r(41, 90, 9, 15 + b, C.sage); r(39, 103 + b, 21, 8, C.ink); r(41, 103 + b, 17, 5, C.sage);
  r(18, 106 + a, 2, 2, C.sageDark); r(23, 106 + a, 2, 2, C.sageDark); r(53, 106 + b, 2, 2, C.sageDark);
  if (tree) drawCarriedTree(c, 65, 77, 65);
  c.restore();
}

function house(c, x, g, scale = 1) {
  c.save(); c.translate(Math.round(x), Math.round(g)); c.scale(scale, scale);
  rect(c, -8, -2, 166, 4, '#9baf85');
  rect(c, 4, -92, 140, 90, C.ink); rect(c, 8, -91, 132, 87, '#efdfb6');
  rect(c, 11, -84, 126, 5, '#d7c6a1'); rect(c, 11, -10, 126, 6, '#d0bd93');
  rect(c, 111, -137, 17, 35, C.ink); rect(c, 115, -136, 10, 30, '#c38d77');
  poly(c, [[-7, -88], [-7, -96], [4, -96], [4, -105], [17, -105], [17, -115], [31, -115], [31, -125],
    [45, -125], [45, -135], [59, -135], [59, -145], [87, -145], [87, -135], [101, -135], [101, -125],
    [115, -125], [115, -115], [129, -115], [129, -105], [143, -105], [143, -96], [155, -96], [155, -88]], C.ink);
  poly(c, [[0, -94], [12, -102], [25, -112], [39, -122], [53, -132], [65, -140], [81, -140],
    [95, -131], [109, -121], [123, -111], [137, -101], [147, -94]], '#c98e7b');
  for (let row = 0; row < 4; row++) for (let j = 0; j < 7 - row * 1.3; j++) rect(c, 11 + row * 14 + j * 20, -100 - row * 10, 11, 2, '#dfa891');
  rect(c, 58, -63, 35, 59, C.ink); rect(c, 62, -59, 27, 55, '#799c88'); rect(c, 82, -32, 3, 3, C.gold);
  for (const wx of [21, 106]) {
    rect(c, wx, -66, 26, 30, C.ink); rect(c, wx + 3, -63, 20, 24, '#b4d4c1');
    rect(c, wx + 11, -63, 3, 24, C.cream); rect(c, wx + 3, -53, 20, 3, C.cream); rect(c, wx - 3, -36, 32, 4, '#c49377');
  }
  rect(c, 65, -99, 17, 17, C.cream); rect(c, 72, -97, 4, 13, C.teal); rect(c, 67, -93, 13, 4, C.teal);
  rect(c, 54, -2, 43, 4, '#e5d6b0');
  for (const xx of [16, 115]) { rect(c, xx, -19, 21, 15, '#c98c72'); rect(c, xx - 1, -22, 23, 5, '#d89b7d');
    rect(c, xx + 6, -33, 2, 11, C.dark); rect(c, xx + 15, -30, 2, 8, C.dark); disk(c, xx + 7, -34, 4, C.pink, 2); disk(c, xx + 16, -31, 3, C.gold, 2); }
  c.restore();
}

function tree(c, x, g, h = 180) {
  const s = h / 180;
  c.save(); c.translate(Math.round(x), Math.round(g)); c.scale(s, s);
  rect(c, -10, -130, 20, 130, C.ink); rect(c, -7, -125, 14, 125, '#a88d67');
  rect(c, -5, -100, 4, 100, '#c3a477'); rect(c, 3, -80, 4, 75, '#8b795d');
  poly(c, [[-7, -75], [-32, -102], [-28, -112], [0, -86]], '#a88d67');
  poly(c, [[5, -98], [30, -125], [35, -118], [8, -82]], '#a88d67');
  disk(c, -28, -133, 35, C.dark, 5); disk(c, 22, -143, 35, C.dark, 5); disk(c, -2, -163, 28, C.dark, 5);
  disk(c, -28, -137, 31, '#7f9f6f', 5); disk(c, 21, -148, 30, '#88a976', 5); disk(c, -4, -168, 24, '#9bb982', 5);
  rect(c, -42, -146, 18, 5, '#b4c58d'); rect(c, 6, -159, 18, 5, '#b4c58d'); rect(c, -8, -179, 12, 4, '#c0cb94');
  rect(c, -22, -2, 44, 4, '#739569'); rect(c, -17, -5, 6, 5, '#8da26e'); rect(c, 11, -5, 6, 5, '#8da26e');
  c.restore();
}

function drawCarriedTree(c, x, bottom, height) {
  tree(c, x, bottom, height);
  rect(c, x - 4, bottom - 3, 8, 3, '#b99b71');
}

function rock(c, x, g, w, h) {
  if (h <= 0) return;
  poly(c, [[x, g], [x, g - h + 7], [x + 7, g - h + 7], [x + 7, g - h], [x + w - 9, g - h],
    [x + w - 9, g - h + 5], [x + w, g - h + 5], [x + w, g]], '#536b67');
  poly(c, [[x + 3, g], [x + 5, g - h + 9], [x + 13, g - h + 4], [x + w - 13, g - h + 4],
    [x + w - 4, g - h + 10], [x + w - 2, g]], '#8b9a8b');
  rect(c, x + 9, g - h, w - 19, 4, '#c5ce9a'); rect(c, x + 13, g - h + 4, w * .43, 3, '#adb997');
  poly(c, [[x + w * .57, g - h + 12], [x + w * .8, g - h + 8], [x + w - 6, g - 2], [x + w * .68, g - 2]], '#778e81');
  rect(c, x + 11, g - Math.min(h - 7, 17), w * .2, 3, '#a6b3a0');
  if (h > 30) { rect(c, x + w * .34, g - h * .53, w * .19, 3, '#697e73'); rect(c, x + w * .3, g - h * .53, 3, h * .29, '#697e73'); }
}

function bandage(c, x, y, s = 1) {
  c.save(); c.translate(Math.round(x), Math.round(y)); c.scale(s, s);
  rect(c, -13, -6, 26, 12, C.ink); rect(c, -15, -3, 30, 6, C.ink);
  rect(c, -12, -4, 24, 8, C.cream); rect(c, -13, -2, 26, 4, C.cream);
  rect(c, -4, -4, 8, 8, '#dda18c'); rect(c, -2, -2, 4, 4, '#efbba1');
  for (const xx of [-10, -7, 6, 9]) { rect(c, xx, -2, 1, 1, '#baa88c'); rect(c, xx, 1, 1, 1, '#baa88c'); }
  c.restore();
}

function bubble(c, x, y, icon, t, reduced = false) {
  const bob = reduced ? 0 : Math.round(Math.sin(t * 3) * 2);
  c.save(); c.translate(Math.round(x), Math.round(y + bob));
  rect(c, -21, -22, 42, 34, C.ink); rect(c, -24, -18, 48, 26, C.ink);
  rect(c, -19, -20, 38, 30, C.white); rect(c, -22, -16, 44, 22, C.white);
  rect(c, -4, 12, 8, 5, C.ink); rect(c, -2, 10, 4, 5, C.white);
  if (icon === 'heart') heart(c, -10, -13, 2, C.pink);
  else if (icon === 'bandage') bandage(c, 0, -5, .85);
  else if (icon === 'tree') { pine(c, 0, 5, 26, C.green); rect(c, -1, 1, 3, 6, '#ad9068'); }
  else if (icon === 'muck') { rect(c, -12, -7, 24, 12, '#9e8970'); rect(c, -9, -11, 18, 4, '#b4a080'); rect(c, -6, -15, 3, 3, '#9e8970'); rect(c, 5, -19, 3, 3, '#9e8970'); }
  else if (icon === 'stir') { rect(c, -11, -9, 22, 14, C.orange); rect(c, -8, -12, 16, 4, '#765c4f'); rect(c, 10, -6, 6, 8, C.orange); rect(c, -2, -20, 4, 17, C.dark); }
  else if (icon === 'sun') { disk(c, 0, -6, 10, C.gold, 2); sparkle(c, -14, -6, C.gold); sparkle(c, 14, -6, C.gold); }
  c.restore();
}

function seatedZorbas(c, origin, g, H, healed) {
  // In Ann's world the same green hand is an entire destination.
  const s = Math.max(.88, H / 430), x = origin;
  c.save(); c.translate(x, g); c.scale(s, s);
  const r = (x, y, w, h, color) => rect(c, x, y, w, h, color);
  r(-49, -360, 150, 284, C.ink); r(-43, -358, 138, 277, C.sage);
  r(-31, -340, 103, 120, '#99b58b'); r(-12, -324, 9, 5, C.sageLight); r(5, -325, 10, 5, C.sageLight);
  // Enormous pointed ears and a kindly, human face.
  poly(c, [[-50, -427], [-91, -459], [-85, -394], [-45, -379]], C.ink);
  poly(c, [[100, -427], [141, -459], [135, -394], [95, -379]], C.ink);
  poly(c, [[-50, -419], [-81, -445], [-77, -402], [-48, -390]], C.sage);
  poly(c, [[100, -419], [131, -445], [127, -402], [98, -390]], C.sage);
  r(-35, -490, 121, 15, C.ink); r(-54, -474, 157, 104, C.ink); r(-34, -369, 119, 28, C.ink);
  r(-46, -470, 141, 95, C.sage); r(-26, -375, 103, 28, C.sage);
  r(-28, -458, 112, 46, '#a9c098'); r(-32, -410, 121, 29, '#a1bb92');
  r(-24, -433, 14, 6, C.sageDark); r(46, -433, 16, 6, C.sageDark);
  r(-20, -424, 9, 13, C.ink); r(48, -424, 9, 13, C.ink); r(-18, -424, 3, 4, C.cream); r(50, -424, 3, 4, C.cream);
  r(16, -413, 15, 23, C.sage); r(4, -375, 39, 5, C.ink); r(12, -369, 23, 5, C.sageLight);
  r(-27, -502, 31, 24, C.dark); r(-1, -517, 27, 34, C.dark); r(25, -504, 28, 26, C.dark); r(52, -493, 26, 16, C.dark);
  r(-15, -495, 8, 5, C.sageDark); r(7, -509, 8, 7, C.sageDark);
  // Bent arm ends in the outstretched palm at x1480.
  poly(c, [[-42, -325], [-67, -318], [-84, -225], [-136, -113], [-211, -83], [-205, -48], [-104, -59], [-54, -144], [-27, -258]], C.ink);
  poly(c, [[-43, -315], [-59, -308], [-75, -221], [-129, -106], [-202, -77], [-199, -56], [-111, -68], [-62, -149], [-35, -258]], C.sage);
  r(-236, -81, 55, 31, C.ink); r(-261, -73, 57, 23, C.ink); r(-265, -65, 56, 15, C.ink);
  r(-234, -76, 51, 22, C.sageLight); r(-258, -69, 53, 15, C.sageLight); r(-262, -62, 48, 9, C.sageLight);
  r(-251, -69, 5, 4, C.sage); r(-237, -73, 5, 4, C.sage); r(-221, -76, 5, 4, C.sage);
  // A folded leg and bare foot, with plum-coloured shorts.
  r(-45, -115, 146, 63, C.ink); r(-37, -110, 129, 51, C.mauve); r(-32, -109, 124, 10, '#c2a3ac');
  r(45, -57, 70, 47, C.ink); r(51, -54, 58, 39, C.sage); r(15, -31, 110, 29, C.ink); r(22, -27, 98, 20, C.sage);
  r(105, -21, 5, 13, C.sageDark); r(91, -21, 5, 13, C.sageDark); r(76, -21, 5, 13, C.sageDark);
  r(93, -320, 30, 159, C.ink); r(97, -315, 21, 151, C.sage); r(88, -175, 43, 43, C.ink); r(93, -171, 33, 34, C.sage);
  c.restore();
}

function lake(c, x, g, t, muck) {
  rect(c, x - 83, g - 6, 166, 12, '#8f987a'); rect(c, x - 73, g - 9, 146, 13, '#b3b18a');
  rect(c, x - 64, g - 7, 130, 9, '#839e92'); rect(c, x - 53, g - 5, 110, 6, '#a6c2b2');
  for (let i = 0; i < 6; i++) rect(c, x - 52 + i * 19 + Math.sin(t + i) * 3, g - 5 + (i % 3) * 2, 10, 1, '#d1d9bb');
  rect(c, x - 11, g - 13, 30, 7, '#877b60'); rect(c, x - 6, g - 17, 21, 8, '#9b8c69');
  if (muck) { rect(c, x + 6, g - 18, 6, 6, '#839e92'); }
  for (const dx of [-81, 79]) {
    rect(c, x + dx, g - 25, 2, 25, '#657e60'); rect(c, x + dx + 6, g - 20, 2, 20, '#657e60');
    rect(c, x + dx - 1, g - 30, 4, 10, '#a88d6b');
  }
}

function cocoa(c, x, g, state) {
  // The book's rocket-like cocoa vessel becomes a giant's little cup.
  c.save(); c.translate(x, g);
  poly(c, [[-39, -18], [-49, -9], [-52, -1], [-31, -1], [-22, -16]], C.ink);
  poly(c, [[39, -18], [49, -9], [52, -1], [31, -1], [22, -16]], C.ink);
  rect(c, 39, -88, 24, 52, C.ink); rect(c, 43, -83, 16, 43, C.orange); rect(c, 45, -76, 11, 29, '#cfdfc4');
  rect(c, -44, -105, 88, 87, C.ink); rect(c, -37, -101, 74, 79, '#cf967b');
  rect(c, -35, -98, 13, 69, '#e6b48d'); rect(c, 25, -98, 11, 69, '#b78372');
  rect(c, -40, -114, 80, 17, C.ink); rect(c, -34, -111, 68, 11, '#ead4a8');
  rect(c, -30, -109, 60, 8, state.muck ? '#806d56' : '#b29c77');
  rect(c, -29, -108, 15, 2, state.muck ? '#b39b75' : '#dfc195');
  rect(c, -21, -79, 42, 32, C.ink); rect(c, -16, -74, 32, 22, '#eedab0');
  heart(c, -10, -73, 2, C.pink); rect(c, -35, -29, 70, 6, '#f0c398');
  if (state.tree && state.phase >= 5) {
    const sway = state.phase === 5 && !state.reducedMotion ? Math.sin(state.time * 4) * 8 : -8;
    drawCarriedTree(c, 7 + sway, -105, 65);
  }
  for (let i = 0; i < 3; i++) {
    const rise = state.reducedMotion ? 0 : mod(state.time * 7 + i * 11, 32);
    rect(c, -23 + i * 23, -123 - rise, 4, 8, '#eef1d8'); rect(c, -19 + i * 23, -130 - rise, 4, 7, '#eef1d8');
  }
  if (state.stirs > 0) for (let i = 0; i < Math.min(3, state.stirs); i++) sparkle(c, -24 + i * 24, -59, C.gold, 1);
  c.restore();
}

function flowers(c, cam, g, W, giant = false) {
  const spacing = giant ? 66 : 47;
  for (let i = Math.floor(cam / spacing) - 1; i < (cam + W) / spacing + 1; i++) {
    const x = i * spacing + hash(i + 19) * 16 - cam;
    const h = 5 + hash(i + 42) * 8;
    rect(c, x, g - h, 2, h, '#527a5b');
    rect(c, x - 3, g - h + 4, 3, 2, '#72905e');
    if (i % 3 === 0) { rect(c, x - 2, g - h - 3, 6, 4, i % 2 ? '#efc68b' : '#e7b2a3'); rect(c, x, g - h - 2, 2, 2, C.gold); }
    else { rect(c, x + 2, g - h + 3, 4, 2, '#688a5d'); }
  }
}

function distanceSign(c, x, g, direction = 1) {
  rect(c, x + 11, g - 35, 4, 35, '#8c795f');
  poly(c, [[x, g - 43], [x + 23, g - 43], [x + 30, g - 36], [x + 23, g - 29], [x, g - 29]], '#c7aa79');
  rect(c, x + (direction > 0 ? 7 : 11), g - 38, 10, 3, C.dark);
  rect(c, x + (direction > 0 ? 15 : 7), g - 41, 3, 3, C.dark); rect(c, x + (direction > 0 ? 15 : 7), g - 35, 3, 3, C.dark);
}

function annWorld(c, state, W, H) {
  const cam = state.camera || 0, g = H - 54, t = state.time || 0;
  house(c, 80 - cam, g);
  tree(c, 690 - cam, g, 180);
  seatedZorbas(c, 1745 - cam, g, H, state.healed);
  for (const [x, w, h] of [[830, 74, 13], [950, 75, 26], [1070, 80, 39], [1200, 105, 52], [1340, 140, 65]]) rock(c, x - cam, g, w, h);
  // This mossy finger is level with the last stepping stone.
  rect(c, 1480 - cam, g - 65, 150, 4, C.sageLight);
  rect(c, 1480 - cam, g - 61, 150, 10, C.sage);
  rect(c, 1497 - cam, g - 57, 4, 6, C.sageDark);
  rect(c, 1525 - cam, g - 57, 4, 6, C.sageDark);
  rect(c, 1553 - cam, g - 57, 4, 6, C.sageDark);
  if (!state.bandage && state.phase === 0) {
    const bob = state.reducedMotion ? 0 : Math.sin(t * 3) * 3;
    rect(c, 294 - cam, g - 2, 33, 3, '#8b9a76');
    bandage(c, 310 - cam, g - 29 + bob, .9);
    if (!state.reducedMotion) sparkle(c, 331 - cam, g - 40 + bob, C.cream, 1);
  }
  drawMcD(c, 548 - cam, g, 1, state.healed);
  if (state.phase === 0) bubble(c, 310 - cam, g - 77, 'bandage', t, state.reducedMotion);
  if (state.phase === 1) bubble(c, 562 - cam, g - 74, 'heart', t, state.reducedMotion);
  if (state.phase === 2) bubble(c, 1496 - cam, g - 113, 'heart', t, state.reducedMotion);
  distanceSign(c, 754 - cam, g);
  const p = state.player || { x: 120, y: 0, vx: 0, facing: 1 };
  const step = !state.reducedMotion && Math.abs(p.vx || 0) > 4 && p.grounded ? Math.floor(t * 9) % 4 : 0;
  drawAnn(c, p.x - cam, g - (p.y || 0), 1, p.facing || 1, step, state.bandage && !state.healed);
  flowers(c, cam, g, W);
}

function giantWorld(c, state, W, H) {
  const cam = state.camera || 0, g = H - 54, t = state.time || 0;
  // The same house and stepping stones establish the change of scale.
  house(c, 55 - cam, g, .19);
  for (const [x, w, h] of [[155, 13, 3], [173, 13, 5], [191, 14, 7], [213, 19, 9], [237, 25, 12]]) rock(c, x - cam, g, w, h);
  if (!state.tree) tree(c, 520 - cam, g, 65);
  else { rect(c, 511 - cam, g - 4, 18, 4, '#8a795d'); rect(c, 514 - cam, g - 5, 12, 3, '#c3a57a'); }
  lake(c, 790 - cam, g, t, state.muck);
  cocoa(c, 1110 - cam, g, state);
  const p = state.player || { x: 80, y: 0, vx: 0, facing: 1 };
  const step = !state.reducedMotion && Math.abs(p.vx || 0) > 4 && p.grounded ? Math.floor(t * 6) % 4 : 0;
  const follow = Math.min(1420, Math.max(70, p.x - 31));
  drawAnn(c, follow - cam, g, .27, p.facing || 1, step);
  drawMcD(c, follow - 15 - cam, g, .3, true, step);
  drawZorbas(c, p.x - cam, g - (p.y || 0), 1, p.facing || 1, step, state.tree && state.phase < 5);
  if (state.muck && state.phase < 5) { rect(c, p.x + 58 - cam, g - p.y - 40, 19, 10, '#817258'); rect(c, p.x + 61 - cam, g - p.y - 44, 13, 6, '#a18c68'); }
  if (state.phase === 3) bubble(c, 520 - cam, g - 104, 'tree', t, state.reducedMotion);
  if (state.phase === 4) bubble(c, 790 - cam, g - 69, 'muck', t, state.reducedMotion);
  if (state.phase === 5) bubble(c, 1110 - cam, g - 207, 'stir', t, state.reducedMotion);
  if (state.phase === 6) { distanceSign(c, 1300 - cam, g); bubble(c, 1480 - cam, g - 94, 'sun', t, state.reducedMotion); }
  flowers(c, cam, g, W, true);
}

function sunsetWorld(c, state, W, H) {
  const g = H - 54;
  // The little friends have the very best seat in the world: a giant's palm.
  const x = W * .4;
  drawZorbas(c, x, g, 1.15, 1, 0, false);
  rect(c, x + 68, g - 41, 35, 8, C.ink); rect(c, x + 69, g - 42, 33, 6, C.sageLight);
  drawAnn(c, x + 75, g - 42, .42, 1); drawMcD(c, x + 89, g - 42, .43, true);
  cocoa(c, x - 76, g, { ...state, tree: true, muck: true, stirs: 3 });
  heart(c, x + 47, g - 145, 2, '#d6a1a0');
  flowers(c, 0, g, W);
}

export function render(ctx, state, W, H) {
  ctx.save(); ctx.imageSmoothingEnabled = false;
  backdrop(ctx, state, W, H);
  const cam = state.camera || 0, g = H - 54;
  ctx.save();
  if (state.transition > 0 && !state.reducedMotion) {
    const progress = Math.min(1, (2.4 - state.transition) / 1.75);
    const eased = progress * progress * (3 - 2 * progress);
    const zoom = 1 - eased * .47;
    ctx.translate(W * .5, g); ctx.scale(zoom, zoom); ctx.translate(-W * .5, -g);
  }
  if (state.scene === 'sunset') sunsetWorld(ctx, state, W, H);
  else if (state.scene === 'zorbas') giantWorld(ctx, state, W, H);
  else annWorld(ctx, state, W, H);
  for (const h of state.hearts || []) if (!h.got) {
    const bob = state.reducedMotion ? 0 : Math.sin((state.time || 0) * 3 + h.x) * 2;
    heart(ctx, h.x - cam - 5, g - h.y - 8 + bob, 1.2, '#ddaa9c');
  }
  for (const p of state.particles || []) {
    ctx.globalAlpha = Math.min(1, Math.max(0, p.life));
    rect(ctx, p.x - cam, g - p.y, 3, 3, p.color || C.gold);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
  // A brief bright sky wash joins the two viewpoints after the camera pulls back.
  if (state.transition > 0) {
    const reveal = Math.max(0, 1 - state.transition / .45);
    ctx.globalAlpha = reveal * .85;
    rect(ctx, 0, 0, W, H, '#fff6dc');
    ctx.globalAlpha = reveal * .7;
    for (let i = 0; i < 12; i++) sparkle(ctx, W * .5 + Math.cos(i * Math.PI / 6) * W * .24, H * .48 + Math.sin(i * Math.PI / 6) * H * .32, C.white, 2);
  }
  ctx.restore();
}
