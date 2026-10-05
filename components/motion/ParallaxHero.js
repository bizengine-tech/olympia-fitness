"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// The background image drifts and scales up slightly as the hero scrolls
// past — a much smaller, safer version of the "scroll-scrubbed video" idea
// from the earlier build, done with a single image instead of a video file.
// `children` is the text/CTA block, passed in from the (server) page —
// it renders normally, this component only animates the image + overlay.
export default function ParallaxHero({ src, heightClass, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <section
      ref={ref}
      className={`relative flex items-center overflow-hidden bg-white text-olympia-black ${heightClass}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-x-0 top-[28%] bottom-0 opacity-35 md:inset-y-0 md:left-[38%] md:opacity-100"
      >
        <Image
          src={src}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 62vw"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/35 md:bg-gradient-to-r md:from-white md:via-white/85 md:to-white/5"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 w-full">
        <div className="max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
