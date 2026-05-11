import { Quote } from 'lucide-react';

const testimonials = [
  {
    label: "Strategic Partner",
    content: "Elev8 Media transformed our brand from a local shop to a digital powerhouse. Their 60-Day Challenge was the catalyst we needed to reach customers we never thought possible. Their attention to detail in branding and social media is truly world-class."
  },
  {
    label: "Media Client",
    content: "The strategy and production quality from the Elev8 team is unmatched in Monrovia. They don't just create content; they build a narrative that resonates. Working with them has been one of our best business decisions this year."
  }
];

const MediaTestimonials = () => {
  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            CLIENT <span className="text-secondary italic">VOICES</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative bg-bg-light p-10 md:p-14 rounded-[3rem] border border-primary/5 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-primary shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <Quote size={40} />
              </div>

              <div className="relative z-10 space-y-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-primary/80 italic">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <p className="text-secondary font-black text-sm uppercase tracking-[0.3em]">{t.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaTestimonials;
