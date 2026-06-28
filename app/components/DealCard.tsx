import { Deal } from "@/lib/data";

interface DealCardProps {
  deal: Deal;
  featured?: boolean;
}

export default function DealCard({ deal, featured = false }: DealCardProps) {
  return (
    <a
      href={deal.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group block rounded-2xl border border-[#e5e7eb] bg-white p-6 hover:border-[#b8945a]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 ${
        featured ? "ring-1 ring-[#b8945a]/20" : ""
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{deal.emoji}</div>
        <div className="flex items-center gap-2">
          {deal.discount && (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
              {deal.discount}
            </span>
          )}
          {deal.badge && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#b8945a]/10 text-[#b8945a]">
              {deal.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-[#0c0c0c] text-base mb-1.5 group-hover:text-[#b8945a] transition-colors">
        {deal.title}
      </h3>
      <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{deal.description}</p>

      {/* Price */}
      {(deal.discountPrice || deal.originalPrice) && (
        <div className="flex items-baseline gap-2 mb-4">
          {deal.discountPrice && (
            <span className="text-lg font-bold text-[#0c0c0c]">{deal.discountPrice}</span>
          )}
          {deal.originalPrice && (
            <span className="text-sm text-[#6b7280] line-through">{deal.originalPrice}</span>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#6b7280] capitalize">{deal.category}</span>
        <span className="text-xs font-medium text-[#b8945a] flex items-center gap-1 group-hover:gap-2 transition-all">
          Zum Deal
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </div>
    </a>
  );
}
