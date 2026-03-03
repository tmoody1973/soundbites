# Soundbites Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page interactive experience for the Radio Milwaukee Soundbites event — hero view with animated modals, audio player, and PWA offline support, deployed to Vercel and served on an iPad.

**Architecture:** Next.js App Router with static export. One page (`/`) renders a full-viewport hero with four tap-target cards. Each card opens a full-screen Framer Motion modal. A persistent audio player bar is fixed to the bottom. A service worker caches all assets for offline use.

**Tech Stack:** Next.js 15 (App Router, static export), Framer Motion 11, Tailwind CSS 4, TypeScript

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Initialize Next.js with Tailwind**

Run:
```bash
cd /Users/tarikmoody/Documents/Projects/soundbites
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Accept overwrite prompts. This creates the full scaffold.

**Step 2: Install Framer Motion**

Run:
```bash
npm install motion
```

**Step 3: Configure static export**

In `next.config.ts`:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Since we use `output: "export"`, Next.js `<Image>` optimization won't work at build time. Set `images.unoptimized: true` so images still render (just without server-side optimization — fine for our small asset set).

**Step 4: Copy assets into public directory**

```bash
mkdir -p public/audio public/images
cp "research/Morning Sunrise_Weldon Irvine.m4a" public/audio/morning-sunrise.m4a
cp "research/a0980267655_10.jpg" public/images/the-sisters-album.jpg
cp "research/images (2).jpeg" public/images/weldon-color.jpeg
cp "research/weldon (1).webp" public/images/weldon-bw.webp
```

**Step 5: Verify dev server starts**

Run: `npm run dev`
Expected: App loads at `http://localhost:3000` with default Next.js page.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Framer Motion and Tailwind"
```

---

### Task 2: Global Styles, Fonts, and Layout

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Step 1: Set up Google Fonts in layout**

In `app/layout.tsx`:
```tsx
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Set up Tailwind theme with design tokens**

In `app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-warm-black: #1A1612;
  --color-warm-dark: #2A2420;
  --color-gold: #D4A853;
  --color-gold-light: #E8C97A;
  --color-amber: #C2762E;
  --color-cream: #F5EDE0;
  --color-cream-light: #FAF6EF;
  --color-muted: #9B8E7E;
  --color-citrus: #E89B3E;

  --font-sans: var(--font-dm-sans);
  --font-serif: var(--font-playfair);
  --font-body: var(--font-source-serif);
}
```

**Step 3: Create PWA manifest**

Create `public/manifest.json`:
```json
{
  "name": "Soundbites — Morning Sunrise",
  "short_name": "Soundbites",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1A1612",
  "theme_color": "#1A1612",
  "icons": [
    {
      "src": "/images/the-sisters-album.jpg",
      "sizes": "512x512",
      "type": "image/jpeg"
    }
  ]
}
```

**Step 4: Verify fonts and colors render**

Replace `app/page.tsx` with a simple test:
```tsx
export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center bg-warm-black">
      <h1 className="font-serif text-gold text-6xl font-black">
        Morning Sunrise
      </h1>
    </div>
  );
}
```

Run: `npm run dev`
Expected: Gold Playfair Display text on dark background.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add global styles, fonts, Tailwind theme, and PWA manifest"
```

---

### Task 3: Atmospheric Background Component

**Files:**
- Create: `components/Atmosphere.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the atmosphere component**

Create `components/Atmosphere.tsx`:
```tsx
export function Atmosphere() {
  return (
    <>
      {/* Radial gradient atmosphere */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(212,168,83,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 40% at 30% 80%, rgba(194,118,46,0.06) 0%, transparent 60%)",
            "linear-gradient(180deg, #1A1612 0%, #1E1914 100%)",
          ].join(", "),
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </>
  );
}
```

**Step 2: Add to page and verify**

Run: `npm run dev`
Expected: Subtle warm gradient and grain texture visible on dark background.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add atmospheric background with gradient and noise texture"
```

---

### Task 4: Hero View (Main Screen)

**Files:**
- Create: `components/HeroView.tsx`
- Create: `components/SectionCard.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the SectionCard component**

