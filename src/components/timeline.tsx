"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ─── Types ─── */
interface Milestone {
  year: string;
  category?: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  side: "left" | "right";
  /** Optional stripe color class name */
  stripeClass?: string;
  /** Optional photo gallery for achievements */
  photos?: { src: string; alt: string; badge?: string }[];
}

const milestones: Milestone[] = [
  {
    year: "2026",
    category: "Sertifikasi Web",
    title: "Dicoding Indonesia",
    description:
      "Sertifikat Kelulusan Belajar Dasar Pemrograman Web - Mempelajari HTML, CSS, Layout Responsif Flexbox, dan Pembuatan Website Terstruktur.",
    link: "/Sertifikat/Sertifikat Belajar Dasar Pemrograman Web.pdf",
    linkLabel: "Lihat Sertifikat (PDF)",
    side: "left",
    stripeClass: "stripe-blue",
    photos: [
      {
        src: "/Sertifikat/dasar-pemrograman-web.png",
        alt: "Sertifikat Dicoding - Belajar Dasar Pemrograman Web",
        badge: "Dicoding Academy",
      },
    ],
  },
  {
    year: "2026",
    category: "Sertifikasi Jaringan",
    title: "Mikrotik Networking Academy",
    description: "Mikrotik MTCNA: Mikrotik Certified Network Associate",
    link: "/Sertifikat/mikrotik.PNG",
    linkLabel: "Lihat Sertifikat",
    side: "right",
    stripeClass: "stripe-gold",
    photos: [
      {
        src: "/Sertifikat/mikrotik.PNG",
        alt: "Sertifikat Mikrotik MTCNA - Mikrotik Certified Network Associate",
        badge: "MTCNA",
      },
    ],
  },
  {
    year: "2025",
    category: "Prestasi & Bootcamp",
    title: "IT Bootcamp",
    description:
      "Transformasi Digital: Integrasi IoT & kecerdasan buatan untuk solusi masa depan",
    link: "/Sertifikat/it bootcamp.PNG",
    linkLabel: "Lihat Sertifikat",
    side: "left",
    stripeClass: "stripe-green",
    photos: [
      {
        src: "/Sertifikat/bootcamp-showcase.png",
        alt: "IT Bootcamp - Sertifikat & Juara 1 Muhammad Arif Giovanni",
        badge: "Juara 1",
      },
    ],
  },
  {
    year: "2025",
    category: "Publikasi Ilmiah",
    title: "JNKTI Jurnal Nasional",
    description:
      "Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok Smartfrenworld Menggunakan Algoritma Logistic Regression",
    link: "/Sertifikat/Jurnal Semester 5.pdf",
    linkLabel: "Lihat Jurnal (PDF)",
    side: "right",
    stripeClass: "stripe-purple",
    photos: [
      {
        src: "/Sertifikat/jurnal-semester-5.png",
        alt: "JNKTI Jurnal Nasional - Analisis Sentimen TikTok",
        badge: "Jurnal Nasional",
      },
    ],
  },
  {
    year: "2024",
    category: "Sertifikasi Jaringan",
    title: "Cisco Networking Academy",
    description: "CCNAv7: Introduction to Networks",
    link: "/Sertifikat/ccnav7.PNG",
    linkLabel: "Lihat Sertifikat",
    side: "left",
    stripeClass: "stripe-cyan",
    photos: [
      {
        src: "/Sertifikat/ccnav7.PNG",
        alt: "Sertifikat Cisco - CCNAv7: Introduction to Networks",
        badge: "CCNAv7",
      },
    ],
  },
  {
    year: "2023",
    category: "Sertifikasi Python",
    title: "Cisco Networking Academy",
    description: "PCAP: Programming Essentials In Python",
    link: "/Sertifikat/pcap.PNG",
    linkLabel: "Lihat Sertifikat",
    side: "right",
    stripeClass: "stripe-blue",
    photos: [
      {
        src: "/Sertifikat/pcap.PNG",
        alt: "Sertifikat PCAP - Programming Essentials In Python",
        badge: "PCAP Python",
      },
    ],
  },
  {
    year: "2022",
    category: "Seminar Desain",
    title: "Seminar UI/UX Design",
    description: "Fundamental Of User Interface, User Experience Design",
    link: "/Sertifikat/fundamental.PNG",
    linkLabel: "Lihat Sertifikat",
    side: "left",
    stripeClass: "stripe-pink",
    photos: [
      {
        src: "/Sertifikat/fundamental.PNG",
        alt: "Sertifikat Fundamental UI/UX Design",
        badge: "UI/UX",
      },
    ],
  },
];

