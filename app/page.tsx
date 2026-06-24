import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Skill from "@/components/skill";
import MeteorShower from "@/components/MeteorShower";

export default function Home() {
  return (
    <div className="bg-[#020813] text-[#f8fafc] selection:bg-[#00ffd2]/20 selection:text-[#00ffd2] min-h-screen relative overflow-x-hidden">
      {/* Global Meteor Shower Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MeteorShower />
      </div>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020813]/85 backdrop-blur-xl border-b border-[#00ffd2]/10">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          {/* Left spacer to center the links */}
          <div className="w-10 hidden md:block"></div>

          {/* Centered Desktop Nav */}
          <div className="flex items-center gap-6 md:gap-8 mx-auto">
            <a
              className="text-xs md:text-sm font-bold tracking-wider uppercase text-[#00ffd2] transition-colors hover:text-[#00ffd2]"
              href="#"
            >
              Beranda
            </a>
            <a
              className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
              href="#about"
            >
              Tentang & Skill
            </a>
            <a
              className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
              href="#projects"
            >
              Proyek
            </a>
            <a
              className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-300 transition-colors hover:text-[#00ffd2]"
              href="#timeline"
            >
              Achievement
            </a>
          </div>

          {/* Right Icon */}
          <div className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-[#00ffd2] cursor-pointer transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Timeline />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050b16]/90 border-t border-slate-900/80 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-6">
          <div className="font-space-grotesk font-black text-[#00ffd2] text-xl tracking-wider">
            ARIF GIOVANNI
          </div>
          <div className="font-inter text-sm text-slate-400 text-center md:text-left">
            © 2026 Arif Giovanni. Designed with Atmospheric Precision.
          </div>
          <div className="flex gap-6 text-sm">
            <a className="text-slate-400 hover:text-[#00ffd2] font-semibold transition-transform hover:-translate-y-0.5" href="mailto:arifykt@gmail.com">Email</a>
            <a className="text-slate-400 hover:text-[#00ffd2] font-semibold transition-transform hover:-translate-y-0.5" href="https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-slate-400 hover:text-[#00ffd2] font-semibold transition-transform hover:-translate-y-0.5" href="https://github.com/MuhammadArif-bin1" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
