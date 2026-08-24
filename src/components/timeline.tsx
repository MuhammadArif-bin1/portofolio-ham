"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ─── Types ─── */
interface Milestone {
  year: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  side: "left" | "right";
  /** stripe color class name */
  stripeClass: string;
  /** Optional photo gallery for achievements */
  photos?: { src: string; alt: string; badge?: string }[];
}

const milestones: Milestone[] = [
  {
    year: "2026",
    icon: "📡",
    title: "Mikrotik Networking Academy",
    description: "Mikrotik MTCNA: Mikrotik Certified Network Associate",
    link: "/Sertifikat/mikrotik.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    stripeClass: "stripe-gold",
    photos: [
      {
        src: "/Sertifikat/mikrotik.PNG",
        alt: "Sertifikat Mikrotik MTCNA - Mikrotik Certified Network Associate",
        badge: "📡 MTCNA",
      },
    ],
  },
  {
    year: "2023",
    icon: "🐍",
    title: "Cisco Networking Academy",
    description: "PCAP: Programming Essentials In Python",
    link: "/Sertifikat/pcap.PNG",
    linkLabel: "Sertifikat",
    side: "right",
    stripeClass: "stripe-blue",
    photos: [
      {
        src: "/Sertifikat/pcap.PNG",
        alt: "Sertifikat PCAP - Programming Essentials In Python",
        badge: "🐍 PCAP",
      },
    ],
  },
  {
    year: "2022",
    icon: "🎨",
    title: "Seminar",
    description: "Fundamental Of User Interface, User Experience",
    link: "/Sertifikat/fundamental.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    stripeClass: "stripe-pink",
    photos: [
      {
        src: "/Sertifikat/fundamental.PNG",
        alt: "Sertifikat Fundamental UI/UX Design",
        badge: "🎨 UI/UX",
      },
    ],
  },
  {
    year: "2025",
    icon: "✨",
    title: "JNKTI Jurnal Nasional",
    description:
      "Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok Smartfrenworld Menggunakan Algoritma Logistic Regression",
    link: "/Sertifikat/Jurnal Semester 5.pdf",
    linkLabel: "Detail",
    side: "right",
    stripeClass: "stripe-purple",
  },
  {
    year: "2025",
    icon: "🚀",
    title: "IT Bootcamp",
    description:
      "Tranformasi Digital : Integrasi IoT & kecerdasan buatan untuk solusi masa",
    link: "/Sertifikat/it bootcamp.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    stripeClass: "stripe-green",
    photos: [
      {
        src: "/Sertifikat/bootcamp-showcase.png",
        alt: "IT Bootcamp - Sertifikat & Juara 1 Muhammad Arif Giovanni",
        badge: "🏆 Juara 1",
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
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md animate-[fadeIn_0.3s_ease]" />

      {/* Content */}
      <div
        className="relative z-10 max-w-2xl w-[90vw] animate-[lightboxIn_0.4s_cubic-bezier(.16,1,.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-surface-container-high/90 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all hover:scale-110 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        {current.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-500/30 animate-[badgeShimmer_3s_ease_infinite]">
            {current.badge}
          </div>
        )}

        {/* Image container */}
        <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
          <img
            key={index}
            src={current.src}
            alt={current.alt}
            className="w-full h-auto object-contain bg-surface-container-lowest animate-[fadeIn_0.3s_ease]"
            style={{ maxHeight: "80vh" }}
          />
        </div>

        {/* Navigation arrows (only if multiple photos) */}
        {photos.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-surface-container-high/90 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all hover:scale-110 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 rounded-full bg-surface-container-high/90 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all hover:scale-110 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Caption */}
        <p className="text-center text-on-surface-variant text-sm mt-4 font-medium">
          {current.alt}
        </p>

        {/* Dot indicators (only if multiple photos) */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === index
                    ? "bg-primary scale-125"
                    : "bg-on-surface/30 hover:bg-on-surface/50"
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
  onClick,
  onPhotoClick,
}: {
  milestone: Milestone;
  index: number;
  activeIndex: number;
  total: number;
  onClick: () => void;
  onPhotoClick: (photos: { src: string; alt: string; badge?: string }[], startIndex: number) => void;
}) {
  const isActive = index === activeIndex;
  const offset = index - activeIndex;

  // Calculate 3D position based on offset from active
  const getTransform = () => {
    if (offset === 0) {
      // Active card — front and center
      return "translateX(0px) translateZ(80px) rotateY(0deg) scale(1)";
    }

    const direction = offset > 0 ? 1 : -1;
    const absOffset = Math.abs(offset);

    if (absOffset === 1) {
      // Immediate neighbors
      return `translateX(${direction * 280}px) translateZ(-40px) rotateY(${-direction * 25}deg) scale(0.82)`;
    }

    if (absOffset === 2) {
      // Second neighbors
      return `translateX(${direction * 480}px) translateZ(-160px) rotateY(${-direction * 40}deg) scale(0.65)`;
    }

    // Far cards — hidden offscreen
    return `translateX(${direction * 700}px) translateZ(-280px) rotateY(${-direction * 55}deg) scale(0.5)`;
  };

  const getOpacity = () => {
    const absOffset = Math.abs(offset);
    if (absOffset === 0) return 1;
    if (absOffset === 1) return 0.85;
    if (absOffset === 2) return 0.55;
    return 0;
  };

  const getZIndex = () => {
    return total - Math.abs(offset);
  };

  const getFilter = () => {
    const absOffset = Math.abs(offset);
    if (absOffset === 0) return "none";
    if (absOffset === 1) return "brightness(0.85)";
    return "brightness(0.7) blur(1px)";
  };

  // Subtle random tilt for organic feel
  const tiltDeg = ((index * 7 + 3) % 9) - 4; // Deterministic pseudo-random between -4 and 4

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
        width: "280px",
        transform: `${getTransform()} rotate(${isActive ? 0 : tiltDeg}deg)`,
        opacity: getOpacity(),
        zIndex: getZIndex(),
        filter: getFilter(),
        pointerEvents: Math.abs(offset) > 2 ? "none" : "auto",
        left: "50%",
        marginLeft: "-140px",
        top: "0",
      }}
    >
      {/* Photo area with stripe pattern */}
      <div
        className={`polaroid-stripe ${milestone.stripeClass} relative overflow-hidden`}
        style={{ width: "256px", height: "256px" }}
      >
        {/* If there's an actual photo, show it */}
        {milestone.photos && milestone.photos.length > 0 ? (
          <img
            src={milestone.photos[0].src}
            alt={milestone.photos[0].alt}
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "multiply", opacity: 0.7 }}
          />
        ) : null}

        {/* Year tag */}
        <div className="polaroid-year-tag">
          {milestone.year} / {milestone.icon}
        </div>

        {/* Badge overlay on active */}
        {isActive && milestone.photos?.[0]?.badge && (
          <div
            className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #eab308, #f59e0b)",
              color: "#000",
            }}
          >
            {milestone.photos[0].badge}
          </div>
        )}

        {/* View indicator on active */}
        {isActive && milestone.photos && milestone.photos.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-black text-sm font-semibold shadow-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
              </svg>
              Lihat
            </div>
          </div>
        )}
      </div>

      {/* Label area */}
      <div className="mt-2 px-1">
        <p className="polaroid-label text-base truncate" title={milestone.title}>
          {milestone.title}
        </p>
        {isActive && (
          <p
            className="text-xs mt-1 line-clamp-2"
            style={{ color: "#666", fontStyle: "normal", fontFamily: "'Inter', sans-serif" }}
          >
            {milestone.description}
          </p>
        )}
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
  return (
    <div
      className="mt-8 max-w-lg mx-auto text-center"
      style={{
        animation: "fadeIn 0.5s ease forwards",
      }}
    >
      {/* Icon + Year */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="text-3xl">{milestone.icon}</span>
        <span className="text-primary text-sm font-bold tracking-widest uppercase">
          {milestone.year}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-on-surface text-xl font-bold mb-2">{milestone.title}</h4>

      {/* Description */}
      <p className="text-on-surface-variant text-sm mb-5 leading-relaxed max-w-md mx-auto">
        {milestone.description}
      </p>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {/* Certificate / Detail Link */}
        <a
          href={milestone.link}
          className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5"
        >
          {milestone.linkLabel} <span className="ml-1 text-xs">↗</span>
        </a>

        {/* View Photos Button */}
        {milestone.photos && milestone.photos.length > 0 && (
          <button
            onClick={() => onPhotoClick(milestone.photos!, 0)}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            Lihat Gambar
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
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const [lightbox, setLightbox] = useState<{
    photos: { src: string; alt: string; badge?: string }[];
    startIndex: number;
  } | null>(null);

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
      if (Math.abs(diff) > 50) {
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
        className="relative z-10 bg-transparent py-24 overflow-hidden"
        id="timeline"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-on-surface mb-3 tracking-tight">
              Garis Waktu Pencapaian
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-on-surface-variant text-sm mt-4">
              Klik foto untuk melihat detail • Geser atau gunakan tombol panah untuk navigasi
            </p>
          </div>

          {/* 3D Carousel Container */}
          <div
            className={`relative ${isVisible ? "polaroid-gallery-enter" : "opacity-0"}`}
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* Carousel Stage */}
            <div
              className="relative mx-auto"
              style={{
                height: "420px",
                transformStyle: "preserve-3d",
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
                  onClick={() => setActiveIndex(i)}
                  onPhotoClick={openLightbox}
                />
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-6">
              {/* Left Arrow */}
              <button
                className="carousel-nav-btn"
                onClick={goLeft}
                aria-label="Previous"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-3">
                {milestones.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="carousel-nav-btn"
                onClick={goRight}
                aria-label="Next"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
