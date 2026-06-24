"use client";

export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg
        className="w-full h-full opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Glow Filters */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <linearGradient id="cyan-to-blue-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd2" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#00b8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00ffd2" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Top horizontal divider line */}
        <path
          d="M0 80 H1440"
          stroke="url(#cyan-to-blue-line)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.5"
        />

        {/* Left Side Circuit Pattern */}
        <path
          d="M 0 350 H 350 L 500 500 V 750 L 400 850 H 0"
          stroke="url(#cyan-to-blue-line)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        
        {/* Secondary Left Inner Line */}
        <path
          d="M 0 320 H 320 L 450 450 V 720 L 380 790 H 0"
          stroke="rgba(0, 184, 255, 0.12)"
          strokeWidth="1.2"
        />

        {/* Right Side Circuit Pattern */}
        <path
          d="M 1440 100 L 1100 100 L 950 250 V 600 L 1050 700 H 1440"
          stroke="url(#cyan-to-blue-line)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />

        {/* Secondary Right Inner Line */}
        <path
          d="M 1440 130 L 1120 130 L 980 270 V 580 L 1020 620 H 1440"
          stroke="rgba(0, 255, 210, 0.12)"
          strokeWidth="1.2"
        />

        {/* Additional geometric accent line in bottom-left */}
        <path
          d="M 0 830 H 220 L 290 900"
          stroke="url(#cyan-to-blue-line)"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Decorative dots at line intersections */}
        <circle cx="350" cy="350" r="3" fill="#00ffd2" opacity="0.6" filter="url(#glow)" />
        <circle cx="500" cy="500" r="3" fill="#00b8ff" opacity="0.6" filter="url(#glow)" />
        <circle cx="1100" cy="100" r="3" fill="#00ffd2" opacity="0.6" filter="url(#glow)" />
        <circle cx="950" cy="250" r="3" fill="#00b8ff" opacity="0.6" filter="url(#glow)" />
      </svg>
    </div>
  );
}
