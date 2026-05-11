import { Lightbulb, Laptop, Calendar, Landmark, Library } from 'lucide-react';

const LibraryVision = () => {
  const goals = [
    { icon: Library, text: "Expand our collection significantly across all categories" },
    { icon: Laptop, text: "Introduce digital lending options beyond Monrovia" },
    { icon: Calendar, text: "Host reading events, author engagements, and book discussions" },
    { icon: Landmark, text: "Establish Elev8 Library as a recognized cultural destination" }
  ];

  return (
    <section className="py-24 bg-bg-light text-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/5 text-primary rounded-full font-bold text-xs uppercase tracking-widest border border-primary/10 mb-10">
            <Lightbulb size={16} className="text-secondary" />
            Our Vision for the Future
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
            QUALITY OVER <span className="text-secondary italic">VOLUME</span>
          </h2>
          
          <div className="space-y-8 text-primary/70 text-lg md:text-xl leading-relaxed font-medium mb-16">
            <p>
              Elev8 Library is still in its early stages — and we are intentional about how we grow it. We are not rushing to stock thousands of titles for the sake of volume. We are building a collection that is quality-driven, purpose-curated, and community-informed.
            </p>
            <p>
              Our vision for the library extends beyond lending and selling books. In the years ahead, we intend to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-sm border border-primary/5 hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary group-hover:bg-secondary transition-colors shrink-0">
                  <goal.icon size={24} />
                </div>
                <p className="font-bold text-primary/80 group-hover:text-primary transition-colors text-sm">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center italic text-primary/40 font-bold">
             "...let's make reading sexy again."
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryVision;
