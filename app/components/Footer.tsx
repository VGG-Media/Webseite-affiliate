export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0c] border-t border-white/5 px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                <span className="text-[#0c0c0c] text-xs font-bold">VG</span>
              </div>
              <span className="text-white font-semibold text-sm">
                VGG<span className="text-[#b8945a]"> Deals</span>
              </span>
            </div>
            <p className="text-[#6b7280] text-xs leading-relaxed max-w-xs">
              Handverlesene Empfehlungen für smarte Einkäufer. Wir helfen dir, das Beste zu finden — ohne Kompromisse.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">Kategorien</h4>
            <ul className="space-y-2">
              {["Tech & Gadgets", "Lifestyle", "Reisen", "Mode", "Fitness", "Finanzen"].map((item) => (
                <li key={item}>
                  <a href="#deals" className="text-[#6b7280] text-xs hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">Rechtliches</h4>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz", "Affiliate-Offenlegung", "Kontakt"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6b7280] text-xs hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4b5563] text-xs">
            © {year} VGG Media. Alle Rechte vorbehalten.
          </p>
          <p className="text-[#4b5563] text-xs text-center sm:text-right max-w-sm">
            Diese Website enthält Affiliate-Links. Beim Kauf erhalten wir eine Provision — für dich ohne Mehrkosten.
          </p>
        </div>
      </div>
    </footer>
  );
}
