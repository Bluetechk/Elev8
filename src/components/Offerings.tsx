import { motion } from 'framer-motion';
import { TrendingUp, Users2, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import schoolLogo from '../assets/elev8 school of skill logo.png';
import schoolBg from '../assets/schoolofskill.jfif';
import mediaLogo from '../assets/elev8Media.jpeg';
import libraryLogo from '../assets/elev8 library logo.png';
import mediaBg from '../assets/mediaimage1.jpeg'
import libraryBg from '../assets/mediaimage4.jpeg';
import levelupBg from '../assets/levelupconference.jfif';
import welcomeBg from '../assets/welcomtocollege.jpeg';
import innov8Bg from '../assets/levelup.jfif';
const offerings = [
  {
    title: "Elev8 School of Skills",
    subtitle: "Move from Learning to Earning",
    description: "Hands-on training, mentorship, and project-based learning that move people from potential to productivity — and from learning to earning.",
    logo: schoolLogo,
    bgImage: schoolBg,
    buttonText: "Explore Programs",
    accentColor: "#00D084",
    path: "/school-of-skill",
  },
  {
    title: "Elev8 Media",
    subtitle: "Shaping Narratives & Bringing Ideas to Life",
    description: "Creative and strategic services in branding, content creation, and digital storytelling that help you communicate with clarity, confidence, and impact.",
    logo: mediaLogo,
    bgImage: mediaBg,
    buttonText: "View Services",
    accentColor: "#0091FF",
    path: "/media",
  },
  {
    title: "Elev8 Library",
    subtitle: "Making Reading Sexy Again",
    description: "Curated resources, book access, reading programs, and intellectual communities that expand minds and inspire deeper thinking.",
    logo: libraryLogo,
    bgImage: libraryBg,
    buttonText: "Explore Library",
    accentColor: "#00D084",
    path: "/library",
  },
  {
    title: "Level Up Conference",
    subtitle: "Design — Not Drift Through — Your Year",
    description: "Our flagship annual experience to start the year with clarity, direction, and intention through powerful sessions and practical insights.",
    icon: TrendingUp,
    bgImage: levelupBg,
    buttonText: "Join Conference",
    accentColor: "#0091FF",
    path: "/levelup",
  },
  {
    title: "Welcome to College",
    subtitle: "Step Into Higher Education with Confidence",
    description: "A focused career and life-readiness program equipping high school graduates with the mindset, clarity, and tools for university success.",
    icon: Users2,
    bgImage: welcomeBg,
    buttonText: "Learn More",
    accentColor: "#00D084",
    path: "/welcome",
  },
  {
    title: "Innov8 Afrika",
    subtitle: "Building Solutions, Shaping Africa's Future",
    description: "A forward-thinking virtual conference for entrepreneurs, creators, and innovators across Africa — bold ideas, practical insights, meaningful connections.",
    icon: Globe,
    bgImage: innov8Bg,
    buttonText: "Explore Innov8",
    accentColor: "#0091FF",
    path: "/innov8",
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Offerings = () => {
  return (
    <section id="offerings" className="py-28 bg-bg-light relative overflow-hidden">

      {/* Top notch from above section */}
      <div
        className="absolute top-0 left-0 w-full h-7.5 bg-black"
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
          <div className="w-16 h-1 bg-linear-to-r from-secondary to-accent rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -10 }}
              className="group relative flex h-108 flex-col justify-end overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Full-bleed image — the hero of the card */}
              <img
                src={offering.bgImage}
                alt={offering.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-105"
              />

              {/* Legibility scrim, weighted to the bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-black/10" />

              {/* Accent top border that grows on hover */}
              <div
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: offering.accentColor }}
              />

              {/* Logo / icon badge */}
              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-lg backdrop-blur-md">
                {offering.logo ? (
                  <img src={offering.logo} alt={offering.title} className="h-full w-full object-cover" />
                ) : (
                  offering.icon && <offering.icon className="text-white" size={24} />
                )}
              </div>

              {/* Content over the image */}
              <div className="relative z-10 space-y-3 p-7">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: offering.accentColor }}
                >
                  {offering.subtitle}
                </p>
                <h3 className="text-2xl font-black uppercase leading-tight text-white">
                  {offering.title}
                </h3>
                <p className="line-clamp-2 text-sm font-medium leading-relaxed text-white/70">
                  {offering.description}
                </p>

                {/* CTA — clean accent pill */}
                <Link to={offering.path} className="inline-block pt-2">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary shadow-md transition-all duration-300 group-hover:gap-3.5"
                    style={{ backgroundColor: offering.accentColor }}
                  >
                    {offering.buttonText}
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
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
