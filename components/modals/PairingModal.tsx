"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function PairingModal() {
  return (
    <div className="space-y-8">
      {/* Visual header — album art as blurred banner behind title */}
      <motion.div
        className="relative -mx-6 -mt-5 h-40 overflow-hidden"
        {...fadeUp}
        transition={{ delay: 0.05 }}
      >
        <Image
          src="/images/the-sisters-album.jpg"
          alt=""
          fill
          className="object-cover blur-md scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-dark via-warm-dark/60 to-warm-dark/30" />
        <div className="absolute bottom-5 left-6 right-6">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-1">
            Sound & Flavor
          </p>
          <h3 className="font-serif text-3xl font-black text-cream-light italic leading-tight">
            The Pairing
          </h3>
        </div>
      </motion.div>

      {/* Pairing text — dramatic drop cap */}
      <motion.div
        className="font-body text-[1.05rem] leading-[1.9] text-cream/90 space-y-6"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        <p className="first-letter:font-serif first-letter:text-[4.5rem] first-letter:float-left first-letter:leading-[0.7] first-letter:mr-3 first-letter:mt-1.5 first-letter:text-gold first-letter:font-black first-letter:drop-shadow-lg">
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

      {/* Gold accent divider */}
      <div className="flex items-center gap-3 py-1">
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </div>

      {/* Track details grid — gold borders and accents */}
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
          <div
            key={item.label}
            className="border-t-2 border-gold/30 pt-4 pb-2"
          >
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-1.5">
              {item.label}
            </p>
            <p className="font-serif text-lg text-cream-light font-semibold leading-snug">
              {item.value}
            </p>
            <p className="text-xs text-muted mt-1 font-sans">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
