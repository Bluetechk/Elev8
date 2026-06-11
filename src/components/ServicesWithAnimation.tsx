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
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Column: Service List */}
          <div className="col-span-12 md:col-span-6 relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="absolute right-6 top-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center shadow-xl">
                  <ArrowRight className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
              </div>

              <div className="relative space-y-4">
                {servicesList.map((service, index) => {
                  const d = index - activeIndex;
                  const isFocused = d === 0;
                  const offsetX = isFocused ? 0 : (d < 0 ? -32 : 32);
                  const opacity = isFocused ? 1 : 0.45;

                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: offsetX }}
                      animate={{ opacity, x: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      onClick={() => setActiveIndex(index)}
                      className="cursor-pointer"
                    >
                      <div className={`relative overflow-hidden rounded-4xl border transition-all duration-300 ${isFocused ? 'bg-white/15 border-white/20 shadow-[0_20px_60px_rgba(255,255,255,0.12)]' : 'bg-white/5 border-white/10 hover:bg-white/10'} py-5 px-6 pr-32`}> 
                        <span className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight transition-colors duration-300 ${isFocused ? 'text-white' : 'text-slate-300'}`}>
                          {service.name}
                        </span>
                        {isFocused && (
                          <div className="mt-3 text-sm tracking-[0.22em] uppercase text-white/70">
                            {service.tagline}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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
