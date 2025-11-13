"use client";
import BroadcastTime from "../components/broadcast-time";
import EpisodeTile from "../components/EpisodeTile";
import Footer from "../components/footer";
import MobileNavbar from "../components/mobile-navbar";
import Navbar from "../components/navbar";
import { Episode } from "../utils/Episode";
import StickySocials from "../components/sticky-socials";
import StandardButton from "../components/standard-button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Group {
  episodes: Episode[];
  shape: string;
}

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
  {
    name: "The Evolution of RPGs",
    date: "January 7, 2024",
    referenceImage: "/images/11.jpg",
    description:
      "Explore the evolution of role-playing games from classic titles to modern masterpieces, and how they have influenced gaming culture.",
  },
  {
    name: "Esports Revolution",
    date: "January 5, 2024",
    referenceImage: "/images/12.jpg",
    description:
      "Discuss the rise of esports and its impact on the gaming industry, including its economic, social, and cultural implications.",
  },
  {
    name: "Indie Game Phenomenon",
    date: "January 3, 2024",
    referenceImage: "/images/13.jpg",
    description:
      "Examine the indie game movement and how small studios are pushing the boundaries of creativity and innovation in gaming.",
  },
  {
    name: "The Art of Game Design",
    date: "January 1, 2024",
    referenceImage: "/images/14.jpg",
    description:
      "Delve into the intricacies of game design, exploring the principles and practices that make games engaging and memorable.",
  },
  {
    name: "Retro Gaming Renaissance",
    date: "December 30, 2023",
    referenceImage: "/images/15.jpg",
    description:
      "Discuss the resurgence of retro gaming and how classic titles are being rediscovered and celebrated by new generations of gamers.",
  },
  {
    name: "The Future of VR Gaming",
    date: "December 26, 2023",
    referenceImage: "/images/16.jpg",
    description:
      "Explore the potential of virtual reality in gaming, including its current state and future possibilities for immersive experiences.",
  },
  {
    name: "Gaming and Mental Health",
    date: "December 24, 2023",
    referenceImage: "/images/17.jpg",
    description:
      "Analyze the relationship between gaming and mental health, discussing both the positive and negative impacts on players.",
  },
  {
    name: "The Impact of Streaming",
    date: "December 22, 2023",
    referenceImage: "/images/18.jpg",
    description:
      "Examine the influence of game streaming platforms like Twitch and YouTube on the gaming industry and community.",
  },
  {
    name: "Game Narrative Excellence",
    date: "December 20, 2023",
    referenceImage: "/images/19.jpg",
    description:
      "Highlight some of the best narrative-driven games and discuss what makes their storytelling so compelling and impactful.",
  },
  {
    name: "The Role of Music in Games",
    date: "December 18, 2023",
    referenceImage: "/images/20.jpg",
    description:
      "Explore the importance of music in video games, and how soundtracks enhance the gaming experience and evoke emotions.",
  },
  {
    name: "The Ethics of Game Development",
    date: "December 16, 2023",
    referenceImage: "/images/21.jpg",
    description:
      "Discuss the ethical considerations in game development, including issues like representation, inclusivity, and corporate responsibility.",
  },
  {
    name: "The Rise of Mobile Gaming",
    date: "December 14, 2023",
    referenceImage: "/images/22.jpg",
    description:
      "Analyze the growth of mobile gaming and its impact on the industry, including the challenges and opportunities it presents.",
  },
  {
    name: "The Legacy of Classic Franchises",
    date: "December 12, 2023",
    referenceImage: "/images/23.jpg",
    description:
      "Reflect on the enduring legacy of classic gaming franchises and how they have shaped the industry and influenced modern games.",
  },
  {
    name: "The Social Aspects of Gaming",
    date: "December 10, 2023",
    referenceImage: "/images/24.jpg",
    description:
      "Discuss the social aspects of gaming, including multiplayer experiences, online communities, and the role of games in social interaction.",
  },
];

const groups: Group[] = [
  { episodes: episodes.slice(0, 4), shape: 'I' },
  { episodes: episodes.slice(4, 8), shape: 'O' },
  { episodes: episodes.slice(8, 12), shape: 'T' },
  { episodes: episodes.slice(12, 16), shape: 'S' },
  { episodes: episodes.slice(16, 20), shape: 'Z' },
  { episodes: episodes.slice(20, 24), shape: 'L' },
];

