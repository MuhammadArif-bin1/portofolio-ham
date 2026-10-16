"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020813]/85 backdrop-blur-xl border-b border-[#00ffd2]/10 transition-all">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        {/* Left Spacer for desktop centering balance */}
        <div className="w-10 hidden md:block" />

        {/* Brand / Logo on mobile only, hidden on desktop to keep clean centered links */}
        <a
          href="#"
          className="md:hidden font-space-grotesk font-black text-xs sm:text-sm tracking-wider text-white hover:text-[#00ffd2] transition-colors flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffd2] animate-pulse" />
          <span>ARIF GIOVANNI</span>
        </a>

        {/* Centered Desktop Nav Links */}
        <div className="flex items-center gap-6 sm:gap-7 lg:gap-9 mx-auto">
          <a
            className="text-xs md:text-sm font-bold tracking-wider uppercase text-[#00ffd2] transition-colors hover:text-[#00ffd2]"
            href="#"
          >
            Beranda
          </a>
          <a
            className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
            href="#about"
          >
            Tentang &amp; Skill
          </a>
          <a
            className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
            href="#projects"
          >
            Proyek
          </a>
          <a
            className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
            href="#timeline"
          >
            Achievement
          </a>
        </div>

        {/* Right side: Mobile Hamburger Button (Ikon bulat di pojok kanan sudah dihilangkan) */}
        <div className="flex items-center">
          {/* Right desktop spacer to maintain symmetry */}
          <div className="w-10 hidden md:block" />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#00ffd2] transition-colors cursor-pointer"
          >
            {isOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-5 bg-[#020813]/95 border-b border-[#00ffd2]/15 backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-2">
            <a
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#00ffd2] bg-[#00ffd2]/10 transition-colors"
              href="#"
            >
              Beranda
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              href="#about"
            >
              Tentang &amp; Skill
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              href="#projects"
            >
              Proyek
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              href="#timeline"
            >
              Achievement
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="https://wa.me/6281994379688"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-[#00ffd2] to-[#00b894] text-slate-950 font-black text-xs uppercase tracking-wider"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
