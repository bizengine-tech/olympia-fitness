import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { unsplash, PHOTOS } from "@/lib/images";
import {
  getProductBySlug,
  getRelatedProducts,
  CATEGORIES,
  PRODUCTS,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ProductBuyPanel from "@/components/ProductBuyPanel";
import ProductTabs from "@/components/ProductTabs";
import ProductGallery from "@/components/ProductGallery";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TiltCard from "@/components/motion/TiltCard";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Olympia Fitness`,
    description: product.summary,
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-white/50 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-white">
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </nav>

      {/* Product hero: gallery + buy panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <ProductGallery product={product} extraPhotos={[PHOTOS.darkRed, PHOTOS.heroFloor]} />
        <ProductBuyPanel product={product} />
      </div>

      {/* Tabs: Overview / Specifications / Downloads */}
      <ScrollReveal>
        <ProductTabs product={product} />
      </ScrollReveal>

      {/* Installed in */}
      <section className="py-16 border-t border-white/10">
        <ScrollReveal>
          <h2 className="font-display text-3xl uppercase tracking-wide mb-8">
            Installed In
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[PHOTOS.heroFloor, PHOTOS.multiStation].map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.1} rotate={14}>
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
                <Image
                  src={unsplash(photo, { w: 800, h: 500 })}
                  alt={`${product.name} installed at a commercial gym`}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <ScrollReveal>
            <h2 className="font-display text-3xl uppercase tracking-wide mb-8">
              You May Also Need
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.08} rotate={14}>
                <TiltCard>
                  <ProductCard product={p} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
