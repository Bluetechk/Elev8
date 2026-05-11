import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary relative text-white">
      {/* Notch with the color of the section ABOVE (Offerings/Light Gray) */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] bg-bg-light"
        style={{ clipPath: 'polygon(calc(50% - 30px) 0, 50% 30px, calc(50% + 30px) 0)' }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            CLIENT <span className="text-secondary">TESTIMONIALS</span>
          </h2>
          <p className="font-bold text-xs uppercase tracking-widest mt-2">Read our success stories</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-sm relative border-l-4 border-secondary shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center font-black text-primary italic text-xl">S</div>
              <div className="flex gap-1 text-white">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="white" />)}
              </div>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed italic">
              "The Elev8 program has been instrumental in helping me grow my business.
              It's the best program I've seen for someone who wants to scale their business but
              doesn't know how."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-sm relative border-l-4 border-secondary shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center font-black text-primary italic text-xl">S</div>
              <div className="flex gap-1 text-white">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="white" />)}
              </div>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed italic">
              "I have found the Elev8 program incredibly helpful. Everything has been broken
              down into bite-sized chunks that can be easily digested and applied to my business.
              The course is well thought out, thorough, and covers all the main aspects of a business."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