Create `components/SectionCard.tsx`:
```tsx
"use client";

import { motion } from "motion/react";

interface SectionCardProps {
  label: string;
  sublabel?: string;
  onClick: () => void;
}

export function SectionCard({ label, sublabel, onClick }: SectionCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-full aspect-[4/3] flex flex-col items-start justify-end p-4 rounded-sm border border-gold/15 bg-white/[0.03] backdrop-blur-sm text-left cursor-pointer overflow-hidden"
      whileTap={{ scale: 0.97 }}
      whileHover={{ borderColor: "rgba(212,168,83,0.4)" }}
    >
      {sublabel && (
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          {sublabel}
        </span>
      )}
      <span className="font-serif text-lg font-bold text-cream-light leading-tight">
        {label}
      </span>
      {/* Gold glow on bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
    </motion.button>
  );
}
```

**Step 2: Build the HeroView component**

Create `components/HeroView.tsx`:
```tsx
"use client";

import { motion } from "motion/react";
import { SectionCard } from "./SectionCard";

interface HeroViewProps {
  onOpenModal: (modal: "artist" | "lyrics" | "pairing" | "why") => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function HeroView({ onOpenModal }: HeroViewProps) {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center px-6 pb-28 pt-8">
      {/* Event label */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        {...fadeUp}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="w-8 h-px bg-gold/50" />
        <span className="text-[0.7rem] tracking-[0.25em] uppercase text-gold font-medium">
          Sound & Flavor Pairing
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        className="font-serif font-black text-[clamp(2.8rem,8vw,4.5rem)] leading-[1.02] mb-1"
        {...fadeUp}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <span className="text-gold-light italic font-bold">
          Morning
          <br />
          Sunrise
        </span>
      </motion.h1>

      <motion.p
        className="font-serif text-[clamp(1.1rem,3vw,1.4rem)] italic text-citrus mb-6"
        {...fadeUp}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        meets Citrus & Smoke
      </motion.p>

      {/* Credits */}
      <motion.div
        className="mb-8"
        {...fadeUp}
        transition={{ delay: 0.65, duration: 0.8 }}
      >
        <p className="text-sm text-cream/80 font-light">
          Chef Dane Baldwin{" "}
          <span className="text-gold/60 mx-1">&times;</span> DJ Tarik
        </p>
        <p className="text-xs text-muted mt-0.5">
          The Diplomat, Milwaukee
        </p>
      </motion.div>

      {/* Section cards grid */}
      <motion.div
        className="grid grid-cols-2 gap-3 max-w-sm"
        {...fadeUp}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <SectionCard
          sublabel="The"
          label="Artist"
          onClick={() => onOpenModal("artist")}
        />
        <SectionCard
          label="Lyrics"
          onClick={() => onOpenModal("lyrics")}
        />
        <SectionCard
          sublabel="The"
          label="Pairing"
          onClick={() => onOpenModal("pairing")}
        />
        <SectionCard
          sublabel="Why It"
          label="Works"
          onClick={() => onOpenModal("why")}
        />
      </motion.div>
    </div>
  );
}
```

**Step 3: Wire into page.tsx**

In `app/page.tsx`:
```tsx
"use client";

import { useState } from "react";
import { Atmosphere } from "@/components/Atmosphere";
import { HeroView } from "@/components/HeroView";

type ModalType = "artist" | "lyrics" | "pairing" | "why" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <main className="h-dvh relative overflow-hidden">
      <Atmosphere />
      <HeroView onOpenModal={setActiveModal} />
    </main>
  );
}
```

**Step 4: Verify hero renders**

Run: `npm run dev`
Expected: Full-viewport hero with title, credits, and four tap cards. Fade-up animations on load.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add hero view with section cards and entrance animations"
```

---

### Task 5: Modal Shell Component

**Files:**
- Create: `components/Modal.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the reusable Modal component**

