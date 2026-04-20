export default function Timeline() {
  return (
    <section className="bg-surface-container-low py-24" id="timeline">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-space-grotesk text-on-surface tracking-tight">Milestones</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="relative">
          {/* The Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-container-high -translate-x-1/2"></div>
          {/* Milestone 1 */}
          <div className="relative flex items-center mb-16 group">
            <div className="hidden md:block w-1/2 pr-12 text-right">
              <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">January 2024</span>
              <h4 className="text-xl font-bold">Informatics Capstone</h4>
              <p className="text-on-surface-variant text-sm mt-2">Started final year specialization in Advanced Machine Learning and Neural Networks.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
            <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
              <div className="md:hidden">
                <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">January 2024</span>
                <h4 className="text-xl font-bold">Informatics Capstone</h4>
                <p className="text-on-surface-variant text-sm mt-2">Started final year specialization in Advanced Machine Learning and Neural Networks.</p>
              </div>
              <div className="hidden md:block p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
                <p className="text-xs font-bold text-primary italic">Status: Ongoing</p>
              </div>
            </div>
          </div>
          {/* Milestone 2 */}
          <div className="relative flex items-center mb-16 group">
            <div className="hidden md:block w-1/2 pr-12 text-right">
              <div className="p-4 bg-surface-container-lowest rounded-lg border-r-4 border-primary shadow-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <p className="text-xs font-bold text-primary mt-1">Certified Developer</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
            <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
              <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">August 2023</span>
              <h4 className="text-xl font-bold">Google Data Analytics Professional</h4>
              <p className="text-on-surface-variant text-sm mt-2">Completed 6-month intensive specialization focusing on R programming and SQL data cleaning.</p>
            </div>
          </div>
          {/* Milestone 3 */}
          <div className="relative flex items-center group">
            <div className="hidden md:block w-1/2 pr-12 text-right">
              <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">March 2023</span>
              <h4 className="text-xl font-bold">Hackathon Winner</h4>
              <p className="text-on-surface-variant text-sm mt-2">First place at Global Tech-for-Good challenge for building an accessibility browser extension.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
            <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
              <div className="md:hidden">
                <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">March 2023</span>
                <h4 className="text-xl font-bold">Hackathon Winner</h4>
                <p className="text-on-surface-variant text-sm mt-2">First place at Global Tech-for-Good challenge for building an accessibility browser extension.</p>
              </div>
              <div className="hidden md:block p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
                <p className="text-xs font-bold text-primary italic">Project: AccessBridge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
