import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Samuel K.',
    role: 'Entrepreneur',
    initials: 'SK',
    avatarColor: '#00D084',
    quote:
      "The Elev8 program has been instrumental in helping me grow my business. It's the best program I've seen for someone who wants to scale but doesn't know how.",
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&faces&face',
  },
  {
    name: 'Sarah M.',
    role: 'Small Business Owner',
    initials: 'SM',
    avatarColor: '#0091FF',
    quote:
      "I found the Elev8 program incredibly helpful. Everything has been broken down into bite-sized chunks that can be easily digested and applied to my business. Thorough and covers all the main aspects.",
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'James T.',
    role: 'University Student',
    initials: 'JT',
    avatarColor: '#00D084',
    quote:
      "The Welcome to College program gave me the clarity and confidence I needed stepping into university. I wish I had this guidance earlier — it genuinely changed my trajectory.",
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Amara B.',
    role: 'Creative Professional',
    initials: 'AB',
    avatarColor: '#0091FF',
    quote:
      "Elev8 Media transformed how I present my brand. Their creative direction is world-class — they don't just create content, they craft narratives that connect.",
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section className="relative bg-primary text-white py-28 overflow-hidden">

      {/* Top notch */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] bg-[#E9EFED]"
        style={{ clipPath: 'polygon(calc(50% - 30px) 0, 50% 30px, calc(50% + 30px) 0)' }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        {/* Faint quote watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none leading-none">"</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-3 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            What People <span className="text-secondary">Say</span>
          </h2>
          <p className="text-white/40 mt-4 font-medium text-sm uppercase tracking-widest">
            Real stories. Real growth.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-between">

                  {/* Accent left bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-secondary to-accent rounded-r-full" />

                  {/* Large decorative quote */}
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(testimonials[active].stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-white/85 text-lg md:text-xl leading-relaxed font-medium italic flex-1">
                    "{testimonials[active].quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                    <div className="relative">
                      <img
                        src={testimonials[active].avatar}
                        alt={testimonials[active].name}
                        className="w-14 h-14 rounded-2xl object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center"
                        style={{ backgroundColor: testimonials[active].avatarColor }}
                      >
                        <span className="text-[8px] font-black text-white">✓</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-white text-base uppercase tracking-wide">
                        {testimonials[active].name}
                      </p>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 h-2 bg-secondary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 flex items-center justify-center text-secondary hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* All-stars strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-4"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                i === active
                  ? 'border-secondary/50 bg-secondary/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black"
                style={{ backgroundColor: t.avatarColor + '33', border: `1px solid ${t.avatarColor}55` }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-bold">{t.name}</p>
                <p className="text-white/40 text-[10px]">{t.role}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
