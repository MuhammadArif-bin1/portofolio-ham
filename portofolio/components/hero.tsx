import TextType from './TextType';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-surface-container-lowest text-on-surface overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-6">

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="w-56 h-56 md:w-64 md:h-64 bg-surface-container rounded-xl overflow-hidden shadow-xl mb-10 border border-outline-variant/30">
          <img
            alt="Profile portrait"
            className="w-full h-full object-cover"
            src="profile.jpeg"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 mb-6">
          <TextType 
            as="h1"
            className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface"
            text="Welcome to My Portfolio"
            typingSpeed={100}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
          />
          <div className="text-lg md:text-xl font-semibold text-on-surface-variant min-h-[30px] flex items-center justify-center">
            <TextType 
              text={[
                "Student | Developer | Tech Enthusiast", 
                "Building innovative web solutions", 
                "Passionate about code"
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-primary"
            />
          </div>
        </div>

        <p className="max-w-3xl text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 font-medium">
          Mahasiswa dari Bina Sarana Informatika dengan konsentrasi Teknik & Informatika.<br className="hidden md:block"/>
          Passionate tentang web development, database design, dan creating innovative solutions.
        </p>

        <p className="text-sm md:text-base font-bold text-on-surface mb-8">
          Stack: React | Next.js | TypeScript | PHP | MySQL
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/Muhammad Arif Giovanni CV.pdf" download className="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-md text-sm md:text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
          <a href="#projects" className="flex items-center justify-center px-8 py-3 rounded-md text-sm md:text-base font-bold border-2 border-primary text-primary hover:bg-surface-container transition-colors">
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
}
