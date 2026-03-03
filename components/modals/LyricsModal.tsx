"use client";

import { motion } from "motion/react";
import Image from "next/image";

const lyricsBlocks = [
  { type: "section", text: "Intro" },
  { type: "line", text: "Morning sunrise!" },
  { type: "line", text: "Morning sunrise!" },
  { type: "break", text: "" },
  { type: "section", text: "Verse 1" },
  { type: "line", text: "Hello, morning, you look good, good to me" },
  { type: "line", text: "Kissing the sky, I can feel it move me" },
  { type: "line", text: "But on my own I would share this morning" },
  { type: "line", text: "Kiss the sunrise with my eyes, so it\u2019s a" },
  { type: "break", text: "" },
  { type: "section", text: "Chorus" },
  { type: "line", text: "Morning sunrise" },
  { type: "line", text: "Morning sunrise" },
  { type: "accent", text: "I said it\u2019s a beautiful morning sunrise" },
  { type: "line", text: "Morning sunrise" },
  { type: "line", text: "If I ever heard you say, yeah" },
  { type: "break", text: "" },
  { type: "section", text: "Interlude" },
  { type: "line", text: "Ooh, ooh" },
  { type: "line", text: "Yeah, aah" },
  { type: "line", text: "Morning sunrise!" },
  { type: "break", text: "" },
  { type: "section", text: "Verse 2" },
  { type: "line", text: "Flowers will bloom in the spring, it seems like" },
  { type: "line", text: "Everything nature has bring, could it be so?" },
  { type: "line", text: "Life will go on, so they say, and it will" },
  { type: "line", text: "Bring on another day, so it\u2019s a" },
  { type: "break", text: "" },
  { type: "section", text: "Chorus" },
  { type: "line", text: "Morning sunrise" },
  { type: "accent", text: "Another morning sunrise" },
  { type: "line", text: "Morning sunrise" },
  { type: "accent", text: "I said it\u2019s a beautiful morning sunrise" },
  { type: "line", text: "Morning sunrise" },
  { type: "line", text: "If I ever heard you say, yeah" },
  { type: "break", text: "" },
  { type: "section", text: "Outro" },
  { type: "line", text: "Ooh, ooh" },
  { type: "line", text: "Yeah, aah" },
  { type: "line", text: "Morning sunrise!" },
  { type: "accent", text: "Morning, morning sunrise" },
  { type: "line", text: "Yeah" },
  { type: "line", text: "Morning sunrise!" },
];

export function LyricsModal() {
  return (
    <div className="relative">
      {/* Blurred album art background */}
      <div className="absolute inset-0 -z-10 overflow-hidden -mx-6 -mt-5">
        <Image
          src="/images/the-sisters-album.jpg"
          alt=""
          fill
          className="object-cover blur-2xl scale-110 opacity-15"
        />
        <div className="absolute inset-0 bg-warm-dark/70" />
      </div>

      {/* Giant song title header — Wrapped style */}
      <motion.div
        className="-mx-6 -mt-5 px-6 pt-5 pb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border border-gold/25 shadow-lg shadow-gold/10">
            <Image
              src="/images/the-sisters-album.jpg"
              alt="The Sisters"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-serif text-2xl font-black text-cream-light leading-none">
              Morning Sunrise
            </p>
            <p className="text-xs text-muted font-sans mt-1">
              Weldon Irvine &mdash; <em>The Sisters</em>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Thin divider */}
      <div className="h-px bg-gradient-to-r from-gold/30 via-gold/15 to-transparent mb-5" />

      {/* Lyrics — tighter, more impactful */}
      <div className="space-y-0.5 pb-4 text-center">
        {lyricsBlocks.map((block, i) => {
          if (block.type === "break") {
            return <div key={i} className="h-4" />;
          }
          if (block.type === "section") {
            return (
              <motion.p
                key={i}
                className="text-[0.5rem] uppercase tracking-[0.35em] text-gold/40 font-sans font-semibold pt-1 pb-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 + i * 0.02 }}
              >
                {block.text}
              </motion.p>
            );
          }
          if (block.type === "accent") {
            return (
              <motion.p
                key={i}
                className="font-serif italic text-lg text-citrus font-bold leading-snug"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.02 }}
              >
                {block.text}
              </motion.p>
            );
          }
          return (
            <motion.p
              key={i}
              className="font-serif text-xl text-cream/90 font-medium leading-snug tracking-wide"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.02 }}
            >
              {block.text}
            </motion.p>
          );
        })}
      </div>
    </div>
  );
}
