"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animation";
import IPhoneMockup from "@/components/ui/IPhoneMockup";
import MacBookMockup from "@/components/ui/MacBookMockup";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-[1280px] mx-auto">
        <Link
          href="/projects"
          className="font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
        >
          &larr; Tous les projets
        </Link>
        <Link
          href="/"
          className="font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
        >
          Accueil
        </Link>
      </nav>

      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero */}
          <motion.div variants={fadeInUp} className="mb-12 md:mb-20">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase">
                {project.year}
              </span>
              <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase">
                {project.role}
              </span>
            </div>
            <h1 className="grad-text font-condensed text-[clamp(64px,12vw,160px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
              {project.name}
            </h1>
            <p className="font-condensed text-[14px] md:text-[16px] font-semibold tracking-[0.04em] uppercase text-ink2 leading-[1.7] mt-6 max-w-[600px]">
              {project.tagline}
            </p>
            {(project.url !== "#" || project.appStoreUrl || project.playStoreUrl) && (
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-ink rounded-full px-6 py-2.5 no-underline hover:bg-violet transition-colors"
                  >
                    Site web &#8599;
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                  >
                    App Store &#8599;
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink border-[1.5px] border-ink rounded-full px-6 py-2.5 no-underline hover:bg-ink hover:text-white transition-colors"
                  >
                    Google Play &#8599;
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Hero mockup - large */}
          <motion.div
            variants={scaleIn}
            className={`w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center relative mb-20`}
          >
            <div className="absolute inset-0 bg-white/5" />
            <span className="font-condensed text-[clamp(40px,8vw,96px)] font-black uppercase text-white/50 tracking-[-0.02em] relative z-10">
              {project.name}
            </span>
          </motion.div>

          {/* About section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 mb-20 md:mb-28"
          >
            <div>
              <h2 className="font-condensed text-[32px] md:text-[48px] font-black uppercase tracking-[-0.02em] text-ink leading-[0.9] mb-6">
                A propos du projet
              </h2>
              <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.8]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {/* Role & Duration */}
              <div>
                <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                  Role
                </h3>
                <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7] mt-2">
                  {project.role}
                </p>
              </div>
              <div>
                <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                  Duree
                </h3>
                <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7] mt-2">
                  {project.duration}
                </p>
              </div>
              <div>
                <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                  Stack technique
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-condensed text-[11px] font-bold tracking-[0.07em] uppercase px-3 py-1 rounded-full bg-[rgba(167,139,250,0.12)] text-violet-mid"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Screens section - iPhone row */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="grad-text font-condensed text-[clamp(40px,7vw,80px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10">
              Screens
            </h2>
          </motion.div>

          {/* Mobile screens */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20"
          >
            {project.screens
              .filter((s) => s.type === "iphone")
              .map((screen) => (
                <motion.div key={screen.label} variants={fadeInUp}>
                  <IPhoneMockup
                    label={screen.label}
                    gradient={screen.gradient}
                    image={screen.image}
                  />
                </motion.div>
              ))}
          </motion.div>

          {/* Desktop screens */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-28"
          >
            {project.screens
              .filter((s) => s.type === "macbook")
              .map((screen) => (
                <motion.div key={screen.label} variants={scaleIn}>
                  <MacBookMockup
                    label={screen.label}
                    gradient={screen.gradient}
                    image={screen.image}
                  />
                </motion.div>
              ))}
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20 md:mb-28"
          >
            <motion.h2
              variants={fadeInUp}
              className="grad-text font-condensed text-[clamp(40px,7vw,80px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
            >
              Fonctionnalites
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 items-start p-5 rounded-xl bg-cream/60 border border-violet/5"
                >
                  <span className="font-condensed text-[28px] font-black text-violet/20 leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.7] pt-1">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next project CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-t border-violet/10 py-16 md:py-20 mb-10"
          >
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group block no-underline"
            >
              <p className="font-condensed text-[12px] font-bold tracking-[0.1em] uppercase text-ink2 mb-3">
                Projet suivant
              </p>
              <div className="flex items-center gap-6">
                <h3 className="grad-text font-condensed text-[clamp(40px,8vw,100px)] font-black uppercase tracking-[-0.02em] leading-[0.9] group-hover:opacity-80 transition-opacity">
                  {nextProject.name}
                </h3>
                <span className="font-condensed text-[32px] text-ink2 group-hover:text-violet group-hover:translate-x-3 transition-all">
                  &#8599;
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
