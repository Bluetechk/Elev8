import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  {
    name: "Branding",
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
    tagline: "Scale to 8-Figures & Beyond",
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

const ServicesWithAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center min-h-screen md:min-h-225">
      
      {/* Static Background Fallback */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')`,
            filter: 'contrast(1.2) brightness(0.65)'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent md:to-black/30" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Column: Service List */}
          <div className="col-span-12 md:col-span-6 relative">
            
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
                const translateX = -Math.pow(distance, 1.6) * 12;
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
                    
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight select-none">
                      {service.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Service Info */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center pl-4 md:pl-12">
            <div className="h-75 flex flex-col justify-center">
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

export default ServicesWithAnimation;
