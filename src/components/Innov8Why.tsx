import { Target, Users } from 'lucide-react';

const Innov8Why = () => {
  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                  alt="Innovation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <p className="text-3xl font-black uppercase tracking-tighter leading-tight italic">
                     "Africa is at a defining moment. But transformation requires builders."
                   </p>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
              BRIDGING <span className="text-secondary italic">THE GAP</span>
            </h2>
            
            <div className="space-y-8 text-primary/70 text-lg leading-relaxed font-medium">
              <p>
                Africa is full of ideas. Africa is full of potential. But too often, ideas remain undeveloped, and potential remains untapped.
              </p>
              
              <div className="bg-bg-light p-10 rounded-3xl border-l-8 border-secondary shadow-sm">
                <p className="text-primary font-black text-xl italic mb-4">"Innov8 Afrika exists to bridge that gap."</p>
                <p className="text-sm">We believe the future of Africa will not be built by chance—but by intentional thinkers and problem-solvers.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest mb-1">Intentionality</h4>
                    <p className="text-xs text-primary/60">Equipping the right knowledge and mindset.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest mb-1">Network</h4>
                    <p className="text-xs text-primary/60">Connecting builders across the continent.</p>
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

export default Innov8Why;
