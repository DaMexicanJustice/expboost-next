import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function MobileMenuOptions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
      <nav className="flex flex-col items-center space-y-4 mb-8">
        <a href="#" className="text-yellow-400 font-bold">
          Home
        </a>
        <a href="#" className="font-bold">
          Episodes
        </a>
        <a href="#" className="font-bold">
          Blog posts
        </a>
        <a href="#" className="font-bold flex items-center">
          Contact Us
          <span className="ml-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
            2
          </span>
        </a>
        <a href="#" className="font-bold">
          About Us
        </a>
      </nav>
      <div className="flex space-x-6">
        <a href="#" className="text-white">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-white">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-white">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-white">
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
