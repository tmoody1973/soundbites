"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const tags = ["Jazz-Funk", "Soul", "Hampton, VA", "Keys", "Composer"];

export function ArtistModal() {
  return (
    <div className="space-y-8">
      {/* Full-width hero album art — edge to edge */}
      <motion.div
        className="relative -mx-6 -mt-5 aspect-[16/10] overflow-hidden"
        {...fadeUp}
        transition={{ delay: 0.05 }}
      >
        <Image
          src="/images/the-sisters-album.jpg"
          alt="The Sisters album art"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-dark via-warm-dark/20 to-transparent" />
        {/* Album title overlay */}
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-1">
            The Album
          </p>
          <p className="font-serif text-2xl font-bold text-cream-light italic">
            The Sisters
          </p>
        </div>
      </motion.div>

      {/* Large Weldon photos — prominent, side by side */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/20 shadow-lg shadow-gold/5">
          <Image
            src="/images/weldon-color.jpeg"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/20 shadow-lg shadow-gold/5">
          <Image
            src="/images/weldon-bw.webp"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Gold accent divider */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </div>

      {/* Name and years — big and bold */}
      <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-sans font-medium mb-2">
          The Artist
        </p>
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-4xl font-black text-cream-light leading-tight">
            Weldon Irvine
          </h3>
          <span className="text-base text-muted font-sans">1943 &mdash; 2002</span>
        </div>
      </motion.div>

      {/* Bio — well-spaced, refined typography */}
      <motion.div
        className="font-body text-[1rem] leading-[1.85] text-cream/85 space-y-5"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        <p>
          Keyboardist, composer, poet, and playwright from Hampton, Virginia
          &mdash; Weldon Irvine is one of jazz-funk&apos;s most quietly towering
          figures. He served as Nina Simone&apos;s bandleader and co-wrote
          &ldquo;To Be Young, Gifted and Black,&rdquo; which became an anthem of
          the Civil Rights movement.
        </p>
        <p>
          Throughout the 1970s, he released a string of visionary albums on RCA
          and Strata-East, blending jazz, funk, and soul into something entirely
          his own. His influence bridged generations: A Tribe Called Quest, Mos
          Def, Q-Tip, and Common all studied at Weldon&apos;s feet.
        </p>
        <p>
          &ldquo;Morning Sunrise,&rdquo; from his album <em className="text-citrus">The Sisters</em>
          &mdash; a collection of late-&apos;70s sessions with Don Blackman and a
          young Marcus Miller &mdash; has been sampled by Jay-Z, Drake, and
          countless others, ensuring his warmth reverberates well beyond his
          years.
        </p>
      </motion.div>

      {/* Gold accent divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
      </div>

      {/* Tags — polished, with gold accents */}
      <motion.div
        className="flex flex-wrap gap-2.5"
        {...fadeUp}
        transition={{ delay: 0.4 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] tracking-[0.15em] uppercase px-4 py-2 border border-gold/30 rounded-full text-gold/80 font-sans font-medium bg-gold/5"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
