import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function MobileMenuOptions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6 overflow-scroll">
      <nav className="flex flex-col items-center space-y-4 mb-8">
        <a href="#" className="text-yellow-400 font-bold">
          Home
        </a>
        <a href="/episodes" className="font-bold">
          Episodes
        </a>
        <a href="/blog" className="font-bold">
          Blog posts
        </a>
        <a href="/contact" className="font-bold flex items-center">
          Contact Us
        </a>
        <a href="/about" className="font-bold">
          About Us
        </a>
        <a href="#" className="font-bold">
          Login
        </a>
        <a href="#" className="font-bold">
          Signup
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
