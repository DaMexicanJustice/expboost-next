"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileMenuOptions from "./mobile-menu-options";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MobileBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  /* const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }; */

  useEffect(() => {
    if (isOpen) {
      gsap.to(".slide-target", {
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(".slide-target", {
        y: -1000,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="absolute w-full top-0 left-0 slide-offset slide-target">
        <MobileMenuOptions />
      </div>
      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 absolute transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <X
              className={`h-6 w-6 absolute transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>
      </div>
    </>
  );
}
