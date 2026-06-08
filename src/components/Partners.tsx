import { motion } from 'framer-motion';
import schoolLogo from '../assets/elev8 school of skill logo.png';
import libraryLogo from '../assets/elev8 library logo.png';
import mediaLogo from '../assets/elev8Media.jpeg';

const brands = [
  { src: schoolLogo,  alt: 'Elev8 School of Skills', label: 'School of Skills' },
  { src: libraryLogo, alt: 'Elev8 Library',           label: 'Library'         },
  { src: mediaLogo,   alt: 'Elev8 Media',             label: 'Media'           },
];

const Partners = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #06221C 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-black text-primary/30 uppercase tracking-[0.4em] mb-2">The Elev8 Family</p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary/10" />
            <span className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">
              Our <span className="text-secondary">Brands</span>
            </span>
            <div className="h-px w-16 bg-primary/10" />
          </div>
        </motion.div>

        {/* Logo row */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map(({ src, alt, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              {/* Logo container */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border border-primary/10 shadow-lg group-hover:shadow-2xl group-hover:border-secondary/30 transition-all duration-400 bg-white flex items-center justify-center p-3">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
              </div>
              <p className="text-[10px] font-black text-primary/40 uppercase tracking-[0.25em] group-hover:text-secondary transition-colors duration-300">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-xs text-primary/25 font-bold uppercase tracking-[0.3em]">
            Equip · Grow · Impact
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
