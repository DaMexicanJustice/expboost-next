"use client";
import Link from "next/link";
import { ArrowRight, ChevronUp } from "lucide-react";
import Socials from "./socials";
import { RefObject, useRef } from "react";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import StandardButton from "./standard-button";
gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const handleScrollToTop = () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  };

  return (
    <div
      className="flex flex-col gap-6 justify-between p-4 h-svh
    lg:flex-row lg:p-16 lg:h-fit"
    >
      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="font-semibold uppercase">Schedule</h2>
        <p>Mondays 15:00 CET</p>
      </div>

      <div className="flex flex-col gap-2 justify-start items-start">
        <h2 className="font-semibold uppercase">Popular links</h2>
        <Link href={"#"}>Episodes</Link>
        <Link href={"#"}>Blog posts</Link>
        <Link href={"#"}>Gaming dictionary</Link>
        <Link href={"#"}>Terms of Service</Link>
        <Link href={"#"}>F.A.Q</Link>
        <Link href={"#"}>Support</Link>
      </div>

      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="font-semibold uppercase">Contact</h2>
        <p>contact@expboost.com</p>
        <p>Alternatively</p>
        <StandardButton text="Contact Form" />
      </div>
      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="font-semibold uppercase">
          Join the party <br></br> & Boost your gaming insights!
        </h2>
        <StandardButton text="Join on Twitch" />
        <StandardButton text="Join the community" />
      </div>

      <div
        className="flex flex-row gap-2 justify-between items-center
      lg:flex-col"
      >
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold uppercase">Find us on</h2>
          <ArrowRight />
          <div className="lg:hidden w-full">
            <Socials />
          </div>
        </div>
        <div
          ref={ref}
          onClick={handleScrollToTop}
          className="flex flex-col justify-center items-center hover:opacity-50 transition-opacity
        hover:cursor-pointer"
        >
          <ChevronUp className="size-10" />
          <p>Top</p>
        </div>
      </div>
    </div>
  );
}
