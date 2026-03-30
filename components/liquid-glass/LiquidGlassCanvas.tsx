"use client";

import { useEffect, useRef, useState } from "react";
import {
  LiquidGlassRenderer,
  type LiquidGlassVariant,
} from "./liquid-glass";

export default function LiquidGlassCanvas({
  variant,
}: {
  variant: LiquidGlassVariant;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile || !canvasRef.current) return;
    const renderer = new LiquidGlassRenderer(canvasRef.current, variant);
    return () => renderer.destroy();
  }, [variant, isMobile]);

  if (isMobile) {
    // Static gradient fallback on mobile
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-0 right-0 h-32 bg-gradient-to-r from-transparent via-grad-a/40 to-transparent blur-3xl rotate-[-5deg]" />
          <div className="absolute top-1/2 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-grad-b/30 to-transparent blur-2xl rotate-[3deg]" />
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden
    />
  );
}
