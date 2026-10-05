"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { href: "/products", label: "Catalog" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-[76px] flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Olympia Fitness home">
          <Image
            src="/olympia-fitness-logo.png"
            alt="Olympia Fitness"
            width={900}
            height={225}
            priority
            className="h-auto w-[180px] sm:w-[210px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black/70 hover:text-olympia-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9058858077"
            className="flex items-center gap-1.5 text-sm text-black/70 hover:text-olympia-red transition-colors"
          >
            <Phone size={15} />
            9058858077
          </a>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 bg-olympia-red hover:bg-olympia-redBright transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
          >
            <ShoppingBag size={16} />
            Enquiry
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-olympia-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden text-olympia-black"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white px-4 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-black/80 text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-olympia-red text-white font-semibold px-4 py-3 rounded-full"
          >
            <ShoppingBag size={16} />
            Enquiry {count > 0 ? `(${count})` : ""}
          </Link>
          <a
            href="tel:9058858077"
            className="flex items-center justify-center gap-2 text-black/70 text-sm py-2"
          >
            <Phone size={15} />
            9058858077
          </a>
        </div>
      )}
    </header>
  );
}
