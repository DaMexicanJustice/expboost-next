import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXPBoost",
  description:
    "EXPBoost is gamified podcast Join us on a deepdive into game design. Every Monday. 15:00 CET UTC+2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
