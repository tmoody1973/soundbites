"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionCard } from "@/components/SectionCard";

type ModalType = "artist" | "lyrics" | "pairing" | "why";

interface HeroViewProps {
  onOpenModal: (modal: ModalType) => void;
}

const sections: {
  key: ModalType;
  label: string;
  sublabel: string;
  image: string;
}[] = [
  {
    key: "artist",
    label: "The Artist",
    sublabel: "Weldon Irvine",
    image: "/images/weldon-bw.webp",
  },
  {
    key: "lyrics",
    label: "Lyrics",
    sublabel: "Morning Sunrise",
    image: "/images/the-sisters-album.jpg",
  },
  {
    key: "pairing",
    label: "The Pairing",
    sublabel: "Citrus & Smoke",
    image: "/images/weldon-color.jpeg",
  },
  {
    key: "why",
    label: "Why It Works",
    sublabel: "Sound & Flavor",
    image: "/images/the-sisters-album.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function HeroView({ onOpenModal }: HeroViewProps) {
  return (
    <div className="relative z-10 h-full flex flex-col px-6 pb-28 pt-6 overflow-hidden">
      {/* Album art hero background — large, blurred, behind everything */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/the-sisters-album.jpg"
          alt=""
          fill
          className="object-cover opacity-20 blur-2xl scale-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-warm-black/70 to-warm-black/95" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Event label with gold line */}
        <motion.div
          className="flex items-center gap-3 mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="h-px w-10 bg-gold/60" />
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gold font-sans font-medium">
            Sound & Flavor Pairing
          </span>
          <div className="h-px flex-1 bg-gold/20" />
        </motion.div>

        {/* Large album art centrepiece */}
        <motion.div
          className="relative w-full aspect-[4/3] max-h-[38vh] rounded-2xl overflow-hidden mb-5 border border-gold/25 shadow-2xl shadow-gold/10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters — Weldon Irvine"
            fill
            className="object-cover"
            priority
          />
          {/* Cinematic gradient overlay on bottom portion */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-transparent to-transparent" />
          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <motion.h1
              className="font-serif italic text-gold-light text-5xl sm:text-6xl font-black leading-[1.0] mb-1 drop-shadow-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Morning
              <br />
              Sunrise
            </motion.h1>
            <motion.p
              className="font-body italic text-citrus text-lg sm:text-xl drop-shadow-md"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              meets Citrus & Smoke
            </motion.p>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          className="mb-4 flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <div>
            <p className="text-base text-cream/80 font-sans font-medium">
              Chef Dane Baldwin{" "}
              <span className="text-gold/60 mx-1.5">&times;</span> DJ Tarik
            </p>
            <p className="text-xs text-muted font-sans mt-0.5">
              The Diplomat, Milwaukee
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className="w-2 h-2 rounded-full bg-gold/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
        </motion.div>

        {/* 2x2 grid of SectionCards with images */}
        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          {sections.map((section, i) => (
            <motion.div
              key={section.key}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6 + i}
              className="min-h-0"
            >
              <SectionCard
                layoutId={`card-${section.key}`}
                label={section.label}
                sublabel={section.sublabel}
                image={section.image}
                onClick={() => onOpenModal(section.key)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
