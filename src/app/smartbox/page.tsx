"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmartboxPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("smartbox123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      title: "Kontrol Stop Kontak Ganda",
      description:
        "Mengatur jadwal aktif/nonaktif stop kontak 1 dan 2 yang tertanam langsung pada Smartbox untuk efisiensi daya.",
      color: "text-emerald-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Monitor Lingkungan & Alarm Gas",
      description:
        "Memantau suhu secara real-time dan mendeteksi adanya gas berbahaya, memicu alarm darurat jika terdeteksi kebocoran.",
      color: "text-cyan-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Wake Word & Voice Command",
      description:
        "Sistem kendali suara offline dengan wake word khusus menggunakan model TensorFlow Lite yang dilatih di Edge Impulse.",
      color: "text-purple-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
    {
      title: "Bluetooth Speaker Mode",
      description:
        "Dapat difungsikan sebagai speaker Bluetooth nirkabel untuk memutar lagu dan kebutuhan multimedia lainnya.",
      color: "text-pink-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
    },
    {
      title: "Interaksi Suara AI (STT & TTS)",
      description:
        "Mampu berbicara langsung dengan AI terintegrasi menggunakan Gemini API & OpenRouter untuk transkripsi dan sintesis ucapan.",
      color: "text-emerald-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      title: "Penjadwalan Otomatis & Timer",
      description:
        "Dilengkapi fitur timer presisi dan alarm terjadwal secara mandiri untuk mengontrol status daya perangkat eksternal.",
      color: "text-cyan-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Visualisasi Audio LED Pulse",
      description:
        "Efek pencahayaan LED dinamis terintegrasi yang berdenyut dan bergema mengikuti frekuensi dan amplitudo suara.",
      color: "text-purple-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Greeting Voice Interaktif",
      description:
        "Secara otomatis menyapa dan memberikan informasi kepada siapa pun yang melintas di depan Smartbox menggunakan sensor jarak.",
      color: "text-pink-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
  ];

  const techStack = [
    "Next.js",
    "ESP32-S3",
    "MQTT",
    "Gemini API",
    "OpenRouter",
    "Edge Impulse",
    "TensorFlow Lite",
    "Arduino IDE",
    "Tailwind CSS",
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-300 overflow-x-hidden relative selection:bg-emerald-500/30">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 md:px-12 py-4 border-b bg-slate-950/95 border-slate-800/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Portfolio
        </Link>
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase font-mono">
          Proyek Unggulan 2026
        </span>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-left">
          <span className="px-3.5 py-1 text-xs font-bold tracking-widest text-emerald-400 uppercase rounded-full bg-slate-900 border border-emerald-500/30">
            Smart Home AI / IoT
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight leading-tight font-space-grotesk">
            Asisten Ruang Pintar dengan Fitur AI Smartbox Assistant
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 max-w-4xl leading-relaxed font-inter">
            Asisten ruang pintar berbasis IoT dan AI yang dirancang untuk membantu memantau kondisi lingkungan, mengontrol catu daya stop kontak, serta berfungsi sebagai sarana hiburan cerdas di dalam ruangan dengan asisten suara AI dua arah.
          </p>
        </div>

        {/* Video Showcase & Tech Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Video Showcase (8 Cols) */}
          <div className="lg:col-span-8 group rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl overflow-hidden relative">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/smartbox video.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video HTML5.
              </video>
            </div>
            <div className="mt-4 px-4 pb-2">
              <h3 className="text-sm font-semibold text-slate-300">Showcase Video Demonstrasi</h3>
              <p className="text-xs text-slate-500 mt-1">
                Interaksi suara, monitoring sensor, dan kontrol hardware Smartbox secara real-time.
              </p>
            </div>
          </div>

          {/* Sidebar Tech Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Box 1: Teknologi Lingkungan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Teknologi Lingkungan
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[11px] uppercase tracking-widest font-semibold rounded-full bg-slate-900 border border-slate-800 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2: Pemberdayaan AI Hybrid */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
              <h2 className="text-lg font-bold text-slate-100 mb-2">Pemberdayaan AI Hybrid</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menyatukan pemrosesan suara offline (TensorFlow Lite untuk pengenalan wake word secara langsung pada hardware ESP32-S3) dengan kecerdasan cloud (Gemini API &amp; OpenRouter untuk dialog percakapan kontekstual yang mendalam).
              </p>
            </div>
          </div>
        </div>

        {/* Section: 8 Fitur Utama Smartbox */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-space-grotesk">
              8 Fitur Utama Smartbox
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Integrasi cerdas antara asisten AI, IoT, sensor keselamatan, dan multimedia.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-800 shadow-inner ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Skema & Arsitektur Sistem */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-space-grotesk">
              Skema &amp; Arsitektur Sistem
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Desain alur komunikasi MQTT, logika mikrokontroler, dan interaksi API cloud.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 md:p-8 shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 group">
              <img
                src="/skema.png"
                alt="Skema Sistem Smartbox Assistant"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-6 text-center max-w-2xl">
              <h4 className="text-sm font-semibold text-slate-200">Diagram Arsitektur Perangkat Keras</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Mikrokontroler ESP32-S3 memproses audio lokal untuk Wake Word via TensorFlow Lite, mengendalikan modul stop kontak, sensor suhu/gas, dan LED pulse. Komunikasi dua arah ke antarmuka web Next.js dijembatani oleh protokol MQTT. Ketika interaksi suara aktif, audio dikirim untuk transkripsi dan sintesis respons melalui Gemini API &amp; OpenRouter.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Demonstrasi & Integrasi Web */}
        <section className="mb-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-space-grotesk">
              Demonstrasi &amp; Integrasi Web
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Tonton video operasional di YouTube dan uji coba dashboard admin Smartbox secara langsung.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: YouTube Video Embed */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-2xl flex flex-col hover:border-emerald-500/40 transition-colors duration-300">
              <div className="flex items-center gap-2 px-2 pb-3 border-b border-slate-800/80 mb-3">
                <span className="w-3.5 h-3.5 rounded-full bg-red-600 flex items-center justify-center text-[8px] text-white font-bold">
                  ▶
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  YouTube Demo Player (Auto-play on Scroll)
                </span>
              </div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Rn7ZDXDlu9Y?enablejsapi=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-sm font-semibold text-slate-300">Uji Operasional Alat &amp; Fitur</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Video demonstrasi menyeluruh pengujian operasional fitur hardware, kontrol relay, dan respons AI.
                </p>
              </div>
            </div>

            {/* Right: Dashboard Web Admin Mockup */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-2xl flex flex-col hover:border-cyan-500/40 transition-colors duration-300">
              {/* Browser Window Header */}
              <div className="flex items-center gap-2 px-2 pb-3 border-b border-slate-800/80">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 ml-4 bg-slate-950 px-3 py-1 rounded-md text-[10px] text-slate-500 font-mono flex items-center justify-between border border-slate-800">
                  <span>smartbox-asisten.vercel.app/admin</span>
                  <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Clickable Image */}
              <a
                href="https://smartbox-asisten.vercel.app/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mt-3 group-hover:scale-[1.01] transition-transform duration-500 block"
              >
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors z-10 pointer-events-none" />
                <img
                  src="/websmartbox.png"
                  alt="Dashboard Admin Smartbox"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Action & Access Code Bar */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300">Dashboard Web Admin</h3>
                  <p className="text-xs text-slate-500 mt-1">Uji sistem kontrol dan monitor logs hardware secara langsung.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">Kode Akses:</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all text-xs font-mono text-emerald-400 group active:scale-95 cursor-pointer"
                    title="Klik untuk menyalin kode akses"
                  >
                    <span>{copied ? "Disalin! ✓" : "smartbox123"}</span>
                    <svg
                      className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Open Web Button */}
              <div className="mt-4 px-2 border-t border-slate-800/80 pt-3 flex justify-end">
                <a
                  href="https://smartbox-asisten.vercel.app/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider text-slate-950 uppercase transition-all rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] active:scale-95 font-space-grotesk"
                >
                  Buka Dashboard Web
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-sm text-center border-t border-slate-800 bg-slate-950/90 text-slate-500 relative z-20">
        <p>© 2026 Alfareza Kamal Santoso. Asisten AI Smartbox Project.</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <Link className="hover:text-emerald-400 transition-colors" href="/#beranda">
            Beranda
          </Link>
          <Link className="hover:text-emerald-400 transition-colors" href="/#projects">
            Proyek Lainnya
          </Link>
        </div>
      </footer>
    </div>
  );
}
