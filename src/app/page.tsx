import SmoothScrollProvider from "@/components/Smooth";
import AboutSection from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import ExperienceSection from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import Tech from "@/sections/Tech";

export default function Home() {
  return (
    <div>
      <SmoothScrollProvider>
        <HeroSection />
        <AboutSection />
        <Tech />
        <ExperienceSection />
        <ProjectsSection />
        <TapeSection />
        <ContactSection />
        <Footer />
      </SmoothScrollProvider>
    </div>
  );
}
