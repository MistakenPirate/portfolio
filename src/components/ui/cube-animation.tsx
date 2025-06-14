"use client";

import { useEffect, useRef } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

export function CubeAnimation() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let rotationX = 0;
    let rotationY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      rotationY += deltaX * 0.5;
      rotationX -= deltaY * 0.5;

      cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    cube.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Auto-rotation when not dragging
    const autoRotate = () => {
      if (!isDragging) {
        rotationY += 0.5;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
      requestAnimationFrame(autoRotate);
    };

    autoRotate();

    return () => {
      cube.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="relative w-full h-[300px] bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden perspective-1000">
        <div
          ref={cubeRef}
          className="absolute top-1/2 left-1/2 w-48 h-48 transform-gpu -translate-x-1/2 -translate-y-1/2 preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 border border-white/20 transform-gpu translate-z-24" />
          
          {/* Back face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 border border-white/20 transform-gpu -translate-z-24 rotate-y-180" />
          
          {/* Right face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/50 to-cyan-500/50 border border-white/20 transform-gpu translate-x-24 rotate-y-90" />
          
          {/* Left face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/50 to-cyan-500/50 border border-white/20 transform-gpu -translate-x-24 -rotate-y-90" />
          
          {/* Top face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/50 to-cyan-500/50 border border-white/20 transform-gpu -translate-y-24 rotate-x-90" />
          
          {/* Bottom face */}
          <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/50 to-cyan-500/50 border border-white/20 transform-gpu translate-y-24 -rotate-x-90" />
        </div>
      </div>
    </BlurFade>
  );
} 