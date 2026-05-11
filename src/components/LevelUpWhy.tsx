import { CheckCircle2, TrendingUp, Users } from 'lucide-react';

const LevelUpWhy = () => {
  return (
    <section className="relative py-32 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">
              WHY <span className="text-secondary italic">LEVEL UP</span> EXISTS
            </h2>
            <div className="space-y-6 text-primary/70 text-lg leading-relaxed font-medium">
              <p>
                Most people enter a new year the same way they left the last one — without a plan, without a clear direction, and without the tools to make the year meaningfully different.
              </p>
              <p>
                We believe that the way you enter a year determines how you experience it. A year entered with <span className="text-secondary font-black">clarity</span> outperforms a year entered with confusion.
              </p>
              
              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold">Clarity over Confusion</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                    <TrendingUp size={20} />
                  </div>
                  <span className="font-bold">Intention over Habit</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                    <Users size={20} />
                  </div>
                  <span className="font-bold">Community over Isolation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             {/* Immersive Background Card */}
             <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80" 
                  alt="Planning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                   <p className="text-white text-3xl font-black uppercase tracking-tighter leading-tight italic">
                     "The rest is up to you."
                   </p>
                </div>
             </div>
             {/* Decorative floating element */}
             <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Make the decision</p>
                <p className="text-primary font-bold text-lg">Your trajectory starts here.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpWhy;
