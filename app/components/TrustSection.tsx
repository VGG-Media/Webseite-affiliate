const pillars = [
  {
    icon: "🔍",
    title: "Unabhängig getestet",
    description: "Jedes Produkt wird von uns geprüft, bevor wir es empfehlen. Kein Platz für minderwertige Angebote.",
  },
  {
    icon: "💎",
    title: "Nur das Beste",
    description: "Wir kuratieren streng — aus hunderten von Angeboten landen nur die wirklich guten hier.",
  },
  {
    icon: "🔄",
    title: "Täglich aktualisiert",
    description: "Preise und Verfügbarkeit werden regelmäßig überprüft, damit du nie einen abgelaufenen Deal siehst.",
  },
  {
    icon: "🛡️",
    title: "Transparent & fair",
    description: "Wir kennzeichnen alle Affiliate-Links klar. Unsere Empfehlungen sind unabhängig von Provisionen.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#b8945a] uppercase tracking-widest">Warum wir?</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c0c0c] tracking-tight mt-2 mb-3">
            Vertrauen durch Qualität
          </h2>
          <p className="text-[#6b7280] max-w-md mx-auto text-sm leading-relaxed">
            Wir stehen für ehrliche, unabhängige Empfehlungen — damit du die beste Entscheidung treffen kannst.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#b8945a]/30 transition-colors"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="font-semibold text-[#0c0c0c] text-sm mb-2">{pillar.title}</h3>
              <p className="text-xs text-[#6b7280] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
