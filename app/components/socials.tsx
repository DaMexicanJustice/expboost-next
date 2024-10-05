import { Twitter, Instagram, Linkedin, Youtube, Twitch } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Twitch size={24} />,
    href: "https://tiktok.com",
    label: "TikTok",
  },
  {
    icon: <Twitter size={24} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <Instagram size={24} />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Youtube size={24} />,
    href: "https://youtube.com",
    label: "YouTube",
  },
  {
    icon: <p className="uppercase text-xl font-bold text-center">P</p>,
    href: "https://patreon.com",
    label: "Patreon",
  },
];

export default function Socials() {
  return (
    <div>
      <ul className="flex flex-row justify-evenly">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <span className="text-white hover:opacity-50 transition-opacity">
                {link.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
