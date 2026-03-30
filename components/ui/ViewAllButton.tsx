"use client";

import { motion } from "framer-motion";

export default function ViewAllButton({
  children = "Voir tout",
  className = "",
}: {
  children?: string;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 bg-transparent hover:bg-ink hover:text-white transition-colors cursor-pointer ${className}`}
    >
      {children} <span>&#8599;</span>
    </motion.button>
  );
}
