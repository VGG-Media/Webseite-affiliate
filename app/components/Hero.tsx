export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[#b8945a]/30 text-[#b8945a] bg-[#b8945a]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8945a] animate-pulse" />
            Täglich neue Deals
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0c0c0c] leading-tight tracking-tight">
            Die besten Deals.{" "}
            <span className="text-[#b8945a]">Handverlesen.</span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-center text-[#6b7280] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Wir testen, vergleichen und empfehlen nur das Beste — für smarte Kaufentscheidungen ohne Zeitverlust.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#deals"
            className="w-full sm:w-auto text-center px-7 py-3 rounded-full bg-[#0c0c0c] text-white font-medium text-sm hover:bg-[#b8945a] transition-colors duration-200"
          >
            Deals entdecken
          </a>
          <a
            href="#newsletter"
            className="w-full sm:w-auto text-center px-7 py-3 rounded-full border border-[#e5e7eb] text-[#0c0c0c] font-medium text-sm hover:border-[#0c0c0c] transition-colors duration-200"
          >
            Newsletter abonnieren
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-10 border-t border-[#e5e7eb] grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { value: "200+", label: "Deals" },
            { value: "50k+", label: "Leser" },
            { value: "4.9★", label: "Bewertung" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-[#0c0c0c] tracking-tight">{stat.value}</div>
              <div className="text-xs text-[#6b7280] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
