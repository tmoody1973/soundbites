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
