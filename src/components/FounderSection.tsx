import founderImg from '../assets/founderelev8.jpeg';

const FounderSection = () => {
  return (
    <section className="py-24 bg-bg-light text-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img src={founderImg} alt="Baz Emmanuel Barzon" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold mb-1 text-secondary">Our Founder & Teamlead:</h3>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 uppercase leading-tight">Baz Emmanuel Barzon</h2>

            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
              <p className="font-semibold text-primary">
                Baz Emmanuel Barzon is a Liberian entrepreneur, speaker, and mentor driven by a single conviction:
                that societies transform when individuals begin to think differently about their potential.
              </p>
              <p>
                Through media platforms and public engagement, Baz speaks to the deeper questions of identity,
                leadership, and personal growth. He empowers young people navigating the complexities of the
                modern world to see themselves and their futures more clearly.
              </p>
              <p>
                Today, Baz leverages digital and public spaces to advance essential conversations around
                mindset, character, and character-driven leadership, helping others cut through the noise
                to achieve absolute clarity in their vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
