export default function About() {
  return (
    <section className="relative w-full bg-transparent text-on-surface py-20 px-6 overflow-hidden" id="about">
      {/* Decorative Line Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 0 150 H 220 L 370 300 V 650 L 270 750 H 0" stroke="#00ffd2" strokeWidth="1.5" opacity="0.2" />
          <circle cx="220" cy="150" r="3" fill="#00ffd2" opacity="0.5" />
          <circle cx="370" cy="300" r="3" fill="#00ffd2" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black font-space-grotesk tracking-tight text-white mb-6">
          Profil Singkat
        </h2>

        {/* Content Paragraph */}
        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium font-inter max-w-3xl mx-auto">
          Terampil merancang aplikasi modern berbasis web dan mobile, serta memiliki kemampuan{" "}
          <span className="text-[#00ffd2] font-extrabold drop-shadow-[0_0_10px_rgba(0,255,210,0.2)]">
            analytical & problem solving
          </span>{" "}
          yang kuat dalam debugging maupun troubleshooting hardware/software. Berdomisili di Bojong Gede, Bogor.
        </p>
      </div>
    </section>
  );
}
