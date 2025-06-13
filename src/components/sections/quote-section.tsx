"use client";
import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { QUOTES } from "@/constants/quotes";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

export function QuoteSection() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    setIndex(Math.floor(Math.random() * QUOTES.length));
  }, []);

  const prevQuote = () => setIndex((i) => (i === 0 ? QUOTES.length - 1 : i - 1));
  const nextQuote = () => setIndex((i) => (i === QUOTES.length - 1 ? 0 : i + 1));
  const quote = QUOTES[index];

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <div className="w-full">
        <h2 className="text-xl font-bold mb-2">Quotes</h2>
        <div className="relative w-full min-h-[100px] p-3 bg-background rounded-md border border-border text-left flex flex-col justify-center">
          <img
            src="/anime.gif"
            alt="Anime GIF"
            className="h-20 w-auto object-contain"
            style={{ position: 'absolute', right: '-24px', top: '-48px', pointerEvents: 'none', zIndex: 10 }}
          />
          <Markdown className="text-base italic prose prose-neutral dark:prose-invert">{`"${quote.text}"`}</Markdown>
          <p className="mt-1 text-xs text-muted-foreground">— {quote.author}</p>
          <div className="flex justify-between mt-3">
            <button onClick={prevQuote} aria-label="Previous quote" className="font-mono text-xs px-2 py-1 rounded hover:bg-accent border border-border">
              prev quote
            </button>
            <button onClick={nextQuote} aria-label="Next quote" className="font-mono text-xs px-2 py-1 rounded hover:bg-accent border border-border">
              next quote
            </button>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
