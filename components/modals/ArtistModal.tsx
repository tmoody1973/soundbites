"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function ArtistModal() {
  return (
    <div className="space-y-5">
      {/* Giant name header — Wrapped-style */}
      <motion.div
        className="-mx-6 -mt-5 px-6 pt-6 pb-4 bg-gradient-to-b from-gold/[0.08] to-transparent"
        {...fadeUp}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-gold/70 font-sans font-medium mb-2">
          The Artist
        </p>
        <h2 className="font-serif text-5xl sm:text-6xl font-black text-cream-light leading-[0.9] tracking-tight">
          Weldon
          <br />
          Irvine
        </h2>
        <p className="text-base text-muted font-sans mt-2 font-light">
          1943 &mdash; 2002
        </p>
      </motion.div>

      {/* 3-column grid: portrait, B&W, album art — compact and balanced */}
      <motion.div
        className="grid grid-cols-3 gap-2.5"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/15">
          <Image
            src="/images/weldon-color.jpeg"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/15">
          <Image
            src="/images/weldon-bw.webp"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/20">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-[0.5rem] uppercase tracking-widest text-cream/80 font-sans font-medium leading-tight">
              The Sisters
            </p>
            <p className="text-[0.45rem] text-cream/50 font-sans">1979</p>
          </div>
        </div>
      </motion.div>

      {/* Bold pull quote */}
      <motion.p
        className="font-serif text-xl sm:text-2xl font-bold text-gold-light leading-snug italic"
        {...fadeUp}
        transition={{ delay: 0.2 }}
      >
        Nina Simone&apos;s bandleader.
        <br />
        <span className="text-cream/50">
          Co-wrote &ldquo;To Be Young, Gifted and Black.&rdquo;
        </span>
      </motion.p>

      {/* Bio — concise, two paragraphs */}
      <motion.div
        className="font-body text-[0.95rem] leading-[1.75] text-cream/80 space-y-3"
        {...fadeUp}
        transition={{ delay: 0.28 }}
      >
        <p>
          His &apos;70s albums on RCA and Strata-East blended jazz, funk, and
          soul into something entirely his own. A Tribe Called Quest, Mos Def,
          and Common all studied at Weldon&apos;s feet.
        </p>
        <p>
          &ldquo;Morning Sunrise&rdquo; from{" "}
          <em className="text-citrus font-semibold">The Sisters</em> has been
          sampled by Jay-Z, Drake, and countless others &mdash; ensuring his
          warmth reverberates well beyond his years.
        </p>
      </motion.div>

      {/* Tags row */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.35 }}
      >
        {["Jazz-Funk", "Soul", "Hampton, VA", "Keys", "Composer"].map(
          (tag) => (
            <span
              key={tag}
              className="text-[0.6rem] tracking-[0.12em] uppercase px-3 py-1.5 border border-gold/25 rounded-full text-gold/70 font-sans font-semibold bg-gold/[0.05]"
            >
              {tag}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}
