"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

const LOFI_PLAYLISTS = [
  {
    id: "lofi-1",
    title: "Godfather Lofi",
    videoId: "BtOSWnRtBMQ", // Godfather lofi mix
  },
  {
    id: "lofi-2",
    title: "One Piece Lofi",
    videoId: "yN7sU6wigKk", // One Piece lofi mix
  },
  {
    id: "lofi-3",
    title: "Jazzy Lofi",
    videoId: "CfPxlb8-ZQ0", // Studio Ghibli lofi mix
  },
];

export function MusicPlayer() {
  const [activePlaylist, setActivePlaylist] = useState(LOFI_PLAYLISTS[0]);

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="bg-[#282a36] rounded-lg p-4 shadow-lg mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
          <span className="text-[#f8f8f2] ml-2">Lofi Player</span>
        </div>
        
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {LOFI_PLAYLISTS.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => setActivePlaylist(playlist)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                activePlaylist.id === playlist.id
                  ? "bg-[#44475a] text-[#f8f8f2]"
                  : "bg-[#44475a]/50 text-[#f8f8f2]/70 hover:bg-[#44475a]"
              }`}
            >
              {playlist.title}
            </button>
          ))}
        </div>

        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${activePlaylist.videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
            title={activePlaylist.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </BlurFade>
  );
} 