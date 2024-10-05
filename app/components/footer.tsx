"use client";
import Link from "next/link";
import SignupButton from "./signup-button";
import { ArrowRight } from "lucide-react";
import Socials from "./socials";

export default function Footer() {
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
        <h2 className="font-semibold uppercase">Popular links</h2>
        <p>contact@expboost.com</p>
        <p>Alternatively</p>
        <SignupButton text="Contact Form" />
      </div>
      <div className="flex flex-col gap-6 justify-start items-start">
        <h2 className="font-semibold uppercase">
          Join the party <br></br> & Boost your gaming insights!
        </h2>
        <div className="flex flex-row gap-2">
          <SignupButton text="Join on Twitch" />
          <SignupButton text="Join the community" />
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-start items-start">
        <h2 className="font-semibold uppercase">Find us on</h2>
        <ArrowRight />
        <div className="lg:hidden w-full">
          <Socials />
        </div>
      </div>
    </div>
  );
}
