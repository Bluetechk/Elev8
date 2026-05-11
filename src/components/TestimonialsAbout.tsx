import { motion } from 'framer-motion';

const TestimonialsAbout = () => {
  return (
    <section className="py-24 bg-bg-light text-primary">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">What Our Founders Say</h3>
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tight text-primary">Client <span className="text-secondary">Testimonials</span></h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 max-w-5xl mx-auto rounded-xl shadow-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-black text-3xl shadow-xl">“</div>
          <p className="text-primary text-lg md:text-2xl font-medium leading-relaxed italic mb-8">
            "The Elev8 ecosystem represents business integrity at its highest standard. Being part of this vision has been the single most important investment I've made in my professional journey. The clarity, the network, and the strategic support have transformed not only my company but the way I lead."
          </p>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 text-secondary mb-2">
              {[...Array(5)].map((_, i) => <span key={i} className="text-xl text-secondary">★</span>)}
            </div>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">— client</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsAbout;
