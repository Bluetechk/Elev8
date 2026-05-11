import { ArrowRight } from 'lucide-react';
import brandGallery1 from '../assets/brandsgalary.jpeg';
import brandGallery2 from '../assets/brandsgalary1.jpeg';

const MediaPartners = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700">
              <img src={brandGallery1} alt="Brands we work with 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700">
              <img src={brandGallery2} alt="Brands we work with 2" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-black text-primary leading-tight uppercase tracking-tighter">
                LET'S WORK <br />
                <span className="text-secondary">TOGETHER</span>
              </h2>
              <div className="w-24 h-2 bg-secondary rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Whether you are launching a new brand, refreshing an existing one, or looking for a reliable creative partner to help you grow — <span className="text-primary font-black">Elev8 Media</span> is ready to work with you.
            </p>

            <div className="p-8 bg-bg-light rounded-3xl border-l-8 border-secondary">
              <p className="text-primary text-xl font-bold italic">
                "Your brand deserves to be seen. Let us make sure it is."
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-secondary transition-all shadow-2xl hover:scale-105 active:scale-95 group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
