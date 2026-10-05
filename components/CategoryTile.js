import Link from "next/link";
import Image from "next/image";
import { unsplash } from "@/lib/images";

export default function CategoryTile({ category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-sm"
    >
      <Image
        src={unsplash(category.photo, { w: 500, h: 625 })}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <span className="absolute bottom-4 left-4 font-display text-xl uppercase tracking-wide text-white">
        {category.name}
      </span>
    </Link>
  );
}
