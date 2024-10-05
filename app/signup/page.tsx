"use client";

import Image from "next/image";
import SignupButton from "../components/signup-button";

export default function Signup() {
  return (
    <div
      className="flex flex-col gap-6 items-center justify-center h-svh 
      bg-[url('/images/escheresque_ste.png')]"
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <Image
          src="/images/avatar.png"
          alt="Pixel art character"
          width={200}
          height={200}
          className="drop-shadow-xl"
        />
        <h2 className="text-xl text-center mb-4">
          Vote, create, participate, earn and more!
        </h2>
        <p className="text-lg mb-4">Become part of the community</p>
        <SignupButton text="Create Avatar" />
      </div>
    </div>
  );
}