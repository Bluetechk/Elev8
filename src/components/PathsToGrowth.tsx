const PathsToGrowth = () => {
  return (
    <section className="py-24 bg-bg-light text-primary">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-5xl mx-auto bg-white rounded-3xl p-12 md:p-20 shadow-2xl border border-primary/5 relative overflow-hidden"
        >
          {/* Subtle background accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
              Elev8 is a <span className="text-secondary">growth ecosystem</span> built to develop minds, equip skills, and amplify impact.
            </h2>

            <div className="space-y-8 text-primary/70 text-lg md:text-xl leading-relaxed">
              <p className="font-medium text-primary">
                We exist to empower individuals—especially young people—to think better, build better, and live better through learning, creativity, and opportunity.
              </p>

              <p>
                At Elev8, we believe that transformation happens at the intersection of knowledge, skill, and expression. That is why our work is structured across a comprehensive ecosystem of pillars and programs:
              </p>

              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Elev8 School of Skills</h4>
                  <p className="text-sm text-primary/60">Equipping individuals with practical, in-demand skills for real-world opportunities and income generation.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Elev8 Media</h4>
                  <p className="text-sm text-primary/60">Shaping narratives, building brands, and helping individuals and organizations communicate their ideas with clarity and creativity.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Elev8 Library</h4>
                  <p className="text-sm text-primary/60">Cultivating a culture of reading, thinking, and intellectual growth through access to books and community engagement.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-primary/10 space-y-6 italic">
                <p>Together, these initiatives form a system designed not just to educate—but to activate potential.

                </p>
              </div>

              <div className="pt-12 border-t border-primary/10">
                <p className="font-medium text-primary">
                  Beside our line of business we run social inpact programs that empower innovators, creatives, and entrepreneurs with the mindset, skills, and opportunities to build and thrive.
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-8">Our Social Impact Programs</p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4 border-l-4 border-accent pl-6">
                    <h4 className="text-xl font-black text-primary uppercase">Level Up Conference</h4>
                    <p className="text-sm text-primary/60">Our flagship annual online gathering designed to help individuals design—not drift through—their year with clarity and purpose.</p>
                  </div>

                  <div className="space-y-4 border-l-4 border-accent pl-6">
                    <h4 className="text-xl font-black text-primary uppercase">Welcome to College</h4>
                    <p className="text-sm text-primary/60">A career and life-readiness program held annually in August to equip high school graduates for a purposeful transition to university.</p>
                  </div>

                  <div className="space-y-4 border-l-4 border-accent pl-6">
                    <h4 className="text-xl font-black text-primary uppercase">Innov8 Afrika</h4>
                    <p className="text-sm text-primary/60">A forward-thinking conference dedicated to African entrepreneurs and innovators building solutions for the continent's future.</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-primary/10">
                <p className="font-bold text-primary italic">
                  We are building a generation that is informed, skilled, creative, and intentional—people who don’t just adapt to the future, but shape it.
                </p>
              </div>

              <div className="pt-8 text-center">
                <p className="text-2xl font-black text-primary uppercase tracking-tighter">
                  Elev8 isn’t just what we do. It’s <span className="text-secondary italic">who we are.</span>
                </p>
                <p className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mt-2">
                  We elevate, so you can rise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathsToGrowth;
