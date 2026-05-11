import { Briefcase, Paintbrush } from 'lucide-react';

const LevelUpAudience = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Entrepreneurs Side */}
        <div className="relative w-full lg:w-1/2 flex items-center p-12 md:p-24 overflow-hidden group">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
               alt="Entrepreneurs" 
               className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-primary/60"></div>
          </div>
          
          <div className="relative z-10 max-w-lg">
            <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-8 border border-secondary/30">
               <Briefcase size={32} />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              FOR <span className="text-secondary italic">ENTREPRENEURS</span>
            </h3>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              Those who are building businesses and need to enter the new year with a sharp strategy, a focused mindset, and the energy to execute. Get the perspective and the tools to plan your year with purpose.
            </p>
          </div>
        </div>

        {/* Creatives Side */}
        <div className="relative w-full lg:w-1/2 flex items-center p-12 md:p-24 overflow-hidden group border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" 
               alt="Creatives" 
               className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-[#004D40]/80"></div>
          </div>
          
          <div className="relative z-10 max-w-lg">
            <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mb-8 border border-secondary/30">
               <Paintbrush size={32} />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              FOR <span className="text-secondary italic">CREATIVES</span>
            </h3>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              Those whose work lives at the intersection of imagination and execution. Get the inspiration, the structure, and the community to channel your creativity into meaningful outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpAudience;
