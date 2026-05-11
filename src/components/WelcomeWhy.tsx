import { Compass, Target } from 'lucide-react';

const WelcomeWhy = () => {
  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80" 
                  alt="Student Mentorship" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute top-12 left-12 right-12">
                   <div className="bg-secondary p-8 rounded-3xl shadow-xl">
                      <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Our Conviction</p>
                      <p className="text-primary font-bold text-xl leading-snug italic">"The transition to university is one of the most critical pivots in a young person's life."</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
              TRANSITION WITH <span className="text-secondary italic">CONFIDENCE</span>
            </h2>
            
            <div className="space-y-8 text-primary/70 text-lg leading-relaxed font-medium">
              <p>
                Many students enter university without a clear sense of why they are there or where they are going. They drift through their courses, unsure of their career paths and unprepared for the demands of higher education.
              </p>
              
              <p className="text-primary font-black text-2xl">
                Welcome to College changes the narrative.
              </p>

              <div className="grid grid-cols-1 gap-6 pt-6">
                <div className="flex gap-6 p-6 bg-bg-light rounded-3xl border border-primary/5 hover:border-secondary transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight mb-1">Career Clarity</h4>
                    <p className="text-sm text-primary/60">Identify your strengths and align your academic choices with your long-term goals.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-bg-light rounded-3xl border border-primary/5 hover:border-secondary transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight mb-1">University Readiness</h4>
                    <p className="text-sm text-primary/60">Develop the academic discipline and life skills required to thrive in a university environment.</p>
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

export default WelcomeWhy;
