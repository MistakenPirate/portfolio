"use client";

import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Terminal } from "@/components/ui/terminal";
// import { MatrixRain } from "@/components/ui/matrix-rain";
// import { ParticleNetwork } from "@/components/ui/particle-network";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

export default function VisualsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-5xl mx-auto px-4">
      <section className="pt-8">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
          text="Visual Experience"
        />
      </section>
      <Terminal />
      {/* <MatrixRain />
      <ParticleNetwork /> */}
    </main>
  );
}