Create `components/Modal.tsx`:
```tsx
"use client";

import { motion, AnimatePresence, useDragControls } from "motion/react";
import { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-warm-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none">
            <motion.div
              className="absolute inset-x-0 top-4 bottom-0 bg-warm-dark/95 backdrop-blur-xl rounded-t-2xl overflow-hidden pointer-events-auto flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragControls={dragControls}
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) onClose();
              }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2 shrink-0">
                <div className="w-10 h-1 rounded-full bg-cream/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 shrink-0">
                <h2 className="font-serif text-xl font-bold text-gold-light">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-cream/10 text-cream/60 text-sm"
                >
                  &times;
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 pb-28">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
```

**Step 2: Wire modal into page.tsx**

Update `app/page.tsx` to add the modal with a placeholder:
```tsx
"use client";

import { useState } from "react";
import { Atmosphere } from "@/components/Atmosphere";
import { HeroView } from "@/components/HeroView";
import { Modal } from "@/components/Modal";

type ModalType = "artist" | "lyrics" | "pairing" | "why" | null;

const modalTitles: Record<string, string> = {
  artist: "The Artist",
  lyrics: "Lyrics",
  pairing: "The Pairing",
  why: "Why It Works",
};

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <main className="h-dvh relative overflow-hidden">
      <Atmosphere />
      <HeroView onOpenModal={setActiveModal} />
      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? modalTitles[activeModal] : ""}
      >
        <p className="text-cream/70 font-body">
          Content for {activeModal} modal coming soon.
        </p>
      </Modal>
    </main>
  );
}
```

**Step 3: Verify modal opens and closes**

Run: `npm run dev`
Expected: Tap a card — modal slides up from bottom with spring animation. Tap X or swipe down to dismiss.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add reusable modal component with swipe-to-dismiss"
```

---

### Task 6: Audio Player Bar

**Files:**
- Create: `components/AudioPlayer.tsx`
- Create: `hooks/useAudioPlayer.ts`
- Modify: `app/page.tsx`

**Step 1: Build the audio hook**

Create `hooks/useAudioPlayer.ts`:
```ts
"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export function useAudioPlayer(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = volume;
    audioRef.current = audio;

    const onLoaded = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, [src]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const restart = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  }, []);

  const changeVolume = useCallback((v: number) => {
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) audioRef.current.currentTime = time;
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    restart,
    changeVolume,
    seek,
  };
}
```

**Step 2: Build the AudioPlayer component**

Create `components/AudioPlayer.tsx`:
```tsx
"use client";

import { motion } from "motion/react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function AudioPlayer() {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    restart,
    changeVolume,
    seek,
  } = useAudioPlayer("/audio/morning-sunrise.m4a");

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 z-50 bg-warm-dark/95 backdrop-blur-xl border-t border-gold/10"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ delay: 1.2, type: "spring", damping: 25, stiffness: 200 }}
    >
      {/* Progress bar */}
      <div
        className="h-0.5 bg-gold/20 cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          seek(pct * duration);
        }}
      >
        <div
          className="h-full bg-gold transition-[width] duration-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5 shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold ml-0.5">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>

        {/* Restart */}
        <button
          onClick={restart}
          className="w-10 h-10 flex items-center justify-center rounded-full text-muted shrink-0"
          aria-label="Restart"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-cream-light truncate">
            Morning Sunrise
          </p>
          <p className="text-xs text-muted">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>

        {/* Volume */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => changeVolume(parseFloat(e.target.value))}
          className="w-16 h-1 accent-gold shrink-0"
          aria-label="Volume"
        />
      </div>
    </motion.div>
  );
}
```

**Step 3: Add AudioPlayer to page.tsx**

Add `<AudioPlayer />` inside `<main>`, after the `<Modal>`.

```tsx
import { AudioPlayer } from "@/components/AudioPlayer";
// ... in JSX:
<AudioPlayer />
```

**Step 4: Verify audio plays**

Run: `npm run dev`
Expected: Player bar slides up. Tap play — song starts. Progress bar moves. Restart and volume work.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add persistent audio player bar with play/pause, restart, and volume"
```

