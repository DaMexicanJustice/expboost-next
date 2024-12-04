import React from "react";
import Image from "next/image";
import { CalendarClockIcon } from "lucide-react";

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
    <div className="grid gap-3 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {episodes.map((episode, index) => (
        <div key={index} className="grid gap-2 hover:cursor-pointer group">
          <div className="relative overflow-hidden">
            <Image
              id={`placeholder-image-${index}`}
              width={500}
              height={500}
              alt={episode.name}
              src={episode.referenceImage}
              className="object-cover group-hover:scale-105 duration-300 transition-transform"
            />
            <div className="lg:opacity-0 hover:opacity-100 absolute top-0 left-0 h-full w-full lg:bg-slate-900/70 transition-opacity duration-300">
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
