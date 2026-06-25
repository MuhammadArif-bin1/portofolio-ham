"use client";

import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-transparent z-10">

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Profile Image with Cyan Glow Border */}
        <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-2 border-[#00ffd2]/40 shadow-[0_0_30px_rgba(0,255,210,0.35)]">
          <img
            alt="Arif Giovanni"
            className="w-full h-full object-cover"
            src="profile.jpeg"
          />
        </div>

        {/* Heading */}
        <TypewriterEffect />

        {/* Subtext Paragraph */}
        <p className="max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed mb-10 font-medium font-inter">
          Mahasiswa Informatika tingkat akhir di Universitas Bina Sarana Informatika. Berpengalaman dalam pengembangan Fullstack, AI, dan sistem IoT. Siap memberikan solusi teknologi yang inovatif.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#00ffd2] to-[#00b8ff] text-slate-950 font-extrabold px-8 py-3 rounded-full text-xs md:text-sm tracking-wider hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,255,210,0.4)] transition-all uppercase duration-300 active:scale-95"
          >
            Lihat Portofolio
          </a>
          <a
            href="https://wa.me/6281994379688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#00ffd2]/30 hover:border-[#00ffd2] text-[#00ffd2] hover:bg-[#00ffd2]/5 transition-all duration-300 font-extrabold px-8 py-3 rounded-full text-xs md:text-sm tracking-wider uppercase active:scale-95"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4 max-w-3xl mx-auto">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#050b16]/80 border border-slate-800 hover:border-[#00ffd2]/50 text-slate-300 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md text-xs md:text-sm font-semibold font-space-grotesk cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-[#00ffd2]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>Muhammad Arif Giovanni</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MuhammadArif-bin1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#050b16]/80 border border-slate-800 hover:border-[#00ffd2]/50 text-slate-300 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md text-xs md:text-sm font-semibold font-space-grotesk cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-[#00ffd2]" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>@MuhammadArif-bin1</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281994379688"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#050b16]/80 border border-slate-800 hover:border-[#00ffd2]/50 text-slate-300 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md text-xs md:text-sm font-semibold font-space-grotesk cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-[#00ffd2]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.488.953c-5.441 0-9.866 4.372-9.87 9.802 0 1.767.483 3.491 1.396 5.04L2.006 21.9l6.33-1.635-1.688.889zM17.43 14.54c-.296-.148-1.752-.864-2.024-.963-.271-.099-.47-.148-.667.148-.198.297-.765.963-.938 1.161-.173.197-.346.222-.642.074-.296-.148-1.25-.46-2.38-1.469-.88-.784-1.474-1.753-1.647-2.05-.173-.297-.018-.458.13-.606.134-.133.297-.347.445-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.148-.667-1.609-.914-2.203-.241-.579-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.038 1.014-1.038 2.476 0 1.462 1.063 2.872 1.211 3.07.149.198 2.093 3.2 5.07 4.487.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.752-.717 2.0-.1.248-.68.248-1.263.173-1.386-.075-.124-.272-.198-.569-.347z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/m.arifgiovanni/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#050b16]/80 border border-slate-800 hover:border-[#00ffd2]/50 text-slate-300 hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md text-xs md:text-sm font-semibold font-space-grotesk cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-[#00ffd2]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@m.arifgiovanni</span>
          </a>
        </div>
      </div>
    </section>
  );
}
