// Simplex-inspired 2D noise (lightweight, zero deps)
const GRAD = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];
const PERM = new Uint8Array(512);
(() => {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
})();

function dot(g: number[], x: number, y: number) {
  return g[0] * x + g[1] * y;
}

function noise2D(x: number, y: number): number {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const s = (x + y) * F2;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const t = (i + j) * G2;
  const X0 = i - t, Y0 = j - t;
  const x0 = x - X0, y0 = y - Y0;
  const i1 = x0 > y0 ? 1 : 0;
  const j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
  const ii = i & 255, jj = j & 255;
  const gi0 = PERM[ii + PERM[jj]] % 8;
  const gi1 = PERM[ii + i1 + PERM[jj + j1]] % 8;
  const gi2 = PERM[ii + 1 + PERM[jj + 1]] % 8;
  let n0 = 0, n1 = 0, n2 = 0;
  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 > 0) { t0 *= t0; n0 = t0 * t0 * dot(GRAD[gi0], x0, y0); }
  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 > 0) { t1 *= t1; n1 = t1 * t1 * dot(GRAD[gi1], x1, y1); }
  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 > 0) { t2 *= t2; n2 = t2 * t2 * dot(GRAD[gi2], x2, y2); }
  return 70 * (n0 + n1 + n2);
}

interface Point { x: number; y: number }

interface TubeConfig {
  controlPoints: Point[];
  width: number;
  colorStops: { offset: number; color: string; opacity: number }[];
  specularWidth: number;
  shadowWidth: number;
  glowWidth: number;
  glowOpacity: number;
}

function offsetCurve(points: Point[], offsetY: number): Point[] {
  return points.map((p) => ({ x: p.x, y: p.y + offsetY }));
}

function displacePoints(points: Point[], time: number, freq: number, amp: number): Point[] {
  return points.map((p, i) => ({
    x: p.x + noise2D(p.x * freq + i * 0.5, time * 0.3) * amp,
    y: p.y + noise2D(p.x * freq + i * 0.5 + 100, time * 0.3) * amp,
  }));
}

function createGradient(
  ctx: CanvasRenderingContext2D,
  w: number,
  stops: { offset: number; color: string; opacity: number }[]
): CanvasGradient {
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  for (const s of stops) {
    // Parse hex color and add alpha
    const r = parseInt(s.color.slice(1, 3), 16);
    const g = parseInt(s.color.slice(3, 5), 16);
    const b = parseInt(s.color.slice(5, 7), 16);
    grad.addColorStop(s.offset, `rgba(${r},${g},${b},${s.opacity})`);
  }
  return grad;
}

function drawBezierPath(ctx: CanvasRenderingContext2D, points: Point[]) {
  if (points.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length - 2; i += 3) {
    ctx.bezierCurveTo(
      points[i].x, points[i].y,
      points[i + 1].x, points[i + 1].y,
      points[i + 2].x, points[i + 2].y
    );
  }
  ctx.stroke();
}

// Hero tubes config (matching SVG paths from HTML)
const heroTube1Points: Point[] = [
  { x: -100, y: 400 }, { x: 200, y: 200 }, { x: 400, y: 600 }, { x: 700, y: 380 },
  { x: 1000, y: 160 }, { x: 1200, y: 520 }, { x: 1540, y: 320 },
];
const heroTube2Points: Point[] = [
  { x: -100, y: 520 }, { x: 150, y: 340 }, { x: 450, y: 700 }, { x: 750, y: 460 },
  { x: 1050, y: 220 }, { x: 1250, y: 600 }, { x: 1540, y: 420 },
];

const companiesTubePoints: Point[] = [
  { x: -100, y: 250 }, { x: 300, y: 80 }, { x: 600, y: 420 }, { x: 900, y: 220 },
  { x: 1200, y: 20 }, { x: 1350, y: 380 }, { x: 1540, y: 200 },
];

const footerTubePoints: Point[] = [
  { x: -100, y: 200 }, { x: 300, y: 60 }, { x: 600, y: 340 }, { x: 900, y: 160 },
  { x: 1200, y: -20 }, { x: 1350, y: 300 }, { x: 1540, y: 150 },
];

const bodyStops = [
  { offset: 0, color: "#7C3AED", opacity: 0 },
  { offset: 0.2, color: "#A78BFA", opacity: 0.55 },
  { offset: 0.5, color: "#C084FC", opacity: 0.65 },
  { offset: 0.8, color: "#F0ABFC", opacity: 0.55 },
  { offset: 1, color: "#7C3AED", opacity: 0 },
];

