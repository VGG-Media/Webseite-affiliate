import { featuredDeals } from "@/lib/data";
import DealCard from "./DealCard";

export default function FeaturedSection() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold text-[#b8945a] uppercase tracking-widest">Top Picks</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c0c] tracking-tight mt-1">
              Unsere Highlights
            </h2>
          </div>
          <a
            href="#deals"
            className="hidden md:flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#0c0c0c] transition-colors"
          >
            Alle ansehen
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
