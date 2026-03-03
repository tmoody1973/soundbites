"use client";

import { motion } from "motion/react";

const parallels = [
  {
    label: "Brightness & Warmth",
    bold: "Citrus zest echoes the vocals",
    text: "shimmering above warm Rhodes \u2014 bright melody over a golden foundation.",
  },
  {
    label: "Low & Slow",
    bold: "Hours to render. No rush.",
    text: "Pork belly and this groove share the same unhurried confidence.",
  },
  {
    label: "Sweet Meets Soul",
    bold: "Corn muffin meets deep funk",
    text: "sweetness and richness in perfect balance. Comfort on every level.",
  },
  {
    label: "Morning Energy",
    bold: "Made with care. Savored slowly.",
    text: "The kind of start that sets the tone for everything after.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function WhyModal() {
  return (
    <div className="space-y-6">
      {/* Giant header — Wrapped style */}
      <motion.div
        className="-mx-6 -mt-5 px-6 pt-6 pb-5 bg-gradient-to-b from-gold/[0.08] to-transparent"
        {...fadeUp}
        transition={{ delay: 0.05 }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-cream-light leading-[0.9]">
          Why It
          <br />
          <span className="text-gold italic">Works</span>
        </h2>
        <div className="mt-3">
          <p className="font-serif text-xl text-cream/80 font-bold">
            Chef Dane Baldwin
          </p>
          <p className="text-sm text-cream/50 font-sans">
            The Diplomat &mdash; Milwaukee, WI
          </p>
        </div>
      </motion.div>

      {/* Big thesis statement */}
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        <p className="font-serif text-xl sm:text-2xl font-bold text-cream-light leading-snug">
          Citrus Corn Muffin
          <br />
          <span className="text-citrus italic">with Confit Pork Belly</span>
        </p>
        <p className="text-sm text-cream/50 font-sans mt-2">
          A dish of patience paired with a song of effortless warmth.
        </p>
      </motion.div>

      {/* Parallel cards — stacked for impact */}
      <div className="space-y-3">
        {parallels.map((item, i) => (
          <motion.div
            key={item.label}
            className="border-l-3 border-gold/30 pl-4 py-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
          >
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-citrus font-sans font-bold mb-1">
              {item.label}
            </p>
            <p className="font-serif text-lg text-cream-light font-bold leading-snug">
              {item.bold}
            </p>
            <p className="font-body text-sm text-cream/60 leading-relaxed mt-0.5">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
