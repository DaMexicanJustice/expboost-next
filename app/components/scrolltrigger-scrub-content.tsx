"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerComponentProps {
  target: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}

export default function ScrolltriggerScrubContent({
  target,
  children,
}: ScrollTriggerComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!target.current || !containerRef.current) return;

    const containerElement = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top 20%", // Starts when the top of the container is 20% from the top of the viewport
        end: "bottom 80%", // Ends when the bottom of the container is 20% from the top of the viewport
        pin: true,
      },
    });

    // Clean up
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [target]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}
