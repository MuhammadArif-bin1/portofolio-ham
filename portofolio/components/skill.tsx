export default function Skill() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="skills">
      <h2 className="text-center text-4xl font-black font-space-grotesk text-on-surface mb-16 tracking-tight">The Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
          <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">deployed_code</span>
          <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Next.js</h3>
        </div>
        <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
          <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">database</span>
          <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">CodeIgniter 4</h3>
        </div>
        <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
          <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">terminal</span>
          <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Python</h3>
        </div>
        <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
          <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">rebase</span>
          <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Git</h3>
        </div>
      </div>
    </section>
  );
}
