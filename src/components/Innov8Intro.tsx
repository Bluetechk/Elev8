import { Globe, Lightbulb, Rocket } from 'lucide-react';

const Innov8Intro = () => {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Immersive Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80" 
          alt="African Tech Hub" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-xs uppercase tracking-widest border border-secondary/20 mb-10">
            <Globe size={16} />
            Where Ideas Become Impact
          </div>
          
          <h2 className="text-4xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none">
            INNOV8 <span className="text-secondary italic">AFRIKA</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Innov8 Afrika is Elev8’s flagship platform for entrepreneurs, creators, and forward-thinking innovators across Africa. 
              </p>
              <p>
                It is a bold, future-focused conference designed to spark ideas, accelerate growth, and connect a new generation of African builders who are shaping the continent’s future.
              </p>
              <div className="pt-8 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-secondary">NOV</span>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">Annually</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-secondary">VIRTUAL</span>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">Experience</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-secondary/10 p-12 rounded-[3rem] border border-secondary/20 backdrop-blur-md">
                 <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Moving You From:</h3>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <span className="text-secondary font-black">Ideas</span>
                       <Rocket size={18} className="text-white/30" />
                       <span className="text-white font-black">Execution</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="text-secondary font-black">Passion</span>
                       <Rocket size={18} className="text-white/30" />
                       <span className="text-white font-black">Structure</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="text-secondary font-black">Vision</span>
                       <Rocket size={18} className="text-white/30" />
                       <span className="text-white font-black">Impact</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innov8Intro;
