import { Mail, MapPin, UserPlus } from 'lucide-react';

const LibraryCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
           {/* Animated background gradient */}
           <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#004D40] to-secondary opacity-30"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
               START READING <span className="text-secondary italic">TODAY</span>
             </h2>
             
             <p className="text-xl md:text-3xl text-secondary font-bold mb-12 italic tracking-tight">
               "The book that changes your life might be sitting on our shelf right now."
             </p>
             
             <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
               <button className="flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl hover:-translate-y-1">
                 <UserPlus size={20} />
                 Become a Member
               </button>
               
               <a 
                  href="https://www.instagram.com/elev8.library/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border-2 border-white/20 font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  <Mail size={20} />
                  Instagram
                </a>

                <button className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-white/50 font-bold uppercase tracking-widest rounded-2xl hover:text-secondary transition-colors underline underline-offset-8">
                  <MapPin size={20} />
                  Visit Us
                </button>
             </div>

             <div className="mt-16 text-white/30 text-xs font-black uppercase tracking-[0.5em]">
                Browse • Borrow • Read • Repeat
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryCTA;
