"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-tight">VG</span>
          </div>
          <span className="text-[#0c0c0c] font-semibold text-sm tracking-tight">
            VGG<span className="text-[#b8945a]"> Deals</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Tech", "Lifestyle", "Reisen", "Finanzen"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#6b7280] hover:text-[#0c0c0c] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#newsletter"
            className="text-sm px-4 py-2 rounded-full bg-[#0c0c0c] text-white hover:bg-[#b8945a] transition-colors duration-200"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#0c0c0c] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-[#fafaf9] px-5 py-4 flex flex-col gap-3">
          {["Tech", "Lifestyle", "Reisen", "Finanzen"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#6b7280] hover:text-[#0c0c0c] py-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#newsletter"
            className="text-sm px-4 py-2 rounded-full bg-[#0c0c0c] text-white text-center mt-1 hover:bg-[#b8945a] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Newsletter
          </a>
        </div>
      )}
    </header>
  );
}
