// EpisodeTile.tsx
import React from "react";
import { Episode } from "../utils/Episode";
import { CalendarClockIcon } from "lucide-react";

interface EpisodeTileProps {
  episodes: Episode[];
}

const EpisodeTile: React.FC<EpisodeTileProps> = ({ episodes }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-6 flex-wrap
    xl:flex-row"
    >
      {episodes.map((episode, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 w-full 
          hover:opacity-50 hover:cursor-pointer transition-opacity
        xl:w-3/12"
        >
          <div
            id={`placeholder-image-${index}`}
            className="h-32 w-52 bg-blue-700 rounded-b-xl"
            style={{
              backgroundImage: `url(${episode.referenceImage})`,
              backgroundSize: "cover",
            }}
          ></div>
          <h3 className="text-xl">{episode.episodeName}</h3>
          <div className="flex flex-row gap-2">
            <CalendarClockIcon />
            <p>{episode.episodeDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeTile;
