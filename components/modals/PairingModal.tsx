"use client";

import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function PairingModal() {
  return (
    <div className="space-y-6">
      {/* Pairing text */}
      <motion.div
        className="font-body text-[1.05rem] leading-[1.85] text-cream/90 space-y-5"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        <p className="first-letter:font-serif first-letter:text-[3.6rem] first-letter:float-left first-letter:leading-[0.75] first-letter:mr-2 first-letter:mt-1 first-letter:text-gold-light first-letter:font-bold">
          Weldon Irvine&apos;s &ldquo;Morning Sunrise&rdquo; opens like the
          first light through a kitchen window &mdash; Don Blackman&apos;s
          honeyed vocals floating over warm Rhodes chords and an unhurried groove
          that feels like it was made for the quiet hours before the world speeds
          up. It&apos;s mellow soul at its most intimate, the kind of record
          that turns a moment into a ritual.
        </p>
        <p>
          That same slow warmth lives in this dish. The citrus corn muffin brings
          brightness and grain &mdash; a soft, golden sweetness lifted by notes
          of orange and lemon zest, the way Irvine&apos;s keys shimmer with
          light even as the bassline keeps everything grounded. Then the confit
          pork belly arrives: rich, deeply rendered, falling apart with a smoky
          tenderness that mirrors the low-end warmth of the track&apos;s rhythm
          section. The fat melts slow, the groove rides slow. Both ask you to
          take your time.
        </p>
        <p>
          This is a pairing about patience and craft &mdash; the hours it takes
          to confit pork belly until it yields completely, and the years of
          musical brilliance Irvine poured into a track that sounds effortless.
          Citrus cuts through richness the way Blackman&apos;s voice lifts above
          the instrumentation. Sweetness and depth. Brightness and soul. The
          first meal of the day, set to its perfect soundtrack.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
      </div>

      {/* Track details grid */}
      <motion.div
        className="grid grid-cols-2 gap-5"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        {[
          { label: "Track", value: "Morning Sunrise", sub: "3:13" },
          {
            label: "Album",
            value: "The Sisters",
            sub: "Recorded late 1970s \u00B7 Released 1998",
          },
          {
            label: "Musicians",
            value: "Don Blackman, Marcus Miller",
            sub: "Vocals, bass & keys",
          },
          {
            label: "The Dish",
            value: "Citrus Corn Muffin",
            sub: "with Confit Pork Belly",
          },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
              {item.label}
            </p>
            <p className="font-serif text-base text-cream-light">
              {item.value}
            </p>
            <p className="text-xs text-muted mt-0.5">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
