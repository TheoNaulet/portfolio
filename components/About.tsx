"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";

/* ─── Tech node definitions ─── */
type TechNode = {
  name: string;
  color: string;
  img?: string;
  icon?: React.ReactNode;
};

const techs: TechNode[] = [
  { name: "React", color: "#61DAFB", img: "/portfolio/images/tech_logos/React-icon.svg.png" },
  { name: "Next.js", color: "#666", img: "/portfolio/images/tech_logos/Next.webp" },
  { name: "TypeScript", color: "#3178C6", img: "/portfolio/images/tech_logos/Typescript_logo_2020.svg.png" },
  { name: "JavaScript", color: "#F7DF1E", img: "/portfolio/images/tech_logos/Unofficial_JavaScript_logo_2.svg.png" },
  { name: "Expo", color: "#888", img: "/portfolio/images/tech_logos/expo_logo_icon_145293.webp" },
  { name: "NestJS", color: "#E0234E", img: "/portfolio/images/tech_logos/NestJS.svg" },
  { name: "Angular", color: "#DD0031", img: "/portfolio/images/tech_logos/angular_logo_icon_169595.webp" },
  { name: "Java", color: "#ED8B00", img: "/portfolio/images/tech_logos/Java_Logo.svg.png" },
  { name: "Tailwind", color: "#06B6D4", img: "/portfolio/images/tech_logos/Tailwind_CSS_Logo.svg.png" },
  { name: "iOS", color: "#999", img: "/portfolio/images/tech_logos/Apple_logo_black.svg" },
  { name: "Android", color: "#3DDC84", img: "/portfolio/images/tech_logos/Android-Logo-2014.png" },
];

// Node positions for the constellation (right half)
const nodes: { x: number; y: number }[] = [
  { x: 52, y: 12 },  // React
  { x: 68, y: 8 },   // Next.js
  { x: 58, y: 30 },  // TypeScript
  { x: 76, y: 25 },  // JavaScript
  { x: 48, y: 48 },  // Expo
  { x: 66, y: 45 },  // NestJS
  { x: 80, y: 42 },  // Angular
  { x: 54, y: 65 },  // Java
  { x: 72, y: 62 },  // Tailwind
  { x: 62, y: 80 },  // iOS
  { x: 78, y: 78 },  // Android
];

// Connections between nodes (index pairs)
const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 4],  // React -> Next, TS, Expo
  [1, 2], [1, 3],           // Next -> TS, JS
  [2, 3], [2, 5],           // TS -> JS, Nest
  [3, 6],                   // JS -> Angular
  [4, 0], [4, 7],           // Expo -> React, Java
  [5, 6], [5, 8],           // Nest -> Angular, Tailwind
  [7, 9],                   // Java -> iOS
  [8, 10], [8, 1],          // Tailwind -> Android, Next
  [9, 10],                  // iOS -> Android
];

function floatAnim(i: number) {
  const dur = 4 + (i % 3) * 0.8;
  const yOff = i % 2 === 0 ? -6 : 6;
  const xOff = i % 3 === 0 ? 3 : -3;
  return {
    y: [0, yOff, 0],
    x: [0, xOff, 0],
    transition: {
      duration: dur,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.25,
    },
  };
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden min-h-[600px]">
      {/* Constellation */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={`${nodes[a].x}%`}
              y1={`${nodes[a].y}%`}
              x2={`${nodes[b].x}%`}
              y2={`${nodes[b].y}%`}
              stroke="rgba(124,58,237,0.08)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.04 }}
            />
          ))}
        </svg>

        {/* Nodes */}
        {techs.map((tech, i) => {
          if (!nodes[i]) return null;
          return (
            <motion.div
              key={tech.name}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: `${nodes[i].x}%`, top: `${nodes[i].y}%`, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              animate={floatAnim(i)}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-sm"
                style={{
                  background: `${tech.color}10`,
                  borderColor: `${tech.color}25`,
                  color: tech.color,
                }}
              >
                {tech.img ? (
                  <img src={tech.img} alt={tech.name} className="w-5 h-5 object-contain" />
                ) : (
                  <div className="w-5 h-5">{tech.icon}</div>
                )}
              </div>
              <span
                className="text-[9px] font-bold tracking-[0.08em] uppercase"
                style={{ color: `${tech.color}99` }}
              >
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 px-6 md:px-12 py-16 md:py-20 max-w-[1280px] mx-auto w-full"
      >
        {/* Title */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
            <span className="grad-text">Passionn&eacute;</span>
          </div>
          <div className="font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
            <span className="grad-text">par le</span>
          </div>
          <div className="font-condensed text-[clamp(48px,9vw,130px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
            <span className="grad-text">d&eacute;veloppement</span>
          </div>
        </motion.div>

        {/* Body text */}
        <div className="max-w-[520px] flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7]">
              Je construis des sites et des applications avec l&apos;&eacute;cosyst&egrave;me
              JavaScript. React, Next.js, React Native, Node. Mais au-del&agrave; des
              stacks, ce que j&apos;aime c&apos;est l&apos;acte de cr&eacute;er.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7]">
              Dans mon temps libre je code des projets qui n&apos;existent pas
              encore. Un robot de trading, une app de voyage, un outil de veille.
              L&apos;id&eacute;e arrive, je lance VS Code.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="font-condensed text-[12px] font-semibold uppercase tracking-[0.06em] text-ink2 leading-[1.7]">
              Donner vie a quelque chose depuis une page blanche, c&apos;est ca
              qui m&apos;a rendu accro au code.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
