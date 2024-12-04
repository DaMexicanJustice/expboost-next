"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
  text: string;
}

export default function CreateAvatarButton({ text }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative overflow-hidden bg-[#1a1b26] text-white font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 font-bold uppercase">{text}</span>
      <ChevronRight className="relative z-10 h-5 w-5" />
      <div
        className={`absolute top-0 left-0 h-full w-1 bg-[#FF9500] transition-all duration-300 ease-out ${
          isHovered ? "w-full" : "w-1"
        }`}
      />
    </button>
  );
}
