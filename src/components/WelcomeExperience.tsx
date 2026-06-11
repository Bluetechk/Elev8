import { Brain, Book, Users, Award, Target } from 'lucide-react';
import welcomeImpactImg from '../assets/welcome_to_college.jfif';

const WelcomeExperience = () => {
  return (
    <section className="bg-primary text-white">
      {/* Experience Pillar 1: Mindset & Clarity */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div className="relative z-10">
            <Brain className="text-secondary mb-8" size={40} />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Mindset & <span className="text-secondary italic">Clarity</span></h3>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              We help you shift from a high-school mindset to a university-ready perspective. Gain the mental toughness and clarity needed to navigate a new level of independence and responsibility.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
          <Book className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Academic <span className="text-secondary italic">Strategy</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Master the art of effective studying, research, and note-taking. We provide practical strategies to handle heavy course loads and maintain high academic standards.
          </p>
        </div>
      </div>

      {/* Full Immersive Middle Section */}
      <div className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
         <img
           src={welcomeImpactImg}
           alt="Welcome to College students"
           className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <Award className="text-secondary mx-auto mb-8" size={56} />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              READY FOR <span className="text-secondary italic">IMPACT</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-12 italic">
              "We don't just prepare you for exams. We prepare you for life beyond the degree."
            </p>
         </div>
      </div>

      {/* Experience Pillar 2: Community & Support */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <Users className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Mentorship & <span className="text-secondary italic">Community</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Connect with peers and mentors who share your ambition. Build a support network that will stay with you throughout your university years and into your career.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-secondary/5 border-t border-white/10 lg:border-t-0">
          <Target className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Career <span className="text-secondary italic">Pathfinding</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Uncover the intersection of your passions and the market's needs. We guide you through selecting the right courses and majors that lead to fulfilling careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeExperience;
