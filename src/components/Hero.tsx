import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Zap, Users, BookOpen } from 'lucide-react';
import heroImage from '../assets/heroimage.jpg';

/* ─── Animated Count-Up Number ─── */
const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { icon: Zap,     label: 'Business Arms',     value: 3,   suffix: '' },
  { icon: Users,   label: 'Lives Impacted',    value: 500, suffix: '+' },
  { icon: BookOpen,label: 'Programs & Events', value: 6,   suffix: '' },
];

const Hero = () => {
  return (
    <section className="relative w-full">

      {/* ══════════════ HERO BANNER ══════════════ */}
      <div
        className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

        {/* Floating ambient orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-secondary/20 blur-[80px] pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-[8%] w-96 h-96 rounded-full bg-accent/15 blur-[100px] pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-8"
          >
           
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-none"
          >
            ELEV<span className="text-secondary">8</span>{' '}
            <span className="text-white/70">INC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl text-white/65 text-base md:text-lg leading-relaxed font-medium mb-10"
          >
            A youth-focused movement built to equip individuals and businesses to
            live <span className="text-secondary font-bold">intentionally</span>,
            grow <span className="text-secondary font-bold">purposefully</span>,
            and impact <span className="text-secondary font-bold">meaningfully</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient px-10 py-4 text-sm"
            >
              Explore Programs
            </button>
            <a
              href="#story"
              className="px-10 py-4 rounded-md border border-white/25 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
          >
            {stats.map(({ icon: Icon, label, value, suffix }) => (
              <div key={label} className="text-center">
                <Icon className="w-5 h-5 text-secondary mx-auto mb-2 opacity-80" />
                <div className="text-3xl md:text-4xl font-black text-white">
                  <CountUp to={value} suffix={suffix} />
                </div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
        {/* Bottom blending gradient to Our Story */}
        <div className="absolute left-0 right-0 bottom-0 h-40 pointer-events-none z-20 bg-gradient-to-b from-transparent to-primary" />
      </div>

      {/* ══════════════ OUR STORY SECTION ══════════════ */}
      <div id="story" className="bg-primary text-white py-28 relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.03] pointer-events-none select-none z-0 leading-none">
          ∞
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <div>
                <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-3">Who We Are</p>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                  Our <span className="text-secondary">Story</span>
                </h2>
                <div className="w-16 h-1 bg-secondary rounded-full mt-5" />
              </div>

              <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                Elev8 was born from a bold conviction — that people and businesses around us are full of{' '}
                <span className="text-secondary font-bold">potential</span> the world is not yet seeing.
                What began as a spark became a movement, and that movement became a company.
              </p>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-l-3xl" />
                <p className="text-white/75 leading-relaxed">
                  The name{' '}
                  <span className="text-secondary font-black italic">"Elev8"</span>{' '}
                  is a stylized form of "Elevate". The number 8, turned on its side, becomes{' '}
                  <span className="text-secondary font-black text-2xl">∞</span> — infinity.
                  Limitless growth. Unending possibility.
                </p>
                <p className="italic text-secondary font-bold text-base">
                  "There is no person, no business, and no community that has reached their ceiling. There is always a next level."
                </p>
              </div>

              <p className="text-white/35 text-xs uppercase tracking-[0.25em] font-bold pt-2">
                Three business arms — one mission.
              </p>
            </motion.div>

            {/* Right: Founder image + frame animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="rounded-3xl p-8 bg-transparent border border-white/10 h-[320px] flex items-center justify-center">
                <p className="text-white/40 uppercase tracking-widest text-sm">Founder visual removed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero;
