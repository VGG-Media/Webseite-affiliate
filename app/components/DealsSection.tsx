"use client";

import { useState } from "react";
import { deals, categories, type Category } from "@/lib/data";
import DealCard from "./DealCard";

export default function DealsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | "alle">("alle");

  const filtered =
    activeCategory === "alle" ? deals : deals.filter((d) => d.category === activeCategory);

  return (
    <section id="deals" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c0c] tracking-tight mb-2">
            Alle Deals
          </h2>
          <p className="text-[#6b7280] text-sm">
            Kuratierte Empfehlungen — aktuell und immer auf dem neuesten Stand.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#0c0c0c] text-white border-[#0c0c0c]"
                  : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-[#0c0c0c] hover:text-[#0c0c0c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((deal) => (
            <DealCard key={deal.id} deal={deal} featured={deal.featured} />
          ))}
        </div>

        {/* Affiliate disclosure */}
        <p className="mt-8 text-xs text-[#6b7280] text-center">
          * Affiliate-Links — beim Kauf über unsere Links erhalten wir eine kleine Provision ohne Mehrkosten für dich.
        </p>
      </div>
    </section>
  );
}
