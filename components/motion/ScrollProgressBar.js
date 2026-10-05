"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A thin red hairline across the very top of the viewport that fills as
// the visitor scrolls the page — small detail, but it's the kind of thing
// that makes a site feel like a built product rather than a template.
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-olympia-red origin-left z-[60]"
    />
  );
}
