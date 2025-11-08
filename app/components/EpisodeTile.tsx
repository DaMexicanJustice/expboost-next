import React, { useEffect } from "react";
import Image from "next/image";
import { CalendarClockIcon } from "lucide-react";
import { truncateWords } from "../utils/truncateWords";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Episode {
  name: string;
  description: string;
  date: string;
  referenceImage: string;
}

interface EpisodeTileProps {
  episodes: Episode[];
  pattern: boolean[];
}

const EpisodeTile: React.FC<EpisodeTileProps> = ({ episodes, pattern }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#tetris-grid > div", { y: "100vh" });
    gsap.to("#tetris-grid > div", {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#tetris-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  let episodeIndex = 0;
  return (
    <div id="tetris-grid" className="grid gap-3 w-full grid-cols-6">
      {pattern.map((isEpisode, index) => {
        if (isEpisode && episodeIndex < episodes.length) {
          const episode = episodes[episodeIndex++];
          return (
            <div key={index} className="hover:cursor-pointer group">
              <div className="relative overflow-hidden aspect-square">
                <Image
                  id={`placeholder-image-${episodeIndex - 1}`}
                  fill
                  alt={episode.name}
                  src={episode.referenceImage}
                  className="object-cover group-hover:scale-105 duration-300 transition-transform"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2 justify-end h-full p-2 md:p-4">
                    <p className="uppercase font-bold text-sm md:text-base md:bg-transparent p-1 md:p-0">
                      {episode.name}
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm hidden md:block">
                      {truncateWords(episode.description, 12)}
                    </p>
                    <div className="flex flex-row gap-1 md:gap-2 uppercase p-1 md:p-0 text-xs md:text-sm bg-slate-900/70 md:bg-transparent">
                      <CalendarClockIcon className="w-4 h-4 md:w-5 h-5" />
                      <p>{episode.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="aspect-square"></div>
          );
        }
      })}
    </div>
  );
};

export default EpisodeTile;
