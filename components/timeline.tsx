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
  /** Optional photo gallery for achievements */
  photos?: { src: string; alt: string; badge?: string }[];
}

const milestones: Milestone[] = [
  {
    year: "2026",
    icon: "📡",
    title: "Mikrotik Networking Academy",
    description: "Mikrotik MTCNA: Mikrotik Certified Network Associate",
    link: "mikrotik.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    photos: [
      {
        src: "/mikrotik.PNG",
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
    link: "pcap.PNG",
    linkLabel: "Sertifikat",
    side: "right",
    photos: [
      {
        src: "/pcap.PNG",
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
    link: "fundamental.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    photos: [
      {
        src: "/fundamental.PNG",
        alt: "Sertifikat Fundamental UI/UX Design",
        badge: "🎨 UI/UX",
      },
    ],
  },
  {
    year: "2025",
    icon: "✨",
    title: "JNKTI: Jurnal Nasional Komputasi dan Teknologi Informasi",
    description:
      "Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok Smartfrenworld Menggunakan Algoritma Logistic Regression",
    link: "Jurnal Semester 5.pdf",
    linkLabel: "Detail",
    side: "right",
  },
  {
    year: "2025",
    icon: "🚀",
    title: "IT Bootcamp",
    description:
      "Tranformasi Digital : Integrasi IoT & kecerdasan buatan untuk solusi masa",
    link: "it bootcamp.PNG",
    linkLabel: "Sertifikat",
    side: "left",
    photos: [
      {
        src: "/bootcamp-showcase.png",
        alt: "IT Bootcamp - Sertifikat & Juara 1 Muhammad Arif Giovanni",
        badge: "🏆 Juara 1",
      },
    ],
  },
];

/* ─── 3D Tilt Card ─── */
function TiltCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [shadow, setShadow] = useState("0 8px 32px rgba(0,0,0,0.3)");
  const [glowOpacity, setGlowOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  /* Intersection Observer — fade-in from depth */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 12;
      const rotateX = ((midY - y) / midY) * 12;
      setTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`
      );
      setShadow(
        `${-rotateY * 1.5}px ${rotateX * 1.5}px 40px rgba(0,255,210,0.12), 0 8px 32px rgba(0,0,0,0.4)`
      );
      setGlowOpacity(1);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setShadow("0 8px 32px rgba(0,0,0,0.3)");
    setGlowOpacity(0);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isVisible
          ? transform
          : "perspective(800px) rotateX(8deg) translateY(60px) scale3d(0.92,0.92,0.92)",
        opacity: isVisible ? 1 : 0,
        boxShadow: shadow,
        transition: "transform 0.35s cubic-bezier(.03,.98,.52,.99), opacity 0.7s ease, box-shadow 0.35s ease",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
        position: "relative",
      }}
    >
      {/* Glow border overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          opacity: glowOpacity,
          transition: "opacity 0.35s ease",
          boxShadow:
            "inset 0 0 0 1px rgba(0,255,210,0.35), 0 0 20px rgba(0,255,210,0.08)",
          borderRadius: "inherit",
        }}
      />
      {children}
    </div>
  );
}

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

/* ─── Main Timeline ─── */
export default function Timeline() {
  const [lightbox, setLightbox] = useState<{
    photos: { src: string; alt: string; badge?: string }[];
    startIndex: number;
  } | null>(null);

  return (
    <>
      <section
        className="relative z-10 bg-transparent py-24"
        id="timeline"
        style={{ perspective: "1200px" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Section heading */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-3 tracking-tight">
              Garis Waktu Pencapaian
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>

          <div className="relative">
            {/* Glowing Track */}
            <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-track" />

            {milestones.map((m, i) => (
              <div key={i} className="relative w-full mb-16">
                <div
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    m.side === "right" ? "md:ml-auto" : ""
                  }`}
                >
                  <TiltCard
                    delay={i * 150}
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 text-left"
                  >
                    {/* Year & Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-primary text-sm font-bold">
                        {m.year}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-on-surface text-xl font-bold mb-2">
                      {m.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                      {m.description}
                    </p>

                    {/* Photo Showcase Gallery */}
                    {m.photos && m.photos.length > 0 && (
                      <div
                        className={`mb-4 grid gap-2 ${
                          m.photos.length > 1
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {m.photos.map((photo, pi) => (
                          <button
                            key={pi}
                            onClick={() =>
                              setLightbox({
                                photos: m.photos!,
                                startIndex: pi,
                              })
                            }
                            className="group relative w-full rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all cursor-pointer bg-surface-container-low"
                          >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                            {/* Badge on thumbnail */}
                            {photo.badge && (
                              <div className="absolute top-2 left-2 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-bold text-xs shadow-md">
                                {photo.badge}
                              </div>
                            )}

                            {/* Click indicator */}
                            <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                              </svg>
                              Lihat
                            </div>

                            {/* Thumbnail Image */}
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Certificate / Detail Link */}
                      <a
                        href={m.link}
                        className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5"
                      >
                        {m.linkLabel}{" "}
                        <span className="ml-1 text-xs">↗</span>
                      </a>

                      {/* View Photos Button */}
                      {m.photos && m.photos.length > 0 && (
                        <button
                          onClick={() =>
                            setLightbox({
                              photos: m.photos!,
                              startIndex: 0,
                            })
                          }
                          className="flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                          Lihat Gambar
                          {m.photos.length > 1 && (
                            <span className="text-xs opacity-70">({m.photos.length})</span>
                          )}
                        </button>
                      )}
                    </div>
                  </TiltCard>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 timeline-node" />
              </div>
            ))}
          </div>
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
