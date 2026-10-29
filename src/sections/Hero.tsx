"use client";

import { useState } from "react";
import grainImage from "@/assets/images/grain.jpg";
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

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight">
            {personal.name}
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl text-emerald-400 font-medium">
            {personal.role}
          </h2>

          <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl mx-auto">
            {personal.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 gap-3">
        <div className="flex items-center justify-center gap-4">
          <CoolBeansButton label="projects" href="#projects" />
          <CoolBeansButton
            label="resume"
            href={personal.resumeUrl}
            onClick={handleResumeClick}
          />
        </div>

        {resumeNotice && (
          <div className="mt-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs animate-pulse">
            📄 Resume is currently being updated with latest full-stack projects!
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SocialLinks />
      </div>
    </div>
  );
};
