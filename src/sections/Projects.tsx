import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import Github from "@/assets/icons/github.svg";
import chathubImg from "@/assets/images/chathub.png";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

const portfolioProjects = [
  {
    company: "Featured Star Project",
    year: "2025",
    title: "ChatHub — Real-Time Messaging & Calling Platform",
    badge: "Web + Native Android",
    description:
      "A WhatsApp-inspired, end-to-end encrypted real-time communication platform and native Android app. Engineered with sub-50ms WebSocket messaging, client-side AES-GCM encryption for zero-knowledge privacy, WebRTC peer audio/video calls, Google Gemini AI smart replies & 10+ language translation, up to 25MB document streaming, and automated GitHub Actions CI/CD cloud APK compilation.",
    repo: "https://github.com/tarungupta6002-ctrl/CHAT-APP",
    live: "https://chat-app-pmab.onrender.com",
    apk: "https://github.com/tarungupta6002-ctrl/CHAT-APP/releases/download/latest/ChatHub.apk",
    image: chathubImg,
    techStack: [
      "React 19",
      "Node.js",
      "Socket.IO",
      "WebRTC",
      "Turso DB",
      "Google Gemini AI",
      "AES-GCM (E2EE)",
      "Capacitor 8 (Android)",
      "GitHub Actions CI/CD",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="container px-5 mx-auto lg:max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm mb-3">
            <Sparkles className="size-4 text-emerald-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl text-center">
            Featured Projects
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
            Production-grade applications built from scratch with modern technologies
          </p>
        </div>

        <div className="flex flex-col mt-10 md:mt-16 gap-16">
          {portfolioProjects.map((project, i) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20
              px-8 pt-8 md:pt-12 lg:pt-14 lg:px-16 md:px-10 after:pointer-events-none sticky top-20"
              style={{
                top: `calc(64px + ${i * 36}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center pb-8 lg:pb-12">
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-xs sm:text-sm gap-2 text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    {project.badge && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-calistoga text-2xl md:text-3xl lg:text-4xl mt-3 text-white leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-300 ease-in-out text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <hr className="border-t border-white/10 mt-5" />

                  <p className="text-sm md:text-base text-white/60 mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 3 Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white hover:bg-emerald-400 text-gray-950 hover:text-gray-950 transition-all duration-300 ease-in-out h-11 px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm shadow-md group cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="size-4.5 shrink-0 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 ease-in-out h-11 px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm backdrop-blur-sm group cursor-pointer"
                    >
                      <span>GitHub</span>
                      <Github className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </a>

                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 hover:text-emerald-200 transition-all duration-300 ease-in-out h-11 px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm group cursor-pointer"
                      >
                        <span>Android APK</span>
                        <Download className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Image / Preview */}
                <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/[0.02] to-sky-500/10 p-6 flex flex-col items-center justify-center group/img">
                    <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-3xl group-hover/img:bg-emerald-400/25 transition-all duration-700 pointer-events-none" />
                      <Image
                        className="relative z-10 object-contain max-h-[220px] w-auto drop-shadow-[0_15px_35px_rgba(16,185,129,0.35)] transition-transform duration-500 group-hover/img:scale-105"
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        priority
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/75">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Web + Android APK Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/30 text-sm italic">
            More projects currently in development &amp; releasing soon...
          </p>
        </div>
      </div>
    </section>
  );
};
