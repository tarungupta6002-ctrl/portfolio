"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import grainImage from "@/assets/images/grain.jpg";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCss,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNpm,
  SiFigma,
  SiFramer,
  SiRender,
  SiReactrouter,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiVuedotjs,
  SiVercel,
  SiCloudinary,
  SiFoodpanda,
  SiBetterauth,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbRoute, TbRocket } from "react-icons/tb";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  name: string;
  color: string;
  category: string;
}

const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "Tools",
] as const;

const techItems: TechItem[] = [
  // Frontend
  { icon: SiReact, name: "React", color: "#61DAFB", category: "Frontend" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", category: "Frontend" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Frontend" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "Frontend" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "Frontend" },
  { icon: SiCss, name: "CSS3", color: "#1572B6", category: "Frontend" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", category: "Frontend" },
  { icon: SiReactrouter, name: "React Router", color: "#CA4245", category: "Frontend" },
  { icon: SiFramer, name: "Motion", color: "#0055FF", category: "Frontend" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D", category: "Frontend" },
  { icon: TbRoute, name: "Vue Router", color: "#4FC08D", category: "Frontend" },
  { icon: SiFoodpanda, name: "Zustand", color: "#4a4138", category: "Frontend" },

  // Backend
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend" },
  { icon: SiExpress, name: "Express", color: "#ffffff", category: "Backend" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Backend" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "Backend" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748", category: "Backend" },
  { icon: SiMongoose, name: "Mongoose", color: "#880000", category: "Backend" },
  { icon: SiBetterauth, name: "BetterAuth", color: "#10B981", category: "Backend" },
  { icon: SiNextdotjs, name: "NextAuth", color: "#EB5424", category: "Backend" },

  // Tools
  { icon: SiGit, name: "Git", color: "#F05032", category: "Tools" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff", category: "Tools" },
  { icon: VscVscode, name: "VS Code", color: "#007ACC", category: "Tools" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37", category: "Tools" },
  { icon: SiVite, name: "Vite", color: "#646CFF", category: "Tools" },
  { icon: SiNpm, name: "NPM", color: "#CB3837", category: "Tools" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E", category: "Tools" },
  { icon: SiRender, name: "Render", color: "#46E3B7", category: "Tools" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff", category: "Tools" },
  { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5", category: "Tools" },
  { icon: TbRocket, name: "Antigravity", color: "#A78BFA", category: "Tools" },
];

export default function Tech() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredTech =
    activeFilter === "All"
      ? techItems
      : techItems.filter((t) => t.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading on scroll
      gsap.fromTo(
        ".tech-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-heading",
            start: "top 88%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-card",
        { opacity: 0, y: 25, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.04,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="skills" ref={sectionRef} className="relative py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5">
        {/* Section heading */}
        <div className="tech-heading text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm mb-3">
            <span>My Toolkit</span>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl">Tech &amp; Tools</h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto text-sm md:text-base">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-white text-gray-900 border-white shadow-lg shadow-white/10"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/[0.1] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-10">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="tech-card group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-4 md:p-5 flex flex-col items-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Icon wrapper */}
                <div
                  className="size-10 md:size-12 flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}08)`,
                    border: `1px solid ${tech.color}20`,
                  }}
                >
                  <tech.icon
                    className="size-5 md:size-6 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_var(--glow)]"
                    style={
                      {
                        color: tech.color,
                        "--glow": `${tech.color}80`,
                      } as React.CSSProperties
                    }
                  />
                </div>

                {/* Label */}
                <span className="text-white/60 text-xs md:text-sm font-medium text-center group-hover:text-white/90 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
