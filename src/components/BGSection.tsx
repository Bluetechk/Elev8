import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import bgImage from '../assets/elev8bgimgr.jpg';

const programs = [
  { name: 'Elev8 School of Skills', color: '#00D084' },
  { name: 'Elev8 Media', color: '#0091FF' },
  { name: 'Elev8 Library', color: '#00D084' },
  { name: 'Innov8 Afrika', color: '#0091FF' },
  { name: 'Level Up Conference', color: '#00D084' },
  { name: 'Welcome to College', color: '#0091FF' },
];

const BGSection = () => {
  const [rotation, setRotation] = useState(0);

  const summaries = [
    {
      title: 'Programs',
      body: 'Six pathways: School of Skills, Elev8 Media, Elev8 Library, Innov8 Afrika, Level Up Conference, Welcome to College.',
    },
    {
      title: 'Brand',
      body: 'We build memorable brand identities and storytelling systems that drive recognition, trust, and growth.',
    },
  ];
  const [currentSummary, setCurrentSummary] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setCurrentSummary((s) => (s + 1) % summaries.length);
    }, 3200);
    return () => clearInterval(t);
  }, [paused]);

  const renderCards = () => {
    return programs.map((program, index) => {
      const angle = (360 / programs.length) * index + rotation;
      const radius = 150;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const z = Math.sin((angle * Math.PI) / 180) * radius;
      const scale = (z + radius) / (radius * 2);
      const opacity = 0.4 + scale * 0.6;

      return (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
            opacity,
            zIndex: Math.round(scale * 100),
          }}
          className="w-40 h-40 flex items-center justify-center"
        >
          <div
            className="w-full h-full rounded-2xl border-2 flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/10"
            style={{
              borderColor: program.color,
              boxShadow: `0 0 30px ${program.color}33, inset 0 0 20px ${program.color}22`,
            }}
          >
            <div className="text-center px-3">
              <h3
                className="text-sm md:text-base font-black uppercase tracking-tight leading-tight"
                style={{ color: program.color }}
              >
                {program.name}
              </h3>
              <div className="w-6 h-0.5 rounded-full mx-auto mt-2" style={{ backgroundColor: program.color }} />
            </div>
          </div>
        </motion.div>
      );
    });
  };

  return (
    <section className="relative w-full -mt-1 pt-20 pb-20 overflow-hidden">
      {/* Background with image - seamless blend */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(6, 34, 28, 0.3) 40%, rgba(6, 34, 28, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <p className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-3">
                Explore Our Ecosystem
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                Six Pathways to<br />
                <span className="text-secondary">Growth</span>
              </h2>
            </div>

            {/* 3D Carousel Container */}
            <div className="flex justify-center items-center h-[400px] perspective">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                }}
              >
                {renderCards()}
              </div>
            </div>

            {/* Bottom indicator */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center mt-8"
            >
              <p className="text-white/60 text-xs font-mono uppercase tracking-[0.2em]">
                ↻ Rotating to discover all programs
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Core Belief Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />

              {/* Main card (glassmorphism + interactive summary) */}
              <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_30px_80px_rgba(4,8,12,0.45)]"
              >
                {/* subtle glow accent */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-secondary/10 to-accent/10 blur-sm opacity-60 pointer-events-none" />

                <div className="relative space-y-6 z-10">
                  <motion.p className="text-xs font-bold text-secondary uppercase tracking-[0.3em]">
                    Our Core Belief
                  </motion.p>

                  <div className="space-y-2 min-h-[120px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSummary}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="space-y-2"
                      >
                        <h3 className="text-lg md:text-2xl font-black text-primary leading-snug">
                          {summaries[currentSummary].title}
                        </h3>
                        <p className="text-sm md:text-base text-primary/80 leading-relaxed">
                          {summaries[currentSummary].body}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom decorative elements (kept) */}
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <div className="w-6 h-px bg-gradient-to-r from-secondary/30 to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
                    <div className="w-6 h-px bg-gradient-to-l from-secondary/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      />
    </section>
  );
};

export default BGSection;
