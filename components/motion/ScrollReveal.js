"use client";

import { motion } from "framer-motion";

// Wraps any content in a perspective container, then rotates it in from a
// slight 3D tilt (rotateX) plus a vertical drift as it enters the viewport.
// This is what replaces plain Tailwind "fade up on load" — the rotation is
// what reads as genuinely 3D rather than a flat CSS fade.
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 36,
  rotate = 10,
  once = true,
}) {
  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        initial={{ opacity: 0, y, rotateX: rotate }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once, margin: "-80px" }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 0.61, 0.36, 1],
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
