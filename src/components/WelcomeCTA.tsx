import { Calendar, MapPin, UserPlus, Mail } from 'lucide-react';

const WelcomeCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
         <span className="text-[20rem] font-black uppercase whitespace-nowrap tracking-tighter">FUTURE READY</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" 
                alt="Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary"></div>
           </div>

           <div className="relative z-10">
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
               START YOUR <br /> <span className="text-secondary italic">JOURNEY</span>
             </h2>

             <div className="flex flex-wrap justify-center gap-12 mb-16">
                <div className="flex flex-col items-center gap-2">
                   <Calendar className="text-secondary mb-2" size={32} />
                   <span className="text-sm font-black uppercase tracking-widest text-white">August 2026</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <MapPin className="text-secondary mb-2" size={32} />
                   <span className="text-sm font-black uppercase tracking-widest text-white">Monrovia, Liberia</span>
                </div>
             </div>

             <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed italic text-white/80">
               "The transition to college is a decision about who you want to become. Make it count."
             </p>

             <div className="flex flex-wrap justify-center gap-6">
                <button className="flex items-center gap-3 px-12 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl">
                  <UserPlus size={20} />
                  Join the Next Cohort
                </button>
                <button className="flex items-center gap-3 px-12 py-5 bg-white/10 text-white border-2 border-white/20 font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-primary transition-all duration-300">
                  <Mail size={20} />
                  Inquire Now
                </button>
             </div>

             <div className="mt-16 text-white/30 text-xs font-black uppercase tracking-[0.5em]">
                Clarity • Confidence • Competence
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCTA;
