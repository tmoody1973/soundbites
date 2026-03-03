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

      {/* Photos left (small, sticky), all bio text right */}
      <motion.div
        className="flex gap-4"
        {...fadeUp}
        transition={{ delay: 0.12 }}
      >
        {/* Left column — two small photos stacked */}
        <div className="w-[22%] flex-shrink-0 flex flex-col gap-2 sticky top-0 self-start">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-gold/15">
            <Image
              src="/images/weldon-color.jpeg"
              alt="Weldon Irvine"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-gold/15">
            <Image
              src="/images/weldon-bw.webp"
              alt="Weldon Irvine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right column — full bio */}
        <div className="flex-1 font-body text-[0.9rem] leading-[1.75] text-cream/85 space-y-4">
          <p className="font-serif text-lg text-gold-light font-bold italic leading-snug">
            Keyboardist. Composer. Poet. Playwright. Nina Simone&apos;s
            bandleader. Hip-hop&apos;s quiet godfather.
          </p>

          <p>
            Weldon Jonathan Irvine Jr. was born in Hampton, Virginia and moved
            to New York City in 1965, settling in St. Albans, Queens. In 1970,
            Nina Simone enlisted him as her bandleader &mdash; a partnership
            that produced one of the most important songs of the era. Irvine
            wrote the lyrics to &ldquo;To Be Young, Gifted and Black,&rdquo;
            first performed on Simone&apos;s{" "}
            <em className="text-citrus">Black Gold</em> album. It became the
            unofficial anthem of the Civil Rights movement, later covered by
            Aretha Franklin, Stevie Wonder, and Donny Hathaway.
          </p>

          <p>
            After leaving Simone&apos;s ensemble, Irvine established his own
            17-piece jazz group featuring Billy Cobham, Randy Brecker, and Don
            Blackman. His early &apos;70s albums{" "}
            <em className="text-citrus">Liberated Brother</em> and{" "}
            <em className="text-citrus">Time Capsule</em> on RCA and Strata-East
            showcased his singular fusion of jazz improvisation, deep funk
            grooves, and poetic consciousness. He wrote more than 500 songs
            across his career.
          </p>

          <p>
            <em className="text-citrus">The Sisters</em> is a collection of
            lost tracks and demos from his late-1970s studio sessions with
            fellow jazz-funk luminary Don Blackman. Blackman&apos;s honeyed
            vocals float over Irvine&apos;s warm Rhodes chords while a young
            Marcus Miller holds down the bass. &ldquo;Morning Sunrise&rdquo;
            &mdash; the track you&apos;re hearing tonight &mdash; captures
            everything that made Weldon essential: warmth, patience, and a
            melody that feels like sunlight.
          </p>

          {/* Legacy section */}
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-sans font-medium pt-2">
            The Legacy
          </p>

          <p>
            Where many legacy musicians fought hip-hop&apos;s rise in the
            courts, Irvine embraced it. When A Tribe Called Quest flipped his
            1975 cut &ldquo;We Gettin&apos; Down&rdquo; into &ldquo;Award
            Tour&rdquo; &mdash; one of the most iconic hip-hop tracks ever
            &mdash; Irvine didn&apos;t send lawyers. He offered mentorship.
            Q-Tip sampled his Rhodes keyboard work and later explained:{" "}
            <em className="text-cream/60">
              &ldquo;It&apos;s all about that bassline... I got that Rhodes to
              counter the melody.&rdquo;
            </em>
          </p>

          <p>
            He gave piano lessons to Q-Tip and Common while learning to rap
            himself as &ldquo;Master Wel.&rdquo; In 1999, he released{" "}
            <em className="text-citrus">
              The Amadou Project: The Price of Freedom
            </em>
            , featuring Mos Def, Talib Kweli, and Q-Tip, addressing police
            brutality. He arranged keys and strings on Mos Def&apos;s{" "}
            <em className="text-citrus">Black on Both Sides</em> and performed
            on Black Star&apos;s &ldquo;Astronomy (8th Light).&rdquo;
          </p>

          <p>
            His music has been sampled by Jay-Z, Drake, Earl Sweatshirt, and
            countless others. After his passing, Madlib produced{" "}
            <em className="text-citrus">A Tribute to Brother Weldon</em>{" "}
            &mdash; a full-length album honoring a musician whose fingerprints
            are all over the music we love today.
          </p>
        </div>
      </motion.div>

      {/* Tags row */}
      <motion.div
        className="flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        {[
          "Jazz-Funk",
          "Soul",
          "Keys",
          "Composer",
          "Poet",
          "Playwright",
          "500+ Songs",
        ].map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] tracking-[0.12em] uppercase px-3 py-1.5 border border-gold/25 rounded-full text-gold/70 font-sans font-semibold bg-gold/[0.05]"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
