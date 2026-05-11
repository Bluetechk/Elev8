import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users2, 
  Globe 
} from 'lucide-react';

import schoolLogo from '../assets/elev8 school of skill logo.png';
import mediaLogo from '../assets/elev8Media.jpeg';
import libraryLogo from '../assets/elev8 library logo.png';

const offerings = [
  {
    title: "Elev8 School of Skills",
    subtitle: "Move from Learning to Earning",
    description: "We equip individuals with practical, in-demand skills that translate into real opportunities. Through hands-on training, mentorship, and project-based learning, we prepare participants to earn, create, and compete in today’s evolving world. From digital and creative skills to professional and technical development, the School of Skills is designed to move people from potential to productivity—and from learning to earning.",
    logo: schoolLogo,
    buttonText: "Explore Programs",
    color: "bg-primary"
  },
  {
    title: "Elev8 Media",
    subtitle: "Shaping Narratives & Bringing Ideas to Life",
    description: "Elev8 Media provides creative and strategic services in branding, content creation, and digital storytelling—helping individuals, businesses, and organizations communicate with clarity, confidence, and impact. Beyond services, we are building a platform that amplifies voices, tells meaningful stories, and positions brands to stand out in a crowded world.",
    logo: mediaLogo,
    buttonText: "View Services",
    color: "bg-accent"
  },
  {
    title: "Elev8 Library",
    subtitle: "Making Reading Sexy Again",
    description: "Cultivating a culture of reading, thinking, and continuous learning. Through curated resources, book access, reading programs, and intellectual communities, Elev8 Library exists to expand minds, inspire deeper thinking, and make reading sexy again. It is a hub for ideas, reflection, and personal growth, where knowledge becomes a tool for transformation.",
    logo: libraryLogo,
    buttonText: "Explore Library",
    color: "bg-primary"
  },
  {
    title: "Level Up Conference",
    subtitle: "Design—Not Drift Through—Your Year",
    description: "Our flagship annual experience designed to help individuals start the year with clarity, direction, and intention. This online gathering brings together thought leaders to explore key areas that shape a truly great year. Through powerful sessions and practical insights, participants are equipped to design—not drift through—their year, building a foundation for growth, purpose, and impact.",
    icon: TrendingUp,
    buttonText: "Join Conference",
    color: "bg-accent"
  },
  {
    title: "Welcome to College",
    subtitle: "Step Into Higher Education with Confidence",
    description: "A focused career and life-readiness program for high school graduates preparing to transition into university. Held annually in August, this program equips participants with the mindset, clarity, and tools needed to make informed decisions about their academic and career paths, from course selection to leadership and future planning.",
    icon: Users2,
    buttonText: "Learn More",
    color: "bg-primary"
  },
  {
    title: "Innov8 Afrika",
    subtitle: "Building Solutions, Shaping Africa's Future",
    description: "A forward-thinking conference dedicated to entrepreneurs, creators, and innovators across Africa. Hosted annually in November, this virtual gathering creates a space for bold ideas, practical business insights, and meaningful connections for visionaries who are building solutions, creating opportunities, and shaping Africa’s future.",
    icon: Globe,
    buttonText: "Explore Innov8",
    color: "bg-accent"
  }
];

const Offerings = () => {
  return (
    <section className="py-20 bg-bg-light relative">
      {/* Notch with the color of the section ABOVE (Primary/Dark Navy) */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] bg-primary"
        style={{ clipPath: 'polygon(calc(50% - 30px) 0, 50% 30px, calc(50% + 30px) 0)' }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase">
            OUR <span className="text-secondary">BRANDS & PROGRAMS</span>
          </h2>
          <p className="text-gray-600 mt-4 font-bold text-xs uppercase tracking-widest">
            Explore the different arms of the Elev8 ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 max-w-screen-2xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl p-10 text-center border-b-8 border-transparent hover:border-secondary transition-all duration-300 group h-full flex flex-col justify-between"
            >
              <div>
                <div className={`${offering.color} w-28 h-28 rounded-full flex items-center justify-center mx-auto -mt-24 mb-10 border-4 border-white shadow-2xl relative overflow-hidden group-hover:bg-secondary transition-colors duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-accent opacity-50`} />
                  {offering.logo ? (
                    <img src={offering.logo} alt={offering.title} className="w-full h-full object-cover relative z-10" />
                  ) : (
                    offering.icon && <offering.icon className="text-white relative z-10" size={52} />
                  )}
                </div>
                <h3 className="text-2xl font-black text-primary mb-3 uppercase leading-tight">{offering.title}</h3>
                <h4 className="text-base font-bold text-primary mb-6 uppercase leading-tight tracking-tight">{offering.subtitle}</h4>
                <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed mb-10 px-2 font-medium">
                  {offering.description}
                </p>
              </div>
              <button className="w-full btn-gradient py-4 text-sm mt-auto">
                {offering.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
