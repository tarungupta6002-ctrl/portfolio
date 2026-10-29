"use client";

import grainImage from "@/assets/images/grain.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { TbRocket } from "react-icons/tb";
import { portfolioData } from "@/data/portfolioData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const rocketIconRef = useRef<HTMLDivElement | null>(null);
  const lastDirection = useRef<number>(1);
  const { experiences } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.fromTo(
        ".exp-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-heading",
            start: "top 88%",
          },
        }
      );

      // Animate experience cards
      gsap.fromTo(
        ".exp-card",
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          stagger: 0.25,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-timeline",
            start: "top 80%",
          },
        }
      );

      // Rocket follows scroll along the timeline with Direction Flipping!
      const timeline = timelineRef.current;
      const rocket = rocketRef.current;
      if (timeline && rocket) {
        gsap.to(rocket, {
          y: () => timeline.scrollHeight - 60,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1.2,
            onUpdate: (self) => {
              if (self.direction !== lastDirection.current) {
                lastDirection.current = self.direction;
                if (self.direction === 1) {
                  // Scrolling down - face downward
                  gsap.to(rocketIconRef.current, { rotation: 135, duration: 0.4, overwrite: "auto" });
                } else {
                  // Scrolling up - face upward
                  gsap.to(rocketIconRef.current, { rotation: -45, duration: 0.4, overwrite: "auto" });
                }
              }
            },
          },
        });

        // Rocket glow pulse
        gsap.to(".rocket-glow", {
          scale: 1.5,
          opacity: 0.3,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 lg:py-28"
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Section heading */}
        <div className="exp-heading text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm mb-3">
            <span>Experience & Journey</span>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl">Experience</h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm md:text-base">
            My journey through open-source contributions, hackathons, and practical development
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="exp-timeline relative"
        >
          {/* Vertical line with gradient */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-sky-400/30 to-transparent" />

          {/* Rocket at top */}
          <div
            ref={rocketRef}
            className="absolute left-6 md:left-8 top-0 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
          >
            {/* Glow */}
            <div className="rocket-glow absolute size-10 rounded-full bg-emerald-400/20 blur-xl" />

            <div className="relative size-10 rounded-full bg-gray-900 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-400/20">
              <div ref={rocketIconRef} className="flex items-center justify-center" style={{ transform: "rotate(-45deg)" }}>
                <TbRocket className="size-5 text-emerald-400" />
              </div>
            </div>
            {/* Trail */}
            <div className="w-px h-8 bg-gradient-to-b from-emerald-400/60 to-transparent" />
          </div>

          {/* Experience list */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-card relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="size-3 rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 size-3 rounded-full bg-emerald-400 animate-ping-large" />
                  </div>
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-emerald-400/20 hover:bg-white/[0.06]">
                  {/* Grain */}
                  <div
                    className="absolute inset-0 -z-10 opacity-5"
                    style={{
                      backgroundImage: `url(${grainImage.src})`,
                    }}
                  />
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                  {/* Corner glow */}
                  <div className="absolute -top-20 -right-20 size-40 rounded-full bg-emerald-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        {/* Badges */}
                        <div className="flex items-center gap-2 mb-1">
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/15 text-emerald-400 border border-emerald-400/20">
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-white/50 border border-white/10">
                            {exp.isRemote ? "Remote" : "On-site"}
                          </span>
                        </div>

                        {/* Role */}
                        <h3 className="font-calistoga text-xl md:text-2xl text-white mt-2">
                          {exp.role}
                        </h3>

                        {/* Company */}
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400/80 hover:text-emerald-300 transition-colors duration-300 text-sm md:text-base font-medium mt-1 group/link"
                        >
                          <HiOutlineBriefcase className="size-4" />
                          {exp.company}
                        </a>
                      </div>

                      {/* Location & Duration */}
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-white/40 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <HiOutlineLocationMarker className="size-3.5" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="text-white/30 text-xs">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description bullet points */}
                    <ul className="space-y-2 mt-4">
                      {exp.points.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-white/50 text-sm md:text-base"
                        >
                          <span className="mt-2 size-1 rounded-full bg-emerald-400/50 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                        {exp.skills.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white/50 text-xs font-medium hover:text-white/80 hover:border-white/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* End marker */}
          <div className="relative pl-16 md:pl-20 mt-12">
            <div className="absolute left-6 md:left-8 top-3 -translate-x-1/2 z-10">
              <div className="size-2 rounded-full bg-white/20 ring-4 ring-white/5" />
            </div>
            <p className="text-white/25 text-sm italic">
              More experiences coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
