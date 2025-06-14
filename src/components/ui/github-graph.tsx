"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/quotes";

interface ContributionDay {
  date: string;
  count: number;
}

export function GitHubGraph() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/MistakenPirate?y=${currentYear}`
        );
        const data = await response.json();
        setContributions(data.contributions);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [currentYear]);

  const getColor = (count: number) => {
    if (count === 0) return "#1e1e1e";
    if (count <= 3) return "#0e4429";
    if (count <= 6) return "#006d32";
    if (count <= 9) return "#26a641";
    return "#39d353";
  };

  if (loading) {
    return (
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white/80 text-lg font-medium">GitHub Contributions {currentYear}</h3>
          </div>
          <div className="overflow-x-auto bg-white/5 p-4 rounded-lg flex items-center justify-center h-[100px]">
            <div className="text-white/50">Loading contributions...</div>
          </div>
        </div>
      </BlurFade>
    );
  }

  // Group contributions by week
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];
  
  contributions.forEach((day) => {
    const date = new Date(day.date);
    const dayOfWeek = date.getDay();
    
    // Start new week on Sunday
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    
    currentWeek.push(day);
  });
  
  // Add the last week if it's not empty
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white/80 text-lg font-medium">GitHub Contributions {currentYear}</h3>
        </div>
        <div className="overflow-x-auto bg-white/5 p-4 rounded-lg">
          <div className="flex flex-col">
            {/* Contribution graph */}
            <div className="flex items-start gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: getColor(day.count) }}
                      title={`${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span>Less</span>
              <div className="flex gap-1">
                {["#1e1e1e", "#0e4429", "#006d32", "#26a641", "#39d353"].map((color, index) => (
                  <div
                    key={index}
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
} 