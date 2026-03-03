"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface SectionCardProps {
  layoutId: string;
  label: string;
  sublabel: string;
  image?: string;
  onClick: () => void;
}

export function SectionCard({
  layoutId,
  label,
  sublabel,
  image,
  onClick,
}: SectionCardProps) {
  return (
    <motion.button
      layoutId={layoutId}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className="relative w-full aspect-[3/4] rounded-2xl border border-gold/20 overflow-hidden
        text-left cursor-pointer
        shadow-[0_0_16px_rgba(212,168,83,0.08)]
        hover:border-gold/40 hover:shadow-[0_0_24px_rgba(212,168,83,0.15)]
        transition-[border-color,box-shadow] duration-300"
    >
      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      )}
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-black/90 via-warm-black/40 to-transparent" />
      {/* Text content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-sans mb-1">
          {sublabel}
        </span>
        <span className="block text-lg font-serif text-cream-light font-bold leading-tight">
          {label}
        </span>
      </div>
    </motion.button>
  );
}
