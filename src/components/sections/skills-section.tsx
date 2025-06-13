"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/ui/icon-cloud";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY, ICON_SLUGS } from "@/constants/quotes";

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-background">
        <IconCloud iconSlugs={ICON_SLUGS} />
      </div>
    </section>
  );
}
