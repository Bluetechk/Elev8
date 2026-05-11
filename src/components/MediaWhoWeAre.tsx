import { motion } from 'framer-motion';

const MediaWhoWeAre = () => {
  return (
    <section className="relative py-12 bg-white text-primary overflow-hidden">
      {/* Decorative Ribbons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            d="M-100 200C200 100 400 300 600 200C800 100 1000 300 1200 200C1400 100 1600 300 1800 200" 
            stroke="var(--color-secondary)" 
            strokeWidth="40" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
              WHO WE <span className="text-secondary italic">ARE</span>
            </h2>
            <div className="space-y-6 text-primary/70 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Elev8 Media is the creative and digital marketing arm of Elev8 Inc. We are a full-service creative agency based in Monrovia, Liberia, dedicated to helping businesses and institutions build powerful brands, establish strong digital presences, and connect with their audiences in meaningful and measurable ways.
              </p>
              <p className="text-primary font-black border-l-4 border-secondary pl-6 py-2">
                We work with businesses that are serious about growth — businesses that understand that in today’s world, how you are seen is just as important as what you do. At Elev8 Media, we make sure you are seen well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaWhoWeAre;
