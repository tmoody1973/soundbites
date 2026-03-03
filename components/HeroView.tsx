"use client";

import { motion } from "motion/react";
import Image from "next/image";

type ModalType = "artist" | "lyrics" | "pairing" | "why";

interface HeroViewProps {
  onOpenModal: (modal: ModalType) => void;
}

const lyricsLines = [
  "Morning sunrise!",
  "Morning sunrise!",
  "Hello, morning, you look good, good to me",
  "Kissing the sky, I can feel it move me",
  "But on my own I would share this morning",
  "Kiss the sunrise with my eyes",
  "Morning sunrise",
  "I said it\u2019s a beautiful morning sunrise",
  "If I ever heard you say, yeah",
  "Ooh, ooh",
  "Yeah, aah",
  "Morning sunrise!",
  "Flowers will bloom in the spring, it seems like",
  "Everything nature has bring, could it be so?",
  "Life will go on, so they say, and it will",
  "Bring on another day",
  "Another morning sunrise",
  "Morning sunrise",
  "I said it\u2019s a beautiful morning sunrise",
  "Morning, morning sunrise",
  "Yeah",
  "Morning sunrise!",
];

export function HeroView({ onOpenModal }: HeroViewProps) {
  return (
    <div className="relative z-10 h-full flex flex-col overflow-hidden">
      {/* ====== SCROLLING LYRICS STRIP ====== */}
      <div
        className="absolute right-4 top-0 bottom-0 w-56 z-[1] overflow-hidden pointer-events-none opacity-[0.12]"
        style={{ transform: "rotate(-8deg)", transformOrigin: "top right" }}
      >
        <div
          className="flex flex-col gap-7"
          style={{ animation: "scroll-lyrics 40s linear infinite" }}
        >
          {/* Duplicate lyrics twice for seamless loop */}
          {[...lyricsLines, ...lyricsLines].map((line, i) => (
            <p
              key={i}
              className="font-serif italic text-cream text-xl leading-snug whitespace-nowrap"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* ====== FULL-BLEED ARTIST PHOTO ====== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/weldon-bw.webp"
          alt="Weldon Irvine"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        {/* Cinematic gradient — light at top to show photo, heavy at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/20 via-warm-black/40 to-warm-black" />
        {/* Extra bottom darkness for text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-warm-black via-warm-black/90 to-transparent" />
      </div>

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 flex flex-col h-full px-7 pt-5 pb-28">

        {/* TOP ROW: Event label + album art */}
        <motion.div
          className="flex items-start justify-between mb-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold/70 font-sans font-medium">
              Radio Milwaukee
            </p>
            <p className="text-[0.55rem] uppercase tracking-[0.2em] text-cream/40 font-sans mt-0.5">
              Soundbites 2026
            </p>
          </div>
          {/* Album art — top right corner */}
          <div className="w-14 h-14 rounded-lg overflow-hidden border border-gold/20 shadow-lg">
            <Image
              src="/images/the-sisters-album.jpg"
              alt="The Sisters"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* BOTTOM STACK: All key info */}
        <div className="mt-auto space-y-0">

          {/* Song title — large */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2">
              The Song
            </p>
            <h2 className="font-serif italic text-gold-light text-5xl sm:text-6xl font-black leading-[0.92] drop-shadow-lg">
              Morning Sunrise
            </h2>
            <p className="text-base text-cream/50 font-sans mt-2">
              Weldon Irvine &middot; <em className="text-cream/40">The Sisters</em> &middot; 1979
            </p>
          </motion.div>

          {/* DISH NAME — THE HERO TEXT */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold font-sans font-medium mb-2">
              Paired With
            </p>
            <h1 className="font-serif text-cream-light text-3xl sm:text-4xl font-black leading-[1.05]">
              Citrus Corn Muffin
              <br />
              <span className="text-citrus italic font-bold text-2xl sm:text-3xl">
                with Confit Pork Belly
              </span>
            </h1>
          </motion.div>

          {/* Pairing description — editorial italic */}
          <motion.p
            className="font-body italic text-cream/50 text-sm leading-relaxed mb-5 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The citrus corn muffin brings brightness and grain &mdash; a soft, golden sweetness
            lifted by notes of orange and lemon zest. Then the confit pork belly arrives: rich,
            deeply rendered, falling apart with a smoky tenderness that mirrors the low-end warmth
            of the track&apos;s rhythm section.
          </motion.p>

          {/* Chef + DJ credits side by side */}
          <motion.div
            className="flex gap-8 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.25em] text-gold/60 font-sans font-medium mb-0.5">
                The Chef
              </p>
              <p className="font-serif text-lg text-cream/80 font-bold">
                Dane Baldwin
              </p>
              <p className="text-sm text-cream/45 font-sans">
                The Diplomat &middot; Milwaukee
              </p>
            </div>
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.25em] text-gold/60 font-sans font-medium mb-0.5">
                The DJ
              </p>
              <p className="font-serif text-lg text-cream/80 font-bold">
                Tarik Moody
              </p>
              <p className="text-sm text-cream/45 font-sans">
                Radio Milwaukee
              </p>
            </div>
          </motion.div>

          {/* Navigation pills */}
          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {(
              [
                { key: "artist" as ModalType, label: "The Artist" },
                { key: "lyrics" as ModalType, label: "Lyrics" },
                { key: "pairing" as ModalType, label: "The Story" },
                { key: "why" as ModalType, label: "Why It Works" },
              ]
            ).map((item) => (
              <motion.button
                key={item.key}
                layoutId={`card-${item.key}`}
                onClick={() => onOpenModal(item.key)}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 rounded-full border border-gold/25 bg-warm-black/50 backdrop-blur-md
                  text-[0.7rem] font-sans text-cream/70 tracking-wider uppercase
                  hover:border-gold/50 hover:bg-gold/10 hover:text-cream
                  transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
