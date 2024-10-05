"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
  useGSAP(() => {
    const labels: HTMLElement[] = gsap.utils.toArray(".label");
    labels.forEach((label) => {
      gsap.to(label, {
        scrollTrigger: {
          trigger: label,
          start: "top 90%",
          end: "top top",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 2,
      });
    });
  }, []);

  return (
    <div className="h-full flex flex-col gap-40 justify-center items-center">
      <div
        className="flex flex-col gap-6 w-full
      lg:self-start lg:w-6/12"
      >
        <h2 className="text-4xl font-bold">We are EXPBoost</h2>
        <p className="text-xl">
          Some call it podcast. Others talkshow. We call it
          <span className="text-orange-400"> gaming enlightened.</span>
        </p>
      </div>

      <div
        className="flex flex-col gap-6 w-full
      lg:self-end lg:w-6/12"
      >
        <h2 className="text-4xl font-bold">Deep dive into game design.</h2>
        <p className="text-xl">
          Join us on a journey into game design. Bringing you
          <span className="text-orange-400"> analysis, insight </span>
          and design considerations. New topic every episode!
        </p>
        <div className="bg-purple-900 p-6 uppercase font-bold label opacity-0">
          Game design topic discussion
        </div>
      </div>

      <div
        className="flex flex-col gap-6 w-full
      lg:self-start lg:w-6/12"
      >
        <h2 className="text-4xl font-bold">Video game news</h2>
        <p className="text-xl">
          We have our trigger finger on the games
          <span className="text-orange-400"> industry pulse </span>
          bringing you selected <span className="text-orange-400"> news </span>
          every episode.
        </p>
        <div className="bg-purple-900 p-6 uppercase font-bold label opacity-0">
          Video game news coverage
        </div>
      </div>

      <div
        className="flex flex-col gap-6 w-full
      lg:self-end lg:w-6/12"
      >
        <h2 className="text-4xl font-bold">Join our party</h2>
        <p className="text-xl">
          Become a<span className="text-orange-400"> party member </span>
          and be a part of the
          <span className="text-orange-400"> community. </span>
          Make contributions and
          <span className="text-orange-400"> participate </span>
          in gamification for the Twitch enthusiast.
        </p>
        <div className="bg-purple-900 p-6 uppercase font-bold label opacity-0">
          Twitch integration
        </div>
      </div>

      <div
        className="flex flex-col gap-6 w-full
      lg:self-start lg:w-6/12"
      >
        <h2 className="text-4xl font-bold">New Game+</h2>
        <p className="text-xl">
          Look to the future as we scale up with more content:
          <span className="text-orange-400">
            blog posts, game releases, let us learn
          </span>
          and more.
        </p>
        <div className="bg-purple-900 p-6 uppercase font-bold label opacity-0">
          New Game Plus content
        </div>
      </div>
    </div>
  );
}
