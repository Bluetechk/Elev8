import { Sparkles } from 'lucide-react';

const LevelUpIntro = () => {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Immersive Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" 
          alt="Conference Atmosphere" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary via-primary/80 to-primary"></div>
     </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-xs uppercase tracking-widest border border-secondary/20 mb-10">
            <Sparkles size={16} />
            The Annual Reset
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">
            WHAT IS <span className="text-secondary italic">LEVEL UP?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                LEVEL UP is Elev8 Inc.'s annual new-year conference — a high-energy, purpose-driven gathering designed to help innovators, creatives, entrepreneurs, and individuals step into the new year with clarity and intention.
              </p>
              <p className="text-white text-2xl font-black italic border-l-4 border-secondary pl-8 py-4 bg-secondary/5 rounded-r-3xl">
                "It is more than a conference. It is a reset. It is the moment where you stop drifting into the new year and start designing it."
              </p>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl group-hover:bg-secondary/40 transition-all duration-700"></div>
               <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                 <img
                   src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
                   alt="Speaker presenting to a conference audience"
                   className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpIntro;
