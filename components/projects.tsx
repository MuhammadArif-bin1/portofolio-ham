"use client";

import Link from 'next/link';

interface Project {
  id: number;
  year: string;
  title: string;
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
    title: "Remove Background",
    description: "Secara teknis, AI pada website tersebut melakukan Image Segmentation. Ia membagi piksel foto ke dalam dua kategori: Foreground (depan) dan Background (belakang). AI akan mempertahankan piksel yang dianggap sebagai objek penting dan membuang sisanya dengan tingkat kehalusan yang terus meningkat seiring perkembangan teknologi.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "AI API"],
    image: "remove.png",
    demoUrl: "https://remove-background-indol.vercel.app",
    githubUrl: "https://github.com/MuhammadArif-bin1/remove-background",
    buttonText: "Visit Website"
  },
  {
    id: 2,
    year: "2026",
    title: "Smartbox Asisstant Berbasis WEB",
    description: "SmartBox Assistant adalah asisten pintar berbasis IoT yang menggabungkan teknologi suara, tampilan informasi real-time, dan konektivitas nirkabel untuk membantu pengguna berinteraksi dengan perangkat secara lebih mudah dan cerdas.",
    tech: ["Next.js", "ESP32-S3 Devkit", "Tailwind CSS", "TypeScript", "IoT", "MQTT"],
    image: "smartbox.png",
    demoUrl: "https://smartbox-asisten.vercel.app",
    githubUrl: "https://github.com/MuhammadArif-bin1/smartbox-asisten",
    buttonText: "Visit Website"
  },
  {
    id: 3,
    year: "2025",
    title: "Sistem Manajemen Laundry Real-time",
    description: "Aplikasi pengelolaan layanan laundry komprehensif berbasis web. Mencakup portal kasir, pencuci, kurir, dan admin. Memiliki fitur pelacakan resi pakaian secara real-time bagi pelanggan yang diproses dengan AJAX.",
    tech: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL", "AJAX"],
    image: "akloundry.png",
    demoUrl: "https://laundrykuporject.great-site.net",
    githubUrl: "#",
    buttonText: "Visit Website"
  },
  {
    id: 4,
    year: "2026",
    title: "Basic Skincare Ingredient Analyzer",
    description: "Asisten analisis kandungan skincare berbasis AI untuk mendeteksi kecocokan (Match Score) dan tingkat keamanan (Safety Score) bahan produk kosmetik secara real-time berdasarkan profil unik kulit Anda.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Gemini AI"],
    image: "skincare analyzer.png",
    demoUrl: "https://basic-skincare-ingredient-analyzier.vercel.app/",
    githubUrl: "#",
    buttonText: "Visit Website"
  }
];

export default function Projects() {
  return (
    <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="projects">
      {/* Centered Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black font-space-grotesk text-white tracking-tight uppercase">
          Proyek Unggulan
        </h2>
        <p className="text-sm md:text-base text-slate-400 font-medium font-inter mt-3 max-w-xl mx-auto">
          Karya yang telah saya rancang dan kembangkan.
        </p>
      </div>

      {/* Grid container (2 columns on large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#050b16]/95 border border-slate-900 rounded-2xl p-6 group hover:border-[#00ffd2]/30 hover:shadow-[0_0_20px_rgba(0,255,210,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <img
              alt={project.title}
              className="w-full aspect-video object-cover rounded-xl mb-5 border border-slate-900/60"
              src={project.image}
            />

            {/* Year */}
            <span className="text-[#00ffd2] font-semibold text-xs tracking-wider uppercase mb-1.5 font-space-grotesk">
              {project.year}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-black font-space-grotesk mb-3 text-white group-hover:text-[#00ffd2] transition-colors leading-snug">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium font-inter flex-grow">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="px-3 py-1 bg-[#051a17] text-[#00ffd2] border border-[#00ffd2]/10 text-[10px] font-bold rounded-full uppercase tracking-wider font-space-grotesk"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* CTA Buttons Capsule styling */}
            <div className="flex gap-4 w-full mt-auto pt-4 border-t border-slate-900/80">
              <Link
                href={project.demoUrl || "#"}
                target={project.demoUrl && project.demoUrl !== "#" ? "_blank" : undefined}
                className="flex-1 inline-flex items-center justify-center border border-[#00ffd2]/45 hover:border-[#00ffd2] text-[#00ffd2] hover:bg-[#00ffd2]/5 transition-all text-xs font-bold py-2.5 px-4 rounded-full uppercase tracking-wider text-center font-space-grotesk"
              >
                {project.buttonText || "Visit Website"}
              </Link>
              <Link
                href={project.githubUrl || "#"}
                target={project.githubUrl && project.githubUrl !== "#" ? "_blank" : undefined}
                className="flex-1 inline-flex items-center justify-center border border-purple-500/40 hover:border-purple-400 text-purple-400 hover:bg-purple-500/5 transition-all text-xs font-bold py-2.5 px-4 rounded-full uppercase tracking-wider text-center font-space-grotesk"
              >
                Git-Hub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
