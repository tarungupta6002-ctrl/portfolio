"use client";

import { useState } from "react";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import tarunPhoto from "@/assets/images/tarun.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SocialLinks from "@/components/SocialLinks";
import CoolBeansButton from "@/components/CoolBeansButton";
import { portfolioData } from "@/data/portfolioData";

export const HeroSection = () => {
  const { personal } = portfolioData;
  const [resumeNotice, setResumeNotice] = useState(false);

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (personal.resumeUrl === "#") {
      e.preventDefault();
      setResumeNotice(true);
      setTimeout(() => setResumeNotice(false), 4500);
    }
  };

  return (
    <div id="home" className="hero">
      <div className="hero-mask absolute inset-0">
        <div
          style={{ backgroundImage: `url(${grainImage.src})` }}
          className="grain"
        ></div>
        <div className="circle size-155"></div>
        <div className="circle size-210"></div>
        <div className="circle size-255"></div>
        <div className="circle size-305"></div>

        <HeroOrbit size={430} shouldOrbit orbitDuration="30s" rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} shouldOrbit orbitDuration="32s" rotation={879}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} shouldOrbit orbitDuration="34s" rotation={-41}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={530} shouldOrbit orbitDuration="36s" rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} shouldOrbit orbitDuration="38s" rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} shouldOrbit orbitDuration="40s" rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} shouldOrbit orbitDuration="42s" rotation={-5}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={710} shouldOrbit orbitDuration="44s" rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} shouldOrbit orbitDuration="46s" rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={800} shouldOrbit orbitDuration="48s" rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Avatar / Profile Photo with Glow */}
          <div className="flex flex-col items-center mb-3">
            <div className="relative group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              {/* Avatar circle */}
              <div className="relative size-24 sm:size-28 md:size-32 rounded-full overflow-hidden border-2 border-emerald-400/50 bg-gray-900 shadow-2xl ring-4 ring-black/50">
                <Image
                  src={tarunPhoto}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                />
              </div>

              {/* Online pulse indicator */}
              <div className="absolute bottom-1 right-1 size-5 sm:size-6 rounded-full bg-gray-950 border-2 border-gray-900 flex items-center justify-center shadow-lg">
                <span className="size-2.5 sm:size-3.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Availability Pill */}
            <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs font-medium text-white/90 shadow-inner">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Opportunities</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            {personal.name}
          </h1>

          <h2 className="mt-1 text-lg md:text-xl text-emerald-400 font-medium">
            {personal.role}
          </h2>

          <p className="mt-2 text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {personal.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5 gap-3 relative z-10">
        <div className="flex items-center justify-center gap-4">
          <CoolBeansButton label="projects" href="#projects" />
          <CoolBeansButton
            label="resume"
            href={personal.resumeUrl}
            onClick={handleResumeClick}
          />
        </div>

        {resumeNotice && (
          <div className="mt-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs animate-pulse">
            📄 Resume is currently being updated with latest full-stack projects!
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-center relative z-10">
        <SocialLinks />
      </div>
    </div>
  );
};