const specStops = [
  { offset: 0, color: "#FFFFFF", opacity: 0 },
  { offset: 0.3, color: "#FFFFFF", opacity: 0.95 },
  { offset: 0.6, color: "#FFFFFF", opacity: 0.8 },
  { offset: 1, color: "#FFFFFF", opacity: 0 },
];

const aberBStops = [
  { offset: 0, color: "#A78BFA", opacity: 0 },
  { offset: 0.3, color: "#60A5FA", opacity: 0.2 },
  { offset: 0.65, color: "#818CF8", opacity: 0.18 },
  { offset: 1, color: "#A78BFA", opacity: 0 },
];

const aberRStops = [
  { offset: 0, color: "#F0ABFC", opacity: 0 },
  { offset: 0.4, color: "#F9A8D4", opacity: 0.25 },
  { offset: 0.7, color: "#FCA5A5", opacity: 0.2 },
  { offset: 1, color: "#F0ABFC", opacity: 0 },
];

function drawTube(
  ctx: CanvasRenderingContext2D,
  width: number,
  basePoints: Point[],
  time: number,
  scale: number,
  tubeWidth: number = 68,
  glowOpacity: number = 0.18
) {
  const freq = 0.0012;
  const amp = 10 * scale;
  const points = displacePoints(
    basePoints.map((p) => ({ x: p.x * scale, y: p.y * scale })),
    time,
    freq / scale,
    amp
  );

  // 1. Glow
  ctx.save();
  ctx.filter = `blur(${22 * scale}px)`;
  ctx.globalAlpha = glowOpacity;
  ctx.strokeStyle = createGradient(ctx, width, bodyStops);
  ctx.lineWidth = 130 * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, points);
  ctx.restore();

  // 2. Chromatic aberration - blue
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = createGradient(ctx, width, aberBStops);
  ctx.lineWidth = 72 * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, offsetCurve(points, 3 * scale));
  ctx.restore();

  // 3. Chromatic aberration - red/pink
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = createGradient(ctx, width, aberRStops);
  ctx.lineWidth = 72 * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, offsetCurve(points, -3 * scale));
  ctx.restore();

  // 4. Body
  ctx.save();
  ctx.filter = `blur(${1.5 * scale}px)`;
  ctx.strokeStyle = createGradient(ctx, width, bodyStops);
  ctx.lineWidth = tubeWidth * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, points);
  ctx.restore();

  // 5. Specular highlight - wide
  ctx.save();
  ctx.filter = `blur(${1.5 * scale}px)`;
  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = createGradient(ctx, width, specStops);
  ctx.lineWidth = 16 * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, offsetCurve(points, -16 * scale));
  ctx.restore();

  // 6. Specular highlight - sharp (no blur)
  ctx.save();
  ctx.globalAlpha = 0.95;
  ctx.strokeStyle = createGradient(ctx, width, specStops);
  ctx.lineWidth = 2.5 * scale;
  ctx.lineCap = "round";
  drawBezierPath(ctx, offsetCurve(points, -21 * scale));
  ctx.restore();
}

export type LiquidGlassVariant = "hero" | "companies" | "footer";

export class LiquidGlassRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationId: number = 0;
  private running = false;
  private variant: LiquidGlassVariant;
  private observer: IntersectionObserver | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private startTime = 0;

  constructor(canvas: HTMLCanvasElement, variant: LiquidGlassVariant) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.variant = variant;
    this.startTime = performance.now();

    this.setupResize();
    this.setupVisibility();
    this.resize();
    this.start();
  }

  private setupResize() {
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.canvas.parentElement || this.canvas);
  }

  private resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const rect = parent.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private setupVisibility() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.start();
        } else {
          this.stop();
        }
      },
      { threshold: 0 }
    );
    this.observer.observe(this.canvas);
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  private stop() {
    this.running = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = 0;
    }
  }

  private animate = () => {
    if (!this.running) return;
    const time = (performance.now() - this.startTime) / 1000;
    this.draw(time);
    this.animationId = requestAnimationFrame(this.animate);
  };

  private draw(time: number) {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const scale = w / 1440;

    this.ctx.clearRect(0, 0, w, h);

    switch (this.variant) {
      case "hero":
        drawTube(this.ctx, w, heroTube1Points, time, scale, 68, 0.18);
        drawTube(this.ctx, w, heroTube2Points, time * 0.8, scale, 50, 0.12);
        break;
      case "companies":
        drawTube(this.ctx, w, companiesTubePoints, time * 0.9, scale, 62, 0.14);
        break;
      case "footer":
        drawTube(this.ctx, w, footerTubePoints, time * 0.85, scale, 54, 0.13);
        break;
    }
  }

  destroy() {
    this.stop();
    this.observer?.disconnect();
    this.resizeObserver?.disconnect();
  }
}
