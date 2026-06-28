"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 px-5 bg-[#0c0c0c]">
      <div className="max-w-xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block text-xs font-semibold text-[#b8945a] uppercase tracking-widest mb-4">
          Newsletter
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
          Kein Deal mehr verpassen
        </h2>
        <p className="text-[#9ca3af] text-sm mb-8 leading-relaxed">
          Erhalte die besten Deals direkt in dein Postfach — kein Spam, nur echte Highlights. Abmeldung jederzeit möglich.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-[#b8945a]/30 bg-[#b8945a]/10 py-5 px-6">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-white font-medium text-sm">Danke! Du bist dabei.</p>
            <p className="text-[#9ca3af] text-xs mt-1">Schau in dein Postfach für die Bestätigung.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-[#6b7280] text-sm outline-none focus:border-[#b8945a]/50 focus:bg-white/15 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#b8945a] text-white font-medium text-sm hover:bg-[#a07a45] transition-colors shrink-0"
            >
              Anmelden
            </button>
          </form>
        )}

        <p className="text-[#6b7280] text-xs mt-4">
          Kein Spam · Jederzeit kündbar · DSGVO-konform
        </p>
      </div>
    </section>
  );
}
