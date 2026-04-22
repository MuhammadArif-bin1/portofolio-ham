import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  pdfUrl?: string;
  buttonText?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Remove Background",
    description: "Secara teknis, AI pada website tersebut melakukan Image Segmentation. Ia membagi piksel foto ke dalam dua kategori: Foreground (depan) dan Background (belakang). AI akan mempertahankan piksel yang dianggap sebagai objek penting dan membuang sisanya dengan tingkat kehalusan yang terus meningkat seiring perkembangan teknologi.",
    tech: ["Typescript", "Next.js", "react"],
    image: "foto-RemoveBackground.png",
    demoUrl: "https://remove-background-pearl.vercel.app/",
    buttonText: "Visit Site"
  },
  {
    id: 2,
    title: "AK Loundry",
    description: "Kami melayani laundry dengan sistem offline. Halaman ini untuk informasi paket layanan, lokasi, dan pengecekan resi.",
    tech: ["Codeignither4", "PHP", "MYSQL"],
    image: "akloundry.png",
    demoUrl: "https://laundrykuporject.great-site.net",
    buttonText: "Visit Site"
  },
  {
    id: 3,
    title: "Omni-Channel CRM",
    description: "A robust management system for logistics companies featuring real-time fleet GPS tracking and route optimization.",
    tech: ["CodeIgniter 4", "Vue.js", "Redis"],
    image: "file.svg",
    demoUrl: "#",
    buttonText: "Visit Site"
  }
];

export default function Projects() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-5xl font-black font-space-grotesk text-on-surface tracking-tight">Projects & Achievements</h2>
          <p className="text-on-surface-variant mt-2">featured work</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-2 group" href="#">
          View All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-surface-container-lowest rounded-xl p-6 group hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              alt={project.title}
              className="w-full aspect-video object-cover rounded-md mb-6"
              src={project.image}
            />
            <h3 className="text-xl font-bold font-space-grotesk mb-2">{project.title}</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((techItem) => (
                <span key={techItem} className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">
                  {techItem}
                </span>
              ))}
            </div>
            {/* Navigation Button */}
            <div className="mt-auto pt-4 border-t border-outline-variant/30">
              <Link
                href={project.demoUrl || "#"}
                target={project.demoUrl && project.demoUrl !== "#" ? "_blank" : undefined}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary/10 text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-colors text-sm"
              >
                {project.buttonText || "View Project"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
