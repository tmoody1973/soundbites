"use client";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "motion/react";

export function QRCode() {
  return (
    <motion.div
      className="hidden md:flex fixed top-24 right-5 z-40 flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="bg-cream rounded-xl p-2.5 shadow-lg shadow-warm-black/40 border border-gold/20">
        <QRCodeSVG
          value="https://soundbites.vercel.app"
          size={100}
          bgColor="#FAF6EF"
          fgColor="#1A1612"
          level="M"
        />
      </div>
      <p className="text-[0.5rem] uppercase tracking-[0.2em] text-cream/40 font-sans font-medium text-center">
        Scan to listen
        <br />
        on your phone
      </p>
    </motion.div>
  );
}
