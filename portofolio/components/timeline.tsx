export default function Timeline() {
  return (
    <section className="bg-surface-container-low py-24" id="timeline">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-3 tracking-tight">Garis Waktu Pencapaian</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>
        <div className="relative">
          {/* The Track */}
          <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 -translate-x-1/2"></div>

          {/* Milestone 1 */}
          <div className="relative w-full mb-16">
            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📡</span>
                  <span className="text-primary text-sm font-bold">2026</span>
                </div>
                <h4 className="text-on-surface text-xl font-bold mb-2">Mikrotik Networking Academy</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Mikrotik MTCNA: Mikrotik Certified Network Associate
                </p>
                <a href="mikrotik.PNG" className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5">
                  Sertifikat <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-[0_0_0_4px_rgba(33,81,218,0.2)]"></div>
          </div>

          {/* Milestone 2 */}
          <div className="relative w-full mb-16">
            <div className="w-full md:w-[45%] pl-12 md:pl-0 md:ml-auto">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🐍</span>
                  <span className="text-primary text-sm font-bold">2023</span>
                </div>
                <h4 className="text-on-surface text-xl font-bold mb-2">Cisco Networking Academy</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  PCAP: Programming Essentials In Python
                </p>
                <a href="pcap.PNG" className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5">
                  Sertifikat <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-[0_0_0_4px_rgba(33,81,218,0.2)]"></div>
          </div>

          {/* Milestone 3 */}
          <div className="relative w-full mb-16">
            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎨</span>
                  <span className="text-primary text-sm font-bold">2022</span>
                </div>
                <h4 className="text-on-surface text-xl font-bold mb-2">Seminar</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Fundamental Of User Interface, User Experience
                </p>
                <a href="fundamental.PNG" className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5">
                  Sertifikat <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-[0_0_0_4px_rgba(33,81,218,0.2)]"></div>
          </div>

          {/* Milestone 4 */}
          <div className="relative w-full mb-16">
            <div className="w-full md:w-[45%] pl-12 md:pl-0 md:ml-auto">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-primary text-sm font-bold">2025</span>
                </div>
                <h4 className="text-on-surface text-xl font-bold mb-2">JNKTI: Jurnal Nasional Komputasi dan Teknologi Informasi</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok Smartfrenworld Menggunakan Algoritma Logistic Regression
                </p>
                <a href="Jurnal Semester 5.pdf" className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5">
                  Detail <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-[0_0_0_4px_rgba(33,81,218,0.2)]"></div>
          </div>

          {/* Milestone 5 */}
          <div className="relative w-full mb-16">
            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-primary text-sm font-bold">2025</span>
                </div>
                <h4 className="text-on-surface text-xl font-bold mb-2">IT Bootcamp</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Tranformasi Digital : Integrasi IoT & kecerdasan buatan untuk solusi masa
                </p>
                <a href="it bootcamp.PNG" className="text-primary font-medium text-sm flex items-center w-max border-b-2 border-primary/30 hover:border-primary transition-colors pb-0.5">
                  Sertifikat <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>
            {/* Node */}
            <div className="absolute left-[17px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-[0_0_0_4px_rgba(33,81,218,0.2)]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