---

### Task 7: Artist Modal Content

**Files:**
- Create: `components/modals/ArtistModal.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the ArtistModal component**

Create `components/modals/ArtistModal.tsx`:
```tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const tags = ["Jazz-Funk", "Soul", "Hampton, VA", "Keys", "Composer"];

export function ArtistModal() {
  return (
    <div className="space-y-6">
      {/* Photo gallery */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        <div className="col-span-2 aspect-square relative rounded-sm overflow-hidden">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters album art"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[3/4] relative rounded-sm overflow-hidden">
          <Image
            src="/images/weldon-color.jpeg"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[3/4] relative rounded-sm overflow-hidden">
          <Image
            src="/images/weldon-bw.webp"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Name and years */}
      <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Artist
        </p>
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-2xl font-bold text-cream-light">
            Weldon Irvine
          </h3>
          <span className="text-sm text-muted">1943 — 2002</span>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="font-body text-[0.95rem] leading-[1.75] text-cream/80 space-y-3"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        <p>
          Keyboardist, composer, poet, and playwright from Hampton, Virginia —
          Weldon Irvine is one of jazz-funk's most quietly towering figures. He
          served as Nina Simone's bandleader and co-wrote "To Be Young, Gifted
          and Black," which became an anthem of the Civil Rights movement.
        </p>
        <p>
          Throughout the 1970s, he released a string of visionary albums on RCA
          and Strata-East, blending jazz, funk, and soul into something entirely
          his own. His influence bridged generations: A Tribe Called Quest, Mos
          Def, Q-Tip, and Common all studied at Weldon's feet.
        </p>
        <p>
          "Morning Sunrise," from his album <em>The Sisters</em> — a collection
          of late-'70s sessions with Don Blackman and a young Marcus Miller — has
          been sampled by Jay-Z, Drake, and countless others, ensuring his warmth
          reverberates well beyond his years.
        </p>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.4 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-gold/20 rounded-sm text-muted"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
```

**Step 2: Wire into page.tsx**

In the `<Modal>` content area, render the correct modal content based on `activeModal`:

```tsx
import { ArtistModal } from "@/components/modals/ArtistModal";

// ... inside Modal children:
{activeModal === "artist" && <ArtistModal />}
{activeModal !== "artist" && (
  <p className="text-cream/70 font-body">Coming soon.</p>
)}
```

**Step 3: Verify**

Run: `npm run dev`
Expected: Tap "Artist" card — modal opens with photos, bio, and tags.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add artist modal with photos, bio, and genre tags"
```

---

### Task 8: Lyrics Modal Content

**Files:**
- Create: `components/modals/LyricsModal.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the LyricsModal component**

Create `components/modals/LyricsModal.tsx`:
```tsx
"use client";

import { motion } from "motion/react";

// Placeholder — user will provide actual lyrics
const lyricsLines = [
  "[ Lyrics to be provided by DJ Tarik ]",
  "",
  "Paste the lyrics for Morning Sunrise here.",
  "Each line will fade in with a staggered animation.",
];

export function LyricsModal() {
  return (
    <div className="relative">
      {/* Blurred album art background */}
      <div
        className="absolute inset-0 -z-10 opacity-10 blur-3xl"
        style={{
          backgroundImage: "url(/images/the-sisters-album.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="space-y-1 py-4">
        {lyricsLines.map((line, i) => (
          <motion.p
            key={i}
            className={`font-body text-lg leading-relaxed ${
              line === "" ? "h-6" : "text-cream/90"
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Wire into page.tsx**

Add to the modal content switch:
```tsx
import { LyricsModal } from "@/components/modals/LyricsModal";

{activeModal === "lyrics" && <LyricsModal />}
```

**Step 3: Verify**

Run: `npm run dev`
Expected: Lyrics modal opens with staggered line-by-line fade-in, blurred album art in background.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add lyrics modal with staggered fade-in animation"
```

---

### Task 9: Pairing Modal Content

**Files:**
- Create: `components/modals/PairingModal.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the PairingModal component**

Create `components/modals/PairingModal.tsx`:
```tsx
"use client";

import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function PairingModal() {
  return (
    <div className="space-y-6">
      {/* Pairing text */}
      <motion.div
        className="font-body text-[1.05rem] leading-[1.85] text-cream/90 space-y-5"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        <p className="first-letter:font-serif first-letter:text-[3.6rem] first-letter:float-left first-letter:leading-[0.75] first-letter:mr-2 first-letter:mt-1 first-letter:text-gold-light first-letter:font-bold">
          Weldon Irvine's "Morning Sunrise" opens like the first light through a
          kitchen window — Don Blackman's honeyed vocals floating over warm
          Rhodes chords and an unhurried groove that feels like it was made for
          the quiet hours before the world speeds up. It's mellow soul at its
          most intimate, the kind of record that turns a moment into a ritual.
        </p>
        <p>
          That same slow warmth lives in this dish. The citrus corn muffin brings
          brightness and grain — a soft, golden sweetness lifted by notes of
          orange and lemon zest, the way Irvine's keys shimmer with light even as
          the bassline keeps everything grounded. Then the confit pork belly
          arrives: rich, deeply rendered, falling apart with a smoky tenderness
          that mirrors the low-end warmth of the track's rhythm section. The fat
          melts slow, the groove rides slow. Both ask you to take your time.
        </p>
        <p>
          This is a pairing about patience and craft — the hours it takes to
          confit pork belly until it yields completely, and the years of musical
          brilliance Irvine poured into a track that sounds effortless. Citrus
          cuts through richness the way Blackman's voice lifts above the
          instrumentation. Sweetness and depth. Brightness and soul. The first
          meal of the day, set to its perfect soundtrack.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
      </div>

      {/* Track details grid */}
      <motion.div
        className="grid grid-cols-2 gap-5"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        {[
          { label: "Track", value: "Morning Sunrise", sub: "3:13" },
          {
            label: "Album",
            value: "The Sisters",
            sub: "Recorded late 1970s · Released 1998",
          },
          {
            label: "Musicians",
            value: "Don Blackman, Marcus Miller",
            sub: "Vocals, bass & keys",
          },
          {
            label: "The Dish",
            value: "Citrus Corn Muffin",
            sub: "with Confit Pork Belly",
          },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
              {item.label}
            </p>
            <p className="font-serif text-base text-cream-light">
              {item.value}
            </p>
            <p className="text-xs text-muted mt-0.5">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
```

**Step 2: Wire into page.tsx**

```tsx
import { PairingModal } from "@/components/modals/PairingModal";

{activeModal === "pairing" && <PairingModal />}
```

**Step 3: Verify and commit**

```bash
git add -A
git commit -m "feat: add pairing modal with story text and track details"
```

---

### Task 10: Why It Works Modal Content

**Files:**
- Create: `components/modals/WhyModal.tsx`
- Modify: `app/page.tsx`

**Step 1: Build the WhyModal component**

Create `components/modals/WhyModal.tsx`:
```tsx
"use client";

import { motion } from "motion/react";

const parallels = [
  {
    label: "Brightness & Warmth",
    text: "Citrus zest in the muffin echoes the way Don Blackman's vocals shimmer above Irvine's warm Rhodes — a bright melody over a golden, grounded foundation.",
  },
  {
    label: "Low & Slow",
    text: "Confit pork belly is rendered over hours until it's impossibly tender. The track moves with the same unhurried confidence — deep groove, no rush, all feel.",
  },
  {
    label: "Sweet Meets Soul",
    text: "The corn muffin's natural sweetness paired with rich pork mirrors the track's balance of smooth melody and deep funk undertow. Comfort on every level.",
  },
  {
    label: "Morning Energy",
    text: "Both the song and dish carry the spirit of a deliberate morning — something made with care, savored slowly, the kind of start that sets the tone for everything after.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function WhyModal() {
  return (
    <div className="space-y-8">
      {/* Chef section */}
      <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Chef
        </p>
        <h3 className="font-serif text-2xl font-bold text-cream-light">
          Dane Baldwin
        </h3>
        <p className="text-sm text-muted mt-0.5">
          The Diplomat — Milwaukee, WI
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Dish
        </p>
        <h3 className="font-serif text-xl font-bold text-cream-light">
          Citrus Corn Muffin
        </h3>
        <p className="text-sm text-citrus italic mt-0.5">
          with Confit Pork Belly
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
      </div>

      {/* Why cards */}
      {parallels.map((item, i) => (
        <motion.div
          key={item.label}
          className="pt-4 border-t border-gold/10"
          {...fadeUp}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-citrus font-medium mb-2">
            {item.label}
          </p>
          <p className="font-body text-[0.92rem] leading-[1.7] text-cream/85">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
```

**Step 2: Wire into page.tsx**

```tsx
import { WhyModal } from "@/components/modals/WhyModal";

{activeModal === "why" && <WhyModal />}
```

**Step 3: Verify and commit**

```bash
git add -A
git commit -m "feat: add why-it-works modal with chef details and pairing parallels"
```

---

### Task 11: Service Worker for Offline Caching

**Files:**
- Create: `public/sw.js`
- Modify: `app/layout.tsx`

**Step 1: Create the service worker**

Create `public/sw.js`:
```js
const CACHE_NAME = "soundbites-v1";
const ASSETS = [
  "/",
  "/audio/morning-sunrise.m4a",
  "/images/the-sisters-album.jpg",
  "/images/weldon-color.jpeg",
  "/images/weldon-bw.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
```

**Step 2: Register the service worker**

Create `components/ServiceWorkerRegistration.tsx`:
```tsx
"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);
  return null;
}
```

Add to `app/layout.tsx` inside `<body>`:
```tsx
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

// inside body:
<ServiceWorkerRegistration />
{children}
```

**Step 3: Verify offline works**

1. Run `npm run build && npx serve out`
2. Open in browser, let it load fully
3. Go offline (DevTools Network > Offline)
4. Refresh — should still work completely

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add service worker for offline caching and PWA support"
```

---

### Task 12: Build, Test on Device, Deploy to Vercel

**Files:**
- None new

**Step 1: Build and test locally**

```bash
npm run build
npx serve out
```

Open on iPad (same network) or in Chrome DevTools device emulation (iPad dimensions: 1024x1366).

**Step 2: Test checklist**

- [ ] Hero view renders full-screen, no scroll
- [ ] All 4 modals open/close with smooth animation
- [ ] Swipe-to-dismiss works on modals
- [ ] Audio plays, pauses, restarts
- [ ] Volume slider works
- [ ] Progress bar updates and is tappable
- [ ] Images load in Artist modal
- [ ] Lyrics display with stagger animation
- [ ] PWA: "Add to Home Screen" opens in standalone mode
- [ ] Offline: works after first load with service worker

**Step 3: Deploy to Vercel**

```bash
npx vercel --prod
```

Follow prompts to link project. After deploy, note the URL.

**Step 4: Load on iPad**

1. Open Vercel URL on iPad Safari
2. Wait for full load (all assets cached)
3. Tap Share > Add to Home Screen
4. Open from Home Screen — should be fullscreen, no Safari chrome

**Step 5: Commit any final tweaks**

```bash
git add -A
git commit -m "chore: production build and Vercel deployment"
```

---

## Content Still Needed from User

Before the build is complete, the user needs to provide:
1. **Lyrics** for "Morning Sunrise" — replace placeholder in `LyricsModal.tsx`
2. **Chef Dane Baldwin details** — any additional bio or info about The Diplomat (optional, current text works)
3. **Radio Milwaukee logo** — optional branding element for the footer
