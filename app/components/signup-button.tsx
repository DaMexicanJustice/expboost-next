import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  text: string;
}

export default function SignupButton({ text }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`
          absolute inset-0 bg-amber-500 transform origin-left z-20
          transition-transform duration-500 ease-out
          ${isHovered ? "scale-x-100" : "scale-x-0"}
        `}
      />
      <div className="flex items-center gap-2 z-30">
        <ChevronRight
          className={`size-10 transition-transform transition-color duration-500 z-30 bg-amber-500 
            rounded-tr-lg rounded-br-lg`}
        />
        <p
          className={`z-30 pr-4 uppercase font-bold transition-color duration-500
          ${isHovered ? "text-black" : "text-white"}`}
        >
          {text}
        </p>
      </div>
    </button>
  );
}
