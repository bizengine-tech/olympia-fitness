"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalog" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-olympia-black/95 shadow-lg shadow-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Olympia Fitness home">
          <Image
            src="/olympia-fitness-logo.png"
            alt="Olympia Fitness"
            width={900}
            height={225}
            priority
            className="h-auto w-[180px] sm:w-[220px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-olympia-red hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9058858077"
            className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/65 transition-colors hover:text-white"
          >
            <Phone size={14} className="text-olympia-red" />
            9058858077
          </a>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-sm bg-olympia-red px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-olympia-red/20 transition-colors hover:bg-olympia-redBright"
          >
            <ShoppingBag size={16} />
            Enquiry
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-olympia-black">
                {count}
              </span>
            )}
          </Link>
        </div>

        <button
          className="rounded-sm border border-white/15 p-2 text-white transition-colors hover:border-white/40 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="space-y-4 border-t border-white/10 bg-olympia-charcoal px-4 py-5 md:hidden">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-l-2 border-transparent px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:border-olympia-red hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-sm bg-olympia-red px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-olympia-redBright"
          >
            <ShoppingBag size={16} />
            Enquiry {count > 0 ? `(${count})` : ""}
          </Link>
          <a
            href="tel:9058858077"
            className="flex items-center justify-center gap-2 py-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            <Phone size={15} className="text-olympia-red" />
            9058858077
          </a>
        </div>
      )}
    </header>
  );
}
