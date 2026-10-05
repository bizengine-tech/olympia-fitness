"use client";

import { useState } from "react";

const TABS = ["Overview", "Specifications", "Downloads"];

export default function ProductTabs({ product }) {
  const [active, setActive] = useState("Overview");

  return (
    <section className="border-t border-white/10 pt-8">
      <div className="flex gap-8 border-b border-white/10 mb-8 text-sm uppercase tracking-wide font-semibold overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap pb-3 border-b-2 transition-colors ${
              active === tab
                ? "border-olympia-red text-white"
                : "border-transparent text-white/50 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "Overview" && (
        <p className="text-white/70 leading-relaxed max-w-2xl">
          {product.overview}
        </p>
      )}

      {active === "Specifications" && (
        <table className="w-full max-w-2xl text-sm">
          <tbody>
            {product.specs.map(([label, value]) => (
              <tr key={label} className="border-b border-white/10">
                <td className="py-3 pr-4 text-white/50 w-1/3">{label}</td>
                <td className="py-3 text-white">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {active === "Downloads" && (
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-olympia-red text-sm font-semibold uppercase tracking-wide"
        >
          Download Spec Sheet (PDF) — placeholder, add real file when available
        </a>
      )}
    </section>
  );
}
