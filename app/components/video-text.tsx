import React from "react";

interface VideoTextProps {
  text: string;
  gifSrc: string;
  startHex: string;
  endHex: string;
}

export default function VideoText({
  text,
  gifSrc,
  startHex,
  endHex,
}: VideoTextProps) {
  return (
    <div
      className="text-9xl font-bold"
      style={{
        backgroundImage: `linear-gradient(to top, ${startHex}, (${endHex}+70), url(${gifSrc})`,
        backgroundPosition: "center",
        backgroundSize: "auto, 80%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </div>
  );
}