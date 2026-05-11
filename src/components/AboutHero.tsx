import { motion } from 'framer-motion';
import heroImage from '../assets/heroimage.jpg';

interface AboutHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  tagline?: string;
  image?: string;
  showVision?: boolean;
  compact?: boolean;
}

const AboutHero = ({ 
  title = "ELEV8", 
  subtitle = "OUR MISSION & VISION",
  tagline = "To equip individuals and businesses to live intentionally, grow purposefully, and impact meaningfully.",
  image = heroImage,
  showVision = true,
  compact = false
}: AboutHeroProps) => {
  return (
    <section className={`relative w-full ${compact ? 'py-20 md:py-32' : 'h-screen'} flex items-center justify-center overflow-hidden bg-primary pt-20`}>
      {/* Decorative Ribbons/Curves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            d="M-100 600C100 500 300 700 500 600C700 500 900 700 1100 600C1300 500 1500 700 1700 600" 
            stroke="url(#gradient-ribbon-dark)" strokeWidth="60" strokeLinecap="round" />
          <defs>
            <linearGradient id="gradient-ribbon-dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-secondary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-20 grayscale"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 uppercase tracking-widest opacity-90">{subtitle}</h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            {title === "ELEV8" ? (
              <>ELEV<span className="text-secondary">8</span></>
            ) : title}
          </h1>
          
          <div className="space-y-10 text-white/90 text-lg md:text-xl leading-relaxed font-medium">
            <div className="border-l-4 border-secondary pl-6">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block mb-2">Our Mission</span>
              <p className="italic">
                "{tagline}"
              </p>
            </div>

            {showVision && (
              <div className="border-l-4 border-secondary pl-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block mb-2">Our Vision</span>
                <p className="italic">
                  "To raise a generation of intentional, value-driven, and impact-focused individuals — and to build a thriving ecosystem of skilled professionals, growing businesses, and well-read communities across Liberia and beyond."
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="relative group">
          {/* Teal Glow behind the image */}
          <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[120px] -z-10 group-hover:bg-secondary/40 transition-all duration-700 transform scale-110"></div>
          
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group h-[50vh] md:h-[60vh]">
            <img 
              src={image} 
              alt={typeof title === 'string' ? title : "Hero Image"} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
          </div>
          
          {/* Decorative accents with glow */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-secondary/50 rounded-tr-3xl z-20 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-secondary/50 rounded-bl-3xl z-20 group-hover:scale-110 transition-transform duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
