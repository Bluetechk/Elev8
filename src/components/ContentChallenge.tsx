import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import media1 from '../assets/mediaimage1.jpeg';
import media2 from '../assets/mediaimage2.jpeg';
import media3 from '../assets/mediaimage3.jpeg';
import media4 from '../assets/mediaimage4.jpeg';

const ContentChallenge = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Gallery Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={media1} alt="Media Work 1" className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src={media2} alt="Media Work 2" className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={media3} alt="Media Work 3" className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src={media4} alt="Media Work 4" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-[100px] -z-10" />
            </div>

            {/* Text Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                <Sparkles size={16} className="text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Signature Initiative</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                  THE 60-DAY <br />
                  <span className="text-secondary">CONTENT CHALLENGE</span>
                </h2>
                <div className="w-20 h-2 bg-secondary rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p className="text-primary font-bold">
                  We provide selected Liberian businesses with a full suite of digital marketing services, completely free of charge, for 60 days.
                </p>
                <p>
                  This initiative is our way of investing in the Liberian business community — giving businesses that may not yet have access to professional marketing services the opportunity to experience what a strong digital presence can do for their brand.
                </p>
                <p className="italic border-l-4 border-secondary pl-6 py-2 bg-bg-light/50 rounded-r-xl">
                  "We believe that once a business experiences Elev8 Media, they will want to continue. It reflects our absolute confidence in our work."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Full Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Content Creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Ad Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">ZERO COST</span>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-xl hover:scale-105 active:scale-95 group"
                >
                  Apply for the Challenge
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentChallenge;
