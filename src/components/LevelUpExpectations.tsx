import { Mic2, Layout, Target } from 'lucide-react';

const LevelUpExpectations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">
              WHAT TO <span className="text-secondary italic">EXPECT</span>
            </h2>
            <p className="text-primary/60 font-bold uppercase tracking-widest text-xs">Transformative from the first session to the last.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Mic2 size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Powerful Keynotes</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Hear from thought leaders and innovators who bring hard-won wisdom and practical frameworks that challenge the status quo.</p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Layout size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Focused Breakouts</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Go deeper on specific topics that matter most. Interactive sessions giving you tools you can put to work immediately.</p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-bg-light text-primary rounded-2xl flex items-center justify-center border border-primary/5">
                 <Target size={28} />
              </div>
              <h4 className="text-xl font-black uppercase">Goal-Setting</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-medium">Practical life planning to ensure you don't just dream about a better year, but actually architect it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpExpectations;
