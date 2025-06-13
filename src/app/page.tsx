"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
