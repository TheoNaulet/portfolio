"use client";

import { motion } from "framer-motion";
import LiquidGlassCanvas from "./liquid-glass/LiquidGlassCanvas";

const word = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="bg-cream relative overflow-hidden min-h-[88vh] flex flex-col">
      <LiquidGlassCanvas variant="hero" />

      {/* Photo — absolute, behind DEVELOPER, in front of FULL/STACK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-x-0 bottom-0 z-[5] hidden md:flex justify-center pointer-events-none"
      >
        <img
          src="/images/theo.png"
          alt="Theo Naulet"
          className="h-[82vh] w-auto object-contain object-bottom"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center pt-7 relative z-10"
      >
        <p className="font-condensed text-[15px] font-bold tracking-[0.12em] uppercase text-ink">
          Salut, je suis Theo Naulet
        </p>
      </motion.div>

      {/* Typography */}
      <div className="relative px-6 md:px-12 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        {/* Row 1: FULL  STACK — z-index behind photo */}
        <div className="flex flex-col md:flex-row items-center justify-between leading-none relative z-[2]">
          <motion.span
            custom={0}
            variants={word}
            initial="hidden"
            animate="visible"
            className="grad-text font-condensed text-[clamp(64px,14vw,186px)] font-black uppercase tracking-[-0.02em] leading-[0.9]"
          >
            Full
          </motion.span>

          {/* Spacer where photo used to sit */}
          <div className="hidden md:block flex-1" />

          <motion.span
            custom={1}
            variants={word}
            initial="hidden"
            animate="visible"
            className="grad-text font-condensed text-[clamp(64px,14vw,186px)] font-black uppercase tracking-[-0.02em] leading-[0.9]"
          >
            Stack
          </motion.span>
        </div>

        {/* Row 2: DEVELOPER [bio] </> — z-index in front of photo */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mt-2 md:-mt-3 relative z-[8] pr-2">
          <motion.span
            custom={2}
            variants={word}
            initial="hidden"
            animate="visible"
            className="grad-text font-condensed text-[clamp(64px,14vw,186px)] font-black italic uppercase tracking-[-0.02em] leading-[0.9] pr-[0.05em]"
          >
            Developer
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hidden lg:block w-[180px]"
          >
            <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.5]">
              Developpeur Full Stack
              <br />
              base a Montpellier,
              <br />
              passionne de produit
              <br />
              et de design.
            </p>
          </motion.div>

          <motion.span
            custom={3}
            variants={word}
            initial="hidden"
            animate="visible"
            className="font-condensed text-[clamp(48px,8vw,110px)] font-black text-violet opacity-60 md:self-end pb-2"
          >
            &lt;/&gt;
          </motion.span>
        </div>
      </div>
    </section>
  );
}
