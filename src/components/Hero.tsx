import { motion } from 'framer-motion';
import heroImage from '../assets/heroimage.jpg';

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Main Hero with Background */}
      <div
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
        >
          ELEV8 <span className="text-secondary">INC.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl text-white/80 text-sm md:text-base leading-relaxed font-medium"
        >
          We are not just a company. We are a movement — and everything we build is in service of one thing: the elevation of people. Elev8 Inc. is a youth-focused, growth-oriented company based in Monrovia, Liberia. We exist to equip individuals and businesses to live intentionally, grow purposefully, and impact meaningfully. Through practical skills training, professional creative services, and access to knowledge, we are building a new generation of equipped, confident, and purpose-driven entrepreneurs, innovators, and businesses.
        </motion.p>
      </div>

      {/* Floating Offerings Box */}
      <div className="container mx-auto px-6 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#EAEAEA] rounded-2xl p-10 text-center shadow-2xl max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-tight uppercase">
            Most people and businesses have <span className="text-secondary">potentials.</span><br />
            Few have the <span className="text-secondary">tools</span> to match them.<br />
            <span className="text-secondary">Elev8</span> exists to close that gap.
          </h2>
          <div className="mt-8">
            <button 
              onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient"
            >
              Explore now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="bg-primary text-white py-32 relative overflow-hidden mt-20">
        {/* Decorative Infinity Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[40rem] font-black text-white/5 pointer-events-none select-none z-0">
          ∞
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
              Our <span className="text-secondary">Story</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-white/80 font-medium">
              <p>
                Elev8 was born from a bold conviction that people and businesses around us are full of
                <span className="text-secondary font-bold"> potential</span> that the world is not yet seeing.
                What began as a spark became a movement, and that movement became a company.
              </p>

              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                <p>
                  The name <span className="text-secondary font-black italic">"Elev8"</span> is a stylized form of the word "Elevate", with the number 8 carrying deep meaning.
                  Turned on its side, 8 becomes <span className="text-secondary font-black text-2xl md:text-4xl">∞</span> — infinity — representing limitless growth, continuous learning, and unending possibility.
                </p>
                <p className="italic text-secondary font-bold text-xl md:text-2xl pt-4">
                  "It reflects our belief that no person, no business, and no community has reached their ceiling. There is always a next level."
                </p>
                <p>
                  Today, Elev8 Inc. operates three business arms: the Elev8 School of Skills, Elev8 Media, and Elev8 Library — each serving a distinct purpose, all united by the same mission.

                </p>
              </div>
              <p className="pt-8 text-sm text-white/40 uppercase tracking-[0.2em] font-bold">
                Three business arms — one mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
