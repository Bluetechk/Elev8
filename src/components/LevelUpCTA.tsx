import { Users2, Handshake, Mail, MessageCircle } from 'lucide-react';

const LevelUpCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 max-w-6xl mx-auto">
          {/* Speakers Section */}
          <div className="relative p-12 bg-bg-light rounded-[3rem] overflow-hidden group">
            <div className="relative z-10">
              <Users2 className="text-secondary mb-6" size={40} />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Speakers & <span className="text-secondary italic">Facilitators</span></h3>
              <p className="text-primary/70 font-medium leading-relaxed mb-8">
                LEVEL UP features a carefully curated lineup of speakers — individuals selected for their stories, substance, and ability to speak directly to the aspirations of our audience.
              </p>
              <p className="text-xs font-black text-secondary uppercase tracking-[0.3em]">Coming October 2026</p>
            </div>
          </div>

          {/* Sponsorship Section */}
          <div className="relative p-12 bg-primary text-white rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#004D40] to-secondary opacity-20"></div>
            <div className="relative z-10">
              <Handshake className="text-secondary mb-6" size={40} />
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Sponsorship & <span className="text-secondary italic">Partnership</span></h3>
              <p className="text-white/70 font-medium leading-relaxed mb-8">
                Align your brand with one of Africa's most impactful annual events. We offer packages that provide meaningful visibility and direct access to emerging leaders.
              </p>
              <button className="flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                Contact Us About Sponsorship <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" 
                alt="Community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/60 to-primary"></div>
           </div>
           
           <div className="relative z-10">
             <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-12">
               COME READY <br /> <span className="text-secondary italic">TO RISE.</span>
             </h2>
             
             <div className="flex flex-wrap justify-center gap-6">
               <a href="https://forms.gle/YAU5suKTmrp8MYf86" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl">
                 Register Now
               </a>
               <button className="px-10 py-5 bg-white/10 text-white border-2 border-white/20 font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
                 Learn More
               </button>
             </div>

             <div className="mt-16 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors cursor-pointer">
                  <Mail size={16} /> Newsletter
                </div>
                <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors cursor-pointer">
                  <MessageCircle size={16} /> Follow Us
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpCTA;
