"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { companies } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animation";

export default function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const company = companies.find((c) => c.slug === slug);
  if (!company) return notFound();

  const currentIndex = companies.findIndex((c) => c.slug === slug);
  const nextCompany = companies[(currentIndex + 1) % companies.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-[1280px] mx-auto">
        <Link
          href="/#companies"
          className="font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
        >
          &larr; Retour
        </Link>
      </nav>

      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero */}
          <motion.div variants={fadeInUp} className="mb-16 md:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] font-condensed text-[22px] font-black text-white tracking-[-0.02em]"
                style={{ background: company.logo ? "transparent" : company.accentColor }}
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                ) : (
                  company.initials
                )}
              </span>
              <div>
                <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase block">
                  {company.period}
                </span>
                <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase block">
                  {company.role}
                </span>
              </div>
            </div>

            <h1 className="grad-text font-condensed text-[clamp(56px,11vw,150px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
              {company.name}
            </h1>
            <p className="font-condensed text-[14px] md:text-[16px] font-semibold tracking-[0.04em] uppercase text-ink2 leading-[1.7] mt-6 max-w-[600px]">
              {company.context}
            </p>
            {company.slug === "viatransit" && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href="https://viatransit.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-ink rounded-full px-6 py-2.5 no-underline hover:bg-violet transition-colors"
                >
                  viatransit.fr &#8599;
                </a>
                <a
                  href="https://apps.apple.com/fr/app/viatransit/id1456180267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                >
                  App Store &#8599;
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=fr.viatransit.app&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                >
                  Google Play &#8599;
                </a>
              </div>
            )}
            {company.slug === "sonup" && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href="https://www.socare.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-ink rounded-full px-6 py-2.5 no-underline hover:bg-violet transition-colors"
                >
                  Site vitrine &#8599;
                </a>
                <a
                  href="https://app.socare.fr/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-ink rounded-full px-6 py-2.5 no-underline hover:bg-violet transition-colors"
                >
                  Webapp &#8599;
                </a>
                <a
                  href="https://apps.apple.com/fr/app/socare/id6476305421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                >
                  App Store &#8599;
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sonup.socare&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                >
                  Google Play &#8599;
                </a>
              </div>
            )}
          </motion.div>

          {/* Accent bar */}
          <motion.div
            variants={scaleIn}
            className="w-full h-[6px] rounded-full mb-16 md:mb-20"
            style={{
              background: `linear-gradient(90deg, ${company.accentColor}, ${company.accentColor}88, transparent)`,
            }}
          />

          {/* Description + Info */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 mb-20 md:mb-28"
          >
            <div>
              <h2 className="font-condensed text-[28px] md:text-[40px] font-black uppercase tracking-[-0.02em] text-ink leading-[0.9] mb-6">
                L&apos;expérience
              </h2>
              <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.9]">
                {company.description}
              </p>
            </div>
            <div>
              <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                Stack & compétences
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-condensed text-[11px] font-bold tracking-[0.07em] uppercase px-3 py-1 rounded-full text-white"
                    style={{ background: company.accentColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Missions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20 md:mb-28"
          >
            <motion.h2
              variants={fadeInUp}
              className="grad-text font-condensed text-[clamp(36px,7vw,72px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
            >
              Missions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.missions.map((mission, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 items-start p-5 rounded-xl bg-cream/60 border border-violet/5"
                >
                  <span className="font-condensed text-[24px] font-black leading-none flex-shrink-0 opacity-30"
                    style={{ color: company.accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.7] pt-0.5">
                    {mission}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20 md:mb-28"
          >
            <motion.h2
              variants={fadeInUp}
              className="grad-text font-condensed text-[clamp(36px,7vw,72px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
            >
              Réalisations
            </motion.h2>
            <div className="flex flex-col gap-0">
              {company.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-5 items-center py-5 border-b border-violet/8"
                >
                  <span
                    className="w-[10px] h-[10px] rounded-full flex-shrink-0"
                    style={{ background: company.accentColor }}
                  />
                  <p className="font-condensed text-[13px] md:text-[14px] font-semibold tracking-[0.05em] uppercase text-ink leading-[1.6]">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next experience */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-t border-violet/10 py-16 md:py-20 mb-10"
          >
            <Link
              href={`/experience/${nextCompany.slug}`}
              className="group block no-underline"
            >
              <p className="font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-ink2 mb-3">
                Expérience suivante
              </p>
              <div className="flex items-center gap-6">
                <h3 className="grad-text font-condensed text-[clamp(36px,8vw,90px)] font-black uppercase tracking-[-0.02em] leading-[0.9] group-hover:opacity-80 transition-opacity">
                  {nextCompany.name}
                </h3>
                <span className="font-condensed text-[28px] text-ink2 group-hover:text-violet group-hover:translate-x-3 transition-all">
                  &#8599;
                </span>
              </div>
              <p className="font-condensed text-[11px] font-semibold tracking-[0.08em] uppercase text-ink2 mt-2">
                {nextCompany.role} — {nextCompany.period}
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
