import { CheckCircle2, Users2, Rocket } from 'lucide-react';

const Innov8Audience = () => {
  const audience = [
    "Entrepreneurs and startup founders",
    "Creatives and digital builders",
    "Innovators and problem-solvers",
    "Students with business ideas",
    "Anyone passionate about building solutions in Africa"
  ];

  const outcomes = [
    "Gain clarity on your business direction",
    "Understand how to structure and grow a venture",
    "Build valuable connections across Africa",
    "Develop a stronger entrepreneurial mindset",
    "Be equipped to take action and build with confidence"
  ];

  return (
    <section className="py-24 bg-white text-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start max-w-6xl mx-auto">
          {/* Who It Is For */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-tight">
              WHO IS <span className="text-secondary italic">INNOV8 FOR?</span>
            </h2>
            <div className="space-y-4">
              {audience.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-bg-light rounded-2xl border border-primary/5 hover:border-secondary transition-all group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-primary transition-all">
                    <Users2 size={18} />
                  </div>
                  <span className="font-bold text-primary/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="w-full lg:w-1/2">
             <div className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                   <Rocket size={120} />
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tight mb-8 relative z-10">THE <span className="text-secondary italic">OUTCOME</span></h3>
                <div className="space-y-6 relative z-10">
                   {outcomes.map((item, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                        <p className="font-medium text-white/80">{item}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innov8Audience;
