"use client";

import { motion } from "framer-motion";
import { navLinks, socialLinks } from "@/lib/data";
import { fadeIn } from "@/lib/animation";
import LiquidGlassCanvas from "./liquid-glass/LiquidGlassCanvas";

export default function Footer() {
  return (
    <footer className="bg-cream mt-16 md:mt-20 px-6 md:px-12 pt-14 md:pt-16 pb-10 relative overflow-hidden">
      <LiquidGlassCanvas variant="footer" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10 max-w-[1280px] mx-auto"
      >
        {/* Email */}
        <div>
          <p className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-ink2 mb-2">
            Ecris-moi
          </p>
          <a
            href="mailto:theo.naulet@gmail.com"
            className="grad-text font-condensed text-[18px] font-extrabold uppercase tracking-[0.02em] no-underline hover:opacity-60 transition-opacity inline-block"
          >
            theo.naulet
            <br />
            @gmail.com
          </a>
        </div>

        {/* Nav links */}
        <div>
          <div className="font-condensed text-[12px] font-extrabold tracking-[0.12em] uppercase text-ink mb-3.5">
            Liens
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-condensed text-[13px] font-semibold uppercase tracking-[0.06em] text-ink2 no-underline mb-2 hover:text-violet transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Location */}
        <div>
          <div className="font-condensed text-[12px] font-extrabold tracking-[0.12em] uppercase text-ink mb-3.5">
            Localisation
          </div>
          <p className="font-condensed text-[13px] font-semibold uppercase tracking-[0.05em] text-ink2 leading-[1.8]">
            Montpellier
            <br />
            34000
            <br />
            France
          </p>
        </div>

        {/* Social */}
        <div>
          <div className="font-condensed text-[12px] font-extrabold tracking-[0.12em] uppercase text-ink mb-3.5">
            Suivre
          </div>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-condensed text-[13px] font-semibold uppercase tracking-[0.06em] text-ink2 no-underline mb-2 hover:text-violet transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-violet/10 mt-10 pt-5 text-center relative z-10 max-w-[1280px] mx-auto">
        <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.1em] text-ink2">
          &copy; 2025 Theo Naulet — Tous droits reserves
        </p>
      </div>
    </footer>
  );
}
