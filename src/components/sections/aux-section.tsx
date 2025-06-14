"use client";

import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { BLUR_FADE_DELAY } from "@/constants/quotes";
import Image from "next/image";
import Link from "next/link";

interface AuxItemProps {
  title: string;
  description: string;
  date?: string;
  image?: string;
  links?: Array<{
    label: string;
    href: string;
    icon: keyof typeof Icons;
  }>;
}

interface AuxSectionProps {
  title: string;
  description: string;
  items: AuxItemProps[];
  delay: number;
}

function AuxItem({ title, description, date, image, links }: AuxItemProps) {
  return (
    <Card className="p-4 hover:bg-accent/50 transition-colors">
      <div className="flex gap-4">
        {image && (
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold">{title}</h3>
            {date && (
              <span className="text-sm text-muted-foreground">{date}</span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          {links && links.length > 0 && (
            <div className="mt-2 flex gap-2">
              {links.map((link) => {
                const Icon = Icons[link.icon];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export function AuxSection({ title, description, items, delay }: AuxSectionProps) {
  return (
    <section className="space-y-4">
      <BlurFade delay={delay}>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="mt-4 grid gap-4">
          {items.map((item, index) => (
            <BlurFade key={item.title} delay={delay + index * 0.05}>
              <AuxItem {...item} />
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
