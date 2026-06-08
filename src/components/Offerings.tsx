import { motion } from 'framer-motion';
import { TrendingUp, Users2, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import schoolLogo from '../assets/elev8 school of skill logo.png';
import mediaLogo from '../assets/elev8Media.jpeg';
import libraryLogo from '../assets/elev8 library logo.png';

const offerings = [
  {
    title: "Elev8 School of Skills",
    subtitle: "Move from Learning to Earning",
    description: "Hands-on training, mentorship, and project-based learning that move people from potential to productivity — and from learning to earning.",
    logo: schoolLogo,
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    buttonText: "Explore Programs",
    accentColor: "#00D084",
    path: "/school-of-skill",
  },
  {
    title: "Elev8 Media",
    subtitle: "Shaping Narratives & Bringing Ideas to Life",
    description: "Creative and strategic services in branding, content creation, and digital storytelling that help you communicate with clarity, confidence, and impact.",
    logo: mediaLogo,
    bgImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1400&auto=format&fit=crop",
    buttonText: "View Services",
    accentColor: "#0091FF",
    path: "/media",
  },
  {
    title: "Elev8 Library",
    subtitle: "Making Reading Sexy Again",
    description: "Curated resources, book access, reading programs, and intellectual communities that expand minds and inspire deeper thinking.",
    logo: libraryLogo,
    bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop",
    buttonText: "Explore Library",
    accentColor: "#00D084",
    path: "/library",
  },
  {
    title: "Level Up Conference",
    subtitle: "Design — Not Drift Through — Your Year",
    description: "Our flagship annual experience to start the year with clarity, direction, and intention through powerful sessions and practical insights.",
    icon: TrendingUp,
    bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop",
    buttonText: "Join Conference",
    accentColor: "#0091FF",
    path: "/levelup",
  },
  {
    title: "Welcome to College",
    subtitle: "Step Into Higher Education with Confidence",
    description: "A focused career and life-readiness program equipping high school graduates with the mindset, clarity, and tools for university success.",
    icon: Users2,
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop",
    buttonText: "Learn More",
    accentColor: "#00D084",
    path: "/welcome",
  },
  {
    title: "Innov8 Afrika",
    subtitle: "Building Solutions, Shaping Africa's Future",
    description: "A forward-thinking virtual conference for entrepreneurs, creators, and innovators across Africa — bold ideas, practical insights, meaningful connections.",
    icon: Globe,
    bgImage: "https://images.unsplash.com/photo-1529988885170-6dc8ce34ce6d?q=80&w=1400&auto=format&fit=crop",
    buttonText: "Explore Innov8",
    accentColor: "#0091FF",
    path: "/innov8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Offerings = () => {
  return (
    <section id="offerings" className="py-28 bg-[#E9EFED] relative overflow-hidden">

      {/* Top notch from above section */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] bg-black"
        style={{ clipPath: 'polygon(calc(50% - 30px) 0, 50% 30px, calc(50% + 30px) 0)' }}
      />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,208,132,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,145,255,0.06) 0%, transparent 50%)' }}
      />

      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">
            The Elev8 Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary uppercase leading-none">
            Our <span className="text-secondary">Brands</span> &{' '}
            <span className="text-secondary">Programs</span>
          </h2>
          <p className="text-gray-500 mt-5 font-medium max-w-xl mx-auto text-sm md:text-base">
            Six powerful arms of one mission — equipping people and businesses to grow without limits.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              style={{ borderBottom: `4px solid transparent` }}
            >
              {/* Image Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={offering.bgImage}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Logo / Icon badge */}
                <div
                  className="absolute bottom-[-20px] left-6 w-14 h-14 rounded-2xl border-2 border-white shadow-xl overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: '#06221C' }}
                >
                  {offering.logo ? (
                    <img src={offering.logo} alt={offering.title} className="w-full h-full object-cover" />
                  ) : (
                    offering.icon && <offering.icon className="text-white" size={26} />
                  )}
                </div>

                {/* Accent dot */}
                <div
                  className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: offering.accentColor }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7 pt-10">
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-black text-primary uppercase leading-tight group-hover:text-secondary transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: offering.accentColor }}
                  >
                    {offering.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {offering.description}
                  </p>
                </div>

                {/* Bottom divider */}
                <div
                  className="h-px w-full my-5 opacity-20"
                  style={{ backgroundColor: offering.accentColor }}
                />

                {/* CTA */}
                <Link to={offering.path}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 group/btn"
                    style={{ background: `linear-gradient(135deg, #06221C, ${offering.accentColor}22)`, border: `1px solid ${offering.accentColor}33` }}
                  >
                    <span style={{ color: offering.accentColor }}>{offering.buttonText}</span>
                    <ArrowRight
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      style={{ color: offering.accentColor }}
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
