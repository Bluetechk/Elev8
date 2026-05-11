import { GraduationCap, Sparkles } from 'lucide-react';

const WelcomeIntro = () => {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Immersive Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050335392-9bc567c3fbb5?auto=format&fit=crop&q=80" 
          alt="Graduation" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-xs uppercase tracking-widest border border-secondary/20 mb-10">
            <Sparkles size={16} />
            The Bridge to Your Future
          </div>
          
          <h2 className="text-4xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none">
            WELCOME TO <br /> <span className="text-secondary italic">COLLEGE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Welcome to College is Elev8's flagship career and life-readiness program specifically for 12th-grade students and high school graduates in Liberia.
              </p>
              <p>
                It is a focused journey designed to equip the next generation with the mindset, clarity, and tools needed to make an intentional transition into higher education.
              </p>
              <div className="pt-8 border-l-4 border-secondary pl-8">
                 <p className="text-2xl font-black text-white italic">
                   "Don't just go to college. Go with a purpose."
                 </p>
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl group-hover:bg-secondary/40 transition-all duration-700"></div>
               <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-8 text-center">
                  <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <GraduationCap size={40} />
                  </div>
                  <h4 className="text-xl font-black uppercase mb-2">Next Cohort</h4>
                  <p className="text-secondary font-black text-2xl uppercase tracking-tighter mb-4">AUGUST 2026</p>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Mark Your Calendar</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeIntro;
