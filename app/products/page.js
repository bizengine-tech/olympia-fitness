"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import TiltCard from "@/components/motion/TiltCard";

const PAGE_SIZE = 8;

function ProductsPageInner() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryName =
    CATEGORIES.find((c) => c.slug === activeCategory)?.name || "All Products";

  const shown = filtered.slice(0, visible);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
      {/* Title bar */}
      <div className="mb-8">
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-wide">
          {activeCategoryName}
        </h1>
        <p className="text-white/50 mt-2">{filtered.length} products</p>
      </div>

      {/* Sub-category tabs */}
      <div className="flex gap-6 overflow-x-auto pb-4 mb-8 border-b border-white/10 text-sm uppercase tracking-wide font-semibold">
        <Link
          href="/products"
          className={`whitespace-nowrap pb-3 border-b-2 ${
            activeCategory === "all"
              ? "border-olympia-red text-white"
              : "border-transparent text-white/50 hover:text-white"
          }`}
        >
          All
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/products?category=${c.slug}`}
            className={`whitespace-nowrap pb-3 border-b-2 ${
              activeCategory === c.slug
                ? "border-olympia-red text-white"
                : "border-transparent text-white/50 hover:text-white"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Product grid */}
      {shown.length === 0 ? (
        <p className="text-white/50">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: (i % PAGE_SIZE) * 0.05,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{ perspective: 1000 }}
            >
              <TiltCard>
                <ProductCard product={p} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      )}

      {/* Load more */}
      {visible < filtered.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border border-white/20 hover:border-olympia-red hover:text-olympia-red transition-colors text-white font-semibold px-8 py-3 rounded-sm uppercase tracking-wide text-sm"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageInner />
    </Suspense>
  );
}
