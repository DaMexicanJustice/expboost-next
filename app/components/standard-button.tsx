import React, { useState } from "react";

interface ButtonProps {
  text: string;
}

export default function StandardButton({ text }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the click state after 200ms
  };

  return (
    <button
      className={`bg-[#7e3af2] hover:bg-[#6929e3] text-white font-semibold py-2 px-4 rounded-md w-full text-xs transition-transform duration-200 ease-in-out ${
        isClicked ? "scale-95" : "scale-100"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
