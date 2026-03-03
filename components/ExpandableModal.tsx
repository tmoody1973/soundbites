"use client";

import { type ReactNode, useRef } from "react";
import { motion, type PanInfo } from "motion/react";

interface ExpandableModalProps {
  layoutId: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const springTransition = {
  type: "spring" as const,
  damping: 30,
  stiffness: 300,
};

export function ExpandableModal({
  layoutId,
  title,
  onClose,
  children,
}: ExpandableModalProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.y > 100) {
      onClose();
    }
  }

  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-warm-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Expanded card panel */}
      <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none">
        <motion.div
          layoutId={layoutId}
          className="absolute inset-2 top-4 rounded-3xl bg-warm-dark/95 backdrop-blur-xl
            border border-gold/15 shadow-2xl pointer-events-auto
            flex flex-col overflow-hidden"
          transition={springTransition}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.4}
          onDragEnd={handleDragEnd}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-cream/20" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3">
            <h2 className="text-xl font-serif font-semibold text-cream">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full
                bg-cream/10 text-cream/60 hover:bg-cream/20 hover:text-cream
                transition-colors duration-200 text-lg leading-none cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gold/10 mx-6" />

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 py-5 pb-28">
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
}
