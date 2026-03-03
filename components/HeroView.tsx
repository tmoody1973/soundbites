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
          className="object-cover opacity-15 blur-2xl scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/80 to-warm-black" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Event label with gold line */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold font-sans font-medium">
            Sound & Flavor Pairing
          </span>
        </motion.div>

        {/* Album art thumbnail + title row */}
        <div className="flex items-start gap-5 mb-4">
          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-gold/20 shadow-xl shadow-gold/5 shrink-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Image
              src="/images/the-sisters-album.jpg"
              alt="The Sisters — Weldon Irvine"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          <div className="pt-1">
            <motion.h1
              className="font-serif italic text-gold-light text-4xl sm:text-5xl font-black leading-[1.05] mb-1"
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
              className="font-body italic text-citrus text-base sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              meets Citrus & Smoke
            </motion.p>
          </div>
        </div>

        {/* Credits */}
        <motion.div
          className="mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <p className="text-sm text-cream/70 font-sans">
            Chef Dane Baldwin{" "}
            <span className="text-gold/50 mx-1">&times;</span> DJ Tarik
          </p>
          <p className="text-xs text-muted font-sans mt-0.5">
            The Diplomat, Milwaukee
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
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
