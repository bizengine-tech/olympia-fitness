"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { getProductBySlug } from "@/lib/products";
import { unsplash } from "@/lib/images";
import { buildWhatsAppLink, buildCartMessage } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, updateQty, removeItem } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    note: "",
  });

  const whatsappLink = buildWhatsAppLink(buildCartMessage(items, customer));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 pb-32">
      <div className="mb-8">
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Your Enquiry List
        </h1>
        <p className="text-white/50 mt-2">
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-white/50 mb-6">
            Your enquiry list is empty. Browse the catalog and add equipment
            you&rsquo;d like a quote for.
          </p>
          <Link
            href="/products"
            className="inline-block bg-olympia-red hover:bg-olympia-redBright transition-colors text-white font-semibold px-8 py-3 rounded-sm uppercase tracking-wide text-sm"
          >
            Browse Equipment
          </Link>
        </div>
      ) : (
        <>
          {/* Enquiry items list */}
          <div className="space-y-4 mb-12">
            {items.map((item, i) => {
              const product = getProductBySlug(item.slug);
              return (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 bg-olympia-charcoal border border-white/10 rounded-sm p-4"
                >
                  {product && (
                    <div className="relative w-full sm:w-24 h-40 sm:h-20 rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={unsplash(product.photo, { w: 200, h: 160 })}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wide">
                      Price on Request
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.slug, parseInt(e.target.value, 10) || 1)
                      }
                      aria-label={`Quantity for ${item.name}`}
                      className="w-16 bg-black border border-white/20 rounded-sm px-2 py-1 text-center text-white"
                    />
                    <button
                      onClick={() => removeItem(item.slug)}
                      aria-label={`Remove ${item.name}`}
                      className="text-white/40 hover:text-olympia-red transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Customer details */}
          <div className="mb-8">
            <h2 className="font-display text-2xl uppercase tracking-wide mb-4">
              Your Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer((c) => ({ ...c, name: e.target.value }))
                }
                className="bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer((c) => ({ ...c, phone: e.target.value }))
                }
                className="bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red"
              />
              <input
                type="text"
                placeholder="City"
                value={customer.city}
                onChange={(e) =>
                  setCustomer((c) => ({ ...c, city: e.target.value }))
                }
                className="bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red sm:col-span-2"
              />
              <textarea
                placeholder="Anything else we should know? (optional)"
                value={customer.note}
                onChange={(e) =>
                  setCustomer((c) => ({ ...c, note: e.target.value }))
                }
                rows={3}
                className="bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red sm:col-span-2"
              />
            </div>
          </div>
        </>
      )}

      {/* Sticky send-via-WhatsApp bar — keeps the primary action visible
          without scrolling, per the wireframe's mobile constraint. */}
      {items.length > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-olympia-black border-t border-white/10 px-4 py-4"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#25D366] hover:brightness-110 transition-all text-white font-semibold px-10 py-4 rounded-sm uppercase tracking-wide text-sm"
            >
              Send Enquiry via WhatsApp
            </a>
            <p className="text-xs text-white/40">
              We&rsquo;ll reply within a few hours.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
