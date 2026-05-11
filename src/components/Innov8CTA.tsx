import { motion } from 'framer-motion';
import { Calendar, Monitor, Users, Mail } from 'lucide-react';

const Innov8CTA = () => {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
         <span className="text-[25rem] font-black uppercase whitespace-nowrap">AFRIKA</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Movement" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary"></div>
           </div>

           <div className="relative z-10">
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
               JOIN THE <br /> <span className="text-secondary italic">MOVEMENT</span>
             </h2>

             <div className="flex flex-wrap justify-center gap-12 mb-16">
                <div className="flex flex-col items-center gap-2">
                   <Calendar className="text-secondary mb-2" size={32} />
                   <span className="text-sm font-black uppercase tracking-widest">November</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Monitor className="text-secondary mb-2" size={32} />
                   <span className="text-sm font-black uppercase tracking-widest">Virtual</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Users className="text-secondary mb-2" size={32} />
                   <span className="text-sm font-black uppercase tracking-widest">Pan-African</span>
                </div>
             </div>

             <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed italic text-white/80">
               "If you have an idea... If you are building something... If you want to be part of Africa’s next wave of innovation — Innov8 Afrika is for you."
             </p>

             <div className="flex flex-wrap justify-center gap-6">
                <button className="px-12 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl">
                  Register Now
                </button>
                <button className="px-12 py-5 bg-white/10 text-white border-2 border-white/20 font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-primary transition-all duration-300">
                  Contact Us
                </button>
             </div>

             <div className="mt-16 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-white/30 font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors cursor-pointer">
                  <Mail size={16} /> Sponsorships
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Innov8CTA;
