import { Target, Award, Users } from 'lucide-react';

const SchoolWhoWeAre = () => {
  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-primary/5 relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
              WHO WE <span className="text-secondary italic">ARE</span>
            </h2>
            
            <div className="space-y-8 text-primary/70 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Elev8 School of Skills is the training and certification arm of Elev8 Inc. We are a practical skills training institution based in Monrovia, Liberia, dedicated to equipping individuals with the hands-on, career-relevant skills they need to compete, contribute, and thrive in today’s world.
              </p>
              <p className="text-primary font-black border-l-4 border-secondary pl-6 py-2 bg-secondary/5 rounded-r-2xl">
                We believe that knowledge without application is incomplete. At Elev8 School of Skills, we do not just teach concepts — we build competence.
              </p>
            </div>

            <div className="mt-20 pt-12 border-t border-primary/10">
              <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight uppercase tracking-tight">
                OUR <span className="text-secondary italic">APPROACH</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">Practical Results</h4>
                  <p className="text-sm text-primary/60 leading-relaxed">Our courses are structured, time-bound, and results-oriented. We focus on real, applicable skills that open doors and build futures.</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">Intentional Classes</h4>
                  <p className="text-sm text-primary/60 leading-relaxed">We keep our class sizes intentional, our facilitators qualified, and our environment focused to ensure deep learning.</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">Invest in Yourself</h4>
                  <p className="text-sm text-primary/60 leading-relaxed">You are not just signing up for a course — you are investing in a version of yourself that is more capable and competitive.</p>
                </div>
              </div>

              <p className="mt-12 text-primary font-bold italic border-l-4 border-secondary pl-6">
                "Practical skills change lives. Not theory alone. Not certificates alone."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolWhoWeAre;
