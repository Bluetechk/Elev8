import { Users, CreditCard, MapPin, ClipboardCheck, Phone } from 'lucide-react';

const LibraryMembership = () => {
  const categories = [
    "Students looking to invest in personal growth",
    "Young professionals expanding their thinking",
    "Entrepreneurs who read to lead better",
    "Parents cultivating a reading culture",
    "Anyone building a consistent reading habit"
  ];

  return (
    <section className="py-24 bg-white text-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          {/* Who Is It For */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight uppercase tracking-tight">
              WHO IS ELEV8 <br /> <span className="text-secondary italic">LIBRARY FOR?</span>
            </h2>
            <div className="space-y-4">
              {categories.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-bg-light transition-colors group">
                  <div className="mt-1">
                    <Users className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                  </div>
                  <p className="font-bold text-primary/80 leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-primary font-black italic border-l-4 border-secondary pl-6">
              "If you believe that the person you become is shaped by the books you read — Elev8 Library was built for you."
            </p>
          </div>

          {/* Become a Member */}
          <div className="w-full lg:w-1/2">
            <div className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
               
               <h3 className="text-3xl font-black uppercase tracking-tight mb-8">BECOME A <span className="text-secondary italic">MEMBER</span></h3>
               <p className="text-white/70 mb-10 font-medium leading-relaxed">
                 An annual membership gives you unlimited access to our collection for a full year. One decision. One payment. A full year of reading.
               </p>

               <div className="space-y-8">
                 <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Step 1: Visit Us</h4>
                     <p className="text-white/50 text-xs">At the Elev8 Inc. facility in Monrovia.</p>
                   </div>
                 </div>

                 <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                     <ClipboardCheck size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Step 2: Register</h4>
                     <p className="text-white/50 text-xs">Complete a simple membership form.</p>
                   </div>
                 </div>

                 <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                     <CreditCard size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Step 3: Subscribe</h4>
                     <p className="text-white/50 text-xs">Pay your annual subscription fee.</p>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6">
                 <button className="w-full sm:w-auto px-10 py-4 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-colors duration-300">
                   Join Now
                 </button>
                 <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                   <Phone size={14} />
                   Contact to Register
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryMembership;
