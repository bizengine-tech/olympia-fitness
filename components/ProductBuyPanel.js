"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

// Single primary CTA only — per the wireframe revision note, this used to
// carry a second "WhatsApp Us Directly" button here, which was removed
// because it violated the "one obvious next step per page" convention.
// The persistent WhatsAppButton in the layout already covers that path.
export default function ProductBuyPanel({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-wide mb-4">
        {product.name}
      </h1>
      <p className="text-white/60 mb-6">{product.summary}</p>
      <p className="text-sm text-white/40 uppercase tracking-wide mb-8">
        Price on Request
      </p>
      <motion.button
        onClick={handleAdd}
        whileTap={{ scale: 0.97 }}
        className="w-full sm:w-auto bg-olympia-red hover:bg-olympia-redBright transition-colors text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-wide text-sm"
      >
        {added ? "Added to Enquiry ✓" : "Add to Enquiry"}
      </motion.button>
      {added && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/cart"
            className="text-olympia-red text-sm font-semibold mt-4 inline-block"
          >
            View Enquiry List &rarr;
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
