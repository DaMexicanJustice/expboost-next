// EpisodeTile.tsx
import React from "react";
import { Episode } from "../utils/Episode";
import { CalendarClockIcon } from "lucide-react";
import Image from "next/image";

interface EpisodeTileProps {
  episodes: Episode[];
}

const EpisodeTile: React.FC<EpisodeTileProps> = ({ episodes }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-3 flex-wrap
    md:flex-row"
    >
      {episodes.map((episode, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 w-full hover:cursor-pointer group
          lg:flex-row lg:w-fit"
        >
          <div className="relative size-80 overflow-hidden">
            <Image
              id={`placeholder-image-${index}`}
              width={320}
              height={320}
              alt="reference-image"
              src={episode.referenceImage}
              className="object-cover h-full group-hover:scale-105 duration-300 transition-transform"
            />
            <div
              className="lg:opacity-0 hover:opacity-100 absolute top-0 left-0 h-full w-full 
              lg:bg-slate-900/70 transition-opacity duration-300"
            >
              <div className="flex flex-col gap-2 justify-end h-full p-2">
                <p className="uppercase font-bold bg-slate-900/70 p-2 lg:bg-transparent lg:p-0">
                  {episode.name}
                </p>
                <p className="text-gray-300 hidden lg:block">
                  {episode.description}
                </p>
                <div className="flex flex-row gap-2 uppercase p-2 lg:p-0 text-sm bg-slate-900/70 lg:bg-transparent lg:bg-none">
                  <CalendarClockIcon />
                  <p>Release: </p>
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
