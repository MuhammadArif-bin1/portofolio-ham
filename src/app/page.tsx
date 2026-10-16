import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Skill from "@/components/skill";
import MeteorShower from "@/components/MeteorShower";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-[#020813] text-[#f8fafc] selection:bg-[#00ffd2]/20 selection:text-[#00ffd2] min-h-screen relative overflow-x-hidden">
      {/* Global Meteor Shower Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MeteorShower />
      </div>

      {/* TopNavBar */}
      <Navbar />

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
