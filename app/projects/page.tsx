"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { assetPath } from "@/lib/asset-path";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="font-condensed text-[13px] font-bold tracking-[0.08em] uppercase text-ink2 no-underline hover:text-violet transition-colors"
        >
          &larr; Retour
        </Link>
      </nav>

      <div className="px-6 md:px-12 max-w-[1280px] mx-auto pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h1 className="grad-text font-condensed text-[clamp(56px,10vw,140px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
              Tous les
              <br />
              projets
            </h1>
            <p className="font-condensed text-[13px] font-semibold tracking-[0.08em] uppercase text-ink2 leading-[1.7] mt-6 max-w-[400px]">
              Chaque projet est une opportunite de repousser les limites du design et de la technique. Voici une selection de mes realisations.
            </p>
          </motion.div>

          {/* Projects list */}
          <div className="flex flex-col gap-0">
            {projects.map((project, i) => (
              <motion.div key={project.slug} variants={fadeInUp}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block no-underline border-t border-violet/10 py-8 md:py-10 transition-colors hover:bg-cream/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    {/* Number */}
                    <span className="font-condensed text-[48px] md:text-[72px] font-black text-violet/15 group-hover:text-violet/40 transition-colors leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Thumbnail */}
                    {(() => {
                      if (project.image) {
                        return (
                          <div className="flex flex-col items-center gap-2 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                            <img
                              src={assetPath(project.image)}
                              alt={project.name}
                              className={`w-[72px] h-[72px] rounded-[18px] shadow-md object-cover ${project.slug === "h2air" ? "bg-[#0A1628]" : "bg-white"}`}
                            />
                            <span className="font-condensed text-[11px] font-semibold tracking-[0.02em] text-ink2">
                              {project.name}
                            </span>
                          </div>
                        );
                      }
                      const macScreen = project.screens.find(s => s.type === "macbook" && s.image);
                      if (macScreen?.image) {
                        return (
                          <div className="w-full md:w-[200px] lg:w-[260px] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                            {/* Browser window frame */}
                            <div className="rounded-t-lg overflow-hidden border border-black/5">
                              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e8e6e3]">
                                <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
                                <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
                                <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
                              </div>
                              <div className="aspect-[16/10] overflow-hidden">
                                <img
                                  src={assetPath(macScreen.image)}
                                  alt={project.name}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div
                          className={`w-full md:w-[200px] lg:w-[260px] aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-shrink-0 relative`}
                        >
                          <div className="absolute inset-0 bg-white/10" />
                          <span className="font-condensed text-[24px] font-black uppercase text-white/60 relative z-10">
                            {project.name}
                          </span>
                        </div>
                      );
                    })()}

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h2 className="font-condensed text-[28px] md:text-[36px] font-black uppercase tracking-[0.02em] text-ink group-hover:text-violet transition-colors leading-none">
                          {project.name}
                        </h2>
                        <span className="font-condensed text-[12px] font-bold tracking-[0.1em] text-ink2 uppercase">
                          {project.year}
                        </span>
                        {project.status === "in-progress" && (
                          <span className="font-condensed text-[10px] font-bold tracking-[0.07em] uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-600 border border-amber-200">
                            En cours
                          </span>
                        )}
                      </div>
                      <p className="font-condensed text-[12px] font-semibold tracking-[0.06em] uppercase text-ink2 leading-[1.7] mt-2 max-w-[440px]">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="font-condensed text-[10px] font-bold tracking-[0.07em] uppercase px-2.5 py-0.5 rounded-full bg-[rgba(167,139,250,0.12)] text-violet-mid"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <span className="font-condensed text-[24px] text-ink2 group-hover:text-violet group-hover:translate-x-2 transition-all hidden md:block">
                      &#8599;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-violet/10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
