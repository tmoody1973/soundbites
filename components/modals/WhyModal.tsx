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
      {/* Chef section */}
      <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Chef
        </p>
        <h3 className="font-serif text-2xl font-bold text-cream-light">
          Dane Baldwin
        </h3>
        <p className="text-sm text-muted mt-0.5">
          The Diplomat &mdash; Milwaukee, WI
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Dish
        </p>
        <h3 className="font-serif text-xl font-bold text-cream-light">
          Citrus Corn Muffin
        </h3>
        <p className="text-sm text-citrus italic mt-0.5">
          with Confit Pork Belly
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
      </div>

      {/* Why cards */}
      {parallels.map((item, i) => (
        <motion.div
          key={item.label}
          className="pt-4 border-t border-gold/10"
          {...fadeUp}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-citrus font-medium mb-2">
            {item.label}
          </p>
          <p className="font-body text-[0.92rem] leading-[1.7] text-cream/85">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
