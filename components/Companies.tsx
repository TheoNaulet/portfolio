"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { companies } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import LiquidGlassCanvas from "./liquid-glass/LiquidGlassCanvas";

const fullCoverSlugs = ["viatransit", "boulanger", "fc-sete", "toulouse-fc"];

function CompanyLogo({ initials, accentColor, logo, slug }: { initials: string; accentColor: string; logo?: string; slug: string }) {
  const isFull = fullCoverSlugs.includes(slug);
  return (
    <div
      className="w-[72px] h-[72px] rounded-[14px] flex items-center justify-center font-condensed text-[22px] font-black tracking-[-0.02em] flex-shrink-0 transition-all duration-300 overflow-hidden"
      style={{
        background: logo ? "rgba(13,10,26,0.04)" : "rgba(13,10,26,0.07)",
        color: "rgba(13,10,26,0.25)",
      }}
    >
      {logo ? (
        <img src={logo} alt={initials} className={`${isFull ? "w-full h-full object-cover" : "w-10 h-10 object-contain"}`} />
      ) : (
        initials
      )}
    </div>
  );
}

function CompanyCard({
  company,
  index,
}: {
  company: (typeof companies)[0];
  index: number;
}) {
  const isFirst = index === 0;
  const isLast = index === companies.length - 1;

  return (
    <Link href={`/experience/${company.slug}`} className="no-underline block">
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`group bg-white/55 backdrop-blur-[8px] border border-white/70 p-8 md:p-10 flex flex-col gap-5 cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-white/90 hover:border-[rgba(167,139,250,0.4)] hover:shadow-[0_16px_48px_rgba(45,13,92,0.1),0_0_0_1px_rgba(167,139,250,0.2)] ${
          isFirst ? "rounded-l-xl" : ""
        } ${isLast ? "rounded-r-xl" : ""}`}
      >
        {/* Top gradient bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-grad-c via-grad-a to-grad-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Logo */}
        <CompanyLogo initials={company.initials} accentColor={company.accentColor} logo={company.logo} slug={company.slug} />

        <div>
          <div className="font-condensed text-[22px] font-extrabold uppercase tracking-[0.03em] text-ink group-hover:text-violet transition-colors duration-300 leading-none">
            {company.name}
          </div>
          <div className="font-condensed text-[12px] font-bold uppercase tracking-[0.09em] text-ink2 group-hover:text-violet-mid transition-colors duration-300 mt-1">
            {company.role}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-all duration-300">
          {company.tags.map((tag) => (
            <span
              key={tag}
              className="font-condensed text-[10px] font-bold tracking-[0.07em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(167,139,250,0.12)] text-violet-mid"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="font-condensed text-[11px] font-semibold tracking-[0.07em] uppercase text-ink2/60 group-hover:text-ink2 transition-colors duration-300 mt-auto">
          {company.period}
        </div>
      </motion.div>
    </Link>
  );
}

export default function Companies() {
  return (
    <section className="bg-cream px-6 md:px-12 py-16 md:py-20 relative overflow-hidden">
      <LiquidGlassCanvas variant="companies" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 max-w-[1280px] mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-[72px]">
          <motion.div
            variants={fadeInUp}
            className="grad-text font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9]"
          >
            Ils m&apos;ont
            <br />
            fait confiance
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-[220px] pb-2 mt-4 md:mt-0">
            <p className="font-condensed text-[12px] font-semibold tracking-[0.07em] uppercase text-ink2 leading-[1.7]">
              Des startups aux grandes enseignes, des produits mobiles aux
              plateformes web — hover pour decouvrir.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {companies.map((company, i) => (
            <CompanyCard key={company.name + i} company={company} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
