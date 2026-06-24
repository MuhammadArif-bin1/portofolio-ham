"use client";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "design" | "aiml";
  color: string; // dot indicator color
  icon: React.ReactNode;
}

const skills: SkillItem[] = [
  {
    name: "HTML5",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26"/>
        <path d="M12 2.2v19.5l6.8-2.2 1.5-16.7H12z" fill="#EF652A"/>
        <path d="M12 9.5H8.3l-.2-2.7h3.9V4.2H5.3l.7 8h6V9.5zm0 5.4l-3.3-.9-.2-2.4H5.7l.4 5 5.9 1.6v-3.3z" fill="#EBEBEB"/>
        <path d="M12 9.5v2.7h3.5l-.3 3.7-3.2.9v3.3l5.9-1.6.8-9.6H12zm0-5.3v2.6h6.4l.2-2.6H12z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#1572B6"/>
        <path d="M12 2.2v19.5l6.8-2.2 1.5-16.7H12z" fill="#33A9DC"/>
        <path d="M12 9.5H8.3l-.2-2.7h3.9V4.2H5.3l.7 8h6V9.5zm0 5.4l-3.3-.9-.2-2.4H5.7l.4 5 5.9 1.6v-3.3z" fill="#EBEBEB"/>
        <path d="M12 6.8v-2.6h6.4l-.2 2.6H12zm0 5.4v-2.7h3.8l-.4 4-3.4 1v3.3l5.9-1.6.7-8.2H12z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M18.7 18.5c-.6.8-1.5 1.3-2.7 1.3-1.6 0-2.6-1-2.6-2.6v-1.1h1.3v1.1c0 .9.5 1.4 1.3 1.4.7 0 1.2-.4 1.2-1.1 0-.7-.4-1-1.2-1.3l-.9-.4c-1.3-.5-2-1.2-2-2.5 0-1.5 1.1-2.4 2.5-2.4 1.2 0 2 .5 2.5 1.4l-1 1c-.3-.5-.7-.8-1.5-.8-.7 0-1.1.4-1.1 1 0 .6.4.8 1.1 1.1l.9.4c1.4.5 2.1 1.2 2.1 2.6 0 1.4-1 2.5-2.6 2.5zm-6.6 0c-.3.4-.8.6-1.5.6-.9 0-1.5-.6-1.5-1.5v-6.3H7.8v6.3c0 1.7 1 2.7 2.7 2.7 1 0 1.8-.4 2.2-1.1l-.6-.7z" fill="#000"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M19.3 18.5c-.6.8-1.5 1.3-2.7 1.3-1.6 0-2.6-1-2.6-2.6v-1.1h1.3v1.1c0 .9.5 1.4 1.3 1.4.7 0 1.2-.4 1.2-1.1 0-.7-.4-1-1.2-1.3l-.9-.4c-1.3-.5-2-1.2-2-2.5 0-1.5 1.1-2.4 2.5-2.4 1.2 0 2 .5 2.5 1.4l-1 1c-.3-.5-.7-.8-1.5-.8-.7 0-1.1.4-1.1 1 0 .6.4.8 1.1 1.1l.9.4c1.4.5 2.1 1.2 2.1 2.6 0 1.4-1 2.5-2.6 2.5zM7.2 9.2H13v1.3h-2.2v8.1H9.5v-8.1H7.2V9.2z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "React",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="#000" stroke="#FFF" strokeWidth="1"/>
        <path d="M18.2 18.2L9.2 6.8H7.8v10.4h1.4V9.4l7.6 9.7c.5-.5.9-1.1 1.4-1.9z" fill="#FFF"/>
        <path d="M15.5 6.8h1.4v10.4h-1.4V6.8z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "Tailwind",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6c-2.3 0-3.8 1.2-4.5 3.5 1-.7 2.1-.9 3.2-.5 1 .3 1.7.9 2.5 1.7 1.2 1.2 2.7 2.6 5.8 2.6 2.3 0 3.8-1.2 4.5-3.5-1 .7-2.1.9-3.2.5-1-.3-1.7-.9-2.5-1.7-1.2-1.2-2.7-2.6-5.8-2.6zm-6 6c-2.3 0-3.8 1.2-4.5 3.5 1-.7 2.1-.9 3.2-.5 1 .3 1.7.9 2.5 1.7 1.2 1.2 2.7 2.6 5.8 2.6 2.3 0 3.8-1.2 4.5-3.5-1 .7-2.1.9-3.2.5-1-.3-1.7-.9-2.5-1.7-1.2-1.2-2.7-2.6-5.8-2.6z" fill="#38BDF8"/>
      </svg>
    )
  },
  {
    name: "Bootstrap",
    category: "frontend",
    color: "#00b8ff",
    icon: (
      <svg className="w-10 h-10 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#7952B3"/>
        <path d="M6.3 5.4h4.3c1.7 0 3 .4 3.7 1.1.7.7 1.1 1.7 1.1 2.8 0 1.2-.4 2.2-1.2 2.8.9.4 1.5 1.4 1.5 2.8 0 1.3-.4 2.3-1.2 3.1-.8.8-2.1 1.2-3.8 1.2H6.3V5.4zm3.1 5.3h1.2c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.3 0-.6-.2-1-.5-1.2-.3-.3-.8-.4-1.5-.4H9.4v3.3zm0 5.9h1.4c.8 0 1.3-.1 1.6-.4.3-.3.5-.8.5-1.4 0-.6-.2-1.1-.5-1.3-.3-.3-.9-.4-1.7-.4H9.4v3.5z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "PHP",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="11.5" ry="6.5" fill="#4F5D95"/>
        <ellipse cx="12" cy="12" rx="10" ry="5" fill="#777BB4"/>
        <path d="M8.2 14.5l.8-3.7h.8c.6 0 1-.1 1.3-.4.3-.3.4-.6.4-1.1s-.1-.8-.4-1c-.3-.2-.7-.3-1.3-.3H8.5l-1.3 6.5h1zm2.3-4.5c.2 0 .4 0 .5.1.1.1.2.2.2.4s-.1.4-.2.5c-.1.1-.3.1-.5.1h-.6l.3-1.1h.5zM14.5 14.5l1.3-6.5h-1l-.5 2.5h-1.3l.5-2.5h-1l-1.3 6.5h1l.5-2.5h1.3l-.5 2.5h1zm5.2 0l.8-3.7h.8c.6 0 1-.1 1.3-.4.3-.3.4-.6.4-1.1s-.1-.8-.4-1c-.3-.2-.7-.3-1.3-.3h-1.3l-1.3 6.5h1zm2.3-4.5c.2 0 .4 0 .5.1.1.1.2.2.2.4s-.1.4-.2.5c-.1.1-.3.1-.5.1h-.6l.3-1.1h.5z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "CodeIgniter",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.1 16.5c-.9 1.1-2.4 1.7-4.1 1.7-2.6 0-4.6-1.5-4.6-4.1 0-2.8 2.2-4.9 5.2-4.9.9 0 1.8.2 2.5.7.3-1.3.1-2.5-.6-3.4-.7-.9-1.9-1.3-3.4-1.3-2.9 0-5.1 1.9-5.1 5.3 0 3.7 2.7 5.7 6.1 5.7 2.1 0 3.9-.9 4.9-2.5l-.9-.7z" fill="#EE4326"/>
        <path d="M14.2 10.4c-.6-.5-1.3-.8-2.2-.8-1.9 0-3.3 1.3-3.3 3.1 0 1.7 1.3 2.7 2.9 2.7 1.1 0 2-.4 2.5-1.1l.1-3.9z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "Laravel",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.3 0L0 3.1v17.8L5.3 24l5.3-3.1V3.1L5.3 0zm4 19.3L5.3 21.6l-4-2.3V4.7l4-2.3 4 2.3v14.6z" fill="#FF2D20"/>
        <path d="M18.7 0l-5.3 3.1v17.8l5.3 3.1 5.3-3.1V3.1L18.7 0zm4 19.3l-4 2.3-4-2.3V4.7l4-2.3 4 2.3v14.6z" fill="#FF2D20"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1 2.2C6.8 2.2 2.5 5.5 2.5 9.5c0 2.2 1.3 4.2 3.4 5.4l-.8 2.4 2.6-1.3c1.3.5 2.8.8 4.4.8 5.3 0 9.6-3.3 9.6-7.3s-4.3-7.3-9.6-7.3z" fill="#00758F"/>
        <path d="M12.1 4C8.2 4 5 6.3 5 9.2c0 1.6.9 3.1 2.5 4l-.6 1.8 1.9-1c1 .4 2.1.6 3.3.6 3.9 0 7.1-2.3 7.1-5.2S16 4 12.1 4z" fill="#F29111"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-.7.5-1.6.8-2.5.8-2.2 0-3.8-1.5-3.8-3.8V11H5.3v-1.5H6.7V8c0-1.7 1-2.7 2.7-2.7.9 0 1.8.3 2.4.7l-.6 1.3c-.4-.3-.9-.5-1.5-.5-.9 0-1.5.5-1.5 1.5v1.2h3.3V11H8.2v2.5c0 1.4.9 2.2 2.2 2.2.6 0 1.2-.2 1.6-.5l.5 1.3z" fill="#336791"/>
      </svg>
    )
  },
  {
    name: "Python",
    category: "backend",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 2c-2.7 0-5.1.2-5.1 2.3v1.8h5.2v.7H4.8C2.7 6.8 2.5 9 2.5 11.7s.2 4.9 2.3 4.9h1.5v-2.1c0-2.3 1.9-4.2 4.2-4.2h5.1V5c0-2.1-2-3-4.2-3z" fill="#3776AB"/>
        <path d="M12.1 22c2.7 0 5.1-.2 5.1-2.3v-1.8h-5.2v-.7h7.2c2.1 0 2.3-2.2 2.3-4.9s-.2-4.9-2.3-4.9h-1.5v2.1c0 2.3-1.9 4.2-4.2 4.2H8.4V19c0 2.1 2 3 4.2 3z" fill="#FFD43B"/>
        <circle cx="9" cy="4.2" r="0.7" fill="#FFF"/>
        <circle cx="15" cy="19.8" r="0.7" fill="#000"/>
      </svg>
    )
  },
  {
    name: "TensorFlow",
    category: "aiml",
    color: "#a855f7",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 4.8l9.5-5.5v21.1l-9.5-5.5V4.8z" fill="#FF6F00"/>
        <path d="M22.5 4.8l-9.5-5.5v21.1l9.5-5.5V4.8z" fill="#FF9100"/>
        <path d="M11 7.2h2v9.6h-2V7.2z" fill="#FFF"/>
        <path d="M7.2 9.1h9.6v2H7.2v-2z" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: "Figma",
    category: "design",
    color: "#f97316",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2 6a3.8 3.8 0 013.8-3.8h4V12H8A3.8 3.8 0 014.2 6z" fill="#F24E1E"/>
        <path d="M4.2 13.8a3.8 3.8 0 013.8-3.8h4v8H8a3.8 3.8 0 01-3.8-3.8z" fill="#A259FF"/>
        <path d="M8 21.8a3.8 3.8 0 01-3.8-3.8V18H8v3.8z" fill="#0ACF83"/>
        <path d="M12 2.2h4a3.8 3.8 0 013.8 3.8 3.8 3.8 0 01-3.8 3.8H12V2.2z" fill="#FF7262"/>
        <path d="M19.8 13.8a3.8 3.8 0 01-3.8 3.8H12v-7.6h4a3.8 3.8 0 013.8 3.8z" fill="#1ABC9C"/>
      </svg>
    )
  }
];

