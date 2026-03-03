"use client";

import { motion } from "motion/react";

const parallels = [
  {
    label: "Brightness & Warmth",
    text: "Citrus zest in the muffin echoes the way Don Blackman\u2019s vocals shimmer above Irvine\u2019s warm Rhodes \u2014 a bright melody over a golden, grounded foundation.",
  },
  {
    label: "Low & Slow",
    text: "Confit pork belly is rendered over hours until it\u2019s impossibly tender. The track moves with the same unhurried confidence \u2014 deep groove, no rush, all feel.",
  },
  {
    label: "Sweet Meets Soul",
    text: "The corn muffin\u2019s natural sweetness paired with rich pork mirrors the track\u2019s balance of smooth melody and deep funk undertow. Comfort on every level.",
  },
  {
    label: "Morning Energy",
    text: "Both the song and dish carry the spirit of a deliberate morning \u2014 something made with care, savored slowly, the kind of start that sets the tone for everything after.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function WhyModal() {
  return (
    <div className="space-y-8">
      {/* Chef section — bold visual header */}
      <motion.div
        className="relative -mx-6 -mt-5 px-6 pt-8 pb-6 overflow-hidden"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        {/* Subtle warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-warm-dark to-warm-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/30 via-gold/15 to-transparent" />
        <div className="relative">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-2">
            The Chef
          </p>
          <h3 className="font-serif text-4xl font-black text-cream-light leading-tight mb-1">
            Dane Baldwin
          </h3>
          <p className="text-base text-muted font-sans">
            The Diplomat &mdash; Milwaukee, WI
          </p>
        </div>
      </motion.div>

      {/* Dish info */}
      <motion.div
        className="border-l-2 border-gold/40 pl-5"
        {...fadeUp}
        transition={{ delay: 0.15 }}
      >
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-sans font-medium mb-1.5">
          The Dish
        </p>
        <h3 className="font-serif text-2xl font-bold text-cream-light">
          Citrus Corn Muffin
        </h3>
        <p className="text-base text-citrus italic mt-1 font-body">
          with Confit Pork Belly
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </div>

      {/* Section title */}
      <motion.p
        className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-sans font-medium"
        {...fadeUp}
        transition={{ delay: 0.2 }}
      >
        Why It Works
      </motion.p>

      {/* Why cards — museum exhibit style */}
      {parallels.map((item, i) => (
        <motion.div
          key={item.label}
          className="relative border-t-2 border-gold/30 pt-5 pb-2 bg-gold/[0.03] -mx-3 px-5 rounded-lg"
          {...fadeUp}
          transition={{ delay: 0.25 + i * 0.1 }}
        >
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-citrus font-sans font-semibold mb-3">
            {item.label}
          </p>
          <p className="font-body text-[0.95rem] leading-[1.8] text-cream/90">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
