"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Placeholder -- user will provide actual lyrics
const lyricsLines = [
  "[ Lyrics to be provided by DJ Tarik ]",
  "",
  "Paste the lyrics for Morning Sunrise here.",
  "Each line will fade in with a staggered animation.",
];

export function LyricsModal() {
  return (
    <div className="relative min-h-[60vh]">
      {/* Blurred album art background — more visible */}
      <div className="absolute inset-0 -z-10 overflow-hidden -mx-6 -mt-5">
        <Image
          src="/images/the-sisters-album.jpg"
          alt=""
          fill
          className="object-cover blur-2xl scale-110 opacity-25"
        />
        <div className="absolute inset-0 bg-warm-dark/60" />
      </div>

      {/* Album art thumbnail at top */}
      <motion.div
        className="flex justify-center pt-2 pb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05, duration: 0.4 }}
      >
        <div className="w-28 h-28 rounded-xl overflow-hidden border border-gold/25 shadow-xl shadow-gold/10">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Track info */}
      <motion.div
        className="text-center mb-8"
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
      <div className="flex items-center gap-3 mb-8 mx-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Lyrics — centered, bold typography */}
      <div className="space-y-2 py-2 text-center">
        {lyricsLines.map((line, i) => (
          <motion.p
            key={i}
            className={`font-serif text-xl sm:text-2xl leading-relaxed tracking-wide ${
              line === "" ? "h-8" : "text-cream/95 font-medium"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
