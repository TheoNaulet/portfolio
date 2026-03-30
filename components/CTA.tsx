"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function CTA() {
  return (
    <section id="contact" className="px-6 md:px-12 pt-16 md:pt-20 bg-white max-w-[1280px] mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-8">
          <motion.div variants={fadeInUp}>
            <div className="grad-text font-condensed text-[clamp(44px,8vw,110px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
              Une idee ?
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <motion.a
              href="mailto:theo.naulet@gmail.com"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#7C3AED",
                color: "#FFFFFF",
                borderColor: "#7C3AED",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-ink flex flex-col items-center justify-center no-underline text-ink cursor-pointer bg-transparent gap-1 transition-colors"
            >
              <span className="text-xl">&#8599;</span>
              <span className="font-condensed text-[11px] font-bold uppercase tracking-[0.1em] text-center leading-[1.3]">
                Envoie-moi
                <br />
                un message
              </span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="grad-text font-condensed text-[clamp(44px,8vw,110px)] font-black uppercase tracking-[-0.02em] leading-[0.9] md:text-right">
              Dis-moi tout.
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="font-condensed text-[12px] font-semibold uppercase tracking-[0.07em] text-ink2 text-center pt-6 max-w-[400px] mx-auto leading-[1.7]"
        >
          Disponible pour missions freelance, poste full-time, ou juste un cafe
          a Montpellier.
        </motion.p>
      </motion.div>
    </section>
  );
}
