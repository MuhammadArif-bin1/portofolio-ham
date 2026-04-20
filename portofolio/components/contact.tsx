export default function Contact() {
  return (
    <section className="py-24 bg-surface-container-high" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
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
            <a className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm" href="#">
              <img
                alt="GitHub"
                className="w-6 h-6 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6x5PepfA6L1ZNmwfi-dzxTZfTldsUWzB6JNEF9riwTCUc4AVVEhIuk9HsGE5HM1QvUf5KbdDl-jFA25MYOcg7vv_NMJUjo25fOQ5GuqRzbNyDPShBcXcKoDkcdnABHwpN9kFX3yESQf_FknKcp-qXo_7Q_aXTKJ_NGjTYTO2lXTq6SLQ-pU7sjHoD7JHNM9MCLD4nJS5PR69y5rJhCn-x0Iud268u77ap19aozxtlDygNthGZ_xKYCKhiGz592FNR7VVlvjBYt8"
              />
            </a>
            <a className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm" href="#">
              <img
                alt="LinkedIn"
                className="w-6 h-6 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbCa6ZPfNcvqbrfSeUDrNHYlOqHHaxFLfO0f1pdbEKLLi3ldOUbHhAh6YW3O80OADyIKMxxYdg-QFK3Q6Z6bcWJDfPj9ci3Naz-aU6ynR-zDgYyhy-v1qY_28jyb6UnMBO8mtr5NFmxaFPZfLtW3JU2kY-BPUY5nxvnjjC3vFrqnGRDu6n3-1D7VktMqqdjRgqY4AAmTo4RkMXkn30RunNUk8aVVh43T30exeRT2apVfUs2Rz7zixD-8xfxynbdHOTOpSAIEnZXGs"
              />
            </a>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-on-surface/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Full Name</label>
                <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Email Address</label>
                <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Subject</label>
              <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="Project Inquiry" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Message</label>
              <textarea className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="Your message here..." rows={5}></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-md hover:opacity-95 transition-opacity shadow-lg shadow-primary/20" type="submit">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
