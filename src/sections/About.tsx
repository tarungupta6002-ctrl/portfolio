"use client";

import grainImage from "@/assets/images/grain.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const highlights = [
  {
    icon: HiOutlineCode,
    label: "Full-Stack",
    desc: "End-to-end development",
  },
  {
    icon: HiOutlineLightningBolt,
    label: "AI-Augmented",
    desc: "High-velocity shipping",
  },
  {
    icon: HiOutlineGlobeAlt,
    label: "Remote Ready",
    desc: "Open to global teams",
  },
];

const coreTech = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiPrisma, label: "Prisma", color: "#2D3748" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const { personal } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the paragraph words on scroll (Scrubbing effect!)
      gsap.fromTo(
        ".about-word",
        {
          opacity: 0.12,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text-block",
            start: "top 80%",
            end: "bottom 75%",
            scrub: 1.2,
          },
        }
      );

      // Animate highlight cards on scroll
      gsap.fromTo(
        ".highlight-card",
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".highlights-grid",
            start: "top 85%",
          },
        }
      );

      // Animate core tech pills
      gsap.fromTo(
        ".core-tech-pill",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".core-tech-row",
            start: "top 88%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm mb-3">
            <span>Get to know me</span>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl">About Me</h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm md:text-base">
            A passionate developer who turns ideas into polished digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column — Cards */}
          <div ref={cardsRef} className="lg:col-span-2 flex flex-col gap-5">
            {/* Highlight cards */}
            <div className="highlights-grid flex flex-col gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="highlight-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 transition-all duration-500 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-5"
                    style={{
                      backgroundImage: `url(${grainImage.src})`,
                    }}
                  />
                  {/* Hover glow */}
                  <div className="absolute -top-12 -right-12 size-32 rounded-full bg-emerald-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 size-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 flex items-center justify-center border border-white/10">
                      <item.icon className="size-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">
                        {item.label}
                      </h3>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core tech row */}
            <div className="core-tech-row relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              <h4 className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <div
                    key={tech.label}
                    className="core-tech-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <tech.icon
                      className="size-3.5"
                      style={{ color: tech.color }}
                    />
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Text */}
          <div className="lg:col-span-3">
            <div className="about-text-block relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-10 lg:p-12 h-full">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              <p className="flex flex-wrap text-sm md:text-base lg:text-lg leading-relaxed">
                {personal.aboutBio.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className="about-word text-white/55 mr-2 mb-1.5 transition-colors duration-300 hover:text-emerald-300"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
