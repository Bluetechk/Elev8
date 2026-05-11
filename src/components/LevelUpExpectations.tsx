import { Mic2, Layout, Target, Quote as QuoteIcon } from 'lucide-react';

const LevelUpExpectations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">
              WHAT TO <span className="text-secondary italic">EXPECT</span>
            </h2>
            <p className="text-primary/60 font-bold uppercase tracking-widest text-xs">Transformative from the first session to the last.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Mic2 size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Powerful Keynotes</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Hear from thought leaders and innovators who bring hard-won wisdom and practical frameworks that challenge the status quo.</p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Layout size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Focused Breakouts</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Go deeper on specific topics that matter most. Interactive sessions giving you tools you can put to work immediately.</p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Target size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Goal-Setting</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Practical life planning to ensure you don't just dream about a better year, but actually architect it.</p>
            </div>
          </div>

          {/* Immersive Experience Section */}
          <div className="relative rounded-[4rem] overflow-hidden bg-primary p-12 md:p-24 text-white shadow-2xl">
             <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80" 
                  alt="Crowd" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
             </div>
             
             <div className="relative z-10 max-w-2xl">
               <div className="text-secondary mb-8">
                 <QuoteIcon size={48} />
               </div>
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic">The LEVEL UP <span className="text-secondary">Experience</span></h3>
               <div className="space-y-6 text-xl md:text-2xl font-bold italic text-white/80 leading-snug">
                 <p>"The best way to start a new year."</p>
                 <p>"The room that reminded me of what I am capable of."</p>
                 <p>"The one event I will not miss at the start of every year."</p>
               </div>
               <p className="mt-12 text-sm uppercase tracking-[0.3em] font-black text-secondary">A Catalyst for Growth</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpExpectations;
