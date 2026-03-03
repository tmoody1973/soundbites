import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soundbites — Morning Sunrise × Citrus & Smoke",
  description:
    "A sound & flavor pairing: Weldon Irvine meets Chef Dane Baldwin at Radio Milwaukee's Soundbites.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Soundbites",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1A1612",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/the-sisters-album.jpg" />
      </head>
      <body className="bg-warm-black text-cream font-sans overflow-hidden h-dvh">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
