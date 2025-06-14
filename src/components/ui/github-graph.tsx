"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

export function GitHubGraph() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="w-full bg-[#282a36] backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white/80 text-lg font-medium">GitHub Contributions</h3>
        </div>
        <div className="overflow-x-auto bg-[#282a36] p-4 rounded-lg">
          <img
            src="https://ghchart.rshah.org/0E4429/MistakenPirate"
            alt="GitHub Contributions"
            className="w-full"
          />
        </div>
      </div>
    </BlurFade>
  );
} 