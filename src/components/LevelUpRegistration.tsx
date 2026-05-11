import { Calendar, Globe, Bell } from 'lucide-react';

const LevelUpRegistration = () => {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
         <span className="text-[20rem] font-black uppercase whitespace-nowrap">LEVEL UP 2027</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl border border-primary/5 p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-none">
              SAVE THE <span className="text-secondary italic">DATE</span>
            </h2>
            <p className="text-lg md:text-xl text-primary/70 font-medium leading-relaxed mb-12">
              The next edition of LEVEL UP is coming. Mark your calendar, secure your seat early, and get ready to enter the year differently.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Calendar size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/40">When</p>
                  <p className="text-xl font-black text-primary">JANUARY 28th - 30th, 2027</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Globe size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/40">Where</p>
                  <p className="text-xl font-black text-primary">ONLINE (LIVE STREAMED)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Bell size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/40">Registration</p>
                  <p className="text-xl font-black text-primary">OPENS OCTOBER 1, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
             <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80" 
                  alt="Success" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-12">
                   <div>
                     <p className="text-white text-3xl font-black uppercase tracking-tighter leading-tight">
                       Your best year is a <span className="text-secondary italic">decision</span> away.
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpRegistration;
