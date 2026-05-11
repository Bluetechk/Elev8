import { ArrowRight } from 'lucide-react';
import brandGallery1 from '../assets/brandsgalary.jpeg';
import brandGallery2 from '../assets/brandsgalary1.jpeg';

const MediaImpact = () => {
  const steps = [
    { title: "Discovery", desc: "We start by getting to know your business — your goals, your audience, your competitors, and your brand personality. We do not make assumptions; we ask the right questions." },
    { title: "Strategy", desc: "Based on what we learn, we develop a clear creative and marketing strategy tailored to your specific business objectives." },
    { title: "Production", desc: "Our creative team brings the strategy to life — designing, filming, photographing, writing, and building with precision and care." },
    { title: "Delivery & Review", desc: "We present our work, gather your feedback, and refine until you are fully satisfied with the output." },
    { title: "Ongoing Partnership", desc: "For clients on retainer or management contracts, we monitor performance, report results, and continuously optimize our approach to ensure your brand keeps growing." }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Part: Process vs Images */}
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
            {/* Process List */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                  Our <span className="text-secondary italic">Process</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  We believe great creative work begins with great understanding.
                </p>
              </div>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-secondary/30 flex items-center justify-center text-secondary font-black group-hover:bg-secondary group-hover:text-primary transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-secondary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Images */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src={brandGallery1} alt="Elev8 Media Brands" className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src={brandGallery2} alt="Elev8 Media Work" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Part: CTA */}
          <div className="pt-16 border-t border-white/10 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                LET'S WORK <span className="text-secondary">TOGETHER</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
                Whether you are launching a new brand, refreshing an existing one, or looking for a reliable creative partner to help you grow — Elev8 Media is ready to work with you.
              </p>
            </div>

            <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-xl">
              <p className="text-lg md:text-xl font-black italic text-secondary">
                "Your brand deserves to be seen. Let us make sure it is."
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95 group"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/elev8.media231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-white/10 transition-all shadow-xl hover:scale-105 active:scale-95 group"
              >
                Instagram Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaImpact;
