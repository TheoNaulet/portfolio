"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";

const passions = [
  { emoji: "\u26BD", label: "Sport", desc: "Padel, beachvolley, sports collectifs" },
  { emoji: "\uD83D\uDCC8", label: "Investissement", desc: "Bourse, crypto, patrimoine" },
  { emoji: "\uD83D\uDE80", label: "Entreprendre", desc: "Creer, lancer, iterer" },
  { emoji: "\uD83D\uDCBB", label: "Tech", desc: "Veille, side projects, nouveautes" },
  { emoji: "\uD83C\uDF7B", label: "Faire la fete", desc: "Bons moments entre amis" },
  { emoji: "\uD83C\uDF73", label: "Cuisine", desc: "Tester, improviser, regaler" },
  { emoji: "\u2708\uFE0F", label: "Voyager", desc: "Decouvrir, s'inspirer, explorer" },
  { emoji: "\uD83C\uDFAE", label: "Jeux video", desc: "FPS, strategie, detente" },
];

export default function Testimonials() {
  return (
    <section id="passions" className="px-6 md:px-12 py-16 md:py-20 max-w-[1280px] mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeInUp}
          className="grad-text font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-12 md:mb-16"
        >
          Passions
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {passions.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-violet/8 bg-white p-5 md:p-6 cursor-default transition-shadow hover:shadow-[0_12px_40px_-10px_rgba(124,58,237,0.12)]"
            >
              <motion.div
                className="text-[36px] md:text-[42px] mb-3 leading-none inline-block origin-center"
                whileHover={{ rotate: [0, -8, 8, -6, 4, 0], transition: { duration: 0.5 } }}
              >
                {p.emoji}
              </motion.div>
              <div className="font-condensed text-[16px] md:text-[18px] font-extrabold uppercase tracking-[0.04em] text-ink leading-none">
                {p.label}
              </div>
              <p className="font-condensed text-[11px] font-semibold tracking-[0.06em] uppercase text-ink2 mt-2 leading-[1.5]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
