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
    <div className="relative min-h-[60vh]">
      {/* Blurred album art background */}
      <div className="absolute inset-0 -z-10 overflow-hidden -mx-6 -mt-5">
        <Image
          src="/images/the-sisters-album.jpg"
          alt=""
          fill
          className="object-cover blur-2xl scale-110 opacity-25"
        />
        <div className="absolute inset-0 bg-warm-dark/60" />
      </div>

      {/* Album art thumbnail */}
      <motion.div
        className="flex justify-center pt-2 pb-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05, duration: 0.4 }}
      >
        <div className="w-24 h-24 rounded-xl overflow-hidden border border-gold/25 shadow-xl shadow-gold/10">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Track info */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-1">
          Morning Sunrise
        </p>
        <p className="text-xs text-muted font-sans">
          Weldon Irvine &mdash; <em>The Sisters</em>
        </p>
      </motion.div>

      {/* Gold divider */}
      <div className="flex items-center gap-3 mb-6 mx-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Lyrics */}
      <div className="space-y-1 pb-4 text-center">
        {lyricsBlocks.map((block, i) => {
          if (block.type === "break") {
            return <div key={i} className="h-6" />;
          }
          if (block.type === "section") {
            return (
              <motion.p
                key={i}
                className="text-[0.6rem] uppercase tracking-[0.3em] text-gold/60 font-sans font-medium pt-2 pb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.03 }}
              >
                [{block.text}]
              </motion.p>
            );
          }
          if (block.type === "accent") {
            return (
              <motion.p
                key={i}
                className="font-body italic text-lg text-citrus/70 leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.03 }}
              >
                {block.text}
              </motion.p>
            );
          }
          return (
            <motion.p
              key={i}
              className="font-serif text-xl sm:text-2xl text-cream/90 font-medium leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.03 }}
            >
              {block.text}
            </motion.p>
          );
        })}
      </div>
    </div>
  );
}
