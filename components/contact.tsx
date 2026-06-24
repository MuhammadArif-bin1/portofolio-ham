export default function Contact() {
  return (
    <section className="relative z-10 py-24 bg-transparent" id="contact">
      {/* Decorative Line Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 1440 200 L 1100 200 L 950 350 V 700 L 1050 800 H 1440" stroke="#00ffd2" strokeWidth="1.5" opacity="0.2" />
          <circle cx="1100" cy="200" r="3" fill="#00ffd2" opacity="0.5" />
          <circle cx="950" cy="350" r="3" fill="#00ffd2" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-black font-space-grotesk text-on-surface tracking-tighter mb-6">Let's go <br /><span className="text-primary">contact me.</span></h2>
          <p className="text-lg text-on-surface-variant mb-12">I'm currently looking for full-time opportunities and collaborative projects in the web and data space.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase">Email Me</p>
                <p className="font-bold">arifykt@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase">Current Base</p>
                <p className="font-bold">Ciomas, Kota Bogor</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-12">
            {/* Email */}
            <a
              className="w-12 h-12 bg-surface-container-lowest border border-slate-800 rounded-full flex items-center justify-center hover:-translate-y-1 hover:border-primary/50 transition-all shadow-sm group"
              href="mailto:arifykt@gmail.com"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              className="w-12 h-12 bg-surface-container-lowest border border-slate-800 rounded-full flex items-center justify-center hover:-translate-y-1 hover:border-primary/50 transition-all shadow-sm group"
              href="https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* GitHub */}
            <a 
              className="w-12 h-12 bg-surface-container-lowest border border-slate-800 rounded-full flex items-center justify-center hover:-translate-y-1 hover:border-primary/50 transition-all shadow-sm group" 
              href="https://github.com/MuhammadArif-bin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a 
              className="w-12 h-12 bg-surface-container-lowest border border-slate-800 rounded-full flex items-center justify-center hover:-translate-y-1 hover:border-primary/50 transition-all shadow-sm group" 
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.488.953c-5.441 0-9.866 4.372-9.87 9.802 0 1.767.483 3.491 1.396 5.04L2.006 21.9l6.33-1.635-1.688.889zM17.43 14.54c-.296-.148-1.752-.864-2.024-.963-.271-.099-.47-.148-.667.148-.198.297-.765.963-.938 1.161-.173.197-.346.222-.642.074-.296-.148-1.25-.46-2.38-1.469-.88-.784-1.474-1.753-1.647-2.05-.173-.297-.018-.458.13-.606.134-.133.297-.347.445-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.148-.667-1.609-.914-2.203-.241-.579-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.038 1.014-1.038 2.476 0 1.462 1.063 2.872 1.211 3.07.149.198 2.093 3.2 5.07 4.487.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.752-.717 2.0-.1.248-.68.248-1.263.173-1.386-.075-.124-.272-.198-.569-.347z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a 
              className="w-12 h-12 bg-surface-container-lowest border border-slate-800 rounded-full flex items-center justify-center hover:-translate-y-1 hover:border-primary/50 transition-all shadow-sm group" 
              href="https://www.instagram.com/m.arifgiovanni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-on-surface/5 border border-slate-900">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Full Name</label>
                <input className="w-full px-4 py-3 bg-surface-container-low border border-slate-800 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 font-medium transition-all" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Email Address</label>
                <input className="w-full px-4 py-3 bg-surface-container-low border border-slate-800 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 font-medium transition-all" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Subject</label>
              <input className="w-full px-4 py-3 bg-surface-container-low border border-slate-800 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 font-medium transition-all" placeholder="Project Inquiry" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Message</label>
              <textarea className="w-full px-4 py-3 bg-surface-container-low border border-slate-800 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 font-medium transition-all" placeholder="Your message here..." rows={5}></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-md hover:opacity-90 transition-all shadow-lg shadow-primary/10 active:scale-[0.99]" type="submit">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
