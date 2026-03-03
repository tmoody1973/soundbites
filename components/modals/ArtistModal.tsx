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
      {/* Giant name header */}
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
          1943 &mdash; 2002 &middot; Hampton, Virginia
        </p>
      </motion.div>

      {/* Two-column layout: photos left, bio right */}
      <motion.div
        className="flex gap-4"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        {/* Left column — two photos stacked */}
        <div className="w-[35%] flex-shrink-0 flex flex-col gap-2.5">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-gold/15">
            <Image
              src="/images/weldon-color.jpeg"
              alt="Weldon Irvine"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden border border-gold/15">
            <Image
              src="/images/weldon-bw.webp"
              alt="Weldon Irvine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right column — bio */}
        <div className="flex-1 font-body text-[0.85rem] leading-[1.7] text-cream/80 space-y-3">
          <p className="font-serif text-lg text-gold-light font-bold italic leading-snug">
            Nina Simone&apos;s bandleader. Co-writer of &ldquo;To Be Young,
            Gifted and Black.&rdquo;
          </p>
          <p>
            Weldon Irvine was a keyboardist, composer, poet, and playwright
            whose career bridged jazz, funk, soul, and spoken word. Born in
            Hampton, Virginia, he emerged from the same rich musical tradition
            that produced Ella Fitzgerald and the Hampton Institute&apos;s legacy
            of Black artistry.
          </p>
          <p>
            In the early &apos;70s, he served as Nina Simone&apos;s musical
            director and co-wrote what became an anthem of the Civil Rights
            movement. He went on to release a string of visionary albums on RCA
            and Strata-East that blended jazz improvisation with deep funk
            grooves and poetic lyricism.
          </p>
        </div>
      </motion.div>

      {/* Continued bio — full width */}
      <motion.div
        className="font-body text-[0.85rem] leading-[1.7] text-cream/80 space-y-3"
        {...fadeUp}
        transition={{ delay: 0.22 }}
      >
        <p>
          His influence ran deep through hip-hop: A Tribe Called Quest, Mos Def,
          Q-Tip, and Common all studied at Weldon&apos;s feet, sampling his
          records and absorbing his philosophy of music as spiritual practice.
          &ldquo;Morning Sunrise,&rdquo; from his album{" "}
          <em className="text-citrus font-semibold">The Sisters</em> &mdash; a
          collection of late-&apos;70s sessions featuring Don Blackman on vocals
          and a young Marcus Miller on bass &mdash; captures everything that
          made him essential: warm Rhodes chords, an unhurried groove, and a
          melody that feels like sunlight.
        </p>
        <p>
          The track has since been sampled by Jay-Z, Drake, and countless others,
          ensuring that Weldon&apos;s warmth reverberates well beyond his years.
          He remains one of jazz-funk&apos;s most quietly towering figures
          &mdash; a musician&apos;s musician whose fingerprints are all over the
          music we love today.
        </p>
      </motion.div>

      {/* Tags row */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        {["Jazz-Funk", "Soul", "Keys", "Composer", "Poet", "Playwright"].map(
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
