"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const text = [
      "Hi Olympia Fitness,",
      form.message || "I'd like to know more about your equipment.",
      "",
      form.name ? `Name: ${form.name}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        className="w-full bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        className="w-full bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red"
      />
      <textarea
        placeholder="Your message"
        rows={4}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        className="w-full bg-olympia-charcoal border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-olympia-red"
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-olympia-red hover:bg-olympia-redBright transition-colors text-white font-semibold px-8 py-3 rounded-sm uppercase tracking-wide text-sm"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