/* ─── Lightbox Gallery Modal ─── */
function Lightbox({
  photos,
  startIndex = 0,
  onClose,
}: {
  photos: { src: string; alt: string; badge?: string }[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const current = photos[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
  }, [photos.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i < photos.length - 1 ? i + 1 : 0));
  }, [photos.length]);

  /* Close on ESC, navigate with arrows */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md animate-[fadeIn_0.3s_ease]" />

      {/* Content */}
      <div
        className="relative z-10 max-w-2xl w-full animate-[lightboxIn_0.4s_cubic-bezier(.16,1,.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Tutup pratinjau"
          className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 w-10 h-10 rounded-full bg-slate-900/90 border border-[#00ffd2]/30 flex items-center justify-center text-slate-200 hover:text-[#00ffd2] hover:border-[#00ffd2]/70 transition-all hover:scale-110 cursor-pointer shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        {current.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30">
            {current.badge}
          </div>
        )}

        {/* Image container */}
        <div className="rounded-2xl overflow-hidden border border-[#00ffd2]/30 shadow-2xl shadow-[#00ffd2]/10 bg-slate-950">
          <img
            key={index}
            src={current.src}
            alt={current.alt}
            className="w-full h-auto object-contain max-h-[75vh] animate-[fadeIn_0.3s_ease] mx-auto"
          />
        </div>

        {/* Navigation arrows (only if multiple photos) */}
        {photos.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Sebelumnya"
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/90 border border-[#00ffd2]/30 flex items-center justify-center text-slate-200 hover:text-[#00ffd2] hover:border-[#00ffd2]/70 transition-all hover:scale-110 cursor-pointer shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Berikutnya"
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/90 border border-[#00ffd2]/30 flex items-center justify-center text-slate-200 hover:text-[#00ffd2] hover:border-[#00ffd2]/70 transition-all hover:scale-110 cursor-pointer shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Caption */}
        <p className="text-center text-slate-300 text-xs sm:text-sm mt-3.5 font-medium px-4 line-clamp-2">
          {current.alt}
        </p>

        {/* Dot indicators (only if multiple photos) */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Lihat foto ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === index
                    ? "bg-[#00ffd2] scale-125 shadow-sm shadow-[#00ffd2]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── 3D Polaroid Card ─── */
function PolaroidCard({
  milestone,
  index,
  activeIndex,
  total,
  isMobile,
  onClick,
  onPhotoClick,
}: {
  milestone: Milestone;
  index: number;
  activeIndex: number;
  total: number;
  isMobile: boolean;
  onClick: () => void;
  onPhotoClick: (photos: { src: string; alt: string; badge?: string }[], startIndex: number) => void;
}) {
  const isActive = index === activeIndex;
  const offset = index - activeIndex;

  // Responsive card dimensions
  const cardWidth = isMobile ? 250 : 280;
  const photoSize = isMobile ? 228 : 256;
  const marginLeft = -(cardWidth / 2);

  // Calculate 3D position based on offset from active
  const getTransform = () => {
    if (offset === 0) {
      return isMobile
        ? "translateX(0px) translateZ(40px) rotateY(0deg) scale(1)"
        : "translateX(0px) translateZ(80px) rotateY(0deg) scale(1)";
    }

    const direction = offset > 0 ? 1 : -1;
    const absOffset = Math.abs(offset);

    if (isMobile) {
      if (absOffset === 1) {
        // Subtle peek on mobile: fits cleanly inside 360px-414px mobile viewports without cut-off
        return `translateX(${direction * 65}px) translateZ(-60px) rotateY(${-direction * 15}deg) scale(0.82)`;
      }
      // Far cards hidden on mobile
      return `translateX(${direction * 120}px) translateZ(-160px) scale(0.5)`;
    }

    // Desktop
    if (absOffset === 1) {
      return `translateX(${direction * 270}px) translateZ(-40px) rotateY(${-direction * 22}deg) scale(0.84)`;
    }

    if (absOffset === 2) {
      return `translateX(${direction * 470}px) translateZ(-140px) rotateY(${-direction * 38}deg) scale(0.66)`;
    }

    return `translateX(${direction * 650}px) translateZ(-240px) rotateY(${-direction * 50}deg) scale(0.5)`;
  };

  const getOpacity = () => {
    const absOffset = Math.abs(offset);
    if (absOffset === 0) return 1;
    if (isMobile) {
      if (absOffset === 1) return 0.35;
      return 0; // Hide 2+ cards on mobile to avoid overflow
    }
    if (absOffset === 1) return 0.85;
    if (absOffset === 2) return 0.45;
    return 0;
  };

  const getZIndex = () => {
    return total - Math.abs(offset);
  };

  const getFilter = () => {
    const absOffset = Math.abs(offset);
    if (absOffset === 0) return "none";
    if (absOffset === 1) return "brightness(0.88)";
    return "brightness(0.7) blur(1px)";
  };

  // Subtle random tilt for organic feel
  const tiltDeg = ((index * 7 + 3) % 9) - 4;

  return (
    <div
      className="polaroid-card absolute"
      onClick={(e) => {
        e.stopPropagation();
        if (isActive && milestone.photos && milestone.photos.length > 0) {
          onPhotoClick(milestone.photos, 0);
        } else {
          onClick();
        }
      }}
      style={{
        width: `${cardWidth}px`,
        transform: `${getTransform()} rotate(${isActive ? 0 : tiltDeg}deg)`,
        opacity: getOpacity(),
        zIndex: getZIndex(),
        filter: getFilter(),
        pointerEvents: (isMobile ? Math.abs(offset) > 1 : Math.abs(offset) > 2) ? "none" : "auto",
        left: "50%",
        marginLeft: `${marginLeft}px`,
        top: "0",
      }}
    >
      {/* Photo container */}
      <div
        className="relative overflow-hidden bg-slate-950 rounded-lg"
        style={{ width: `${photoSize}px`, height: `${photoSize}px` }}
      >
        {/* Render certificate/achievement photo */}
        {milestone.photos && milestone.photos.length > 0 ? (
          <img
            src={milestone.photos[0].src}
            alt={milestone.photos[0].alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#070e1c] text-slate-300">
            <span className="text-xs font-semibold text-[#00ffd2] uppercase tracking-wider mb-2">
              {milestone.category || "Dokumen"}
            </span>
            <span className="text-sm font-bold text-white tracking-wide">
              {milestone.title}
            </span>
          </div>
        )}

        {/* Clean year tag (no emoji icons) */}
        <div className="polaroid-year-tag">
          {milestone.year}
        </div>

        {/* Badge overlay on active */}
        {isActive && milestone.photos?.[0]?.badge && (
          <div
            className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-md"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #eab308, #f59e0b)",
              color: "#000",
            }}
          >
            {milestone.photos[0].badge}
          </div>
        )}

        {/* View indicator on hover/active */}
        {isActive && milestone.photos && milestone.photos.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-950 text-xs font-bold shadow-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
              </svg>
              Lihat
            </div>
          </div>
        )}
      </div>

      {/* Label area (cleanly formatted without ugly cut-offs) */}
      <div className="mt-2.5 px-1">
        <p className="polaroid-label text-sm sm:text-base font-bold text-slate-900 truncate" title={milestone.title}>
          {milestone.title}
        </p>
        <p className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wide uppercase mt-0.5">
          {milestone.category} • {milestone.year}
        </p>
      </div>
    </div>
  );
}

/* ─── Detail Panel for Active Card ─── */
function DetailPanel({
  milestone,
  onPhotoClick,
}: {
  milestone: Milestone;
  onPhotoClick: (photos: { src: string; alt: string; badge?: string }[], startIndex: number) => void;
}) {
  const isPdf = milestone.link.toLowerCase().endsWith(".pdf");

  return (
    <div
      className="mt-8 sm:mt-10 max-w-xl mx-auto text-center px-4"
      style={{
        animation: "fadeIn 0.5s ease forwards",
      }}
    >
      {/* Category + Year Badge (Replaces old emoji icon) */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ffd2]/10 border border-[#00ffd2]/30 text-[#00ffd2] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm shadow-[#00ffd2]/10">
        <span>Tahun {milestone.year}</span>
        {milestone.category && (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffd2]" />
            <span className="text-slate-300">{milestone.category}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h4 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-tight">
        {milestone.title}
      </h4>

      {/* Description */}
      <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed max-w-md sm:max-w-lg mx-auto">
        {milestone.description}
      </p>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        {/* Certificate / Detail Link */}
        <a
          href={milestone.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00ffd2] to-[#00b894] text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-[#00ffd2]/20 hover:shadow-[#00ffd2]/40 hover:scale-105 active:scale-95 transition-all"
        >
          {isPdf ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
          {milestone.linkLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

        {/* View Photos Button */}
        {milestone.photos && milestone.photos.length > 0 && (
          <button
            onClick={() => onPhotoClick(milestone.photos!, 0)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 text-[#00ffd2] border border-[#00ffd2]/30 hover:border-[#00ffd2]/60 hover:bg-[#00ffd2]/10 font-medium text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            Perbesar Gambar
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Timeline — 3D Polaroid Gallery ─── */
export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const [lightbox, setLightbox] = useState<{
    photos: { src: string; alt: string; badge?: string }[];
    startIndex: number;
  } | null>(null);

  // Detect mobile viewport for responsive 3D card layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection observer for entrance animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox) return; // Don't navigate carousel when lightbox is open
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i > 0 ? i - 1 : milestones.length - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i < milestones.length - 1 ? i + 1 : 0));
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox]);

  const goLeft = useCallback(() => {
    setActiveIndex((i) => (i > 0 ? i - 1 : milestones.length - 1));
  }, []);

  const goRight = useCallback(() => {
    setActiveIndex((i) => (i < milestones.length - 1 ? i + 1 : 0));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goRight();
        else goLeft();
      }
    },
    [goLeft, goRight]
  );

  const openLightbox = useCallback(
    (photos: { src: string; alt: string; badge?: string }[], startIndex: number) => {
      setLightbox({ photos, startIndex });
    },
    []
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative z-10 bg-transparent py-16 sm:py-24 overflow-hidden"
        id="timeline"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Garis Waktu Pencapaian
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#00ffd2] mx-auto rounded-full" />
            <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-md mx-auto">
              Klik kartu untuk memperbesar pratinjau • Geser atau gunakan tombol untuk navigasi
            </p>
          </div>

          {/* 3D Carousel Container */}
          <div
            className={`relative ${isVisible ? "polaroid-gallery-enter" : "opacity-0"}`}
            style={{
              perspective: isMobile ? "900px" : "1200px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* Carousel Stage */}
            <div
              className="relative mx-auto select-none"
              style={{
                height: isMobile ? "370px" : "410px",
                transformStyle: "preserve-3d",
                touchAction: "pan-y",
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {milestones.map((m, i) => (
                <PolaroidCard
                  key={i}
                  milestone={m}
                  index={i}
                  activeIndex={activeIndex}
                  total={milestones.length}
                  isMobile={isMobile}
                  onClick={() => setActiveIndex(i)}
                  onPhotoClick={openLightbox}
                />
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-5 sm:gap-8 mt-4 sm:mt-6">
              {/* Left Arrow */}
              <button
                className="carousel-nav-btn"
                onClick={goLeft}
                aria-label="Sertifikat Sebelumnya"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 sm:gap-3">
                {milestones.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Pindah ke slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="carousel-nav-btn"
                onClick={goRight}
                aria-label="Sertifikat Berikutnya"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Active Card Detail Panel */}
          <DetailPanel
            key={activeIndex}
            milestone={milestones[activeIndex]}
            onPhotoClick={openLightbox}
          />
        </div>
      </section>

      {/* Lightbox Portal */}
      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
