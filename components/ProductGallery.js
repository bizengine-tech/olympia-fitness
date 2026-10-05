"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { unsplash } from "@/lib/images";

// Above-the-fold content, so this animates in on mount rather than on
// scroll (whileInView risks a flash-hidden state for something the
// visitor should see immediately). Clicking a thumbnail cross-fades the
// main image — a small 3D-feeling depth cue without any scroll dependency.
export default function ProductGallery({ product, extraPhotos = [] }) {
  const photos = [product.photo, ...extraPhotos];
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-3" style={{ perspective: 1000 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, rotateY: 8, scale: 1.02 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={unsplash(photos[active], { w: 900, h: 675, q: 80 })}
              alt={`${product.name} view ${active + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-3 overflow-x-auto">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-24 h-20 shrink-0 rounded-sm overflow-hidden border transition-colors ${
              active === i ? "border-olympia-red" : "border-white/10"
            }`}
          >
            <Image
              src={unsplash(photo, { w: 200, h: 160 })}
              alt={`${product.name} thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
