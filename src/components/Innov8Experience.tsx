import { MessageSquare, Briefcase, Cpu, Share2, Compass } from 'lucide-react';

const Innov8Experience = () => {
  return (
    <section className="bg-primary text-white">
      {/* Pillar 1 & 2: Conversations & Business */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <MessageSquare className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Insightful <span className="text-secondary italic">Conversations</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Engage with experienced entrepreneurs and industry leaders sharing practical insights and real-life lessons learned from building in Africa.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-white/5 group relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <Briefcase className="text-secondary mb-8" size={40} />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Practical <span className="text-secondary italic">Business Knowledge</span></h3>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              Gain access to real strategies on starting, structuring, branding, and scaling sustainable ventures across African markets.
            </p>
          </div>
        </div>
      </div>

      {/* Pillar 3: Innovation & Problem Solving - FULL IMMERSIVE */}
      <div className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-145118753022cd-88adbc3e954e?auto=format&fit=crop&q=80" 
           alt="Technology & Africa" 
           className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <Cpu className="text-secondary mx-auto mb-8" size={56} />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              INNOVATION & <span className="text-secondary italic">PROBLEM-SOLVING</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-12">
              Explore how innovation solves real problems in Education, Tech, Agriculture, and Media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {['Education', 'Technology', 'Agriculture', 'Creative Industries', 'Social Enterprise'].map((item) => (
                 <span key={item} className="px-6 py-2 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">{item}</span>
               ))}
            </div>
         </div>
      </div>

      {/* Pillar 4 & 5: Networking & Mindset */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-secondary/5 border-t border-white/10 lg:border-t-0 lg:border-r">
          <Share2 className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Networking & <span className="text-secondary italic">Collaboration</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Connect with like-minded individuals across different African countries. Create opportunities for partnerships and long-term business relationships.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-t border-white/10 lg:border-t-0">
          <Compass className="text-secondary mb-8" size={40} />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Mindset & <span className="text-secondary italic">Vision Building</span></h3>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            Develop the mindset required to build and sustain impactful ventures—resilience, creativity, adaptability, and long-term thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innov8Experience;
