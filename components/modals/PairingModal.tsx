"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function PairingModal() {
  return (
    <div className="space-y-6">
      {/* Big statement header — Wrapped-style */}
      <motion.div
        className="-mx-6 -mt-5 px-6 pt-6 pb-5 bg-gradient-to-b from-gold/[0.08] to-transparent"
        {...fadeUp}
        transition={{ delay: 0.05 }}
      >
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-gold/70 font-sans font-medium mb-3">
          Sound &amp; Flavor
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-cream-light leading-[0.95] italic">
          Morning Sunrise
        </h2>
        <p className="font-serif text-2xl text-citrus font-bold mt-2 leading-tight">
          meets Citrus Corn Muffin
        </p>
      </motion.div>

      {/* Album art + track info */}
      <motion.div
        className="flex items-center gap-4"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-gold/20 shadow-lg">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-sans text-sm text-cream/70 font-medium">
            Weldon Irvine
          </p>
          <p className="text-xs text-muted font-sans">
            The Sisters &middot; 1979 &middot; 3:13
          </p>
        </div>
      </motion.div>

      {/* Bold pull quote — the thesis */}
      <motion.p
        className="font-serif text-xl sm:text-2xl font-bold text-gold-light leading-snug"
        {...fadeUp}
        transition={{ delay: 0.18 }}
      >
        The fat melts slow.
        <br />
        <span className="text-cream/50 italic">The groove rides slow.</span>
        <br />
        Both ask you to take your time.
      </motion.p>

      {/* Story — compact and punchy */}
      <motion.div
        className="font-body text-[0.95rem] leading-[1.75] text-cream/80 space-y-3"
        {...fadeUp}
        transition={{ delay: 0.25 }}
      >
        <p>
          The track opens like first light through a kitchen window &mdash;
          honeyed vocals over warm Rhodes chords and an unhurried groove. The
          citrus corn muffin mirrors that brightness: golden sweetness lifted by
          orange and lemon zest.
        </p>
        <p>
          Then the confit pork belly: rich, deeply rendered, falling apart with
          a smoky tenderness that echoes the low-end warmth of the rhythm
          section. A pairing about patience and craft.
        </p>
      </motion.div>

      {/* Details — bold labels, small text */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        {...fadeUp}
        transition={{ delay: 0.32 }}
      >
        {[
          { label: "Track", value: "Morning Sunrise" },
          { label: "Album", value: "The Sisters" },
          { label: "Vocals", value: "Don Blackman" },
          { label: "Bass", value: "Marcus Miller" },
        ].map((item) => (
          <div key={item.label} className="border-l-2 border-gold/25 pl-3 py-1">
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-gold/60 font-sans font-medium">
              {item.label}
            </p>
            <p className="font-serif text-base text-cream-light font-bold leading-snug mt-0.5">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
