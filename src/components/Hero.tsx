import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/heroimage.jpg';
import Elev8Logo from './Elev8Logo';

const Hero = () => {
  return (
    <section className="relative w-full">

      {/* ══════════════ HERO BANNER ══════════════ */}
      <div
        className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay so the bright hero image doesn't wash out the text */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

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
            We are not just a company. We are a movement and everyghing we build is in service of one thing: the elevation of people. Elev8 Inc. is a  youth-focused, growth-oriented company based inMonrovia, liberia. We extt to equip individuals and businesses to live internationally, grow purposefully, and impact meanifully. Through practical skills training, professionally creative services, and powerful experiences, we are on a mission to unlock the potential of  <span className="text-secondary font-bold">people</span> and businesses across <span className="text-secondary font-bold">Africa</span>, and beyond.
           
           
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
              className="px-10 py-4 rounded-md border border-white/25 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Explore Programs
            </button>
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
      </div>

      {/* ══════════════ ANIMATED LOGO ══════════════ */}
      {/* Pure-CSS animated Elev8 logo — no image frames, so nothing to 404 on
          deploy. Self-contained <section> with its own background. */}
      <div id="story" className="w-full">
        <Elev8Logo />
      </div>
    </section>
  );
};



export default Hero;
