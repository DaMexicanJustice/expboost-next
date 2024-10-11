import { Facebook, Youtube, Twitch } from "lucide-react";
import Link from "next/link";

interface StreamingPlatform {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const streamingPlatforms: StreamingPlatform[] = [
  {
    icon: <Twitch size={64} />,
    href: "https://twitch.com",
    label: "Twitch",
  },
  {
    icon: <Youtube size={64} />,
    href: "https://youtube.com",
    label: "Youtube",
  },
  {
    icon: <Facebook size={64} />,
    href: "https://facebook.com",
    label: "Facebook",
  },
];

export default function StreamingPlatforms() {
  return (
    <ul className="flex flex-col gap-6">
      {streamingPlatforms.map((link) => (
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
  );
}