export default function Skill() {
  return (
    <section className="relative z-10 bg-transparent py-20 px-6 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-black font-space-grotesk text-[#00ffd2] mb-3 tracking-wider drop-shadow-[0_0_15px_rgba(0,255,210,0.35)] uppercase">
          Skills | Tech
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-slate-400 font-medium font-inter max-w-xl mx-auto mb-6">
          Matriks teknologi yang dikuasai dalam ranah digital
        </p>

        {/* Custom Line Divider with Glow Dot */}
        <div className="relative w-40 h-1 bg-slate-900 mx-auto my-8 rounded">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00ffd2] shadow-[0_0_10px_#00ffd2]"></div>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-xs font-bold tracking-wider uppercase text-slate-300 font-space-grotesk">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00b8ff] shadow-[0_0_6px_#00b8ff]"></span>
            Frontend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]"></span>
            Backend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shadow-[0_0_6px_#f97316]"></span>
            Design
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_6px_#a855f7]"></span>
            AI/ML
          </div>
        </div>

        {/* Skill Card Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-[110px] h-[110px] md:w-[125px] md:h-[125px] bg-[#050b16]/80 border border-slate-900 rounded-2xl flex flex-col items-center justify-center gap-2.5 p-3 hover:-translate-y-1 hover:border-[#00ffd2]/30 hover:shadow-[0_0_15px_rgba(0,255,210,0.15)] transition-all duration-300 group cursor-pointer relative"
            >
              {/* Category Dot Indicator top-right */}
              <span
                className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: skill.color }}
              ></span>

              {/* Icon Container */}
              <div className="flex items-center justify-center flex-grow transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Tech Name */}
              <span className="text-[10px] md:text-xs font-bold text-slate-300 tracking-wide font-space-grotesk group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
