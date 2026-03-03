"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Atmosphere } from "@/components/Atmosphere";
import { HeroView } from "@/components/HeroView";
import { ExpandableModal } from "@/components/ExpandableModal";

type ModalType = "artist" | "lyrics" | "pairing" | "why" | null;

const modalTitles: Record<string, string> = {
  artist: "The Artist",
  lyrics: "Lyrics",
  pairing: "The Pairing",
  why: "Why It Works",
};

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
            <p className="text-cream/70 font-body">
              Content for {activeModal} modal coming soon.
            </p>
          </ExpandableModal>
        )}
      </AnimatePresence>
    </main>
  );
}
