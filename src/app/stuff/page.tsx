"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AuxSection } from "@/components/sections/aux-section";
import { BLUR_FADE_DELAY } from "@/constants/quotes";
import { AUX_DATA } from "@/data/aux";

export default function StuffPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-5xl mx-auto px-4">
      <section className="pt-8">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
          text="Stuff I Like"
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground mb-6">
            A collection of my interests, hobbies, and things that inspire me.
          </p>
        </BlurFade>
      </section>
      
      {AUX_DATA.sections.map((section, index) => (
        <AuxSection
          key={section.title}
          title={section.title}
          description={section.description}
          items={section.items}
          delay={BLUR_FADE_DELAY * (3 + index)}
        />
      ))}
    </main>
  );
}
