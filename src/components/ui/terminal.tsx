"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/quotes";
import { DATA } from "@/data/resume";

const NEOFETCH_DATA = `
                    'c.          ${DATA.name}
                 ,xNMM.          ------------
               .OMMMMo           OS: macOS
               OMMM0,            Host: MacBook
     .;loddo:' loolloddol;.      Shell: zsh
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Location: ${DATA.location}
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Terminal: iTerm2
 XMMMMMMMMMMMMMMMMMMMMMMMX.      GitHub: @MistakenPirate
;MMMMMMMMMMMMMMMMMMMMMMMM:       Theme: Dracula
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.     
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.   
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk  
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.  
    kMMMMMMMMMMMMMMMMMMMMMMd    
     ;KMMMMMMMWXXWMMMMMMMk.     
       .cooc,.    .,coo:.`;

const ARCH_DATA = `
                   -                  Sameer Kashyap
                  .o+                 ------------
                 ooo/                 OS: Arch Linux
                +oooo:                Host: Thinkpad T480
               +oooooo:               Shell: bash
               -+oooooo+:             Location: ${DATA.location}
             /:-:++oooo+:             Terminal: Alacritty
            /++++/+++++++:            GitHub: @MistakenPirate
           /++++++++++++++:           Theme: Nord
          /+++ooooooooooooo/          
         ./ooosssso++osssssso+
        .oossssso-    /ossssss+
       -osssssso.      :ssssssso.
      :osssssss/        osssso++.
     /ossssssss/        +ssssooo/
    'ossssso+/:-        -:/+ossss'
    '+sso+:-'                 '-:/+`;

function TypewriterTerminal({ data, title }: { data: string; title: string }) {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let animationFrameId: number;
    const speed = 2; // Lower is faster

    const typewriter = () => {
      if (currentIndex <= data.length) {
        setText(data.slice(0, currentIndex));
        currentIndex++;
        animationFrameId = window.setTimeout(typewriter, speed);
      } else {
        setShowPrompt(true);
      }
    };

    animationFrameId = window.setTimeout(typewriter, speed);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(animationFrameId);
      clearInterval(cursorInterval);
    };
  }, [data]);

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="font-mono text-sm bg-[#282a36] text-[#f8f8f2] rounded-lg p-4 shadow-lg overflow-hidden mb-8" role="textbox" aria-label={`${title} Terminal Output`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="whitespace-pre">
          <span className="text-[#50fa7b]">➜</span>
          <span className="text-[#bd93f9]"> ~ </span>
          <span className="text-[#f8f8f2]">neofetch</span>
          <div className="mt-2">
            {text}
          </div>
          {showPrompt && (
            <div>
              <span className="text-[#50fa7b]">➜</span>
              <span className="text-[#bd93f9]"> ~ </span>
              {cursorVisible && <span className="animate-blink">▊</span>}
            </div>
          )}
        </div>
      </div>
    </BlurFade>
  );
}

export function Terminal() {
  const [activeTab, setActiveTab] = useState("macOS");

  return (
    <div>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${activeTab === "macOS" ? "bg-[#282a36] text-[#f8f8f2]" : "bg-[#44475a] text-[#f8f8f2]"}`}
          onClick={() => setActiveTab("macOS")}
        >
          macOS
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${activeTab === "Linux" ? "bg-[#282a36] text-[#f8f8f2]" : "bg-[#44475a] text-[#f8f8f2]"}`}
          onClick={() => setActiveTab("Linux")}
        >
          Linux
        </button>
      </div>
      {activeTab === "macOS" ? (
        <TypewriterTerminal data={NEOFETCH_DATA} title="macOS" />
      ) : (
        <TypewriterTerminal data={ARCH_DATA} title="Linux" />
      )}
    </div>
  );
}
