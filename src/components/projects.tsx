"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Project {
  id: number;
  year: string;
  title: string;
  category: string;
  badge: string;
  filterType: "ai-iot" | "web-erp" | "fintech";
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  buttonText?: string;
}

const projects: Project[] = [
  {
    id: 1,
    year: "2025",
    title: "Remove Background AI",
    category: "AI & Computer Vision",
    badge: "AI Vision",
    filterType: "ai-iot",
    description:
      "Aplikasi berbasis AI untuk Image Segmentation instan. Memisahkan objek utama dari latar belakang secara presisi dan otomatis dengan pemrosesan neural network berkecepatan tinggi.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "AI API"],
    image: "/Background/remove.png",
    demoUrl: "https://remove-background-indol.vercel.app",
    githubUrl: "https://github.com/MuhammadArif-bin1/remove-background",
    buttonText: "Kunjungi Website",
  },
  {
    id: 2,
    year: "2026",
    title: "SmartBox Assistant Web",
    category: "IoT & Smart Device",
    badge: "IoT • MQTT",
    filterType: "ai-iot",
    description:
      "Asisten cerdas terintegrasi perangkat IoT (ESP32-S3) yang menggabungkan voice command, monitoring sensor telemetri real-time, dan konektivitas nirkabel MQTT untuk otomasi pintar.",
    tech: ["Next.js", "ESP32-S3 Devkit", "Tailwind CSS", "TypeScript", "IoT", "MQTT"],
    image: "/Background/smartbox.png",
    demoUrl: "https://smartbox-asisten.vercel.app",
    githubUrl: "https://github.com/MuhammadArif-bin1/smartbox-asisten",
    buttonText: "Kunjungi Website",
  },
  {
    id: 3,
    year: "2025",
    title: "Sistem Manajemen Laundry",
    category: "Real-time Operations",
    badge: "Full-Stack Web",
    filterType: "web-erp",
    description:
      "Portal operasional laundry multi-role (kasir, kurir, pencuci, dan owner) dengan fitur pelacakan resi pakaian langsung secara live update via AJAX dan pelaporan keuangan terpadu.",
    tech: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL", "AJAX"],
    image: "/Background/akloundry.png",
    demoUrl: "https://laundrykuporject.great-site.net",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 4,
    year: "2026",
    title: "Skincare Ingredient Analyzer",
    category: "AI & HealthTech",
    badge: "Gemini AI",
    filterType: "ai-iot",
    description:
      "Asisten analisis komposisi kosmetik berbasis Gemini AI untuk mendeteksi Match Score dan Safety Score bahan aktif kosmetik secara instan berdasarkan profil dermatologis kulit.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Gemini AI"],
    image: "/Background/skincare analyzer.png",
    demoUrl: "https://basic-skincare-ingredient-analyzier.vercel.app/",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 5,
    year: "2026",
    title: "Sistem Payroll & Presensi",
    category: "Enterprise ERP",
    badge: "ERP System",
    filterType: "web-erp",
    description:
      "Sistem portal HR & payroll enterprise terintegrasi. Mengotomatisasi kalkulasi gaji bersih, potongan pajak, pencatatan absensi karyawan, serta penerbitan slip gaji digital otomatis.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
    image: "/Background/Penggajian.png",
    demoUrl: "https://sistem-penggajian-omega.vercel.app",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 6,
    year: "2026",
    title: "E-Ticketing Penerbangan",
    category: "Booking Platform",
    badge: "E-Commerce",
    filterType: "web-erp",
    description:
      "Platform reservasi penerbangan komprehensif dengan pencarian rute domestik, denah pemilihan kursi kabin interaktif, simulasi payment gateway, dan e-boarding pass otomatis.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Prisma"],
    image: "/Background/tiket pesawat.png",
    demoUrl: "https://ticket-pesawat.vercel.app",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 7,
    year: "2026",
    title: "Landing Page BPR Hasamitra",
    category: "Fintech & Corporate",
    badge: "Corporate Bank",
    filterType: "fintech",
    description:
      "Website profil resmi perbankan PT BPR Hasamitra Jawa Barat. Menampilkan portofolio produk tabungan & deposito, legalitas OJK & LPS, serta formulir pengajuan kredit digital.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/Background/landing-page-hasamitra.png",
    demoUrl: "https://website-hasamitra.vercel.app",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 8,
    year: "2026",
    title: "Portal Pengadaan ATK",
    category: "Internal Office System",
    badge: "Inventory ERP",
    filterType: "web-erp",
    description:
      "Aplikasi pengelolaan permintaan Alat Tulis Kantor karyawan dengan katalog barang terstruktur, live monitoring stok fisik gudang, serta workflow approval bertingkat bagi manajemen.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/Background/pengajuan-atk.png",
    demoUrl: "https://pengajuan-atk.vercel.app",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 9,
    year: "2026",
    title: "Kalkulator Simulasi Finansial",
    category: "Fintech Simulator",
    badge: "Financial Tool",
    filterType: "fintech",
    description:
      "Simulator produk perbankan digital untuk estimasi imbal hasil deposito gross & net (PPh final), kalkulasi skema cicil emas batangan, dengan sinkronisasi database cloud Supabase.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    image: "/Background/kalkulator-produk.png",
    demoUrl: "https://kalkulator-theta-snowy.vercel.app",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
  {
    id: 10,
    year: "2026",
    title: "Ruang University",
    category: "E-Learning Platform",
    badge: "Academic System",
    filterType: "web-erp",
    description:
      "Platform akademik digital terintegrasi untuk manajemen perpustakaan, distribusi materi pembelajaran, dan pengelolaan data mahasiswa. Dilengkapi sistem autentikasi multi-role dan dashboard interaktif.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/Background/Ruang University.png",
    demoUrl: "https://ruang-univesity-203giul61-muhammadarif-bins-projects.vercel.app/",
    githubUrl: "#",
    buttonText: "Kunjungi Website",
  },
];

