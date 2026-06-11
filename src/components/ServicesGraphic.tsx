import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  {
    name: 'Branding',
    tagline: 'Identities People Remember',
    description: 'Distinct brand identities, logos, and visual systems engineered to build instant recognition and trust.',
  },
  {
    name: 'Design',
    tagline: 'High-End Brand Aesthetics',
    description: 'Bespoke user interfaces, premium web designs, and cohesive visual identities crafted to perfection.',
  },
  {
    name: 'Ads',
    tagline: 'High-Converting Campaigns',
    description: 'Data-driven creative ads engineered to capture intent, maximize ROI, and scale client acquisition.',
  },
  {
    name: 'Growth',
    tagline: 'Scale Up High & Beyond',
    description: 'Comprehensive scaling strategies combining growth hacking, system optimization, and market expansion.',
  },
  {
    name: 'Seo',
    tagline: 'Dominating Search Results',
    description: 'Advanced search engine optimization strategies to drive high-intent organic traffic consistently.',
  },
  {
    name: 'Content',
    tagline: 'Authority-Building Media',
    description: 'Compelling written and visual content designed to position your brand as the undisputed leader.',
  },
  {
    name: 'Marketing',
    tagline: 'Omnichannel Acquisition',
    description: 'Integrated digital marketing ecosystems engineered for seamless lead conversion and brand loyalty.',
  },
];

// Angular gap between words on the speedometer arc.
const STEP_DEG = 18;

const ServicesGraphic = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start focused on 'Growth'
  const [paused, setPaused] = useState(false);

  // Arc radius shrinks on phones so the dial stays compact.
  const [radius, setRadius] = useState(300);
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 190 : 300);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesList.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [paused]);

  const active = servicesList[activeIndex];

  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* ─── Clean, deep background ─── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-white/4 blur-[140px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-dots" width="42" height="42" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-dots)" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-secondary text-xs uppercase tracking-[0.35em] font-bold mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Services that <span className="text-secondary">elevate</span> your brand.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-6 items-center">
          {/* Left: speedometer dial — fixed arrow, the words rotate past it */}
          <div className="col-span-12 md:col-span-7 relative h-80 md:h-104 flex items-center">
            {/* Fixed pointer / arrow (stays put while the text moves) */}
            <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 text-white">
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={2.5} />
            </div>

            {/* The rotating word dial. Each word sits on the arc but stays
                horizontal; the active word aligns with the fixed arrow.
                Offsets wrap circularly so the wheel loops forever. */}
            <div className="absolute left-16 md:left-28 top-1/2">
              {servicesList.map((service, index) => {
                const n = servicesList.length;
                // Nearest signed offset from the focus (wraps around the loop):
                // an item at the very top reappears at the bottom seamlessly.
                let d = (((index - activeIndex) % n) + n) % n;
                if (d > n / 2) d -= n;
                const distance = Math.abs(d);
                const isFocused = d === 0;

                const angle = (d * STEP_DEG * Math.PI) / 180;
                const x = radius * (Math.cos(angle) - 1); // curves back to the left
                const y = radius * Math.sin(angle);
                const scale = isFocused ? 1.45 : Math.max(0.5, 1 - distance * 0.16);
                // Fully transparent at the wrap point so the loop is invisible.
                const opacity = isFocused ? 1 : Math.max(0, 0.6 - distance * 0.22);
                const blur = isFocused ? 0 : distance * 2.8;

                return (
                  <motion.div
                    key={service.name}
                    animate={{
                      x,
                      y,
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      color: isFocused ? '#ffffff' : '#4b5563',
                    }}
                    transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.8 }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      marginTop: '-0.55em',
                      transformOrigin: 'left center',
                      zIndex: 50 - distance,
                    }}
                    onClick={() => setActiveIndex(index)}
                    className="text-5xl md:text-7xl font-black tracking-tighter leading-none whitespace-nowrap cursor-pointer select-none animate-gpu"
                  >
                    {service.name}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: focused-service detail (kept in sync with the dial) */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-md min-h-60"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-[0.25em]">
                    <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                    <span>{active.name}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {active.tagline}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed font-medium">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="absolute bottom-8 left-8 flex items-center gap-2">
                {servicesList.map((s, i) => (
                  <button
                    key={s.name}
                    aria-label={s.name}
                    onClick={() => setActiveIndex(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? 22 : 7,
                      backgroundColor: i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGraphic;
