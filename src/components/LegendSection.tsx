import legendImg from '../assets/Rajahkaul.JPG.jpeg';
import legendImg2 from '../assets/emmanuelCisco.jpeg'
const LegendSection = () => {
  return (
    <section className="min-h-screen flex items-center py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* The Impact Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
            The <span className="text-secondary">Impact</span> We're Making
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Since our inception, Elev8 has been instrumental in helping over a thousand youth and young professionals (combined) annually.
            Our alumni have gone on to build sustainable,
            high-growth enterprises that are making a real difference in their communities.
          </p>
        </div>

        {/* Legend Section */}
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto">
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">
              Inspired by <span className="text-secondary">Legends</span>
            </h2>
            <div className="space-y-8 text-white/70 text-lg leading-relaxed">
              <p>
                Our mission is inspired by people who came before us and have built empires from nothing, and are willing to pour into our cups. We believe that
                great businesses are built on a foundation of integrity, resilience, and a continue strive for excellence.
              </p>
              <p>
                We are dedicated to preserving these values while serving our clients and equipping the next generation of founders with
                the modern tools and strategies required to elevate their brands and businesses in a rapidly changing world.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-3/5 grid grid-cols-2 gap-8">
            {/* Legend 1: Rajah Kaul */}
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl group-hover:bg-secondary/40 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-secondary/50 transition-all duration-500 aspect-[4/5]">
                <img src={legendImg} alt="Rajah Kaul" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-4 left-4 z-20 right-4">
                <div className="bg-primary/80 backdrop-blur-md p-3 rounded-sm border-l-2 border-secondary">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                    Rajah Kaul
                  </p>
                  <p className="text-secondary/80 font-bold text-[8px] uppercase tracking-tighter leading-tight">
                    Founder Kaul 2 Action, Logos Venture LLC
                  </p>
                </div>
              </div>
            </div>

            {/* Legend 2: Emmanuel Cisco */}
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl group-hover:bg-secondary/40 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-secondary/50 transition-all duration-500 aspect-[4/5]">
                <img src={legendImg2} alt="Emmanuel Cisco" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute bottom-4 left-4 z-20 right-4">
                <div className="bg-primary/80 backdrop-blur-md p-3 rounded-sm border-l-2 border-secondary">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                    Emmanuel Cisco
                  </p>
                  <p className="text-secondary/80 font-bold text-[8px] uppercase tracking-tighter leading-tight">
                    Author and Motivational Speaker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendSection;
