import { Compass, Target } from 'lucide-react';
import mentorshipImg from '../assets/students_mentorship.jfif';

const WelcomeWhy = () => {
  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image — clean, no card framing */}
          <div className="order-2 lg:order-1 relative">
            <img
              src={mentorshipImg}
              alt="Students and mentors at Welcome to College"
              className="w-full aspect-[4/5] object-cover rounded-3xl"
            />
            {/* subtle accent line, not a card */}
            <div className="absolute -bottom-5 left-8 right-8 h-1.5 bg-secondary rounded-full" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4">
              The Bridge to Your Future
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
              TRANSITION WITH <span className="text-secondary italic">CONFIDENCE</span>
            </h2>

            <div className="space-y-7 text-primary/70 text-lg leading-relaxed font-medium">
              <p>
                Too many students arrive at university unsure why they are there or where they are headed —
                drifting through courses, second-guessing their path, and unprepared for the demands of
                higher education.
              </p>

              <p className="text-primary font-black text-2xl">
                Welcome to College changes that.
              </p>

              {/* Conviction quote as a blockquote, not a card */}
              <blockquote className="border-l-4 border-secondary pl-6 italic text-primary/80">
                "The transition to university is one of the most critical pivots in a young person's life —
                we make sure you cross it with clarity and purpose."
              </blockquote>

              {/* Key points as a clean icon list (card-free) */}
              <div className="space-y-6 pt-4">
                <div className="flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Compass size={22} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight mb-1 text-primary">Career Clarity</h4>
                    <p className="text-base text-primary/60">
                      Identify your strengths and align your academic choices with your long-term goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight mb-1 text-primary">University Readiness</h4>
                    <p className="text-base text-primary/60">
                      Build the academic discipline and life skills you need to thrive — not just survive — on campus.
                    </p>
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
