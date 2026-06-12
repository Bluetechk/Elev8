import { GraduationCap, ExternalLink, Mail } from 'lucide-react';

const SchoolEnrollBanner = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-bg-light rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden border border-primary/5 shadow-xl group hover:shadow-2xl transition-all duration-500">
          {/* Subtle background element */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <GraduationCap size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6">
              Ready to <span className="text-secondary italic">Enroll?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-primary/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              These are just a selection of the programs available at Elev8 School of Skills. We offer a full and growing portfolio of certificate courses across business, technology, creative arts, finance, and professional development.
              <br /><br />
              Visit the official Elev8 School of Skills website to explore our complete course catalog and find the program that is right for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="https://forms.gle/xPRiE5P1cfA7Zvo56" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg flex items-center gap-2">
                Register for a Course
              </a>
              
              <a 
                href="https://www.instagram.com/we_elev8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary border-2 border-primary/10 font-black uppercase tracking-widest rounded-xl hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                Instagram
                <ExternalLink size={18} />
              </a>
              
              <button className="px-8 py-4 bg-transparent text-primary/60 font-bold uppercase tracking-widest rounded-xl hover:text-primary transition-all duration-300 flex items-center gap-2 underline underline-offset-8">
                Contact Us
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolEnrollBanner;
