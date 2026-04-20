export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-surface-container-low text-on-surface py-24 px-6 overflow-hidden" id="about">


      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-primary pb-3 text-on-surface">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column (Introduction & Passion) */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Introduction</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-4 font-medium">
                Saya adalah mahasiswa Universitas Bina Sarana Informatika dengan fakultas Teknik & Informatika dengan passion yang tinggi dalam Web Development dan Software Engineering. Saya percaya bahwa teknologi harus digunakan untuk menciptakan solusi yang meaningful dan accessible untuk semua orang. Sebagai seorang IT Enthusiast, Saya menciptakan jam terbang untuk menjembatani kesenjangan antara intuisi manusia dan presisi mesin.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-medium">
                Perjalanan saya dimulai dengan adanya rasa ingin tahu terhadap dunia programming dan dunia digital, dimana baris-baris kode menjadi bahasa pertama saya dalam menciptakan suatu project, dimulai dengan project yang sederhana.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Passion</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-medium">
                Saya sangat antusias dalam membuat aplikasi web yang user-friendly, mengoptimalkan database, dan mengimplementasikan best practices dalam development. Selalu eager untuk belajar teknologi baru dan berkontribusi pada proyek-proyek yang meaningful.
              </p>
            </div>
          </div>

          {/* Right Column (Education & Goals) */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-1">
                <p className="font-bold text-on-surface text-sm md:text-base">Bina Sarana Informatika</p>
                <p className="text-sm text-on-surface-variant font-medium">Teknik & Informatika</p>
                <p className="text-sm text-on-surface-variant font-medium">2023 - Present</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-5 text-primary">Goals</h3>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base font-medium">
                <li className="flex gap-3 items-start">
                  <span className="text-primary mt-0.5">→</span>
                  <span>Menjadi Full-stack Developer yang kompeten</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary mt-0.5">→</span>
                  <span>Berkontribusi pada open-source projects</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary mt-0.5">→</span>
                  <span>Membangun produk yang solve real problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
