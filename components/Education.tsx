"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function Education() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 max-w-[1280px] mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeInUp}
          className="grad-text font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-12 md:mb-[72px]"
        >
          Formation
        </motion.div>

        <div className="flex flex-col gap-0">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className="border-t border-violet/10 py-8 md:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="font-condensed text-[48px] md:text-[72px] font-black text-violet/15 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Logo */}
                <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-xl bg-white border border-violet/8 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-condensed text-[18px] font-black text-violet/40 uppercase">
                      {edu.school.slice(0, 2)}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-condensed text-[22px] md:text-[28px] font-black uppercase tracking-[0.02em] text-ink leading-none">
                    {edu.degree}
                  </h3>
                  {edu.level && (
                    <span className="inline-block font-condensed text-[11px] font-bold tracking-[0.07em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(167,139,250,0.12)] text-violet-mid mt-2">
                      {edu.level}
                    </span>
                  )}
                  <p className="font-condensed text-[13px] font-semibold tracking-[0.06em] uppercase text-ink2 mt-2">
                    {edu.school} — {edu.location}
                  </p>
                </div>

                {/* Period */}
                <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase flex-shrink-0">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-violet/10" />
        </div>
      </motion.div>
    </section>
  );
}
