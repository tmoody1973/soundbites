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
    <div className="space-y-6">
      {/* Photo gallery */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        {...fadeUp}
        transition={{ delay: 0.1 }}
      >
        <div className="col-span-2 aspect-square relative rounded-sm overflow-hidden">
          <Image
            src="/images/the-sisters-album.jpg"
            alt="The Sisters album art"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[3/4] relative rounded-sm overflow-hidden">
          <Image
            src="/images/weldon-color.jpeg"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[3/4] relative rounded-sm overflow-hidden">
          <Image
            src="/images/weldon-bw.webp"
            alt="Weldon Irvine"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Name and years */}
      <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
          The Artist
        </p>
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-2xl font-bold text-cream-light">
            Weldon Irvine
          </h3>
          <span className="text-sm text-muted">1943 &mdash; 2002</span>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="font-body text-[0.95rem] leading-[1.75] text-cream/80 space-y-3"
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
          &ldquo;Morning Sunrise,&rdquo; from his album <em>The Sisters</em>
          &mdash; a collection of late-&apos;70s sessions with Don Blackman and a
          young Marcus Miller &mdash; has been sampled by Jay-Z, Drake, and
          countless others, ensuring his warmth reverberates well beyond his
          years.
        </p>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.4 }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-gold/20 rounded-sm text-muted"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
