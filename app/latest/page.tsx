import EpisodeTile from "../components/EpisodeTile";
import { Episode } from "../utils/Episode";

const episodes: Episode[] = [
  {
    episodeName: "The Art of Storytelling",
    episodeDate: "February 29, 2024",
    referenceImage: "/images/1.jpg", // Replace with actual image path
  },
  {
    episodeName: "Beyond Polygons",
    episodeDate: "February 22, 2024",
    referenceImage: "/images/6.jpg", // Replace with actual image path
  },
  {
    episodeName: "The Evolution of RPGs",
    episodeDate: "February 15, 2024",
    referenceImage: "/images/3.jpg", // Replace with actual image path
  },
  {
    episodeName: "One For Accessibility",
    episodeDate: "February 8, 2024",
    referenceImage: "/images/4.jpg", // Replace with actual image path
  },
  {
    episodeName: "Indie: Hidden Gems",
    episodeDate: "February 1, 2024",
    referenceImage: "/images/5.jpg", // Replace with actual image path
  },
  {
    episodeName: "The Future of VR Gaming",
    episodeDate: "January 25, 2024",
    referenceImage: "/images/2.jpg", // Replace with actual image path
  },
  {
    episodeName: "Revive Couch Co-Op!",
    episodeDate: "January 18, 2024",
    referenceImage: "/images/1.jpg", // Replace with actual image path
  },
  {
    episodeName: "Elden Ring Sucks",
    episodeDate: "January 11, 2024",
    referenceImage: "/images/6.jpg", // Replace with actual image path
  },
  {
    episodeName: "The Nintendo Model",
    episodeDate: "January 4, 2024",
    referenceImage: "/images/3.jpg", // Replace with actual image path
  },
];

export default function Latest() {
  return (
    <section
      id="latest-episodes"
      className="w-full z-20 bg-slate-900
      xl:bg-[url('/images/latest-bg.jpg')] xl:bg-cover xl:bg-center xl:bg-scroll xl:bg-no-repeat xl:h-svh"
    >
      <div
        id="latest-container"
        className="flex flex-col h-full justify-center items-center"
      >
        <div
          className="relative flex flex-col items-center gap-6 bg-sky-500 text-black rounded-3xl 
          w-11/12 p-10
        xl:p-20 xl:w-9/12 xl:h-[calc(100svh+4rem)]"
        >
          <h2 className="uppercase font-bold text-xl">Latest Episodes</h2>
          <EpisodeTile episodes={episodes} />
          <h3 className="uppercase text-sm font-bold hover:underline hover:opacity-50 hover:cursor-pointer w-fit">
            View More
          </h3>
        </div>
      </div>
    </section>
  );
}
