import Link from "next/link";
import Image from "next/image";
import { unsplash } from "@/lib/images";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-olympia-charcoal border border-white/10 rounded-sm overflow-hidden hover:border-olympia-red/60 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={unsplash(product.photo, { w: 600, h: 450 })}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-olympia-red text-white text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm">
            New
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg tracking-wide text-white uppercase">
          {product.name}
        </h3>
        <p className="text-xs text-white/50 mt-1 mb-3">Price on Request</p>
        <span className="text-olympia-red text-xs font-bold uppercase tracking-wide">
          View Product &rarr;
        </span>
      </div>
    </Link>
  );
}
