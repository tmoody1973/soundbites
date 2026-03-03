"use client";

import { motion } from "motion/react";

interface SectionCardProps {
  layoutId: string;
  label: string;
  sublabel: string;
  onClick: () => void;
}

export function SectionCard({
  layoutId,
  label,
  sublabel,
  onClick,
}: SectionCardProps) {
  return (
    <motion.button
      layoutId={layoutId}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className="relative rounded-2xl border border-gold/20 bg-warm-dark/60 backdrop-blur-sm
        px-4 py-5 text-left cursor-pointer
        shadow-[0_0_12px_rgba(212,168,83,0.06)]
        hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,168,83,0.12)]
        transition-[border-color,box-shadow] duration-300"
    >
      <span className="block text-[11px] uppercase tracking-[0.15em] text-muted font-sans mb-1">
        {sublabel}
      </span>
      <span className="block text-base font-serif text-cream font-semibold">
        {label}
      </span>
    </motion.button>
  );
}
