"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function ArtistModal() {
  return (
    <div className="space-y-6">
      {/* Giant name — Wrapped-style hero text */}
      <motion.div
        className="-mx-6 -mt-5 px-6 pt-6 pb-5 bg-gradient-to-b from-gold/[0.08] to-transparent"
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
        <p className="text-lg text-muted font-sans mt-3 font-light">
          1943 &mdash; 2002
        </p>
      </motion.div>

      {/* Photos — stacked impact, one big + album art beside it */}
      <motion.div
        className="flex gap-3 items-stretch"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden border border-gold/15">
          <Image
            src="/images/weldon-color.jpeg"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 w-[40%]">
          <div className="relative flex-1 rounded-2xl overflow-hidden border border-gold/15">
            <Image
              src="/images/weldon-bw.webp"
              alt="Weldon Irvine"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-24 rounded-xl overflow-hidden border border-gold/20">
            <Image
              src="/images/the-sisters-album.jpg"
              alt="The Sisters"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-warm-black/40 flex items-end p-2">
              <p className="text-[0.55rem] uppercase tracking-widest text-cream/70 font-sans font-medium">
                The Sisters &middot; 1998
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bold pull quote — Wrapped style big statement */}
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.2 }}
      >
        <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-light leading-snug italic">
          Nina Simone&apos;s bandleader.
          <br />
          <span className="text-cream/60">
            Co-wrote &ldquo;To Be Young, Gifted and Black.&rdquo;
          </span>
        </p>
      </motion.div>

      {/* Bio — compact, punchy */}
      <motion.div
        className="font-body text-[0.95rem] leading-[1.75] text-cream/80 space-y-3"
        {...fadeUp}
        transition={{ delay: 0.28 }}
      >
        <p>
          His &apos;70s albums blended jazz, funk, and soul into something
          entirely his own. A Tribe Called Quest, Mos Def, and Common all
          studied at Weldon&apos;s feet.
        </p>
        <p>
          &ldquo;Morning Sunrise&rdquo; from{" "}
          <em className="text-citrus font-semibold">The Sisters</em> has been
          sampled by Jay-Z, Drake, and countless others.
        </p>
      </motion.div>

      {/* Tags — bold pills */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.35 }}
      >
        {["Jazz-Funk", "Soul", "Hampton, VA", "Keys", "Composer"].map((tag) => (
          <span
            key={tag}
            className="text-[0.65rem] tracking-[0.12em] uppercase px-3.5 py-1.5 border border-gold/30 rounded-full text-gold/80 font-sans font-semibold bg-gold/[0.06]"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
