"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animation";
import { assetPath } from "@/lib/asset-path";
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
            <h1
              className="font-condensed text-[clamp(64px,12vw,160px)] font-black uppercase tracking-[-0.02em] leading-[0.9]"
              style={project.titleGradient ? {
                background: project.titleGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } : undefined}
            >
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

          {/* Hero showcase — Apple-like */}
          <motion.div
            variants={scaleIn}
            className="w-full rounded-3xl overflow-hidden bg-[#faf8ff] relative mb-20 py-16 md:py-24 px-8 md:px-16 border border-violet/8"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Text side */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-[13px] md:text-[14px] font-light tracking-[0.15em] uppercase text-ink2/50 mb-4">
                  {project.year}
                </p>
                {project.showcase ? (
                  <>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-extralight text-ink leading-[1.1] tracking-[-0.02em]">
                      {project.showcase.headline}
                      <br />
                      <span className={`font-medium bg-gradient-to-r ${project.showcase.highlightColor} bg-clip-text text-transparent`}>
                        {project.showcase.highlight}
                      </span>
                    </h2>
                    <p className="text-[14px] md:text-[16px] font-light text-ink2 leading-[1.7] mt-6 max-w-[380px] mx-auto md:mx-0">
                      {project.showcase.sub}
                    </p>
                  </>
                ) : (
                  <h2 className="text-[clamp(32px,5vw,56px)] font-extralight text-ink leading-[1.1] tracking-[-0.02em]">
                    {project.name}
                  </h2>
                )}
              </div>

              {/* Mockup */}
              {(() => {
                const iphoneScreens = project.screens.filter(s => s.type === "iphone" && s.image);
                const macbookScreens = project.screens.filter(s => s.type === "macbook" && s.image);
                // Both macbook + iphone: show side by side
                if (macbookScreens.length > 0 && iphoneScreens.length > 0) {
                  return (
                    <div className="relative flex items-end gap-4 md:gap-6 flex-shrink-0">
                      {/* MacBook */}
                      <div className="relative w-[220px] md:w-[320px]">
                        <div className="bg-[#2a2a2e] rounded-t-[10px] p-[6px] border border-black/8 border-b-0">
                          <div className="rounded-[4px] overflow-hidden">
                            <img src={assetPath(macbookScreens[0].image!)} alt={macbookScreens[0].label} className="w-full h-auto" />
                          </div>
                        </div>
                        <div className="h-[8px] bg-gradient-to-b from-[#333338] to-[#1e1e22] rounded-b-[4px]" />
                        <div className="mx-[-3%] h-[6px] bg-gradient-to-b from-[#d1d1d1] to-[#b8b8b8] rounded-b-[6px]" />
                      </div>
                      {/* iPhone */}
                      <div className="relative w-[80px] md:w-[110px] -mb-2">
                        <div className="bg-[#1a1a1c] rounded-[16px] md:rounded-[24px] p-[3px] md:p-[4px] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                          <div className="absolute top-[6px] md:top-[10px] left-1/2 -translate-x-1/2 w-[30px] md:w-[45px] h-[8px] md:h-[14px] bg-black rounded-full z-10" />
                          <div className="rounded-[13px] md:rounded-[20px] overflow-hidden">
                            <img src={assetPath(iphoneScreens[0].image!)} alt={iphoneScreens[0].label} className="w-full h-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (iphoneScreens.length >= 2) {
                  return (
                    <div className="relative w-[260px] md:w-[300px] h-[420px] md:h-[500px] flex-shrink-0">
                      <div className="absolute right-0 top-4 w-[180px] md:w-[210px] rotate-[6deg] opacity-75 z-[1]">
                        <div className="bg-[#1a1a1c] rounded-[32px] p-[4px] border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                          <div className="rounded-[28px] overflow-hidden">
                            <img src={assetPath(iphoneScreens[1].image!)} alt={iphoneScreens[1].label} className="w-full h-auto" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 w-[180px] md:w-[210px] -rotate-[3deg] z-[2]">
                        <div className="bg-[#1a1a1c] rounded-[32px] p-[4px] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
                          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[50px] h-[16px] bg-black rounded-full z-10" />
                          <div className="rounded-[28px] overflow-hidden">
                            <img src={assetPath(iphoneScreens[0].image!)} alt={iphoneScreens[0].label} className="w-full h-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (iphoneScreens.length === 1) {
                  return (
                    <div className="relative w-[200px] md:w-[230px] flex-shrink-0">
                      <div className="bg-[#1a1a1c] rounded-[36px] p-[5px] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[60px] h-[18px] bg-black rounded-full z-10" />
                        <div className="rounded-[31px] overflow-hidden">
                          <img src={assetPath(iphoneScreens[0].image!)} alt={iphoneScreens[0].label} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                  );
                }
                if (macbookScreens.length > 0) {
                  return (
                    <div className="relative w-[320px] md:w-[400px] flex-shrink-0">
                      <div className="bg-[#2a2a2e] rounded-t-[10px] p-[6px] border border-black/8 border-b-0">
                        <div className="rounded-[4px] overflow-hidden">
                          <img src={assetPath(macbookScreens[0].image!)} alt={macbookScreens[0].label} className="w-full h-auto" />
                        </div>
                      </div>
                      <div className="h-[8px] bg-gradient-to-b from-[#333338] to-[#1e1e22] rounded-b-[4px]" />
                      <div className="mx-[-3%] h-[6px] bg-gradient-to-b from-[#d1d1d1] to-[#b8b8b8] rounded-b-[6px]" />
                    </div>
                  );
                }
                if (project.image) {
                  return (
                    <div className="relative w-[160px] md:w-[200px] flex-shrink-0">
                      <img src={assetPath(project.image!)} alt={project.name} className="w-full h-auto object-contain drop-shadow-lg" />
                    </div>
                  );
                }
                return null;
              })()}
            </div>
          </motion.div>

          {/* About section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 mb-20 md:mb-28"
          >
            <div>
              <h2 className="font-condensed text-[32px] md:text-[48px] font-black uppercase tracking-[-0.02em] text-ink leading-[0.9] mb-6">
                À propos du projet
              </h2>
              <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.8]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {/* Role & Duration */}
              <div>
                <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                  Rôle
                </h3>
                <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7] mt-2">
                  {project.role}
                </p>
              </div>
              <div>
                <h3 className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.06em] text-ink mb-2 pb-2 border-b-2 border-ink inline-block">
                  Durée
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

          {project.status === "in-progress" || !project.screens.some(s => s.image) ? (
            /* En cours de création */
            <motion.div variants={fadeInUp} className="mb-20 md:mb-28">
              <h2
                className="font-condensed text-[clamp(40px,7vw,80px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
                style={project.titleGradient ? { background: project.titleGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : undefined}
              >
                Screens
              </h2>
              <div className="w-full py-20 rounded-2xl border border-violet/8 bg-cream/40 flex flex-col items-center justify-center">
                <span className="font-condensed text-[48px] mb-4">🚧</span>
                <p className="font-condensed text-[18px] md:text-[22px] font-extrabold uppercase tracking-[0.04em] text-ink/40">
                  En cours de création
                </p>
                <p className="font-condensed text-[12px] font-semibold tracking-[0.08em] uppercase text-ink2/50 mt-2">
                  Les screens arrivent bientôt
                </p>
              </div>
            </motion.div>
          ) : (
            <>
          {/* Screens section - iPhone row */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2
              className="font-condensed text-[clamp(40px,7vw,80px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
              style={project.titleGradient ? { background: project.titleGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : undefined}
            >
              Screens
            </h2>
          </motion.div>

          {/* Desktop screens */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20"
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

          {/* Mobile screens */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 md:mb-28"
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
            </>
          )}

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
              className="font-condensed text-[clamp(40px,7vw,80px)] font-black uppercase tracking-[-0.02em] leading-[0.9] mb-10"
              style={project.titleGradient ? { background: project.titleGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : undefined}
            >
              Fonctionnalités
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 items-start p-5 rounded-xl bg-cream/60 border border-violet/5"
                >
                  <span
                    className="font-condensed text-[28px] font-black leading-none flex-shrink-0 opacity-30"
                    style={project.titleGradient ? { background: project.titleGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : undefined}
                  >
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
                <h3
                  className="font-condensed text-[clamp(40px,8vw,100px)] font-black uppercase tracking-[-0.02em] leading-[0.9] group-hover:opacity-80 transition-opacity"
                  style={nextProject.titleGradient ? { background: nextProject.titleGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : undefined}
                >
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
