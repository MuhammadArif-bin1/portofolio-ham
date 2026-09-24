"use client";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "design" | "aiml";
  icon: string;
  extraClass?: string;
  hoverBorder: string;
  hoverShadow: string;
}

interface AiToolItem {
  name: string;
  category: string;
  icon: string;
  hoverBorder: string;
  hoverShadow: string;
}

const skills: SkillItem[] = [
  // Row 1: Frontend
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "React",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    extraClass: "dark:invert opacity-90",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    name: "Tailwind",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },

  // Row 2: Frontend / Backend
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    hoverBorder: "hover:border-purple-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "PHP",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    hoverBorder: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    name: "CodeIgniter",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg",
    hoverBorder: "hover:border-red-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    hoverBorder: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    name: "MySQL",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    hoverBorder: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    hoverBorder: "hover:border-emerald-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    name: "Python",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },

  // Row 3: AI/ML & Design
  {
    name: "Jupyter",
    category: "aiml",
    icon: "/jupyter-square-orange-white.svg",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "Google Colab",
    category: "aiml",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "TensorFlow",
    category: "aiml",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    hoverBorder: "hover:border-purple-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "Figma",
    category: "design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    hoverBorder: "hover:border-orange-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
  },
];

const aiTools: AiToolItem[] = [
  // Row 1
  {
    name: "Gemini",
    category: "Brainstorming",
    icon: "/gemini.png",
    hoverBorder: "hover:border-purple-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "Claude",
    category: "Brainstorming",
    icon: "https://api.iconify.design/simple-icons/claude.svg?color=%23D9775C",
    hoverBorder: "hover:border-purple-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    name: "Antigravity",
    category: "Code Assistant",
    icon: "/antigravity.png",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    name: "Cursor",
    category: "Code Assistant",
    icon: "https://www.cursor.com/assets/images/logo.svg",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    name: "OpenAI Codex",
    category: "Code Assistant",
    icon: "https://api.iconify.design/simple-icons/openai.svg?color=%23ffffff",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },

  // Row 2
  {
    name: "VS Code",
    category: "Code Assistant",
    icon: "https://api.iconify.design/simple-icons/visualstudiocode.svg?color=%23007ACC",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    name: "Dreamina",
    category: "Photo & Video AI",
    icon: "/dreamina.png",
    hoverBorder: "hover:border-pink-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
  },
  {
    name: "Banana",
    category: "Photo & Video AI",
    icon: "https://api.iconify.design/twemoji/banana.svg",
    hoverBorder: "hover:border-pink-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
  },
  {
    name: "Grok",
    category: "Photo & Video AI",
    icon: "https://api.iconify.design/simple-icons/x.svg?color=%23ffffff",
    hoverBorder: "hover:border-pink-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
  },
  {
    name: "Google Stitch",
    category: "AI Design",
    icon: "https://api.iconify.design/simple-icons/google.svg?color=%234285F4",
    hoverBorder: "hover:border-orange-400",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
  },
];

export default function Skill() {
  return (
    <section className="relative z-10 bg-transparent py-16 px-6 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section 1: Skills & Fundamental */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-wider mb-2 text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Skills & Fundamental
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 mb-8 text-sm sm:text-base text-center">
          Matriks teknologi yang dikuasai dalam ranah digital
        </p>

        {/* Divider with glow dot */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-[1px] bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <div className="w-12 h-[1px] bg-slate-700"></div>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-xs sm:text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            Frontend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            Backend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
            Design
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            AI/ML
          </div>
        </div>

        {/* Skill Card Grid */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center p-4 sm:p-6 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[130px] h-36 border border-slate-800 rounded-xl bg-slate-900/80 transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-2 ${skill.hoverBorder} ${skill.hoverShadow}`}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className={`w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] ${
                    skill.extraClass || ""
                  }`}
                />
              </div>
              <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Section 2: AI & Productivity Tools */}
        <div className="w-full mt-16 border-t border-slate-800/50 pt-12 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-wider mb-2 text-center drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            AI & Productivity Tools
          </h3>
          <p className="text-slate-400 mb-8 text-sm sm:text-base text-center">
            Pemanfaatan kecerdasan buatan untuk akselerasi coding, brainstorming, desain, dan pembuatan media
          </p>

          {/* AI Tools Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-xs sm:text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              Brainstorming
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Code Assistant
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
              Photo & Video AI
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
              AI Design
            </div>
          </div>

          {/* AI Tools Card Grid */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mx-auto">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className={`group flex flex-col items-center justify-center p-4 sm:p-6 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[188px] h-36 border border-slate-800 rounded-xl bg-slate-900/80 transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-2 ${tool.hoverBorder} ${tool.hoverShadow}`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors text-center">
                  {tool.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest text-center">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
