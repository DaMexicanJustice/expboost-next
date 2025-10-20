import React from "react";
import Image from "next/image";
import { CalendarClockIcon } from "lucide-react";
import { truncateWords } from "../utils/truncateWords";

interface Episode {
  name: string;
  description: string;
  date: string;
  referenceImage: string;
}

interface EpisodeTileProps {
  episodes: Episode[];
}

const EpisodeTile: React.FC<EpisodeTileProps> = ({ episodes }) => {
  return (
    <div className="grid gap-3 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {episodes.map((episode, index) => (
        <div key={index} className="hover:cursor-pointer group">
          <div className="relative overflow-hidden aspect-square">
            <Image
              id={`placeholder-image-${index}`}
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
      ))}
    </div>
  );
};

export default EpisodeTile;
