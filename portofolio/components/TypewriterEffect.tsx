'use client';

import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
  return (
    <h1 className="text-4xl md:text-6xl font-black font-space-grotesk tracking-tight text-white mb-6 leading-tight min-h-[5rem] flex items-center justify-center">
      <Typewriter
        options={{
          loop: true,
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Halo, Saya <span class="text-[#00ffd2]" style="color: #00ffd2; text-shadow: 0 0 15px rgba(0, 255, 210, 0.3);">Arif Giovanni.</span>')
            .pauseFor(3000)
            .deleteAll()
            .typeString('HALO MY NAME IS <span class="text-[#00ffd2]" style="color: #00ffd2; text-shadow: 0 0 15px rgba(0, 255, 210, 0.3);">ARIF GIOVANNI.</span>')
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
      />
    </h1>
  );
}


