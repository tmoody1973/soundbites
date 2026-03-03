"use client";

import { motion } from "motion/react";

// Placeholder -- user will provide actual lyrics
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