const TetrisGroup = ({ group }: { group: Group }) => {
  const { shape, episodes } = group;
  let gridTemplateAreas = '';
  let gridClass = 'grid gap-6';
  let width = '';
  switch (shape) {
    case 'I':
      gridTemplateAreas = '"a b c d"';
      gridClass += ' grid-cols-4';
      width = '56.5rem';
      break;
    case 'O':
      gridTemplateAreas = '"a b" "c d"';
      gridClass += ' grid-cols-2 grid-rows-2';
      width = '27.5rem';
      break;
    case 'T':
      gridTemplateAreas = '". a ." "b c d"';
      gridClass += ' grid-cols-3 grid-rows-2';
      width = '42rem';
      break;
    case 'S':
      gridTemplateAreas = '". a b" "c d ."';
      gridClass += ' grid-cols-3 grid-rows-2';
      width = '42rem';
      break;
    case 'Z':
      gridTemplateAreas = '"a b ." ". c d"';
      gridClass += ' grid-cols-3 grid-rows-2';
      width = '42rem';
      break;
    case 'L':
      gridTemplateAreas = '". . a" "b c d"';
      gridClass += ' grid-cols-3 grid-rows-2';
      width = '42rem';
      break;
  }
  return (
    <div className={`${gridClass} tetris-group`} style={{ gridTemplateAreas, width }}>
      {episodes.map((episode: Episode, idx: number) => (
        <div key={idx} style={{ gridArea: String.fromCharCode(97 + idx) }}>
          <EpisodeTile episode={episode} />
        </div>
      ))}
    </div>
  );
};

export default function Episodes() {
  const groupsWrapperRef = useRef<HTMLDivElement | null>(null);
  const groupsContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = groupsWrapperRef.current;
    const container = groupsContainerRef.current;
    if (!wrapper || !container) {
      return;
    }

    const ctx = gsap.context((self) => {
      const groupElements =
        (self.selector?.(".tetris-group") as HTMLElement[]) ??
        gsap.utils.toArray<HTMLElement>(".tetris-group");

      if (!groupElements.length) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(groupElements, { autoAlpha: 1, yPercent: 0 });
        return;
      }

      gsap.set(groupElements, { autoAlpha: 0, yPercent: 60 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () =>
            `+=${Math.max(
              window.innerHeight,
              groupElements.length * 0.85 * window.innerHeight
            )}`,
          scrub: true,
          anticipatePin: 1,
          snap: {
            snapTo: (value) => {
              if (groupElements.length <= 1) {
                return 0;
              }
              const step = 1 / (groupElements.length - 1);
              const snapPoint = Math.round(value / step) * step;
              return Math.min(1, Math.max(0, snapPoint));
            },
            duration: { min: 0.2, max: 0.5 },
            ease: "power1.inOut",
          },
        },
      });

      groupElements.forEach((el, index) => {
        tl.fromTo(
          el,
          { autoAlpha: 0, yPercent: 60 },
          { autoAlpha: 1, yPercent: 0, immediateRender: false },
          index * 0.6
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div id="container" className="w-full flex flex-col gap-0">
      <div className="hidden md:block">
        <StickySocials />
      </div>
      <div id="navbar" className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div id="content" className="">
        <main id="content" className="bg-slate-800">
          <section id="Episodes">
            <div
              className="flex flex-col p-4 gap-6 z-0
            md:p-8
            xl:p-16"
            >
              <h1 className="text-xl lg:text-4xl z-0 self-center">
                Level up with these past broadcasts.
              </h1>
              <h2 className="self-center">
                Do not miss the next cast!{" "}
                <span className="text-amber-500 font-semibold">
                  <BroadcastTime />
                </span>
              </h2>

              <div
                className="flex flex-col gap-6
              md:flex-row"
              >
                <div
                  ref={groupsWrapperRef}
                  className="relative w-full mx-auto groups-pin-wrapper"
                >
                  <div
                    ref={groupsContainerRef}
                    className="flex flex-wrap gap-6 w-full mx-auto groups-container"
                  >
                    {groups.map((group, index) => (
                      <TetrisGroup key={index} group={group} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="self-start">
                <StandardButton text="Load More" />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
