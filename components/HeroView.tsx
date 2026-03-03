"use client";

import { motion } from "motion/react";
import { SectionCard } from "@/components/SectionCard";

type ModalType = "artist" | "lyrics" | "pairing" | "why";

interface HeroViewProps {
  onOpenModal: (modal: ModalType) => void;
}

const sections: { key: ModalType; label: string; sublabel: string }[] = [
  { key: "artist", label: "The Artist", sublabel: "Weldon Irvine" },
  { key: "lyrics", label: "Lyrics", sublabel: "Morning Sunrise" },
  { key: "pairing", label: "The Pairing", sublabel: "Citrus & Smoke" },
  { key: "why", label: "Why It Works", sublabel: "Sound & Flavor" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export function HeroView({ onOpenModal }: HeroViewProps) {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center px-8 pb-28">
      {/* Event label with gold line */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="h-px w-8 bg-gold/50" />
        <span className="text-xs uppercase tracking-[0.2em] text-gold/70 font-sans">
          Sound & Flavor Pairing
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        className="font-serif italic text-gold-light text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Morning Sunrise
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-body italic text-citrus text-xl sm:text-2xl mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        meets Citrus & Smoke
      </motion.p>

      {/* Credits */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <p className="text-sm text-cream/60 font-sans">
          Chef Dane Baldwin &times; DJ Tarik
        </p>
        <p className="text-xs text-muted font-sans mt-0.5">
          The Diplomat, Milwaukee
        </p>
      </motion.div>

      {/* 2x2 grid of SectionCards */}
      <div className="grid grid-cols-2 gap-3 max-w-md">
        {sections.map((section, i) => (
          <motion.div
            key={section.key}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4 + i}
          >
            <SectionCard
              layoutId={`card-${section.key}`}
              label={section.label}
              sublabel={section.sublabel}
              onClick={() => onOpenModal(section.key)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
