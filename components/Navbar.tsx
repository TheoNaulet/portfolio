"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, socialLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center justify-between px-6 md:px-12 py-6 relative z-50 max-w-[1280px] mx-auto w-full"
    >
      <a
        href="#"
        className="font-script text-[28px] text-ink no-underline"
      >
        Theo
      </a>

      {/* Desktop pill nav */}
      <div className="hidden md:flex bg-white rounded-full px-8 py-2.5 gap-10 shadow-[0_1px_12px_rgba(45,13,92,0.08)]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink no-underline hover:text-violet transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop socials */}
      <div className="hidden md:flex flex-col items-end gap-1">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
        aria-label="Menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-ink"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-[2px] bg-ink"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-ink"
        />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-condensed text-3xl font-bold uppercase tracking-[0.06em] text-ink no-underline hover:text-violet transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
