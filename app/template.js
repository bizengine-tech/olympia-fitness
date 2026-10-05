"use client";

import { motion } from "framer-motion";

// Next.js remounts `template.js` on every navigation (unlike layout.js,
// which persists), so this gives every page a consistent enter animation
// without needing AnimatePresence/exit-animation plumbing.
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
