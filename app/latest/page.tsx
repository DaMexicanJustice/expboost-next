"use client";
import { useEffect, useState } from "react";
import EpisodeTile from "../components/EpisodeTile";
import { Episode } from "../utils/Episode";

const episodes: Episode[] = [
  {
    name: "The Art of Storytelling",
    date: "February 29, 2024",
    referenceImage: "/images/1.jpg",
    description:
      "Explore the intricate art of crafting compelling narratives in video games, from character development to plot twists.",
  },
  {
    name: "Beyond Polygons",
    date: "February 22, 2024",
    referenceImage: "/images/6.jpg",
    description:
      "Dive into the advancements in graphics technology, moving beyond basic polygons to create immersive and realistic game worlds.",
  },
  {
    name: "The Evolution of RPGs",
    date: "February 15, 2024",
    referenceImage: "/images/3.jpg",
    description:
      "Trace the evolution of role-playing games, from their early beginnings to the complex, open-world experiences of today.",
  },
  {
    name: "One For Accessibility",
    date: "February 8, 2024",
    referenceImage: "/images/4.jpg",
    description:
      "Discuss the importance of making gaming accessible to everyone, including the latest tools and features designed to accommodate diverse needs.",
  },
  {
    name: "Indie: Hidden Gems",
    date: "February 1, 2024",
    referenceImage: "/images/5.jpg",
    description:
      "Uncover the hidden gems of the indie gaming scene, highlighting unique and innovative games that often go unnoticed.",
  },
  {
    name: "The Future of VR Gaming",
    date: "January 25, 2024",
    referenceImage: "/images/2.jpg",
    description:
      "Examine the future of virtual reality gaming, including emerging technologies and the potential for groundbreaking experiences.",
  },
  {
    name: "Revive Couch Co-Op!",
    date: "January 18, 2024",
    referenceImage: "/images/7.jpg",
    description:
      "Celebrate the resurgence of couch co-op games, where players can enjoy gaming together in the same physical space.",
  },
  {
    name: "Elden Ring Sucks",
    date: "January 11, 2024",
    referenceImage: "/images/8.jpg",
    description:
      "Delve into the polarizing opinions surrounding Elden Ring, exploring both its strengths and criticisms from the gaming community.",
  },
  {
    name: "The Nintendo Model",
    date: "January 9, 2024",
    referenceImage: "/images/9.jpg",
    description:
      "Analyze the unique business and creative model of Nintendo, and how it has shaped the gaming industry.",
  },
  {
    name: "Sense of Wonder",
    date: "December 28, 2023",
    referenceImage: "/images/10.jpg",
    description:
      "Reflect on the sense of wonder and discovery that video games can evoke, and how developers create these magical experiences.",
  },
];

export default function Latest() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the episodes to render based on the screen size
  const episodesToRender = isLargeScreen
    ? episodes.slice(-5)
    : episodes.slice(-3);

  return (
    <section id="latest-episodes" className="w-full z-20 bg-slate-950">
      <div id="latest-container" className="p-4 xl:p-16">
        <div className="grid w-full gap-6">
          <h2 className="text-lg uppercase font-bold">Latest Episodes</h2>
          <EpisodeTile episodes={episodesToRender} />
          <h3 className="uppercase text-xl font-bold hover:underline hover:opacity-50 hover:cursor-pointer justify-self-center">
            To All Episodes
          </h3>
        </div>
      </div>
    </section>
  );
}
