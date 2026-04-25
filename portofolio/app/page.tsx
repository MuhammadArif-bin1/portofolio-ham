import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Skill from "@/components/skill";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-primary">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black font-space-grotesk text-blue-700">My Portofolio</div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1 font-space-grotesk tracking-tight" href="#">Home</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#about">About</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#projects">Projects</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#timeline">Timeline</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#skills">Skills</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#contact">Contact</a>
          </div>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-md font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20">
            Hubungi Saya
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skill />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-6">
          <div className="font-space-grotesk font-bold text-slate-900 text-xl">My Portofolio</div>
          <div className="font-inter text-sm text-slate-500 text-center md:text-left">
            © 2026 Arif. Designed with Atmospheric Precision.
          </div>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">Email</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">Instagram</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