type FilterCategory = "all" | "ai-iot" | "web-erp" | "fintech";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterType === activeFilter);
  }, [activeFilter]);

  const filterTabs = [
    { id: "all" as FilterCategory, label: "Semua", count: projects.length },
    { id: "ai-iot" as FilterCategory, label: "AI & IoT", count: projects.filter((p) => p.filterType === "ai-iot").length },
    { id: "web-erp" as FilterCategory, label: "Web & ERP", count: projects.filter((p) => p.filterType === "web-erp").length },
    { id: "fintech" as FilterCategory, label: "Fintech", count: projects.filter((p) => p.filterType === "fintech").length },
  ];

  return (
    <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00ffd2]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Centered Section Header — Bold Typography & Modern Minimalist */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ffd2]/10 border border-[#00ffd2]/30 text-[#00ffd2] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm shadow-[#00ffd2]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ffd2] animate-pulse" />
          KARYA &amp; INOVASI TERPILIH
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-space-grotesk text-white tracking-tight uppercase leading-none">
          PROYEK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd2] via-teal-200 to-[#00ffd2]">UNGGULAN</span>
        </h2>
        <p className="text-slate-400 font-inter text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Eksplorasi solusi digital yang dibangun dengan standar arsitektur modern, performa tinggi, dan pengalaman visual yang imersif.
        </p>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-space-grotesk uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${activeFilter === tab.id
                  ? "bg-gradient-to-r from-[#00ffd2] to-[#00b894] text-slate-950 shadow-lg shadow-[#00ffd2]/25 scale-105"
                  : "bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${activeFilter === tab.id
                    ? "bg-slate-950/20 text-slate-950 font-black"
                    : "bg-slate-800 text-slate-400"
                  }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid container (2 columns on medium & large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, idx) => {
          const isRealGithub = project.githubUrl && project.githubUrl !== "#";

          return (
            <article
              key={project.id}
              className="group relative rounded-3xl p-6 sm:p-7 overflow-hidden flex flex-col h-full bg-gradient-to-b from-[#091322]/90 via-[#050b16]/95 to-[#020610]/95 backdrop-blur-2xl border border-white/[0.08] hover:border-[#00ffd2]/45 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,255,210,0.18),0_0_30px_rgba(0,255,210,0.06),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Subtle top-corner ambient neon glow effect */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#00ffd2]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00ffd2]/14 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-[#00ffd2]/[0.015] pointer-events-none" />

              {/* Card Top Meta: Futuristic Index & Live Status */}
              <div className="flex items-center justify-between gap-4 mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-[#00ffd2] tracking-widest bg-[#00ffd2]/10 border border-[#00ffd2]/25 px-2.5 py-1 rounded-lg">
                    #{String(project.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                    // {project.category}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Image Showcase Frame */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.06] group-hover:border-[#00ffd2]/30 transition-all mb-5 bg-slate-950">
                <img
                  alt={project.title}
                  src={project.image}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a16] via-transparent to-transparent opacity-80" />

                {/* Floating badge over image */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00ffd2] bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#00ffd2]/30 shadow-md">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 shadow-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Title with Bold High-Contrast Typography */}
              <h3 className="text-2xl sm:text-3xl font-black font-space-grotesk mb-3 text-white group-hover:text-[#00ffd2] transition-colors leading-tight tracking-tight relative z-10">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal font-inter flex-grow line-clamp-3 group-hover:text-slate-200 transition-colors relative z-10">
                {project.description}
              </p>

              {/* Neomorphic Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 relative z-10">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="px-2.5 py-1 bg-[#021319]/90 text-[#00ffd2] border border-[#00ffd2]/25 hover:border-[#00ffd2]/60 hover:bg-[#00ffd2]/10 text-[11px] font-mono font-semibold rounded-md uppercase tracking-wide transition-colors shadow-sm"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* High-Impact CTA Buttons */}
              <div className="flex items-center gap-3 w-full mt-auto pt-4 border-t border-slate-900/80 relative z-10">
                {/* Primary Demo Button */}
                <Link
                  href={project.demoUrl || "#"}
                  target={project.demoUrl && project.demoUrl !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ffd2] to-[#00b894] hover:from-[#38ef7d] hover:to-[#00ffd2] text-slate-950 font-black font-space-grotesk text-xs sm:text-sm uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-[#00ffd2]/20 hover:shadow-[#00ffd2]/40 hover:scale-[1.02] active:scale-[0.98] transition-all group/btn text-center"
                >
                  <span>{project.buttonText || "Kunjungi Website"}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* Secondary GitHub Button or Private Repo Tag */}
                {isRealGithub ? (
                  <Link
                    href={project.githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/70 hover:border-[#00ffd2]/40 font-bold font-space-grotesk text-xs sm:text-sm uppercase tracking-wider py-3 px-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                    title="Buka Source Code di GitHub"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </Link>
                ) : (
                  <div
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-950/70 text-slate-400 border border-slate-800/80 font-mono text-[11px] font-semibold uppercase tracking-wider py-3 px-3.5 rounded-xl cursor-default select-none shrink-0"
                    title="Repository Bersifat Privat / Proprietary"
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Private</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
