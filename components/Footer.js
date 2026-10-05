import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        <div>
          <h4 className="font-display text-lg tracking-wide text-white mb-4">
            OLYMPIA FITNESS
          </h4>
          <p className="mb-2">123 Industrial Road, City, State, PIN</p>
          <p className="mb-2">Phone: 9058858077</p>
          <p>Email: info@olympiafitness.example</p>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wide text-white mb-4">
            QUICK LINKS
          </h4>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">Catalog</Link></li>
            <li><Link href="/company" className="hover:text-white">Company</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-white">Enquiry List</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wide text-white mb-4">
            FOLLOW US
          </h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © 2026 Olympia Fitness. All rights reserved.
      </div>
    </footer>
  );
}
