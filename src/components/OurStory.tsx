import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="relative bg-[#04120E] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
        >
          <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            Our <span className="text-secondary">Story</span>
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4 mb-8" />

          <div className="space-y-5 text-white/80 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Elev8 was born from a bold conviction — that the people and businesses around us are full of{' '}
              <span className="text-secondary font-bold">potential</span> the world is not yet seeing.
              What began as a spark became a movement, and that movement became a company.
            </p>
            <p>
              The name <span className="text-secondary font-black italic">"Elev8"</span> is a stylized form of "Elevate".
              The number 8, turned on its side, becomes <span className="text-secondary font-black text-2xl">∞</span> — infinity.
              Limitless growth. Unending possibility.
            </p>
            <p className="italic text-secondary font-bold text-sm">
              "There is no person, no business, and no community that has reached their ceiling. There is always a next level."
            </p>
            <p className="text-white/35 text-xs uppercase tracking-[0.25em] font-bold">
              Three business arms — one mission.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
