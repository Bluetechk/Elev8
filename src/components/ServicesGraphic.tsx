import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  {
    name: "branding",
    tagline: "Cinematic Visual Production",
    description: "High-end commercial photography, brand videos, and social shoots that capture attention instantly.",
    color: "#E2E8F0"
  },
  {
    name: "Design",
    tagline: "High-End Brand Aesthetics",
    description: "Bespoke user interfaces, premium web designs, and cohesive visual identities crafted to perfection.",
    color: "#E2E8F0"
  },
  {
    name: "Ads",
    tagline: "High-Converting Campaigns",
    description: "Data-driven creative ads engineered to capture intent, maximize ROI, and scale client acquisition.",
    color: "#E2E8F0"
  },
  {
    name: "Growth",
    tagline: "Scale up high & Beyond",
    description: "Comprehensive scaling strategies combining growth hacking, system optimization, and market expansion.",
    color: "#E2E8F0"
  },
  {
    name: "Seo",
    tagline: "Dominating Search Results",
    description: "Advanced search engine optimization strategies to drive high-intent organic traffic consistently.",
    color: "#E2E8F0"
  },
  {
    name: "Content",
    tagline: "Authority-Building Media",
    description: "Compelling written and visual content designed to position your brand as the undisputed leader.",
    color: "#E2E8F0"
  },
  {
    name: "Marketing",
    tagline: "Omnichannel Acquisition",
    description: "Integrated digital marketing ecosystems engineered for seamless lead conversion and brand loyalty.",
    color: "#E2E8F0"
  }
];

const ServicesGraphic = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start with 'Growth' focused

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesList.length);
    }, 2800); // Shift every 2.8s for better readability of details
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center min-h-162.5 md:min-h-200">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-12 px-4 sm:px-0 relative z-20">
          <p className="text-secondary text-xs uppercase tracking-[0.35em] font-bold mb-4">
            Our Core Belief
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Most people and businesses have <span className="text-secondary">potential.</span>
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mt-4">
            Few have the <span className="text-secondary">tools</span> to match them.
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mt-4">
            Elev8 exists to close that gap.
          </p>
        </div>
      </div>
      
      {/* ─── Creative Real Photographic Blended Overlay Background ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Real Premium Dark Abstract Photographic Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')`,
            filter: 'contrast(1.2) brightness(0.65)'
          }}
        />

        {/* Dynamic Dark Gradients to Blend the Image Seamlessly */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent md:to-black/30" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />

        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-white/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-white/1 rounded-full blur-[150px]" />
        
        {/* High-Tech Vector Grid & Gauge Blueprints (SVG) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.18]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fine Dot Texture */}
            <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.12" />
            </pattern>
            {/* Smooth Edge Mask for Ticks */}
            <radialGradient id="fade-mask" cx="15%" cy="50%" r="55%">
              <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dot Grid Layer */}
          <rect width="100%" height="100%" fill="url(#grid-dots)" />

          {/* Calibrated Meter Gauge Background Circles */}
          <g transform="translate(-100, 0)" style={{ transformOrigin: '0px 50%', mask: 'url(#fade-mask)' }}>
            <circle cx="10%" cy="50%" r="280" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="10%" cy="50%" r="400" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" />
            <circle cx="10%" cy="50%" r="520" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="2" strokeDasharray="20 10" />
            <circle cx="10%" cy="50%" r="680" fill="none" stroke="rgba(255, 255, 255, 0.01)" strokeWidth="1" />
            
            <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="rgba(255,255,255,0.01)" strokeWidth="1.5" />
            <text x="12%" y="15%" fill="rgba(255,255,255,0.12)" fontSize="9" letterSpacing="3" fontFamily="monospace">LVL.08 // ALIGN</text>
            <text x="12%" y="85%" fill="rgba(255,255,255,0.12)" fontSize="9" letterSpacing="3" fontFamily="monospace">ELEV8.SCALE_SYS</text>
          </g>
        </svg>

        {/* Slow-rotating Radar Sweeper Graphic */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '0% 50%' }}
          className="absolute -left-25 top-1/2 -translate-y-1/2 w-150 h-150 pointer-events-none"
        >
          <div className="w-87.5 h-0.5 bg-linear-to-r from-white/5 to-transparent origin-left" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Column: Curved Gauge Meter */}
          <div className="col-span-12 md:col-span-6 relative flex items-center justify-start h-112.5 md:h-137.5 pl-12 md:pl-20">
            
            {/* Calibrated Meter Arc Guide Line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none">
              {/* Curved Indicator Line */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 w-45 h-95 border-r-2 border-white/5 rounded-full pointer-events-none" 
                style={{ transform: 'translateX(-120px)' }}
              />
            </div>

            {/* List Container with Perspective for 3D Curve */}
            <div 
              className="flex flex-col justify-center relative w-full"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {servicesList.map((service, index) => {
                const d = index - activeIndex;
                const distance = Math.abs(d);
                const isFocused = d === 0;
                
                const rotateX = d * -16; 
                const translateZ = -distance * 45;
                const translateX = -Math.pow(distance, 1.6) * 12; // curve back to the left
                const scale = isFocused ? 1.35 : Math.max(0.75, 1 - distance * 0.12);
                const opacity = isFocused ? 1 : Math.max(0.1, 0.45 - distance * 0.12);
                const blur = isFocused ? 0 : distance * 1.5;

                return (
                  <motion.div
                    key={service.name}
                    animate={{
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      x: translateX,
                      z: translateZ,
                      rotateX: rotateX,
                      color: isFocused ? '#ffffff' : '#4b5563',
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 18,
                      mass: 0.8
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'left center',
                    }}
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center py-3 md:py-4 cursor-pointer select-none origin-left relative animate-gpu"
                  >
                    {/* Gauge Calibration Tick Mark */}
                    <div className="absolute right-full mr-4 flex items-center justify-end w-12">
                      <motion.div 
                        animate={{
                          width: isFocused ? 24 : 10,
                          backgroundColor: isFocused ? '#ffffff' : 'rgba(255,255,255,0.15)',
                          height: isFocused ? 3 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className="rounded-full"
                      />
                    </div>

                    {/* Active Arrow Indicator */}
                    <AnimatePresence>
                      {isFocused && (
                        <motion.div 
                          initial={{ opacity: 0, x: -15, scale: 0.7 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -15, scale: 0.7 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="absolute right-full mr-8 flex items-center justify-center text-white"
                        >
                          <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Service Text */}
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight select-none">
                      {service.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Service Info Display */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center pl-4 md:pl-12">
            <div className="h-62.5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4 max-w-lg"
                >
                  <div className="flex items-center space-x-2 text-white/50 text-xs font-bold uppercase tracking-[0.25em]">
                    <Sparkles className="w-4 h-4 text-white/70 animate-pulse" />
                    <span>Focus Service</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {servicesList[activeIndex].tagline}
                  </h3>

                  <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                    {servicesList[activeIndex].description}
                  </p>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-white font-bold text-sm uppercase tracking-wider group border-b border-white/20 pb-1 hover:border-white transition-colors"
                    >
                      <span>Explore service</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGraphic;



