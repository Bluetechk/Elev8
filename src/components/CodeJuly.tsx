import codeJulyImg from '../assets/codeJuly.jpeg';
import { Sparkles, Target, Rocket } from 'lucide-react';

const CodeJuly = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl group-hover:bg-secondary/40 transition-all duration-700"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img src={codeJulyImg} alt="Code July Campaign" className="w-full h-auto object-cover" />
                <div className="absolute top-8 right-8 bg-secondary text-primary font-black px-6 py-4 rounded-2xl shadow-xl transform rotate-12 flex flex-col items-center">
                  <span className="text-4xl leading-none">50%</span>
                  <span className="text-xs uppercase tracking-widest">OFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-secondary font-bold text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Annual Learning Campaign
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none">
              CODE <span className="text-secondary italic">JULY</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-secondary/90 mb-8 uppercase tracking-tight">
              Learn More. Pay Less. Elev8 Faster.
            </p>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
              <p className="text-white text-xl">
                CODE JULY is our annual learning campaign at Elev8 School of Skills—a dedicated season where opportunity meets accessibility.
              </p>
              
              <p>
                Every July, we open the doors wider by offering <span className="text-secondary font-bold">50% off all our courses</span>, making it easier for students, young professionals, and aspiring entrepreneurs to gain high-value, practical skills without financial barriers.
              </p>

              <p className="border-l-4 border-secondary pl-6 py-2 text-white italic">
                "But CODE JULY is more than a discount—it’s a call to action."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Target className="text-secondary mt-1 shrink-0" size={18} />
                  <p className="text-sm">For the individual waiting for the right moment.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="text-secondary mt-1 shrink-0" size={18} />
                  <p className="text-sm">For the student ready to go beyond theory.</p>
                </div>
              </div>

              <p className="pt-4">
                During this period, gain access to the same hands-on, industry-relevant training designed to help you learn, build, and position yourself for real opportunities.
              </p>

              <div className="pt-8 text-center lg:text-left">
                <p className="text-lg font-black uppercase tracking-widest text-white mb-2">
                  CODE JULY IS THAT MOMENT.
                </p>
                <p className="text-secondary font-bold italic">
                  Start where you are. Build what you can. Elev8 from there.
                </p>
              </div>

              <div className="pt-8 flex justify-center lg:justify-start">
                <a href="https://forms.gle/aHeubRpd9marfsz5A" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl hover:-translate-y-1 active:translate-y-0">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeJuly;
