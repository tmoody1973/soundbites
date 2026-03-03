"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Atmosphere } from "@/components/Atmosphere";
import { HeroView } from "@/components/HeroView";
import { ExpandableModal } from "@/components/ExpandableModal";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ArtistModal } from "@/components/modals/ArtistModal";
import { LyricsModal } from "@/components/modals/LyricsModal";
import { PairingModal } from "@/components/modals/PairingModal";
import { WhyModal } from "@/components/modals/WhyModal";

type ModalType = "artist" | "lyrics" | "pairing" | "why" | null;

const modalTitles: Record<string, string> = {
  artist: "The Artist",
  lyrics: "Lyrics",
  pairing: "The Pairing",
  why: "Why It Works",
};

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null;
    async function requestWakeLock() {
      try {
        if ("wakeLock" in navigator) {
          wakeLock = await navigator.wakeLock.request("screen");
        }
      } catch {
        // Wake Lock API not supported or failed — non-critical
      }
    }
    requestWakeLock();
    // Re-acquire on visibility change (when tab becomes visible again)
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") requestWakeLock();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      wakeLock?.release();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <main className="h-dvh relative overflow-hidden">
      <Atmosphere />
      <HeroView onOpenModal={setActiveModal} />
      <AnimatePresence>
        {activeModal && (
          <ExpandableModal
            key={activeModal}
            layoutId={`card-${activeModal}`}
            title={modalTitles[activeModal]}
            onClose={() => setActiveModal(null)}
          >
            {activeModal === "artist" && <ArtistModal />}
            {activeModal === "lyrics" && <LyricsModal />}
            {activeModal === "pairing" && <PairingModal />}
            {activeModal === "why" && <WhyModal />}
          </ExpandableModal>
        )}
      </AnimatePresence>
      <AudioPlayer />
    </main>
  );
}
