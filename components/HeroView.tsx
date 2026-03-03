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

// Lyrics excerpt for the scrolling marquee
const lyricsMarquee =
  "Morning sunrise \u2022 Hello, morning, you look good, good to me \u2022 Kissing the sky, I can feel it move me \u2022 Morning sunrise \u2022 Flowers will bloom in the spring \u2022 I said it\u2019s a beautiful morning sunrise \u2022 ";

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
      {/* Album art hero background — large, blurred */}
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
        {/* Event label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
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

        {/* Album art + title */}
        <motion.div
          className="relative w-full aspect-[4/3] max-h-[32vh] rounded-2xl overflow-hidden mb-4 border border-gold/25 shadow-2xl shadow-gold/10"
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
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-transparent to-transparent" />
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
              meets Citrus &amp; Smoke
            </motion.p>
          </div>
        </motion.div>

        {/* ---- PAIRING INFO: Song + Dish clearly stated ---- */}
        <motion.div
          className="flex items-stretch gap-3 mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {/* The Song */}
          <div className="flex-1 bg-warm-dark/70 border border-gold/15 rounded-xl px-4 py-3">
            <p className="text-[0.55rem] uppercase tracking-[0.25em] text-gold font-sans font-medium mb-0.5">
              The Song
            </p>
            <p className="font-serif text-cream-light text-sm font-bold leading-tight">
              Morning Sunrise
            </p>
            <p className="text-[0.7rem] text-muted mt-0.5">
              Weldon Irvine &middot; <em>The Sisters</em>
            </p>
          </div>
          {/* The Dish */}
          <div className="flex-1 bg-warm-dark/70 border border-gold/15 rounded-xl px-4 py-3">
            <p className="text-[0.55rem] uppercase tracking-[0.25em] text-gold font-sans font-medium mb-0.5">
              The Dish
            </p>
            <p className="font-serif text-cream-light text-sm font-bold leading-tight">
              Citrus Corn Muffin
            </p>
            <p className="text-[0.7rem] text-citrus italic mt-0.5">
              with Confit Pork Belly
            </p>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          className="flex items-center justify-between mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div>
            <p className="text-sm text-cream/70 font-sans">
              Chef Dane Baldwin{" "}
              <span className="text-gold/50 mx-1">&times;</span> DJ Tarik
            </p>
            <p className="text-[0.65rem] text-muted font-sans mt-0.5">
              The Diplomat, Milwaukee
            </p>
          </div>
        </motion.div>

        {/* ---- SCROLLING LYRICS MARQUEE ---- */}
        <motion.div
          className="relative overflow-hidden mb-3 py-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-warm-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-warm-black to-transparent z-10" />
          {/* Scrolling text — duplicated for seamless loop */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            <span className="font-body italic text-gold/25 text-lg tracking-wide">
              {lyricsMarquee}
            </span>
            <span className="font-body italic text-gold/25 text-lg tracking-wide">
              {lyricsMarquee}
            </span>
          </motion.div>
        </motion.div>

        {/* 2x2 grid of SectionCards */}
        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          {sections.map((section, i) => (
            <motion.div
              key={section.key}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7 + i}
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
